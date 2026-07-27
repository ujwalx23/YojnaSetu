import React, { useState } from 'react';
import { Scheme, SchemeMatchResult } from '../types';
import { useAuth } from '../context/AuthContext';
import { generateSchemePDF } from '../utils/pdfExporter';
import { 
  X, 
  ExternalLink, 
  Download, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  HelpCircle, 
  Bookmark, 
  Share2, 
  Sparkles,
  Building,
  PhoneCall,
  Calendar,
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface SchemeDetailModalProps {
  scheme: Scheme | null;
  matchResult?: SchemeMatchResult;
  onClose: () => void;
}

export const SchemeDetailModal: React.FC<SchemeDetailModalProps> = ({ scheme, matchResult, onClose }) => {
  if (!scheme) return null;

  const { isBookmarked, toggleBookmark, submitApplication } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'eligibility' | 'benefits' | 'documents' | 'steps' | 'faqs'>('overview');
  const [applied, setApplied] = useState(false);
  const bookmarked = isBookmarked(scheme.id);

  const handleApplyClick = () => {
    submitApplication(scheme.id, scheme.title);
    setApplied(true);
    window.open(scheme.applicationLink, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden my-8 flex flex-col max-h-[90vh]">
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-amber-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full">
              {scheme.category}
            </span>
            <span className="bg-white/10 text-slate-200 text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-white/20">
              {scheme.schemeType}
            </span>
            {matchResult && (
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                {matchResult.matchScore}% AI Match ({matchResult.status})
              </span>
            )}
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-2 leading-tight">
            {scheme.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1">
              <Building className="w-3.5 h-3.5 text-amber-400" />
              {scheme.department}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-brand-400" />
              Deadline: {scheme.deadline}
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-6 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'eligibility', label: 'Eligibility' },
            { id: 'benefits', label: 'Benefits' },
            { id: 'documents', label: 'Documents' },
            { id: 'steps', label: 'Apply Steps' },
            { id: 'faqs', label: 'FAQs' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-3 text-xs font-bold transition-all border-b-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-brand-600 text-brand-600 dark:text-brand-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-slate-700 dark:text-slate-300 text-sm">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">Description</h4>
                <p className="leading-relaxed text-slate-800 dark:text-slate-200 text-base">{scheme.fullDescription}</p>
              </div>

              {/* Match Reasons Callout */}
              {matchResult && (
                <div className="bg-brand-50/50 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-800/60 rounded-2xl p-4">
                  <h4 className="text-xs font-bold text-brand-700 dark:text-brand-300 flex items-center gap-1.5 mb-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    AI Eligibility Assessment & Explanation
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {matchResult.reasons.map((r, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                    {matchResult.warnings.map((w, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700/60">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Max Benefit</span>
                  <div className="text-lg font-black text-brand-600 dark:text-brand-400">
                    ₹{scheme.maxBenefitAmount.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700/60">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Benefit Type</span>
                  <div className="text-base font-bold text-slate-800 dark:text-slate-100">
                    {scheme.benefitType}
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700/60">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">State Scope</span>
                  <div className="text-base font-bold text-slate-800 dark:text-slate-100">
                    {scheme.stateAvailability.join(', ')}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Eligibility Tab */}
          {activeTab === 'eligibility' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Official Eligibility Rules</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {scheme.eligibility.minAge !== undefined && (
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="text-xs text-slate-500">Age Bracket:</span>
                    <p className="font-semibold">{scheme.eligibility.minAge} to {scheme.eligibility.maxAge || 100} years</p>
                  </div>
                )}
                {scheme.eligibility.maxAnnualFamilyIncome !== undefined && (
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="text-xs text-slate-500">Max Family Income:</span>
                    <p className="font-semibold">₹{scheme.eligibility.maxAnnualFamilyIncome.toLocaleString('en-IN')} / year</p>
                  </div>
                )}
                {scheme.eligibility.targetGender && (
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="text-xs text-slate-500">Target Gender:</span>
                    <p className="font-semibold">{scheme.eligibility.targetGender}</p>
                  </div>
                )}
                {scheme.eligibility.allowedOccupations && (
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="text-xs text-slate-500">Target Occupations:</span>
                    <p className="font-semibold">{scheme.eligibility.allowedOccupations.join(', ')}</p>
                  </div>
                )}
              </div>

              {scheme.eligibility.customConditions && scheme.eligibility.customConditions.length > 0 && (
                <div className="mt-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Special Mandates:</span>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
                    {scheme.eligibility.customConditions.map((cond, idx) => (
                      <li key={idx}>{cond}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Scheme Incentives & Allowances</h4>
              <ul className="space-y-3">
                {scheme.benefitsList.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Documents Tab */}
          {activeTab === 'documents' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Checklist of Required Documents</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {scheme.requiredDocuments.map((docName, i) => {
                  const isMissing = matchResult?.missingDocuments.includes(docName);
                  return (
                    <div 
                      key={i} 
                      className={`p-3.5 rounded-xl border flex items-center justify-between ${
                        isMissing 
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300'
                          : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-brand-500" />
                        <span className="text-xs font-semibold">{docName}</span>
                      </div>
                      {isMissing && (
                        <span className="text-[10px] font-bold bg-amber-500 text-slate-950 px-2 py-0.5 rounded">
                          Missing in Profile
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Application Steps Tab */}
          {activeTab === 'steps' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Step-by-Step Application Process</h4>
              <div className="space-y-4 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
                {scheme.applicationSteps.map((step) => (
                  <div key={step.stepNumber} className="flex items-start gap-4 relative">
                    <div className="w-8 h-8 rounded-full bg-brand-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-md">
                      {step.stepNumber}
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl flex-1">
                      <h5 className="font-bold text-sm text-slate-900 dark:text-white mb-1">{step.title}</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs Tab */}
          {activeTab === 'faqs' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h4>
              <div className="space-y-3">
                {scheme.faqs.map((faq, i) => (
                  <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <h5 className="font-bold text-xs text-brand-600 dark:text-brand-400 flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-amber-500" />
                      Q: {faq.question}
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-300 pl-5">A: {faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleBookmark(scheme.id)}
              className={`p-2.5 rounded-xl border flex items-center gap-2 text-xs font-semibold transition-colors ${
                bookmarked 
                  ? 'bg-amber-500/10 border-amber-500/30 text-amber-600'
                  : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-amber-500' : ''}`} />
              {bookmarked ? 'Saved in Bookmarks' : 'Bookmark Scheme'}
            </button>

            <button
              onClick={() => generateSchemePDF(scheme, matchResult)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 text-xs font-semibold"
            >
              <Download className="w-4 h-4 text-brand-500" />
              Download PDF Guide
            </button>
          </div>

          <button
            onClick={handleApplyClick}
            className="bg-gradient-to-r from-brand-600 to-gov-green hover:from-brand-500 hover:to-emerald-600 text-white font-extrabold text-xs px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg shadow-brand-600/30 active:scale-95 transition-all"
          >
            <span>{applied ? 'Application Opened (Tracked)' : 'Apply on Official Government Portal'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
