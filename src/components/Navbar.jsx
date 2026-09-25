import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll progress tracking (0 to 1 as page is scrolled)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'projects', 'about', 'contact'];
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
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollTo = (href) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #27272a' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo */}
        <motion.div
          onClick={() => scrollTo('#home')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          {/* Brand Monogram Vector Logo (Enlarged, Borderless, Dot Removed) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <BrandLogo width={48} height={27} accentColor="#3b82f6" primaryColor="#ffffff" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontSize: '1.18rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em' }}>
              Willy
            </span>
            <span
              style={{
                fontSize: '0.625rem',
                fontFamily: 'var(--font-jetbrains)',
                color: '#a1a1aa',
                letterSpacing: '0.2em',
                marginTop: '3px',
              }}
            >
              DATA ANALYST
            </span>
          </div>
        </motion.div>

        {/* Desktop Navigation Links & CTA */}
        <div style={{ display: 'none', alignItems: 'center', gap: '32px' }} className="desktop-nav-group">
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {navLinks.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  whileHover={{ y: -2 }}
                  style={{
                    position: 'relative',
                    background: 'none',
                    border: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: isActive ? '#ffffff' : '#a1a1aa',
                    cursor: 'pointer',
                    padding: '4px 0',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#a1a1aa';
                  }}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: '#3b82f6',
                        borderRadius: '999px',
                      }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Contact Me Button */}
          <motion.button
            onClick={() => scrollTo('#contact')}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '8px 18px',
              backgroundColor: '#ffffff',
              color: '#0a0a0a',
              fontSize: '0.875rem',
              fontWeight: 600,
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 255, 255, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.15)';
            }}
          >
            Contact Me
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="mobile-toggle-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
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
              <button
                key={link.id}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  fontWeight: activeSection === link.id ? 700 : 500,
                  color: activeSection === link.id ? '#3b82f6' : '#a1a1aa',
                  padding: '6px 0',
                  cursor: 'pointer',
                }}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#ffffff',
                color: '#0a0a0a',
                fontSize: '0.875rem',
                fontWeight: 600,
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Contact Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Horizontal Clean Blue Scroll Progress Bar (Non-glowing, appears when scrolled) */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          backgroundColor: '#3b82f6',
          transformOrigin: '0%',
          scaleX,
          opacity: scrolled ? 1 : 0,
          transition: 'opacity 0.25s ease',
          pointerEvents: 'none',
          zIndex: 50,
        }}
      />

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav-group {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .desktop-nav-group {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
        }
      `}</style>
    </motion.header>
  );
}
