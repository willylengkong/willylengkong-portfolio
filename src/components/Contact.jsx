import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMail, FiGithub, FiLinkedin, FiArrowUpRight, FiCheckCircle, FiBriefcase } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const fallbackToMailto = () => {
    const subject = encodeURIComponent(formData.subject || `Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setStatusMessage(`Opening your email client to dispatch message to ${personalInfo.email}...`);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 9000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'b0fa23ea-5372-422f-965c-298b5d78c659';

    // If access key is not yet set, use fallback mail client
    if (!accessKey) {
      fallbackToMailto();
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          from_name: 'Willy Lengkong Portfolio',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusMessage(`Pesan berhasil terkirim langsung ke ${personalInfo.email}! Terima kasih telah menghubungi.`);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 9000);
      } else {
        fallbackToMailto();
      }
    } catch {
      fallbackToMailto();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const touchLinks = [
    {
      name: 'Email',
      description: 'Professional inquiries',
      href: `mailto:${personalInfo.email}`,
      icon: <FiMail size={18} />,
      isExternal: false,
    },
    {
      name: 'LinkedIn',
      description: 'Career & experience',
      href: personalInfo.linkedin,
      icon: <FiLinkedin size={18} />,
      isExternal: true,
    },
    {
      name: 'GitHub',
      description: 'Projects & code',
      href: personalInfo.github,
      icon: <FiGithub size={18} />,
      isExternal: true,
    },
    {
      name: 'WhatsApp',
      description: 'Direct contact',
      href: personalInfo.whatsapp,
      icon: <FaWhatsapp size={18} />,
      isExternal: true,
    },
  ];

  return (
    <section
      id="contact"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div
            style={{
              color: '#60a5fa',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: '8px',
            }}
          >
            Connect
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.6rem)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.025em',
            }}
          >
            Let's Collaborate
          </h2>
          <p
            style={{
              color: '#94a3b8',
              fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
              marginTop: '12px',
              maxWidth: '560px',
              margin: '12px auto 0',
              lineHeight: 1.6,
            }}
          >
            Open to opportunities and collaborations in data, analytics, automation, and technology.
          </p>
        </div>

        {/* Form and Info Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '32px',
          }}
        >
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-form-col"
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Row 1: Full Name & Email side-by-side */}
              <div className="contact-two-col">
                <div className="contact-field-group">
                  <label htmlFor="name" className="contact-label">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="contact-input"
                  />
                </div>

                <div className="contact-field-group">
                  <label htmlFor="email" className="contact-label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="contact-input"
                  />
                </div>
              </div>

              {/* Row 2: Subject (Optional) */}
              <div className="contact-field-group">
                <label htmlFor="subject" className="contact-label">
                  Subject (Optional)
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="contact-input"
                />
              </div>

              {/* Row 3: Message */}
              <div className="contact-field-group">
                <label htmlFor="message" className="contact-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  className="contact-textarea"
                />
              </div>

              {/* Row 4: Submit Button (Left-aligned white button) */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="contact-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <span
                      style={{
                        width: '15px',
                        height: '15px',
                        border: '2px solid rgba(0, 0, 0, 0.2)',
                        borderTopColor: '#0a0a0a',
                        borderRadius: '50%',
                        display: 'inline-block',
                        animation: 'spin 0.6s linear infinite',
                      }}
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend size={15} style={{ strokeWidth: 2 }} />
                  </>
                )}
              </button>
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    marginTop: '20px',
                    padding: '14px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(59, 130, 246, 0.12)',
                    border: '1px solid rgba(59, 130, 246, 0.35)',
                    color: '#93c5fd',
                    fontSize: '0.825rem',
                    textAlign: 'center',
                    fontFamily: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                >
                  <FiCheckCircle size={16} style={{ color: '#60a5fa', flexShrink: 0 }} />
                  <span>{statusMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Side: GET IN TOUCH */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="contact-info-col"
          >
            <h3 className="get-in-touch-heading">
              Get In Touch
            </h3>

            <div className="get-in-touch-grid">
              {touchLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  className="contact-touch-item"
                >
                  <div className="contact-touch-icon-box">
                    {item.icon}
                  </div>
                  <div className="contact-touch-content">
                    <div className="contact-touch-title-row">
                      <span className="contact-touch-name">{item.name}</span>
                      <FiArrowUpRight className="contact-touch-arrow" size={15} />
                    </div>
                    <p className="contact-touch-desc">{item.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Available for Work below GET IN TOUCH icons */}
            <div className="contact-available-item">
              <div className="contact-touch-icon-box">
                <FiBriefcase size={18} />
              </div>
              <div className="contact-available-content">
                <span className="contact-available-label">AVAILABLE FOR WORK</span>
                <p className="contact-available-desc">
                  "Open to work, projects, and collaborations across data and technology."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-form-col {
          grid-column: span 12;
        }
        .contact-info-col {
          grid-column: span 12;
        }
        @media (min-width: 992px) {
          .contact-form-col {
            grid-column: span 6 !important;
          }
          .contact-info-col {
            grid-column: span 6 !important;
            padding-left: 24px;
          }
        }
        .contact-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        @media (max-width: 640px) {
          .contact-two-col {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
        .contact-field-group {
          display: flex;
          flex-direction: column;
        }
        .contact-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: #e2e8f0;
          margin-bottom: 8px;
          font-family: inherit;
        }
        .contact-input,
        .contact-textarea {
          width: 100%;
          background-color: #16161a;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 0.9375rem;
          color: #ffffff;
          outline: none;
          font-family: inherit;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
          box-sizing: border-box;
        }
        .contact-textarea {
          padding: 14px 16px;
          min-height: 140px;
          resize: vertical;
          line-height: 1.6;
        }
        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: #52525b;
          opacity: 1;
        }
        .contact-input:focus,
        .contact-textarea:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px #3b82f6;
          background-color: #18181e;
        }
        .contact-submit-btn {
          align-self: flex-start;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9375rem;
          color: #09090b;
          background-color: #ffffff;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        .contact-submit-btn:hover:not(:disabled) {
          background-color: #f4f4f5;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.15);
        }
        .contact-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Get In Touch Styles */
        .get-in-touch-heading {
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.015em;
          margin: 0 0 24px 0;
          font-family: inherit;
        }
        .get-in-touch-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px 18px;
        }
        @media (max-width: 520px) {
          .get-in-touch-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
        .contact-touch-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          text-decoration: none;
          padding: 12px;
          border-radius: 12px;
          background-color: transparent;
          border: 1px solid transparent;
          transition: background-color 250ms ease-out, border-color 250ms ease-out;
        }
        .contact-touch-item:hover {
          background-color: rgba(255, 255, 255, 0.035);
          border-color: rgba(255, 255, 255, 0.08);
        }
        .contact-touch-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background-color: #16161a;
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          flex-shrink: 0;
          transition: background-color 250ms ease-out, border-color 250ms ease-out;
        }
        .contact-touch-item:hover .contact-touch-icon-box {
          background-color: #1f1f24;
          border-color: rgba(255, 255, 255, 0.16);
          color: #ffffff;
        }
        .contact-touch-content {
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 0;
        }
        .contact-touch-title-row {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .contact-touch-name {
          font-size: 0.9375rem;
          font-weight: 600;
          color: #ffffff;
        }
        .contact-touch-arrow {
          color: #ffffff;
          opacity: 0.75;
          transition: transform 250ms ease-out, opacity 250ms ease-out;
          transform: translate(0, 0);
          flex-shrink: 0;
        }
        .contact-touch-item:hover .contact-touch-arrow {
          opacity: 1;
          transform: translate(3px, -3px);
        }
        .contact-touch-desc {
          font-size: 0.8125rem;
          color: #94a3b8;
          line-height: 1.45;
          margin: 0;
          transition: color 250ms ease-out;
        }
        .contact-touch-item:hover .contact-touch-desc {
          color: #cbd5e1;
        }

        /* Available for Work Item (Matching Get in Touch with subtle hover card) */
        .contact-available-item {
          margin-top: 20px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          border-radius: 12px;
          background-color: transparent;
          border: 1px solid transparent;
          transition: background-color 250ms ease-out, border-color 250ms ease-out;
          cursor: default;
        }
        .contact-available-item:hover {
          background-color: rgba(255, 255, 255, 0.035);
          border-color: rgba(255, 255, 255, 0.08);
        }
        .contact-available-item:hover .contact-touch-icon-box {
          background-color: #1f1f24;
          border-color: rgba(255, 255, 255, 0.16);
          color: #ffffff;
        }
        .contact-available-content {
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 0;
        }
        .contact-available-label {
          font-size: 0.8rem;
          font-family: var(--font-mono, monospace);
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 250ms ease-out;
        }
        .contact-available-desc {
          font-size: 0.8125rem;
          color: #94a3b8;
          margin: 0;
          line-height: 1.45;
          transition: color 250ms ease-out;
        }
        .contact-available-item:hover .contact-available-label {
          color: #60a5fa;
        }
        .contact-available-item:hover .contact-available-desc {
          color: #cbd5e1;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
