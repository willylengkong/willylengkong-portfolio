import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { Icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
    { Icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { Icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '112px',
        paddingBottom: '80px',
      }}
    >
      {/* Background Grid Pattern & Ambient Glow Orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div
          className="grid-pattern"
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.3,
          }}
        />

        {/* Ambient Blue Orb on the left */}
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.65, 0.95, 0.65] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '28%',
            left: '18%',
            width: '580px',
            height: '580px',
            borderRadius: '50%',
            backgroundColor: 'rgba(59, 130, 246, 0.22)',
            filter: 'blur(80px)',
          }}
        />

        {/* Ambient Warm Amber Orb on the right (matching Image 1) */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.55, 0.9, 0.55] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          style={{
            position: 'absolute',
            top: '30%',
            right: '16%',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            backgroundColor: 'rgba(245, 158, 11, 0.18)',
            filter: 'blur(85px)',
          }}
        />
      </div>

      {/* Main Hero Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
          width: '100%',
        }}
      >
        {/* Japanese Katakana Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            color: '#a1a1aa',
            fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)',
            marginBottom: '24px',
            letterSpacing: '0.3em',
            fontWeight: 300,
            fontFamily: 'var(--font-jp)',
          }}
        >
          エンドツーエンド・データアナリスト
        </motion.p>

        {/* Giant Skyline Name "WILLY" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            position: 'relative',
            marginBottom: '32px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(5rem, 17vw, 19rem)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.05em',
              userSelect: 'none',
              backgroundImage: "url('/images/city-night.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'contrast(1.25) brightness(1.4) drop-shadow(0 0 35px rgba(59, 130, 246, 0.5)) drop-shadow(0 0 65px rgba(245, 158, 11, 0.35))',
            }}
          >
            WILLY
          </h1>

          {/* Primary Core Vibrant Pulsating Glow Behind Letters */}
          <motion.div
            animate={{ opacity: [0.65, 1.0, 0.65], scale: [0.99, 1.06, 0.99] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              inset: '-12px',
              zIndex: -1,
              filter: 'blur(45px)',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.95) 0%, rgba(139, 92, 246, 0.75) 45%, rgba(245, 158, 11, 0.9) 100%)',
              pointerEvents: 'none',
              borderRadius: '30px',
            }}
          />

          {/* Secondary Wider Ambient Pulsing Bloom */}
          <motion.div
            animate={{ opacity: [0.5, 0.85, 0.5], scale: [1.02, 1.12, 1.02] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            style={{
              position: 'absolute',
              inset: '-45px',
              zIndex: -2,
              filter: 'blur(80px)',
              background: 'radial-gradient(ellipse at 28% 50%, rgba(59, 130, 246, 0.8) 0%, transparent 65%), radial-gradient(ellipse at 75% 50%, rgba(245, 158, 11, 0.75) 0%, transparent 65%)',
              pointerEvents: 'none',
            }}
          />

          {/* Tertiary Broad Atmospheric Radiance */}
          <motion.div
            animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.15, 1] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            style={{
              position: 'absolute',
              inset: '-90px',
              zIndex: -3,
              filter: 'blur(110px)',
              background: 'radial-gradient(ellipse at 35% 45%, rgba(99, 102, 241, 0.55) 0%, transparent 70%), radial-gradient(ellipse at 70% 55%, rgba(245, 158, 11, 0.45) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>

        {/* Subtitle H2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ marginBottom: '24px' }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.8vw, 1.875rem)',
              color: '#a1a1aa',
              fontWeight: 300,
              letterSpacing: '0.025em',
            }}
          >
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Data Analyst</span>
            <span style={{ margin: '0 16px', color: '#27272a' }}>|</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>AI Engineer</span>
          </h2>
        </motion.div>

        {/* Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            maxWidth: '680px',
            margin: '0 auto 40px',
            fontSize: 'clamp(0.875rem, 1.8vw, 1.05rem)',
            color: '#a1a1aa',
            lineHeight: 1.7,
          }}
        >
          <span style={{ color: '#ffffff', fontWeight: 600 }}>End-to-end data analyst</span> — from retail data extraction & automation, through{' '}
          <span style={{ color: '#ffffff', fontWeight: 600 }}>ETL pipelines</span> into{' '}
          <span style={{ color: '#ffffff', fontWeight: 600 }}>PostgreSQL</span> /{' '}
          <span style={{ color: '#ffffff', fontWeight: 600 }}>Tableau</span> /{' '}
          <span style={{ color: '#ffffff', fontWeight: 600 }}>Looker</span>, delivering high-impact business intelligence and automated reporting to accelerate decision-making.
        </motion.p>

        {/* 2 CTA Buttons (Matching Image 1) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          {/* Primary View My Projects */}
          <button
            onClick={() => scrollTo('#projects')}
            style={{
              padding: '14px 32px',
              backgroundColor: '#ffffff',
              color: '#0a0a0a',
              fontWeight: 600,
              fontSize: '0.95rem',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: '0 0 25px rgba(255, 255, 255, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.boxShadow = '0 0 35px rgba(255, 255, 255, 0.35)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View My Projects
          </button>

          {/* Outline Get in Touch */}
          <button
            onClick={() => scrollTo('#contact')}
            style={{
              padding: '14px 32px',
              backgroundColor: 'rgba(24, 24, 27, 0.8)',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '0.95rem',
              borderRadius: '10px',
              border: '1px solid #27272a',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#18181b';
              e.currentTarget.style.borderColor = '#3f3f46';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(24, 24, 27, 0.8)';
              e.currentTarget.style.borderColor = '#27272a';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Center Bottom 3 Social Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          {socialLinks.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label === 'Email' ? undefined : '_blank'}
              rel={item.label === 'Email' ? undefined : 'noopener noreferrer'}
              aria-label={item.label}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '12px',
                borderRadius: '50%',
                color: '#a1a1aa',
                backgroundColor: 'rgba(24, 24, 27, 0.5)',
                border: '1px solid #27272a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.backgroundColor = '#18181b';
                e.currentTarget.style.borderColor = '#3f3f46';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#a1a1aa';
                e.currentTarget.style.backgroundColor = 'rgba(24, 24, 27, 0.5)';
                e.currentTarget.style.borderColor = '#27272a';
              }}
            >
              <item.Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Floating Right Social Dock (Exact Match to Image 1 far right!) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'fixed',
          right: '32px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 40,
          display: 'none',
          flexDirection: 'column',
          gap: '16px',
        }}
        className="floating-right-dock"
      >
        {socialLinks.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.label === 'Email' ? undefined : '_blank'}
            rel={item.label === 'Email' ? undefined : 'noopener noreferrer'}
            aria-label={item.label}
            whileHover={{ scale: 1.25 }}
            style={{
              padding: '8px',
              color: '#a1a1aa',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#a1a1aa')}
          >
            <item.Icon size={18} />
          </motion.a>
        ))}
      </motion.div>

      <style>{`
        @media (min-width: 1024px) {
          .floating-right-dock {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}
