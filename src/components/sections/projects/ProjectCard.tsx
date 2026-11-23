import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectItem } from '../../../data/portfolio';
import { TechnologyBadge } from './TechnologyBadge';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, technologies, githubUrl, liveUrl } = project;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#F8F9FA] border border-neutral-200/70 rounded-xl sm:rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 w-full"
    >
      {/* 1. Project Title */}
      <h3 className="text-lg sm:text-xl font-bold font-display text-neutral-900 tracking-tight mb-2.5">
        {title}
      </h3>

      {/* 2. Complete Project Description as One Paragraph */}
      <p className="text-sm sm:text-[15px] text-neutral-600 leading-relaxed font-normal mb-5">
        {description}
      </p>

      {/* 3. Row of Technology Badges & Optional Links */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex flex-wrap gap-2 items-center">
          {technologies.map((tech) => (
            <TechnologyBadge key={tech} technology={tech} />
          ))}
        </div>

        {/* 4. Optional Link Buttons (Hidden if no URL provided) */}
        {(githubUrl || liveUrl) && (
          <div className="flex items-center gap-2 shrink-0">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} GitHub Repository`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-white border border-neutral-200 text-neutral-700 hover:text-black hover:border-black transition-colors"
              >
                <Github size={14} />
                <span>Code</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} Live Demo`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-black text-white hover:bg-neutral-800 transition-colors"
              >
                <ExternalLink size={14} />
                <span>Demo</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};
