import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaSpinner } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setStatus("loading");

    // Simulate sending & generate instant mailto link if requested
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <div className="w-full rounded-3xl bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 md:p-10 text-left shadow-md dark:shadow-xl">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Send a Message</h3>
      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
        Have a project in mind, an internship opportunity, or want to discuss full-stack engineering? Let's connect.
      </p>

      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/20 text-center"
        >
          <FaCheckCircle className="text-emerald-600 dark:text-emerald-400 text-3xl mx-auto mb-3" />
          <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">Message Received!</h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="px-4 py-2 rounded-xl text-xs font-medium bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white transition"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 dark:bg-rose-500/10 dark:border-rose-500/20 dark:text-rose-400 text-xs flex items-center gap-2">
              <FaExclamationCircle className="text-sm shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-slate-700 dark:text-slate-400 mb-1.5 font-medium">
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
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-slate-900 placeholder-slate-400 dark:bg-slate-950/70 dark:border-slate-800 dark:text-white dark:placeholder-slate-600 outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-slate-700 dark:text-slate-400 mb-1.5 font-medium">
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
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-slate-900 placeholder-slate-400 dark:bg-slate-950/70 dark:border-slate-800 dark:text-white dark:placeholder-slate-600 outline-none transition"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-mono text-slate-700 dark:text-slate-400 mb-1.5 font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Full-Stack Role / Project Inquiry"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-slate-900 placeholder-slate-400 dark:bg-slate-950/70 dark:border-slate-800 dark:text-white dark:placeholder-slate-600 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono text-slate-700 dark:text-slate-400 mb-1.5 font-medium">
              Message <span className="text-blue-600 dark:text-blue-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or role..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-slate-900 placeholder-slate-400 dark:bg-slate-950/70 dark:border-slate-800 dark:text-white dark:placeholder-slate-600 outline-none transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 transition shadow-lg shadow-blue-500/25"
          >
            {status === "loading" ? (
              <>
                <FaSpinner className="animate-spin text-sm" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <FaPaperPlane className="text-xs" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
