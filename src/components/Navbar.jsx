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

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

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

        {/* Mobile Hamburger Toggle Button */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="mobile-toggle-btn"
          whileTap={{ scale: 0.9 }}
          style={{
            display: 'none',
            background: 'rgba(24, 24, 27, 0.7)',
            border: '1px solid #27272a',
            borderRadius: '8px',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '8px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Right Slide-Over Drawer & Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Smooth Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                zIndex: 90,
              }}
            />

            {/* Right Slide-Over Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 240 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '300px',
                maxWidth: '85vw',
                backgroundColor: 'rgba(13, 13, 16, 0.98)',
                borderLeft: '1px solid #27272a',
                boxShadow: '-12px 0 35px rgba(0, 0, 0, 0.75)',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                padding: '24px 20px',
              }}
            >
              {/* Drawer Top Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '20px',
                  marginBottom: '20px',
                  borderBottom: '1px solid #27272a',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <BrandLogo width={36} height={20} accentColor="#3b82f6" primaryColor="#ffffff" />
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>Willy</span>
                </div>

                <motion.button
                  onClick={() => setMobileOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                  style={{
                    background: 'rgba(24, 24, 27, 0.8)',
                    border: '1px solid #27272a',
                    borderRadius: '8px',
                    color: '#a1a1aa',
                    cursor: 'pointer',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FiX size={18} />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx + 0.1, duration: 0.25 }}
                      onClick={() => scrollTo(link.href)}
                      style={{
                        background: isActive ? 'rgba(59, 130, 246, 0.12)' : 'transparent',
                        border: 'none',
                        borderLeft: isActive ? '3px solid #3b82f6' : '3px solid transparent',
                        borderRadius: '6px',
                        textAlign: 'left',
                        fontSize: '1rem',
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? '#ffffff' : '#a1a1aa',
                        padding: '12px 14px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {link.name}
                    </motion.button>
                  );
                })}
              </div>

              {/* Drawer Bottom CTA */}
              <div style={{ paddingTop: '20px', borderTop: '1px solid #27272a' }}>
                <button
                  onClick={() => scrollTo('#contact')}
                  style={{
                    width: '100%',
                    padding: '12px 20px',
                    backgroundColor: '#ffffff',
                    color: '#0a0a0a',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.15)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Contact Me
                </button>
              </div>
            </motion.div>
          </>
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
            display: flex !important;
          }
        }
      `}</style>
    </motion.header>
  );
}
