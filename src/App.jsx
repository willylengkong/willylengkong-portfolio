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
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#030408', color: '#f8fafc', padding: '24px', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#f87171' }}>Something went wrong</h2>
          <p style={{ color: '#94a3b8', maxWidth: '500px', marginBottom: '20px', fontSize: '0.9rem' }}>
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
        <div className="backdrop-grid" style={{ minHeight: '100vh', position: 'relative' }}>
          {/* Dynamic Interactive Mouse Follower */}
          <SpotlightEffect />

          {/* Ambient Audio Toggle */}
          <AudioToggle />

          {/* Sticky Glassmorphic Navigation */}
          <Navbar />

          {/* Main Sections */}
          <main>
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
