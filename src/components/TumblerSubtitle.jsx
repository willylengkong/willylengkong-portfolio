import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PHRASES = [
  {
    text: 'エンドツーエンド・データアナリスト',
    lang: 'ja',
    font: 'var(--font-jp)',
    spacing: '0.3em',
  },
  {
    text: 'END-TO-END DATA ANALYST',
    lang: 'en',
    font: 'var(--font-jetbrains)',
    spacing: '0.22em',
  },
];

/**
 * TumblerSubtitle - iPhone alarm wheel / slot-drum 3D rolling typography animation.
 * Continuously loops between Japanese and English, rolling characters one-by-one
 * with 3D cylindrical perspective like an iOS picker wheel.
 */
export default function TumblerSubtitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % PHRASES.length);
    }, 4000); // 4 seconds interval gives comfortable reading time

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
        perspective: '1000px',
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
            transformStyle: 'preserve-3d',
            fontFamily: current.font,
            letterSpacing: current.spacing,
            color: '#a1a1aa',
            fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
            fontWeight: 300,
          }}
        >
          {current.text.split('').map((char, i) => (
            <motion.span
              key={`${current.lang}-${i}-${char}`}
              custom={i}
              variants={{
                initial: {
                  opacity: 0,
                  y: '85%',
                  rotateX: 80,
                  filter: 'blur(3px)',
                },
                animate: (i) => ({
                  opacity: 1,
                  y: '0%',
                  rotateX: 0,
                  filter: 'blur(0px)',
                  transition: {
                    duration: 0.45,
                    delay: i * 0.022,
                    ease: [0.16, 1, 0.3, 1], // Smooth iOS spring curve
                  },
                }),
                exit: (i) => ({
                  opacity: 0,
                  y: '-85%',
                  rotateX: -80,
                  filter: 'blur(3px)',
                  transition: {
                    duration: 0.35,
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
                transformOrigin: '50% 50% -14px', // 3D cylindrical drum radius
                whiteSpace: 'pre',
                backfaceVisibility: 'hidden',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
