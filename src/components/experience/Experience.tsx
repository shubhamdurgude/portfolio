import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { experiences } from '../../data/portfolioData';
import { ExperienceCard } from './ExperienceCard';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Career History"
          title="Professional"
          highlight="Experience"
        />

        <div className="space-y-6 mt-10">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>

      </div>
    </section>
  );
};
