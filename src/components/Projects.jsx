import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiFileText,
  FiCpu,
  FiLock,
  FiBookOpen,
  FiShoppingCart,
  FiDatabase,
  FiUsers,
  FiGlobe,
  FiCode,
  FiLayers,
  FiArrowUpRight,
  FiBriefcase,
  FiTrendingUp,
} from 'react-icons/fi';
import {
  automationProjects,
  scrapingNicheProjects,
  webDevProjects,
} from '../data/portfolioData';
import CaseStudyModal from './CaseStudyModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getNicheIcon = (iconName) => {
    switch (iconName) {
      case 'cart':
        return <FiShoppingCart size={16} />;
      case 'briefcase':
        return <FiBriefcase size={16} />;
      case 'trending-up':
      case 'markets':
        return <FiTrendingUp size={16} />;
      case 'database':
        return <FiDatabase size={16} />;
      case 'users':
        return <FiUsers size={16} />;
      case 'globe':
        return <FiGlobe size={16} />;
      case 'code':
        return <FiCode size={16} />;
      case 'layers':
        return <FiLayers size={16} />;
      default:
        return <FiDatabase size={16} />;
    }
  };

  return (
    <section
      id="projects"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        maxWidth: '1200px',
        margin: '0 auto',
        paddingLeft: '20px',
        paddingRight: '20px',
        position: 'relative',
      }}
    >
      {/* Main Section Header */}
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
          Projects
        </div>
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 2.6rem)',
            fontWeight: 900,
            color: '#ffffff',
            letterSpacing: '-0.025em',
          }}
        >
          Featured Projects
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
          Production retail data systems, automated ETL pipelines, and scalable enterprise applications.
        </p>
      </div>

      {/* ========================================================= */}
      {/* SECTION 1: AUTOMATION & REPORTING                         */}
      {/* ========================================================= */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
        <span
          style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          AUTOMATION &amp; REPORTING
        </span>
        <div
          style={{
            flex: 1,
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            marginLeft: '16px',
          }}
        />
      </div>

      {/* 2 Big Featured Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {automationProjects.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="glass-card"
            style={{
              borderRadius: '8px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: card.isPlaceholder ? 'rgba(7, 9, 18, 0.45)' : 'rgba(7, 9, 18, 0.8)',
            }}
          >
            <div>
              {/* Header Top Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  marginBottom: '16px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                  <div
                    style={{
                      padding: '10px',
                      borderRadius: '8px',
                      backgroundColor: card.isPlaceholder
                        ? 'rgba(255, 255, 255, 0.04)'
                        : 'rgba(59, 130, 246, 0.12)',
                      border: card.isPlaceholder
                        ? '1px solid rgba(255, 255, 255, 0.08)'
                        : '1px solid rgba(59, 130, 246, 0.25)',
                      color: card.isPlaceholder ? '#64748b' : '#60a5fa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {card.isPlaceholder ? <FiCpu size={18} /> : <FiFileText size={18} />}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h3
                      className="project-card-title"
                      onClick={() =>
                        !card.isPlaceholder &&
                        setSelectedProject(card)
                      }
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: card.isPlaceholder ? '#cbd5e1' : '#ffffff',
                        lineHeight: 1.3,
                        margin: 0,
                      }}
                    >
                      {card.title}
                    </h3>
                    <div
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#64748b',
                        marginTop: '3px',
                      }}
                    >
                      {card.subtitle}
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                {card.badge && (
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      backgroundColor: card.isPlaceholder
                        ? 'rgba(255, 255, 255, 0.04)'
                        : 'rgba(59, 130, 246, 0.12)',
                      color: card.isPlaceholder ? '#64748b' : '#93c5fd',
                      border: card.isPlaceholder
                        ? '1px solid rgba(255, 255, 255, 0.08)'
                        : '1px solid rgba(59, 130, 246, 0.3)',
                      flexShrink: 0,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {card.badge}
                  </span>
                )}
              </div>

              {/* Punchline */}
              {card.punchline && (
                <p
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: card.isPlaceholder ? '#64748b' : '#e2e8f0',
                    marginTop: '16px',
                    marginBottom: '10px',
                    lineHeight: 1.5,
                  }}
                >
                  {card.punchline}
                </p>
              )}

              {/* Description */}
              <p
                style={{
                  fontSize: card.punchline ? '0.78rem' : '0.84rem',
                  color: card.isPlaceholder ? '#475569' : '#94a3b8',
                  lineHeight: 1.65,
                  marginTop: card.punchline ? '0' : '16px',
                  marginBottom: '20px',
                }}
              >
                {card.description}
              </p>

              {/* 3 Stats Boxes */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '10px',
                  marginTop: '20px',
                  marginBottom: '16px',
                }}
              >
                {card.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    style={{
                      backgroundColor: '#0c0f1d',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '8px',
                      padding: '14px 8px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: card.isPlaceholder
                          ? '#64748b'
                          : mIdx === 1
                          ? '#60a5fa'
                          : '#ffffff',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {m.value}
                    </div>
                    <div
                      style={{
                        fontSize: '0.625rem',
                        fontFamily: 'var(--font-mono)',
                        color: card.isPlaceholder ? '#475569' : '#64748b',
                        marginTop: '4px',
                        lineHeight: 1.2,
                        textTransform: 'none',
                      }}
                    >
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured Tech Tags */}
              {card.tags && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '16px',
                  }}
                >
                  {card.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 9px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(59, 130, 246, 0.08)',
                        border: '1px solid rgba(59, 130, 246, 0.22)',
                        color: '#93c5fd',
                        lineHeight: 1.4,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Button */}
            {card.isPlaceholder ? (
              <button
                disabled
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  color: '#475569',
                  fontWeight: 600,
                  fontSize: '0.8125rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <FiLock size={15} />
                <span>Coming Soon</span>
              </button>
            ) : (
              <button
                onClick={() => setSelectedProject(card)}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  color: '#09090b',
                  fontWeight: 700,
                  fontSize: '0.8125rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f4f4f5';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FiBookOpen size={16} />
                <span>Read Case Study</span>
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* ========================================================= */}
      {/* SECTION 2: SCRAPING ENGINES BY NICHE                      */}
      {/* ========================================================= */}
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '56px', marginBottom: '24px' }}>
        <span
          style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          SCRAPING ENGINES BY NICHE
        </span>
        <div
          style={{
            flex: 1,
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            marginLeft: '16px',
          }}
        />
      </div>

      {/* 3 Small Niche Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}
      >
        {scrapingNicheProjects.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card"
            style={{
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(7, 9, 18, 0.75)',
              padding: 0,
            }}
          >
            {/* Top Chamber: Tags + Icon (subtly lighter background, full-width border) */}
            <div
              style={{
                padding: '20px 22px 18px 22px',
                backgroundColor: 'rgba(255, 255, 255, 0.035)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '12px',
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  minWidth: 0,
                  paddingRight: '6px',
                }}
              >
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontSize: '0.65rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.09)',
                      color: tag.startsWith('+') ? '#94a3b8' : '#cbd5e1',
                      whiteSpace: 'nowrap',
                      lineHeight: 1.4,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '6px',
                  backgroundColor: '#0c0f1d',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#60a5fa',
                  flexShrink: 0,
                  alignSelf: 'flex-start',
                }}
              >
                {getNicheIcon(item.icon)}
              </div>
            </div>

            {/* Bottom Chamber: Title, Description & Action Buttons (differentiated background) */}
            <div
              style={{
                padding: '20px 22px 22px 22px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(0, 0, 0, 0.22)',
              }}
            >
              <div>
                {/* Title & Badge Count Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                  }}
                >
                  <h4
                    className="project-card-title"
                    onClick={() => setSelectedProject({ ...item, isScrapingNiche: true })}
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.3,
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h4>
                  <span
                    style={{
                      fontSize: '0.8125rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#71717a',
                      fontWeight: 600,
                      marginLeft: '12px',
                      flexShrink: 0,
                    }}
                  >
                    {item.count}
                  </span>
                </div>

                {/* Description */}
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

              {/* Bottom 2 Buttons */}
              <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                <button
                  onClick={() => setSelectedProject({ ...item, isScrapingNiche: true })}
                  style={{
                    flex: 1,
                    padding: '9px 12px',
                    borderRadius: '6px',
                    backgroundColor: '#ffffff',
                    color: '#09090b',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f4f4f5')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                >
                  <FiLayers size={13} />
                  <span>View Details</span>
                </button>
                <a
                  href="https://apify.com/wyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    padding: '9px 12px',
                    borderRadius: '6px',
                    backgroundColor: '#0c0f1d',
                    color: '#cbd5e1',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1e293b';
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#0c0f1d';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.color = '#cbd5e1';
                  }}
                >
                  <FiArrowUpRight size={13} />
                  <span>View on Apify</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ========================================================= */}
      {/* SECTION 3: WEB DEVELOPMENT                                */}
      {/* ========================================================= */}
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '56px', marginBottom: '24px' }}>
        <span
          style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          WEB DEVELOPMENT
        </span>
        <div
          style={{
            flex: 1,
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            marginLeft: '16px',
          }}
        />
      </div>

      {/* Small Web Dev Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 380px))',
          gap: '20px',
        }}
      >
        {webDevProjects.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card"
            style={{
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(7, 9, 18, 0.75)',
              padding: 0,
            }}
          >
            {/* Top Chamber: Tags + Icon (subtly lighter background, full-width border) */}
            <div
              style={{
                padding: '20px 22px 18px 22px',
                backgroundColor: 'rgba(255, 255, 255, 0.035)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '12px',
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  minWidth: 0,
                  paddingRight: '6px',
                }}
              >
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontSize: '0.65rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.09)',
                      color: tag.startsWith('+') ? '#94a3b8' : '#cbd5e1',
                      whiteSpace: 'nowrap',
                      lineHeight: 1.4,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  backgroundColor: '#0c0f1d',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#60a5fa',
                  flexShrink: 0,
                  alignSelf: 'flex-start',
                }}
              >
                {getNicheIcon(item.icon)}
              </div>
            </div>

            {/* Bottom Chamber: Title, Description & Action Buttons (differentiated background) */}
            <div
              style={{
                padding: '20px 22px 22px 22px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(0, 0, 0, 0.22)',
              }}
            >
              <div>
                {/* Title */}
                <h4
                  className="project-card-title"
                  onClick={() => setSelectedProject(item)}
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.3,
                    margin: '0 0 8px 0',
                    cursor: 'pointer',
                  }}
                >
                  {item.title}
                </h4>

                {/* Description */}
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

              {/* Bottom 2 Buttons */}
              <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                <button
                  onClick={() => setSelectedProject(item)}
                  style={{
                    flex: 1,
                    padding: '9px 12px',
                    borderRadius: '8px',
                    backgroundColor: '#ffffff',
                    color: '#09090b',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f4f4f5')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                >
                  <FiLayers size={13} />
                  <span>View Details</span>
                </button>
                <button
                  disabled
                  title="Web belum di-hosting"
                  style={{
                    flex: 1,
                    padding: '9px 12px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    color: '#64748b',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    cursor: 'not-allowed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <FiLock size={13} />
                  <span>View</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
}
