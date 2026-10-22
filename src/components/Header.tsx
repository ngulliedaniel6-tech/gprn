import React, { useState } from 'react';
import { NavTab } from '../types';
import { NationalEmblem, NationalFlag } from './NationalEmblem';
import { 
  FileText, 
  Landmark, 
  BookOpen, 
  History, 
  Handshake, 
  Users, 
  Bell, 
  Menu, 
  X, 
  Search,
  Scale,
  Compass,
  Flame,
  Music,
  BookA,
  Award,
  HelpCircle,
  Calendar
} from 'lucide-react';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onSearchOpen: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onSearchOpen,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'home', label: 'Home', icon: <Landmark className="w-4 h-4" /> },
    { id: 'press', label: 'MIP Bulletins', icon: <Bell className="w-4 h-4" />, badge: 'Latest' },
    { id: 'calendar', label: 'Observances', icon: <Calendar className="w-4 h-4 text-amber-400" /> },
    { id: 'map', label: 'Homeland Map', icon: <Compass className="w-4 h-4" /> },
    { id: 'comparative', label: 'Accords Matrix', icon: <Scale className="w-4 h-4 text-emerald-400" /> },
    { id: 'memorial', label: 'Memorial Roll', icon: <Flame className="w-4 h-4 text-amber-400" /> },
    { id: 'customary', label: 'Customary Law', icon: <Scale className="w-4 h-4" /> },
    { id: 'anthem', label: 'National Anthem', icon: <Music className="w-4 h-4 text-amber-300" /> },
    { id: 'glossary', label: 'Lexicon', icon: <BookA className="w-4 h-4" /> },
    { id: 'certificate', label: 'Heritage Pledge', icon: <Award className="w-4 h-4 text-amber-400" /> },
    { id: 'quiz', label: 'History Quiz', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'governance', label: 'Governance', icon: <Users className="w-4 h-4" /> },
    { id: 'yehzabo', label: 'Yehzabo (Constitution)', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'history', label: 'Historical Timeline', icon: <History className="w-4 h-4" /> },
    { id: 'documents', label: 'Primary Records', icon: <FileText className="w-4 h-4" /> },
    { id: 'peace', label: 'Peace Chronicle', icon: <Handshake className="w-4 h-4" /> },
    { id: 'tribes', label: 'Tribes & Heritage', icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#091310]/95 backdrop-blur-md border-b border-emerald-900/60 shadow-xl">
      {/* Top Banner Ticker */}
      <div className="bg-[#040a08] text-xs py-1.5 px-4 border-b border-emerald-950/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-slate-300">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold bg-red-950/80 text-red-300 border border-red-800/50">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              OFFICIAL DISPATCH
            </span>
            <span className="text-amber-400 font-serif tracking-wider font-semibold">
              Motto: "NAGALAND FOR CHRIST"
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">
              Preserving Sovereignty, Customary Heritage & Democratic Accord
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <button
              onClick={onSearchOpen}
              className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-200 border border-emerald-800/40 transition-colors"
            >
              <Search className="w-3 h-3 text-emerald-400" />
              <span>Search Records</span>
              <kbd className="text-[10px] bg-emerald-900/80 px-1 rounded text-emerald-300">⌘K</kbd>
            </button>
            <span className="hidden sm:inline">Naga National Calendar</span>
            <span className="text-amber-300 font-medium">Kuknalim</span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-3.5 flex items-center justify-between gap-4">
        {/* Left Branding */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-3.5 cursor-pointer group"
        >
          <NationalEmblem size="sm" showText={false} className="group-hover:scale-105 transition-transform" />
          
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-bold tracking-wider text-amber-100 font-heading leading-tight group-hover:text-amber-300 transition-colors">
                GPRN / NSCN
              </h1>
              <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-emerald-900/50 text-emerald-300 border border-emerald-700/50 hidden sm:inline">
                State Portal
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-300 font-serif tracking-wide leading-tight">
              Government of the People's Republic of Nagaland
            </p>
            <p className="text-[10px] text-amber-400/90 tracking-widest uppercase font-semibold">
              National Socialist Council of Nagaland
            </p>
          </div>
        </div>

        {/* Right Flag & Action */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-3 p-1.5 rounded-lg bg-emerald-950/40 border border-emerald-800/30">
            <NationalFlag className="w-16 h-10 rounded shadow border border-sky-400/30" />
            <div className="text-left text-[11px]">
              <div className="text-slate-200 font-medium">Naga National Flag</div>
              <div className="text-[10px] text-emerald-400">Sky Blue • Rainbow • Bethlehem Star</div>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('services')}
            className="px-3 py-2 text-xs font-semibold rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 transition shadow-md shadow-amber-950/40"
          >
            Public Secretariat
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onSearchOpen}
            className="p-2 rounded-md bg-emerald-950/70 border border-emerald-800/40 text-emerald-300"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md bg-emerald-950/70 border border-emerald-800/40 text-amber-200 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Traditional Tribal Pattern Accent Line */}
      <div className="naga-border-pattern"></div>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:block bg-[#08120e] border-t border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between overflow-x-auto">
          <div className="flex items-center space-x-1 py-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-emerald-950/60'
                  }`}
                >
                  <span className={isActive ? 'text-amber-400' : 'text-slate-400'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-red-800/80 text-red-200 font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setActiveTab('services')}
            className={`text-xs px-3 py-1.5 rounded transition ${
              activeTab === 'services'
                ? 'text-amber-300 bg-amber-500/20 font-bold'
                : 'text-slate-300 hover:text-amber-200'
            }`}
          >
            Media & Grievances
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07110d] border-b border-emerald-800/60 p-4 space-y-1">
          <div className="mb-3 p-2 bg-emerald-950/40 rounded flex items-center gap-3">
            <NationalFlag className="w-14 h-9 rounded shadow" />
            <div className="text-xs">
              <span className="text-amber-300 font-bold block font-heading">
                NAGALAND FOR CHRIST
              </span>
              <span className="text-slate-400 text-[11px]">
                People's Republic of Nagaland
              </span>
            </div>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 text-xs rounded-md text-left transition ${
                activeTab === item.id
                  ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
                  : 'text-slate-300 hover:bg-emerald-950/50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className={activeTab === item.id ? 'text-amber-400' : 'text-slate-400'}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-800 text-red-200 font-bold">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
          <button
            onClick={() => {
              setActiveTab('services');
              setMobileMenuOpen(false);
            }}
            className="w-full mt-2 py-2 px-3 text-center text-xs font-semibold rounded bg-amber-500 text-slate-950 shadow"
          >
            Public Secretariat & Media Desk
          </button>
        </div>
      )}
    </header>
  );
};
