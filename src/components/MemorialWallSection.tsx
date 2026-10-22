import React, { useState } from 'react';
import { MEMORIAL_FIGURES } from '../data/memorialData';
import { MemorialFigure } from '../types';
import { Flame, Heart, Award, Quote, Sparkles, Shield, Bookmark } from 'lucide-react';

export const MemorialWallSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [flameCount, setFlameCount] = useState<number>(1918);
  const [hasLitFlame, setHasLitFlame] = useState<boolean>(false);

  const categories = [
    'All',
    'Pioneers (1918-1929)',
    'Leaders (1947-1956)',
    'Peacemakers',
    'Martyrs of Freedom'
  ];

  const handleLightFlame = () => {
    if (!hasLitFlame) {
      setFlameCount((prev) => prev + 1);
      setHasLitFlame(true);
    }
  };

  const filteredFigures = MEMORIAL_FIGURES.filter(
    (fig) => selectedCategory === 'All' || fig.category === selectedCategory
  );

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-800 text-red-300 text-xs font-semibold mb-3">
          <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>IN SACRED MEMORY & ETERNAL GRATITUDE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-amber-100 font-heading">
          Pioneers & Martyrs Memorial Roll
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm mt-2 font-serif leading-relaxed">
          Honoring the visionary founders of the 1918 Naga Club, the 20 courageous signatories of the 1929 Simon Commission, 
          the architects of the 1951 Plebiscite, self-sacrificing peacemakers, and fallen defenders of the homeland.
        </p>
      </div>

      {/* Interactive Flame of Peace Banner */}
      <div className="mb-10 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#170a0a] via-[#101b15] to-[#07130e] border border-amber-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold uppercase text-amber-400 tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>The Eternal Flame of Naga Remembrance</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-amber-50 font-editorial">
            "They Gave Their Today for Our Tomorrow"
          </h3>
          <p className="text-xs text-slate-300 font-serif italic max-w-xl">
            In silent reverence for all who walked through hardship, sacrifice, and displacement so that our 
            language, customary land, and sovereign dignity would survive across the generations.
          </p>
        </div>

        <div className="shrink-0 flex flex-col items-center gap-2">
          <div className="flex items-center gap-3 bg-[#0a1410] px-4 py-2 rounded-xl border border-emerald-900/80">
            <div className={`relative ${hasLitFlame ? 'animate-bounce' : ''}`}>
              <Flame className="w-8 h-8 text-amber-500 fill-amber-400" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Flames of Honor</div>
              <div className="text-lg font-bold font-mono text-amber-300">
                {flameCount.toLocaleString()}
              </div>
            </div>
          </div>

          <button
            onClick={handleLightFlame}
            disabled={hasLitFlame}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-2 shadow-lg ${
              hasLitFlame
                ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700/60 cursor-default'
                : 'bg-amber-500 hover:bg-amber-400 text-slate-950 hover:scale-105'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>{hasLitFlame ? 'Flame Reverently Lit' : 'Light a Flame of Peace'}</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
              selectedCategory === cat
                ? 'bg-amber-500 text-slate-950 font-bold shadow'
                : 'bg-emerald-950/60 hover:bg-emerald-900 text-slate-300 border border-emerald-800/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Memorial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {filteredFigures.map((fig) => (
          <div
            key={fig.id}
            className="flex flex-col justify-between rounded-xl p-5 bg-[#091510] border border-emerald-900/70 hover:border-amber-500/50 transition shadow-md"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800/40">
                  {fig.category}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  {fig.era}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-100 font-serif leading-snug">
                {fig.name}
              </h3>

              <div className="text-xs text-emerald-400 font-medium">
                {fig.role}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                {fig.contribution}
              </p>

              {fig.historicQuote && (
                <div className="p-3 rounded-lg bg-amber-500/5 border-l-2 border-amber-500 text-[11px] text-amber-200/90 italic font-serif flex items-start gap-2">
                  <Quote className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>"{fig.historicQuote}"</span>
                </div>
              )}
            </div>

            <div className="pt-3 mt-4 border-t border-emerald-950 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-slate-500">
                <Bookmark className="w-3 h-3" />
                Permanent Registry
              </span>
              <span className="text-amber-400/80 font-serif">Kuknalim</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
