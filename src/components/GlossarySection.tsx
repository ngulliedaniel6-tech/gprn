import React, { useState } from 'react';
import { NAGA_GLOSSARY_TERMS } from '../data/glossaryData';
import { GlossaryTerm } from '../types';
import { BookA, Search, Volume2, Filter, Sparkles, Check, Bookmark } from 'lucide-react';

export const GlossarySection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [speakingTermId, setSpeakingTermId] = useState<string | null>(null);

  const categories = [
    'All',
    'Governance',
    'Customary Law',
    'Culture & Attire',
    'Civic Expression'
  ];

  const handleSpeakTerm = (term: GlossaryTerm) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setSpeakingTermId(term.id);
      const utterance = new SpeechSynthesisUtterance(term.term);
      utterance.rate = 0.9;
      utterance.onend = () => setSpeakingTermId(null);
      utterance.onerror = () => setSpeakingTermId(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  const filteredTerms = NAGA_GLOSSARY_TERMS.filter((t) => {
    const matchesCat = selectedCategory === 'All' || t.category === selectedCategory;
    const matchesQuery =
      t.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.literalMeaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.detailedDefinition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.languageOrTribe.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="pb-6 border-b border-emerald-900/60 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-950/70 border border-amber-800/40 text-amber-300 text-xs font-semibold mb-2">
            <BookA className="w-3.5 h-3.5 text-amber-400" />
            PAN-NAGA CUSTOMARY & CIVIC LEXICON
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-100 font-heading">
            Glossary of Naga Governance & Heritage Terms
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl font-serif">
            A comprehensive reference dictionary of constitutional designations, unwritten customary laws, 
            sacred shawls, and civic expressions across Naga languages.
          </p>
        </div>

        {/* Search */}
        <div className="w-full md:w-72 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Kuknalim, Putu Menden, Chuki..."
            className="w-full bg-[#081510] border border-emerald-800/60 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
        <Filter className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span className="text-[11px] text-slate-400 uppercase font-semibold shrink-0">Domain:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition ${
              selectedCategory === cat
                ? 'bg-amber-500 text-slate-950 font-bold shadow'
                : 'bg-emerald-950/50 hover:bg-emerald-900/60 text-slate-300 border border-emerald-800/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
        {filteredTerms.map((term) => (
          <div
            key={term.id}
            className="flex flex-col justify-between rounded-xl p-5 bg-[#091510] border border-emerald-900/70 hover:border-emerald-700/80 transition shadow-md"
          >
            <div className="space-y-2.5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-amber-200 font-editorial">
                    {term.term}
                  </h3>
                  <div className="text-[11px] text-emerald-400 font-medium">
                    {term.languageOrTribe}
                  </div>
                </div>

                <button
                  onClick={() => handleSpeakTerm(term)}
                  className={`p-1.5 rounded-lg border transition ${
                    speakingTermId === term.id
                      ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse'
                      : 'bg-emerald-950 hover:bg-emerald-900 text-amber-300 border-emerald-800/50'
                  }`}
                  title="Pronounce Term"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="p-2 rounded bg-amber-950/20 border border-amber-900/30 text-xs text-amber-300 font-serif italic">
                Literal: "{term.literalMeaning}"
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {term.detailedDefinition}
              </p>

              <div className="pt-2 border-t border-emerald-950 text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300 block mb-0.5">Contextual Usage:</span>
                <span className="italic">"{term.contextUsage}"</span>
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-emerald-950 flex items-center justify-between text-[10px] text-slate-400">
              <span className="uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-900">
                {term.category}
              </span>
              <span className="text-slate-500">Naga Heritage Archive</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
