import React from 'react';
import { motion } from 'motion/react';
import { TechnologyIcon } from '../../ui/SkillIcons';
import { SkillTechnology } from '../../../data/portfolio';

interface SkillItemProps {
  skill: SkillTechnology;
  showDivider?: boolean;
}

export const SkillItem: React.FC<SkillItemProps> = ({ skill, showDivider = false }) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center py-2 px-3 sm:px-5 flex-1 min-w-[76px] sm:min-w-[92px] group ${
        showDivider ? 'border-r border-neutral-200/70' : ''
      }`}
    >
      {/* Icon with hover scale */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-2.5 transition-transform"
      >
        <TechnologyIcon iconId={skill.iconId} size={46} />
      </motion.div>

      {/* Technology Label */}
      <span className="text-[11px] sm:text-xs text-neutral-500 font-medium tracking-tight text-center leading-tight transition-colors duration-200 group-hover:text-neutral-900 select-none">
        {skill.name}
      </span>
    </div>
  );
};
