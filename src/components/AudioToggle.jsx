import React, { useState, useRef } from 'react';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';
import Tooltip from '@mui/material/Tooltip';

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const oscillatorsRef = useRef([]);

  const toggleAudio = () => {
    if (!isPlaying) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) {
          setIsPlaying(true);
          return;
        }

        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        // Master gain
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 2);
        gainNodeRef.current = masterGain;

        // Lowpass filter for smooth ambient warmth
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, ctx.currentTime);

        masterGain.connect(filter);
        filter.connect(ctx.destination);

        // Gentle soothing harmonic chord (D2, A2, F3, C4)
        const freqs = [73.42, 110.0, 174.61, 261.63];
        const oscs = freqs.map((freq) => {
          const osc = ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          osc.connect(masterGain);
          osc.start();
          return osc;
        });

        oscillatorsRef.current = oscs;
        setIsPlaying(true);
      } catch {
        setIsPlaying(true);
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.8);
        setTimeout(() => {
          oscillatorsRef.current.forEach((osc) => {
            try { osc.stop(); } catch { /* ignore */ }
          });
          oscillatorsRef.current = [];
          if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
            audioCtxRef.current.close();
          }
        }, 800);
      }
      setIsPlaying(false);
    }
  };

  return (
    <Tooltip title={isPlaying ? "Mute Ambience" : "Play Ambient Sound"} placement="left">
      <button
        onClick={toggleAudio}
        aria-label="Toggle Ambience Sound"
        style={{
          position: 'fixed',
          right: '32px',
          bottom: '32px',
          zIndex: 50,
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          backgroundColor: 'rgba(24, 24, 27, 0.8)',
          border: isPlaying ? '1px solid #3b82f6' : '1px solid #27272a',
          color: isPlaying ? '#3b82f6' : '#a1a1aa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: isPlaying ? '0 0 20px rgba(59, 130, 246, 0.35)' : '0 10px 25px rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          transition: 'all 0.25s ease',
        }}
      >
        {isPlaying ? <FiVolume2 size={18} /> : <FiVolumeX size={18} />}
      </button>
    </Tooltip>
  );
}
