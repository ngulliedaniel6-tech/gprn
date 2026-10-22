import React, { useState, useEffect } from 'react';
import { NavTab } from '../types';
import { OFFICIAL_PRESS_RELEASES } from '../data/pressReleasesData';
import { HISTORICAL_TIMELINE, PRIMARY_DOCUMENTS } from '../data/historicalData';
import { YEHZABO_CHAPTERS, GOVERNMENT_WINGS } from '../data/governanceData';
import { NAGA_TRIBES } from '../data/tribesData';
import { NAGA_REGIONAL_TERRITORIES } from '../data/regionsData';
import { MEMORIAL_FIGURES } from '../data/memorialData';
import { NAGA_OBSERVANCES } from '../data/calendarData';
import { Search, X, FileText, Bell, BookOpen, Users, Landmark, History, ArrowRight, Compass, Flame, Calendar, Scale } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: NavTab, targetId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  // Search Results
  const matchedReleases = q
    ? OFFICIAL_PRESS_RELEASES.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.dispatchNo.toLowerCase().includes(q) ||
          r.summary.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const matchedTimeline = q
    ? HISTORICAL_TIMELINE.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.year.toString().includes(q) ||
          t.summary.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const matchedDocuments = q
    ? PRIMARY_DOCUMENTS.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.historicalContext.toLowerCase().includes(q) ||
          d.tags.some((t) => t.toLowerCase().includes(q))
      ).slice(0, 3)
    : [];

  const matchedTribes = q
    ? NAGA_TRIBES.filter(
        (tr) =>
          tr.name.toLowerCase().includes(q) ||
          tr.majorFestival.toLowerCase().includes(q) ||
          tr.traditionalRegion.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const matchedRegions = q
    ? NAGA_REGIONAL_TERRITORIES.filter(
        (reg) =>
          reg.name.toLowerCase().includes(q) ||
          reg.headquarters.toLowerCase().includes(q) ||
          reg.customaryCouncil.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const matchedMemorials = q
    ? MEMORIAL_FIGURES.filter(
        (mf) =>
          mf.name.toLowerCase().includes(q) ||
          mf.role.toLowerCase().includes(q) ||
          mf.contribution.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const matchedObservances = q
    ? NAGA_OBSERVANCES.filter(
        (obs) =>
          obs.title.toLowerCase().includes(q) ||
          obs.dateStr.toLowerCase().includes(q) ||
          obs.significance.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const hasResults =
    matchedReleases.length > 0 ||
    matchedTimeline.length > 0 ||
    matchedDocuments.length > 0 ||
    matchedTribes.length > 0 ||
    matchedRegions.length > 0 ||
    matchedMemorials.length > 0 ||
    matchedObservances.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0b1813] border border-amber-500/40 max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden relative">
        {/* Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-emerald-900/60 bg-[#07110c]">
          <Search className="w-5 h-5 text-amber-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Simon Commission 1929, Plebiscite 1951, Lotha, Yehzabo, MIP dispatches..."
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-white mr-2">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-[11px] font-mono px-2 py-1 rounded bg-emerald-950 text-slate-300 border border-emerald-800"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query && (
            <div className="py-8 text-center text-xs text-slate-400 space-y-2">
              <p className="font-semibold text-slate-300">Quick suggestions:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['1929 Simon Commission', '1951 Plebiscite', 'Agreed Position 2017', 'Yehzabo Constitution', 'Lotha', 'Tatar Hoho', 'Nagaland for Christ'].map(
                  (sug) => (
                    <button
                      key={sug}
                      onClick={() => setQuery(sug)}
                      className="px-2.5 py-1 rounded bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-800/40 text-[11px]"
                    >
                      {sug}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {query && !hasResults && (
            <div className="py-12 text-center text-xs text-slate-400">
              No matching records found for "{query}". Try searching by year, tribe, or keyword.
            </div>
          )}

          {/* Primary Documents Matches */}
          {matchedDocuments.length > 0 && (
            <div className="space-y-1.5">
              <div className="text-[10px] uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                Primary Historical Records ({matchedDocuments.length})
              </div>
              {matchedDocuments.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => {
                    onNavigate('documents', doc.id);
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-lg bg-[#08120e] hover:bg-emerald-950/60 border border-emerald-900/70 transition flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-200 font-serif">{doc.title}</div>
                    <div className="text-[11px] text-slate-400">{doc.date} • {doc.category}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
                </button>
              ))}
            </div>
          )}

          {/* Press Releases Matches */}
          {matchedReleases.length > 0 && (
            <div className="space-y-1.5">
              <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Bell className="w-3.5 h-3.5" />
                MIP Dispatches ({matchedReleases.length})
              </div>
              {matchedReleases.map((pr) => (
                <button
                  key={pr.id}
                  onClick={() => {
                    onNavigate('press');
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-lg bg-[#08120e] hover:bg-emerald-950/60 border border-emerald-900/70 transition flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-200 font-serif">{pr.title}</div>
                    <div className="text-[11px] text-slate-400">{pr.dispatchNo} • {pr.date}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
                </button>
              ))}
            </div>
          )}

          {/* Historical Timeline Matches */}
          {matchedTimeline.length > 0 && (
            <div className="space-y-1.5">
              <div className="text-[10px] uppercase font-bold tracking-wider text-sky-400 flex items-center gap-1.5">
                <History className="w-3.5 h-3.5" />
                Historical Timeline Milestones ({matchedTimeline.length})
              </div>
              {matchedTimeline.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate('history');
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-lg bg-[#08120e] hover:bg-emerald-950/60 border border-emerald-900/70 transition flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-200 font-serif">
                      {item.year}: {item.title}
                    </div>
                    <div className="text-[11px] text-slate-400">{item.summary}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
                </button>
              ))}
            </div>
          )}

          {/* Tribes Matches */}
          {matchedTribes.length > 0 && (
            <div className="space-y-1.5">
              <div className="text-[10px] uppercase font-bold tracking-wider text-amber-300 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                Tribes & Cultural Heritage ({matchedTribes.length})
              </div>
              {matchedTribes.map((tr) => (
                <button
                  key={tr.id}
                  onClick={() => {
                    onNavigate('tribes');
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-lg bg-[#08120e] hover:bg-emerald-950/60 border border-emerald-900/70 transition flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-200 font-serif">
                      {tr.name} Tribe
                    </div>
                    <div className="text-[11px] text-slate-400">{tr.traditionalRegion} • Festival: {tr.majorFestival}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
                </button>
              ))}
            </div>
          )}

          {/* Regions Matches */}
          {matchedRegions.length > 0 && (
            <div className="space-y-1.5">
              <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                Homeland Territories & Districts ({matchedRegions.length})
              </div>
              {matchedRegions.map((reg) => (
                <button
                  key={reg.id}
                  onClick={() => {
                    onNavigate('map');
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-lg bg-[#08120e] hover:bg-emerald-950/60 border border-emerald-900/70 transition flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-200 font-serif">
                      {reg.name}
                    </div>
                    <div className="text-[11px] text-slate-400">HQ: {reg.headquarters} • Council: {reg.customaryCouncil}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
                </button>
              ))}
            </div>
          )}

          {/* Memorial Figures Matches */}
          {matchedMemorials.length > 0 && (
            <div className="space-y-1.5">
              <div className="text-[10px] uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                Pioneers & Martyrs Wall ({matchedMemorials.length})
              </div>
              {matchedMemorials.map((mf) => (
                <button
                  key={mf.id}
                  onClick={() => {
                    onNavigate('memorial');
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-lg bg-[#08120e] hover:bg-emerald-950/60 border border-emerald-900/70 transition flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-200 font-serif">
                      {mf.name} ({mf.era})
                    </div>
                    <div className="text-[11px] text-slate-400">{mf.role}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
                </button>
              ))}
            </div>
          )}

          {/* Observances Matches */}
          {matchedObservances.length > 0 && (
            <div className="space-y-1.5">
              <div className="text-[10px] uppercase font-bold tracking-wider text-amber-300 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                National Observances & Protocols ({matchedObservances.length})
              </div>
              {matchedObservances.map((obs) => (
                <button
                  key={obs.id}
                  onClick={() => {
                    onNavigate('calendar');
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-lg bg-[#08120e] hover:bg-emerald-950/60 border border-emerald-900/70 transition flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-200 font-serif">
                      {obs.dateStr}: {obs.title}
                    </div>
                    <div className="text-[11px] text-slate-400">{obs.significance}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
