import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiFileText, FiStar, FiTerminal } from 'react-icons/fi';
import { LuTrophy } from 'react-icons/lu';
import { honorsAndAchievements } from '../data/portfolioData';

export default function Achievements() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'award':
        return <FiAward size={20} />;
      case 'trophy':
        return <LuTrophy size={20} />;
      case 'scholar':
        return <FiStar size={20} />;
      case 'terminal':
        return <FiTerminal size={20} />;
      default:
        return <FiAward size={20} />;
    }
  };

  return (
    <section
      id="achievements"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
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
            <FiTrophy size={22} />
          </div>
          <h3
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.3rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.025em',
            }}
          >
            Honors &amp; Achievements
          </h3>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {honorsAndAchievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card"
              style={{
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Card Top */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px',
                  }}
                >
                  <div
                    style={{
                      padding: '8px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(59, 130, 246, 0.12)',
                      color: '#60a5fa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getIcon(item.icon)}
                  </div>
                  <span
                    style={{
                      fontSize: '0.625rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(59, 130, 246, 0.15)',
                      color: '#93c5fd',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h4
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '8px',
                  }}
                >
                  {item.title}
                </h4>

                <p
                  style={{
                    fontSize: '0.78rem',
                    color: '#94a3b8',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Certificate Graphic Placeholder */}
              <div>
                <div
                  style={{
                    width: '100%',
                    height: '110px',
                    borderRadius: '12px',
                    backgroundColor: '#030408',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '8px',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '8px',
                      border: '1px dashed rgba(255, 255, 255, 0.12)',
                      background: 'linear-gradient(135deg, rgba(12, 15, 29, 0.8) 0%, rgba(30, 41, 59, 0.3) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                    }}
                  >
                    <FiFileText size={20} style={{ color: '#60a5fa' }} />
                    <span
                      style={{
                        fontSize: '0.625rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        color: '#e2e8f0',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {item.certTitle}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '0.6875rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#64748b',
                  }}
                >
                  {item.awarded}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
