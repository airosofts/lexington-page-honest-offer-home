"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { getOrCreateSessionId } from "@/lib/session";
import { useAddressAutocomplete } from "@/lib/useAddressAutocomplete";

type Step = 1 | 2 | 3;

type FormState = {
  address: string;
  propertyType: string;
  phone: string;
  condition: string;
  timeline: string;
  name: string;
  email: string;
};

const INITIAL: FormState = {
  address: "",
  propertyType: "Single-family home",
  phone: "",
  condition: "",
  timeline: "",
  name: "",
  email: "",
};

const CONDITION_CHOICES = [
  { value: "move-in", label: "Move-in ready" },
  { value: "minor", label: "Minor repairs" },
  { value: "major", label: "Needs major work" },
  { value: "tear-down", label: "Tear-down" },
];

const TIMELINE_CHOICES = [
  { value: "asap", label: "ASAP" },
  { value: "30", label: "Within 30 days" },
  { value: "90", label: "1–3 months" },
  { value: "exploring", label: "Just exploring" },
];

function fireEvent(name: string, params?: Record<string, string | number>) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") gtag("event", name, { event_category: "form", ...params });
}

function maskPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length > 6)
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  if (digits.length > 3) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  if (digits.length > 0) return `(${digits}`;
  return "";
}

