import React, { useState } from 'react';
import { NAGA_REGIONAL_TERRITORIES } from '../data/regionsData';
import { RegionalTerritory } from '../types';
import { MapPin, Mountain, Compass, Shield, Award, Landmark, ChevronRight } from 'lucide-react';

export const HomelandMapSection: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>(
    NAGA_REGIONAL_TERRITORIES[0].id
  );

  const activeRegion =
    NAGA_REGIONAL_TERRITORIES.find((r) => r.id === selectedRegionId) ||
    NAGA_REGIONAL_TERRITORIES[0];

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-semibold mb-3">
          <Compass className="w-3.5 h-3.5 text-amber-400" />
          <span>INDIGENOUS GEOGRAPHY & TRIBAL TERRITORIES</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-amber-100 font-heading">
          Naga Ancestral Homeland & Regional Map
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm mt-2 font-serif leading-relaxed">
          From the mist-crowned heights of Mount Saramati and the Dzukou Valley to the Doyang Basin and Patkai slopes: 
          Explore the ancestral regions, customary councils, and historic territories of the Naga nation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive SVG Map Canvas */}
        <div className="lg:col-span-7 bg-[#08140f] rounded-2xl p-4 sm:p-6 border border-emerald-800/60 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-emerald-950 text-xs text-slate-400">
            <span className="font-semibold text-amber-300 flex items-center gap-1">
              <Compass className="w-4 h-4 text-emerald-400" />
              Cartographic Representation of Naga Ancestral Territories
            </span>
            <span className="text-[11px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
              Select any region
            </span>
          </div>

          <div className="relative w-full aspect-[4/3] bg-[#050d0a] rounded-xl border border-emerald-900/60 overflow-hidden shadow-inner flex items-center justify-center">
            {/* SVG Map Layout */}
            <svg
              viewBox="100 80 420 400"
              className="w-full h-full select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="nagaLandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0d281e" />
                  <stop offset="50%" stopColor="#0b2219" />
                  <stop offset="100%" stopColor="#071912" />
                </linearGradient>

                <filter id="glowPin" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Generalized Ancestral Homeland Contour Outline */}
              <path
                d="M 230 110 
                   Q 330 90 420 120 
                   Q 490 170 480 250 
                   Q 460 330 440 370 
                   Q 410 440 370 470 
                   Q 300 480 260 440 
                   Q 190 410 180 340 
                   Q 180 280 200 230 
                   Q 220 170 230 110 Z"
                fill="url(#nagaLandGrad)"
                stroke="#15803d"
                strokeWidth="2"
                strokeDasharray="4 2"
                opacity="0.9"
              />

              {/* Major Rivers */}
              {/* Doyang River */}
              <path
                d="M 270 340 Q 285 290 280 260 Q 260 220 250 170"
                fill="none"
                stroke="#0284c7"
                strokeWidth="2.5"
                opacity="0.6"
              />
              <text x="235" y="240" fill="#38bdf8" fontSize="8" fontFamily="sans-serif" opacity="0.8">
                Doyang River
              </text>

              {/* Tizu River */}
              <path
                d="M 340 270 Q 370 290 390 330 Q 420 360 450 380"
                fill="none"
                stroke="#0284c7"
                strokeWidth="2.5"
                opacity="0.6"
              />
              <text x="375" y="315" fill="#38bdf8" fontSize="8" fontFamily="sans-serif" opacity="0.8">
                Tizu River
              </text>

              {/* Mount Saramati Peak marker */}
              <g transform="translate(460, 310)">
                <polygon points="0,-12 9,6 -9,6" fill="#f59e0b" stroke="#78350f" strokeWidth="1" />
                <text x="12" y="2" fill="#fef08a" fontSize="8" fontWeight="bold">
                  Mt. Saramati (3,841m)
                </text>
              </g>

              {/* Mount Japfü & Dzukou marker */}
              <g transform="translate(245, 365)">
                <polygon points="0,-10 7,5 -7,5" fill="#10b981" stroke="#064e3b" strokeWidth="1" />
                <text x="-75" y="2" fill="#6ee7b7" fontSize="8" fontWeight="bold">
                  Dzukou / Japfü
                </text>
              </g>

              {/* Mount Tiyi marker */}
              <g transform="translate(265, 260)">
                <polygon points="0,-9 6,4 -6,4" fill="#fbbf24" stroke="#78350f" strokeWidth="1" />
                <text x="-65" y="3" fill="#fde68a" fontSize="8" fontWeight="bold">
                  Mt. Tiyi
                </text>
              </g>

              {/* Region Pins */}
              {NAGA_REGIONAL_TERRITORIES.map((region) => {
                const isSelected = region.id === activeRegion.id;
                return (
                  <g
                    key={region.id}
                    transform={`translate(${region.coordinates.x}, ${region.coordinates.y})`}
                    onClick={() => setSelectedRegionId(region.id)}
                    className="cursor-pointer transition-all duration-200"
                  >
                    {/* Pulsing ring if selected */}
                    {isSelected && (
                      <circle
                        cx="0"
                        cy="0"
                        r="14"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        className="animate-ping"
                        opacity="0.75"
                      />
                    )}

                    {/* Outer Circle */}
                    <circle
                      cx="0"
                      cy="0"
                      r={isSelected ? "8" : "6"}
                      fill={isSelected ? "#f59e0b" : "#10b981"}
                      stroke="#064e3b"
                      strokeWidth="2"
                      filter={isSelected ? "url(#glowPin)" : undefined}
                    />

                    {/* Center Core */}
                    <circle cx="0" cy="0" r="2.5" fill="#ffffff" />

                    {/* Label */}
                    <text
                      x="0"
                      y={isSelected ? "-12" : "-9"}
                      textAnchor="middle"
                      fill={isSelected ? "#fbbf24" : "#e2e8f0"}
                      fontSize={isSelected ? "9" : "7.5"}
                      fontWeight={isSelected ? "bold" : "normal"}
                      fontFamily="sans-serif"
                      className="pointer-events-none drop-shadow"
                    >
                      {region.name.split(' ')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 mt-3 pt-2 border-t border-emerald-950">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span>Regional Councils</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[7px] border-b-amber-400"></span>
              <span>Sacred Mountain Peaks</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-0.5 bg-sky-400"></span>
              <span>Historic River Basins</span>
            </span>
          </div>
        </div>

        {/* Right: Selected Region Inspector */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#0b1813] border border-amber-500/40 rounded-2xl p-6 shadow-2xl relative">
            <div className="pb-4 border-b border-emerald-900/60">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 px-2 py-0.5 rounded bg-amber-950/70 border border-amber-800/40">
                {activeRegion.customaryCouncil}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-amber-100 font-editorial mt-2">
                {activeRegion.name}
              </h3>
              <p className="text-xs text-emerald-400 flex items-center gap-1 mt-1 font-medium">
                <MapPin className="w-3.5 h-3.5" />
                Administrative HQ: {activeRegion.headquarters} • Tribe: {activeRegion.traditionalTribe}
              </p>
            </div>

            <div className="py-4 space-y-3 text-xs text-slate-300">
              <div>
                <span className="text-slate-400 uppercase tracking-wider font-bold block mb-1 text-[11px]">
                  Geographical Features & Rivers:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeRegion.geographicalFeatures.map((gf, gIdx) => (
                    <span
                      key={gIdx}
                      className="px-2 py-0.5 rounded bg-emerald-950 text-slate-200 border border-emerald-900/70 text-[11px]"
                    >
                      {gf}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-slate-400 uppercase tracking-wider font-bold block mb-1 text-[11px]">
                  Prominent Cultural & Natural Landmarks:
                </span>
                <ul className="space-y-1 list-disc pl-4 marker:text-amber-400 text-[11px]">
                  {activeRegion.prominentLandmarks.map((lm, lIdx) => (
                    <li key={lIdx}>{lm}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-900/60 text-xs">
                <span className="font-bold text-amber-300 block mb-1 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  Historical Role in the National Movement:
                </span>
                <p className="text-slate-300 leading-relaxed font-sans text-[11px]">
                  {activeRegion.historicalSignificance}
                </p>
              </div>
            </div>

            {/* Quick selector chips */}
            <div className="pt-4 border-t border-emerald-950">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                Jump to another territory:
              </span>
              <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                {NAGA_REGIONAL_TERRITORIES.map((reg) => (
                  <button
                    key={reg.id}
                    onClick={() => setSelectedRegionId(reg.id)}
                    className={`px-2 py-1 rounded text-[11px] transition ${
                      reg.id === activeRegion.id
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'bg-[#08130e] text-slate-300 hover:bg-emerald-900/50 border border-emerald-900/50'
                    }`}
                  >
                    {reg.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
