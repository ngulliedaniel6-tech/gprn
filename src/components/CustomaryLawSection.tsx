import React, { useState } from 'react';
import { CUSTOMARY_CASES } from '../data/customaryCasesData';
import { CustomaryCase } from '../types';
import { Scale, Shield, Users, BookOpen, CheckCircle, ChevronDown, ChevronUp, Landmark } from 'lucide-react';

export const CustomaryLawSection: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CUSTOMARY_CASES[0].id);

  const activeCase =
    CUSTOMARY_CASES.find((c) => c.id === selectedCaseId) || CUSTOMARY_CASES[0];

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-semibold mb-3">
          <Scale className="w-3.5 h-3.5 text-emerald-400" />
          <span>INDIGENOUS JURISPRUDENCE & RESTORATIVE JUSTICE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-amber-100 font-heading">
          Naga Customary Law & Village Republics
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm mt-2 font-serif leading-relaxed">
          From the unwritten codes of our ancestors to the Gaonbura and Dobashi courts: 
          Examining how traditional dispute resolution preserves communal harmony, inalienable land tenure, 
          and restorative reconciliation.
        </p>
      </div>

      {/* The 3 Institutions of Customary Justice */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        <div className="p-5 rounded-xl bg-[#091510] border border-emerald-900/80">
          <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 w-fit mb-3">
            <Landmark className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-100 font-heading mb-1">
            Village Elder Assemblies
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Called <em>Putu Menden</em> (Ao), <em>Chuki</em> (Lotha), <em>Pithi</em> (Angami), or <em>Akukau Hoho</em> (Sümi). 
            Governs internal village territory, water rights, and moral codes through collective consensus.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-[#091510] border border-emerald-900/80">
          <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 w-fit mb-3">
            <Scale className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-100 font-heading mb-1">
            The Dobashi Institution
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Originally meaning "two languages", Dobashis are venerated traditional arbiters possessing encyclopedic knowledge 
            of unwritten clan customary precedents, clan boundaries, and oaths.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-[#091510] border border-emerald-900/80">
          <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 w-fit mb-3">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-100 font-heading mb-1">
            Restorative Feasts of Peace
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Rather than punitive incarceration, customary justice reconciles broken ties through shared meals, 
            ritual cleansing of the soil, and mutual oath-taking before Almighty God.
          </p>
        </div>
      </div>

      {/* Case Studies Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Cases Navigation */}
        <div className="lg:col-span-5 space-y-2">
          <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 px-1 mb-2">
            Documented Customary Jurisprudence Cases
          </h3>

          <div className="space-y-2">
            {CUSTOMARY_CASES.map((c) => {
              const isSelected = c.id === activeCase.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCaseId(c.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-[#12281e] border-amber-500/50 shadow-md text-amber-200'
                      : 'bg-[#091510] border-emerald-900/60 text-slate-300 hover:bg-emerald-950/60'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-semibold text-amber-400">{c.subject}</span>
                    <span className="text-slate-500 text-[10px] uppercase font-bold">Case Precedent</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-100 font-serif leading-snug">
                    {c.title}
                  </h4>
                  <div className="text-[11px] text-emerald-400/90 mt-1">
                    {c.tribeTradition}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Detailed Case Inspection */}
        <div className="lg:col-span-7">
          <div className="bg-[#0b1813] border border-amber-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative space-y-5">
            <div className="pb-4 border-b border-emerald-900/60">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 px-2 py-0.5 rounded bg-amber-950/70 border border-amber-800/40">
                {activeCase.subject}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-amber-100 font-editorial mt-2">
                {activeCase.title}
              </h3>
              <p className="text-xs text-emerald-400 font-medium mt-1">
                Tradition: {activeCase.tribeTradition}
              </p>
            </div>

            {/* Scenario */}
            <div className="space-y-1.5">
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                The Disputed Scenario
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans bg-[#08130e] p-3.5 rounded-xl border border-emerald-950">
                {activeCase.scenario}
              </p>
            </div>

            {/* Jurisprudence Code */}
            <div className="space-y-1.5">
              <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400">
                Applicable Unwritten Customary Code
              </h4>
              <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-serif italic bg-amber-950/20 p-3.5 rounded-xl border border-amber-900/40">
                "{activeCase.traditionalJurisprudence}"
              </p>
            </div>

            {/* Customary Resolution */}
            <div className="space-y-1.5">
              <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                The Elder Assembly / Dobashi Resolution
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans bg-emerald-950/20 p-3.5 rounded-xl border border-emerald-900/50">
                {activeCase.customaryResolution}
              </p>
            </div>

            {/* Significance */}
            <div className="pt-3 border-t border-emerald-950 flex items-start gap-2 text-xs text-slate-400">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-200">Legal Significance:</strong> {activeCase.significance}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
