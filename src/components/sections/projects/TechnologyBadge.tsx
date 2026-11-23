import React from 'react';

interface TechnologyBadgeProps {
  technology: string;
}

export const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({ technology }) => {
  return (
    <span className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-md bg-white border border-neutral-200/90 text-neutral-700 shadow-2xs hover:border-neutral-400 hover:text-black transition-colors select-none">
      {technology}
    </span>
  );
};
