import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiBarChart2, FiArrowUpRight, FiArrowRight } from 'react-icons/fi';
import { featuredProjects, subProjects } from '../data/portfolioData';
import CaseStudyModal from './CaseStudyModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

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
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
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

      {/* Main 2 Featured Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '32px',
        }}
      >
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="glass-card"
            style={{
              borderRadius: '20px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Card Top Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      padding: '7px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(59, 130, 246, 0.12)',
                      color: '#60a5fa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {project.id === 'project1' ? <FiActivity size={18} /> : <FiBarChart2 size={18} />}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#94a3b8',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                    }}
                  >
                    {project.category}
                  </span>
                </div>
                <span
                  style={{
                    padding: '3px 10px',
                    fontSize: '0.6875rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    borderRadius: '999px',
                    backgroundColor: project.id === 'project1' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                    color: project.id === 'project1' ? '#60a5fa' : '#34d399',
                    border: project.id === 'project1' ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid rgba(16, 185, 129, 0.3)',
                  }}
                >
                  {project.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '10px',
                  letterSpacing: '-0.015em',
                  transition: 'color 0.2s ease',
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: '0.84rem',
                  color: '#94a3b8',
                  lineHeight: 1.65,
                  marginBottom: '20px',
                }}
              >
                {project.summary}
              </p>

              {/* Stats Grid for Project 2 */}
              {project.metrics && project.id === 'project2' && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                    padding: '14px 0',
                    margin: '8px 0 16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    textAlign: 'center',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {project.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div style={{ fontSize: '1.05rem', fontWeight: 800, color: idx === 0 ? '#ffffff' : '#60a5fa' }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase', marginTop: '2px' }}>
                        {m.sub}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Tags for Project 1 */}
              {project.id === 'project1' && (
                <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div>
                    <span style={{ fontSize: '0.65rem', color: '#64748b', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '4px' }}>
                      Core Stack:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {project.builtWith.map((t, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.6875rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            backgroundColor: 'rgba(30, 41, 59, 0.7)',
                            color: '#cbd5e1',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.65rem', color: '#64748b', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '4px' }}>
                      Ecosystem:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {project.tools.slice(0, 6).map((t, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.6875rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            backgroundColor: '#0c0f1d',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            color: '#94a3b8',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div
              style={{
                marginTop: '24px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {project.id === 'project2' ? (
                <div style={{ display: 'flex', gap: '6px' }}>
                  {['Tableau', 'SQL', 'Looker'].map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.6875rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(30, 41, 59, 0.7)',
                        color: '#cbd5e1',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : <div />}

              <button
                onClick={() => setSelectedProject(project)}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#334155';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1e293b';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Read Case Study</span>
                <FiArrowUpRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3 Sub-Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
        }}
      >
        {subProjects.map((sub, index) => (
          <motion.div
            key={sub.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card"
            style={{
              backgroundColor: 'rgba(7, 9, 18, 0.65)',
              borderRadius: '16px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.6875rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#64748b',
                  marginBottom: '10px',
                }}
              >
                <span>{sub.tag}</span>
                <span style={{ color: '#60a5fa', fontWeight: 600 }}>{sub.tech}</span>
              </div>
              <h4
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '8px',
                }}
              >
                {sub.title}
              </h4>
              <p
                style={{
                  fontSize: '0.8rem',
                  color: '#94a3b8',
                  lineHeight: 1.6,
                }}
              >
                {sub.description}
              </p>
            </div>

            <button
              onClick={() => setSelectedProject(sub)}
              style={{
                marginTop: '18px',
                background: 'none',
                border: 'none',
                color: '#60a5fa',
                fontSize: '0.78rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                padding: 0,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#93c5fd')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#60a5fa')}
            >
              <span>Inspect Architecture</span>
              <FiArrowRight size={14} />
            </button>
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
