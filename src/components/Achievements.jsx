import React from 'react';
import { motion } from 'framer-motion';
import { LuBadgeCheck, LuFileBadge, LuAward, LuShieldCheck, LuCode, LuChartColumn } from 'react-icons/lu';
import { TbCertificate } from 'react-icons/tb';
import { FiArrowUpRight } from 'react-icons/fi';
import { honorsAndAchievements } from '../data/portfolioData';

export default function Achievements() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <LuCode size={20} />;
      case 'chart':
      case 'bar-chart':
      case 'bar':
        return <LuChartColumn size={20} />;
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
          <TbCertificate size={28} style={{ color: '#60a5fa', flexShrink: 0 }} />
          <h3
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.3rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.025em',
              whiteSpace: 'nowrap',
            }}
          >
            Certifications
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

        {/* 2x2 Cards Grid */}
        <div className="certifications-grid">
          {honorsAndAchievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="cert-card"
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
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(59, 130, 246, 0.08)',
                      border: '1px solid rgba(59, 130, 246, 0.2)',
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
                      fontSize: '0.6875rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      color: '#93c5fd',
                      border: '1px solid rgba(59, 130, 246, 0.25)',
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h4
                  className="cert-title"
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    letterSpacing: '-0.015em',
                    marginBottom: '8px',
                    lineHeight: 1.35,
                  }}
                >
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h4>

                <p
                  style={{
                    fontSize: '0.825rem',
                    color: '#94a3b8',
                    lineHeight: 1.55,
                    marginBottom: '18px',
                    minHeight: '44px',
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Certificate Graphic or Image */}
              <div>
                {item.image ? (
                  <a
                    href={item.link || '#'}
                    target={item.link ? '_blank' : undefined}
                    rel={item.link ? 'noopener noreferrer' : undefined}
                    className="cert-preview-frame"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cert-preview-img"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: item.imageFit || 'cover',
                        objectPosition: item.imagePosition || 'center 15%',
                        transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease',
                      }}
                    />

                    {/* Gradient vignette */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(7, 10, 18, 0.45) 0%, transparent 40%)',
                        pointerEvents: 'none',
                        zIndex: 2,
                      }}
                    />

                    {item.certId && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '10px',
                          ...(item.certIdPosition === 'right' ? { right: '10px' } : { left: '10px' }),
                          pointerEvents: 'none',
                          zIndex: 3,
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.6875rem',
                            fontFamily: 'var(--font-mono)',
                            fontWeight: 600,
                            color: '#e2e8f0',
                            backgroundColor: 'rgba(8, 11, 20, 0.88)',
                            backdropFilter: 'blur(6px)',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            letterSpacing: '0.04em',
                          }}
                        >
                          {item.certId}
                        </span>
                      </div>
                    )}
                  </a>
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '210px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(10, 14, 24, 0.65)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      padding: '16px',
                      marginBottom: '16px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
                        pointerEvents: 'none',
                      }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '42px',
                        height: '42px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(59, 130, 246, 0.08)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        color: '#60a5fa',
                        zIndex: 1,
                      }}
                    >
                      <TbCertificate size={22} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        color: '#cbd5e1',
                        letterSpacing: '0.06em',
                        textAlign: 'center',
                        lineHeight: 1.3,
                        zIndex: 1,
                      }}
                    >
                      {item.certTitle}
                    </span>
                  </div>
                )}

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <span style={{ color: '#64748b', letterSpacing: '0.03em' }}>{item.awarded}</span>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-verify-btn"
                    >
                      Verify <FiArrowUpRight size={13} />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
