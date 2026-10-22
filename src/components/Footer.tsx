import React from 'react';
import { NavTab } from '../types';
import { NationalEmblem, NationalFlag } from './NationalEmblem';
import { Shield, BookOpen, FileText, Landmark, Handshake, Users, Heart, Scale, Calendar } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#050d0a] border-t border-emerald-950 text-slate-300">
      {/* Naga Border Pattern */}
      <div className="naga-border-pattern"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2: Official Branding */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <NationalEmblem size="sm" showText={false} />
              <div>
                <h3 className="text-base font-bold text-amber-100 font-heading">
                  GPRN / NSCN
                </h3>
                <p className="text-xs text-slate-300 font-serif">
                  Government of the People’s Republic of Nagaland
                </p>
                <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                  Motto: "Nagaland for Christ"
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
              Dedicated to upholding the inviolable sovereignty, customary heritage, 
              and democratic self-determination of the Naga people as affirmed by the 1929 Simon Commission Charter, 
              the 1947 Declaration of Independence, and the 1951 Plebiscite.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <NationalFlag className="w-14 h-9 rounded shadow border border-sky-400/40" />
              <div className="text-[11px] text-slate-400">
                <span className="text-slate-200 font-medium block">Naga Covenant Flag</span>
                <span>Unfurled March 22, 1956 • Parashen</span>
              </div>
            </div>
          </div>

          {/* Col 3: Constitutional & Governance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-heading">
              Governance & Law
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('yehzabo')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline flex items-center gap-1.5"
                >
                  <BookOpen className="w-3 h-3 text-emerald-400" />
                  <span>The Yehzabo (Constitution)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('governance')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline flex items-center gap-1.5"
                >
                  <Landmark className="w-3 h-3 text-emerald-400" />
                  <span>The Tatar Hoho (Parliament)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('governance')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline flex items-center gap-1.5"
                >
                  <Shield className="w-3 h-3 text-emerald-400" />
                  <span>Council of Kilonsers (Cabinet)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('governance')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline flex items-center gap-1.5"
                >
                  <Shield className="w-3 h-3 text-emerald-400" />
                  <span>Ceasefire Monitoring Cell</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Primary Archives */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-heading">
              Historic Charters
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('documents')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline flex items-center gap-1.5"
                >
                  <FileText className="w-3 h-3 text-amber-400" />
                  <span>1929 Simon Commission Memo</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('documents')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline flex items-center gap-1.5"
                >
                  <FileText className="w-3 h-3 text-amber-400" />
                  <span>1947 Independence Declaration</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('documents')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline flex items-center gap-1.5"
                >
                  <FileText className="w-3 h-3 text-amber-400" />
                  <span>1951 Historic Plebiscite</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('documents')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline flex items-center gap-1.5"
                >
                  <Handshake className="w-3 h-3 text-amber-400" />
                  <span>2017 Agreed Position (Preamble)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('comparative')}
                  className="hover:text-amber-300 transition text-amber-300/90 hover:underline flex items-center gap-1.5 font-medium"
                >
                  <Scale className="w-3 h-3 text-emerald-400" />
                  <span>Accords Comparative Matrix</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calendar')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline flex items-center gap-1.5"
                >
                  <Calendar className="w-3 h-3 text-amber-400" />
                  <span>Observances & Flag Code</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Peace & Media */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-heading">
              Media & Accord
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('map')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline"
                >
                  Naga Homeland Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('memorial')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline text-amber-400/90 font-medium"
                >
                  Pioneers & Martyrs Roll
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('customary')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline"
                >
                  Customary Law & Dobashi Courts
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('press')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline"
                >
                  MIP Dispatches & Communiqués
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('peace')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline"
                >
                  Covenant of Reconciliation (CoR)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tribes')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline"
                >
                  Tribes & Traditional Hohos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('anthem')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline"
                >
                  National Anthem & Audio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('glossary')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline"
                >
                  Cultural Lexicon & Terms
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('certificate')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline text-amber-300/90 font-medium"
                >
                  Claim Heritage Certificate
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quiz')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline"
                >
                  History & Yehzabo Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-amber-300 transition text-slate-400 hover:underline"
                >
                  Media Accreditation Desk
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 Government of the People’s Republic of Nagaland (GPRN / NSCN). All historical archives certified.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-400 font-serif font-bold">KUKNALIM!</span>
            <span>•</span>
            <span className="text-emerald-400 font-serif">Nagaland for Christ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
