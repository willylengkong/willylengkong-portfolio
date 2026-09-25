import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiMapPin, FiAward } from 'react-icons/fi';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section
      id="education"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
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
          <FiBookOpen size={26} style={{ color: '#60a5fa', flexShrink: 0 }} />
          <h3
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.3rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.025em',
              whiteSpace: 'nowrap',
            }}
          >
            Education
          </h3>
          <div
            style={{
              flex: 1,
              height: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              marginLeft: '8px',
              minWidth: '20px',
            }}
          />
        </div>

        {/* Institution Card */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
              marginBottom: '20px',
              flexWrap: 'wrap',
            }}
          >
            {/* UPH Emblem */}
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '14px',
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)',
              }}
            >
              <span
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 900,
                  fontFamily: 'var(--font-mono)',
                  color: '#60a5fa',
                  letterSpacing: '0.05em',
                }}
              >
                {educationData.acronym}
              </span>
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
                {educationData.institution}
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
                <span style={{ color: '#60a5fa', fontWeight: 600 }}>{educationData.period}</span>
                <span>•</span>
                <span>{educationData.mode}</span>
              </div>
            </div>
          </div>

          {/* Overview Box */}
          <div
            className="education-overview"
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
            {educationData.overview}
          </div>

          {/* Timeline Degree Node */}
          <div
            className="education-timeline"
            style={{
              position: 'relative',
              borderLeft: '2px solid rgba(59, 130, 246, 0.35)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ position: 'relative' }}
            >
              {/* Dot */}
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
                {educationData.degree}
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
                <span style={{ color: '#cbd5e1' }}>{educationData.type}</span>
                <span>•</span>
                <span>{educationData.period}</span>
                <span>•</span>
                <span style={{ color: '#facc15', fontWeight: 700 }}>Cumulative GPA: {educationData.gpa}</span>
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
                <span>{educationData.location}</span>
              </div>

              <div
                style={{
                  fontSize: '0.75rem',
                  color: '#94a3b8',
                  marginTop: '6px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <span style={{ color: '#64748b' }}>Focus: </span>
                {educationData.focus}
              </div>

              {/* Highlights Box */}
              <div
                style={{
                  marginTop: '20px',
                  backgroundColor: 'rgba(7, 9, 18, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '14px',
                  padding: '18px 20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <FiAward size={18} style={{ color: '#60a5fa' }} />
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      color: '#93c5fd',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Key Academic Highlights
                  </span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {educationData.highlights.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                      <span style={{ color: '#60a5fa', marginTop: '2px' }}>▸</span>
                      <span>{item}</span>
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
          .education-overview {
            margin-left: 78px !important;
          }
          .education-timeline {
            margin-left: 88px !important;
            padding-left: 32px !important;
          }
        }
        @media (max-width: 639px) {
          .education-overview {
            margin-left: 0 !important;
          }
          .education-timeline {
            margin-left: 20px !important;
            padding-left: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
