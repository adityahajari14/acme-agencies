import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const LOGO_URL = "/logo.jpg";
const CONTACT_EMAIL = 'info.acmeagencies@gmail.com';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({ type: 'idle', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const createMailtoHref = ({ name, email, phone, message }) => {
    const subject = encodeURIComponent(`New enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };

    const phonePattern = /^\+?[0-9\s()-]{8,20}$/;
    if (!phonePattern.test(payload.phone)) {
      setSubmitState({
        type: 'error',
        message: 'Please enter a valid contact number with country code.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitState({ type: 'idle', message: '' });

    try {
      if (!WEB3FORMS_ACCESS_KEY) {
        throw new Error('Web3Forms key is missing.');
      }

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...payload,
          subject: `New Website Enquiry - ${payload.name}`,
          from_name: 'Acme Agencies Website',
          botcheck: '',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to submit the form right now.');
      }

      setFormData(initialFormData);
      setSubmitState({
        type: 'success',
        message: 'Thanks! Your message has been sent. We will get back to you shortly.',
      });
    } catch {
      window.location.href = createMailtoHref(payload);
      setSubmitState({
        type: 'success',
        message: 'Could not send via Web3Forms. Opening your email app as a fallback.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <FadeIn>
              <p className="text-[#6e293a] tracking-[0.3em] uppercase text-xs font-medium mb-4">Get In Touch</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-[1.15] mb-6">
                <motion.span
                  className="text-white whitespace-nowrap"
                  animate={{ color: ['#ffffff', '#f5f0ec', '#ffffff'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Refine. Expand. Scale.
                </motion.span>
                <br />
                <motion.span
                  animate={{ color: ['#a6717a', '#f5f0ec', '#a6717a'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Let's do it together.
                </motion.span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-white/50 leading-relaxed font-light mb-10 max-w-md">
                Whether you're launching a new brand, scaling an existing one, or need strategic 
                direction — we'd love to hear from you.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="space-y-5">
                <a href="tel:+919425036377" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center group-hover:bg-[#6e293a] transition-colors duration-300">
                    <Phone size={18} className="text-[#a6717a] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider">Phone</p>
                    <p className="text-white font-light">+91-94250 36377</p>
                  </div>
                </a>

                <a href="mailto:info.acmeagencies@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center group-hover:bg-[#6e293a] transition-colors duration-300">
                    <Mail size={18} className="text-[#a6717a] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider">Email</p>
                    <p className="text-white font-light">info.acmeagencies@gmail.com</p>
                  </div>
                </a>

                <div className="flex gap-3 pt-4">
                  <a href="https://www.instagram.com/acme.agencies?igsh=MWx1cHVneGF4NmZlOQ==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-[#6e293a] hover:bg-[#6e293a] group transition-all duration-300">
                    <Instagram size={18} className="text-white/60 group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a href="https://www.linkedin.com/company/acme-agencies/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-[#6e293a] hover:bg-[#6e293a] group transition-all duration-300">
                    <Linkedin size={18} className="text-white/60 group-hover:text-white transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 md:p-10">
              <h3 className="text-xl font-medium text-white mb-6 tracking-tight">Send us a message</h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#6e293a]/20"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#6e293a]/20"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Contact Number (with country code, e.g. +91)"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#6e293a]/20"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your brand and what you're looking for..."
                    required
                    disabled={isSubmitting}
                    className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#6e293a]/20 resize-none"
                  />
                </div>
                {submitState.message && (
                  <p
                    className={`text-sm ${
                      submitState.type === 'error' ? 'text-red-300' : 'text-emerald-300'
                    }`}
                  >
                    {submitState.message}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#6e293a] text-white rounded-xl text-sm tracking-wide hover:bg-[#5a2130] disabled:opacity-70 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowUpRight size={16} />
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-28 pt-10 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Acme Agencies" className="h-8 w-8 rounded-full object-cover" />
            <span className="text-sm font-medium text-white">Acme Agencies</span>
          </div>
          <p className="text-xs text-white/40">© 2026 Acme Agencies. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}