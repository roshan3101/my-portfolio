"use client";

import { contactContent } from "@/content/home-sections/home";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      setSubmitted(true);
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="bg-white border-4 border-black shadow-hard-xl p-8 md:p-12 relative reveal mt-12">
        <div className="absolute -top-10 -left-6 bg-neo-yellow border-4 border-black px-6 py-2 shadow-hard rotate-[-5deg]">
          <span className="font-black text-2xl">START A PROJECT</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-6xl font-black uppercase mb-6 leading-[0.85]">
              Let&apos;s
              <br />
              Talk
              <br />
              Code.
            </h2>
            <p className="font-mono text-lg mb-8 text-gray-600">
              {contactContent.description}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black">
                  <i className="ri-mail-line text-xl"></i>
                </div>
                <a
                  href={`mailto:${contactContent.email}`}
                  className="text-xl font-bold hover:bg-neo-blue cursor-hover"
                >
                  {contactContent.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black">
                  <i className="ri-map-pin-line text-xl"></i>
                </div>
                <span className="text-xl font-bold">{contactContent.location}</span>
              </div>
            </div>
          </div>

          <form id="contact-form" className="space-y-6 bg-gray-50 p-6 border-2 border-black" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="py-20 text-center">
                <i className="ri-checkbox-circle-fill text-6xl text-neo-green mb-4 block"></i>
                <h3 className="text-2xl font-black uppercase">Transmission Received</h3>
                <p className="font-mono text-sm mt-2">
                  System response initialized. I will reach out shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="flex flex-col">
                  <label className="font-mono font-bold mb-1 uppercase text-xs">Identity</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, name: event.target.value }))
                    }
                    placeholder="NAME / COMPANY"
                    required
                    className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all cursor-hover"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-mono font-bold mb-1 uppercase text-xs">Coordinates</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, email: event.target.value }))
                    }
                    placeholder="EMAIL ADDRESS"
                    required
                    className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all cursor-hover"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-mono font-bold mb-1 uppercase text-xs">Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, company: event.target.value }))
                    }
                    placeholder="COMPANY (OPTIONAL)"
                    className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all cursor-hover"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-mono font-bold mb-1 uppercase text-xs">Transmission</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, message: event.target.value }))
                    }
                    placeholder="PROJECT DETAILS..."
                    required
                    className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all resize-none cursor-hover"
                  ></textarea>
                </div>
                {error && (
                  <p className="font-mono text-sm text-neo-red border-2 border-neo-red p-2 bg-red-50">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-neo-blue text-white font-black text-xl py-4 border-2 border-black shadow-hard neo-button hover:bg-neo-black hover:translate-y-1 hover:shadow-none transition-all cursor-hover"
                >
                  {submitting ? "TRANSMITTING..." : "TRANSMIT DATA"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
