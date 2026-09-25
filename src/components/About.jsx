import React from 'react';
import { motion } from 'framer-motion';
import { FiBarChart2, FiDatabase, FiLayout } from 'react-icons/fi';
import { personalInfo, skillsCategories } from '../data/portfolioData';

export default function About() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'analytics':
        return <FiBarChart2 size={20} />;
      case 'engineering':
        return <FiDatabase size={20} />;
      case 'systems':
        return <FiLayout size={20} />;
      default:
        return <FiDatabase size={20} />;
    }
  };

  return (
    <section
      id="about"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        borderTop: '1px solid #27272a',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div
            style={{
              color: '#60a5fa',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: '8px',
            }}
          >
            About
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.6rem)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.025em',
            }}
          >
            Who Is Willy?
          </h2>
          <p
            style={{
              color: '#94a3b8',
              fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
              marginTop: '12px',
              maxWidth: '560px',
              margin: '12px auto 0',
              lineHeight: 1.6,
            }}
          >
            Architecting end-to-end data pipelines, merchandising intelligence models, and enterprise analytics.
          </p>
        </div>

        {/* Content Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          {/* Left Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card profile-card"
            style={{
              borderRadius: '24px',
              padding: '32px 28px',
              textAlign: 'center',
            }}
          >
            {/* Avatar Container */}
            <div
              style={{
                position: 'relative',
                width: '105px',
                height: '105px',
                margin: '0 auto 24px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #2563eb 0%, #6366f1 100%)',
                padding: '2px',
                boxShadow: '0 0 35px rgba(59, 130, 246, 0.35)',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#0a0a0a',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <span
                  style={{
                    fontSize: '2.8rem',
                    fontWeight: 900,
                    fontFamily: 'var(--font-mono)',
                    background: 'linear-gradient(90deg, #60a5fa, #a5b4fc)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  W
                </span>
              </div>
              {/* Active Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  right: '-8px',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(59, 130, 246, 0.25)',
                  border: '1px solid rgba(59, 130, 246, 0.5)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#60a5fa',
                    boxShadow: '0 0 8px #60a5fa',
                  }}
                />
                <span
                  style={{
                    fontSize: '0.625rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#93c5fd',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                  }}
                >
                  ACTIVE
                </span>
              </div>
            </div>

            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '4px',
              }}
            >
              {personalInfo.name}
            </h3>
            <p
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: '#60a5fa',
                marginBottom: '20px',
              }}
            >
              {personalInfo.location}
            </p>

            <p
              style={{
                fontSize: '0.84rem',
                color: '#cbd5e1',
                lineHeight: 1.65,
                marginBottom: '14px',
                textAlign: 'left',
              }}
            >
              {personalInfo.aboutBio1}
            </p>
            <p
              style={{
                fontSize: '0.8rem',
                color: '#94a3b8',
                lineHeight: 1.6,
                marginBottom: '24px',
                textAlign: 'left',
              }}
            >
              {personalInfo.aboutBio2}
            </p>

            <div
              style={{
                paddingTop: '18px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#64748b' }}>Focus:</span>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>{personalInfo.focus}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#64748b' }}>Status:</span>
                <span style={{ color: '#60a5fa', fontWeight: 600 }}>{personalInfo.availability}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Skills Categories */}
          <div
            className="skills-cards"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
            }}
          >
            {skillsCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="glass-card"
                style={{
                  borderRadius: '20px',
                  padding: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
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
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                      {category.title}
                    </h4>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{category.description}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        backgroundColor: '#0c0f1d',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#cbd5e1',
                        transition: 'border-color 0.2s ease, color 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.color = '#cbd5e1';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .profile-card {
          grid-column: span 12;
        }
        .skills-cards {
          grid-column: span 12;
        }
        @media (min-width: 992px) {
          .profile-card {
            grid-column: span 5 !important;
          }
          .skills-cards {
            grid-column: span 7 !important;
          }
        }
      `}</style>
    </section>
  );
}
