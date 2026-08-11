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
  Sparkles,
  Building,
  Calendar,
  ShieldCheck,
  CheckSquare,
  Square,
  ArrowUpRight,
  Info,
  Lightbulb,
  Check
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
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const bookmarked = isBookmarked(scheme.id);

  const handleApplyClick = () => {
    submitApplication(scheme.id, scheme.title);
    setApplied(true);
    window.open(scheme.applicationLink, '_blank');
  };

  const toggleStepCompleted = (stepNum: number) => {
    if (completedSteps.includes(stepNum)) {
      setCompletedSteps(completedSteps.filter(s => s !== stepNum));
    } else {
      setCompletedSteps([...completedSteps, stepNum]);
    }
  };

  // Helper to extract domain name for verification badge
  const getDomainName = (url: string) => {
    try {
      const parsed = new URL(url);
      return parsed.hostname.replace('www.', '');
    } catch {
      return url;
    }
  };

  const domain = getDomainName(scheme.officialWebsite);
  const isGovDomain = domain.endsWith('.gov.in') || domain.endsWith('.nic.in') || domain.endsWith('.org.in');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden my-4 flex flex-col max-h-[92vh]">
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
            
            {/* Official Verification Security Badge */}
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verified Link ({domain})
            </span>

            {matchResult && (
              <span className="bg-brand-500/20 text-brand-300 border border-brand-500/40 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
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
            { id: 'steps', label: 'Apply Steps & Guide' },
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

              {/* Verified Domain Banner */}
              <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <h5 className="font-extrabold text-xs text-emerald-900 dark:text-emerald-300 uppercase tracking-wider">
                      Official Government & Trust Destination
                    </h5>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-0.5">
                      Redirects safely to <code className="bg-emerald-200/60 dark:bg-emerald-900 px-1 py-0.5 rounded text-[11px]">{scheme.officialWebsite}</code>
                    </p>
                  </div>
                </div>
                <a
                  href={scheme.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold px-3 py-1.5 rounded-xl flex items-center gap-1 shrink-0"
                >
                  Visit Portal <ExternalLink className="w-3 h-3" />
                </a>
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

          {/* Application Steps Tab (ENHANCED STEP-BY-STEP CLAIM GUIDE) */}
          {activeTab === 'steps' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Step-by-Step Interactive Claim Guide
                  </h4>
                  <p className="text-xs text-slate-500">
                    Follow these step-by-step instructions to fill out online/offline forms and claim your benefit.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-brand-600 dark:text-brand-400">
                    {completedSteps.length} of {scheme.applicationSteps.length} Completed
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-brand-600 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${(completedSteps.length / Math.max(1, scheme.applicationSteps.length)) * 100}%` }}
                />
              </div>

              {/* Application steps list */}
              <div className="space-y-4">
                {scheme.applicationSteps.map((step) => {
                  const isDone = completedSteps.includes(step.stepNumber);
                  return (
                    <div 
                      key={step.stepNumber} 
                      onClick={() => toggleStepCompleted(step.stepNumber)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        isDone
                          ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                          : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:border-brand-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${
                          isDone 
                            ? 'bg-emerald-500 text-white' 
                            : 'bg-brand-600 text-white'
                        }`}>
                          {isDone ? <Check className="w-4 h-4" /> : step.stepNumber}
                        </div>

                        <div className="flex-1">
                          <h5 className={`font-bold text-sm mb-1 ${isDone ? 'text-emerald-900 dark:text-emerald-300 line-through' : 'text-slate-900 dark:text-white'}`}>
                            Step {step.stepNumber}: {step.title}
                          </h5>
                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pro Tips Box */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 text-xs space-y-2">
                <h5 className="font-extrabold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
                  Pro-Tip to Prevent Form Rejection
                </h5>
                <p className="text-amber-800 dark:text-amber-200 leading-relaxed">
                  Ensure your Mobile Number is linked with your Aadhaar Card for instant OTP e-KYC. Also, make sure your bank account is Aadhaar-seeded for direct DBT cash transfers. Upload scanned document PDFs strictly below 200KB.
                </p>
              </div>

              {/* Direct Redirect Action Button */}
              <div className="pt-2">
                <a
                  href={scheme.applicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all text-xs"
                >
                  <span>Open Direct Portal Application Form ({domain})</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
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
