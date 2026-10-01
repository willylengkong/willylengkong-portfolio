import React, { useState } from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiChevronUp, FiHeart, FiCheck } from 'react-icons/fi';
import { FaDiscord, FaWhatsapp, FaTelegram, FaTiktok } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolioData';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const handleDiscordClick = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(personalInfo.discordUsername || 'willy10001');
      setCopiedDiscord(true);
      setTimeout(() => setCopiedDiscord(false), 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: '#0a0a0a',
        paddingTop: '64px',
        paddingBottom: '48px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '36px',
            marginBottom: '48px',
          }}
        >
          {/* Column 1: Profile & Social */}
          <div className="footer-col-1" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <BrandLogo width={44} height={25} accentColor="#ffffff" primaryColor="#ffffff" />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em' }}>
                  {personalInfo.name}
                </h4>
                <p
                  style={{
                    fontSize: '0.6875rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#94a3b8',
                    letterSpacing: '0.04em',
                  }}
                >
                  {personalInfo.shortTitle}
                </p>
              </div>
            </div>

            <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6, maxWidth: '360px' }}>
              {personalInfo.bioHeadline}
            </p>

            {/* Social Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '6px', flexWrap: 'wrap' }}>
              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub: willylengkong"
                className="footer-social-btn"
              >
                <FiGithub size={16} />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn: Willy Lengkong"
                className="footer-social-btn"
              >
                <FiLinkedin size={16} />
              </a>

              {/* Instagram */}
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram: @wyyleee__"
                className="footer-social-btn"
              >
                <FiInstagram size={16} />
              </a>

              {/* Discord */}
              <div style={{ position: 'relative' }}>
                <a
                  href={personalInfo.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                  title="Discord: willy10001 (Click to copy)"
                  onClick={handleDiscordClick}
                  className={`footer-social-btn ${copiedDiscord ? 'copied' : ''}`}
                >
                  {copiedDiscord ? <FiCheck size={16} style={{ color: '#4ade80' }} /> : <FaDiscord size={16} />}
                </a>
                {copiedDiscord && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 'calc(100% + 8px)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: '#0f172a',
                      border: '1px solid rgba(74, 222, 128, 0.4)',
                      color: '#4ade80',
                      fontSize: '0.6875rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '4px 8px',
                      borderRadius: '0px',
                      whiteSpace: 'nowrap',
                      pointerEvents: 'none',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                      zIndex: 30,
                    }}
                  >
                    Copied: willy10001
                  </div>
                )}
              </div>

              {/* WhatsApp */}
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp: +62 822-8115-7451"
                className="footer-social-btn"
              >
                <FaWhatsapp size={16} />
              </a>

              {/* Telegram */}
              <a
                href={personalInfo.telegram || 'https://t.me/wyylee'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                title="Telegram: @wyylee"
                className="footer-social-btn"
              >
                <FaTelegram size={16} />
              </a>

              {/* Email */}
              <a
                href="#contact"
                aria-label="Email"
                title={`Email: ${personalInfo.email}`}
                className="footer-social-btn"
              >
                <FiMail size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col-2" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h5 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.02em' }}>
              Navigation
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8125rem' }}>
              {[
                { name: 'Home', href: '#home' },
                { name: 'Projects', href: '#projects' },
                { name: 'About', href: '#about' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Content */}
          <div className="footer-col-3" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h5 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.02em' }}>
              Content
            </h5>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontSize: '0.8125rem',
              }}
            >
              <li>
                <a
                  href={personalInfo.tiktok || 'https://www.tiktok.com/@wiyleee'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  <FaTiktok size={14} style={{ flexShrink: 0 }} />
                  <span>TikTok (@wiyleee)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Full-width Divider Line & Bottom Meta Bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          width: '100%',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '24px 20px 0',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: '#64748b',
          }}
        >
          <div>
            © 2026 Willy • Built with <FiHeart size={12} style={{ color: '#f43f5e', verticalAlign: 'middle' }} /> in Indonesia
          </div>

          <div>v1.0.0 • Last updated 2026</div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '8px',
              backgroundColor: '#0c0f1d',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#94a3b8',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1e293b';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0c0f1d';
              e.currentTarget.style.color = '#94a3b8';
            }}
          >
            <FiChevronUp size={14} />
            <span>Back to Top</span>
          </button>
        </div>
      </div>

      <style>{`
        .footer-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 0px;
          background-color: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          text-decoration: none;
          box-sizing: border-box;
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.2s ease,
                      color 0.2s ease,
                      box-shadow 0.22s ease,
                      background-color 0.2s ease;
        }
        .footer-social-btn:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 255, 255, 0.55);
          color: #ffffff !important;
          background-color: rgba(255, 255, 255, 0.04);
          box-shadow: 0 6px 14px -2px rgba(0, 0, 0, 0.7), 0 0 10px rgba(255, 255, 255, 0.08);
        }
        .footer-social-btn:active {
          transform: translateY(-1px);
        }
        .footer-social-btn.copied {
          border-color: rgba(74, 222, 128, 0.5) !important;
          color: #4ade80 !important;
        }

        .footer-col-1 {
          grid-column: span 12;
        }
        .footer-col-2 {
          grid-column: span 12;
        }
        .footer-col-3 {
          grid-column: span 12;
        }
        @media (min-width: 768px) {
          .footer-col-1 {
            grid-column: span 5 !important;
          }
          .footer-col-2 {
            grid-column: span 3 !important;
          }
          .footer-col-3 {
            grid-column: span 4 !important;
          }
        }
      `}</style>
    </footer>
  );
}
