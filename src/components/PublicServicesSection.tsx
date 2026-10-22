import React, { useState } from 'react';
import { Send, CheckCircle2, Shield, HelpCircle, FileCheck, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

export const PublicServicesSection: React.FC = () => {
  const [formType, setFormType] = useState<'media' | 'citizen'>('media');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    tribeOrDistrict: '',
    subject: '',
    message: ''
  });
  const [submittedToken, setSubmittedToken] = useState<string | null>(null);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the Government of the People’s Republic of Nagaland (GPRN)?',
      a: 'The GPRN is the de jure governing body of the Naga national movement, established to safeguard the historical and political sovereignty, customary jurisprudence, and territorial rights of the Naga people as articulated in the 1929 Simon Commission Memorandum, 1947 Independence Declaration, and 1951 Plebiscite.'
    },
    {
      q: 'What is the meaning and origin of the motto "Nagaland for Christ"?',
      a: 'Adopted across national declarations and the Yehzabo, "Nagaland for Christ" expresses the profound spiritual and moral foundation of the Naga struggle. It dedicates the nation to Christian ethics of peace, righteousness, egalitarian brotherhood, and non-violence, framing freedom not merely as political power, but as moral stewardship.'
    },
    {
      q: 'How does the Tatar Hoho function compared to statutory assemblies?',
      a: 'The Tatar Hoho is the national parliament comprising Tatars (representatives) chosen through democratic consensus from regional tribal councils. It deliberates on statutory laws, peace treaties, budget allocations, and national defense, operating on the traditional Naga principle of consensual decision-making.'
    },
    {
      q: 'What is the Agreed Position (Preamble) signed on 17 November 2017?',
      a: 'The Agreed Position is a landmark covenant signed between the Government of India and the Working Committee of the Naga National Political Groups (NNPGs) / GPRN. For the first time in formal documentation, the Government of India officially recognized the unique historical and political rights of the Nagas to self-govern their ancestral land.'
    },
    {
      q: 'How are the Ceasefire Ground Rules monitored on the ground?',
      a: 'The GPRN maintains an active Ceasefire Monitoring Cell (CFMC) that coordinates directly with the Ceasefire Monitoring Group (CFMG) of the Government of India. Cadres are stationed within designated peace camps, and regular liaison meetings ensure mutual adherence to prevent armed friction and uphold civilian peace.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    const token = `GPRN-SEC-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedToken(token);
    setFormData({
      name: '',
      organization: '',
      email: '',
      tribeOrDistrict: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-semibold mb-3">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span>PUBLIC LIAISON & MEDIA PROTOCOL</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-amber-100 font-heading">
          Public Secretariat & Frequently Asked Questions
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm mt-2 font-serif leading-relaxed">
          Official communication conduit for international observers, regional media, tribal hohos, 
          and citizens seeking certified records or lodging representations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Interaction Form */}
        <div className="lg:col-span-7 bg-[#0b1712] rounded-2xl p-6 sm:p-8 border border-emerald-800/60 shadow-xl">
          <div className="flex items-center gap-2 mb-6 p-1 bg-[#07110c] rounded-lg border border-emerald-950">
            <button
              onClick={() => { setFormType('media'); setSubmittedToken(null); }}
              className={`flex-1 py-2 text-xs font-semibold rounded-md transition ${
                formType === 'media'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Media Accreditation & Press Query
            </button>
            <button
              onClick={() => { setFormType('citizen'); setSubmittedToken(null); }}
              className={`flex-1 py-2 text-xs font-semibold rounded-md transition ${
                formType === 'citizen'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Citizen Representation / Grievance
            </button>
          </div>

          {submittedToken ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-bold text-slate-100 font-serif">
                Representation Submitted to MIP Secretariat
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Your dispatch has been formally registered under official tracking reference:
              </p>
              <div className="inline-block p-3 rounded-lg bg-emerald-950/80 border border-emerald-700/60 font-mono text-sm font-bold text-amber-300">
                {submittedToken}
              </div>
              <p className="text-[11px] text-slate-400">
                The Office of the MIP Kilonser reviews submissions according to protocol.
              </p>
              <button
                onClick={() => setSubmittedToken(null)}
                className="mt-4 px-4 py-2 text-xs font-semibold rounded bg-emerald-900 text-emerald-200"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Full Name / Designation *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Daniel Ngullie"
                    className="w-full bg-[#07110c] border border-emerald-900 rounded-lg p-2.5 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    {formType === 'media' ? 'Media House / Outlet' : 'Tribe / Village / District'}
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder={formType === 'media' ? 'e.g. Northeast Tribune' : 'e.g. Wokha District'}
                    className="w-full bg-[#07110c] border border-emerald-900 rounded-lg p-2.5 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Official Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@domain.org"
                    className="w-full bg-[#07110c] border border-emerald-900 rounded-lg p-2.5 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Subject / Inquiry Domain</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Verification of Press Release"
                    className="w-full bg-[#07110c] border border-emerald-900 rounded-lg p-2.5 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Official Message / Statement *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your request, query, or representation..."
                  className="w-full bg-[#07110c] border border-emerald-900 rounded-lg p-2.5 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 leading-relaxed"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Official Dispatch</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right: Interactive FAQs */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-[#091510] border border-emerald-900/60">
            <h3 className="text-xs uppercase font-bold tracking-wider text-amber-400 flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-amber-400" />
              Frequently Answered Questions
            </h3>

            <div className="space-y-2">
              {faqs.map((faq, idx) => {
                const isOpen = expandedFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-lg bg-[#07110c] border border-emerald-950 overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      className="w-full text-left p-3 flex items-center justify-between gap-2 text-xs font-serif font-bold text-slate-200 hover:text-amber-300 transition"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-3 pb-3 pt-1 text-[11px] text-slate-300 leading-relaxed font-sans border-t border-emerald-950 bg-emerald-950/20">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Verification Protocol Box */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#0c2219] to-[#07140f] border border-emerald-800/60 text-xs space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-bold font-heading">
              <FileCheck className="w-4 h-4 text-emerald-400" />
              Verification of Official Documents
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              All official statements released by the GPRN must bear the signature or authorization of the 
              Ministry of Information & Publicity (MIP) with a verified dispatch serial number.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
