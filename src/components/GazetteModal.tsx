import React from 'react';
import { NationalEmblem, NationalFlag } from './NationalEmblem';
import { Printer, Download, X, ShieldCheck } from 'lucide-react';

interface GazetteModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  dispatchNo?: string;
  date: string;
  category: string;
  content: string[];
  issuedBy?: string;
}

export const GazetteModal: React.FC<GazetteModalProps> = ({
  isOpen,
  onClose,
  title,
  dispatchNo = 'GPRN/GAZ/2026/VOL-IV',
  date,
  category,
  content,
  issuedBy = 'Government of the People’s Republic of Nagaland'
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-[#fcfaf2] text-[#1a1a1a] max-w-4xl w-full rounded-xl shadow-2xl relative max-h-[92vh] overflow-y-auto border-4 border-[#334155] p-6 sm:p-10 font-serif">
        {/* Modal Controls - Hidden when printed */}
        <div className="no-print absolute top-4 right-4 flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-sans font-semibold shadow transition"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Gazette</span>
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-200 text-slate-800 hover:bg-slate-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Official Gazette Header */}
        <div className="text-center border-b-2 border-black pb-4 mb-6">
          <NationalEmblem size="sm" showText={false} className="mx-auto mb-2" />
          
          <div className="text-2xl sm:text-3xl font-black uppercase tracking-widest font-heading text-black">
            The Nagaland Gazette
          </div>
          
          <div className="text-xs uppercase font-bold tracking-widest text-slate-700 mt-1">
            PUBLISHED BY AUTHORITY OF THE GOVERNMENT OF THE PEOPLE’S REPUBLIC OF NAGALAND
          </div>

          <div className="text-[11px] italic text-slate-800 mt-0.5">
            Motto: "Nagaland for Christ"
          </div>

          <div className="flex items-center justify-between border-t border-b border-black py-1 px-2 mt-4 text-[11px] font-sans font-semibold">
            <span>NO. {dispatchNo}</span>
            <span className="uppercase">KOHIMA / NATIONAL HEADQUARTERS</span>
            <span>{date.toUpperCase()}</span>
          </div>
        </div>

        {/* Gazette Body */}
        <div className="space-y-4 text-justify text-xs sm:text-sm leading-relaxed text-slate-900">
          <div className="text-center font-bold uppercase tracking-wider text-sm mb-4">
            PART I — NOTIFICATIONS AND PROCLAMATIONS OF THE STATE
          </div>

          <div className="text-center font-bold text-base sm:text-lg mb-4 underline underline-offset-4">
            {title}
          </div>

          <div className="text-[11px] font-sans text-slate-600 mb-4 text-center">
            Promulgated under Category: <strong>{category}</strong>
          </div>

          {content.map((para, pIdx) => (
            <p key={pIdx} className="indent-6 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Seal and Signatures */}
        <div className="mt-12 pt-6 border-t-2 border-black grid grid-cols-2 sm:grid-cols-3 gap-6 text-center text-xs">
          <div>
            <div className="h-12 border-b border-dashed border-slate-400 mb-1 flex items-end justify-center">
              <span className="font-editorial italic text-slate-700">[Sealed & Promulgated]</span>
            </div>
            <div className="font-bold">By Order of the Yaruiwo</div>
            <div className="text-[10px] text-slate-600">President, GPRN</div>
          </div>

          <div className="hidden sm:block">
            <div className="h-12 border-b border-dashed border-slate-400 mb-1 flex items-end justify-center">
              <ShieldCheck className="w-6 h-6 text-emerald-800" />
            </div>
            <div className="font-bold">Official Seal of State</div>
            <div className="text-[10px] text-slate-600">National Archive Registry</div>
          </div>

          <div>
            <div className="h-12 border-b border-dashed border-slate-400 mb-1 flex items-end justify-center">
              <span className="font-editorial italic text-slate-700">[Countersigned]</span>
            </div>
            <div className="font-bold">MIP Kilonser</div>
            <div className="text-[10px] text-slate-600">Ministry of Information & Publicity</div>
          </div>
        </div>

        <div className="mt-6 text-center text-[10px] text-slate-500 font-sans border-t border-slate-300 pt-2">
          Printed and Published at the Government Central Press, People's Republic of Nagaland.
        </div>
      </div>
    </div>
  );
};
