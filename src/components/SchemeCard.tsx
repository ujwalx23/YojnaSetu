import React from 'react';
import { Scheme, SchemeMatchResult } from '../types';
import { useAuth } from '../context/AuthContext';
import { generateSchemePDF } from '../utils/pdfExporter';
import { 
  Sparkles, 
  Bookmark, 
  Download, 
  ArrowRight, 
  Building, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  XCircle,
  MapPin,
  Award
} from 'lucide-react';

interface SchemeCardProps {
  scheme: Scheme;
  matchResult?: SchemeMatchResult;
  onSelect: (scheme: Scheme) => void;
}

export const SchemeCard: React.FC<SchemeCardProps> = ({ scheme, matchResult, onSelect }) => {
  const { isBookmarked, toggleBookmark } = useAuth();
  const bookmarked = isBookmarked(scheme.id);

  const getStatusBadge = () => {
    if (!matchResult) return null;
    const { status, matchScore } = matchResult;

    if (status === 'Eligible') {
      return (
        <span className="flex items-center gap-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[10px] font-black px-2.5 py-1 rounded-full">
          <CheckCircle2 className="w-3.5 h-3.5" />
          {matchScore}% Match
        </span>
      );
    }
    if (status === 'Likely Eligible') {
      return (
        <span className="flex items-center gap-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-[10px] font-black px-2.5 py-1 rounded-full">
          <AlertCircle className="w-3.5 h-3.5" />
          {matchScore}% Likely
        </span>
      );
    }
    if (status === 'Future Eligible') {
      return (
        <span className="flex items-center gap-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30 text-[10px] font-black px-2.5 py-1 rounded-full">
          <Clock className="w-3.5 h-3.5" />
          Future Eligible
        </span>
      );
    }
    return (
      <span className="flex items-center gap-1 bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/30 text-[10px] font-black px-2.5 py-1 rounded-full">
        <XCircle className="w-3.5 h-3.5" />
        Not Eligible
      </span>
    );
  };

  const isCSR = scheme.schemeType === 'Private/CSR Trust';

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
      {/* Top Banner Tag */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${
              isCSR 
                ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30'
                : 'bg-brand-50 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 border-brand-200 dark:border-brand-800'
            }`}>
              {scheme.category}
            </span>
            
            <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-400" />
              {scheme.stateAvailability[0]}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {getStatusBadge()}
            <button
              onClick={() => toggleBookmark(scheme.id)}
              className={`p-1.5 rounded-xl border transition-colors ${
                bookmarked 
                  ? 'bg-amber-500/10 border-amber-500/30 text-amber-500 fill-current'
                  : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
              title={bookmarked ? 'Remove Bookmark' : 'Bookmark Scheme'}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-amber-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title */}
        <h3 
          onClick={() => onSelect(scheme)}
          className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors cursor-pointer line-clamp-2 mb-1.5"
        >
          {scheme.title}
        </h3>

        {/* Department */}
        <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mb-3 font-medium">
          <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="truncate">{scheme.department}</span>
        </p>

        {/* Short Description */}
        <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4 font-normal">
          {scheme.shortDescription}
        </p>
      </div>

      {/* Benefit Highlight Box */}
      <div>
        <div className="bg-slate-50 dark:bg-slate-950/80 rounded-2xl p-3.5 border border-slate-100 dark:border-slate-800 mb-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-extrabold block">
              Max Benefit / Grant
            </span>
            <div className="text-base font-black text-brand-600 dark:text-brand-400">
              ₹{scheme.maxBenefitAmount.toLocaleString('en-IN')}
              {scheme.subsidyPercentage ? ` (${scheme.subsidyPercentage}% Subsidy)` : ''}
              {scheme.interestRate ? ` @ ${scheme.interestRate}% Interest` : ''}
            </div>
          </div>
          <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold px-2 py-1 rounded-md">
            {scheme.benefitType}
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/60">
          <button
            onClick={() => onSelect(scheme)}
            className="flex-1 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          >
            <span>View Scheme</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => generateSchemePDF(scheme, matchResult)}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Download PDF Guide"
          >
            <Download className="w-4 h-4 text-slate-500" />
          </button>
        </div>
      </div>
    </div>
  );
};
