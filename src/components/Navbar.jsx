import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'projects', 'about', 'experience', 'achievements', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        width: '100%',
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.92)' : 'rgba(10, 10, 10, 0.75)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #27272a',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '76px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#000000',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.6)',
              transition: 'transform 0.2s ease, border-color 0.2s ease',
            }}
          >
            <svg viewBox="0 0 500 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="500" height="500" fill="#000000" />
              <g>
                <rect x="110" y="173" width="37" height="150" fill="#F8F8F8" />
                <polygon points="159,228 194,242 194,324 159,310" fill="#F8F8F8" />
                <rect x="205" y="173" width="37" height="150" fill="#F8F8F8" />
                <polygon points="253,169 288,183 288,217 253,203" fill="#3b82f6" />
                <rect x="253" y="222" width="37" height="101" fill="#F8F8F8" />
                <rect x="301" y="173" width="37" height="106" fill="#F8F8F8" />
                <rect x="301" y="286" width="82" height="37" fill="#3b82f6" />
              </g>
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
              Willy
            </span>
            <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#60a5fa' }}>
              Data Analyst
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                style={{
                  position: 'relative',
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#ffffff' : '#94a3b8',
                  textDecoration: 'none',
                  padding: '6px 2px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#94a3b8';
                }}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      borderRadius: '999px',
                      backgroundColor: '#3b82f6',
                      boxShadow: '0 0 10px rgba(59, 130, 246, 0.7)',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="#contact"
            className="contact-pill-btn"
            style={{
              padding: '9px 22px',
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: '#030408',
              backgroundColor: '#ffffff',
              borderRadius: '9999px',
              textDecoration: 'none',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.15)',
              transition: 'all 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e2e8f0';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Contact Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="mobile-menu-btn"
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '8px',
              display: 'none',
            }}
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              backgroundColor: 'rgba(10, 10, 10, 0.98)',
              borderBottom: '1px solid #27272a',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-mono)',
                  color: activeSection === link.id ? '#60a5fa' : '#94a3b8',
                  textDecoration: 'none',
                  padding: '6px 0',
                  fontWeight: activeSection === link.id ? 700 : 500,
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              style={{
                marginTop: '8px',
                textAlign: 'center',
                padding: '10px 20px',
                fontSize: '0.875rem',
                fontWeight: 700,
                color: '#030408',
                backgroundColor: '#ffffff',
                borderRadius: '9999px',
                textDecoration: 'none',
              }}
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .contact-pill-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
