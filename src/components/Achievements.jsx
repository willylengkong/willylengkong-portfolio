import React from 'react';
import { motion } from 'framer-motion';
import { LuBadgeCheck, LuFileBadge, LuAward, LuShieldCheck } from 'react-icons/lu';
import { TbCertificate } from 'react-icons/tb';
import { honorsAndAchievements } from '../data/portfolioData';

export default function Achievements() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'badge':
        return <LuBadgeCheck size={20} />;
      case 'file':
        return <LuFileBadge size={20} />;
      case 'shield':
        return <LuShieldCheck size={20} />;
      case 'award':
        return <LuAward size={20} />;
      default:
        return <TbCertificate size={20} />;
    }
  };

  return (
    <section
      id="certifications"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        borderTop: '1px solid #27272a',
        position: 'relative',
      }}
    >
      <span id="achievements" style={{ position: 'absolute', top: 0, opacity: 0, pointerEvents: 'none' }} />
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '48px' }}>
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
            <TbCertificate size={24} />
          </div>
          <h3
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.3rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.025em',
            }}
          >
            Certifications
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
                    backgroundColor: '#0a0a0a',
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
                      border: '1px dashed rgba(59, 130, 246, 0.25)',
                      background: 'linear-gradient(135deg, rgba(12, 15, 29, 0.85) 0%, rgba(30, 41, 59, 0.35) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '8px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(59, 130, 246, 0.12)',
                        border: '1px solid rgba(59, 130, 246, 0.25)',
                        color: '#60a5fa',
                      }}
                    >
                      <TbCertificate size={18} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.625rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        color: '#e2e8f0',
                        letterSpacing: '0.05em',
                        textAlign: 'center',
                        lineHeight: 1.2,
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
