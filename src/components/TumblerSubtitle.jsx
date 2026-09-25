import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PHRASES = [
  {
    text: 'エンドツーエンド・データアナリスト',
    lang: 'ja',
    font: 'var(--font-jp)',
    spacing: '0.28em',
  },
  {
    text: 'End-to-End Data Analyst',
    lang: 'en',
    font: 'var(--font-inter)',
    spacing: '0.12em',
  },
];

/**
 * TumblerSubtitle - Number Ticker / Odometer typography animation.
 * Features clipped vertical reel slots where characters slide straight vertically
 * one by one with smooth spring ticker momentum, alternating continuously
 * between Japanese Katakana and English in Title Case.
 */
export default function TumblerSubtitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % PHRASES.length);
    }, 4000); // 4 seconds interval for comfortable reading

    return () => clearInterval(timer);
  }, []);

  const current = PHRASES[index];

  return (
    <div
      style={{
        position: 'relative',
        height: '36px',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        userSelect: 'none',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current.text}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: current.font,
            letterSpacing: current.spacing,
            color: '#a1a1aa',
            fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
            fontWeight: 300,
            lineHeight: 1.4,
          }}
        >
          {current.text.split('').map((char, i) => (
            <span
              key={`${current.lang}-${i}-${char}`}
              style={{
                display: 'inline-block',
                overflow: 'hidden',
                verticalAlign: 'bottom',
                height: '1.4em',
                lineHeight: '1.4em',
              }}
            >
              <motion.span
                custom={i}
                variants={{
                  initial: {
                    y: '100%',
                    opacity: 0,
                  },
                  animate: (i) => ({
                    y: '0%',
                    opacity: 1,
                    transition: {
                      duration: 0.42,
                      delay: i * 0.022,
                      ease: [0.16, 1, 0.3, 1], // Smooth odometer ticker spring easing
                    },
                  }),
                  exit: (i) => ({
                    y: '-100%',
                    opacity: 0,
                    transition: {
                      duration: 0.3,
                      delay: i * 0.015,
                      ease: [0.45, 0, 0.55, 1],
                    },
                  }),
                }}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{
                  display: 'inline-block',
                  whiteSpace: 'pre',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            </span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
