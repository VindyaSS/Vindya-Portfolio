import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowDownRight, User } from 'lucide-react';
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaWhatsapp
} from 'react-icons/fa';
import { portfolioData } from '../../data/portfolio';

export const Hero: React.FC = () => {
  const { personal, socialLinks } = portfolioData;
  const [imageError, setImageError] = useState(false);
  // profile1.png is a landscape upper-body shot — face is already centered
  const heroImg = personal.heroImage;

  // Helper to retrieve social links safely
  const getSocialUrl = (name: string) => {
    return (
      socialLinks.find((s) => s.name.toLowerCase() === name.toLowerCase())?.url ||
      '#'
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen bg-[#141414] flex flex-col justify-between overflow-hidden"
    >
      {/* =========================================================================
          RIGHT SIDE BACKGROUND PHOTO (Full bleed under the chevron on desktop)
          Vindya's photo from public/images/profile.png with natural blurred background
          ========================================================================= */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[64%] xl:w-[60%] z-0 overflow-hidden bg-neutral-950">
        {!imageError ? (
          <div className="relative w-full h-full overflow-hidden">
            {/* profile1.png: object-position vertical = 8% → shows background above head first.
                Low % = top of image visible = background sky/environment above your head shows.
                Your face then sits naturally lower in the viewport, comfortably below the navbar.
                scale kept minimal (1.08) so full image fills frame without over-cropping. */}
            <img
              src={heroImg}
              alt={personal.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-[52%_8%] scale-[1.08] xl:scale-[1.1] origin-[52%_8%] filter contrast-[1.05] brightness-[1.03] transition-transform duration-700"
            />
            {/* Very soft top gradient — just enough for navbar text contrast, NOT covering face */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 via-black/10 to-transparent pointer-events-none" />
            {/* Bottom fade into footer strip */}
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            {/* Left-edge vignette near chevron tip */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#141414] via-[#141414]/70 to-transparent pointer-events-none" />
            {/* Right-edge vignette */}
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#141414] via-[#141414]/50 to-transparent pointer-events-none" />
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-neutral-400 p-8 text-center bg-[#1a1a1a]">
            <User size={54} className="mb-4 text-neutral-500" />
            <p className="font-display font-bold text-xs uppercase tracking-widest text-white">
              Profile Photo Placeholder
            </p>
            <p className="text-[11px] text-neutral-500 mt-1">
              Place image at public/images/profile.png
            </p>
          </div>
        )}
      </div>

      {/* =========================================================================
          DESKTOP SVG CHEVRON POLYGON (Signature visual from reference screenshot)
          Points from left across the screen with smooth drop-shadow and stroke
          ========================================================================= */}
      <svg
        className="hidden lg:block absolute inset-0 w-full h-full z-10 pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
        aria-hidden="true"
      >
        <defs>
          <filter id="chevron-drop-shadow" x="-5%" y="-5%" width="125%" height="115%">
            <feDropShadow dx="8" dy="0" stdDeviation="12" floodColor="#000000" floodOpacity="0.28" />
          </filter>
        </defs>
        {/* Crisp White Polygon with Chevron Tip */}
        <polygon
          points="0,0 365,0 440,480 365,1000 0,1000"
          fill="#ffffff"
          filter="url(#chevron-drop-shadow)"
        />
        {/* Subtle Edge Stroke */}
        <polyline
          points="365,0 440,480 365,1000"
          fill="none"
          stroke="#d8d8d8"
          strokeWidth="1.5"
        />
      </svg>

      {/* =========================================================================
          MAIN HERO CONTENT
          On Desktop: Positioned over the white chevron on the left.
          On Mobile: Clean stacked white card on top of the portrait.
          ========================================================================= */}
      <div className="relative z-20 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-12 items-center pt-24 sm:pt-28 pb-12 lg:py-20">

          {/* Left Text Card: Matches the Reference Image Layout */}
          <div className="lg:col-span-6 xl:col-span-5 bg-white lg:bg-transparent -mx-6 px-8 py-10 sm:-mx-10 sm:px-12 lg:mx-0 lg:px-0 lg:py-0 text-black rounded-b-2xl lg:rounded-none shadow-md lg:shadow-none">
            <div className="max-w-md">

              {/* Optional Name Monogram / Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-1"
              >
                <span className="text-xs font-bold tracking-[0.22em] uppercase text-neutral-500 font-display">
                  {personal.name}
                </span>
              </motion.div>

              {/* Main Heading: Signature Olive + Black Typography */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-4xl sm:text-5xl lg:text-[56px] font-black font-display tracking-tight leading-[1.05] mb-5"
              >
                {/* Accent Olive Green (#8e9c78) */}
                <span className="text-[#8e9c78] block">
                  {personal.titleAccent || "Full Stack"}
                </span>
                {/* Bold Black Developer */}
                <span className="text-black block">
                  {personal.titleMain || "Developer"}
                </span>
              </motion.h1>

              {/* Tagline 1: Passionate Programmer */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-1.5"
              >
                {personal.tagline1 || "Passionate Programmer"}
              </motion.p>

              {/* Tagline 2: Undergraduate Status */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.28,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-base sm:text-lg text-neutral-700 font-display mb-8"
              >
                {personal.tagline2 || "4th-Year Undergraduate"}
              </motion.p>

              {/* Social Icons Row (GitHub, LinkedIn, Facebook, Email, WhatsApp) */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.38,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center gap-5 text-2xl text-neutral-900 mb-9"
              >
                <a
                  href={getSocialUrl('github')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="hover:text-[#8e9c78] hover:-translate-y-0.5 transition-all"
                >
                  <FaGithub />
                </a>

                <a
                  href={getSocialUrl('linkedin')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="hover:text-[#8e9c78] hover:-translate-y-0.5 transition-all"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href={getSocialUrl('facebook')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Profile"
                  className="hover:text-[#8e9c78] hover:-translate-y-0.5 transition-all"
                >
                  <FaFacebookF />
                </a>

                <a
                  href={getSocialUrl('email')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email Address"
                  className="hover:text-[#8e9c78] hover:-translate-y-0.5 transition-all"
                >
                  <FaEnvelope />
                </a>

                <a
                  href={getSocialUrl('whatsapp')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Contact"
                  className="hover:text-[#8e9c78] hover:-translate-y-0.5 transition-all"
                >
                  <FaWhatsapp />
                </a>
              </motion.div>

              {/* Action Buttons: View Projects & Contact Me */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.46,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-wrap items-center gap-4"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3 bg-black text-white font-display text-xs font-bold uppercase tracking-[0.2em] border border-black hover:bg-[#8e9c78] hover:border-[#8e9c78] transition-all shadow-sm flex items-center gap-2 group cursor-pointer"
                >
                  <span>View Projects</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3 bg-transparent text-black font-display text-xs font-bold uppercase tracking-[0.2em] border-2 border-black hover:bg-black hover:text-white transition-all shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  <span>Contact Me</span>
                </motion.a>
              </motion.div>

            </div>
          </div>

          {/* Right Column Spacer (Photo is positioned in background layer) */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7" />

        </div>
      </div>

      {/* =========================================================================
          SLIM BOTTOM FOOTER STRIP
          ========================================================================= */}
      <div className="relative z-20 w-full bg-black/85 backdrop-blur-md border-t border-neutral-800 text-white py-3.5 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-[#8e9c78] rounded-full shrink-0" />
            <span className="text-neutral-300 font-medium tracking-wide">
              {personal.education.degree} • {personal.education.institution}
            </span>
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors group"
          >
            <span>Learn More About Me</span>
            <ArrowDownRight
              size={13}
              className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
