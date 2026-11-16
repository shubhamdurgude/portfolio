import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  Download, 
  MessageSquare
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { personalInfo } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Email composer draft state for authentic mailto generation
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copiedDraft, setCopiedDraft] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleLaunchEmailClient = (e: React.FormEvent) => {
    e.preventDefault();
    const emailSubject = encodeURIComponent(
      subject.trim() || `Inquiry from ${senderName || 'Portfolio Visitor'}`
    );
    const bodyText = encodeURIComponent(
      `Hi Shubham,\n\n${message}\n\nBest regards,\n${senderName || 'Anonymous'}\nContact: ${senderEmail || 'N/A'}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${bodyText}`;
  };

  const copyFullDraft = () => {
    const draftText = `To: ${personalInfo.email}\nSubject: ${subject || 'Project / Opportunity Inquiry'}\n\nHi Shubham,\n\n${message}\n\nBest regards,\n${senderName}\n${senderEmail}`;
    navigator.clipboard.writeText(draftText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-cyan-900/10 via-blue-900/10 to-violet-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Something"
          highlight="Intelligent."
          subtitle="Interested in AI, Generative AI, Agentic Systems, and innovative software solutions? Let's connect and explore opportunities to build impactful technology."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Details & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-dark-900/70 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 group shadow-lg shadow-cyan-950/10">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-dark-950 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs font-mono text-slate-400 mb-1">Email Address</div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors break-all flex items-center gap-2"
              >
                <span>{personalInfo.email}</span>
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Click to send direct email via your preferred mail client.
              </p>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-dark-900/70 border border-slate-800/80 hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-300 group shadow-lg shadow-cyan-950/10">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-dark-950 border border-slate-700 hover:border-emerald-400 text-slate-300 hover:text-white transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs font-mono text-slate-400 mb-1">Phone / WhatsApp</div>
              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="text-lg font-bold text-white hover:text-emerald-300 transition-colors"
              >
                {personalInfo.phone}
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Available for technical discussions and direct calls.
              </p>
            </div>

            {/* Location & Social Grid */}
            <div className="p-6 rounded-3xl bg-dark-900/70 border border-slate-800/80 backdrop-blur-xl space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Location</div>
                  <div className="text-sm font-bold text-white">
                    {personalInfo.location}
                  </div>
                  <div className="text-xs text-slate-400">
                    Open to local and remote AI engineering opportunities.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-dark-950 border border-slate-700 hover:border-blue-400 text-slate-200 hover:text-blue-300 transition-colors text-xs font-semibold"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-dark-950 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white transition-colors text-xs font-semibold"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub Profile</span>
                </a>
              </div>

              {/* Resume download directly in contact */}
              <div className="pt-2">
                <a
                  href={personalInfo.resumePath}
                  download="Shubham_Durgude_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 border border-cyan-500/40 text-cyan-300 hover:text-white text-xs font-semibold transition-all shadow-sm"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download Shubham's Resume (PDF)</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Mailto Compose Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900/80 border border-cyan-500/20 backdrop-blur-xl shadow-2xl shadow-cyan-950/20">
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      Quick Message Composer
                    </h3>
                    <span className="text-xs text-slate-400">
                      Pre-fills your native email client with zero fake submissions
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30">
                  mailto: Protocol
                </span>
              </div>

              <form onSubmit={handleLaunchEmailClient} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Sarah Connor"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email (for reply)
                    </label>
                    <input
                      type="email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. sarah@enterprise.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. AI Engineering Opportunity / Project Discussion"
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Shubham, I saw your work on Agentic workflows, RAG, and MatchX. Let's discuss an opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit & Copy Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-dark-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-dark-950" />
                    <span>Launch in Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={copyFullDraft}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs font-semibold text-slate-300 bg-dark-950 hover:bg-slate-800 border border-slate-800 transition-colors"
                  >
                    {copiedDraft ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Draft Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-400" />
                        <span>Copy Draft</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 text-center pt-2">
                  Respects your privacy: triggers your default mail client with <span className="font-mono text-slate-400">{personalInfo.email}</span> recipient.
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
