import React, { useState } from 'react';
import { HISTORIC_ACCORDS_COMPARISON } from '../data/accordsComparisonData';
import { AccordComparisonItem } from '../types';
import { Scale, CheckCircle2, Shield, BookOpen, Handshake, ArrowRight, Award } from 'lucide-react';

export const AccordComparativeSection: React.FC = () => {
  const [selectedAccordA, setSelectedAccordA] = useState<string>('accord-1929');
  const [selectedAccordB, setSelectedAccordB] = useState<string>('accord-2017');

  const accordA =
    HISTORIC_ACCORDS_COMPARISON.find((a) => a.id === selectedAccordA) ||
    HISTORIC_ACCORDS_COMPARISON[0];
  const accordB =
    HISTORIC_ACCORDS_COMPARISON.find((a) => a.id === selectedAccordB) ||
    HISTORIC_ACCORDS_COMPARISON[4];

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-semibold mb-3">
          <Scale className="w-3.5 h-3.5 text-amber-400" />
          <span>DIPLOMATIC JURISPRUDENCE & CHARTER COMPARISON</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-amber-100 font-heading">
          Naga Accords & Treaties Comparative Matrix
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm mt-2 font-serif leading-relaxed">
          Examine the evolution of Indo-Naga political dialogues across the decades: 
          from the 1929 Simon Commission Memorandum to the 1947 Hydari Accord, 1951 Plebiscite, 
          and the landmark 2017 Agreed Position.
        </p>
      </div>

      {/* Accord Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-4 rounded-xl bg-[#091510] border border-emerald-800/60">
          <label className="block text-xs uppercase font-bold tracking-wider text-amber-400 mb-2">
            Select Primary Baseline Charter (A):
          </label>
          <select
            value={selectedAccordA}
            onChange={(e) => setSelectedAccordA(e.target.value)}
            className="w-full bg-[#06110c] border border-emerald-900 rounded-lg p-2.5 text-slate-100 text-xs focus:outline-none focus:border-amber-500 font-serif"
          >
            {HISTORIC_ACCORDS_COMPARISON.map((acc) => (
              <option key={acc.id} value={acc.id}>
                {acc.year}: {acc.title}
              </option>
            ))}
          </select>
        </div>

        <div className="p-4 rounded-xl bg-[#091510] border border-emerald-800/60">
          <label className="block text-xs uppercase font-bold tracking-wider text-emerald-400 mb-2">
            Select Comparative Accord / Compact (B):
          </label>
          <select
            value={selectedAccordB}
            onChange={(e) => setSelectedAccordB(e.target.value)}
            className="w-full bg-[#06110c] border border-emerald-900 rounded-lg p-2.5 text-slate-100 text-xs focus:outline-none focus:border-emerald-500 font-serif"
          >
            {HISTORIC_ACCORDS_COMPARISON.map((acc) => (
              <option key={acc.id} value={acc.id}>
                {acc.year}: {acc.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparative Cards Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Card A */}
        <div className="bg-[#0b1813] border-2 border-amber-500/50 rounded-2xl p-6 shadow-2xl space-y-4">
          <div className="pb-4 border-b border-emerald-900/60">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              Historical Epoch: {accordA.year}
            </span>
            <h3 className="text-xl font-bold text-amber-100 font-editorial mt-1">
              {accordA.title}
            </h3>
            <p className="text-[11px] text-slate-400 mt-1">
              Signatories: {accordA.signatories.join(', ')}
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-lg bg-[#07130e] border border-emerald-950">
              <span className="font-bold text-amber-300 block mb-1">Political Status & Sovereignty:</span>
              <p className="text-slate-300 leading-relaxed font-sans">{accordA.politicalStatus}</p>
            </div>

            <div className="p-3 rounded-lg bg-[#07130e] border border-emerald-950">
              <span className="font-bold text-emerald-300 block mb-1">Land, Soil & Mineral Rights:</span>
              <p className="text-slate-300 leading-relaxed font-sans">{accordA.landAndMinerals}</p>
            </div>

            <div className="p-3 rounded-lg bg-[#07130e] border border-emerald-950">
              <span className="font-bold text-sky-300 block mb-1">Customary Judicial Autonomy:</span>
              <p className="text-slate-300 leading-relaxed font-sans">{accordA.customaryLaw}</p>
            </div>

            <div className="p-3 rounded-lg bg-[#07130e] border border-emerald-950">
              <span className="font-bold text-slate-200 block mb-1">Governance Architecture:</span>
              <p className="text-slate-300 leading-relaxed font-sans">{accordA.governanceCompact}</p>
            </div>

            <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-800/40 text-[11px] text-amber-200">
              <strong>Historic Juridical Strength:</strong> {accordA.keyStrength}
            </div>
          </div>
        </div>

        {/* Card B */}
        <div className="bg-[#0b1813] border-2 border-emerald-500/50 rounded-2xl p-6 shadow-2xl space-y-4">
          <div className="pb-4 border-b border-emerald-900/60">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              Historical Epoch: {accordB.year}
            </span>
            <h3 className="text-xl font-bold text-amber-100 font-editorial mt-1">
              {accordB.title}
            </h3>
            <p className="text-[11px] text-slate-400 mt-1">
              Signatories: {accordB.signatories.join(', ')}
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-lg bg-[#07130e] border border-emerald-950">
              <span className="font-bold text-amber-300 block mb-1">Political Status & Sovereignty:</span>
              <p className="text-slate-300 leading-relaxed font-sans">{accordB.politicalStatus}</p>
            </div>

            <div className="p-3 rounded-lg bg-[#07130e] border border-emerald-950">
              <span className="font-bold text-emerald-300 block mb-1">Land, Soil & Mineral Rights:</span>
              <p className="text-slate-300 leading-relaxed font-sans">{accordB.landAndMinerals}</p>
            </div>

            <div className="p-3 rounded-lg bg-[#07130e] border border-emerald-950">
              <span className="font-bold text-sky-300 block mb-1">Customary Judicial Autonomy:</span>
              <p className="text-slate-300 leading-relaxed font-sans">{accordB.customaryLaw}</p>
            </div>

            <div className="p-3 rounded-lg bg-[#07130e] border border-emerald-950">
              <span className="font-bold text-slate-200 block mb-1">Governance Architecture:</span>
              <p className="text-slate-300 leading-relaxed font-sans">{accordB.governanceCompact}</p>
            </div>

            <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-[11px] text-emerald-200">
              <strong>Historic Juridical Strength:</strong> {accordB.keyStrength}
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Synthesis Insight */}
      <div className="p-6 rounded-2xl bg-[#091510] border border-emerald-900/80 shadow-xl space-y-3">
        <h4 className="text-sm font-bold text-amber-300 font-heading flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-400" />
          The Unbroken Continuity of Naga Constitutional Principle
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed font-sans">
          Across nine decades—from Sir John Simon's visit in 1929 to the 2017 Agreed Position—the core demands of the 
          Naga nation have remained steadfast: <strong>total immunity of ancestral lands from foreign alienation</strong>, 
          <strong>supremacy of unwritten tribal customary laws</strong>, and <strong>the preservation of distinct national identity 
          under Almighty God ("Nagaland for Christ")</strong>.
        </p>
      </div>
    </section>
  );
};
