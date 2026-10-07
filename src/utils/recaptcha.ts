import { useEffect } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;

/** Resolves a reCAPTCHA v3 token for the given action, or rejects if the widget isn't configured/loaded. */
export const getRecaptchaToken = (action: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!SITE_KEY) {
      reject(new Error("reCAPTCHA is not configured."));
      return;
    }
    if (!window.grecaptcha) {
      reject(new Error("reCAPTCHA hasn't finished loading. Please try again in a moment."));
      return;
    }
    window.grecaptcha.ready(() => {
      window
        .grecaptcha!.execute(SITE_KEY, { action })
        .then(resolve)
        .catch(() => reject(new Error("Unable to verify you're human. Please try again.")));
    });
  });
};

const SCRIPT_ID = "recaptcha-script";

/** Loads reCAPTCHA only on pages that submit a form, and shows its badge only while such a page is mounted. */
export const useRecaptcha = () => {
  useEffect(() => {
    if (!SITE_KEY) return;
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
      script.async = true;
      document.head.appendChild(script);
    }
    document.body.classList.add("recaptcha-active");
    return () => document.body.classList.remove("recaptcha-active");
  }, []);
};
