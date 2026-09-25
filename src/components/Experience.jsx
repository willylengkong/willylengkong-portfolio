import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiSettings } from 'react-icons/fi';
import { LuTrophy } from 'react-icons/lu';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const company = experienceData[0];
  const role1 = company.roles[0];
  const role2 = company.roles[1];

  return (
    <section
      id="experience"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        borderTop: '1px solid #27272a',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
          <div
            style={{
              padding: '10px',
              borderRadius: '12px',
              backgroundColor: 'rgba(59, 130, 246, 0.12)',
              border: '1px solid rgba(59, 130, 246, 0.25)',
              color: '#60a5fa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FiBriefcase size={22} />
          </div>
          <h3
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.3rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.025em',
            }}
          >
            Experience
          </h3>
        </div>

        {/* Company Card Block */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '20px',
              flexWrap: 'wrap',
            }}
          >
            {/* Indomaret Logo Badge */}
            <div
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '16px',
                backgroundColor: '#ffffff',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <svg viewBox="0 0 320 120" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="80" fill="#005bac" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="64" fontWeight="900" fontStyle="italic">
                  Ind
                </text>
                <circle cx="140" cy="58" r="26" fill="none" stroke="#e31b23" strokeWidth="7" />
                <circle cx="140" cy="58" r="13" fill="none" stroke="#e31b23" strokeWidth="7" />
                <circle cx="140" cy="58" r="3" fill="#e31b23" />
                <text x="175" y="80" fill="#005bac" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="64" fontWeight="900" fontStyle="italic">
                  maret
                </text>
              </svg>
            </div>

            <div>
              <h4
                style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.3,
                }}
              >
                {company.company}
              </h4>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#94a3b8',
                  marginTop: '6px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ color: '#60a5fa', fontWeight: 600 }}>{company.division}</span>
                <span>•</span>
                <span>{company.period}</span>
                <span>•</span>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: '999px',
                    backgroundColor: '#070912',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    fontSize: '0.625rem',
                    color: '#cbd5e1',
                  }}
                >
                  {company.type}
                </span>
              </div>
            </div>
          </div>

          {/* Overview Callout */}
          <div
            className="experience-overview"
            style={{
              backgroundColor: 'rgba(7, 9, 18, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '16px 20px',
              fontSize: '0.82rem',
              color: '#94a3b8',
              lineHeight: 1.65,
              marginBottom: '36px',
              backdropFilter: 'blur(8px)',
            }}
          >
            {company.overview}
          </div>

          {/* Vertical Timeline Nodes */}
          <div
            className="timeline-container"
            style={{
              position: 'relative',
              borderLeft: '2px solid rgba(59, 130, 246, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              gap: '48px',
            }}
          >
            {/* Role 1: MD Strategic Analyst (Current) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ position: 'relative' }}
            >
              {/* Pulsing indicator node */}
              <span
                style={{
                  position: 'absolute',
                  left: '-39px',
                  top: '4px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: '#0a0a0a',
                  border: '2px solid #60a5fa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#60a5fa',
                  }}
                />
              </span>

              <h5 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em' }}>
                {role1.title}
              </h5>

              <div
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#60a5fa',
                  marginTop: '4px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ color: '#cbd5e1' }}>{role1.employmentType}</span>
                <span>•</span>
                <span>{role1.period}</span>
              </div>

              <div
                style={{
                  fontSize: '0.75rem',
                  color: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: '4px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <FiMapPin size={13} style={{ color: '#64748b' }} />
                <span>{role1.location}</span>
              </div>

              <div
                style={{
                  fontSize: '0.75rem',
                  color: '#93c5fd',
                  marginTop: '8px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <span style={{ color: '#60a5fa', fontWeight: 600 }}>Skills: </span>
                {role1.skills.join(', ')}
              </div>

              {/* Achievements Box */}
              <div
                style={{
                  marginTop: '20px',
                  backgroundColor: 'rgba(7, 9, 18, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '14px',
                  padding: '18px 20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <LuTrophy size={18} style={{ color: '#60a5fa', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.01em' }}>
                    Key Achievements
                  </span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {role1.achievements.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                      <span style={{ color: '#60a5fa', marginTop: '2px' }}>▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Role 2: Merchandising Support Staff */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ position: 'relative' }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: '-39px',
                  top: '4px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: '#0a0a0a',
                  border: '2px solid #64748b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#64748b',
                  }}
                />
              </span>

              <h5 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#e2e8f0', letterSpacing: '-0.01em' }}>
                {role2.title}
              </h5>

              <div
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#94a3b8',
                  marginTop: '4px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ color: '#cbd5e1' }}>{role2.employmentType}</span>
                <span>•</span>
                <span>{role2.period}</span>
                <span>•</span>
                <span>{role2.duration}</span>
              </div>

              <div
                style={{
                  fontSize: '0.75rem',
                  color: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: '4px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <FiMapPin size={13} style={{ color: '#64748b' }} />
                <span>{role2.location}</span>
              </div>

              <div
                style={{
                  fontSize: '0.75rem',
                  color: '#93c5fd',
                  marginTop: '8px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <span style={{ color: '#60a5fa', fontWeight: 600 }}>Skills: </span>
                {role2.skills.join(', ')}
              </div>

              {/* Responsibilities Box */}
              <div
                style={{
                  marginTop: '20px',
                  backgroundColor: 'rgba(7, 9, 18, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '14px',
                  padding: '18px 20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <FiSettings size={18} style={{ color: '#60a5fa', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.01em' }}>
                    Key Responsibilities & Operations
                  </span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {role2.responsibilities.map((resp, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                      <span style={{ color: '#64748b', marginTop: '2px' }}>▸</span>
                      <span>
                        <strong style={{ color: '#ffffff', fontWeight: 600 }}>{resp.highlight}: </strong>
                        {resp.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .experience-overview {
            margin-left: 94px !important;
          }
          .timeline-container {
            margin-left: 104px !important;
            padding-left: 32px !important;
          }
        }
        @media (max-width: 639px) {
          .experience-overview {
            margin-left: 0 !important;
          }
          .timeline-container {
            margin-left: 20px !important;
            padding-left: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
