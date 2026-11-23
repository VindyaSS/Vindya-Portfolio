import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../../data/portfolio';
import { ProjectTimeline } from './projects/ProjectTimeline';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 sm:py-32 bg-white text-black relative">
      <div className="max-w-[1250px] mx-auto px-6 sm:px-10">
        
        {/* =====================================================================
            SECTION HEADING (Matches reference screenshot)
            ===================================================================== */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          {/* Small Uppercase Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-2 mb-2.5"
          >
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#8e9c78] font-display">
              PROJECTS
            </span>
          </motion.div>

          {/* Large Centered Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-neutral-900 tracking-tight"
          >
            My Projects
          </motion.h2>
        </div>

        {/* =====================================================================
            VERTICAL TIMELINE LAYOUT
            ===================================================================== */}
        <div className="w-full">
          <ProjectTimeline projects={projects} />
        </div>

      </div>
    </section>
  );
};
