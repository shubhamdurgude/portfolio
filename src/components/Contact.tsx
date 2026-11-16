import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

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
    <section id="contact" className="py-20 lg:py-24 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            // 06. CONTACT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Intelligent.
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Interested in AI, Generative AI, Agentic Systems, and innovative software solutions? Let's connect and explore opportunities to build impactful technology.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Email */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono text-slate-400 hover:text-white bg-slate-950 border border-slate-800 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Email</div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-6 text-xs text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Compose direct email &rarr;
            </a>
          </div>

          {/* Phone */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono text-slate-400 hover:text-white bg-slate-950 border border-slate-800 cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Phone</div>
              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="text-base font-bold text-white hover:text-cyan-400 transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>
            <a
              href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="mt-6 text-xs text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Call or WhatsApp &rarr;
            </a>
          </div>

          {/* Location & Socials */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Location</div>
              <div className="text-base font-bold text-white mb-4">
                {personalInfo.location}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
