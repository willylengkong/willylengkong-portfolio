import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import { FiX, FiCheckCircle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function CaseStudyModal({ open, onClose, project }) {
  if (!project) return null;

  const caseStudy = project.caseStudy || {};
  const tags = project.builtWith || [project.tech];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
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
          borderRadius: '20px',
          padding: '8px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(59, 130, 246, 0.12)',
          color: '#ffffff',
          position: 'relative',
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
          padding: '6px',
        }}
      >
        <FiX size={18} />
      </IconButton>

      <DialogContent style={{ padding: '24px 20px' }}>
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
      </DialogContent>
    </Dialog>
  );
}
