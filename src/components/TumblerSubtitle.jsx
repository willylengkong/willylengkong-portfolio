import React, { useState, useEffect, useRef, useCallback } from 'react';

const PHRASES = [
  {
    text: 'エンドツーエンド・データアナリスト',
    lang: 'ja',
    font: 'var(--font-jp, "Noto Sans JP", sans-serif)',
    spacing: '0.22em',
  },
  {
    text: 'End-to-End Data Analyst',
    lang: 'en',
    font: 'var(--font-mono, monospace)',
    spacing: '0.14em',
  },
];

// Curated Katakana glyph pool matching cyberpunk / decryption aesthetics
const KATAKANA_GLYPHS = [
  'ア', 'イ', 'ウ', 'エ', 'オ',
  'カ', 'キ', 'ク', 'ケ', 'コ',
  'サ', 'シ', 'ス', 'セ', 'ソ',
  'タ', 'チ', 'ツ', 'テ', 'ト',
  'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
  'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
  'マ', 'ミ', 'ム', 'メ', 'モ',
  'ヤ', 'ユ', 'ヨ',
  'ラ', 'リ', 'ル', 'レ', 'ロ',
  'ワ', 'ヲ', 'ン',
  'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
  'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
  'ダ', 'デ', 'ド',
  'バ', 'ビ', 'ブ', 'ベ', 'ボ',
  'パ', 'ピ', 'プ', 'ペ', 'ポ',
];

/**
 * TextScramble Subtitle - Inspired by creative developer portfolios (jesky.dev style).
 * Smoothly morphs between Japanese and English with a rolling Katakana decryption scramble effect.
 * Loops automatically and also reacts immediately on hover / click.
 */
export default function TumblerSubtitle() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedItems, setDisplayedItems] = useState(() =>
    PHRASES[0].text.split('').map((char) => ({ char, isResolved: true }))
  );
  const [isScrambling, setIsScrambling] = useState(false);
  const phraseIndexRef = useRef(0);
  const isScramblingRef = useRef(false);
  const rafRef = useRef(null);
  const timerRef = useRef(null);

  // Keep refs in sync with state for timer callbacks
  phraseIndexRef.current = phraseIndex;
  isScramblingRef.current = isScrambling;

  const startScramble = useCallback((targetIndex) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const targetPhrase = PHRASES[targetIndex];
    const targetChars = targetPhrase.text.split('');
    const totalChars = targetChars.length;
    const duration = 1200; // 1.2s smooth decryption sweep
    const startTime = performance.now();

    setIsScrambling(true);
    setPhraseIndex(targetIndex);

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Ease out cubic: fast initial scramble, smooth deceleration into final lock
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentResolvedPos = eased * totalChars;

      const nextItems = targetChars.map((targetChar, idx) => {
        if (targetChar === ' ') {
          return { char: ' ', isResolved: true };
        }
        if (idx < currentResolvedPos) {
          return { char: targetChar, isResolved: true };
        }
        // Active scrambling character: pick random Katakana glyph
        const randomGlyph = KATAKANA_GLYPHS[Math.floor(Math.random() * KATAKANA_GLYPHS.length)];
        return { char: randomGlyph, isResolved: false };
      });

      setDisplayedItems(nextItems);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setIsScrambling(false);
        // Ensure 100% exact resolved target characters at the end
        setDisplayedItems(targetChars.map((char) => ({ char, isResolved: true })));
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  // Automated loop
  useEffect(() => {
    let active = true;

    // Grace period for initial page load and hero entrance (2.2s)
    const initialDelay = setTimeout(() => {
      if (!active) return;
      // First scramble: Japanese (0) -> English (1)
      startScramble(1);

      // Automated recurring cycle every 4.8 seconds
      const interval = setInterval(() => {
        if (!active) return;
        if (!isScramblingRef.current) {
          const next = (phraseIndexRef.current + 1) % PHRASES.length;
          startScramble(next);
        }
      }, 4800);

      timerRef.current = interval;
    }, 2200);

    return () => {
      active = false;
      clearTimeout(initialDelay);
      if (timerRef.current) clearInterval(timerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [startScramble]);

  // Interactive trigger on hover or click
  const handleInteraction = () => {
    if (!isScramblingRef.current) {
      const nextIndex = (phraseIndexRef.current + 1) % PHRASES.length;
      startScramble(nextIndex);
    }
  };

  const currentPhrase = PHRASES[phraseIndex];

  return (
    <div
      onClick={handleInteraction}
      onMouseEnter={handleInteraction}
      style={{
        position: 'relative',
        height: '36px',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        userSelect: 'none',
        cursor: 'pointer',
      }}
      title="Hover or click to switch language"
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: currentPhrase.font,
          letterSpacing: currentPhrase.spacing,
          fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
          lineHeight: 1.4,
          transition: 'letter-spacing 0.3s ease',
        }}
      >
        {displayedItems.map((item, idx) => (
          <span
            key={idx}
            style={{
              display: 'inline-block',
              color: item.isResolved ? '#cbd5e1' : '#60a5fa',
              fontWeight: item.isResolved ? 300 : 700,
              textShadow: item.isResolved
                ? 'none'
                : '0 0 10px rgba(96, 165, 250, 0.85), 0 0 20px rgba(56, 189, 248, 0.4)',
              transform: item.isResolved ? 'scale(1)' : 'scale(1.06)',
              transition: 'color 0.12s ease, transform 0.12s ease',
            }}
          >
            {item.char === ' ' ? '\u00A0' : item.char}
          </span>
        ))}
      </div>
    </div>
  );
}
