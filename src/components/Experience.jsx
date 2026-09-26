import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiExternalLink } from 'react-icons/fi';
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
          <FiBriefcase size={26} style={{ color: '#60a5fa', flexShrink: 0 }} />
          <h3
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.3rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.025em',
              whiteSpace: 'nowrap',
            }}
          >
            Experience
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

        {/* Company Card Block */}
        <div>
          {/* Header Row: Logo + Company Info */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
              marginBottom: '20px',
              flexWrap: 'wrap',
            }}
          >
            {/* Indomaret Logo Badge (with subtle hover zoom micro-animation) */}
            <a
              href={company.website || 'https://www.indomaret.co.id/'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Indomaret Website"
              className="company-logo-badge"
            >
              <img
                src="/images/indomaret-logo-only.png"
                alt="Indomaret Logo"
              />
            </a>

            <div>
              <h4
                style={{
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                {company.company}
              </h4>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#94a3b8',
                  marginTop: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>{company.duration}</span>
                <span>•</span>
                <span>{company.type}</span>
              </div>
            </div>
          </div>

          {/* Overview Callout with Visit CTA at bottom right */}
          <div
            className="experience-overview"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              borderRadius: '12px',
              padding: '16px 20px',
              marginBottom: '40px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                flex: 1,
                minWidth: '260px',
                fontSize: '0.85rem',
                color: '#94a3b8',
                lineHeight: 1.65,
              }}
            >
              {company.overview}
            </div>

            {/* Small CTA Button: Visit */}
            <a
              href={company.website || 'https://www.indomaret.co.id/'}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#cbd5e1',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                marginLeft: 'auto',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.14)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#cbd5e1';
              }}
            >
              <span>Visit</span>
              <FiExternalLink size={12} style={{ color: '#60a5fa' }} />
            </a>
          </div>

          {/* Vertical Timeline Nodes */}
          <div
            className="timeline-container"
            style={{
              position: 'relative',
              borderLeft: '2px solid rgba(59, 130, 246, 0.4)',
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
              {/* Hollow Blue Ring Node (matching reference image) */}
              <span
                className="timeline-node"
                style={{
                  position: 'absolute',
                  left: '-39px',
                  top: '5px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: '#070913',
                  border: '2px solid #3b82f6',
                  display: 'block',
                  boxSizing: 'border-box',
                }}
              />

              <h5
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.015em',
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                {role1.title}
              </h5>

              {/* Blue Monospace Meta */}
              <div
                style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#60a5fa',
                  fontWeight: 600,
                  marginTop: '6px',
                  letterSpacing: '0.02em',
                }}
              >
                {role1.employmentType} · {role1.period}
              </div>

              {/* Location */}
              <div
                style={{
                  fontSize: '0.76rem',
                  color: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: '5px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <FiMapPin size={13} style={{ color: '#64748b' }} />
                <span>{role1.location}</span>
              </div>

              {/* Skills */}
              <div
                style={{
                  fontSize: '0.8rem',
                  color: '#cbd5e1',
                  marginTop: '10px',
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: '#60a5fa', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>Skills: </span>
                <span>{role1.skills}</span>
              </div>

              {/* Key Achievements (Clean list, NO nested card) */}
              <div style={{ marginTop: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <LuTrophy size={16} style={{ color: '#60a5fa', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.01em' }}>
                    Key Achievements
                  </span>
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.65 }}>
                    <span style={{ color: '#60a5fa', marginTop: '2px', flexShrink: 0, fontSize: '0.85rem' }}>▸</span>
                    <span>
                      Analyze <strong style={{ color: '#ffffff', fontWeight: 600 }}>sales, stock, store performance, and retail metrics</strong> to provide insights for <strong style={{ color: '#ffffff', fontWeight: 600 }}>merchandising evaluation and business decision-making</strong>.
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.65 }}>
                    <span style={{ color: '#60a5fa', marginTop: '2px', flexShrink: 0, fontSize: '0.85rem' }}>▸</span>
                    <span>
                      Develop and maintain <strong style={{ color: '#ffffff', fontWeight: 600 }}>Python-based reporting automation</strong> for recurring merchandising reports, reducing daily manual processing across <strong style={{ color: '#ffffff', fontWeight: 600 }}>11 reports from 165–220 minutes to ~30 seconds (99.3% efficiency gain)</strong>.
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.65 }}>
                    <span style={{ color: '#60a5fa', marginTop: '2px', flexShrink: 0, fontSize: '0.85rem' }}>▸</span>
                    <span>
                      Conduct competitive analysis (<strong style={{ color: '#ffffff', fontWeight: 600 }}>OI Save vs. Indomaret</strong>) across <strong style={{ color: '#ffffff', fontWeight: 600 }}>75 stores and 40 product departments</strong>, using <strong style={{ color: '#ffffff', fontWeight: 600 }}>SPD, APC, and STD evaluation metrics</strong>.
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.65 }}>
                    <span style={{ color: '#60a5fa', marginTop: '2px', flexShrink: 0, fontSize: '0.85rem' }}>▸</span>
                    <span>
                      Develop <strong style={{ color: '#ffffff', fontWeight: 600 }}>store-level target allocation models</strong> using <strong style={{ color: '#ffffff', fontWeight: 600 }}>historical sales trends and carton-packaging rules</strong> to support nationwide merchandising initiatives.
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.65 }}>
                    <span style={{ color: '#60a5fa', marginTop: '2px', flexShrink: 0, fontSize: '0.85rem' }}>▸</span>
                    <span>
                      Transform data from <strong style={{ color: '#ffffff', fontWeight: 600 }}>internal tools, Looker Studio, Tableau</strong>, and other sources into <strong style={{ color: '#ffffff', fontWeight: 600 }}>structured analysis and actionable business insights</strong>.
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.65 }}>
                    <span style={{ color: '#60a5fa', marginTop: '2px', flexShrink: 0, fontSize: '0.85rem' }}>▸</span>
                    <span>
                      Collaborate with stakeholders to translate business requirements into <strong style={{ color: '#ffffff', fontWeight: 600 }}>analytical solutions, reporting improvements, and automated workflows</strong>.
                    </span>
                  </li>
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
              {/* Hollow Blue Ring Node (matching reference image) */}
              <span
                className="timeline-node"
                style={{
                  position: 'absolute',
                  left: '-39px',
                  top: '5px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: '#070913',
                  border: '2px solid #3b82f6',
                  display: 'block',
                  boxSizing: 'border-box',
                }}
              />

              <h5
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.015em',
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                {role2.title}
              </h5>

              {/* Blue Monospace Meta */}
              <div
                style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#60a5fa',
                  fontWeight: 600,
                  marginTop: '6px',
                  letterSpacing: '0.02em',
                }}
              >
                {role2.period}
              </div>

              {/* Location */}
              <div
                style={{
                  fontSize: '0.76rem',
                  color: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: '5px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <FiMapPin size={13} style={{ color: '#64748b' }} />
                <span>{role2.location}</span>
              </div>

              {/* Skills */}
              <div
                style={{
                  fontSize: '0.8rem',
                  color: '#cbd5e1',
                  marginTop: '10px',
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: '#60a5fa', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>Skills: </span>
                <span>{role2.skills}</span>
              </div>

              {/* Key Achievements (Clean list, NO nested card) */}
              <div style={{ marginTop: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <LuTrophy size={16} style={{ color: '#60a5fa', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.01em' }}>
                    Key Achievements
                  </span>
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.65 }}>
                    <span style={{ color: '#60a5fa', marginTop: '2px', flexShrink: 0, fontSize: '0.85rem' }}>▸</span>
                    <span>
                      <strong style={{ color: '#ffffff', fontWeight: 600 }}>Product Data Management:</strong> Managed the registration process for an average of <strong style={{ color: '#ffffff', fontWeight: 600 }}>70 new products per month</strong> into the system, ensuring complete data accuracy before nationwide distribution across retail stores.
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.65 }}>
                    <span style={{ color: '#60a5fa', marginTop: '2px', flexShrink: 0, fontSize: '0.85rem' }}>▸</span>
                    <span>
                      <strong style={{ color: '#ffffff', fontWeight: 600 }}>Pricing Administration:</strong> Handled regular input and updating of <strong style={{ color: '#ffffff', fontWeight: 600 }}>product selling prices</strong>, maintaining strict alignment with prevailing retail merchandising strategy.
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.65 }}>
                    <span style={{ color: '#60a5fa', marginTop: '2px', flexShrink: 0, fontSize: '0.85rem' }}>▸</span>
                    <span>
                      <strong style={{ color: '#ffffff', fontWeight: 600 }}>Promotion Execution:</strong> Managed technical setup and system parameters for <strong style={{ color: '#ffffff', fontWeight: 600 }}>promotional campaigns</strong>, ensuring effective and timely execution at the store level.
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.65 }}>
                    <span style={{ color: '#60a5fa', marginTop: '2px', flexShrink: 0, fontSize: '0.85rem' }}>▸</span>
                    <span>
                      <strong style={{ color: '#ffffff', fontWeight: 600 }}>Product Classification & Tagging:</strong> Responsible for applying product labels (tags) to categorize sales performance, identifying <strong style={{ color: '#ffffff', fontWeight: 600 }}>best-sellers (fast-moving), regular-selling items</strong>, and items slated for delisting.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .company-logo-badge {
          width: 96px;
          height: 64px;
          border-radius: 16px;
          background-color: #ffffff;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.15);
          overflow: hidden;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease;
        }

        .company-logo-badge:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(59, 130, 246, 0.25);
          border-color: rgba(59, 130, 246, 0.5);
        }

        .company-logo-badge img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .company-logo-badge:hover img {
          transform: scale(1.08);
        }

        @media (min-width: 640px) {
          .experience-overview {
            margin-left: 114px !important;
          }
          .timeline-container {
            margin-left: 124px !important;
            padding-left: 32px !important;
          }
          .timeline-node {
            left: -39px !important;
          }
        }
        @media (max-width: 639px) {
          .experience-overview {
            margin-left: 0 !important;
          }
          .timeline-container {
            margin-left: 14px !important;
            padding-left: 24px !important;
          }
          .timeline-node {
            left: -31px !important;
          }
        }
      `}</style>
    </section>
  );
}
