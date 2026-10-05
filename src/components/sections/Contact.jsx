import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, MessageSquare, AlertCircle } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject';
    if (!formData.message.trim()) errs.message = 'Please enter a message';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (submitError) {
      setSubmitError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing. Please verify environment variables.');
      setSubmitError('Email service is currently unconfigured. Please check environment variables.');
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          to_email: 'tanishjangale050@gmail.com'
        },
        publicKey
      );

      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 85,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#E50914', '#FF2633', '#FF6B6B', '#FFFFFF']
      });
    } catch (error) {
      console.error('Failed to send email via EmailJS:', error);
      setSubmitError(error?.text || 'Failed to send message. Please try again or reach out directly.');
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 scroll-mt-20 bg-transparent transition-colors duration-300 overflow-hidden w-full max-w-full box-border">
      {/* Red ambient background flare strictly bounded */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] h-[90vw] max-h-[600px] bg-red-600/5 rounded-full blur-[170px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full box-border">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 dark:bg-red-950/40 border border-red-300 dark:border-red-500/30 text-red-600 dark:text-red-400 text-xs font-mono font-medium uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#E50914]" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight uppercase">
            LET'S BUILD <span className="bg-gradient-to-r from-[#E50914] to-[#FF4D4D] bg-clip-text text-transparent">SOMETHING GREAT.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
            Have an opportunity, an idea, or a project in mind? Let's discuss how we can engineer it together.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E50914] to-[#FF2633] rounded-full mt-4 shadow-[0_0_12px_rgba(229,9,20,0.6)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Connect & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/80 dark:bg-[#121212] p-8 rounded-3xl border border-zinc-200/80 dark:border-[#242424] shadow-xl dark:shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-md transition-colors">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                Reach Out Directly
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 font-normal">
                Whether you're exploring engineering collaborations, software roles, or emerging AI & cybersecurity initiatives, my inbox is always open.
              </p>

              {/* Email Copier Pill */}
              <div className="p-4 rounded-2xl bg-zinc-50/90 dark:bg-[#171717] border border-zinc-200 dark:border-[#282828] mb-6 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/40 flex items-center justify-center text-[#FF2633] flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase font-semibold">Direct Email</div>
                    <div className="text-xs sm:text-sm font-mono text-zinc-900 dark:text-white font-semibold truncate">
                      {personalInfo.socials.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-xl bg-zinc-200/70 hover:bg-zinc-300 dark:bg-[#222] dark:hover:bg-[#2a2a2a] text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white border border-zinc-300 dark:border-[#333] transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#E50914]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels */}
              <h4 className="text-xs font-mono font-bold tracking-widest text-red-600 dark:text-red-400 uppercase mb-3">
                Social Profiles & Networks
              </h4>

              <div className="space-y-3">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50/90 hover:bg-zinc-100/90 dark:bg-[#171717] dark:hover:bg-[#1E1E1E] border border-zinc-200 hover:border-red-400 dark:border-[#262626] dark:hover:border-red-500/40 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <Linkedin className="w-5 h-5 text-red-600 dark:text-red-400" />
                    <div>
                      <div className="text-xs font-semibold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        LinkedIn Profile
                      </div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Professional Network & Updates</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">→</span>
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50/90 hover:bg-zinc-100/90 dark:bg-[#171717] dark:hover:bg-[#1E1E1E] border border-zinc-200 hover:border-red-400 dark:border-[#262626] dark:hover:border-red-500/40 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <Github className="w-5 h-5 text-red-600 dark:text-red-400" />
                    <div>
                      <div className="text-xs font-semibold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        GitHub Repositories
                      </div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Verified Open Source Code</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/80 dark:bg-[#121212] p-8 sm:p-10 rounded-3xl border border-zinc-200/80 dark:border-[#242424] shadow-xl dark:shadow-[0_15px_40px_rgba(0,0,0,0.8)] relative overflow-hidden backdrop-blur-md transition-colors">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-red-100/90 dark:bg-red-950/40 border border-red-300 dark:border-red-500/40 flex items-center justify-center text-[#FF2633] mb-4 shadow-[0_0_20px_rgba(229,9,20,0.3)]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Message Received</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-md mb-6 leading-relaxed">
                    Thank you, <span className="text-zinc-900 dark:text-white font-semibold">{formData.name}</span>! Your message details have been validated.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSubmitError('');
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold text-zinc-900 dark:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-[#1F1F1F] dark:hover:bg-[#282828] border border-zinc-300 dark:border-[#333] transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div>
                      <label className="block text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 uppercase mb-1.5">
                        Your Name <span className="text-[#E50914]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#171717] border text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all ${
                          errors.name ? 'border-red-500 ring-2 ring-red-500/20' : 'border-zinc-300 dark:border-[#2B2B2B]'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-red-500 dark:text-red-400 font-mono">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 uppercase mb-1.5">
                        Email Address <span className="text-[#E50914]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#171717] border text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all ${
                          errors.email ? 'border-red-500 ring-2 ring-red-500/20' : 'border-zinc-300 dark:border-[#2B2B2B]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-500 dark:text-red-400 font-mono">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 uppercase mb-1.5">
                      Subject <span className="text-[#E50914]">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration / Opportunity"
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#171717] border text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all ${
                        errors.subject ? 'border-red-500 ring-2 ring-red-500/20' : 'border-zinc-300 dark:border-[#2B2B2B]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-[11px] text-red-500 dark:text-red-400 font-mono">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 uppercase mb-1.5">
                      Message <span className="text-[#E50914]">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, idea, or questions..."
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#171717] border text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all resize-none ${
                        errors.message ? 'border-red-500 ring-2 ring-red-500/20' : 'border-zinc-300 dark:border-[#2B2B2B]'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-red-500 dark:text-red-400 font-mono">{errors.message}</p>
                    )}
                  </div>

                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-red-100/90 dark:bg-red-950/40 border border-red-300 dark:border-red-500/40 text-red-700 dark:text-red-300 text-xs flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 text-red-500 dark:text-red-400 flex-shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#E50914] via-[#FF2633] to-[#c40811] hover:from-[#c40811] hover:to-[#E50914] shadow-[0_0_25px_rgba(229,9,20,0.4)] hover:shadow-[0_0_35px_rgba(229,9,20,0.7)] active:scale-[0.99] transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center">
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                      Client-side validated & ready for service integration.
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
