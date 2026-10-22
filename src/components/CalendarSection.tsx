import React, { useState } from 'react';
import { NAGA_OBSERVANCES, FLAG_CODE_RULES } from '../data/calendarData';
import { ObservanceDay } from '../types';
import { NationalFlag } from './NationalEmblem';
import { Calendar, Filter, Flag, ShieldCheck, Sparkles, Clock, Compass, BookOpen } from 'lucide-react';

export const CalendarSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = [
    'All',
    'National Day',
    'Historical Milestone',
    'Peace Observance',
    'Tribal Festival'
  ];

  const filteredObservances = NAGA_OBSERVANCES.filter(
    (obs) => selectedFilter === 'All' || obs.category === selectedFilter
  );

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-semibold mb-3">
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>OFFICIAL OBSERVANCES & CEREMONIAL PROTOCOLS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-amber-100 font-heading">
          Naga National Calendar & Protocol Guide
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm mt-2 font-serif leading-relaxed">
          Official schedule of national days, historic plebiscite and memorandum anniversaries, 
          tribal festivals of thanksgiving, and sacred flag etiquette.
        </p>
      </div>

      {/* Flag Code & Protocol Card */}
      <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-[#0c2219] via-[#091712] to-[#07130e] border border-amber-500/40 shadow-xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-emerald-900/60">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <NationalFlag className="w-20 h-12 rounded shadow border border-sky-400/40 shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-amber-100 font-heading">
                The National Flag Etiquette & Protocol Code
              </h3>
              <p className="text-xs text-emerald-400 font-medium">
                Mandated by the GPRN Protocol Division under the Yehzabo
              </p>
            </div>
          </div>
          <span className="text-[11px] text-amber-300 font-serif italic bg-amber-950/60 px-3 py-1 rounded border border-amber-800/40">
            Unfurled 22 March 1956 • Parashen
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {FLAG_CODE_RULES.map((fc, fIdx) => (
            <div key={fIdx} className="p-4 rounded-xl bg-[#07130e] border border-emerald-900/70 space-y-1.5 text-xs">
              <span className="font-bold text-amber-300 flex items-center gap-1.5">
                <Flag className="w-3.5 h-3.5 text-amber-400" />
                {fc.rule}
              </span>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {fc.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Observance Filters */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-6">
        <Filter className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
              selectedFilter === cat
                ? 'bg-amber-500 text-slate-950 font-bold shadow'
                : 'bg-emerald-950/60 hover:bg-emerald-900 text-slate-300 border border-emerald-800/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Calendar List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {filteredObservances.map((obs) => (
          <div
            key={obs.id}
            className="flex flex-col justify-between rounded-xl p-5 bg-[#091510] border border-emerald-900/70 hover:border-amber-500/50 transition shadow-md"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-800/40">
                  {obs.dateStr}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-900">
                  {obs.category}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-100 font-serif leading-snug">
                {obs.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {obs.significance}
              </p>

              <div className="p-3 rounded-lg bg-[#07130e] border border-emerald-950 text-[11px] text-slate-400 space-y-1">
                <div className="font-semibold text-emerald-300 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-400" />
                  <span>Official Protocol:</span>
                </div>
                <p className="italic text-slate-300">
                  {obs.protocolInstruction}
                </p>
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-emerald-950 flex items-center justify-between text-[11px] text-slate-500">
              <span>Established {obs.originYear}</span>
              <span className="text-amber-400 font-serif">Kuknalim</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
