import React, { useState } from 'react';
import { NAGA_HISTORY_QUIZ } from '../data/quizData';
import { QuizQuestion, NavTab } from '../types';
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, BookOpen } from 'lucide-react';

interface QuizSectionProps {
  onNavigate: (tab: NavTab) => void;
}

export const HistoryQuizSection: React.FC<QuizSectionProps> = ({ onNavigate }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const currentQ = NAGA_HISTORY_QUIZ[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < NAGA_HISTORY_QUIZ.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsQuizCompleted(false);
  };

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-semibold mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
          <span>EDUCATIONAL KNOWLEDGE ARCHIVE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-amber-100 font-heading">
          Naga Historical & Constitutional Quiz
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm mt-2 font-serif leading-relaxed">
          Test and deepen your knowledge of foundational milestones: the 1929 Simon Commission Memorandum, 
          the 1951 Voluntary Plebiscite, the Yehzabo Constitution, and contemporary peace accords.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {!isQuizCompleted ? (
          <div className="bg-[#0b1813] border border-amber-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            {/* Progress Header */}
            <div className="flex items-center justify-between pb-4 border-b border-emerald-900/60 text-xs text-slate-400">
              <span className="font-semibold text-amber-400">
                Question {currentIdx + 1} of {NAGA_HISTORY_QUIZ.length}
              </span>
              <span className="bg-emerald-950 px-2 py-0.5 rounded text-emerald-300 font-mono">
                Score: {score}
              </span>
            </div>

            {/* Question Text */}
            <div className="py-6">
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 font-serif leading-snug">
                {currentQ.question}
              </h3>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {currentQ.options.map((opt, optIdx) => {
                let btnStyle = 'bg-[#08130e] border-emerald-900/80 text-slate-200 hover:border-amber-500/60';

                if (isAnswered) {
                  if (optIdx === currentQ.correctIndex) {
                    btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                  } else if (optIdx === selectedOption) {
                    btnStyle = 'bg-red-950/80 border-red-500 text-red-200';
                  } else {
                    btnStyle = 'bg-[#08130e] border-emerald-950 text-slate-500 opacity-60';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-xl border transition-all text-xs sm:text-sm flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isAnswered && optIdx === currentQ.correctIndex && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    )}
                    {isAnswered && optIdx === selectedOption && optIdx !== currentQ.correctIndex && (
                      <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback & Historical Citation */}
            {isAnswered && (
              <div className="mt-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 space-y-2 text-xs">
                <div className="font-bold text-amber-300 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>Historical Documentation:</span>
                </div>
                <p className="text-slate-300 leading-relaxed font-sans">
                  {currentQ.explanation}
                </p>
                <div className="text-[10px] text-emerald-400 italic">
                  Primary Source: {currentQ.historicalReference}
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
                  >
                    <span>{currentIdx < NAGA_HISTORY_QUIZ.length - 1 ? 'Next Question' : 'Complete Quiz'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Completion Screen */
          <div className="bg-[#0b1813] border border-amber-500/40 rounded-2xl p-8 text-center shadow-2xl space-y-6">
            <div className="p-4 rounded-full bg-amber-500/10 border border-amber-500/30 w-fit mx-auto text-amber-400">
              <Award className="w-12 h-12" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-amber-100 font-heading">
                Quiz Completed!
              </h3>
              <p className="text-xs text-slate-300 mt-1 font-serif">
                You scored <strong className="text-amber-400 text-base">{score}</strong> out of {NAGA_HISTORY_QUIZ.length}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-900/60 text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              {score >= 6 ? (
                <p className="text-emerald-300 font-semibold">
                  Outstanding mastery of Naga political history, the 1929 Simon Commission charter, 
                  the 1951 Plebiscite, and the Yehzabo.
                </p>
              ) : (
                <p>
                  Good effort! Explore our Primary Documents and Historical Timeline to discover more 
                  about a century of Naga national self-determination.
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleRestart}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Quiz</span>
              </button>

              <button
                onClick={() => onNavigate('certificate')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition shadow-lg"
              >
                <Award className="w-4 h-4" />
                <span>Claim Heritage Certificate</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
