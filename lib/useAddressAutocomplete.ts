"use client";

import { useEffect, useRef } from "react";

// Minimal shape we need — avoids pulling @types/google.maps.
type PlaceLike = { formatted_address?: string };
type AutocompleteLike = {
  addListener: (eventName: string, handler: () => void) => void;
  getPlace: () => PlaceLike;
};
type AutocompleteCtor = new (
  input: HTMLInputElement,
  opts: Record<string, unknown>
) => AutocompleteLike;

declare global {
  interface Window {
    google?: {
      maps?: {
        places?: {
          Autocomplete: AutocompleteCtor;
        };
      };
    };
    __hoPlacesLoader__?: Promise<void>;
  }
}

const SCRIPT_ID = "ho-google-places";

function loadPlacesScript(apiKey: string): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.google?.maps?.places) return Promise.resolve();
  if (window.__hoPlacesLoader__) return window.__hoPlacesLoader__;

  window.__hoPlacesLoader__ = new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("places script failed")));
      return;
    }
    const s = document.createElement("script");
    s.id = SCRIPT_ID;
    s.async = true;
    s.defer = true;
    s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places`;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("places script failed"));
    document.head.appendChild(s);
  });

  return window.__hoPlacesLoader__;
}

/**
 * Attaches Google Places Autocomplete to an input ref.
 * Fires `onSelect(formattedAddress)` when the user picks a suggestion.
 */
export function useAddressAutocomplete(
  inputRef: React.RefObject<HTMLInputElement | null>,
  onSelect: (formatted: string) => void
) {
  const acRef = useRef<AutocompleteLike | null>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
    if (!apiKey || !inputRef.current) return;

    let cancelled = false;

    loadPlacesScript(apiKey)
      .then(() => {
        if (cancelled) return;
        const ctor = window.google?.maps?.places?.Autocomplete;
        if (!ctor || !inputRef.current) return;

        acRef.current = new ctor(inputRef.current, {
          types: ["address"],
          componentRestrictions: { country: "us" },
          fields: ["formatted_address"],
        });

        acRef.current.addListener("place_changed", () => {
          const place = acRef.current?.getPlace();
          if (place?.formatted_address) onSelect(place.formatted_address);
        });
      })
      .catch(() => {
        // Soft-fail: user can still type the address manually.
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
