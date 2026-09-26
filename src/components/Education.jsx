import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiBookOpen, FiMapPin, FiExternalLink, FiGlobe } from 'react-icons/fi';
import { LuTrophy } from 'react-icons/lu';
import { educationData } from '../data/portfolioData';

/**
 * Education Section - Formatted identically to Experience section (jesky.dev style).
 * Features:
 * - Consistent section header with FiBookOpen
 * - Aceternity UI dynamic scroll-linked timeline with glowing gradient progress beam
 * - Sticky sidebar with institution title (UPH) on desktop
 * - Interactive node circle with continuous spinning ring for active academic status
 * - 12-column open layout without heavy outer card enclosures
 * - Official UPH Logo tile with hover scale zoom
 * - Badges: Education, Undergraduate Degree, and Active radar ping
 * - Thin transparent glass card for academic overview description
 * - Interactive Key Academic Highlights with glowing hover dots
 * - Bottom-right Visit Website CTA button with globe icon and external link
 */
export default function Education() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Measure content container height for scroll beam
  useEffect(() => {
    const updateHeight = () => {
      if (trackRef.current) {
        setHeight(trackRef.current.getBoundingClientRect().height);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 18%', 'end 72%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  return (
    <section
      id="education"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Section Header (Consistent with project styling) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '56px' }}>
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

        {/* Dynamic Timeline Container */}
        <div ref={containerRef} className="timeline-outer-wrap">
          <div ref={trackRef} className="timeline-track-container">
            <div className="timeline-entry-row timeline-entry-last">
              {/* Sticky Left Column on Desktop (jesky.dev style) */}
              <div className="timeline-sticky-sidebar">
                {/* Node with animated spin ring for active education */}
                <div className="timeline-node-wrap">
                  {educationData.isActive && (
                    <div className="timeline-node-spinner" />
                  )}
                  <div
                    className={`timeline-node-core ${
                      educationData.isActive ? 'timeline-node-core-active' : ''
                    }`}
                  />
                </div>

                <h4 className="timeline-sticky-title">
                  {educationData.timelineTitle || educationData.acronym}
                </h4>
              </div>

              {/* Main Content Column */}
              <div className="timeline-card-col">
                {/* Mobile Header (Node + Title) */}
                <div className="timeline-mobile-header">
                  <div className="timeline-mobile-node">
                    {educationData.isActive && <div className="timeline-node-spinner-sm" />}
                    <div
                      className={`timeline-node-core-sm ${
                        educationData.isActive ? 'timeline-node-core-active' : ''
                      }`}
                    />
                  </div>
                  <h4 className="timeline-mobile-title">
                    {educationData.timelineTitle || educationData.acronym}
                  </h4>
                </div>

                {/* 12-Column Experience-Style Open Content Flow (No Outer Card) */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="education-content-flow"
                >
                  {/* Top Grid: Logo (col 4) + Metadata (col 8) */}
                  <div className="card-top-grid">
                    {/* Logo Tile */}
                    <a
                      href={educationData.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="education-logo-box group"
                      title={`Visit ${educationData.institution}`}
                    >
                      <img
                        src={educationData.logo || '/images/uph-logo.png'}
                        alt={`${educationData.institution} Logo`}
                        className="education-logo-img"
                      />
                    </a>

                    {/* Right Metadata */}
                    <div className="card-meta-col">
                      {/* Location */}
                      <div className="card-location">
                        <FiMapPin size={13} style={{ color: '#60a5fa', flexShrink: 0 }} />
                        <span>{educationData.location}</span>
                      </div>

                      {/* Institution Main Title (Solid White, No Blue Gradient) */}
                      <h4 className="card-main-title">
                        {educationData.institution}
                      </h4>

                      {/* Badges Row */}
                      <div className="card-badges-row">
                        {/* Education Badge */}
                        <span className="badge-education">
                          🎓 Education
                        </span>

                        {/* Degree Type Badge */}
                        <span className="badge-degree-type">
                          <span className="badge-dot-blue" />
                          {educationData.type}
                        </span>

                        {/* Active Radar Ping Badge */}
                        {educationData.isActive && (
                          <span className="badge-active">
                            <span className="radar-ping-wrap">
                              <span className="radar-ping-wave" />
                              <span className="radar-ping-dot" />
                            </span>
                            Active
                          </span>
                        )}
                      </div>

                      {/* Period & GPA */}
                      <div className="card-period">
                        <span>📅</span>
                        <span>{educationData.period}</span>
                        <span style={{ color: '#475569', margin: '0 4px' }}>•</span>
                        <span style={{ color: '#facc15', fontWeight: 700 }}>
                          Cumulative GPA: {educationData.gpa}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Degree & Faculty Sub-Header */}
                  <div className="degree-details-container">
                    <h5 className="degree-title">{educationData.degree}</h5>
                    <div className="degree-meta-row">
                      <span className="degree-faculty">{educationData.faculty}</span>
                      <span className="degree-dot">•</span>
                      <span className="degree-mode">{educationData.mode}</span>
                    </div>

                    {educationData.focus && (
                      <div className="degree-focus">
                        <span className="degree-focus-label">Focus: </span>
                        <span className="degree-focus-text">{educationData.focus}</span>
                      </div>
                    )}
                  </div>

                  {/* Academic Overview Box (Thin Transparent Glass Card, Matching Experience / jesky.dev) */}
                  {educationData.overview && (
                    <div className="overview-callout-box">
                      <p>{formatHighlightText(educationData.overview)}</p>
                    </div>
                  )}

                  {/* Key Academic Highlights */}
                  {educationData.highlights && educationData.highlights.length > 0 && (
                    <div className="achievements-section">
                      <div className="achievements-heading">
                        <LuTrophy size={16} style={{ color: '#60a5fa', flexShrink: 0 }} />
                        <span>Key Academic Highlights</span>
                      </div>
                      <div className="achievements-list">
                        {educationData.highlights.map((item, idx) => (
                          <div key={idx} className="achievement-item group">
                            <span className="achievement-dot group-hover:scale-125" />
                            <p className="achievement-text">
                              {formatHighlightText(item)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bottom-Right Visit Website CTA */}
                  {educationData.website && (
                    <div className="card-footer-action">
                      <motion.a
                        href={educationData.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.03 }}
                        className="visit-action-btn"
                      >
                        <FiGlobe size={14} style={{ color: '#60a5fa', flexShrink: 0 }} />
                        <span>Visit Website</span>
                        <FiExternalLink size={12} style={{ color: '#60a5fa', opacity: 0.85 }} />
                      </motion.a>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Dynamic Scroll-Linked Glowing Beam Line */}
            <div
              style={{ height: `${height}px` }}
              className="timeline-track-rail"
            >
              <motion.div
                style={{ height: heightTransform, opacity: opacityTransform }}
                className="timeline-glowing-beam"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Styled Scoped CSS for Jesky.dev Experience/Education aesthetics */}
      <style>{`
        /* Timeline Root Structure */
        .timeline-outer-wrap {
          position: relative;
          width: 100%;
        }

        .timeline-track-container {
          position: relative;
          width: 100%;
          margin: 0 auto;
        }

        .timeline-entry-row {
          display: flex;
          justify-content: flex-start;
          gap: 36px;
          padding: 32px 0 0 0;
          position: relative;
        }

        .timeline-entry-last {
          padding-bottom: 0;
        }

        /* Sticky Left Column (Desktop) */
        @media (min-width: 860px) {
          .timeline-sticky-sidebar {
            display: flex;
            position: sticky;
            top: 130px;
            align-self: flex-start;
            z-index: 2;
            width: 220px;
            flex-shrink: 0;
            align-items: center;
          }

          .timeline-mobile-header {
            display: none;
          }

          .timeline-card-col {
            position: relative;
            flex: 1;
            padding-left: 20px;
          }

          .timeline-track-rail {
            left: 17px;
          }

          .timeline-node-wrap {
            position: absolute;
            left: 0;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .timeline-sticky-title {
            padding-left: 56px;
            font-size: clamp(1.4rem, 2.4vw, 2.1rem);
            font-weight: 800;
            text-transform: uppercase;
            color: #ffffff;
            letter-spacing: 0.04em;
            font-family: var(--font-mono, monospace);
            line-height: 1.2;
          }
        }

        /* Mobile Breakpoint (< 860px) */
        @media (max-width: 859px) {
          .timeline-sticky-sidebar {
            display: none;
          }

          .timeline-mobile-header {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 18px;
          }

          .timeline-mobile-title {
            font-size: 1.5rem;
            font-weight: 800;
            text-transform: uppercase;
            color: #ffffff;
            letter-spacing: 0.04em;
            font-family: var(--font-mono, monospace);
          }

          .timeline-card-col {
            position: relative;
            width: 100%;
            padding-left: 32px;
          }

          .timeline-track-rail {
            left: 7px;
          }
        }

        /* Timeline Rail & Glowing Beam */
        .timeline-track-rail {
          position: absolute;
          top: 0;
          width: 2px;
          overflow: hidden;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(255, 255, 255, 0.12) 10%,
            rgba(255, 255, 255, 0.12) 90%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .timeline-glowing-beam {
          position: absolute;
          inset-inline: 0;
          top: 0;
          width: 2px;
          background: linear-gradient(
            to top,
            #a855f7 0%,
            #3b82f6 50%,
            transparent 100%
          );
          border-radius: 9999px;
          box-shadow: 0 0 14px rgba(96, 165, 250, 0.9), 0 0 24px rgba(168, 85, 247, 0.5);
          transition: all 0.1s ease-out;
        }

        /* Node Core & Continuous Spinning Ring */
        .timeline-node-spinner {
          position: absolute;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: #60a5fa;
          border-right-color: rgba(96, 165, 250, 0.4);
          animation: spin 0.85s linear infinite;
        }

        .timeline-node-spinner-sm {
          position: absolute;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: #60a5fa;
          animation: spin 0.85s linear infinite;
        }

        .timeline-node-core {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #18181b;
          border: 2px solid #3f3f46;
          position: relative;
          z-index: 2;
        }

        .timeline-node-core-active {
          background: linear-gradient(135deg, #3b82f6, #a855f7);
          border-color: #60a5fa;
          box-shadow: 0 0 14px rgba(96, 165, 250, 0.9);
        }

        .timeline-mobile-node {
          position: relative;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .timeline-node-core-sm {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #18181b;
          border: 2px solid #3f3f46;
          position: relative;
          z-index: 2;
        }

        /* Education Content Flow (No Outer Card Enclosure) */
        .education-content-flow {
          width: 100%;
          position: relative;
        }

        /* Card Top Grid */
        .card-top-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          align-items: center;
        }

        @media (min-width: 680px) {
          .card-top-grid {
            grid-template-columns: 140px 1fr;
            gap: 24px;
          }
        }

        /* Education Logo Box (Crisp White Tile with Hover Scale) */
        .education-logo-box {
          height: 96px;
          width: 100%;
          background: #ffffff;
          border-radius: 16px;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          text-decoration: none;
        }

        .education-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .education-logo-box:hover .education-logo-img {
          transform: scale(1.1);
        }

        /* Card Metadata Column */
        .card-meta-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .card-location {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-family: var(--font-mono, monospace);
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: #94a3b8;
          font-weight: 500;
        }

        /* Main Institution Title (Crisp Solid White) */
        .card-main-title {
          font-size: clamp(1.3rem, 2.4vw, 1.7rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
          margin: 0;
        }

        /* Badges */
        .card-badges-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          margin-top: 4px;
        }

        .badge-education {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 11px;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 600;
          background: rgba(16, 185, 129, 0.12);
          color: #6ee7b7;
          border: 1px solid rgba(16, 185, 129, 0.3);
          backdrop-filter: blur(6px);
        }

        .badge-dot-emerald {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 6px #34d399;
        }

        .badge-degree-type {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 11px;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 500;
          background: rgba(59, 130, 246, 0.12);
          color: #93c5fd;
          border: 1px solid rgba(59, 130, 246, 0.28);
          backdrop-filter: blur(6px);
        }

        .badge-dot-blue {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #60a5fa;
          box-shadow: 0 0 6px #60a5fa;
        }

        .badge-active {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 11px;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 700;
          background: rgba(234, 179, 8, 0.14);
          color: #fde047;
          border: 1px solid rgba(234, 179, 8, 0.35);
          backdrop-filter: blur(6px);
        }

        .radar-ping-wrap {
          position: relative;
          display: inline-flex;
          width: 8px;
          height: 8px;
        }

        .radar-ping-wave {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #facc15;
          animation: radarPing 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .radar-ping-dot {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #facc15;
        }

        .card-period {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
          font-size: 0.8rem;
          font-family: var(--font-mono, monospace);
          color: #d3bc90;
          font-weight: 500;
          margin-top: 2px;
        }

        /* Degree Details Header */
        .degree-details-container {
          margin-top: 22px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .degree-title {
          font-size: 1.18rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          line-height: 1.3;
        }

        .degree-meta-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 0.78rem;
          font-family: var(--font-mono, monospace);
          color: #94a3b8;
        }

        .degree-faculty {
          color: #60a5fa;
          font-weight: 500;
        }

        .degree-dot {
          color: #475569;
        }

        .degree-mode {
          color: #94a3b8;
        }

        .degree-focus {
          font-size: 0.8rem;
          font-family: var(--font-mono, monospace);
          line-height: 1.5;
          margin-top: 4px;
        }

        .degree-focus-label {
          color: #94a3b8;
          font-weight: 600;
        }

        .degree-focus-text {
          color: #cbd5e1;
        }

        /* Overview Card (Thin Transparent Glass, Matching Experience) */
        .overview-callout-box {
          margin-top: 18px;
          margin-bottom: 20px;
          padding: 14px 18px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #e2e8f0;
          font-size: 0.85rem;
          line-height: 1.65;
          transition: background 0.25s ease, border-color 0.25s ease;
        }

        .overview-callout-box:hover {
          background: rgba(255, 255, 255, 0.055);
          border-color: rgba(255, 255, 255, 0.16);
        }

        .overview-callout-box p {
          margin: 0;
        }

        /* Key Academic Highlights */
        .achievements-section {
          margin-top: 20px;
        }

        .achievements-heading {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.92rem;
          font-weight: 700;
          background: linear-gradient(90deg, #60a5fa, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 12px;
          letter-spacing: 0.02em;
        }

        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .achievement-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          cursor: default;
        }

        .achievement-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #60a5fa;
          margin-top: 7px;
          flex-shrink: 0;
          transition: all 0.25s ease;
          box-shadow: 0 0 6px rgba(96, 165, 250, 0.6);
        }

        .achievement-item:hover .achievement-dot {
          background: #c084fc;
          box-shadow: 0 0 10px rgba(192, 132, 252, 0.9);
          transform: scale(1.3);
        }

        .achievement-text {
          font-size: 0.84rem;
          color: #cbd5e1;
          line-height: 1.65;
          margin: 0;
          transition: color 0.25s ease;
        }

        .achievement-item:hover .achievement-text {
          color: #ffffff;
        }

        /* Card Footer Action (Visit Website Button) */
        .card-footer-action {
          display: flex;
          justify-content: flex-end;
          margin-top: 24px;
        }

        .visit-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 9px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.16), rgba(168, 85, 247, 0.16));
          border: 1px solid rgba(59, 130, 246, 0.35);
          color: #e2e8f0;
          font-size: 0.78rem;
          font-family: var(--font-mono, monospace);
          font-weight: 600;
          text-decoration: none;
          backdrop-filter: blur(8px);
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .visit-action-btn:hover {
          border-color: rgba(96, 165, 250, 0.7);
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.28), rgba(168, 85, 247, 0.28));
          box-shadow: 0 0 16px rgba(59, 130, 246, 0.35);
          color: #ffffff;
        }

        /* Keyframe Animations */
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes radarPing {
          0% { transform: scale(1); opacity: 0.8; }
          75%, 100% { transform: scale(2.4); opacity: 0; }
        }
      `}</style>
    </section>
  );
}

/**
 * Helper to highlight key academic terms and performance metrics
 */
function formatHighlightText(text) {
  // Support markdown **bold** syntax as well as automated key term highlighting
  const regex = /(\*\*.*?\*\*|\b3\.78\s*\/\s*4\.00\b|\bGPA:\s*3\.78\b|database management|systems analysis and design|data analytics|enterprise systems|digital transformation|scalable business solutions|data-driven decision making|process automation|business intelligence|enterprise information systems|information systems, data, technology, and business processes)/gi;
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) => {
        if (!part) return null;
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} style={{ color: '#ffffff', fontWeight: 600 }}>
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (
          /^(?:3\.78\s*\/\s*4\.00|GPA:\s*3\.78|database management|systems analysis and design|data analytics|enterprise systems|digital transformation|scalable business solutions|data-driven decision making|process automation|business intelligence|enterprise information systems|information systems, data, technology, and business processes)$/i.test(
            part
          )
        ) {
          return (
            <strong key={i} style={{ color: '#ffffff', fontWeight: 600 }}>
              {part}
            </strong>
          );
        }
        return part;
      })}
    </span>
  );
}
