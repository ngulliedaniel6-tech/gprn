import React, { useState } from 'react';
import { PRIMARY_DOCUMENTS } from '../data/historicalData';
import { DocumentArchive } from '../types';
import { NationalEmblem } from './NationalEmblem';
import { FileText, Download, Copy, Check, Search, Calendar, Users, ShieldCheck, Bookmark, ExternalLink } from 'lucide-react';

interface DocumentRepoProps {
  initialDocId?: string | null;
}

export const DocumentRepository: React.FC<DocumentRepoProps> = ({ initialDocId }) => {
  const [selectedDocId, setSelectedDocId] = useState<string>(
    initialDocId || PRIMARY_DOCUMENTS[0].id
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [copied, setCopied] = useState(false);

  const activeDoc = PRIMARY_DOCUMENTS.find((d) => d.id === selectedDocId) || PRIMARY_DOCUMENTS[0];

  const filteredDocs = PRIMARY_DOCUMENTS.filter((doc) => {
    return (
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.historicalContext.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(activeDoc.fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([activeDoc.fullText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = activeDoc.downloadFilename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="pb-6 border-b border-emerald-900/60 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-950/70 border border-amber-800/40 text-amber-300 text-xs font-semibold mb-2">
            <Bookmark className="w-3.5 h-3.5 text-amber-400" />
            NATIONAL ARCHIVES & HISTORIC CHARTERS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-100 font-heading">
            Primary Historical Records Repository
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl font-serif">
            Unexpurgated primary source texts of foundational memoranda, declarations, plebiscite registers, 
            and peace accords establishing Naga sovereignty and rights.
          </p>
        </div>

        {/* Search */}
        <div className="w-full md:w-72 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search documents or signatories..."
            className="w-full bg-[#081510] border border-emerald-800/60 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Left Column: Document List */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 px-1">
            Archival Registry ({filteredDocs.length})
          </h3>

          <div className="space-y-2">
            {filteredDocs.map((doc) => {
              const isSelected = doc.id === activeDoc.id;
              return (
                <button
                  key={doc.id}
                  onClick={() => setSelectedDocId(doc.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-[#11241c] border-amber-500/50 shadow-lg shadow-amber-950/30'
                      : 'bg-[#091510] border-emerald-900/60 hover:bg-emerald-950/60 hover:border-emerald-700/60'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1.5">
                    <span className="font-semibold text-amber-400">
                      {doc.category}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {doc.date}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-100 font-serif leading-snug">
                    {doc.title}
                  </h4>

                  <p className="text-xs text-slate-400 line-clamp-2 mt-1.5">
                    {doc.historicalContext}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {doc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-900/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Full Primary Text Display in Parchment View */}
        <div className="lg:col-span-8">
          <div className="bg-[#0c1813] border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            {/* Document Header & Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-emerald-900/60">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-950/70 border border-amber-800/40">
                  {activeDoc.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-amber-100 font-editorial mt-2">
                  {activeDoc.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-slate-400 mt-1">
                  <span>Certified Date: <strong className="text-slate-200">{activeDoc.date}</strong></span>
                  <span>Authenticity: <strong className="text-emerald-400">De Jure Primary Text</strong></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-emerald-950 hover:bg-emerald-900 border border-emerald-800 text-slate-200 transition"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Full Text</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition shadow"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .TXT</span>
                </button>
              </div>
            </div>

            {/* Historical Context Card */}
            <div className="my-5 p-4 rounded-xl bg-emerald-950/50 border border-emerald-800/40 text-xs text-slate-300">
              <span className="font-bold text-amber-300 block mb-1">
                Historical Context & Jurisprudence:
              </span>
              <p className="leading-relaxed">
                {activeDoc.historicalContext}
              </p>
            </div>

            {/* Signatories Panel */}
            <div className="mb-6 p-4 rounded-xl bg-[#08120e] border border-emerald-900/60">
              <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 flex items-center gap-1.5 mb-2">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                Signatories & Tribal Authorities:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                {activeDoc.signatories.map((sig, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                    <span>{sig}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Verbatim Transcript (Parchment Styled Box) */}
            <div className="relative rounded-xl p-6 bg-[#07110c] border border-amber-600/25 shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-900/50 text-[11px] text-slate-400">
                <span className="font-mono">ORIGINAL PRIMARY TRANSCRIPTION</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Unmodified Archive Copy
                </span>
              </div>

              <pre className="font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed select-text overflow-x-auto">
                {activeDoc.fullText}
              </pre>

              <div className="mt-6 pt-4 border-t border-emerald-900/50 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <NationalEmblem size="sm" showText={false} />
                  <span>National Archives of the People's Republic of Nagaland</span>
                </div>
                <span className="italic font-serif text-amber-300">"Nagaland for Christ"</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
