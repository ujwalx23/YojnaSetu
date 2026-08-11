import React, { useState } from 'react';
import { Scheme } from '../types';
import { 
  X, 
  CheckSquare, 
  Square, 
  FileCheck2, 
  Sparkles, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2, 
  ExternalLink,
  Info
} from 'lucide-react';

interface DocumentReadinessCheckProps {
  schemes: Scheme[];
  isOpen: boolean;
  onClose: () => void;
  onSelectScheme: (scheme: Scheme) => void;
}

const COMMON_INDIAN_DOCUMENTS = [
  { id: 'Aadhaar Card', label: 'Aadhaar Card (Aadhaar Seeded Bank Linked)', category: 'Identity' },
  { id: 'PAN Card', label: 'PAN Card', category: 'Identity' },
  { id: 'Income Certificate', label: 'Income Certificate (Issued by Tehsildar / Revenue Officer)', category: 'Financial' },
  { id: 'Caste Certificate', label: 'Caste / EWS / Minority Certificate', category: 'Category' },
  { id: 'Domicile Certificate', label: 'Domicile / Residential Certificate of State', category: 'Address' },
  { id: 'Land Ownership Record', label: 'Land Ownership Record (7/12, Khatauni or Jamabandi)', category: 'Land' },
  { id: 'Bank Passbook', label: 'Bank Account Passbook / Cancelled Cheque', category: 'Financial' },
  { id: 'Ration Card', label: 'Ration Card (Yellow / Orange / BPL / AAY)', category: 'Financial' },
  { id: 'Mark Sheet', label: 'Class 10th / 12th / Semester Marksheet', category: 'Education' },
  { id: 'Bonafide Certificate', label: 'Bonafide Student Certificate from College/School', category: 'Education' },
  { id: 'Birth Certificate', label: 'Birth Certificate of Applicant / Child', category: 'Identity' },
  { id: 'Udyam Registration', label: 'Udyam MSME Registration / Shop Act License', category: 'Business' },
  { id: 'Project Report', label: 'Project Report / DPR / Cost Estimate', category: 'Business' }
];

export const DocumentReadinessCheck: React.FC<DocumentReadinessCheckProps> = ({
  schemes,
  isOpen,
  onClose,
  onSelectScheme
}) => {
  if (!isOpen) return null;

  const [selectedDocs, setSelectedDocs] = useState<string[]>([
    'Aadhaar Card',
    'Bank Passbook'
  ]);

  const toggleDoc = (docId: string) => {
    if (selectedDocs.includes(docId)) {
      setSelectedDocs(selectedDocs.filter(d => d !== docId));
    } else {
      setSelectedDocs([...selectedDocs, docId]);
    }
  };

  // Helper to match documents flexibly
  const checkDocMatch = (requiredDoc: string) => {
    return selectedDocs.some(userDoc => 
      requiredDoc.toLowerCase().includes(userDoc.toLowerCase()) || 
      userDoc.toLowerCase().includes(requiredDoc.toLowerCase())
    );
  };

  // Calculate readiness score for each scheme
  const evaluatedSchemes = schemes.map(scheme => {
    const totalRequired = scheme.requiredDocuments.length;
    const matchingDocs = scheme.requiredDocuments.filter(checkDocMatch);
    const missingDocs = scheme.requiredDocuments.filter(d => !checkDocMatch(d));
    const isReady = missingDocs.length === 0;

    return {
      scheme,
      totalRequired,
      matchingDocs,
      missingDocs,
      isReady,
      readinessPercent: Math.round((matchingDocs.length / Math.max(1, totalRequired)) * 100)
    };
  }).sort((a, b) => b.readinessPercent - a.readinessPercent);

  const readySchemes = evaluatedSchemes.filter(s => s.isReady);
  const almostReadySchemes = evaluatedSchemes.filter(s => s.missingDocs.length === 1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 p-5 sm:p-6 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-emerald-400 text-slate-950 font-black text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <FileCheck2 className="w-3 h-3 text-slate-950" />
                Document Vault & Readiness Audit
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Which Schemes Are You Document-Ready For?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Select documents you currently possess to instantly see schemes you can apply for right away without rejection!
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-y-auto">
          {/* Left panel: Document selector */}
          <div className="md:col-span-5 p-5 border-r border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/50">
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-2 flex items-center justify-between">
              <span>Select Documents You Have:</span>
              <span className="text-xs font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950 px-2 py-0.5 rounded-md">
                {selectedDocs.length} Selected
              </span>
            </h3>

            <div className="space-y-2 mt-3">
              {COMMON_INDIAN_DOCUMENTS.map((doc) => {
                const isChecked = selectedDocs.includes(doc.id);
                return (
                  <button
                    key={doc.id}
                    onClick={() => toggleDoc(doc.id)}
                    className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-start gap-2.5 text-xs font-semibold ${
                      isChecked
                        ? 'bg-brand-50 dark:bg-brand-950/70 border-brand-300 dark:border-brand-700 text-brand-900 dark:text-brand-200 shadow-sm'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    )}
                    <span>{doc.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right panel: Scheme Readiness Results */}
          <div className="md:col-span-7 p-5 overflow-y-auto space-y-6">
            {/* Top Summary Banner */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 font-black flex items-center justify-center text-lg">
                  {readySchemes.length}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                    Schemes 100% Ready To Apply
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    You hold all mandatory documents required for these schemes!
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-2.5 py-1 rounded-lg">
                Instant Ready
              </span>
            </div>

            {/* List of evaluated schemes */}
            <div className="space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">
                Scheme Readiness Ranking
              </h4>

              {evaluatedSchemes.map(({ scheme, missingDocs, isReady, readinessPercent }) => (
                <div
                  key={scheme.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    isReady
                      ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/60'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                          {scheme.category}
                        </span>
                        {isReady ? (
                          <span className="text-[10px] font-extrabold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded-md flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            Ready to Apply
                          </span>
                        ) : (
                          <span className="text-[10px] font-extrabold text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 px-2 py-0.5 rounded-md flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 text-amber-500" />
                            Missing {missingDocs.length} Doc{missingDocs.length > 1 ? 's' : ''}
                          </span>
                        )}
                      </div>
                      <h5 className="font-extrabold text-sm text-slate-900 dark:text-white">
                        {scheme.title}
                      </h5>
                    </div>

                    <div className="text-right">
                      <span className="font-black text-sm text-brand-600 dark:text-brand-400">
                        {readinessPercent}%
                      </span>
                      <span className="block text-[10px] text-slate-400">Doc Score</span>
                    </div>
                  </div>

                  {/* Missing documents warning if any */}
                  {missingDocs.length > 0 && (
                    <div className="mt-3 bg-amber-500/10 border border-amber-500/20 rounded-xl p-2.5 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2">
                      <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Missing: </span>
                        <span>{missingDocs.join(', ')}</span>
                      </div>
                    </div>
                  )}

                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                      Benefit: {scheme.maxBenefitAmount ? `₹${scheme.maxBenefitAmount.toLocaleString('en-IN')}` : 'Grant'}
                    </span>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectScheme(scheme);
                      }}
                      className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
                    >
                      View Step Guide <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs">
          <span className="text-slate-500">Document readiness verified against official portal criteria</span>
          <button
            onClick={onClose}
            className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-4 py-2 rounded-xl transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
