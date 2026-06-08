"use client";

import { type FormEvent, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

type ContactField = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
};

type ContactFormStrings = {
  commentLabel: string;
  commentPlaceholder: string;
  consentText: string;
  consentError: string;
  submitHelperText: string;
  submitButton: string;
  submittingButton: string;
  submitError: string;
  networkError: string;
  successMessage: string;
};

type ContactFormProps = {
  fields: ContactField[];
  strings: ContactFormStrings;
};

export function ContactForm({ fields, strings }: ContactFormProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!consent) {
      setErrorMessage(strings.consentError);
      return;
    }

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      region: String(formData.get("region") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      comment: String(formData.get("comment") ?? ""),
      consent,
    };

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setErrorMessage(result.message ?? strings.submitError);
        return;
      }

      setSuccessMessage(strings.successMessage);
      event.currentTarget.reset();
      setConsent(false);
    } catch {
      setErrorMessage(strings.networkError);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isMounted) {
    return <div className="premium-panel p-6 sm:p-8" />;
  }

  return (
    <form className="premium-panel p-6 sm:p-8" onSubmit={onSubmit} data-lpignore="true" suppressHydrationWarning>
      <div className="grid gap-5 md:grid-cols-2" suppressHydrationWarning>
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm font-medium text-stone-200" suppressHydrationWarning>
            <span>{field.label}</span>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.name === "name" || field.name === "email" || field.name === "phone"}
              data-lpignore="true"
              data-form-type="other"
              className="h-12 rounded-2xl border border-[#d8b36a33] bg-stone-950/65 px-4 text-base text-stone-50 outline-none transition placeholder:text-stone-500 focus:border-[#d8b36a] focus:ring-4 focus:ring-[#d8b36a22]"
            />
          </label>
        ))}
        <label className="grid gap-2 text-sm font-medium text-stone-200 md:col-span-2" suppressHydrationWarning>
          <span>{strings.commentLabel}</span>
          <textarea
            name="comment"
            placeholder={strings.commentPlaceholder}
            rows={5}
            data-lpignore="true"
            data-form-type="other"
            className="rounded-2xl border border-[#d8b36a33] bg-stone-950/65 px-4 py-3 text-base text-stone-50 outline-none transition placeholder:text-stone-500 focus:border-[#d8b36a] focus:ring-4 focus:ring-[#d8b36a22]"
          />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 rounded-2xl border border-[#d8b36a33] bg-stone-950/45 px-4 py-4 text-sm leading-6 text-stone-300">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 size-4 rounded border-stone-500 text-[#d8b36a] focus:ring-[#d8b36a]"
        />
        <span>{strings.consentText}</span>
      </label>

      {successMessage ? (
        <p className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          {successMessage}
        </p>
      ) : null}

      {errorMessage ? (
        <p className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{errorMessage}</p>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-stone-400">{strings.submitHelperText}</p>
        <Button type="submit" size="lg" className="bg-[var(--luxury-gold)] px-8 text-stone-950 hover:bg-[#f0c978]" disabled={isSubmitting}>
          {isSubmitting ? strings.submittingButton : strings.submitButton}
        </Button>
      </div>
    </form>
  );
}
