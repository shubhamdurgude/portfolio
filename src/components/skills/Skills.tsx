import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { skillCategories } from '../../data/portfolioData';
import { SkillCategoryCard } from './SkillCategoryCard';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Technical Arsenal"
          title="Skills &"
          highlight="Technologies"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.id} category={category} />
          ))}
        </div>

      </div>
    </section>
  );
};
