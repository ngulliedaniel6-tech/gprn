import React from 'react';
import { PEACE_MILESTONES } from '../data/historicalData';
import { Handshake, Heart, Shield, CheckCircle, Award, Landmark, FileText, Sparkles } from 'lucide-react';

interface PeaceDialogueProps {
  onOpenDocument?: (docId: string) => void;
}

export const PeaceDialogueSection: React.FC<PeaceDialogueProps> = ({ onOpenDocument }) => {
  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-semibold mb-3">
          <Handshake className="w-3.5 h-3.5 text-emerald-400" />
          <span>IN PURSUIT OF AN HONORABLE & LASTING ACCORD</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-amber-100 font-heading">
          Peace, Reconciliation & The Agreed Position
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm mt-2 font-serif leading-relaxed">
          Documenting the dialogue between the Government of India and the Naga leadership, 
          grounded in the historic 2017 Agreed Position (Preamble) and the Covenant of Reconciliation.
        </p>
      </div>

      {/* Covenant of Reconciliation Banner */}
      <div className="mb-10 rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#0c2219] via-[#091712] to-[#050e0a] border border-amber-500/40 shadow-xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-800/40 text-[11px] font-semibold">
              <Heart className="w-3 h-3 text-red-400 fill-red-400" />
              THE SACRED PLEDGE OF FORGIVENESS
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-amber-100 font-editorial">
              The Covenant of Reconciliation (CoR)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Mediated by the Forum for Naga Reconciliation (FNR) and the Nagaland Baptist Church Council: 
              Leaders of the Naga national movement committed before God and our people to renounce fratricidal violence, 
              forgive historical grievances, and speak with one unified voice for our people's political destiny.
            </p>
            <div className="text-xs italic text-amber-300 font-serif">
              "Love, truth, and forgiveness must triumph over the darkness of division."
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-center">
            <div className="p-4 rounded-xl bg-[#07130e] border border-emerald-800/60 text-center space-y-2">
              <Sparkles className="w-8 h-8 text-amber-400 mx-auto" />
              <div className="text-sm font-bold text-slate-100 font-heading">
                Signed 13 June 2009
              </div>
              <div className="text-[11px] text-emerald-400">
                Chiang Mai / Dimapur
              </div>
              <div className="text-[10px] text-slate-400 max-w-[200px]">
                Under the moral invocation of "Nagaland for Christ"
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The 4 Cardinal Pillars of the Agreed Position */}
      <div className="mb-12">
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-amber-200 font-heading">
            Core Principles of the 2017 Agreed Position
          </h3>
          <p className="text-xs text-slate-400 font-serif mt-1">
            Signed on November 17, 2017, between the Government of India and the Working Committee (NNPGs/GPRN)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-5 rounded-xl bg-[#091510] border border-emerald-900/70 hover:border-emerald-700/80 transition">
            <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-800/60 w-fit text-amber-400 mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-100 font-serif mb-2">
              1. Historical & Political Right
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Official Indian recognition of the inherent, distinctive political history and sovereign rights of the Naga people to self-govern ancestral lands.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091510] border border-emerald-900/70 hover:border-emerald-700/80 transition">
            <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-800/60 w-fit text-emerald-400 mb-3">
              <Landmark className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-100 font-serif mb-2">
              2. Customary Bicameralism
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Creation of representative customary legislative councils ensuring village tribal elders directly formulate laws affecting customary life.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091510] border border-emerald-900/70 hover:border-emerald-700/80 transition">
            <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-800/60 w-fit text-sky-400 mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-100 font-serif mb-2">
              3. Mineral & Land Sovereignty
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Full immunity of indigenous soil, petroleum, minerals, and ancestral forests from external state expropriation, retaining total local ownership.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091510] border border-emerald-900/70 hover:border-emerald-700/80 transition">
            <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-800/60 w-fit text-red-400 mb-3">
              <Handshake className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-100 font-serif mb-2">
              4. Pan-Naga Hoho
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Institutional mechanism uniting Nagas across present administrative boundaries into a shared statutory cultural, social, and economic body.
            </p>
          </div>
        </div>

        {onOpenDocument && (
          <div className="mt-6 text-center">
            <button
              onClick={() => onOpenDocument('agreed-position-2017-full')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-semibold transition"
            >
              <FileText className="w-4 h-4" />
              <span>Read Full Verbatim Text of 2017 Agreed Position</span>
            </button>
          </div>
        )}
      </div>

      {/* Major Peace Epochs */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
          Chronology of Peace Accords & Ceasefires
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PEACE_MILESTONES.map((pm) => (
            <div
              key={pm.id}
              className="p-5 rounded-xl bg-[#08130e] border border-emerald-900/80 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold font-heading text-amber-400">
                  {pm.year}
                </span>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                  {pm.status}
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-100 font-serif">
                {pm.title}
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {pm.description}
              </p>

              <div className="pt-2 border-t border-emerald-950 text-xs space-y-1">
                <div className="text-slate-400 font-medium">Parties Involved:</div>
                <div className="text-slate-300 text-[11px]">
                  {pm.parties.join(' • ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
