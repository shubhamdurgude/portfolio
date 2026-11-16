import React from 'react';

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  subtitle,
}) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase mb-3 border border-cyan-500/20 bg-cyan-950/30 text-cyan-400">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        {badge}
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
        {title}{' '}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
