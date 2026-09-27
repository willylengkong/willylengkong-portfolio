import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiExternalLink, FiGlobe } from 'react-icons/fi';
import { LuTrophy } from 'react-icons/lu';
import { experienceData } from '../data/portfolioData';

/**
 * Experience Section - Styled in the aesthetic of creative developer portfolios (jesky.dev style).
 * Features:
 * - Consistent project section header (FiBriefcase + clean title divider)
 * - Aceternity UI dynamic scroll-linked timeline with glowing gradient progress beam
 * - Sticky sidebar with company titles (APIFY / INDOMARET) on desktop
 * - Interactive node circles with continuous spinning ring on active roles
 * - 12-column card layout with crisp white logo badges and hover zoom
 * - Status pills (Work, Self-employed, Full-time, and active radar-ping badge)
 * - Interactive key achievements with glowing hover highlights
 * - Bottom-right Visit CTA buttons
 */
export default function Experience() {
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
      id="experience"
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

        {/* Dynamic Timeline Container */}
        <div ref={containerRef} className="timeline-outer-wrap">
          <div ref={trackRef} className="timeline-track-container">
            {experienceData.map((item, index) => {
              const isLast = index === experienceData.length - 1;
              return (
                <div
                  key={item.id || index}
                  className={`timeline-entry-row ${isLast ? 'timeline-entry-last' : ''}`}
                >
                  {/* Sticky Left Column on Desktop (jesky.dev style) */}
                  <div className="timeline-sticky-sidebar">
                    {/* Node with animated spin ring for active entries */}
                    <div className="timeline-node-wrap">
                      {item.isActive && (
                        <div className="timeline-node-spinner" />
                      )}
                      <div
                        className={`timeline-node-core ${
                          item.isActive ? 'timeline-node-core-active' : ''
                        }`}
                      />
                    </div>

                    <h4 className="timeline-sticky-title">
                      {item.timelineTitle || item.company}
                    </h4>
                  </div>

                  {/* Main Content Card Column */}
                  <div className="timeline-card-col">
                    {/* Mobile Header (Node + Title) */}
                    <div className="timeline-mobile-header">
                      <div className="timeline-mobile-node">
                        {item.isActive && <div className="timeline-node-spinner-sm" />}
                        <div
                          className={`timeline-node-core-sm ${
                            item.isActive ? 'timeline-node-core-active' : ''
                          }`}
                        />
                      </div>
                      <h4 className="timeline-mobile-title">
                        {item.timelineTitle || item.company}
                      </h4>
                    </div>

                    {/* 12-Column Experience Content Flow (No Card Container) */}
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="experience-content-flow"
                    >
                      {/* Top Grid: Logo (col 4) + Metadata (col 8) */}
                      <div className="card-top-grid">
                        {/* Logo Card */}
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="company-logo-box group"
                          title={`Visit ${item.company}`}
                        >
                          <img
                            src={item.logo}
                            alt={`${item.company} Logo`}
                            className="company-logo-img"
                          />
                        </a>

                        {/* Right Metadata */}
                        <div className="card-meta-col">
                          {/* Location */}
                          <div className="card-location">
                            <FiMapPin size={13} style={{ color: '#60a5fa', flexShrink: 0 }} />
                            <span>{item.roles[0]?.location || item.type}</span>
                          </div>

                          {/* Company / Role Main Title */}
                          <h4 className="card-main-title">
                            {item.id === 'apify' ? item.roles[0]?.title : item.company}
                          </h4>

                          {/* Badges Row */}
                          <div className="card-badges-row">
                            {/* Work Badge */}
                            <span className="badge-work">
                              💼 Work
                            </span>

                            {/* Status Badge */}
                            <span className="badge-status">
                              <span className="badge-dot-green" />
                              {item.roles[0]?.employmentType || item.type}
                            </span>

                            {/* Active Radar Ping Badge */}
                            {item.isActive && (
                              <span className="badge-active">
                                <span className="radar-ping-wrap">
                                  <span className="radar-ping-wave" />
                                  <span className="radar-ping-dot" />
                                </span>
                                Active
                              </span>
                            )}
                          </div>

                          {/* Period */}
                          <div className="card-period">
                            <span>📅</span>
                            <span>{item.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Company Overview Callout */}
                      {item.overview && (
                        <div className="overview-callout-box">
                          <p>{renderHighlightedSpan(item.overview)}</p>
                        </div>
                      )}

                      {/* Single Role vs Multi-Role Rendering */}
                      {item.id === 'apify' ? (
                        // Apify: Single Role Details
                        <div className="role-details-container">
                          {/* Skills */}
                          {item.roles[0]?.skills && (
                            <div className="role-skills">
                              <span className="role-skills-label">Skills: </span>
                              <span className="role-skills-text">{item.roles[0].skills}</span>
                            </div>
                          )}

                          {/* Key Achievements */}
                          <div className="achievements-section">
                            <div className="achievements-heading">
                              <LuTrophy size={16} style={{ color: '#60a5fa', flexShrink: 0 }} />
                              <span>Key Achievements</span>
                            </div>
                            <div className="achievements-list">
                              {item.roles[0]?.achievements?.map((ach, i) => (
                                <div key={i} className="achievement-item group">
                                  <span className="achievement-dot group-hover:scale-125" />
                                  <p className="achievement-text">
                                    {formatAchievement(ach)}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Indomaret: Multi-Role Career Progression
                        <div className="multi-role-container">
                          {item.roles.map((role, rIdx) => (
                            <div key={rIdx} className="sub-role-block">
                              {rIdx > 0 && (
                                <div className="role-progression-divider">
                                  <span className="divider-line" />
                                  <span className="divider-label">Role Progression</span>
                                  <span className="divider-line" />
                                </div>
                              )}

                              {/* Role Sub-Header */}
                              <div className="sub-role-header">
                                <div className="sub-role-title-row">
                                  <h5 className="sub-role-title">{role.title}</h5>
                                  <div className="sub-role-badges">
                                    <span className="badge-role-meta">
                                      {role.employmentType}
                                    </span>
                                    {role.isCurrent && (
                                      <span className="badge-active-mini">
                                        <span className="radar-ping-wrap-sm">
                                          <span className="radar-ping-wave" />
                                          <span className="radar-ping-dot" />
                                        </span>
                                        Active
                                      </span>
                                    )}
                                  </div>
                                </div>

                                <div className="sub-role-period-location">
                                  <span className="sub-role-period">📅 {role.period}</span>
                                  <span className="sub-role-dot">•</span>
                                  <span className="sub-role-location">
                                    <FiMapPin size={11} style={{ marginRight: '4px' }} />
                                    {role.location}
                                  </span>
                                </div>

                                {/* Role Skills */}
                                {role.skills && (
                                  <div className="role-skills">
                                    <span className="role-skills-label">Skills: </span>
                                    <span className="role-skills-text">{role.skills}</span>
                                  </div>
                                )}
                              </div>

                              {/* Role Key Achievements */}
                              <div className="achievements-section">
                                <div className="achievements-heading">
                                  <LuTrophy size={15} style={{ color: '#60a5fa', flexShrink: 0 }} />
                                  <span>Key Achievements</span>
                                </div>
                                <div className="achievements-list">
                                  {role.achievements?.map((ach, i) => (
                                    <div key={i} className="achievement-item group">
                                      <span className="achievement-dot group-hover:scale-125" />
                                      <p className="achievement-text">
                                        {formatAchievement(ach)}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Bottom-Right Visit Website CTA */}
                      {item.website && (
                        <div className="card-footer-action">
                          <motion.a
                            href={item.website}
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
              );
            })}

            {/* Dynamic Scroll-Linked Glowing Beam Line (Aceternity UI style) */}
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

      {/* Styled Scoped CSS for Jesky.dev aesthetics */}
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
          padding: 52px 0;
          position: relative;
        }

        .timeline-entry-row:first-child {
          padding-top: 12px;
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
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid rgba(96, 165, 250, 0.2);
          border-top-color: #60a5fa;
          border-left-color: #60a5fa;
          border-bottom-color: #60a5fa;
          animation: spin 0.6s linear infinite;
        }

        .timeline-node-spinner-sm {
          position: absolute;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid rgba(96, 165, 250, 0.2);
          border-top-color: #60a5fa;
          border-left-color: #60a5fa;
          border-bottom-color: #60a5fa;
          animation: spin 0.6s linear infinite;
        }

        .timeline-node-core {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #18181b;
          border: 1.5px solid #3f3f46;
          position: relative;
          z-index: 2;
        }

        .timeline-node-core-active {
          background: linear-gradient(135deg, #3b82f6, #a855f7);
          border-color: #60a5fa;
          box-shadow: 0 0 12px rgba(96, 165, 250, 0.85);
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
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #18181b;
          border: 1.5px solid #3f3f46;
          position: relative;
          z-index: 2;
        }

        /* Experience Content Flow (No Card Enclosure) */
        .experience-content-flow {
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

        /* Company Logo Box */
        .company-logo-box {
          height: 96px;
          width: 100%;
          background: #ffffff;
          border-radius: 16px;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          text-decoration: none;
        }

        .company-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .company-logo-box:hover .company-logo-img {
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

        .badge-work {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 11px;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 600;
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

        .badge-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 11px;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 500;
          background: rgba(34, 197, 94, 0.1);
          color: #86efac;
          border: 1px solid rgba(34, 197, 94, 0.25);
          backdrop-filter: blur(6px);
        }

        .badge-dot-green {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 6px #4ade80;
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

        .badge-active-mini {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 2px 9px;
          border-radius: 9999px;
          font-size: 0.68rem;
          font-weight: 700;
          background: rgba(234, 179, 8, 0.14);
          color: #fde047;
          border: 1px solid rgba(234, 179, 8, 0.35);
        }

        .radar-ping-wrap {
          position: relative;
          display: inline-flex;
          width: 8px;
          height: 8px;
        }

        .radar-ping-wrap-sm {
          position: relative;
          display: inline-flex;
          width: 7px;
          height: 7px;
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
          gap: 6px;
          font-size: 0.8rem;
          font-family: var(--font-mono, monospace);
          color: #d3bc90;
          font-weight: 500;
          margin-top: 2px;
        }

        /* Overview Card (Thin Transparent Glass, Matching jesky.dev) */
        .overview-callout-box {
          margin-top: 20px;
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

        /* Roles & Skills */
        .role-details-container {
          margin-top: 20px;
        }

        .role-skills {
          margin-top: 14px;
          font-size: 0.8rem;
          font-family: var(--font-mono, monospace);
          line-height: 1.5;
        }

        .role-skills-label {
          color: #60a5fa;
          font-weight: 600;
        }

        .role-skills-text {
          color: #cbd5e1;
        }

        /* Key Achievements Section */
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

        /* Multi-Role Sub Progression (Indomaret) */
        .multi-role-container {
          margin-top: 22px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .sub-role-block {
          position: relative;
        }

        .role-progression-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 24px 0 20px 0;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
        }

        .divider-label {
          font-size: 0.68rem;
          font-family: var(--font-mono, monospace);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #64748b;
          font-weight: 600;
        }

        .sub-role-header {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sub-role-title-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .sub-role-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          line-height: 1.25;
        }

        .sub-role-badges {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .badge-role-meta {
          padding: 2px 8px;
          border-radius: 6px;
          font-size: 0.68rem;
          font-family: var(--font-mono, monospace);
          font-weight: 600;
          background: rgba(96, 165, 250, 0.12);
          color: #93c5fd;
          border: 1px solid rgba(96, 165, 250, 0.25);
        }

        .sub-role-period-location {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 0.78rem;
          font-family: var(--font-mono, monospace);
          color: #94a3b8;
          margin-top: 2px;
        }

        .sub-role-period {
          color: #d3bc90;
          font-weight: 500;
        }

        .sub-role-dot {
          color: #475569;
        }

        .sub-role-location {
          display: flex;
          align-items: center;
          color: #94a3b8;
        }

        /* Card Footer Action */
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
 * Helper to highlight metrics and key technical terms in achievement descriptions
 */
function formatAchievement(text) {
  // If text has a category prefix with colon e.g. "Product Data Management: ..."
  const colonIndex = text.indexOf(':');
  if (colonIndex > 0 && colonIndex < 35 && !text.slice(0, colonIndex).includes('.')) {
    const prefix = text.slice(0, colonIndex);
    const rest = text.slice(colonIndex + 1);
    return (
      <>
        <strong style={{ color: '#ffffff', fontWeight: 600 }}>{prefix}:</strong>
        {renderHighlightedSpan(rest)}
      </>
    );
  }
  return renderHighlightedSpan(text);
}

function renderHighlightedSpan(content) {
  // Automatically bold key numbers, percentages, and metrics for high visual impact
  // And render @wyle as a clickable blue link to https://apify.com/wyle
  const regex = /(\b\d+[\d,.]*(?:%|\+|s| reports| stores| departments| SKUs| products)?\b|\b99\.3% efficiency gain\b|OI Save vs\. Indomaret|SPD, APC, and STD|Python-based reporting automation|Apify Marketplace|@xtracto|@wyle)/gi;
  const parts = content.split(regex);
  return (
    <span>
      {parts.map((part, i) => {
        if (!part) return null;
        if (/^@wyle$/i.test(part)) {
          return (
            <a
              key={i}
              href="https://apify.com/wyle"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#60a5fa',
                fontWeight: 600,
                textDecoration: 'none',
                borderBottom: '1px dashed rgba(96, 165, 250, 0.5)',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#93c5fd';
                e.currentTarget.style.borderBottomColor = '#93c5fd';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#60a5fa';
                e.currentTarget.style.borderBottomColor = 'rgba(96, 165, 250, 0.5)';
              }}
            >
              {part}
            </a>
          );
        }
        if (
          /^(?:\d+[\d,.]*(?:%|\+|s| reports| stores| departments| SKUs| products)?|99\.3% efficiency gain|OI Save vs\. Indomaret|SPD, APC, and STD|Python-based reporting automation|Apify Marketplace|@xtracto)$/i.test(part)
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
