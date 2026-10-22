import React, { useState } from 'react';
import { NavTab } from '../types';
import { NationalEmblem, NationalFlag } from './NationalEmblem';
import { BookOpen, FileText, ChevronRight, Award, Shield, Compass, Sparkles, Info } from 'lucide-react';

interface HeroBannerProps {
  onNavigate: (tab: NavTab) => void;
  onOpenDocument: (docId: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onNavigate, onOpenDocument }) => {
  const [showFlagModal, setShowFlagModal] = useState(false);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#07130e] via-[#091712] to-[#040907] border-b border-emerald-900/50 py-12 lg:py-16">
      {/* Background Subtle Naga Texture & Gradient Orbs */}
      <div className="absolute inset-0 opacity-15 pointer-events-none naga-lozenge-pattern"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Dignified State Seal & Core Declaration */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 text-xs shadow-inner">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="font-semibold tracking-wider uppercase">Official Public Information Portal</span>
              <span className="text-emerald-500">•</span>
              <span className="font-serif italic text-amber-200">De Jure Naga National Heritage</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-50 font-heading tracking-wide leading-tight">
              Government of the People’s Republic of Nagaland
            </h1>

            <p className="text-xl sm:text-2xl text-amber-400 font-serif italic font-medium">
              "Nagaland for Christ"
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
              Established upon the sacred covenant of our ancestors, the 1929 Simon Commission Charter, 
              the 1947 Declaration of Independence, and the 1951 Historic Voluntary Plebiscite. 
              Dedicated to the preservation of customary sovereignty, honorable peace accords, and fraternal unity across all Naga ancestral lands.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => onNavigate('yehzabo')}
                className="flex items-center gap-2 px-5 py-3 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm shadow-lg shadow-amber-950/50 transition-all hover:scale-[1.02]"
              >
                <BookOpen className="w-4 h-4 text-slate-900" />
                <span>Read Yehzabo (Constitution)</span>
              </button>

              <button
                onClick={() => onNavigate('press')}
                className="flex items-center gap-2 px-4 py-3 rounded-md bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 text-emerald-200 font-medium text-sm transition"
              >
                <span>Latest MIP Bulletins</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </button>

              <button
                onClick={() => {
                  onNavigate('documents');
                  onOpenDocument('simon-commission-full');
                }}
                className="flex items-center gap-2 px-4 py-3 rounded-md bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-sm transition"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>1929 Historic Charter</span>
              </button>
            </div>

            {/* Quick Badges */}
            <div className="pt-4 border-t border-emerald-900/40 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-2.5 rounded bg-[#091510]/80 border border-emerald-900/50">
                <div className="text-amber-400 font-bold text-lg font-heading">1918</div>
                <div className="text-[11px] text-slate-400">Naga Club Formed</div>
              </div>
              <div className="p-2.5 rounded bg-[#091510]/80 border border-emerald-900/50">
                <div className="text-amber-400 font-bold text-lg font-heading">99.9%</div>
                <div className="text-[11px] text-slate-400">1951 Plebiscite</div>
              </div>
              <div className="p-2.5 rounded bg-[#091510]/80 border border-emerald-900/50">
                <div className="text-amber-400 font-bold text-lg font-heading">16+</div>
                <div className="text-[11px] text-slate-400">Constituent Tribes</div>
              </div>
              <div className="p-2.5 rounded bg-[#091510]/80 border border-emerald-900/50">
                <div className="text-amber-400 font-bold text-lg font-heading">Nov 2017</div>
                <div className="text-[11px] text-slate-400">Agreed Position</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Flag & Emblem Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md bg-[#0a1712] rounded-xl p-6 border border-emerald-800/60 shadow-2xl relative">
              <div className="absolute top-3 right-3">
                <button
                  onClick={() => setShowFlagModal(true)}
                  className="flex items-center gap-1 text-[11px] text-amber-300 hover:text-amber-200 bg-amber-950/60 border border-amber-800/40 px-2 py-1 rounded"
                >
                  <Info className="w-3 h-3" />
                  Flag Symbolism
                </button>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <NationalEmblem size="lg" showText={false} />
                
                <div>
                  <div className="text-lg font-bold text-amber-100 font-heading tracking-wide">
                    The National Insignia of GPRN
                  </div>
                  <div className="text-xs text-emerald-400 font-medium">
                    Mithun • Crossed Spears • Holy Bible • Hornbill Crest
                  </div>
                </div>

                {/* Display National Flag */}
                <div className="w-full pt-3 border-t border-emerald-900/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Naga National Flag (Unfurled 1956)
                    </span>
                    <span className="text-[10px] text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/40">
                      Parashen Proclamation
                    </span>
                  </div>

                  <NationalFlag className="w-full h-44 rounded-lg shadow-inner border border-sky-400/40" />
                </div>

                <div className="grid grid-cols-3 gap-2 w-full pt-2 text-[11px] text-slate-300 text-center">
                  <div className="p-2 rounded bg-sky-950/40 border border-sky-800/30">
                    <div className="text-sky-400 font-semibold">Sky Blue</div>
                    <div className="text-[10px] text-slate-400">Divine Sovereign Canopy</div>
                  </div>
                  <div className="p-2 rounded bg-amber-950/40 border border-amber-800/30">
                    <div className="text-amber-400 font-semibold">Rainbow</div>
                    <div className="text-[10px] text-slate-400">God's Eternal Covenant</div>
                  </div>
                  <div className="p-2 rounded bg-emerald-950/40 border border-emerald-800/30">
                    <div className="text-white font-semibold">Star</div>
                    <div className="text-[10px] text-slate-400">Star of Bethlehem</div>
                  </div>
                </div>

                <div className="w-full pt-2">
                  <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-left flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-amber-200">Reconciliation & Accord</div>
                      <div className="text-[11px] text-slate-300 leading-snug">
                        Committed to a permanent, honorable settlement recognizing the unique history and political rights of the Nagas.
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Flag Symbolism Modal */}
      {showFlagModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0b1712] border border-emerald-700/60 max-w-lg w-full rounded-xl p-6 shadow-2xl relative text-left">
            <h3 className="text-lg font-bold text-amber-300 font-heading mb-2 flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-400" />
              Symbolism of the Naga National Flag
            </h3>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              First hoisted on March 22, 1956, at Parashen (Rengma region) under the guidance of visionary Naga elders:
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-2.5 rounded bg-sky-950/50 border border-sky-800/40">
                <span className="font-bold text-sky-300 block mb-1">1. The Sky Blue Field</span>
                <p className="text-slate-300">
                  Represents freedom, the overarching firmament of Almighty God, and the boundless mountain horizons of our ancestors.
                </p>
              </div>

              <div className="p-2.5 rounded bg-amber-950/50 border border-amber-800/40">
                <span className="font-bold text-amber-300 block mb-1">2. The Covenant Rainbow (Red, Gold/Yellow, Green)</span>
                <p className="text-slate-300">
                  Symbolizes God’s biblical covenant of peace, mercy, and unconditional protection made with mankind, promising that destruction shall give way to divine redemption and hope.
                </p>
              </div>

              <div className="p-2.5 rounded bg-emerald-950/50 border border-emerald-800/40">
                <span className="font-bold text-emerald-300 block mb-1">3. The Star of Bethlehem</span>
                <p className="text-slate-300">
                  Placed in the canton, the radiant white star signifies the spiritual guiding light of Christ, illuminating the path of righteousness and the motto "Nagaland for Christ".
                </p>
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setShowFlagModal(false)}
                className="px-4 py-2 text-xs font-semibold rounded bg-amber-500 hover:bg-amber-400 text-slate-950 transition"
              >
                Close Symbolism Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
