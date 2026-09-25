import React from 'react';
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

export default function App() {
  return (
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
  );
}
