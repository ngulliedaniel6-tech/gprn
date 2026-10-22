import React, { useState } from 'react';
import { NAGA_TRIBES } from '../data/tribesData';
import { TribeProfile } from '../types';
import { Users, Search, Sparkles, MapPin, Calendar, Award, BookOpen, Compass } from 'lucide-react';

export const TribesHeritageSection: React.FC = () => {
  const [searchTribe, setSearchTribe] = useState('');
  const [selectedTribe, setSelectedTribe] = useState<TribeProfile | null>(null);

  const filteredTribes = NAGA_TRIBES.filter(
    (t) =>
      t.name.toLowerCase().includes(searchTribe.toLowerCase()) ||
      t.traditionalRegion.toLowerCase().includes(searchTribe.toLowerCase()) ||
      t.majorFestival.toLowerCase().includes(searchTribe.toLowerCase()) ||
      t.traditionalShawl.toLowerCase().includes(searchTribe.toLowerCase())
  );

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="pb-6 border-b border-emerald-900/60 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-950/70 border border-amber-800/40 text-amber-300 text-xs font-semibold mb-2">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            PAN-NAGA TRIBAL MOSAIC & MORUNG CIVILIZATION
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-100 font-heading">
            Tribes & Customary Heritage
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl font-serif">
            United under one God and one shared destiny: Exploring the rich traditions, unique festivals, 
            ceremonial shawls, and ancestral customary laws of the Naga tribes.
          </p>
        </div>

        {/* Search */}
        <div className="w-full md:w-72 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchTribe}
            onChange={(e) => setSearchTribe(e.target.value)}
            placeholder="Search tribe, festival, shawl..."
            className="w-full bg-[#081510] border border-emerald-800/60 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition"
          />
        </div>
      </div>

      {/* Cultural Pillar Banner */}
      <div className="my-6 p-6 rounded-2xl bg-gradient-to-r from-[#0d2218] via-[#091712] to-[#07130e] border border-emerald-800/60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-100 font-heading">The Morung Institution</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                The traditional indigenous university where youth learned customary law, poetry, oral genealogies, folklore, agriculture, and martial disciplines.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-100 font-heading">Ceremonial Shawls</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Every pattern, geometric band, and color represents specific clan achievements, feasts of merit, social status, and ancestral lineage.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-100 font-heading">Restorative Justice</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Customary laws prioritize social healing, restitution feasts, and communal consensus over punitive retribution, maintaining peace.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tribes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {filteredTribes.map((tribe) => (
          <div
            key={tribe.id}
            className="flex flex-col justify-between rounded-xl p-5 bg-[#091510] border border-emerald-900/60 hover:border-emerald-700/80 transition shadow-md hover:-translate-y-1"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-amber-200 font-editorial">
                  {tribe.name} Tribe
                </h3>
                <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/60">
                  Naga Nation
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{tribe.traditionalRegion}</span>
              </div>

              <div className="space-y-2 pt-2 border-t border-emerald-950 text-xs text-slate-300">
                <div>
                  <span className="text-slate-400 block text-[11px] font-semibold uppercase">Primary Festival:</span>
                  <div className="text-slate-200 font-medium flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-emerald-400" />
                    <span>{tribe.majorFestival} ({tribe.festivalMonth})</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px] font-semibold uppercase">Ceremonial Shawl:</span>
                  <div className="text-amber-300/90 font-medium">
                    {tribe.traditionalShawl}
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 line-clamp-2 pt-1">
                {tribe.culturalHighlights[0]}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-emerald-950 flex justify-end">
              <button
                onClick={() => setSelectedTribe(tribe)}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
              >
                <span>View Full Heritage Profile</span>
                <span className="text-amber-500">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tribe Detailed Modal */}
      {selectedTribe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0b1813] border border-amber-500/40 max-w-2xl w-full rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedTribe(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-emerald-950 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <div className="pb-4 border-b border-emerald-900/60">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold font-heading">
                Tribal Heritage Archive
              </span>
              <h2 className="text-2xl font-bold text-amber-100 font-editorial mt-1">
                {selectedTribe.name} Naga
              </h2>
              <p className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5" />
                Ancestral Region: {selectedTribe.traditionalRegion}
              </p>
            </div>

            <div className="py-4 space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-900/60">
                <span className="font-bold text-amber-300 block mb-1">
                  Traditional Festival & Season:
                </span>
                <p>{selectedTribe.majorFestival} celebrated in {selectedTribe.festivalMonth}.</p>
              </div>

              <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-900/60">
                <span className="font-bold text-amber-300 block mb-1">
                  Sacred Ceremonial Shawl:
                </span>
                <p>{selectedTribe.traditionalShawl}</p>
              </div>

              <div>
                <span className="font-bold text-slate-200 block mb-2">
                  Cultural Distinctives & Social Traditions:
                </span>
                <ul className="space-y-1.5 list-disc pl-4 marker:text-amber-400">
                  {selectedTribe.culturalHighlights.map((hl, hIdx) => (
                    <li key={hIdx} className="leading-relaxed">
                      {hl}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-lg bg-[#07110c] border-l-3 border-emerald-500 text-xs">
                <span className="font-bold text-emerald-300 block mb-1">
                  Customary Law & Village Governance:
                </span>
                <p className="italic text-slate-300">
                  {selectedTribe.customaryLawNote}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-900/60 flex justify-end">
              <button
                onClick={() => setSelectedTribe(null)}
                className="px-4 py-2 text-xs font-semibold rounded bg-amber-500 text-slate-950"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
