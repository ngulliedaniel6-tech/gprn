import React, { useState } from 'react';
import { YEHZABO_CHAPTERS } from '../data/governanceData';
import { YehzaboChapter } from '../types';
import { BookOpen, Scale, Search, Shield, Check, Copy, Bookmark, ChevronRight } from 'lucide-react';

export const YehzaboExplorer: React.FC = () => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>(YEHZABO_CHAPTERS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedArticle, setCopiedArticle] = useState<string | null>(null);

  const activeChapter = YEHZABO_CHAPTERS.find((c) => c.id === selectedChapterId) || YEHZABO_CHAPTERS[0];

  const handleCopyArticle = (articleNo: string, text: string) => {
    navigator.clipboard.writeText(`YEHZABO OF NAGALAND - ${articleNo}\n"${text}"\n— Government of the People's Republic of Nagaland`);
    setCopiedArticle(articleNo);
    setTimeout(() => setCopiedArticle(null), 2000);
  };

  const filteredChapters = YEHZABO_CHAPTERS.map((chapter) => ({
    ...chapter,
    articles: chapter.articles.filter(
      (art) =>
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.articleNo.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((c) => searchQuery === '' || c.articles.length > 0);

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="pb-6 border-b border-emerald-900/60 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-950/70 border border-amber-800/40 text-amber-300 text-xs font-semibold mb-2">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            SUPREME CONSTITUTION OF NAGALAND
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-100 font-heading">
            The Yehzabo Explorer
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl font-serif">
            Promulgated on March 22, 1956, and reaffirmed across national assemblies: 
            the constitutional law codifying customary sovereignty, democratic rights, and land stewardship.
          </p>
        </div>

        {/* Search */}
        <div className="w-full md:w-72 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search constitutional articles..."
            className="w-full bg-[#081510] border border-emerald-800/60 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition"
          />
        </div>
      </div>

      {/* 4 Core Constitutional Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        <div className="p-4 rounded-xl bg-[#091611] border border-emerald-900/60">
          <div className="text-amber-400 font-bold text-sm font-heading mb-1 flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Inalienable Soil
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            All ancestral lands, forests, and sub-soil mineral wealth belong immutably to the Naga indigenous clans.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#091611] border border-emerald-900/60">
          <div className="text-amber-400 font-bold text-sm font-heading mb-1 flex items-center gap-2">
            <Scale className="w-4 h-4" />
            Customary Judiciary
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Village councils (Putu Menden, Chuki, Pithi) retain supreme authority over local unwritten customary laws.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#091611] border border-emerald-900/60">
          <div className="text-amber-400 font-bold text-sm font-heading mb-1 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Parliamentary Ratification
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            No political accord or treaty with external nations can bind the people without two-thirds Tatar Hoho consent.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#091611] border border-emerald-900/60">
          <div className="text-amber-400 font-bold text-sm font-heading mb-1 flex items-center gap-2">
            <Bookmark className="w-4 h-4" />
            Christian Ethics
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            The national motto "Nagaland for Christ" inspires governance with humility, justice, and non-violence.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Chapters Navigation */}
        <div className="lg:col-span-4 space-y-2">
          <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 px-1 mb-2">
            Yehzabo Chapters
          </h3>

          {filteredChapters.map((chap) => {
            const isSelected = chap.id === activeChapter.id;
            return (
              <button
                key={chap.id}
                onClick={() => setSelectedChapterId(chap.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-[#12281e] border-amber-500/50 shadow-md shadow-amber-950/30'
                    : 'bg-[#091510] border-emerald-900/60 hover:bg-emerald-950/50 hover:border-emerald-700/60'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-1">
                  <span>{chap.chapterNumber}</span>
                  <span className="text-[11px] text-slate-400">{chap.articles.length} Articles</span>
                </div>
                <h4 className="text-sm font-bold text-slate-100 font-serif">
                  {chap.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  {chap.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right: Articles Detail */}
        <div className="lg:col-span-8">
          <div className="bg-[#0b1712] rounded-2xl p-6 sm:p-8 border border-emerald-800/60 shadow-xl space-y-6">
            <div className="pb-4 border-b border-emerald-900/60">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                {activeChapter.chapterNumber}
              </span>
              <h3 className="text-2xl font-bold text-amber-100 font-editorial mt-1">
                {activeChapter.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1 font-sans">
                {activeChapter.description}
              </p>
            </div>

            {/* Articles List */}
            <div className="space-y-5">
              {activeChapter.articles.map((art) => (
                <div
                  key={art.articleNo}
                  className="p-5 rounded-xl bg-[#08120e] border border-emerald-900/80 hover:border-emerald-700/60 transition space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300">
                      {art.articleNo}
                    </span>
                    <button
                      onClick={() => handleCopyArticle(art.articleNo, art.text)}
                      className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-amber-300 p-1 rounded"
                    >
                      {copiedArticle === art.articleNo ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Citation</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h4 className="text-base font-bold text-slate-100 font-serif">
                    {art.title}
                  </h4>

                  <div className="p-3.5 rounded-lg bg-[#050c09] border-l-3 border-amber-500 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                    "{art.text}"
                  </div>

                  {art.commentary && (
                    <div className="text-xs text-slate-400 italic flex items-center gap-2 pt-1">
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Juridical Note: {art.commentary}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
