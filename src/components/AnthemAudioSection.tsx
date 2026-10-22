import React, { useState, useEffect, useRef } from 'react';
import { NationalEmblem, NationalFlag } from './NationalEmblem';
import { Volume2, VolumeX, Play, Pause, RotateCcw, Music, Mic, FileText, Sparkles, BookOpen } from 'lucide-react';

export const AnthemAudioSection: React.FC = () => {
  const [isPlayingFanfare, setIsPlayingFanfare] = useState(false);
  const [activeSpeech, setActiveSpeech] = useState<string | null>(null);
  const [activeVerse, setActiveVerse] = useState<number>(0);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  const anthemVerses = [
    {
      num: 1,
      title: "Verse I — The Homeland & Divine Sovereign Canopy",
      lines: [
        "From high majestic peaks to rivers deep and wide,",
        "God blessed our lovely homeland in its mountain pride;",
        "The sky-blue banner with the covenant rainbow arch,",
        "United, free and sovereign, forth our people march!"
      ],
      chorus: [
        "Chorus:",
        "Nagaland! O Nagaland, our heart's eternal home,",
        "Beneath the Star of Bethlehem, where'er thy children roam;",
        "With one accord before our God, we pledge our sacred trust:",
        "'Nagaland for Christ' forever, righteous, free and just!"
      ]
    },
    {
      num: 2,
      title: "Verse II — The Ancestral Covenant & Customary Soil",
      lines: [
        "Our ancient fathers walked this soil in freedom long ago,",
        "Acknowledging no conqueror, bowing to no foe;",
        "The sacred 1929 and 1951 resolve,",
        "No treaty made in secret shall our heritage dissolve!"
      ],
      chorus: [
        "Chorus:",
        "Nagaland! O Nagaland, our heart's eternal home,",
        "Beneath the Star of Bethlehem, where'er thy children roam;",
        "With one accord before our God, we pledge our sacred trust:",
        "'Nagaland for Christ' forever, righteous, free and just!"
      ]
    },
    {
      num: 3,
      title: "Verse III — Reconciliation & Enduring Accord",
      lines: [
        "Forgiving past division under Christian love divine,",
        "Upon each hill and valley let the dawn of justice shine;",
        "In brotherhood and truth, we stand with courage ever bold,",
        "To guard our children's future as in sacred days of old!"
      ],
      chorus: [
        "Chorus:",
        "Nagaland! O Nagaland, our heart's eternal home,",
        "Beneath the Star of Bethlehem, where'er thy children roam;",
        "With one accord before our God, we pledge our sacred trust:",
        "'Nagaland for Christ' forever, righteous, free and just!"
      ]
    }
  ];

  const historicSpeeches = [
    {
      id: 'simon-1929',
      title: '1929 Simon Commission Memorandum Proclamation',
      speaker: 'Spoken on behalf of the 20 Naga Club Signatories',
      text: 'Before the British Government conquered our country in 1879, we were living in a state of intermittent warfare with each other, but we were never conquered by the Kings of Assam nor by any rulers from India. We were entirely free and independent. We pray that we should not be included within the Reformed Scheme. Leave us alone to determine for ourselves as in ancient times.'
    },
    {
      id: 'independence-1947',
      title: '1947 Naga Independence Day Proclamation',
      speaker: 'Mayangnokcha Aliba Imti & T. Sakhrie (Naga National Council)',
      text: 'Be it known unto all men: That the Naga people, comprising all tribes inhabiting our ancestral lands from time immemorial, have lived as a free and sovereign people. All authority over our territory reverts entirely and without diminution to the Naga people. Nagaland is an independent and sovereign nation. So help us God. Nagaland for Christ.'
    },
    {
      id: 'plebiscite-1951',
      title: '1951 Voluntary Plebiscite Sacred Oath',
      speaker: 'A.Z. Phizo & The Naga Assembly of Elders',
      text: 'Before Almighty God, holding the sacred soil of our ancestral hills and the Holy Word in our hands, we solemnly pledge our lives, our customary honour, and our generational heritage to safeguard the sovereign freedom of our beloved homeland. Over 99.9% have cast their thumbprints. We shall never surrender our freedom, nor compromise our birthright.'
    }
  ];

  // Synthesize ceremonial brass/organ fanfare using Web Audio API
  const startFanfare = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Hymn Melody frequencies (D Major hymn fanfare: D4, F#4, A4, D5, B4, A4, G4, F#4, E4, D4...)
      const notes = [
        { freq: 293.66, dur: 0.6 }, // D4
        { freq: 369.99, dur: 0.6 }, // F#4
        { freq: 440.00, dur: 0.6 }, // A4
        { freq: 587.33, dur: 1.2 }, // D5
        { freq: 493.88, dur: 0.6 }, // B4
        { freq: 440.00, dur: 0.8 }, // A4
        { freq: 392.00, dur: 0.6 }, // G4
        { freq: 369.99, dur: 0.6 }, // F#4
        { freq: 329.63, dur: 0.8 }, // E4
        { freq: 293.66, dur: 1.6 }, // D4
      ];

      let time = ctx.currentTime + 0.1;
      setIsPlayingFanfare(true);

      notes.forEach((n, idx) => {
        // Main brass/horn oscillator
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Harmony organ oscillator
        const subOsc = ctx.createOscillator();
        const subGain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.freq, time);

        subOsc.type = 'sine';
        subOsc.frequency.setValueAtTime(n.freq / 2, time);

        // Envelope
        gain.gain.setValueAtTime(0.001, time);
        gain.gain.exponentialRampToValueAtTime(0.35, time + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, time + n.dur - 0.05);

        subGain.gain.setValueAtTime(0.001, time);
        subGain.gain.exponentialRampToValueAtTime(0.2, time + 0.08);
        subGain.gain.exponentialRampToValueAtTime(0.001, time + n.dur - 0.05);

        osc.connect(gain);
        subOsc.connect(subGain);
        gain.connect(ctx.destination);
        subGain.connect(ctx.destination);

        osc.start(time);
        subOsc.start(time);
        osc.stop(time + n.dur);
        subOsc.stop(time + n.dur);

        time += n.dur;
      });

      // Auto stop state when melody finishes
      const totalDuration = notes.reduce((acc, curr) => acc + curr.dur, 0) * 1000;
      setTimeout(() => {
        setIsPlayingFanfare(false);
      }, totalDuration);

    } catch (err) {
      console.warn("AudioContext playback:", err);
      setIsPlayingFanfare(false);
    }
  };

  const stopFanfare = () => {
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsPlayingFanfare(false);
  };

  // Speech narration using SpeechSynthesis
  const handlePlaySpeech = (speech: typeof historicSpeeches[0]) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (activeSpeech === speech.id) {
        setActiveSpeech(null);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(speech.text);
      utterance.rate = 0.88; // Reverent dignified cadence
      utterance.pitch = 0.95;

      utterance.onend = () => setActiveSpeech(null);
      utterance.onerror = () => setActiveSpeech(null);

      setActiveSpeech(speech.id);
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-semibold mb-3">
          <Music className="w-3.5 h-3.5 text-amber-400" />
          <span>AUDIO REPOSITORY & NATIONAL ANTHEM</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-amber-100 font-heading">
          Naga National Anthem & Historical Spoken Archive
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm mt-2 font-serif leading-relaxed">
          Listen to the sacred verses of the National Anthem beneath the Covenant Rainbow Banner, 
          and hear spoken transcriptions of foundational proclamations from 1929, 1947, and 1951.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: National Anthem Player & Score */}
        <div className="lg:col-span-7 bg-[#0b1813] border border-amber-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-emerald-900/60 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <NationalFlag className="w-16 h-10 rounded shadow border border-sky-400/40" />
              <div>
                <h3 className="text-xl font-bold text-amber-100 font-heading">
                  Naga National Anthem
                </h3>
                <p className="text-xs text-amber-300 font-serif italic">
                  "Nagaland for Christ" • Ceremonial Choral Hymn
                </p>
              </div>
            </div>

            {/* Fanfare Trigger Button */}
            <div>
              {isPlayingFanfare ? (
                <button
                  onClick={stopFanfare}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold text-xs transition shadow animate-pulse"
                >
                  <VolumeX className="w-4 h-4" />
                  <span>Stop Fanfare</span>
                </button>
              ) : (
                <button
                  onClick={startFanfare}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition shadow-lg hover:scale-105"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>Play Hymn Fanfare</span>
                </button>
              )}
            </div>
          </div>

          {/* Verses Navigation Tabs */}
          <div className="flex items-center gap-2 py-4 border-b border-emerald-950 overflow-x-auto">
            {anthemVerses.map((v, idx) => (
              <button
                key={v.num}
                onClick={() => setActiveVerse(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                  activeVerse === idx
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                    : 'text-slate-400 hover:text-white bg-[#08130e]'
                }`}
              >
                Verse {v.num}
              </button>
            ))}
          </div>

          {/* Active Verse Display */}
          <div className="py-6 space-y-4 font-serif">
            <h4 className="text-sm font-bold text-amber-200 uppercase tracking-wider">
              {anthemVerses[activeVerse].title}
            </h4>

            <div className="space-y-2 text-sm sm:text-base text-slate-200 leading-relaxed italic pl-4 border-l-2 border-emerald-600">
              {anthemVerses[activeVerse].lines.map((line, lIdx) => (
                <p key={lIdx}>{line}</p>
              ))}
            </div>

            {/* Chorus Box */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 space-y-1.5 text-xs sm:text-sm text-amber-100/90 italic">
              {anthemVerses[activeVerse].chorus.map((ch, cIdx) => (
                <p key={cIdx} className={cIdx === 0 ? "font-bold not-italic text-amber-400" : ""}>
                  {ch}
                </p>
              ))}
            </div>
          </div>

          {/* Historical Note */}
          <div className="pt-4 border-t border-emerald-950 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Sung in sacred convocations, national days, and church peace convocations.</span>
            <span className="text-amber-400 font-bold">Kuknalim!</span>
          </div>
        </div>

        {/* Right: Spoken Historic Archive */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-[#091510] border border-emerald-900/60">
            <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-amber-400 mb-3">
              <Mic className="w-4 h-4 text-emerald-400" />
              <span>Spoken Primary Declarations Archive</span>
            </div>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed font-sans">
              Click play on any historical excerpt to listen to a solemn narration using your browser’s speech synthesis:
            </p>

            <div className="space-y-3">
              {historicSpeeches.map((sp) => {
                const isPlaying = activeSpeech === sp.id;
                return (
                  <div
                    key={sp.id}
                    className="p-4 rounded-xl bg-[#07110c] border border-emerald-950 hover:border-emerald-800 transition space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-xs font-bold text-slate-100 font-serif">
                          {sp.title}
                        </h4>
                        <div className="text-[10px] text-emerald-400 mt-0.5">
                          {sp.speaker}
                        </div>
                      </div>

                      <button
                        onClick={() => handlePlaySpeech(sp)}
                        className={`p-2 rounded-lg transition shrink-0 ${
                          isPlaying
                            ? 'bg-red-600 text-white animate-pulse'
                            : 'bg-emerald-950 hover:bg-emerald-900 text-amber-300 border border-emerald-800/60'
                        }`}
                        title={isPlaying ? "Pause Narration" : "Listen to Declaration"}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-amber-300" />}
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-relaxed font-serif italic line-clamp-3">
                      "{sp.text}"
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Anthem Symbolism Insight */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#0c2219] to-[#07130e] border border-emerald-800/60 text-xs space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-bold font-heading">
              <Sparkles className="w-4 h-4 text-amber-400" />
              The Choral Tradition of the Naga Hills
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Naga communities are renowned internationally for four-part choral harmony and indigenous polyphonic singing. 
              The National Anthem brings together Christian hymnody with ancient highland choral courage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
