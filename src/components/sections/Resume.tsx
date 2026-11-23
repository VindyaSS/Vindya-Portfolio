import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { portfolioData } from '../../data/portfolio';

export const Resume: React.FC = () => {
  const { resume } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="resume"
      className="relative bg-[#a2a98b] text-white py-20 sm:py-24 md:py-28 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight mb-4 sm:mb-5"
        >
          {resume.heading}
        </motion.h2>

        {/* Animated Description */}
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/95 text-sm sm:text-base md:text-[17px] font-normal leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 font-sans"
        >
          {resume.description}
        </motion.p>

        {/* Animated Download Button */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center justify-center"
        >
          <a
            href={resume.resumeUrl}
            download={resume.fileName}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-neutral-700 hover:text-black font-semibold text-sm sm:text-[15px] px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer min-w-[140px]"
          >
            <span>{resume.buttonText}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
