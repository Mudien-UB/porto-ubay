import React from 'react';

export default function SocialLink({ social }) {
  return (
    <div className="flex flex-col items-center">
      <a
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Link to ${social.label}`}
        className={`${social.colorClass} md:text-satin-sheen-gold-900 transition-transform transform hover:scale-110 ${social.hoverClass}`}
      >
        {social.icon}
      </a>
      <span className="text-sm mt-2 text-satin-sheen-gold-900 dark:text-gray-200">
        {social.label}
      </span>
    </div>
  );
}