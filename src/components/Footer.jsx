import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiChevronUp, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import BrandLogo from './BrandLogo';

export default function Footer() {
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
                <BrandLogo width={44} height={25} accentColor="#3b82f6" primaryColor="#ffffff" />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em' }}>
                  {personalInfo.name}
                </h4>
                <p
                  style={{
                    fontSize: '0.65rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#94a3b8',
                    letterSpacing: '0.08em',
                  }}
                >
                  {personalInfo.shortTitle.toUpperCase()}
                </p>
              </div>
            </div>

            <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6, maxWidth: '360px' }}>
              {personalInfo.bioHeadline}
            </p>

            {/* Social Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '4px' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(30, 41, 59, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#94a3b8';
                }}
              >
                <FiGithub size={16} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(30, 41, 59, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#94a3b8';
                }}
              >
                <FiLinkedin size={16} />
              </a>

              <a
                href="#contact"
                aria-label="Email"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(30, 41, 59, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#94a3b8';
                }}
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
              {['Home', 'Projects', 'About', 'Experience', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col-3" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h5 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.02em' }}>
              Contact
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
                fontFamily: 'var(--font-mono)',
              }}
            >
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  github.com/willylengkong
                </a>
              </li>
              <li style={{ color: '#64748b' }}>{personalInfo.fullLocation}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '32px',
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
