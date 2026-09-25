import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Tooltip from '@mui/material/Tooltip';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-atmosphere"
      style={{
        position: 'relative',
        paddingTop: '48px',
        paddingBottom: '96px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 20px',
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Giant Architectural Skyline Typography "WILLY" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            maxWidth: '920px',
            userSelect: 'none',
            margin: '12px 0 24px',
            filter: 'drop-shadow(0 20px 35px rgba(0, 0, 0, 0.9))',
          }}
        >
          <svg
            viewBox="0 0 1000 320"
            width="100%"
            height="auto"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block' }}
          >
            <defs>
              <mask id="willyMask">
                <text
                  x="500"
                  y="275"
                  textAnchor="middle"
                  fill="white"
                  fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif"
                  fontSize="315"
                  fontWeight="900"
                  letterSpacing="0.04em"
                >
                  WILLY
                </text>
              </mask>
              <linearGradient id="nightSky" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0b1022" />
                <stop offset="45%" stopColor="#121833" />
                <stop offset="100%" stopColor="#181324" />
              </linearGradient>
              <linearGradient id="buildingGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0e152e" />
                <stop offset="100%" stopColor="#080b18" />
              </linearGradient>
              <linearGradient id="buildingGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#151b38" />
                <stop offset="100%" stopColor="#0a0f24" />
              </linearGradient>
            </defs>

            {/* Skyscraper cityscape masked inside WILLY */}
            <g mask="url(#willyMask)">
              <rect x="0" y="0" width="1000" height="320" fill="url(#nightSky)" />

              {/* Skyscraper Towers */}
              <rect x="25" y="60" width="95" height="260" fill="url(#buildingGrad1)" />
              <rect x="110" y="90" width="85" height="230" fill="url(#buildingGrad2)" />
              <rect x="180" y="45" width="120" height="275" fill="url(#buildingGrad1)" />
              <rect x="290" y="110" width="100" height="210" fill="url(#buildingGrad2)" />
              <rect x="375" y="30" width="140" height="290" fill="url(#buildingGrad1)" />
              <rect x="500" y="70" width="95" height="250" fill="url(#buildingGrad2)" />
              <rect x="580" y="40" width="125" height="280" fill="url(#buildingGrad1)" />
              <rect x="690" y="95" width="110" height="225" fill="url(#buildingGrad2)" />
              <rect x="790" y="55" width="130" height="265" fill="url(#buildingGrad1)" />
              <rect x="910" y="35" width="90" height="285" fill="url(#buildingGrad2)" />

              {/* Architectural vertical grid seams */}
              <line x1="120" y1="0" x2="120" y2="320" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
              <line x1="205" y1="0" x2="205" y2="320" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
              <line x1="390" y1="0" x2="390" y2="320" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
              <line x1="590" y1="0" x2="590" y2="320" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
              <line x1="815" y1="0" x2="815" y2="320" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />

              {/* Warm Skyscraper Windows with flickering animations */}
              {/* Cluster W */}
              <rect x="140" y="80" width="5.5" height="5.5" rx="0.5" fill="#facc15" className="window-light" />
              <rect x="152" y="80" width="5.5" height="5.5" rx="0.5" fill="#fef08a" className="window-light" />
              <rect x="140" y="95" width="5.5" height="5.5" rx="0.5" fill="#facc15" className="window-light" />
              <rect x="152" y="108" width="5.5" height="5.5" rx="0.5" fill="#eab308" className="window-light-alt" />
              <rect x="210" y="90" width="5.5" height="5.5" rx="0.5" fill="#fef08a" className="window-light" />
              <rect x="222" y="90" width="5.5" height="5.5" rx="0.5" fill="#facc15" className="window-light-alt" />

              {/* Cluster I & L */}
              <rect x="380" y="68" width="5.5" height="5.5" rx="0.5" fill="#facc15" className="window-light-alt" />
              <rect x="380" y="84" width="5.5" height="5.5" rx="0.5" fill="#fef08a" className="window-light" />
              <rect x="485" y="85" width="5.5" height="5.5" rx="0.5" fill="#facc15" className="window-light-fast" />
              <rect x="498" y="85" width="5.5" height="5.5" rx="0.5" fill="#fef08a" className="window-light-alt" />
              <rect x="485" y="102" width="5.5" height="5.5" rx="0.5" fill="#fde047" className="window-light" />

              {/* Cluster L & Y */}
              <rect x="635" y="75" width="5.5" height="5.5" rx="0.5" fill="#facc15" className="window-light-alt" />
              <rect x="635" y="92" width="5.5" height="5.5" rx="0.5" fill="#fef08a" className="window-light" />
              <rect x="785" y="65" width="5.5" height="5.5" rx="0.5" fill="#facc15" className="window-light-alt" />
              <rect x="800" y="65" width="5.5" height="5.5" rx="0.5" fill="#fde047" className="window-light" />
              <rect x="785" y="82" width="5.5" height="5.5" rx="0.5" fill="#eab308" className="window-light-alt" />
              <rect x="840" y="95" width="5.5" height="5.5" rx="0.5" fill="#facc15" className="window-light-fast" />

              {/* Cyan Aviation Beacon Lights */}
              <circle cx="215" cy="74" r="1.5" fill="#60a5fa" />
              <circle cx="788" cy="55" r="1.5" fill="#60a5fa" />
            </g>
          </svg>
        </motion.div>

        {/* Subtitle Line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            marginTop: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            fontSize: 'clamp(1.15rem, 3vw, 1.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#ffffff',
          }}
        >
          <span>Data Analyst</span>
          <span style={{ color: '#475569', fontWeight: 300 }}>|</span>
          <span style={{ color: '#93c5fd' }}>AI Engineer</span>
        </motion.div>

        {/* Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            maxWidth: '680px',
            margin: '20px auto 0',
            fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
            color: '#94a3b8',
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          <strong style={{ color: '#ffffff', fontWeight: 600 }}>End-to-end data analyst</strong> — from retail data extraction & automation, through{' '}
          <strong style={{ color: '#ffffff', fontWeight: 600 }}>ETL pipelines</strong> into{' '}
          <strong style={{ color: '#ffffff', fontWeight: 600 }}>PostgreSQL</strong> /{' '}
          <strong style={{ color: '#ffffff', fontWeight: 600 }}>Tableau</strong> /{' '}
          <strong style={{ color: '#ffffff', fontWeight: 600 }}>Looker</strong>, delivering high-impact business intelligence and automated reporting to accelerate decision-making.
        </motion.p>

        {/* Social Links Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            marginTop: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          <Tooltip title="GitHub Profile">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backgroundColor: 'rgba(30, 41, 59, 0.6)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                textDecoration: 'none',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#60a5fa';
                e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.15)';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.6)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4)';
              }}
            >
              <FiGithub size={20} />
            </a>
          </Tooltip>

          <Tooltip title="LinkedIn Profile">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backgroundColor: 'rgba(30, 41, 59, 0.6)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                textDecoration: 'none',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#60a5fa';
                e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.15)';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.6)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4)';
              }}
            >
              <FiLinkedin size={20} />
            </a>
          </Tooltip>

          <Tooltip title="Direct Email">
            <a
              href="#contact"
              aria-label="Email"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backgroundColor: 'rgba(30, 41, 59, 0.6)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                textDecoration: 'none',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#60a5fa';
                e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.15)';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.6)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4)';
              }}
            >
              <FiMail size={20} />
            </a>
          </Tooltip>
        </motion.div>
      </div>
    </section>
  );
}
