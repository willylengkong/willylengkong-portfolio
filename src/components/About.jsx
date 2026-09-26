import React from 'react';
import { motion } from 'framer-motion';
import {
  FiCpu,
  FiTrendingUp,
  FiGrid,
  FiDatabase,
  FiCode,
  FiTool,
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import { skillsCategories } from '../data/portfolioData';

export default function About() {
  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'cpu':
        return <FiCpu size={16} />;
      case 'trending-up':
        return <FiTrendingUp size={16} />;
      case 'grid':
        return <FiGrid size={16} />;
      case 'database':
        return <FiDatabase size={16} />;
      case 'code':
        return <FiCode size={16} />;
      case 'tool':
        return <FiTool size={16} />;
      default:
        return <FiCpu size={16} />;
    }
  };

  return (
    <section
      id="about"
      style={{
        paddingTop: '80px',
        paddingBottom: '96px',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        {/* Two-Column Layout matching reference image */}
        <div className="about-grid">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Profile Card & Detailed About Bio           */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            style={{ minWidth: 0 }}
          >
            {/* Profile Photo Card */}
            <div
              className="glass-card"
              style={{
                borderRadius: '20px',
                padding: '12px',
                backgroundColor: 'rgba(24, 24, 27, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  aspectRatio: '1 / 1',
                  maxHeight: '400px',
                  width: '100%',
                  backgroundColor: '#0c0f1d',
                }}
              >
                <img
                  src="/images/photoProfil.jpg"
                  alt="Willy Lengkong"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block',
                  }}
                />

                {/* Status Dot (Top Right) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#22c55e',
                    boxShadow: '0 0 12px #22c55e',
                    zIndex: 2,
                  }}
                  title="Available for Opportunities"
                />

                {/* 3+ Years Experience Badge (Bottom Left) */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '14px',
                    left: '14px',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(10, 12, 20, 0.85)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    zIndex: 2,
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <HiSparkles size={14} style={{ color: '#60a5fa' }} />
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '0.02em',
                    }}
                  >
                    3+ Years Experience
                  </span>
                </div>
              </div>
            </div>

            {/* About Bio Descriptions under Photo */}
            <div
              style={{
                marginTop: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
              }}
            >
              <p
                style={{
                  fontSize: '0.86rem',
                  color: '#94a3b8',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Hi! I'm <strong style={{ color: '#ffffff', fontWeight: 600 }}>Willy Lengkong</strong>, a{' '}
                <strong style={{ color: '#ffffff', fontWeight: 600 }}>Data Analyst at PT Indomarco Prismatama (Indomaret Group)</strong>{' '}
                within the <strong style={{ color: '#ffffff', fontWeight: 600 }}>Merchandising Division, Strategic Analyst Department</strong>,{' '}
                while also pursuing my degree in{' '}
                <strong style={{ color: '#ffffff', fontWeight: 600 }}>Information Systems at Universitas Pelita Harapan (UPH)</strong> as a third-semester student.
              </p>

              <p
                style={{
                  fontSize: '0.86rem',
                  color: '#94a3b8',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                I have been working at Indomaret Group since{' '}
                <strong style={{ color: '#ffffff', fontWeight: 600 }}>2022</strong>, focusing on data processing and analysis to support business needs within the merchandising area. My work involves handling various types of data related to{' '}
                <strong style={{ color: '#ffffff', fontWeight: 600 }}>sales, stock, store performance, retail metrics, as well as product and store analysis</strong>, which are used to support business evaluation and decision-making.
              </p>

              <p
                style={{
                  fontSize: '0.86rem',
                  color: '#94a3b8',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                I am experienced in using{' '}
                <strong style={{ color: '#ffffff', fontWeight: 600 }}>Microsoft Excel, Looker Studio, Tableau, and various data tools</strong>{' '}
                for data processing, analysis, and reporting, helping transform data into more structured and meaningful information. I also develop{' '}
                <strong style={{ color: '#ffffff', fontWeight: 600 }}>data automation solutions</strong> using{' '}
                <strong style={{ color: '#ffffff', fontWeight: 600 }}>Python, pandas, openpyxl, and Jupyter Notebook</strong> to simplify repetitive tasks and improve reporting efficiency.
              </p>

              <p
                style={{
                  fontSize: '0.86rem',
                  color: '#94a3b8',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Beyond data analysis, I am interested in how technology can be applied to solve business problems. Through my Information Systems studies and various projects, I continue to develop my skills in{' '}
                <strong style={{ color: '#ffffff', fontWeight: 600 }}>SQL, databases, data processing, and software development</strong>.
              </p>

              <p
                style={{
                  fontSize: '0.86rem',
                  color: '#94a3b8',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                By combining my professional experience with my academic background in Information Systems, I aim to continue growing as a{' '}
                <strong style={{ color: '#ffffff', fontWeight: 600 }}>Data Analyst</strong> who can not only analyze data, but also understand business contexts and build more effective solutions through technology.
              </p>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Skills Heading & 6 Stacked Skill Cards      */}
          {/* ========================================================= */}
          <div style={{ minWidth: 0 }}>
            {/* Skills Title */}
            <h3
              style={{
                fontSize: '1.65rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '20px',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}
            >
              Skills
            </h3>

            {/* Stack of 6 Skill Cards */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {skillsCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="glass-card"
                  style={{
                    borderRadius: '16px',
                    padding: '18px 20px',
                    backgroundColor: 'rgba(24, 24, 27, 0.65)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {/* Category Header with SVG Icon + Title */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '9px',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.25)',
                        color: '#60a5fa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {getSkillIcon(category.icon)}
                    </div>
                    <h4
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        margin: 0,
                        letterSpacing: '0.01em',
                      }}
                    >
                      {category.title}
                    </h4>
                  </div>

                  {/* Skills Pill Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '7px 8px',
                      marginTop: '14px',
                    }}
                  >
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '4px 11px',
                          borderRadius: '9999px',
                          backgroundColor: '#0c0f1d',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: '#cbd5e1',
                          whiteSpace: 'nowrap',
                          lineHeight: 1.4,
                          transition: 'all 0.15s ease',
                          cursor: 'default',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.45)';
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.12)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                          e.currentTarget.style.color = '#cbd5e1';
                          e.currentTarget.style.backgroundColor = '#0c0f1d';
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
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          align-items: start;
        }
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}
