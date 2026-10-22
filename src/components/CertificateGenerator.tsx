import React, { useState } from 'react';
import { NationalEmblem, NationalFlag } from './NationalEmblem';
import { Award, Printer, Download, Sparkles, CheckCircle2, ShieldCheck, Bookmark, RefreshCw } from 'lucide-react';

export const CertificateGenerator: React.FC = () => {
  const [fullName, setFullName] = useState('Daniel Ngullie');
  const [regionOrTribe, setRegionOrTribe] = useState('Lotha / Wokha District');
  const [pledgeChecked, setPledgeChecked] = useState(true);
  const [serialNo, setSerialNo] = useState('GPRN/CERT/2026/84210');
  const [issueDate, setIssueDate] = useState('October 2026');
  const [isGenerated, setIsGenerated] = useState(true);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName) return;
    const rand = Math.floor(10000 + Math.random() * 90000);
    setSerialNo(`GPRN/CERT/2026/${rand}`);
    setIsGenerated(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadVerification = () => {
    const text = `GOVERNMENT OF THE PEOPLE'S REPUBLIC OF NAGALAND
OFFICIAL REGISTRATION REGISTRY
SERIAL: ${serialNo}
DATE: ${issueDate}

THIS IS TO CERTIFY THAT:
${fullName.toUpperCase()}
Representing: ${regionOrTribe}

Has taken the solemn covenant as an authentic Custodian of Naga Inalienable Heritage,
Village Republic Customary Law, and Peaceful Democratic Accord under the sovereign motto:
"NAGALAND FOR CHRIST"

Certified and registered in the National Archives of the GPRN.
Kuknalim!`;

    const element = document.createElement("a");
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${serialNo.replace(/\//g, '_')}_Verification.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 no-print">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-800/40 text-amber-300 text-xs font-semibold mb-3">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>CIVIC COMMEMORATION & PEACE COVENANT</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-amber-100 font-heading">
          Naga Heritage & Peace Pledge Certificate
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm mt-2 font-serif leading-relaxed">
          Affirm your commitment as a custodian of customary heritage, ancestral land inalienability, 
          and democratic fraternal peace under the sacred motto "Nagaland for Christ".
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Input Form (Hidden on Print) */}
        <div className="lg:col-span-4 bg-[#0b1712] rounded-2xl p-6 border border-emerald-800/60 shadow-xl space-y-4 no-print">
          <h3 className="text-xs uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5 pb-3 border-b border-emerald-950">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Certificate Registration Details
          </h3>

          <form onSubmit={handleGenerate} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-medium mb-1">
                Full Name of Custodian *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Daniel Ngullie"
                className="w-full bg-[#07110c] border border-emerald-900 rounded-lg p-2.5 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 font-serif"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">
                Tribe / Region / Village Affinity
              </label>
              <input
                type="text"
                value={regionOrTribe}
                onChange={(e) => setRegionOrTribe(e.target.value)}
                placeholder="e.g. Lotha / Wokha District"
                className="w-full bg-[#07110c] border border-emerald-900 rounded-lg p-2.5 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">
                Registration Month & Year
              </label>
              <input
                type="text"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                className="w-full bg-[#07110c] border border-emerald-900 rounded-lg p-2.5 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer text-slate-300">
                <input
                  type="checkbox"
                  required
                  checked={pledgeChecked}
                  onChange={(e) => setPledgeChecked(e.target.checked)}
                  className="mt-0.5 rounded border-emerald-800 text-amber-500 focus:ring-amber-500 bg-[#07110c]"
                />
                <span className="leading-snug text-[11px]">
                  I affirm the sacred covenant to honor customary rights, protect ancestral lands, 
                  and promote peace among all brothers and sisters of the Naga family.
                </span>
              </label>
            </div>

            <div className="pt-3 flex gap-2">
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition"
              >
                Issue / Update Certificate
              </button>
            </div>
          </form>

          {/* Action buttons */}
          <div className="pt-4 border-t border-emerald-950 space-y-2">
            <button
              onClick={handlePrint}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs shadow transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Certificate (PDF)</span>
            </button>

            <button
              onClick={handleDownloadVerification}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-[#07130e] hover:bg-emerald-950 text-slate-300 border border-emerald-900 text-xs transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Registry Card (.TXT)</span>
            </button>
          </div>
        </div>

        {/* Right: The High-Fidelity Parchment Certificate */}
        <div className="lg:col-span-8 w-full">
          <div className="bg-[#fcfbf7] text-[#1c1917] rounded-2xl p-6 sm:p-10 shadow-2xl relative border-8 border-double border-[#92400e] font-serif overflow-hidden select-none">
            
            {/* Watermark in Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <NationalEmblem size="xl" showText={false} />
            </div>

            {/* Corner Decorative Ornaments */}
            <div className="absolute top-2 left-2 text-[#92400e] text-lg font-bold">❖</div>
            <div className="absolute top-2 right-2 text-[#92400e] text-lg font-bold">❖</div>
            <div className="absolute bottom-2 left-2 text-[#92400e] text-lg font-bold">❖</div>
            <div className="absolute bottom-2 right-2 text-[#92400e] text-lg font-bold">❖</div>

            {/* Header */}
            <div className="text-center pb-4 border-b-2 border-[#b45309]/50 relative z-10">
              <NationalEmblem size="sm" showText={false} className="mx-auto mb-2" />
              
              <div className="text-xs uppercase tracking-widest text-[#78350f] font-bold font-heading">
                Government of the People’s Republic of Nagaland
              </div>

              <div className="text-2xl sm:text-3xl font-black font-heading text-[#451a03] mt-1 tracking-wide">
                Certificate of Commemorative Custodianship
              </div>

              <div className="text-xs font-serif italic text-[#b45309] mt-0.5 font-bold">
                Motto: "Nagaland for Christ"
              </div>

              <div className="flex items-center justify-between border-t border-b border-[#b45309]/30 py-1 px-3 mt-3 text-[10px] font-sans font-semibold text-[#78350f]">
                <span>REGISTRY NO: {serialNo}</span>
                <span>HONOR ROLL OF CITIZENS</span>
                <span>DATE: {issueDate.toUpperCase()}</span>
              </div>
            </div>

            {/* Body */}
            <div className="py-6 sm:py-8 text-center space-y-4 relative z-10">
              <p className="text-xs sm:text-sm text-[#44403c] font-sans uppercase tracking-wider">
                This is to solemnly acknowledge and certify that
              </p>

              <div className="text-2xl sm:text-4xl font-extrabold text-[#78350f] font-editorial tracking-wide border-b border-dashed border-[#b45309] pb-2 max-w-lg mx-auto">
                {fullName || 'Daniel Ngullie'}
              </div>

              <p className="text-xs sm:text-sm text-[#44403c] font-sans">
                Representing the Ancestral Territory of: <strong className="text-[#1c1917]">{regionOrTribe}</strong>
              </p>

              <div className="max-w-xl mx-auto p-4 rounded-lg bg-[#fef3c7]/30 border border-[#fde68a] text-xs text-[#292524] leading-relaxed font-sans text-justify">
                Having solemnly affirmed allegiance to the historical charters of the Naga nation — 
                the 1918 Naga Club, the 1929 Simon Commission Memorandum, the 1947 Independence Declaration, 
                and the 1951 Historic Plebiscite — is hereby recognized as an accredited 
                <strong> Custodian of Naga Customary Heritage, Inalienable Land Sovereignty, and Fraternal Peace</strong>.
              </div>

              <div className="text-xs italic text-[#78350f] font-serif">
                "United under one God, safeguarding the soil and the freedom of our children's children."
              </div>
            </div>

            {/* Signatures & Seal */}
            <div className="pt-6 border-t-2 border-[#b45309]/50 grid grid-cols-3 gap-4 items-end text-center text-[10px] text-[#451a03] relative z-10">
              <div>
                <div className="h-10 border-b border-dashed border-[#78350f] mb-1 flex items-end justify-center">
                  <span className="font-editorial italic">[Seal of Authority]</span>
                </div>
                <div className="font-bold">Yaruiwo</div>
                <div className="text-[#78350f]">President, GPRN</div>
              </div>

              <div className="flex flex-col items-center">
                <NationalFlag className="w-14 h-9 rounded shadow border border-sky-400 mb-1" />
                <span className="font-bold text-[9px] uppercase tracking-wider text-[#92400e]">
                  National Covenant
                </span>
              </div>

              <div>
                <div className="h-10 border-b border-dashed border-[#78350f] mb-1 flex items-end justify-center">
                  <span className="font-editorial italic">[Counter-Sealed]</span>
                </div>
                <div className="font-bold">Ato Kilonser</div>
                <div className="text-[#78350f]">Prime Minister, GPRN</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
