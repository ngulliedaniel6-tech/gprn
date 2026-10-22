/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavTab } from './types';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { PressReleasesSection } from './components/PressReleasesSection';
import { TimelineSection } from './components/TimelineSection';
import { DocumentRepository } from './components/DocumentRepository';
import { YehzaboExplorer } from './components/YehzaboExplorer';
import { GovernanceSection } from './components/GovernanceSection';
import { TribesHeritageSection } from './components/TribesHeritageSection';
import { PeaceDialogueSection } from './components/PeaceDialogueSection';
import { PublicServicesSection } from './components/PublicServicesSection';
import { HomelandMapSection } from './components/HomelandMapSection';
import { MemorialWallSection } from './components/MemorialWallSection';
import { CustomaryLawSection } from './components/CustomaryLawSection';
import { AnthemAudioSection } from './components/AnthemAudioSection';
import { GlossarySection } from './components/GlossarySection';
import { CertificateGenerator } from './components/CertificateGenerator';
import { HistoryQuizSection } from './components/HistoryQuizSection';
import { CalendarSection } from './components/CalendarSection';
import { AccordComparativeSection } from './components/AccordComparativeSection';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { Bell, ArrowRight, Shield, BookOpen, Handshake, Landmark, Users, FileText, Compass, Flame, Scale, Music, BookA, Award, HelpCircle, Calendar, Sun, Moon, Type } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isParchmentMode, setIsParchmentMode] = useState<boolean>(false);
  const [isLargeText, setIsLargeText] = useState<boolean>(false);

  const handleOpenDocument = (docId: string) => {
    setSelectedDocId(docId);
    setActiveTab('documents');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (tab: NavTab, targetDocId?: string) => {
    if (targetDocId) {
      setSelectedDocId(targetDocId);
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950 ${
      isParchmentMode ? 'bg-[#141b16] text-[#f5f5f0]' : 'bg-[#07110c] text-slate-100'
    } ${isLargeText ? 'text-[15px]' : ''}`}>
      {/* Header with Navigation and Search Trigger */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onSearchOpen={() => setIsSearchOpen(true)}
      />

      {/* Accessibility / Reading Utility Sub-bar */}
      <div className="bg-[#050c09] border-b border-emerald-950/80 px-4 py-1.5 text-[11px] text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-serif">Kuknalim</span>
            <span className="text-slate-600">•</span>
            <span className="hidden sm:inline">Official State & Archives Portal</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Font Scaling */}
            <button
              onClick={() => setIsLargeText(!isLargeText)}
              className={`flex items-center gap-1 px-2 py-0.5 rounded transition ${
                isLargeText 
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold' 
                  : 'hover:text-slate-200'
              }`}
              title="Toggle Large Text for Comfortable Reading"
            >
              <Type className="w-3 h-3 text-amber-400" />
              <span>{isLargeText ? 'Large Text (On)' : 'Text Size'}</span>
            </button>

            <span className="text-slate-700">|</span>

            {/* Reading Mode */}
            <button
              onClick={() => setIsParchmentMode(!isParchmentMode)}
              className={`flex items-center gap-1 px-2 py-0.5 rounded transition ${
                isParchmentMode 
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold' 
                  : 'hover:text-slate-200'
              }`}
              title="Toggle Warm Parchment Contrast Mode"
            >
              {isParchmentMode ? <Sun className="w-3 h-3 text-amber-400" /> : <Moon className="w-3 h-3 text-slate-400" />}
              <span>{isParchmentMode ? 'Warm Parchment' : 'Dark Forest'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Dynamic View */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div>
            {/* Hero Section */}
            <HeroBanner
              onNavigate={handleNavigate}
              onOpenDocument={handleOpenDocument}
            />

            {/* Quick Navigation Cards Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
              <div className="text-center mb-8">
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                  State Portals & Civic Archives
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-amber-100 font-heading mt-1">
                  Explore the Government of the People’s Republic of Nagaland
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Yehzabo Card */}
                <div 
                  onClick={() => handleNavigate('yehzabo')}
                  className="group cursor-pointer rounded-xl p-5 bg-[#091611] border border-emerald-900/70 hover:border-amber-500/50 hover:bg-[#0c1f17] transition-all shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 w-fit group-hover:scale-110 transition-transform">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-serif group-hover:text-amber-300 transition">
                      The Yehzabo (Constitution)
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Read the fundamental laws promulgated in 1956 safeguarding customary rights, village republics, and democratic parliamentary rules.
                    </p>
                  </div>
                  <div className="pt-4 mt-2 flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
                    <span>Browse Articles</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Primary Records Card */}
                <div 
                  onClick={() => handleNavigate('documents')}
                  className="group cursor-pointer rounded-xl p-5 bg-[#091611] border border-emerald-900/70 hover:border-amber-500/50 hover:bg-[#0c1f17] transition-all shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 w-fit group-hover:scale-110 transition-transform">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-serif group-hover:text-amber-300 transition">
                      Primary Archival Documents
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Complete primary text transcripts of the 1929 Simon Commission Memorandum, 1947 Independence Declaration, and 1951 Plebiscite.
                    </p>
                  </div>
                  <div className="pt-4 mt-2 flex items-center gap-1 text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                    <span>Inspect Charters</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* MIP Dispatches Card */}
                <div 
                  onClick={() => handleNavigate('press')}
                  className="group cursor-pointer rounded-xl p-5 bg-[#091611] border border-emerald-900/70 hover:border-amber-500/50 hover:bg-[#0c1f17] transition-all shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 w-fit group-hover:scale-110 transition-transform">
                      <Bell className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-serif group-hover:text-amber-300 transition">
                      MIP Dispatches & Communiqués
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Official policy statements, Presidential National Day messages, and media rejoinders issued by the Ministry of Information & Publicity.
                    </p>
                  </div>
                  <div className="pt-4 mt-2 flex items-center gap-1 text-xs font-semibold text-red-400 group-hover:translate-x-1 transition-transform">
                    <span>View Press Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Governance Architecture Card */}
                <div 
                  onClick={() => handleNavigate('governance')}
                  className="group cursor-pointer rounded-xl p-5 bg-[#091611] border border-emerald-900/70 hover:border-amber-500/50 hover:bg-[#0c1f17] transition-all shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 w-fit group-hover:scale-110 transition-transform">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-serif group-hover:text-amber-300 transition">
                      The Tatar Hoho & Kilonsers
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Learn how the national parliament (Tatar Hoho), the Council of Kilonsers (Cabinet), and the Ceasefire Monitoring Cell operate.
                    </p>
                  </div>
                  <div className="pt-4 mt-2 flex items-center gap-1 text-xs font-semibold text-sky-400 group-hover:translate-x-1 transition-transform">
                    <span>Explore Hierarchy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Peace & Reconciliation Card */}
                <div 
                  onClick={() => handleNavigate('peace')}
                  className="group cursor-pointer rounded-xl p-5 bg-[#091611] border border-emerald-900/70 hover:border-amber-500/50 hover:bg-[#0c1f17] transition-all shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 w-fit group-hover:scale-110 transition-transform">
                      <Handshake className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-serif group-hover:text-amber-300 transition">
                      Peace Chronicle & Agreed Position
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      The historic 2017 Agreed Position recognizing Naga historical rights and the moral Covenant of Reconciliation (CoR).
                    </p>
                  </div>
                  <div className="pt-4 mt-2 flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
                    <span>Examine Accord</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Tribes & Heritage Card */}
                <div 
                  onClick={() => handleNavigate('tribes')}
                  className="group cursor-pointer rounded-xl p-5 bg-[#091611] border border-emerald-900/70 hover:border-amber-500/50 hover:bg-[#0c1f17] transition-all shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 w-fit group-hover:scale-110 transition-transform">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-serif group-hover:text-amber-300 transition">
                      16+ Naga Tribes & Cultural Mosaic
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Profiles of the Lotha, Ao, Angami, Sumi, Konyak, Chakhesang, and other tribes, their festivals, shawls, and customary traditions.
                    </p>
                  </div>
                  <div className="pt-4 mt-2 flex items-center gap-1 text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                    <span>View Tribal Mosaic</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Homeland Map Card */}
                <div 
                  onClick={() => handleNavigate('map')}
                  className="group cursor-pointer rounded-xl p-5 bg-[#091611] border border-emerald-900/70 hover:border-amber-500/50 hover:bg-[#0c1f17] transition-all shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 w-fit group-hover:scale-110 transition-transform">
                      <Compass className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-serif group-hover:text-amber-300 transition">
                      Homeland & Territories Map
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Interactive cartographic exploration of ancestral regions from Wokha, Kohima, and Mokokchung to Mount Saramati.
                    </p>
                  </div>
                  <div className="pt-4 mt-2 flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
                    <span>Open Interactive Map</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Memorial Roll Card */}
                <div 
                  onClick={() => handleNavigate('memorial')}
                  className="group cursor-pointer rounded-xl p-5 bg-[#091611] border border-emerald-900/70 hover:border-amber-500/50 hover:bg-[#0c1f17] transition-all shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 w-fit group-hover:scale-110 transition-transform">
                      <Flame className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-serif group-hover:text-amber-300 transition">
                      Pioneers & Martyrs Wall
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Sacred roll of honor celebrating the 1929 Simon Commission signatories, 1951 Plebiscite leaders, and peacemakers.
                    </p>
                  </div>
                  <div className="pt-4 mt-2 flex items-center gap-1 text-xs font-semibold text-red-400 group-hover:translate-x-1 transition-transform">
                    <span>Honor & Light a Flame</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Customary Law Card */}
                <div 
                  onClick={() => handleNavigate('customary')}
                  className="group cursor-pointer rounded-xl p-5 bg-[#091611] border border-emerald-900/70 hover:border-amber-500/50 hover:bg-[#0c1f17] transition-all shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 w-fit group-hover:scale-110 transition-transform">
                      <Scale className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-serif group-hover:text-amber-300 transition">
                      Customary Law & Dobashi Courts
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Case studies of unwritten village republic jurisprudence: terrace water codes, boundary stones, and peace feasts.
                    </p>
                  </div>
                  <div className="pt-4 mt-2 flex items-center gap-1 text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                    <span>Explore Precedents</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* National Anthem & Audio Card */}
                <div 
                  onClick={() => handleNavigate('anthem')}
                  className="group cursor-pointer rounded-xl p-5 bg-[#091611] border border-emerald-900/70 hover:border-amber-500/50 hover:bg-[#0c1f17] transition-all shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 w-fit group-hover:scale-110 transition-transform">
                      <Music className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-serif group-hover:text-amber-300 transition">
                      National Anthem & Spoken Archive
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Play the ceremonial hymn fanfare and listen to solemn narrations of the 1929 and 1951 historic declarations.
                    </p>
                  </div>
                  <div className="pt-4 mt-2 flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
                    <span>Play Hymn & Speeches</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Cultural Lexicon Card */}
                <div 
                  onClick={() => handleNavigate('glossary')}
                  className="group cursor-pointer rounded-xl p-5 bg-[#091611] border border-emerald-900/70 hover:border-amber-500/50 hover:bg-[#0c1f17] transition-all shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 w-fit group-hover:scale-110 transition-transform">
                      <BookA className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-serif group-hover:text-amber-300 transition">
                      Pan-Naga Lexicon & Terms
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Glossary of constitutional and customary terms: Kuknalim, Putu Menden, Chuki, Pithi, and Dobashi.
                    </p>
                  </div>
                  <div className="pt-4 mt-2 flex items-center gap-1 text-xs font-semibold text-sky-400 group-hover:translate-x-1 transition-transform">
                    <span>Explore Lexicon</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Heritage Pledge Certificate Card */}
                <div 
                  onClick={() => handleNavigate('certificate')}
                  className="group cursor-pointer rounded-xl p-5 bg-[#091611] border border-emerald-900/70 hover:border-amber-500/50 hover:bg-[#0c1f17] transition-all shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 w-fit group-hover:scale-110 transition-transform">
                      <Award className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-serif group-hover:text-amber-300 transition">
                      Heritage Pledge Certificate
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Generate and print your personalized, authenticated Custodian of Naga Heritage & Peace certificate.
                    </p>
                  </div>
                  <div className="pt-4 mt-2 flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
                    <span>Generate Certificate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* History Quiz Card */}
                <div 
                  onClick={() => handleNavigate('quiz')}
                  className="group cursor-pointer rounded-xl p-5 bg-[#091611] border border-emerald-900/70 hover:border-amber-500/50 hover:bg-[#0c1f17] transition-all shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 w-fit group-hover:scale-110 transition-transform">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-serif group-hover:text-amber-300 transition">
                      History & Yehzabo Quiz
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Test your knowledge on the 1929 Simon Commission, 1951 Plebiscite, and modern peace accords.
                    </p>
                  </div>
                  <div className="pt-4 mt-2 flex items-center gap-1 text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                    <span>Take Knowledge Quiz</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Observances & Flag Code Card */}
                <div 
                  onClick={() => handleNavigate('calendar')}
                  className="group cursor-pointer rounded-xl p-5 bg-[#091611] border border-emerald-900/70 hover:border-amber-500/50 hover:bg-[#0c1f17] transition-all shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 w-fit group-hover:scale-110 transition-transform">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-serif group-hover:text-amber-300 transition">
                      Observances & Flag Code
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Official calendar of national days, tribal festivals (Tokhu Emong, Moatsü, Sekrenyi), and flag protocols.
                    </p>
                  </div>
                  <div className="pt-4 mt-2 flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
                    <span>Open Calendar & Rules</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Accords Comparative Matrix Card */}
                <div 
                  onClick={() => handleNavigate('comparative')}
                  className="group cursor-pointer rounded-xl p-5 bg-[#091611] border border-emerald-900/70 hover:border-amber-500/50 hover:bg-[#0c1f17] transition-all shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 w-fit group-hover:scale-110 transition-transform">
                      <Scale className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-serif group-hover:text-amber-300 transition">
                      Accords Comparative Matrix
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Side-by-side analysis of the 1929 Simon Commission, 1947 Hydari Accord, 1951 Plebiscite, and 2017 Agreed Position.
                    </p>
                  </div>
                  <div className="pt-4 mt-2 flex items-center gap-1 text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                    <span>Compare Compacts</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Dispatches Section on Home */}
            <div className="bg-[#091410] border-y border-emerald-900/60 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between pb-6 border-b border-emerald-900/60">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                      OFFICIAL INFORMATION WING
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-amber-100 font-heading">
                      Recent Press Bulletins
                    </h2>
                  </div>
                  <button
                    onClick={() => handleNavigate('press')}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                  >
                    <span>View All Dispatches</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {/* Independence Day message snippet */}
                  <div className="p-5 rounded-xl bg-[#0b1b14] border border-amber-500/30 space-y-3">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-amber-400 font-mono">MIP/GPRN/PR-2026/08-14</span>
                      <span className="text-slate-400">August 14, 2026</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-serif">
                      79th Naga Independence Day Presidential Address to the Nation
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      "Fellow citizens and beloved brethren across our ancestral valleys and mountains: On this sacred 79th anniversary of our National Independence Day, we bow our heads in humble adoration before Almighty God, the Author of our destiny..."
                    </p>
                    <button
                      onClick={() => handleNavigate('press')}
                      className="text-xs font-semibold text-amber-400 hover:underline pt-1 block"
                    >
                      Read Complete Address →
                    </button>
                  </div>

                  {/* Agreed position snippet */}
                  <div className="p-5 rounded-xl bg-[#0b1b14] border border-emerald-900/80 space-y-3">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-emerald-400 font-mono">HISTORIC COVENANT</span>
                      <span className="text-slate-400">November 17, 2017</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-serif">
                      Recognition of Historical Rights in the Agreed Position
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      "The Government of India recognizes the historical and political rights of the Nagas to self-govern their ancestral land with due regard to contemporary political realities..."
                    </p>
                    <button
                      onClick={() => handleOpenDocument('agreed-position-2017-full')}
                      className="text-xs font-semibold text-emerald-400 hover:underline pt-1 block"
                    >
                      Inspect Agreed Position Preamble →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Historical Proclamation Teaser */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
              <div className="rounded-2xl p-8 bg-gradient-to-r from-[#0d2218] via-[#0b1b14] to-[#07130e] border border-emerald-800/60 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl text-center md:text-left">
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-bold font-heading">
                    Over A Century of Democratic Will
                  </span>
                  <h3 className="text-2xl font-bold text-slate-100 font-editorial">
                    "Leave us alone to determine for ourselves as in ancient times."
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-serif italic">
                    — From the historic Memorandum submitted to the British Simon Commission by 20 leaders of the Naga Club at Kohima, 10th January 1929.
                  </p>
                </div>
                <button
                  onClick={() => handleOpenDocument('simon-commission-full')}
                  className="shrink-0 px-5 py-3 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg transition"
                >
                  Read 1929 Memorandum
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MIP Dispatches & Press View */}
        {activeTab === 'press' && <PressReleasesSection />}

        {/* Governance & Wings View */}
        {activeTab === 'governance' && <GovernanceSection />}

        {/* Yehzabo Constitutional View */}
        {activeTab === 'yehzabo' && <YehzaboExplorer />}

        {/* Historical Timeline View */}
        {activeTab === 'history' && <TimelineSection onOpenDocument={handleOpenDocument} />}

        {/* Primary Documents Repository View */}
        {activeTab === 'documents' && (
          <DocumentRepository initialDocId={selectedDocId} />
        )}

        {/* Homeland & Territories Map View */}
        {activeTab === 'map' && <HomelandMapSection />}

        {/* Pioneers & Martyrs Memorial Roll View */}
        {activeTab === 'memorial' && <MemorialWallSection />}

        {/* Customary Law & Dobashi Jurisprudence View */}
        {activeTab === 'customary' && <CustomaryLawSection />}

        {/* Peace & Reconciliation View */}
        {activeTab === 'peace' && <PeaceDialogueSection onOpenDocument={handleOpenDocument} />}

        {/* National Anthem & Audio View */}
        {activeTab === 'anthem' && <AnthemAudioSection />}

        {/* Pan-Naga Cultural Lexicon View */}
        {activeTab === 'glossary' && <GlossarySection />}

        {/* Heritage Pledge Certificate View */}
        {activeTab === 'certificate' && <CertificateGenerator />}

        {/* History & Yehzabo Quiz View */}
        {activeTab === 'quiz' && <HistoryQuizSection onNavigate={handleNavigate} />}

        {/* National Observances & Flag Code View */}
        {activeTab === 'calendar' && <CalendarSection />}

        {/* Accords Comparative Matrix View */}
        {activeTab === 'comparative' && <AccordComparativeSection />}

        {/* Tribes & Heritage View */}
        {activeTab === 'tribes' && <TribesHeritageSection />}

        {/* Citizen Services & Secretariat View */}
        {activeTab === 'services' && <PublicServicesSection />}
      </main>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
