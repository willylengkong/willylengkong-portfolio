import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import {
  FiX,
  FiCheckCircle,
  FiCpu,
  FiTarget,
  FiLayers,
  FiArrowUpRight,
  FiShoppingCart,
  FiBriefcase,
  FiTrendingUp,
  FiDatabase,
  FiUsers,
  FiGlobe,
  FiCode,
  FiAlertCircle,
  FiBookOpen,
  FiServer,
} from 'react-icons/fi';
import { LuTrophy } from 'react-icons/lu';
import { TbSpider } from 'react-icons/tb';

export default function CaseStudyModal({ open, onClose, project }) {
  if (!project) return null;

  const detailed = project.detailedCaseStudy;
  const isScrapingNiche = Boolean(
    project.isScrapingNiche || project.details?.whatGetsScraped || project.details?.engines
  );
  const caseStudy = project.caseStudy || {};
  const tags = project.allTags || project.tags || project.builtWith || [project.tech];

  const getModalNicheIcon = (iconName) => {
    switch (iconName) {
      case 'cart':
        return <FiShoppingCart size={18} />;
      case 'briefcase':
        return <FiBriefcase size={18} />;
      case 'trending-up':
      case 'markets':
        return <FiTrendingUp size={18} />;
      case 'database':
        return <FiDatabase size={18} />;
      case 'users':
        return <FiUsers size={18} />;
      case 'globe':
        return <FiGlobe size={18} />;
      case 'code':
        return <FiCode size={18} />;
      default:
        return <FiLayers size={18} />;
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={detailed ? 'md' : isScrapingNiche ? 'md' : 'sm'}
      fullWidth
      slotProps={{
        backdrop: {
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
          },
        },
      }}
      PaperProps={{
        style: {
          backgroundColor: '#070912',
          backgroundImage: 'none',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '6px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.95), 0 0 30px rgba(59, 130, 246, 0.12)',
          color: '#ffffff',
          position: 'relative',
          maxHeight: '90vh',
        },
      }}
    >
      <IconButton
        onClick={onClose}
        aria-label="Close dialog"
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          color: '#94a3b8',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '6px',
          zIndex: 10,
          borderRadius: '8px',
        }}
      >
        <FiX size={18} />
      </IconButton>

      <DialogContent style={{ padding: '24px 22px', overflowY: 'auto' }}>
        {detailed ? (
          /* ======================================================== */
          /* DETAILED ENTERPRISE CASE STUDY MODAL                     */
          /* ======================================================== */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Header */}
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
                  fontWeight: 900,
                  color: '#ffffff',
                  letterSpacing: '-0.025em',
                  margin: '0 0 8px 0',
                  lineHeight: 1.25,
                  paddingRight: '36px',
                }}
              >
                {detailed.title}
              </h2>

              <p
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#94a3b8',
                  margin: '0 0 16px 0',
                  lineHeight: 1.5,
                }}
              >
                {detailed.companyMeta}
              </p>

              {/* Tech Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {detailed.technologyStack.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.6875rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(59, 130, 246, 0.08)',
                      border: '1px solid rgba(59, 130, 246, 0.22)',
                      color: '#93c5fd',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <FiBookOpen size={16} style={{ color: '#60a5fa' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  Overview
                </h3>
              </div>
              <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.7, margin: 0 }}>
                {detailed.overview}
              </p>
            </div>

            {/* The Challenge */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <FiAlertCircle size={16} style={{ color: '#f87171' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  The Challenge
                </h3>
              </div>
              <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '14px' }}>
                {detailed.challengeIntro}
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '12px',
                }}
              >
                {detailed.challenges.map((c, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '14px 16px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(239, 68, 68, 0.03)',
                      border: '1px solid rgba(239, 68, 68, 0.16)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#fca5a5',
                        marginBottom: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span style={{ color: '#ef4444' }}>•</span>
                      <span>{c.title}</span>
                    </div>
                    <p style={{ fontSize: '0.78rem', color: '#cbd5e1', lineHeight: 1.55, margin: 0 }}>
                      {c.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Objectives */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <FiTarget size={16} style={{ color: '#60a5fa' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  Objectives
                </h3>
              </div>
              <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '12px' }}>
                {detailed.objectivesIntro}
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '10px',
                }}
              >
                {detailed.objectives.map((obj, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(59, 130, 246, 0.04)',
                      border: '1px solid rgba(59, 130, 246, 0.16)',
                    }}
                  >
                    <FiCheckCircle size={15} style={{ color: '#60a5fa', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.8rem', color: '#e2e8f0', lineHeight: 1.5 }}>{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <FiCpu size={16} style={{ color: '#60a5fa' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  Solution
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {detailed.solution.paragraphs.map((p, idx) => (
                  <p key={idx} style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.65, margin: 0 }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Workflow (Steps 01 - 06) */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <FiLayers size={16} style={{ color: '#60a5fa' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  Workflow
                </h3>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '12px',
                }}
              >
                {detailed.workflow.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '14px 16px',
                      borderRadius: '8px',
                      backgroundColor: '#0c0f1d',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span
                        style={{
                          fontSize: '0.84rem',
                          fontWeight: 800,
                          color: '#ffffff',
                        }}
                      >
                        {item.step}. {item.name}
                      </span>
                      <span
                        style={{
                          fontSize: '0.65rem',
                          fontFamily: 'var(--font-mono)',
                          color: '#60a5fa',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          backgroundColor: 'rgba(59, 130, 246, 0.1)',
                          border: '1px solid rgba(59, 130, 246, 0.25)',
                        }}
                      >
                        Step {item.step}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <FiCheckCircle size={16} style={{ color: '#60a5fa' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  Key Features
                </h3>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '12px',
                }}
              >
                {detailed.keyFeatures.map((f, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '14px 16px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.025)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <h4
                      style={{
                        fontSize: '0.84rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '6px',
                        lineHeight: 1.35,
                      }}
                    >
                      {f.title}
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.55, margin: 0 }}>
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* System Architecture */}
            {detailed.systemArchitecture && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <FiServer size={16} style={{ color: '#60a5fa' }} />
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                    System Architecture
                  </h3>
                </div>
                {detailed.systemArchitecture.intro && (
                  <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '14px' }}>
                    {detailed.systemArchitecture.intro}
                  </p>
                )}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '12px',
                  }}
                >
                  {detailed.systemArchitecture.components.map((comp, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '14px 16px',
                        borderRadius: '8px',
                        backgroundColor: '#0c0f1d',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <h4
                        style={{
                          fontSize: '0.84rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          marginBottom: '6px',
                          lineHeight: 1.35,
                        }}
                      >
                        {comp.title}
                      </h4>
                      <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.55, margin: 0 }}>
                        {comp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results & Impact */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <LuTrophy size={16} style={{ color: '#60a5fa' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  {detailed.results.title || 'Results & Impact'}
                </h3>
              </div>
              {detailed.results.intro && (
                <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '16px' }}>
                  {detailed.results.intro}
                </p>
              )}

              {/* Metrics cards if available */}
              {detailed.results.metrics && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '10px',
                    marginBottom: '16px',
                  }}
                >
                  {detailed.results.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '14px 12px',
                        borderRadius: '8px',
                        backgroundColor: '#0c0f1d',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 900,
                          color: '#60a5fa',
                          fontFamily: 'var(--font-mono)',
                          marginBottom: '4px',
                        }}
                      >
                        {m.value}
                      </div>
                      <div
                        style={{
                          fontSize: '0.7rem',
                          color: '#cbd5e1',
                          lineHeight: 1.35,
                        }}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Impact points list if available */}
              {detailed.results.points && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '10px',
                    marginBottom: '16px',
                  }}
                >
                  {detailed.results.points.map((pt, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '12px 14px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(59, 130, 246, 0.04)',
                        border: '1px solid rgba(59, 130, 246, 0.16)',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          color: '#93c5fd',
                          marginBottom: '4px',
                        }}
                      >
                        {pt.title}
                      </div>
                      <p style={{ fontSize: '0.78rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
                        {pt.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {detailed.results.summary && (
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(59, 130, 246, 0.05)',
                    border: '1px solid rgba(59, 130, 246, 0.18)',
                    fontSize: '0.82rem',
                    color: '#cbd5e1',
                    lineHeight: 1.6,
                  }}
                >
                  {detailed.results.summary}
                </div>
              )}
            </div>

            {/* Technology Stack */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <FiCode size={16} style={{ color: '#60a5fa' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  Technology Stack
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {detailed.technologyStack.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '5px 12px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.09)',
                      color: '#ffffff',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Scope */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <FiBriefcase size={16} style={{ color: '#60a5fa' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  Project Scope
                </h3>
              </div>
              <div
                style={{
                  padding: '16px 18px',
                  borderRadius: '8px',
                  backgroundColor: '#030408',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '14px',
                }}
              >
                {Object.entries(detailed.projectScope || {}).map(([key, val], idx) => {
                  const label = key
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, (str) => str.toUpperCase());
                  return (
                    <div key={idx}>
                      <div
                        style={{
                          fontSize: '0.6875rem',
                          fontFamily: 'var(--font-mono)',
                          color: '#64748b',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: '#e2e8f0',
                          marginTop: '2px',
                        }}
                      >
                        {val}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : isScrapingNiche ? (
          /* ======================================================== */
          /* SCRAPING NICHE CASE STUDY MODAL                          */
          /* ======================================================== */
          <div>
            {/* Header: Icon + Title + Count Subtitle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px', paddingRight: '36px' }}>
              {project.icon && (
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: '#0c0f1d',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#60a5fa',
                    flexShrink: 0,
                  }}
                >
                  {getModalNicheIcon(project.icon)}
                </div>
              )}
              <div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#94a3b8',
                    letterSpacing: '0.04em',
                  }}
                >
                  Case study · {project.count || project.details?.engines?.length} scraping engines
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '0.84rem',
                color: '#cbd5e1',
                lineHeight: 1.65,
                marginBottom: '20px',
              }}
            >
              {project.details?.description || project.description}
            </p>

            {/* 1. What Gets Scraped */}
            {project.details?.whatGetsScraped && (
              <div style={{ marginBottom: '22px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    marginBottom: '10px',
                  }}
                >
                  <TbSpider size={16} style={{ color: '#60a5fa', flexShrink: 0 }} />
                  <span style={{ color: '#ffffff' }}>What Gets Scraped</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.details.whatGetsScraped.map((item, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.72rem',
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#cbd5e1',
                        lineHeight: 1.4,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Methods & Techniques */}
            {project.details?.methodsAndTechniques && (
              <div style={{ marginBottom: '22px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    marginBottom: '10px',
                  }}
                >
                  <FiCpu size={14} style={{ color: '#60a5fa', flexShrink: 0 }} />
                  <span style={{ color: '#ffffff' }}>Methods &amp; Techniques</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.details.methodsAndTechniques.map((item, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.72rem',
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(59, 130, 246, 0.08)',
                        border: '1px solid rgba(59, 130, 246, 0.22)',
                        color: '#93c5fd',
                        lineHeight: 1.4,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Use Cases */}
            {project.details?.useCases && (
              <div style={{ marginBottom: '22px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    marginBottom: '10px',
                  }}
                >
                  <FiTarget size={14} style={{ color: '#60a5fa', flexShrink: 0 }} />
                  <span style={{ color: '#ffffff' }}>Use Cases</span>
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  {project.details.useCases.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        color: '#94a3b8',
                        fontSize: '0.82rem',
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: '#60a5fa', marginTop: '1px' }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 4. Scraping Engines */}
            {project.details?.engines && (
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    marginBottom: '12px',
                  }}
                >
                  <FiLayers size={14} style={{ color: '#60a5fa', flexShrink: 0 }} />
                  <span style={{ color: '#ffffff' }}>Scraping Engines ({project.details.engines.length})</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {project.details.engines.map((engine, idx) => (
                    <a
                      key={idx}
                      href={`https://apify.com/wyle/${engine.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.08)';
                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                        const titleEl = e.currentTarget.querySelector('.engine-name');
                        if (titleEl) titleEl.style.color = '#93c5fd';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                        const titleEl = e.currentTarget.querySelector('.engine-name');
                        if (titleEl) titleEl.style.color = '#ffffff';
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '3px',
                          paddingRight: '12px',
                          minWidth: 0,
                        }}
                      >
                        <span
                          className="engine-name"
                          style={{
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            color: '#ffffff',
                            lineHeight: 1.4,
                            transition: 'color 0.2s ease',
                          }}
                        >
                          {engine.name}
                        </span>
                        {engine.description && (
                          <span
                            style={{
                              fontSize: '0.73rem',
                              color: '#94a3b8',
                              lineHeight: 1.4,
                            }}
                          >
                            {engine.description}
                          </span>
                        )}
                      </div>
                      <FiArrowUpRight size={15} style={{ color: '#60a5fa', flexShrink: 0 }} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* ======================================================== */
          /* STANDARD ARCHITECTURE CASE STUDY MODAL                   */
          /* ======================================================== */
          <div>
            {/* Header */}
            <div style={{ marginBottom: '16px', paddingRight: '36px' }}>
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#60a5fa',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 700,
                }}
              >
                {caseStudy.subtitle || project.category || 'Enterprise Case Study'}
              </span>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginTop: '4px',
                  letterSpacing: '-0.02em',
                }}
              >
                {project.title}
              </h3>
            </div>

            {/* Tech Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.6875rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(30, 41, 59, 0.7)',
                    color: '#cbd5e1',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Overview */}
            <p
              style={{
                fontSize: '0.84rem',
                color: '#cbd5e1',
                lineHeight: 1.65,
                marginBottom: '18px',
              }}
            >
              {caseStudy.overview || project.summary}
            </p>

            {/* Architecture details */}
            {caseStudy.architecture && (
              <div
                style={{
                  backgroundColor: '#030408',
                  padding: '16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '18px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                }}
              >
                <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
                  ⚡ Key Architecture:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {caseStudy.architecture.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#94a3b8' }}>
                      <span style={{ color: '#3b82f6', marginTop: '2px' }}>▸</span>
                      <span style={{ lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Results */}
            {caseStudy.result && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(59, 130, 246, 0.08)',
                  border: '1px solid rgba(59, 130, 246, 0.25)',
                  color: '#93c5fd',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                }}
              >
                <FiCheckCircle size={18} style={{ color: '#60a5fa', shrink: 0 }} />
                <span>Result: {caseStudy.result}</span>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