export default function LeadForm() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [mondayItemId, setMondayItemId] = useState<string>("");
  const addressRef = useRef<HTMLInputElement | null>(null);

  useAddressAutocomplete(addressRef, (formatted) => {
    setValues((v) => ({ ...v, address: formatted }));
    setErrors((e) => ({ ...e, address: "" }));
  });

  // Persist session id once on mount (SSR-safe)
  const [sessionId, setSessionId] = useState<string>("");
  useEffect(() => {
    setSessionId(getOrCreateSessionId());
  }, []);

  async function saveStep(
    currentStep: 1 | 2 | 3,
    payload: Partial<FormState>
  ): Promise<{ ok: boolean; mondayItemId?: string }> {
    if (!sessionId) return { ok: true };
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({
          sessionId,
          step: currentStep,
          ...(mondayItemId ? { mondayItemId } : {}),
          ...payload,
        }),
      });
      if (!res.ok) return { ok: false };
      const data = (await res.json()) as { success: boolean; mondayItemId?: string };
      return { ok: true, mondayItemId: data.mondayItemId };
    } catch {
      return { ok: false };
    }
  }

  async function handleNext(from: Step) {
    if (from === 1) {
      const next: Record<string, string> = {};
      if (!values.address.trim()) next.address = "Address is required";
      if (values.phone.replace(/\D/g, "").length < 10)
        next.phone = "Enter a 10-digit phone";
      if (Object.keys(next).length) {
        setErrors(next);
        return;
      }
      setErrors({});
      setSubmitting(true);
      const result = await saveStep(1, {
        address: values.address,
        phone: values.phone,
      });
      if (result.mondayItemId) setMondayItemId(result.mondayItemId);
      setSubmitting(false);
      fireEvent("form_step_1_complete", { step: 1 });
      setStep(2);
      return;
    }

    if (from === 2) {
      setErrors({});
      setSubmitting(true);
      await saveStep(2, {
        condition: values.condition,
        timeline: values.timeline,
      });
      setSubmitting(false);
      fireEvent("form_step_2_complete", { step: 2, condition: values.condition, timeline: values.timeline });
      setStep(3);
      return;
    }
  }

  async function handleFinalSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = "Name is required";
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await saveStep(3, {
      name: values.name,
      email: values.email,
      propertyType: values.propertyType,
    });
    fireEvent("form_step_3_complete", { step: 3 });
    router.push("/offer-request-confirmed");
  }

  function handleBack(to: Step) {
    setErrors({});
    setStep(to);
  }

  function selectChoice(
    field: "condition" | "timeline",
    value: string
  ): void {
    setValues((v) => ({ ...v, [field]: value }));
  }

  return (
    <div className="form-card" id="offer-form">
      <div className="form-header">
        <h3>Get your fair cash offer</h3>
        <p>Takes 60 seconds. No obligation.</p>
      </div>

      <div
        className="progress"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={3}
        aria-valuenow={Math.min(step, 3)}
      >
        <div
          className={`progress-step ${step === 1 ? "active" : step > 1 ? "done" : ""}`}
        />
        <div
          className={`progress-step ${step === 2 ? "active" : step > 2 ? "done" : ""}`}
        />
        <div
          className={`progress-step ${step === 3 ? "active" : step > 3 ? "done" : ""}`}
        />
      </div>

      <form onSubmit={handleFinalSubmit} noValidate autoComplete="on">
        {/* Step 1 */}
        <div className={`step ${step === 1 ? "active" : ""}`}>
          <div className="field">
            <label htmlFor="address">
              Property Address <span className="req">*</span>
            </label>
            <input
              className="input"
              type="text"
              id="address"
              ref={addressRef}
              placeholder="Start typing your address…"
              autoComplete="street-address"
              value={values.address}
              onChange={(e) =>
                setValues((v) => ({ ...v, address: e.target.value }))
              }
              style={
                errors.address ? { borderColor: "var(--barn)" } : undefined
              }
            />
          </div>
          <div className="field">
            <label htmlFor="phone-early">
              Phone <span className="req">*</span>
            </label>
            <input
              className="input"
              type="tel"
              id="phone-early"
              placeholder="(555) 555-1234"
              autoComplete="tel"
              inputMode="tel"
              value={values.phone}
              onChange={(e) =>
                setValues((v) => ({ ...v, phone: maskPhone(e.target.value) }))
              }
              style={
                errors.phone ? { borderColor: "var(--barn)" } : undefined
              }
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            disabled={submitting}
            onClick={() => handleNext(1)}
          >
            Next: About Your House
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        {/* Step 2 */}
        <div className={`step ${step === 2 ? "active" : ""}`}>
          <div className="field">
            <label>How would you describe the condition?</label>
            <div className="choice-grid">
              {CONDITION_CHOICES.map((c) => (
                <div
                  key={c.value}
                  className={`choice ${values.condition === c.value ? "selected" : ""}`}
                  onClick={() => selectChoice("condition", c.value)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      selectChoice("condition", c.value);
                  }}
                >
                  <span className="choice-dot" />
                  {c.label}
                </div>
              ))}
            </div>
          </div>
          <div className="field">
            <label>When are you hoping to sell?</label>
            <div className="choice-grid">
              {TIMELINE_CHOICES.map((c) => (
                <div
                  key={c.value}
                  className={`choice ${values.timeline === c.value ? "selected" : ""}`}
                  onClick={() => selectChoice("timeline", c.value)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      selectChoice("timeline", c.value);
                  }}
                >
                  <span className="choice-dot" />
                  {c.label}
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            disabled={submitting}
            onClick={() => handleNext(2)}
          >
            Next: Where to Send Offer
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <div className="form-foot">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => handleBack(1)}
            >
              ← Back
            </button>
            <span className="microcopy" style={{ margin: 0 }}>
              Step 2 of 3
            </span>
          </div>
        </div>

        {/* Step 3 — phone intentionally omitted; already captured in step 1 */}
        <div className={`step ${step === 3 ? "active" : ""}`}>
          <div className="field">
            <label htmlFor="name">
              Your Name <span className="req">*</span>
            </label>
            <input
              className="input"
              type="text"
              id="name"
              autoComplete="name"
              placeholder="First and last"
              value={values.name}
              onChange={(e) =>
                setValues((v) => ({ ...v, name: e.target.value }))
              }
              style={errors.name ? { borderColor: "var(--barn)" } : undefined}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              className="input"
              type="email"
              id="email"
              autoComplete="email"
              placeholder="you@email.com"
              value={values.email}
              onChange={(e) =>
                setValues((v) => ({ ...v, email: e.target.value }))
              }
            />
          </div>
          <div className="field">
            <label htmlFor="property-type">Property Type</label>
            <select
              className="input"
              id="property-type"
              value={values.propertyType}
              onChange={(e) =>
                setValues((v) => ({ ...v, propertyType: e.target.value }))
              }
            >
              <option>Single-family home</option>
              <option>Townhouse / condo</option>
              <option>Multi-family (2-4 units)</option>
              <option>Mobile / manufactured</option>
              <option>Vacant land</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={submitting}
          >
            Get My Fair Cash Offer
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <div className="form-foot">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => handleBack(2)}
            >
              ← Back
            </button>
            <span className="microcopy" style={{ margin: 0 }}>
              Step 3 of 3
            </span>
          </div>
          <div className="microcopy" style={{ marginTop: 16 }}>
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              We never share your info. No obligation.
            </span>
          </div>
        </div>

      </form>
    </div>
  );
}
