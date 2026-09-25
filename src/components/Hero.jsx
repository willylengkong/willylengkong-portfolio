import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Tooltip from '@mui/material/Tooltip';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      {/* Background layer with exact Fabian grid pattern and ambient glow orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div
          className="grid-pattern"
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.35,
          }}
        />

        {/* Ambient Blue Orb */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.45, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '25%',
            left: '20%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            backgroundColor: 'rgba(59, 130, 246, 0.07)',
            filter: 'blur(75px)',
          }}
        />

        {/* Ambient Purple Orb */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.38, 0.25],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{
            position: 'absolute',
            top: '30%',
            right: '18%',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            backgroundColor: 'rgba(168, 85, 247, 0.06)',
            filter: 'blur(85px)',
          }}
        />
      </div>

      {/* Decorative Technical Corner Accents */}
      <div
        style={{
          position: 'absolute',
          top: '32px',
          left: '32px',
          width: '48px',
          height: '48px',
          borderLeft: '1px solid rgba(39, 39, 42, 0.6)',
          borderTop: '1px solid rgba(39, 39, 42, 0.6)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          right: '32px',
          width: '48px',
          height: '48px',
          borderRight: '1px solid rgba(39, 39, 42, 0.6)',
          borderBottom: '1px solid rgba(39, 39, 42, 0.6)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
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
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            color: '#a1a1aa',
            fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
            marginBottom: '20px',
            letterSpacing: '0.25em',
            fontWeight: 300,
            fontFamily: 'var(--font-jp)',
          }}
        >
          エンドツーエンド・データアナリスト
        </motion.p>

        {/* Giant Architectural Skyline Typography "WILLY" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            position: 'relative',
            marginBottom: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(4.5rem, 17vw, 18rem)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.05em',
              userSelect: 'none',
              backgroundImage: "url('/images/city-night.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'contrast(1.25) brightness(1.35) drop-shadow(0 15px 35px rgba(0, 0, 0, 0.9))',
            }}
          >
            WILLY
          </h1>

          {/* Ambient colorful glow behind the giant text */}
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: -1,
              filter: 'blur(64px)',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.35) 0%, rgba(139, 92, 246, 0.25) 50%, rgba(245, 158, 11, 0.2) 100%)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>

        {/* Subtitle Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            fontSize: 'clamp(1.15rem, 2.8vw, 1.6rem)',
            fontWeight: 400,
            letterSpacing: '0.03em',
            color: '#a1a1aa',
          }}
        >
          <span style={{ color: '#ffffff', fontWeight: 600 }}>Data Analyst</span>
          <span style={{ color: '#27272a' }}>|</span>
          <span style={{ color: '#ffffff', fontWeight: 600 }}>AI Engineer</span>
        </motion.div>

        {/* Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            maxWidth: '680px',
            margin: '0 auto 36px',
            fontSize: 'clamp(0.85rem, 1.8vw, 0.98rem)',
            color: '#a1a1aa',
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          <span style={{ color: '#ffffff', fontWeight: 600 }}>End-to-end data analyst</span> — from retail data extraction & automation, through{' '}
          <span style={{ color: '#ffffff', fontWeight: 600 }}>ETL pipelines</span> into{' '}
          <span style={{ color: '#ffffff', fontWeight: 600 }}>PostgreSQL</span> /{' '}
          <span style={{ color: '#ffffff', fontWeight: 600 }}>Tableau</span> /{' '}
          <span style={{ color: '#ffffff', fontWeight: 600 }}>Looker</span>, delivering high-impact business intelligence and automated reporting to accelerate decision-making.
        </motion.p>

        {/* Social Links Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
          }}
        >
          <Tooltip title="GitHub">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                textDecoration: 'none',
              }}
            >
              <FiGithub size={19} />
            </a>
          </Tooltip>

          <Tooltip title="LinkedIn">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                textDecoration: 'none',
              }}
            >
              <FiLinkedin size={19} />
            </a>
          </Tooltip>

          <Tooltip title="Direct Email">
            <a
              href="#contact"
              aria-label="Email"
              className="glass"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                textDecoration: 'none',
              }}
            >
              <FiMail size={19} />
            </a>
          </Tooltip>
        </motion.div>
      </div>
    </section>
  );
}
