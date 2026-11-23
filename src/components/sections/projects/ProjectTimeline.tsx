import React from 'react';
import { motion } from 'motion/react';
import { Flower2, Car, Dumbbell, Wallet, BookOpen } from 'lucide-react';
import { ProjectItem } from '../../../data/portfolio';
import { ProjectCard } from './ProjectCard';

interface ProjectTimelineProps {
  projects: ProjectItem[];
}

export const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ projects }) => {
  // Helper to render the appropriate Lucide icon
  const renderIcon = (iconType: ProjectItem['icon']) => {
    const iconSize = 18;
    switch (iconType) {
      case 'flower':
        return <Flower2 size={iconSize} />;
      case 'car':
        return <Car size={iconSize} />;
      case 'dumbbell':
        return <Dumbbell size={iconSize} />;
      case 'wallet':
        return <Wallet size={iconSize} />;
      case 'book':
        return <BookOpen size={iconSize} />;
      default:
        return <Flower2 size={iconSize} />;
    }
  };

  return (
    <div className="relative w-full">
      {/* Continuous Vertical Timeline Line running down the left */}
      <div
        className="absolute left-[19px] sm:left-[23px] top-6 bottom-6 w-[2px] bg-neutral-200"
        aria-hidden="true"
      />

      {/* Timeline Items List */}
      <div className="space-y-8 sm:space-y-10 relative">
        {projects.map((project, index) => (
          <div key={project.id} className="relative flex items-start group">
            {/* Left Column: Circular Timeline Icon */}
            <div className="relative z-10 flex-shrink-0 pt-6">
              <motion.div
                initial={{ scale: 0.75, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.12 }}
                style={{ backgroundColor: project.accentColor.bg }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white ring-4 ring-white shadow-xs transition-transform cursor-pointer"
                aria-label={`${project.title} icon indicator`}
              >
                {renderIcon(project.icon)}
              </motion.div>
            </div>

            {/* Right Column: Wide Rectangular Project Card */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex-1 ml-4 sm:ml-8"
            >
              <ProjectCard project={project} />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
