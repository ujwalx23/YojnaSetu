import React from 'react';
import { Scheme } from '../types';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  IndianRupee, 
  FileText, 
  Users, 
  Clock, 
  Percent,
  ArrowRight
} from 'lucide-react';

interface SchemeComparisonModalProps {
  schemes: Scheme[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveScheme: (schemeId: string) => void;
  onSelectScheme: (scheme: Scheme) => void;
}

export const SchemeComparisonModal: React.FC<SchemeComparisonModalProps> = ({
  schemes,
  isOpen,
  onClose,
  onRemoveScheme,
  onSelectScheme
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 p-5 sm:p-6 text-white flex items-center justify-between relative">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-slate-950" />
                Comparison Tool
              </span>
              <span className="text-xs text-slate-300">({schemes.length} / 3 selected)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Side-by-Side Scheme Comparison
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Compare benefits, interest rates, income limits, and application requirements to find your best scheme.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {schemes.length === 0 ? (
          <div className="p-12 text-center text-slate-500 dark:text-slate-400 flex flex-col items-center">
            <ShieldCheck className="w-12 h-12 text-amber-500 mb-3" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">No schemes selected for comparison</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md">
              Select 2 or 3 schemes from the list using the check boxes to compare their benefits, eligibility, and documents side-by-side.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto p-4 sm:p-6 flex-1">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th className="p-3 text-xs font-black uppercase text-slate-400 border-b border-slate-200 dark:border-slate-800 w-1/4">
                    Attribute
                  </th>
                  {schemes.map((scheme) => (
                    <th key={scheme.id} className="p-3 border-b border-slate-200 dark:border-slate-800 w-1/3 align-top">
                      <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/60 relative">
                        <button
                          onClick={() => onRemoveScheme(scheme.id)}
                          className="absolute top-2 right-2 p-1 text-slate-400 hover:text-red-500 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors"
                          title="Remove from comparison"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-800">
                          {scheme.category}
                        </span>
                        <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white mt-2 leading-snug line-clamp-2">
                          {scheme.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                          <Building2 className="w-3 h-3 text-brand-500" />
                          {scheme.department}
                        </p>

                        <div className="mt-3 flex gap-2">
                          <button
                            onClick={() => onSelectScheme(scheme)}
                            className="flex-1 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold py-1.5 px-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1"
                          >
                            Full Guide <ArrowRight className="w-3 h-3" />
                          </button>
                          <a
                            href={scheme.applicationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-extrabold py-1.5 px-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1"
                          >
                            Apply <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs sm:text-sm">
                {/* Max Benefit */}
                <tr>
                  <td className="p-3 font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <IndianRupee className="w-4 h-4 text-emerald-500" />
                    Max Financial Benefit
                  </td>
                  {schemes.map((scheme) => (
                    <td key={scheme.id} className="p-3 font-black text-emerald-600 dark:text-emerald-400 text-sm">
                      {scheme.maxBenefitAmount ? `₹${scheme.maxBenefitAmount.toLocaleString('en-IN')}` : 'Non-monetary'}
                    </td>
                  ))}
                </tr>

                {/* Scheme Type & Benefit Type */}
                <tr>
                  <td className="p-3 font-bold text-slate-700 dark:text-slate-300">
                    Scheme Type & Model
                  </td>
                  {schemes.map((scheme) => (
                    <td key={scheme.id} className="p-3">
                      <div className="font-semibold text-slate-800 dark:text-slate-200">{scheme.schemeType}</div>
                      <span className="inline-block mt-1 text-[11px] font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                        {scheme.benefitType}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Interest Rate / Subsidy */}
                <tr>
                  <td className="p-3 font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <Percent className="w-4 h-4 text-brand-500" />
                    Interest Rate / Subsidy
                  </td>
                  {schemes.map((scheme) => (
                    <td key={scheme.id} className="p-3">
                      {scheme.interestRate ? (
                        <span className="font-extrabold text-brand-600 dark:text-brand-400">
                          {scheme.interestRate}% p.a.
                        </span>
                      ) : scheme.subsidyPercentage ? (
                        <span className="font-extrabold text-amber-600 dark:text-amber-400">
                          {scheme.subsidyPercentage}% Subsidy
                        </span>
                      ) : (
                        <span className="text-slate-400 dark:text-slate-500">N/A (100% Grant/DBT)</span>
                      )}
                    </td>
                  ))}
                </tr>

                {/* State Availability */}
                <tr>
                  <td className="p-3 font-bold text-slate-700 dark:text-slate-300">
                    State Availability
                  </td>
                  {schemes.map((scheme) => (
                    <td key={scheme.id} className="p-3">
                      <span className="font-medium text-slate-800 dark:text-slate-200">
                        {scheme.stateAvailability.join(', ')}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Income Limit */}
                <tr>
                  <td className="p-3 font-bold text-slate-700 dark:text-slate-300">
                    Max Annual Income Cap
                  </td>
                  {schemes.map((scheme) => (
                    <td key={scheme.id} className="p-3">
                      {scheme.eligibility.maxAnnualFamilyIncome ? (
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          ₹{scheme.eligibility.maxAnnualFamilyIncome.toLocaleString('en-IN')} / year
                        </span>
                      ) : (
                        <span className="text-slate-500">No Income Limit</span>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Age Criteria */}
                <tr>
                  <td className="p-3 font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-purple-500" />
                    Age Eligibility
                  </td>
                  {schemes.map((scheme) => (
                    <td key={scheme.id} className="p-3 text-slate-700 dark:text-slate-300 font-medium">
                      {scheme.eligibility.minAge && scheme.eligibility.maxAge
                        ? `${scheme.eligibility.minAge} to ${scheme.eligibility.maxAge} years`
                        : scheme.eligibility.minAge
                        ? `${scheme.eligibility.minAge}+ years`
                        : scheme.eligibility.maxAge
                        ? `Up to ${scheme.eligibility.maxAge} years`
                        : 'No age barrier'}
                    </td>
                  ))}
                </tr>

                {/* Key Benefits */}
                <tr>
                  <td className="p-3 font-bold text-slate-700 dark:text-slate-300 align-top">
                    Key Features & Benefits
                  </td>
                  {schemes.map((scheme) => (
                    <td key={scheme.id} className="p-3 align-top">
                      <ul className="space-y-1">
                        {scheme.benefitsList.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* Required Documents */}
                <tr>
                  <td className="p-3 font-bold text-slate-700 dark:text-slate-300 align-top flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-blue-500" />
                    Required Documents
                  </td>
                  {schemes.map((scheme) => (
                    <td key={scheme.id} className="p-3 align-top">
                      <div className="flex flex-wrap gap-1">
                        {scheme.requiredDocuments.map((doc, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700"
                          >
                            {doc}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Official Verification */}
                <tr>
                  <td className="p-3 font-bold text-slate-700 dark:text-slate-300">
                    Official Portal Status
                  </td>
                  {schemes.map((scheme) => (
                    <td key={scheme.id} className="p-3">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 p-2 rounded-xl border border-emerald-200 dark:border-emerald-800/60">
                        <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Verified Govt Domain</span>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs text-slate-500">
          <span>YojnaSetu Verification Engine</span>
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-900 text-white font-bold px-4 py-2 rounded-xl transition-all"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
};
