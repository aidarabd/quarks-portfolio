"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-[#080d1a] border border-[#1e2d47] rounded-2xl p-10 flex flex-col items-center justify-center min-h-[420px] text-center">
        <div className="w-16 h-16 bg-green-500/15 border border-green-500/30 rounded-2xl flex items-center justify-center mb-5">
          <span className="text-green-400 text-2xl font-bold">✓</span>
        </div>
        <h3 className="text-white font-bold text-xl mb-3">{t("sentTitle")}</h3>
        <p className="text-slate-400 leading-relaxed max-w-sm">{t("sentBody")}</p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-[#03060f] border border-[#1e2d47] focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 outline-none transition-colors";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#080d1a] border border-[#1e2d47] rounded-2xl p-8 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">
            {t("fullName")} <span className="text-blue-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder={t("namePlaceholder")}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">
            {t("email")} <span className="text-blue-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder={t("emailPlaceholder")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">
            {t("phone")}
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder={t("phonePlaceholder")}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">
            {t("company")}
          </label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder={t("companyPlaceholder")}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-slate-300 text-sm font-medium mb-2">
          {t("helpWith")} <span className="text-blue-400">*</span>
        </label>
        <select
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>
            {t("selectTopic")}
          </option>
          <option value="automation">{t("topicAutomation")}</option>
          <option value="webapp">{t("topicWebapp")}</option>
          <option value="integration">{t("topicIntegration")}</option>
          <option value="government">{t("topicGovernment")}</option>
          <option value="other">{t("topicOther")}</option>
        </select>
      </div>

      <div>
        <label className="block text-slate-300 text-sm font-medium mb-2">
          {t("projectLabel")} <span className="text-blue-400">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder={t("projectPlaceholder")}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/30 rounded-xl py-3 px-4">
          {t("errorBody")}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white py-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
      >
        {status === "sending" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            {t("sending")}
          </>
        ) : (
          <>
            {t("send")}
            <Send size={15} />
          </>
        )}
      </button>

      <p className="text-slate-600 text-xs text-center">{t("footnote")}</p>
    </form>
  );
}
