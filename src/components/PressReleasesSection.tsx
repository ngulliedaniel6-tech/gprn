import React, { useState } from 'react';
import { PressRelease } from '../types';
import { OFFICIAL_PRESS_RELEASES } from '../data/pressReleasesData';
import { NationalEmblem } from './NationalEmblem';
import { GazetteModal } from './GazetteModal';
import { Search, Filter, Printer, Copy, Check, FileDown, Eye, Calendar, Tag, ShieldCheck, X } from 'lucide-react';

export const PressReleasesSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeRelease, setActiveRelease] = useState<PressRelease | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showGazette, setShowGazette] = useState<boolean>(false);

  const categories = [
    'All',
    'Presidential Address',
    'MIP Statement',
    'National Assembly',
    'Peace Dialogue',
    'Public Notification'
  ];

  const filteredReleases = OFFICIAL_PRESS_RELEASES.filter((pr) => {
    const matchesCategory = selectedCategory === 'All' || pr.category === selectedCategory;
    const matchesSearch = 
      pr.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pr.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pr.dispatchNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pr.content.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCopyText = (release: PressRelease) => {
    const fullText = `GOVERNMENT OF THE PEOPLE'S REPUBLIC OF NAGALAND\n${release.issuedBy}\nDispatch No: ${release.dispatchNo}\nDate: ${release.date}\n\n${release.title.toUpperCase()}\n\n${release.content.join('\n\n')}\n\nKuknalim!\nNagaland for Christ.`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(release.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleDownloadRelease = (release: PressRelease) => {
    const fullText = `GOVERNMENT OF THE PEOPLE'S REPUBLIC OF NAGALAND\n${release.issuedBy}\nDispatch No: ${release.dispatchNo}\nDate: ${release.date}\n\n${release.title.toUpperCase()}\n\n${release.content.join('\n\n')}\n\nKuknalim!\nNagaland for Christ.`;
    const element = document.createElement("a");
    const file = new Blob([fullText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${release.dispatchNo.replace(/\//g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-emerald-900/60">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-950/70 border border-red-800/40 text-red-300 text-xs font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            MINISTRY OF INFORMATION & PUBLICITY (MIP)
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-100 font-heading">
            Official Dispatches & Press Communiqués
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl font-serif">
            Authoritative public releases, presidential national day messages, Tatar Hoho resolutions, 
            and peace negotiation bulletins of the GPRN.
          </p>
        </div>

        {/* Search bar */}
        <div className="w-full md:w-72 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search dispatches, dates, keywords..."
            className="w-full bg-[#081510] border border-emerald-800/60 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition"
          />
        </div>
      </div>

      {/* Categories Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
        <Filter className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span className="text-[11px] text-slate-400 uppercase font-semibold shrink-0">Filter:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition ${
              selectedCategory === cat
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-950/40'
                : 'bg-emerald-950/50 hover:bg-emerald-900/60 text-slate-300 border border-emerald-800/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Press Releases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {filteredReleases.map((pr) => (
          <article
            key={pr.id}
            className={`flex flex-col justify-between rounded-xl p-5 border transition-all duration-200 hover:-translate-y-1 ${
              pr.isImportant
                ? 'bg-[#0f1d17] border-amber-500/40 shadow-lg shadow-amber-950/30'
                : 'bg-[#091510] border-emerald-900/60 hover:border-emerald-700/60'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 text-[11px]">
                <span className="text-amber-400 font-mono font-semibold">
                  {pr.dispatchNo}
                </span>
                <span className="inline-flex items-center gap-1 text-slate-400">
                  <Calendar className="w-3 h-3 text-slate-500" />
                  {pr.date}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800/50 text-emerald-300">
                  {pr.category}
                </span>
                {pr.isImportant && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-800/40">
                    Important
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-slate-100 font-serif leading-snug hover:text-amber-300 transition">
                {pr.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                {pr.summary}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-emerald-900/40 flex items-center justify-between">
              <span className="text-[10px] text-slate-400 font-medium truncate max-w-[150px]">
                {pr.issuedBy}
              </span>
              <button
                onClick={() => setActiveRelease(pr)}
                className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 px-2.5 py-1 rounded bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Read Dispatch</span>
              </button>
            </div>
          </article>
        ))}

        {filteredReleases.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-400">
            <p className="text-sm">No dispatches match the selected criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="mt-3 px-3 py-1.5 text-xs rounded bg-emerald-900 text-emerald-200"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Reader Modal */}
      {activeRelease && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="bg-[#0b1813] border border-amber-500/30 max-w-3xl w-full rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setActiveRelease(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-emerald-950 border border-emerald-800 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Official Header */}
            <div className="text-center pb-6 border-b border-emerald-900/60 relative">
              <NationalEmblem size="sm" showText={false} className="mx-auto mb-2" />
              <div className="text-xs uppercase tracking-widest text-amber-400 font-bold font-heading">
                Government of the People’s Republic of Nagaland
              </div>
              <div className="text-sm font-serif text-slate-200 font-semibold mt-0.5">
                {activeRelease.issuedBy.toUpperCase()}
              </div>
              <div className="text-[11px] text-amber-300/80 font-serif italic mt-0.5">
                Motto: "Nagaland for Christ"
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 mt-4 px-3 py-2 bg-emerald-950/50 rounded border border-emerald-900/50 text-[11px] text-slate-300">
                <span>Dispatch: <strong className="text-amber-400 font-mono">{activeRelease.dispatchNo}</strong></span>
                <span>Category: <strong className="text-emerald-300">{activeRelease.category}</strong></span>
                <span>Date: <strong className="text-slate-200">{activeRelease.date}</strong></span>
              </div>
            </div>

            {/* Release Title */}
            <div className="py-6">
              <h2 className="text-xl sm:text-2xl font-bold text-amber-100 font-editorial leading-snug">
                {activeRelease.title}
              </h2>
            </div>

            {/* Content Body */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed text-justify">
              {activeRelease.content.map((paragraph, idx) => (
                <p key={idx} className="first-letter:text-lg first-letter:font-serif first-letter:font-bold first-letter:text-amber-400">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signoff & Seal Verification */}
            <div className="mt-8 pt-6 border-t border-emerald-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Digitally Authenticated MIP Dispatch</span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyText(activeRelease)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium bg-emerald-950 hover:bg-emerald-900 text-slate-200 border border-emerald-800 transition"
                >
                  {copiedId === activeRelease.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setShowGazette(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-emerald-800 hover:bg-emerald-700 text-white transition border border-emerald-600 shadow"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>State Gazette View</span>
                </button>

                <button
                  onClick={() => handleDownloadRelease(activeRelease)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download .TXT</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Official Gazette Modal */}
      {showGazette && activeRelease && (
        <GazetteModal
          isOpen={showGazette}
          onClose={() => setShowGazette(false)}
          title={activeRelease.title}
          dispatchNo={activeRelease.dispatchNo}
          date={activeRelease.date}
          category={activeRelease.category}
          content={activeRelease.content}
          issuedBy={activeRelease.issuedBy}
        />
      )}
    </section>
  );
};
