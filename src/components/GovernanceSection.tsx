import React, { useState } from 'react';
import { GOVERNMENT_WINGS } from '../data/governanceData';
import { GovernmentWing } from '../types';
import { NationalEmblem } from './NationalEmblem';
import { Landmark, Shield, Users, Scale, FileText, CheckCircle2, ChevronRight, Compass } from 'lucide-react';

export const GovernanceSection: React.FC = () => {
  const [selectedWingId, setSelectedWingId] = useState<string>(GOVERNMENT_WINGS[0].id);

  const activeWing = GOVERNMENT_WINGS.find((w) => w.id === selectedWingId) || GOVERNMENT_WINGS[0];

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-semibold mb-3">
          <Landmark className="w-3.5 h-3.5 text-emerald-400" />
          <span>INSTITUTIONAL ARCHITECTURE & DEMOCRATIC COUNCILS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-amber-100 font-heading">
          Governance of the People’s Republic of Nagaland
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm mt-2 font-serif leading-relaxed">
          Rooted in ancient egalitarian tribal village democracies, codified under the Yehzabo, 
          and led by the Yaruiwo, the Tatar Hoho (National Parliament), and the Council of Kilonsers.
        </p>
      </div>

      {/* Organizational Hierarchy Diagram */}
      <div className="mb-10 p-6 rounded-2xl bg-[#091510] border border-emerald-900/80 shadow-xl">
        <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 text-center mb-6">
          Administrative Structure of the GPRN
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {/* Executive */}
          <div className="p-4 rounded-xl bg-[#0e2118] border border-emerald-800/60 flex flex-col items-center">
            <Shield className="w-8 h-8 text-amber-400 mb-2" />
            <span className="text-xs uppercase tracking-wider font-bold text-slate-300">Executive</span>
            <h4 className="text-sm font-bold text-amber-200 font-serif mt-1">Yaruiwo & Ato Kilonser</h4>
            <p className="text-[11px] text-slate-400 mt-1">
              Presidential authority, Prime Minister & Council of Kilonsers (Cabinet Ministries).
            </p>
          </div>

          {/* Legislative */}
          <div className="p-4 rounded-xl bg-[#0e2118] border border-emerald-800/60 flex flex-col items-center">
            <Users className="w-8 h-8 text-emerald-400 mb-2" />
            <span className="text-xs uppercase tracking-wider font-bold text-slate-300">Legislature</span>
            <h4 className="text-sm font-bold text-emerald-200 font-serif mt-1">The Tatar Hoho</h4>
            <p className="text-[11px] text-slate-400 mt-1">
              National Parliament composed of Tatars representing each ancestral tribal region.
            </p>
          </div>

          {/* Customary Judiciary & Peace */}
          <div className="p-4 rounded-xl bg-[#0e2118] border border-emerald-800/60 flex flex-col items-center">
            <Scale className="w-8 h-8 text-sky-400 mb-2" />
            <span className="text-xs uppercase tracking-wider font-bold text-slate-300">Judiciary & Peace Cell</span>
            <h4 className="text-sm font-bold text-sky-200 font-serif mt-1">Customary Hoho & CFMC</h4>
            <p className="text-[11px] text-slate-400 mt-1">
              Village customary courts, Dobashis, and Ceasefire Monitoring Cell for truce compliance.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Ministries & Organs Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Wings Selector */}
        <div className="lg:col-span-5 space-y-2">
          <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 px-1 mb-2">
            Executive Organs & Portfolios ({GOVERNMENT_WINGS.length})
          </h3>

          <div className="space-y-2">
            {GOVERNMENT_WINGS.map((wing) => {
              const isSelected = wing.id === activeWing.id;
              return (
                <button
                  key={wing.id}
                  onClick={() => setSelectedWingId(wing.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#12281e] border-amber-500/50 shadow-md text-amber-200 font-semibold'
                      : 'bg-[#091510] border-emerald-900/60 text-slate-300 hover:bg-emerald-950/60 hover:border-emerald-700/60'
                  }`}
                >
                  <div>
                    <div className="text-xs font-serif font-bold text-slate-100">
                      {wing.title}
                    </div>
                    <div className="text-[11px] text-emerald-400 font-sans">
                      {wing.role}
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Detailed Wing Portfolio Card */}
        <div className="lg:col-span-7">
          <div className="bg-[#0b1813] border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-emerald-900/60">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300">
                  Native Designation: {activeWing.nativeTitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-amber-100 font-editorial mt-2">
                  {activeWing.title}
                </h3>
                <p className="text-xs text-amber-400 font-medium mt-0.5">
                  {activeWing.role}
                </p>
              </div>

              <NationalEmblem size="sm" showText={false} />
            </div>

            <div className="py-4">
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">
                Mandate & Constitutional Scope
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {activeWing.description}
              </p>
            </div>

            <div className="py-4 border-t border-emerald-900/50">
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                Key Responsibilities & Administrative Tasks
              </h4>
              <ul className="space-y-2">
                {activeWing.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 pt-4 border-t border-emerald-900/50 flex items-center justify-between text-xs text-slate-400 bg-emerald-950/40 p-3 rounded-lg border border-emerald-900/60">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Symbol of Office: <strong className="text-slate-200">{activeWing.symbolism}</strong></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
