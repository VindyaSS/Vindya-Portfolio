import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Resume } from './components/sections/Resume';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d0d] text-neutral-100 selection:bg-black selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Me Section */}
        <About />

        {/* 4. Skills Section */}
        <Skills />

        {/* 5. Projects Section */}
        <Projects />

        {/* 6. Resume Section */}
        <Resume />

        {/* 7. Contact Me Section */}
        <Contact />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
};

export default App;
