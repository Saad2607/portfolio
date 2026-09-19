import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaSpinner, FaEnvelope } from "react-icons/fa";
import { personalInfo } from "../data/personalInfo";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botcheck: ""
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam honeypot check
    if (formData.botcheck) {
      return;
    }

    // Client validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, Message).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Send directly via Serverless API Function (/api/contact)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`,
          message: formData.message.trim(),
          botcheck: formData.botcheck
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", botcheck: "" });
      } else {
        throw new Error(data.message || "Failed to dispatch email. Please try again or email directly.");
      }
    } catch (err) {
      console.error("Contact Form Submission error:", err);
      setStatus("error");
      setErrorMessage(
        err.message || `Unable to send message right now. You can email me directly at ${personalInfo.email}`
      );
    }
  };

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-8 md:p-10 text-left shadow-md dark:shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Send a Message</h3>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20">
          Direct Inbox
        </span>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5 sm:mb-6">
        Have a project in mind, an internship opportunity, or want to discuss engineering? Let's connect.
      </p>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success-box"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-5 sm:p-8 rounded-2xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/20 text-center"
          >
            <FaCheckCircle className="text-emerald-600 dark:text-emerald-400 text-3xl sm:text-4xl mx-auto mb-3" />
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">Message Dispatched!</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 max-w-md mx-auto leading-relaxed">
              Thank you for reaching out. Your message has been sent to my inbox and I will get back to you promptly.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
              <button
                onClick={() => setStatus("idle")}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-sm text-center"
              >
                Send Another Message
              </button>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:text-white transition text-center"
              >
                <FaEnvelope className="text-xs text-blue-500" />
                <span>Open in Email App</span>
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Spam Honeypot */}
            <input
              type="checkbox"
              name="botcheck"
              checked={formData.botcheck}
              onChange={handleChange}
              className="hidden"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            {status === "error" && (
              <div className="p-3 sm:p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 dark:bg-rose-500/10 dark:border-rose-500/20 dark:text-rose-400 text-xs flex items-start gap-2.5">
                <FaExclamationCircle className="text-sm shrink-0 mt-0.5" />
                <div className="flex-1 leading-relaxed">
                  <span>{errorMessage}</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-slate-700 dark:text-slate-400 mb-1 font-medium">
                  Your Name <span className="text-blue-600 dark:text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  disabled={status === "loading"}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-slate-900 placeholder-slate-400 dark:bg-slate-950/70 dark:border-slate-800 dark:text-white dark:placeholder-slate-600 outline-none transition disabled:opacity-60"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-slate-700 dark:text-slate-400 mb-1 font-medium">
                  Your Email <span className="text-blue-600 dark:text-blue-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@example.com"
                  disabled={status === "loading"}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-slate-900 placeholder-slate-400 dark:bg-slate-950/70 dark:border-slate-800 dark:text-white dark:placeholder-slate-600 outline-none transition disabled:opacity-60"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-mono text-slate-700 dark:text-slate-400 mb-1 font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Full-Stack Opportunity / Project Inquiry"
                disabled={status === "loading"}
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-slate-900 placeholder-slate-400 dark:bg-slate-950/70 dark:border-slate-800 dark:text-white dark:placeholder-slate-600 outline-none transition disabled:opacity-60"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-slate-700 dark:text-slate-400 mb-1 font-medium">
                Message <span className="text-blue-600 dark:text-blue-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, role, or inquiry..."
                disabled={status === "loading"}
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-slate-900 placeholder-slate-400 dark:bg-slate-950/70 dark:border-slate-800 dark:text-white dark:placeholder-slate-600 outline-none transition resize-none disabled:opacity-60"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 transition shadow-lg shadow-blue-500/25 transform active:scale-[0.99] text-center"
            >
              {status === "loading" ? (
                <>
                  <FaSpinner className="animate-spin text-sm" />
                  <span>Transmitting Message...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane className="text-xs" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
