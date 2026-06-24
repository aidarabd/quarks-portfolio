"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
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
    // TODO: replace with your email service (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="bg-[#080d1a] border border-[#1e2d47] rounded-2xl p-10 flex flex-col items-center justify-center min-h-[420px] text-center">
        <div className="w-16 h-16 bg-green-500/15 border border-green-500/30 rounded-2xl flex items-center justify-center mb-5">
          <span className="text-green-400 text-2xl font-bold">✓</span>
        </div>
        <h3 className="text-white font-bold text-xl mb-3">Message Sent</h3>
        <p className="text-slate-400 leading-relaxed max-w-sm">
          Thank you for reaching out. We&apos;ll review your message and get
          back to you within one business day.
        </p>
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
            Full Name <span className="text-blue-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">
            Email <span className="text-blue-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-slate-300 text-sm font-medium mb-2">
          Company / Organization
        </label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Your organization"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-slate-300 text-sm font-medium mb-2">
          What can we help with? <span className="text-blue-400">*</span>
        </label>
        <select
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>
            Select a topic
          </option>
          <option value="automation">Process Automation</option>
          <option value="webapp">Custom Web Application</option>
          <option value="integration">System Integration</option>
          <option value="government">Government Digital Solutions</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label className="block text-slate-300 text-sm font-medium mb-2">
          Tell us about your project <span className="text-blue-400">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe the problem you're trying to solve, your current workflow, and any timeline or scale requirements..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white py-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
      >
        {status === "sending" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={15} />
          </>
        )}
      </button>

      <p className="text-slate-600 text-xs text-center">
        We respond to all inquiries within one business day.
      </p>
    </form>
  );
}
