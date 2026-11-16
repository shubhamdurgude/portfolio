import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { experiences } from '../../data/portfolioData';
import { ExperienceCard } from './ExperienceCard';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-900/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Work History"
          title="Professional Experience in"
          highlight="Enterprise AI"
          subtitle="Delivering production AI workflows, high-throughput backend services, and scalable RAG solutions."
        />

        {/* Experience Timeline */}
        <div className="relative mt-12 sm:mt-16">
          {experiences.map((exp, idx) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              defaultExpanded={idx === 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
