import React from 'react';
import { ChevronUp } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <FaGithub size={16} />;
      case 'linkedin':
        return <FaLinkedinIn size={16} />;
      case 'facebook':
        return <FaFacebookF size={15} />;
      case 'whatsapp':
        return <FaWhatsapp size={16} />;
      case 'mail':
      default:
        return <FaEnvelope size={15} />;
    }
  };

  return (
    <footer className="bg-black text-neutral-400 py-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center space-y-6">
        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex flex-col items-center text-xs uppercase tracking-[0.2em] text-neutral-300 hover:text-white transition-colors cursor-pointer group"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5 mb-1 group-hover:-translate-y-1 transition-transform" />
          <span>BACK TO TOP</span>
        </button>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 pt-2">
          {portfolioData.socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-9 h-9 border border-neutral-800 flex items-center justify-center rounded-none text-neutral-400 hover:text-white hover:border-neutral-500 hover:bg-neutral-900 transition-all"
            >
              {getSocialIcon(social.icon)}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-neutral-500 tracking-wider">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
