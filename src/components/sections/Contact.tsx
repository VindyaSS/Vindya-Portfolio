import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Phone, Mail, ExternalLink, AlertCircle, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolio';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const { contact } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  // Handle controlled input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Validate form fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    // Name validation
    if (!trimmedName) {
      newErrors.name = 'Please enter your name.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Subject validation
    if (!trimmedSubject) {
      newErrors.subject = 'Please enter a subject.';
    }

    // Message validation
    if (!trimmedMessage) {
      newErrors.message = 'Please enter your message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Send Message via WhatsApp Click-to-Chat
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    // Verbatim message format required:
    // Hello Vindya,
    // I am contacting you through your portfolio website.
    // Name: [Visitor Name]
    // Email: [Visitor Email]
    // Subject: [Visitor Subject]
    // Message:
    // [Visitor Message]
    const whatsappText = `Hello Vindya,\nI am contacting you through your portfolio website.\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nSubject: ${trimmedSubject}\nMessage:\n${trimmedMessage}`;

    // WhatsApp Click-to-Chat URL format with no '+', spaces, or leading zeros: 94701781329
    const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

    setSubmittedUrl(whatsappUrl);

    // Open WhatsApp in a new tab securely directly in submit handler
    const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Popup might be blocked, fallback link is shown in the UI
      console.warn('Popup blocked, fallback link available in UI.');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-6 sm:px-12 bg-white text-neutral-900 border-t border-neutral-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* ══════════════════════════════════════════════
            1. SECTION HEADING (Centered)
            ══════════════════════════════════════════════ */}
        <div className="text-center mb-14 sm:mb-20">
          <motion.span
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block text-xs sm:text-sm font-bold tracking-[0.28em] uppercase text-[#ADB394] font-display"
          >
            {contact.badge}
          </motion.span>
          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-neutral-900 tracking-tight mt-2"
          >
            {contact.heading}
          </motion.h2>
        </div>

        {/* ══════════════════════════════════════════════
            2. TWO-COLUMN RESPONSIVE LAYOUT
            ══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ──────────────────────────────────────────
              LEFT COLUMN — Contact Form (~60–65% width)
              ────────────────────────────────────────── */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#F7F8FA] border border-neutral-200/80 rounded-2xl p-6 sm:p-10 shadow-xs"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Row 1: Your Name & Your Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Your Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-neutral-700 mb-1.5 font-sans"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    placeholder="Your Name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className={`w-full bg-white px-4 py-3 sm:py-3.5 text-sm text-neutral-800 rounded-lg border transition-all duration-200 outline-none placeholder:text-neutral-400 ${
                      errors.name
                        ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-400'
                        : 'border-[#ADB394] focus:border-[#8e9573] focus:ring-1 focus:ring-[#ADB394]'
                    }`}
                  />
                  {errors.name && (
                    <p
                      id="contact-name-error"
                      className="text-xs text-red-500 mt-1.5 flex items-center gap-1"
                    >
                      <AlertCircle size={12} className="shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Your Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-neutral-700 mb-1.5 font-sans"
                  >
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder="Your Email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className={`w-full bg-white px-4 py-3 sm:py-3.5 text-sm text-neutral-800 rounded-lg border transition-all duration-200 outline-none placeholder:text-neutral-400 ${
                      errors.email
                        ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-400'
                        : 'border-[#ADB394] focus:border-[#8e9573] focus:ring-1 focus:ring-[#ADB394]'
                    }`}
                  />
                  {errors.email && (
                    <p
                      id="contact-email-error"
                      className="text-xs text-red-500 mt-1.5 flex items-center gap-1"
                    >
                      <AlertCircle size={12} className="shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold text-neutral-700 mb-1.5 font-sans"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                  className={`w-full bg-white px-4 py-3 sm:py-3.5 text-sm text-neutral-800 rounded-lg border transition-all duration-200 outline-none placeholder:text-neutral-400 ${
                    errors.subject
                      ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-400'
                      : 'border-[#ADB394] focus:border-[#8e9573] focus:ring-1 focus:ring-[#ADB394]'
                  }`}
                />
                {errors.subject && (
                  <p
                    id="contact-subject-error"
                    className="text-xs text-red-500 mt-1.5 flex items-center gap-1"
                  >
                    <AlertCircle size={12} className="shrink-0" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Row 3: Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-neutral-700 mb-1.5 font-sans"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={7}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className={`w-full bg-white px-4 py-3.5 text-sm text-neutral-800 rounded-lg border transition-all duration-200 outline-none placeholder:text-neutral-400 resize-y min-h-[180px] max-h-[360px] ${
                    errors.message
                      ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-400'
                      : 'border-[#ADB394] focus:border-[#8e9573] focus:ring-1 focus:ring-[#ADB394]'
                  }`}
                />
                {errors.message && (
                  <p
                    id="contact-message-error"
                    className="text-xs text-red-500 mt-1.5 flex items-center gap-1"
                  >
                    <AlertCircle size={12} className="shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Row 4: Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#ADB394] hover:bg-[#979d7e] active:scale-[0.98] text-white font-medium text-sm sm:text-base px-8 py-3 sm:py-3.5 rounded-lg transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5 inline-flex items-center justify-center"
                >
                  Send Message
                </button>
              </div>

              {/* WhatsApp Launch Feedback / Fallback */}
              {submittedUrl && (
                <div className="mt-4 p-4 rounded-xl bg-white border border-[#ADB394]/40 flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                  <CheckCircle2 size={18} className="text-[#8e9573] shrink-0 mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <p className="font-medium text-neutral-900">
                      WhatsApp chat opened with your message prefilled!
                    </p>
                    <p className="text-neutral-600 text-xs leading-relaxed">
                      Please confirm and send the message in WhatsApp.{' '}
                      <a
                        href={submittedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#6b7352] hover:underline font-semibold"
                      >
                        Click here if WhatsApp didn't open automatically
                        <ExternalLink size={12} />
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </form>
          </motion.div>

          {/* ──────────────────────────────────────────
              RIGHT COLUMN — Contact Details (~35–40% width)
              ────────────────────────────────────────── */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center space-y-7 sm:space-y-8 lg:pt-4"
          >
            {/* 1. Phone */}
            <div className="flex items-center gap-4 sm:gap-5 group">
              <div className="w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full bg-[#ADB394] flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-200">
                <Phone size={24} className="stroke-[2.2]" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-neutral-900 font-display text-base sm:text-lg mb-0.5">
                  Phone:
                </h4>
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="text-neutral-600 hover:text-black transition-colors text-sm sm:text-base font-normal"
                >
                  {contact.phoneDisplay}
                </a>
              </div>
            </div>

            {/* 2. Email */}
            <div className="flex items-center gap-4 sm:gap-5 group">
              <div className="w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full bg-[#ADB394] flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-200">
                <Mail size={24} className="stroke-[2.2]" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-neutral-900 font-display text-base sm:text-lg mb-0.5">
                  Email:
                </h4>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-neutral-600 hover:text-black transition-colors text-sm sm:text-base font-normal break-all"
                >
                  {contact.email}
                </a>
              </div>
            </div>

            {/* 3. GitHub */}
            <div className="flex items-center gap-4 sm:gap-5 group">
              <div className="w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full bg-[#ADB394] flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-200">
                <FaGithub size={24} />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-neutral-900 font-display text-base sm:text-lg mb-0.5">
                  GitHub:
                </h4>
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-black transition-colors text-sm sm:text-base font-normal inline-flex items-center gap-1.5"
                >
                  <span>{contact.githubDisplay}</span>
                  <ExternalLink size={13} className="text-neutral-400 group-hover:text-black" />
                </a>
              </div>
            </div>

            {/* 4. LinkedIn */}
            <div className="flex items-center gap-4 sm:gap-5 group">
              <div className="w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full bg-[#ADB394] flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-200">
                <FaLinkedinIn size={22} />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-neutral-900 font-display text-base sm:text-lg mb-0.5">
                  LinkedIn:
                </h4>
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-black transition-colors text-sm sm:text-base font-normal inline-flex items-center gap-1.5"
                >
                  <span>{contact.linkedinDisplay}</span>
                  <ExternalLink size={13} className="text-neutral-400 group-hover:text-black" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
