import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { TechGridBackground } from './components/TechGridBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { PatentFeature } from './components/PatentFeature';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { JourneyTimeline } from './components/JourneyTimeline';
import { Achievements } from './components/Achievements';
import { GitHubShowcase } from './components/GitHubShowcase';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-white selection:text-black">
      {/* Interactive Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Futuristic Technical Background Grid & Particles */}
      <TechGridBackground />

      {/* Sticky Translucent Navbar with Monogram */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <QuickStats />
        <About />
        <Skills />
        <Projects />
        <PatentFeature />
        <Experience />
        <Education />
        <JourneyTimeline />
        <Achievements />
        <GitHubShowcase />
        <Contact />
      </main>

      {/* Minimal Engineering Footer */}
      <Footer />
    </div>
  );
};

export default App;
