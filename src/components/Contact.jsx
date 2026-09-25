import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiCheckCircle } from 'react-icons/fi';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        borderTop: '1px solid #27272a',
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
            Open for data analytics roles, ETL automation consulting, and high-performance retail reporting pipelines.
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
            className="glass-card contact-form-col"
            style={{
              borderRadius: '24px',
              padding: '32px',
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '16px',
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#94a3b8',
                      marginBottom: '6px',
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Satoshi Nakamoto"
                    style={{
                      width: '100%',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #27272a',
                      borderRadius: '12px',
                      padding: '11px 14px',
                      fontSize: '0.8125rem',
                      color: '#ffffff',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#3b82f6')}
                    onBlur={(e) => (e.target.style.borderColor = '#27272a')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#94a3b8',
                      marginBottom: '6px',
                    }}
                  >
                    Work Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    style={{
                      width: '100%',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #27272a',
                      borderRadius: '12px',
                      padding: '11px 14px',
                      fontSize: '0.8125rem',
                      color: '#ffffff',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#3b82f6')}
                    onBlur={(e) => (e.target.style.borderColor = '#27272a')}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#94a3b8',
                    marginBottom: '6px',
                  }}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Data Analytics / Pipeline Automation Project"
                  style={{
                    width: '100%',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #27272a',
                    borderRadius: '12px',
                    padding: '11px 14px',
                    fontSize: '0.8125rem',
                    color: '#ffffff',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#3b82f6')}
                  onBlur={(e) => (e.target.style.borderColor = '#27272a')}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#94a3b8',
                    marginBottom: '6px',
                  }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your pipeline requirements, stack, or target timeline..."
                  style={{
                    width: '100%',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #27272a',
                    borderRadius: '12px',
                    padding: '11px 14px',
                    fontSize: '0.8125rem',
                    color: '#ffffff',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#3b82f6')}
                  onBlur={(e) => (e.target.style.borderColor = '#27272a')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '13px 24px',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  color: '#0a0a0a',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.15)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 255, 255, 0.25)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FiSend size={16} />
                <span>{isSubmitting ? 'Dispatching...' : 'Send Message'}</span>
              </button>
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    marginTop: '16px',
                    padding: '14px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(59, 130, 246, 0.12)',
                    border: '1px solid rgba(59, 130, 246, 0.35)',
                    color: '#93c5fd',
                    fontSize: '0.8rem',
                    textAlign: 'center',
                    fontFamily: 'var(--font-mono)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                >
                  <FiCheckCircle size={16} style={{ color: '#60a5fa' }} />
                  <span>Message dispatched successfully! I will get back to you shortly.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info Side */}
          <div
            className="contact-info-col"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
            }}
          >
            {/* Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card"
              style={{
                borderRadius: '20px',
                padding: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#60a5fa',
                    boxShadow: '0 0 10px #60a5fa',
                  }}
                />
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#60a5fa',
                    letterSpacing: '0.05em',
                  }}
                >
                  Available for Work
                </span>
              </div>
              <p
                style={{
                  fontSize: '0.8125rem',
                  color: '#94a3b8',
                  lineHeight: 1.6,
                }}
              >
                Open to Data Analytics roles, retail BI pipeline optimization, and enterprise dashboard architecture.
              </p>
            </motion.div>

            {/* Direct Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card"
              style={{
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    padding: '10px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(59, 130, 246, 0.12)',
                    color: '#60a5fa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FiMail size={18} />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: '0.625rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#64748b',
                      textTransform: 'uppercase',
                      display: 'block',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    style={{
                      fontSize: '0.84rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#ffffff',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#60a5fa')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    padding: '10px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(59, 130, 246, 0.12)',
                    color: '#60a5fa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FiMapPin size={18} />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: '0.625rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#64748b',
                      textTransform: 'uppercase',
                      display: 'block',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Location
                  </span>
                  <span
                    style={{
                      fontSize: '0.84rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#ffffff',
                    }}
                  >
                    {personalInfo.fullLocation}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
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
            grid-column: span 7 !important;
          }
          .contact-info-col {
            grid-column: span 5 !important;
          }
        }
      `}</style>
    </section>
  );
}
