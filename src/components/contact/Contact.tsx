import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, Download, Send } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { personalInfo } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Contact"
          title="Let's Build Something"
          highlight="Intelligent."
          subtitle="Interested in AI, Generative AI, Agentic Systems, and innovative software solutions? Let's connect and explore opportunities to build impactful technology."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          
          {/* Email */}
          <div className="p-6 rounded-2xl bg-dark-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-mono">Email</div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(personalInfo.email, 'email')}
              className="p-2 rounded-lg bg-dark-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone */}
          <div className="p-6 rounded-2xl bg-dark-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-mono">Phone</div>
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
              className="p-2 rounded-lg bg-dark-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Copy Phone"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location */}
          <div className="p-6 rounded-2xl bg-dark-900/60 border border-slate-800 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-mono">Location</div>
              <div className="text-sm font-semibold text-white">{personalInfo.location}</div>
            </div>
          </div>

          {/* Resume Download */}
          <div className="p-6 rounded-2xl bg-dark-900/60 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 shrink-0">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-mono">Resume</div>
                <div className="text-sm font-semibold text-white">Shubham Durgude CV</div>
              </div>
            </div>
            <a
              href={personalInfo.resumePath}
              download="Shubham_Durgude_Resume.pdf"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
            >
              Download PDF
            </a>
          </div>

        </div>

        {/* Clean Direct Action Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-dark-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
          >
            <Send className="w-4 h-4" />
            <span>Send Direct Email</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-slate-200 bg-dark-900 border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-blue-400" />
            <span>Connect on LinkedIn</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-slate-200 bg-dark-900 border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Follow on GitHub</span>
          </a>
        </div>

      </div>
    </section>
  );
};
