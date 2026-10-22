import React, { useState } from 'react';
import { HISTORICAL_TIMELINE } from '../data/historicalData';
import { HistoricalEvent } from '../types';
import { History, Calendar, MapPin, Award, BookOpen, Quote, ChevronDown, ChevronUp } from 'lucide-react';

interface TimelineProps {
  onOpenDocument?: (docId: string) => void;
}

export const TimelineSection: React.FC<TimelineProps> = ({ onOpenDocument }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedEvents, setExpandedEvents] = useState<Record<string, boolean>>({
    'simon-commission-1929': true,
    'voluntary-plebiscite-1951': true,
    'agreed-position-2017': true
  });

  const categories = ['All', 'Foundational', 'Political', 'Constitutional', 'Peace Accord', 'Social Unity'];

  const toggleExpand = (id: string) => {
    setExpandedEvents((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredEvents = HISTORICAL_TIMELINE.filter(
    (ev) => selectedCategory === 'All' || ev.category === selectedCategory
  );

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
          <History className="w-3.5 h-3.5 text-amber-400" />
          <span>A CENTURY OF NAGA NATIONAL SELF-DETERMINATION</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-amber-100 font-heading">
          Historical Chronicle (1918 – Present)
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm mt-2 font-serif leading-relaxed">
          From the formation of the Naga Club and the 1929 Simon Commission Memorandum, through the 1951 Plebiscite, 
          the Yehzabo Republic, and modern peace accords — tracing the unbroken journey of the Naga nation.
        </p>
      </div>

      {/* Category filters */}
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

      {/* Timeline track */}
      <div className="relative border-l-2 border-emerald-800/70 ml-4 sm:ml-32 space-y-8 pl-6 sm:pl-10">
        {filteredEvents.map((event) => {
          const isExpanded = !!expandedEvents[event.id];

          return (
            <div key={event.id} className="relative group">
              {/* Year badge hanging on left */}
              <div className="hidden sm:block absolute -left-[144px] top-1 text-right w-24">
                <span className="text-xl font-bold font-heading text-amber-400 block leading-none">
                  {event.year}
                </span>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  {event.dateStr.split(' ')[0]}
                </span>
              </div>

              {/* Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-4 h-4 rounded-full bg-amber-400 border-4 border-[#091510] shadow-md group-hover:scale-125 transition-transform"></div>

              {/* Event Card */}
              <div className="bg-[#0b1712] rounded-xl p-5 border border-emerald-900/80 hover:border-emerald-700/80 transition-all shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-emerald-950">
                  <div className="sm:hidden text-amber-400 font-bold font-heading text-lg">
                    {event.dateStr}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/50">
                      {event.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 font-serif mt-1">
                      {event.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      {event.location}
                    </span>
                    <button
                      onClick={() => toggleExpand(event.id)}
                      className="p-1 rounded hover:bg-emerald-900/60 text-slate-300 ml-2"
                      title={isExpanded ? "Collapse" : "Expand"}
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 mt-3 font-sans leading-relaxed">
                  {event.summary}
                </p>

                {/* Excerpt Quote */}
                {event.historicDocumentExcerpt && (
                  <div className="mt-3 p-3 rounded-lg bg-amber-500/5 border-l-2 border-amber-500 text-xs text-amber-200/90 italic flex items-start gap-2">
                    <Quote className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>"{event.historicDocumentExcerpt}"</span>
                  </div>
                )}

                {/* Collapsible Details */}
                {isExpanded && (
                  <div className="mt-4 pt-3 border-t border-emerald-950 space-y-2 text-xs text-slate-300">
                    <div className="font-semibold text-slate-200">Historical Facts & Resolutions:</div>
                    <ul className="space-y-1.5 pl-4 list-disc marker:text-emerald-500">
                      {event.details.map((detail, dIdx) => (
                        <li key={dIdx} className="leading-relaxed">
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-3 p-2.5 rounded bg-emerald-950/40 border border-emerald-900/60 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-amber-400" />
                        <span className="text-[11px] text-amber-300 font-medium">
                          Significance: {event.significance}
                        </span>
                      </div>
                      {onOpenDocument && (event.id.includes('simon') || event.id.includes('independence') || event.id.includes('plebiscite') || event.id.includes('agreed')) && (
                        <button
                          onClick={() => {
                            if (event.id.includes('simon')) onOpenDocument('simon-commission-full');
                            else if (event.id.includes('independence')) onOpenDocument('independence-declaration-full');
                            else if (event.id.includes('plebiscite')) onOpenDocument('plebiscite-1951-full');
                            else if (event.id.includes('agreed')) onOpenDocument('agreed-position-2017-full');
                          }}
                          className="text-[11px] font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-2 flex items-center gap-1"
                        >
                          <BookOpen className="w-3 h-3" />
                          View Primary Record
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
