import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../../data/portfolio';
import { SkillCard } from './skills/SkillCard';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const categories = skills.categories;

  // Split categories according to required row structure:
  // Row 1: Programming Languages, Web Development
  const row1Categories = categories.filter(
    (c) => c.id === 'programming-languages' || c.id === 'web-development'
  );

  // Row 2: Development Tools & IDEs, Databases
  const row2Categories = categories.filter(
    (c) => c.id === 'tools-ides' || c.id === 'databases'
  );

  // Row 3: Graphic Design & Multimedia
  const row3Categories = categories.filter((c) => c.id === 'graphic-design');

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#F8F9FA] text-black">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        
        {/* =====================================================================
            SECTION HEADING & DESCRIPTION (Matches reference screenshot)
            ===================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-neutral-900 tracking-tight mb-4"
          >
            {skills.heading || 'My Skills'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-lg text-neutral-500 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            {skills.description}
          </motion.p>
        </div>

        {/* =====================================================================
            SKILLS CARDS GRID
            Row 1: Programming Languages | Web Development
            Row 2: Development Tools & IDEs | Databases
            Row 3: Graphic Design & Multimedia (Centered)
            ===================================================================== */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Row 1: 2 Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {row1Categories.map((category, idx) => (
              <SkillCard key={category.id} category={category} index={idx} />
            ))}
          </div>

          {/* Row 2: 2 Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {row2Categories.map((category, idx) => (
              <SkillCard key={category.id} category={category} index={idx + 2} />
            ))}
          </div>

          {/* Row 3: 1 Card Centered with suitable width */}
          {row3Categories.length > 0 && (
            <div className="flex justify-center pt-2">
              <div className="w-full max-w-md sm:max-w-lg">
                <SkillCard category={row3Categories[0]} index={4} />
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
