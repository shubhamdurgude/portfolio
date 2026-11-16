import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { skillCategories } from '../../data/portfolioData';
import { SkillCategoryCard } from './SkillCategoryCard';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'genai', label: 'Generative AI & LLMs' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'aiml', label: 'AI & ML' },
    { id: 'data', label: 'Data & Analytics' },
    { id: 'databases', label: 'Databases & Vector' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'monitoring', label: 'Observability' },
  ];

  const displayedCategories = skillCategories.filter((cat) => {
    if (selectedFilter === 'all') return true;
    return cat.id === selectedFilter;
  });

  return (
    <section id="skills" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-900/10 via-violet-900/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Technical Skills"
          title="Technical Expertise &"
          highlight="Toolchain"
          subtitle="Specialized competencies spanning Agentic AI architectures, vector retrieval engines, microservices, and distributed data systems."
        />

        {/* Search & Filter Toolbar */}
        <div className="mb-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4">
          
          {/* Live Search input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search e.g. LangGraph, Celery, Spark..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills (horizontal scrollable on mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-2 md:pb-0 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-950'
                    : 'bg-dark-900/50 text-slate-400 border border-slate-800/80 hover:text-white hover:bg-dark-850'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedCategories.map((category) => (
            <SkillCategoryCard
              key={category.id}
              category={category}
              searchQuery={searchQuery}
            />
          ))}
        </div>

        {/* Real Production Focus Callout */}
        <div className="mt-12 p-5 rounded-2xl bg-dark-900/50 border border-slate-800/80 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-slate-300 font-medium">Production-Grade Mastery:</span>
            <span>All technologies listed are backed by verifiable enterprise delivery and hands-on repository work.</span>
          </div>
          <div className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-500/30 whitespace-nowrap">
            Zero Inflated Percentages
          </div>
        </div>

      </div>
    </section>
  );
};
