"use client";

import { type FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

type ContactField = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
};

type ContactFormProps = {
  fields: ContactField[];
};

export function ContactForm({ fields }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!consent) {
      setErrorMessage("Подтвердите согласие на обработку персональных данных.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      country: String(formData.get("country") ?? ""),
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
        setErrorMessage(result.message ?? "Не удалось отправить сообщение.");
        return;
      }

      setSuccessMessage("Заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.");
      event.currentTarget.reset();
      setConsent(false);
    } catch {
      setErrorMessage("Ошибка сети. Проверьте подключение и попробуйте снова.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="premium-panel p-6 sm:p-8" onSubmit={onSubmit} data-lpignore="true" suppressHydrationWarning>
      <div className="grid gap-5 md:grid-cols-2" suppressHydrationWarning>
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm font-medium text-slate-700" suppressHydrationWarning>
            <span>{field.label}</span>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              data-lpignore="true"
              data-form-type="other"
              className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-base text-slate-950 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            />
          </label>
        ))}
        <label className="grid gap-2 text-sm font-medium text-slate-700 md:col-span-2" suppressHydrationWarning>
          <span>Comment</span>
          <textarea
            name="comment"
            placeholder="Коротко опишите ваш рынок, опыт и задачу"
            rows={5}
            data-lpignore="true"
            data-form-type="other"
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
          />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-4 text-sm leading-6 text-slate-700">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 size-4 rounded border-slate-300 text-blue-700 focus:ring-blue-400"
        />
        <span>Соглашаюсь на обработку персональных данных и обратную связь по моей заявке.</span>
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
        <p className="text-sm leading-6 text-slate-500">
          Нажимая кнопку, вы подтверждаете интерес к партнёрскому запуску и обратной связи от FluxCars.
        </p>
        <Button type="submit" size="lg" className="bg-blue-700 px-8 hover:bg-blue-800" disabled={isSubmitting}>
          {isSubmitting ? "Отправка..." : "Оставить заявку"}
        </Button>
      </div>
    </form>
  );
}
