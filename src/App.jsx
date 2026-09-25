import React, { Component } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import SpotlightEffect from './components/SpotlightEffect';
import AudioToggle from './components/AudioToggle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0a0a0a', color: '#fafafa', padding: '24px', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#f87171' }}>Something went wrong</h2>
          <p style={{ color: '#a1a1aa', maxWidth: '500px', marginBottom: '20px', fontSize: '0.9rem' }}>
            {this.state.error?.message || 'An unexpected rendering error occurred.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#3b82f6', color: '#ffffff', border: 'none', cursor: 'pointer', fontWeight: 600 }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ backgroundColor: '#0a0a0a', color: '#fafafa', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
          {/* Global Ambient Grid Pattern Layer */}
          <div
            className="grid-pattern"
            style={{
              position: 'fixed',
              inset: 0,
              opacity: 0.08,
              pointerEvents: 'none',
              zIndex: 0,
            }}
            aria-hidden="true"
          />

          {/* Mouse Follower Cursor Glow */}
          <SpotlightEffect />

          {/* Ambient Audio Toggle */}
          <AudioToggle />

          {/* Sticky Glassmorphic Navigation */}
          <Navbar />

          {/* Main Content Sections */}
          <main style={{ position: 'relative', zIndex: 10 }}>
            <Hero />
            <Projects />
            <About />
            <Experience />
            <Achievements />
            <Education />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
