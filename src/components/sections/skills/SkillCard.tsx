import React from 'react';
import { motion } from 'motion/react';
import { SkillCategoryGroup } from '../../../data/portfolio';
import { SkillItem } from './SkillItem';

interface SkillCardProps {
  category: SkillCategoryGroup;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category, index }) => {
  const { title, skills } = category;

  // Render items with row splitting for multi-row categories
  const renderSkills = () => {
    // Single item (e.g. Canva)
    if (skills.length === 1) {
      return (
        <div className="flex justify-center items-center py-4 w-full">
          <SkillItem skill={skills[0]} showDivider={false} />
        </div>
      );
    }

    // Two or Three items (e.g. Programming Languages, Databases)
    if (skills.length <= 3) {
      return (
        <div className="flex flex-wrap justify-center items-center py-4 w-full">
          {skills.map((skill, idx) => (
            <SkillItem
              key={skill.name}
              skill={skill}
              showDivider={idx < skills.length - 1}
            />
          ))}
        </div>
      );
    }

    // 7 items: Web Development (4 in top row, 3 in bottom row)
    if (skills.length === 7) {
      const topRow = skills.slice(0, 4);
      const bottomRow = skills.slice(4);

      return (
        <div className="flex flex-col w-full gap-5 sm:gap-6 py-2">
          {/* Top Row */}
          <div className="flex flex-wrap justify-center items-center w-full">
            {topRow.map((skill, idx) => (
              <SkillItem
                key={skill.name}
                skill={skill}
                showDivider={idx < topRow.length - 1}
              />
            ))}
          </div>

          {/* Bottom Row */}
          <div className="flex flex-wrap justify-center items-center w-full">
            {bottomRow.map((skill, idx) => (
              <SkillItem
                key={skill.name}
                skill={skill}
                showDivider={idx < bottomRow.length - 1}
              />
            ))}
          </div>
        </div>
      );
    }

    // 6 items: Development Tools & IDEs (3 in top row, 3 in bottom row)
    if (skills.length === 6) {
      const topRow = skills.slice(0, 3);
      const bottomRow = skills.slice(3);

      return (
        <div className="flex flex-col w-full gap-5 sm:gap-6 py-2">
          {/* Top Row */}
          <div className="flex flex-wrap justify-center items-center w-full">
            {topRow.map((skill, idx) => (
              <SkillItem
                key={skill.name}
                skill={skill}
                showDivider={idx < topRow.length - 1}
              />
            ))}
          </div>

          {/* Bottom Row */}
          <div className="flex flex-wrap justify-center items-center w-full">
            {bottomRow.map((skill, idx) => (
              <SkillItem
                key={skill.name}
                skill={skill}
                showDivider={idx < bottomRow.length - 1}
              />
            ))}
          </div>
        </div>
      );
    }

    // Fallback flex
    return (
      <div className="flex flex-wrap justify-center items-center w-full py-2">
        {skills.map((skill, idx) => (
          <SkillItem
            key={skill.name}
            skill={skill}
            showDivider={idx < skills.length - 1}
          />
        ))}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl sm:rounded-2xl border border-neutral-100/90 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)] transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between h-full"
    >
      {/* Category Heading centered at top */}
      <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 tracking-tight text-center mb-6 sm:mb-8 select-none">
        {title}
      </h3>

      {/* Grid / Rows of technology logos */}
      <div className="flex-1 flex items-center justify-center w-full">
        {renderSkills()}
      </div>
    </motion.div>
  );
};
