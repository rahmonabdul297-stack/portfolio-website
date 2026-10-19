import { Icon } from "@iconify/react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

/** HTML body for the inbox. */
function buildEmailHtml({ name, email, message }) {
  const safe = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  return message;
}

export default function Contact() {
  const accessKey = "f631ada8-dcd1-49bd-9163-be62a95354b7";
  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const closeForm = useCallback(() => {
    setFormOpen(false);
    setStatus("idle");
    setFeedback("");
  }, []);

  useEffect(() => {
    if (!formOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") closeForm();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [formOpen, closeForm]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!accessKey) {
      setFeedback("Please try again later!");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setFeedback("");
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio — message from ${name.trim()}`,
          from_name: "You have a new message!",
          name: name.trim(),
          email: email.trim(),
          replyto: email.trim(),
          message: buildEmailHtml({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
          }),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFeedback(
          "Message sent successfully — I'll get back to you shortly!"
        );
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setFeedback(data.message || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Network error. Check your connection and try again.");
    }
  }

  return (
    <section
      id="contact"
      className="py-24 lg:py-36 px-6 lg:px-8 relative overflow-hidden bg-[#FAF7F2] text-[#1A1A18] border-t border-[#E8E2D9]"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#2C5E3B 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-4xl bg-white mx-auto relative z-10 text-center border border-[#E8E2D9] p-12 lg:p-20 rounded-3xl shadow-sm">
        <div className="w-16 h-16 rounded-2xl border border-[#E8E2D9] bg-[#FAF7F2] flex items-center justify-center mx-auto mb-8 text-[#2C5E3B] shadow-sm">
          <Icon
            icon="solar:letter-linear"
            width={28}
            strokeWidth={1.5}
          />
        </div>

        <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6 text-[#1A1A18]">
          Ready to build something <br />
          <span className="italic font-normal text-[#2C5E3B]">extraordinary?</span>
        </h2>
        
        <p className="text-base text-[#666158] mb-10 max-w-lg mx-auto leading-relaxed">
          Currently accepting new full-stack applications and technical advisory roles. If you have a complex web software project in mind, let's connect.
        </p>

        <button
          type="button"
          className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-[#2C5E3B] text-white hover:bg-[#234B2F] transition-all duration-300 shadow-md"
          onClick={() => setFormOpen(true)}
        >
          Get in Touch
          <Icon
            icon="solar:arrow-right-linear"
            width={16}
            className="group-hover:translate-x-1 transition-transform"
            strokeWidth={1.5}
          />
        </button>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-[#666158] font-medium pt-8 border-t border-[#E8E2D9]">
          <span className="flex items-center gap-2">
            <Icon icon="solar:map-point-linear" width={18} className="text-[#2C5E3B]" />
            Based in Lagos, Nigeria
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8E2D9] hidden sm:block" />
          <span className="flex items-center gap-2">
            <Icon icon="solar:global-linear" width={18} className="text-[#2C5E3B]" />
            Working Globally
          </span>
        </div>

        {/* Modal Contact Dialog */}
        {formOpen &&
          createPortal(
            <div
              className="fixed inset-0 z-[9999] overflow-y-auto overflow-x-hidden overscroll-contain"
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-form-title"
            >
              <div className="flex min-h-screen w-full items-center justify-center p-4 sm:p-6 py-8 sm:py-10 [padding-bottom:max(2rem,env(safe-area-inset-bottom))]">
                <button
                  type="button"
                  className="fixed inset-0 z-0 bg-black/40 backdrop-blur-sm"
                  aria-label="Close contact form"
                  onClick={closeForm}
                />
                
                <div className="relative z-10 mx-auto w-full min-w-0 max-w-lg rounded-2xl border border-[#E8E2D9] bg-white shadow-2xl p-6 sm:p-10 text-left">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="min-w-0 pr-2">
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2C5E3B] mb-1">
                        Get In Touch
                      </p>
                      <h4
                        id="contact-form-title"
                        className="font-serif text-2xl font-bold text-[#1A1A18]"
                      >
                        Send a Message
                      </h4>
                    </div>
                    <button
                      type="button"
                      onClick={closeForm}
                      className="shrink-0 rounded-full p-2 text-[#666158] hover:text-[#1A1A18] hover:bg-[#FAF7F2] transition-colors"
                      aria-label="Close"
                    >
                      <Icon icon="solar:close-circle-linear" width={24} />
                    </button>
                  </div>

                  <form
                    className="flex flex-col gap-4 sm:gap-5"
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#666158] mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Yekini Abdulrahmon"
                        className="w-full rounded-xl bg-[#FAF7F2] border border-[#E8E2D9] px-4 py-3 text-sm text-[#1A1A18] focus:border-[#2C5E3B] focus:outline-none placeholder-[#666158]/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#666158] mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. name@company.com"
                        className="w-full rounded-xl bg-[#FAF7F2] border border-[#E8E2D9] px-4 py-3 text-sm text-[#1A1A18] focus:border-[#2C5E3B] focus:outline-none placeholder-[#666158]/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#666158] mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me about your project scope or opportunity..."
                        className="w-full rounded-xl bg-[#FAF7F2] border border-[#E8E2D9] px-4 py-3 text-sm text-[#1A1A18] focus:border-[#2C5E3B] focus:outline-none resize-none placeholder-[#666158]/50"
                      />
                    </div>

                    {feedback && (
                      <p
                        className={`text-xs font-semibold ${
                          status === "success"
                            ? "text-[#15803D]"
                            : "text-red-600"
                        }`}
                        role="status"
                      >
                        {feedback}
                      </p>
                    )}

                    <div className="flex items-center gap-3 pt-3 border-t border-[#E8E2D9]">
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="inline-flex items-center justify-center gap-2 w-1/2 rounded-xl px-6 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase bg-[#2C5E3B] text-white hover:bg-[#234B2F] transition-all duration-300 disabled:opacity-50"
                      >
                        {status === "sending" ? "Sending..." : "Send"}
                      </button>
                      <button
                        type="button"
                        onClick={closeForm}
                        className="w-1/2 rounded-xl border border-[#E8E2D9] bg-[#FAF7F2] px-6 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase text-[#666158] hover:bg-white hover:text-[#1A1A18] transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>,
            document.body
          )}
      </div>
    </section>
  );
}