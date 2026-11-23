import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  dark = false,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center text-center mb-12 md:mb-16 ${className}`}>
      {/* Signature Outlined Rectangular Box */}
      <div
        className={`inline-block px-8 py-3 border-[3px] uppercase font-bold tracking-[0.25em] text-sm md:text-base font-display transition-colors ${
          dark
            ? 'border-white text-white bg-black/40'
            : 'border-black text-black bg-white/70 shadow-xs'
        }`}
      >
        {title}
      </div>

      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-xs md:text-sm tracking-wide ${
            dark ? 'text-neutral-400' : 'text-neutral-600'
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Subtle minimalist divider */}
      <div
        className={`w-12 h-[2px] mt-4 ${
          dark ? 'bg-neutral-800' : 'bg-neutral-300'
        }`}
      />
    </div>
  );
};
