import React, { useState } from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../../data/portfolio';

export const About: React.FC = () => {
  const { personal } = portfolioData;
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="relative bg-white overflow-hidden">

      {/* ── Subtle full-height right accent strip ── */}
      <div className="absolute inset-y-0 right-0 w-[38%] bg-[#f7f6f4] hidden lg:block pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-stretch">

          {/* ══════════════════════════════════════════
              LEFT COLUMN — Photo with designer framing
              ══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-start justify-center lg:justify-start relative"
          >
            {/* Decorative offset background block */}
            <div
              className="absolute top-6 left-6 w-full max-w-[320px] xl:max-w-[360px] aspect-[3/4] bg-[#8e9c78]/15 rounded-2xl"
              aria-hidden="true"
            />

            {/* Photo frame */}
            <div className="relative z-10 w-full max-w-[320px] xl:max-w-[360px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-neutral-100">
              {!imageError ? (
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={personal.profileImage}
                    alt={`${personal.name} — ${personal.role}`}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ) : (
                <div className="aspect-[3/4] flex flex-col items-center justify-center bg-neutral-100 p-8 text-center text-neutral-400">
                  <p className="text-xs uppercase tracking-widest font-bold text-neutral-500 mb-2">
                    Profile Photo
                  </p>
                  <code className="text-[11px] font-mono text-neutral-400">
                    public/images/profile.png
                  </code>
                </div>
              )}

              {/* Thin sage-green accent bar at the bottom of the photo */}
              <div className="h-1.5 w-full bg-[#8e9c78]" />
            </div>

            {/* Floating experience badge — designer touch */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-10 -right-3 lg:-right-6 z-20 bg-black text-white px-4 py-3 rounded-xl shadow-xl"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400 font-display">Status</p>
              <p className="text-xs font-bold text-white mt-0.5 font-display tracking-wide">Open to Opportunities</p>
            </motion.div>
          </motion.div>

          {/* ══════════════════════════════════════════
              RIGHT COLUMN — Content
              ══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:pl-14 xl:pl-20 flex flex-col justify-center"
          >
            {/* ── Label ── */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-[2px] bg-[#8e9c78]" />
              <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-[#8e9c78] font-display">
                MY INTRO
              </span>
            </div>

            {/* ── Heading ── */}
            <h2 className="text-4xl sm:text-5xl font-black font-display text-black tracking-tight leading-[1.08] mb-6">
              About Me
            </h2>

            {/* ── Bio ── */}
            <p className="text-sm sm:text-[15px] text-neutral-600 leading-[1.85] mb-10 max-w-[540px]">
              {personal.aboutBio}
            </p>

            {/* ── Divider ── */}
            <div className="flex items-center gap-4 mb-9">
              <div className="flex-1 h-px bg-neutral-200" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#8e9c78]" />
              <div className="flex-1 h-px bg-neutral-200" />
            </div>

            {/* ── Info table ── */}
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {personal.infoDetails.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.22 + idx * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-col gap-0.5"
                >
                  {/* Label */}
                  <dt className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 font-display">
                    {item.label}
                  </dt>
                  {/* Value */}
                  <dd className="text-sm font-semibold text-neutral-900 tracking-wide">
                    {item.value}
                  </dd>
                  {/* Underline accent */}
                  <div className="mt-1 w-8 h-[2px] bg-[#8e9c78]/50 rounded-full" />
                </motion.div>
              ))}
            </dl>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
