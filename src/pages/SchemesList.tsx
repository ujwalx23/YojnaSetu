import React, { useState, useMemo } from 'react';
import { REAL_SCHEMES } from '../data/schemesData';
import { Scheme, ALL_INDIAN_STATES, SchemeMatchResult } from '../types';
import { SchemeCard } from '../components/SchemeCard';
import { SchemeComparisonModal } from '../components/SchemeComparisonModal';
import { DocumentReadinessCheck } from '../components/DocumentReadinessCheck';
import { useAuth } from '../context/AuthContext';
import { evaluateSchemeEligibility } from '../utils/aiEligibilityEngine';
import { 
  Search, 
  SlidersHorizontal, 
  Sparkles, 
  ArrowUpDown, 
  Scale, 
  FileCheck2, 
  CheckSquare, 
  X,
  ShieldCheck
} from 'lucide-react';

interface SchemesListProps {
  onSelectScheme: (scheme: Scheme) => void;
  quizResults?: SchemeMatchResult[];
  openQuiz: () => void;
}

export const SchemesList: React.FC<SchemesListProps> = ({ onSelectScheme, quizResults, openQuiz }) => {
  const { profile } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedState, setSelectedState] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [schemeTypeFilter, setSchemeTypeFilter] = useState<'All' | 'Central Government' | 'State Government' | 'Private/CSR Trust'>('All');
  const [sortBy, setSortBy] = useState<'match' | 'amount' | 'rating'>('match');

  // Comparison & Document readiness state
  const [comparedSchemes, setComparedSchemes] = useState<Scheme[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [isDocCheckOpen, setIsDocCheckOpen] = useState(false);

  const categories = [
    'All', 
    'Agriculture & Farming', 
    'Education & Scholarships', 
    'Business, MSME & Startups', 
    'Women & Child Welfare', 
    'Healthcare & Insurance', 
    'Housing & Urban Infrastructure', 
    'Senior Citizens & Pensions', 
    'Employment & Skill Training',
    'Private & CSR Grants'
  ];

  const processedSchemes = useMemo(() => {
    return REAL_SCHEMES.map(scheme => {
      const evalRes = evaluateSchemeEligibility(scheme, profile);
      return {
        scheme,
        evalRes
      };
    });
  }, [profile]);

  const filtered = useMemo(() => {
    return processedSchemes.filter(({ scheme }) => {
      const matchesSearch = 
        scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.department.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCat = selectedCategory === 'All' || scheme.category === selectedCategory;
      const matchesState = selectedState === 'All' || scheme.stateAvailability.includes('All India') || scheme.stateAvailability.includes(selectedState);
      const matchesType = selectedType === 'All' || scheme.benefitType === selectedType;
      const matchesSchemeType = schemeTypeFilter === 'All' || scheme.schemeType === schemeTypeFilter;

      return matchesSearch && matchesCat && matchesState && matchesType && matchesSchemeType;
    }).sort((a, b) => {
      if (sortBy === 'match') return b.evalRes.matchScore - a.evalRes.matchScore;
      if (sortBy === 'amount') return b.scheme.maxBenefitAmount - a.scheme.maxBenefitAmount;
      return b.scheme.rating - a.scheme.rating;
    });
  }, [processedSchemes, searchTerm, selectedCategory, selectedState, selectedType, schemeTypeFilter, sortBy]);

  const toggleCompareScheme = (scheme: Scheme) => {
    if (comparedSchemes.some(s => s.id === scheme.id)) {
      setComparedSchemes(comparedSchemes.filter(s => s.id !== scheme.id));
    } else {
      if (comparedSchemes.length >= 3) {
        alert('You can compare up to 3 schemes at a time. Remove one to add another.');
        return;
      }
      setComparedSchemes([...comparedSchemes, scheme]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 relative">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 p-8 rounded-3xl text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl border border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
              Official Verified Database
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              100% Working Links
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black mt-1">Smart Scheme Discovery</h1>
          <p className="text-xs text-slate-300 mt-2 max-w-xl">
            Filter through verified Central, State, and Private/CSR grants across all 36 Indian States & UTs with step-by-step application guidance.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setIsDocCheckOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs px-4 py-3 rounded-2xl shadow-lg flex items-center gap-2 transition-all"
          >
            <FileCheck2 className="w-4 h-4 text-emerald-200" />
            Document Vault Audit
          </button>

          <button
            onClick={openQuiz}
            className="bg-gradient-to-r from-brand-500 to-gov-green hover:from-brand-600 hover:to-emerald-600 text-white font-extrabold text-xs px-4 py-3 rounded-2xl shadow-lg flex items-center gap-2 transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            AI Eligibility Quiz
          </button>
        </div>
      </div>

      {/* Scheme Type Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 rounded-2xl shadow-sm overflow-x-auto gap-2">
        {[
          { id: 'All', label: 'All Schemes (Central, State & CSR)' },
          { id: 'Central Government', label: 'Central Government Schemes' },
          { id: 'State Government', label: 'State Government Schemes' },
          { id: 'Private/CSR Trust', label: 'Private & CSR Grants' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSchemeTypeFilter(tab.id as any)}
            className={`px-4 py-3.5 text-xs font-extrabold transition-all border-b-2 whitespace-nowrap ${
              schemeTypeFilter === tab.id
                ? 'border-brand-600 text-brand-600 dark:text-brand-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="space-y-6 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 h-fit shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-sm flex items-center gap-2 text-slate-900 dark:text-white">
              <SlidersHorizontal className="w-4 h-4 text-brand-500" /> Filter Criteria
            </h3>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedState('All');
                setSelectedType('All');
                setSchemeTypeFilter('All');
                setSearchTerm('');
              }}
              className="text-[11px] text-brand-600 dark:text-brand-400 font-bold hover:underline"
            >
              Reset All
            </button>
          </div>

          {/* Search Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Keyword Search</label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Title, ministry, grant..."
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs outline-none focus:border-brand-500 text-slate-900 dark:text-white font-medium"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Category</label>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs outline-none focus:border-brand-500 text-slate-900 dark:text-white font-bold"
            >
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* State Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">State Domicile (36 States & UTs)</label>
            <select
              value={selectedState}
              onChange={e => setSelectedState(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs outline-none focus:border-brand-500 text-slate-900 dark:text-white font-bold"
            >
              {ALL_INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          {/* Benefit Type */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Benefit Format</label>
            <select
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs outline-none focus:border-brand-500 text-slate-900 dark:text-white font-bold"
            >
              <option value="All">All Benefit Types</option>
              <option value="Direct Cash Transfer">Direct Cash Transfer</option>
              <option value="Subsidized Loan">Subsidized Loan</option>
              <option value="Subsidy">Subsidy</option>
              <option value="Grant">Grant</option>
              <option value="Scholarship">Scholarship</option>
              <option value="Free Service/Insurance">Free Service/Insurance</option>
            </select>
          </div>
        </div>

        {/* Schemes Grid & Controls */}
        <div className="lg:col-span-3 space-y-6">
          {/* Top Bar Sort Controls */}
          <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
              Showing <span className="text-brand-600 dark:text-brand-400 font-black">{filtered.length}</span> Verified Schemes
            </span>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-500 font-semibold hidden sm:inline">Sort By:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs font-extrabold outline-none text-slate-800 dark:text-slate-200"
              >
                <option value="match">AI Match Score (%)</option>
                <option value="amount">Max Benefit Amount (₹)</option>
                <option value="rating">Highest User Rating</option>
              </select>
            </div>
          </div>

          {/* Cards Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map(({ scheme, evalRes }) => {
                const isCompared = comparedSchemes.some(s => s.id === scheme.id);
                return (
                  <SchemeCard
                    key={scheme.id}
                    scheme={scheme}
                    matchResult={evalRes}
                    onSelect={onSelectScheme}
                    isCompared={isCompared}
                    onToggleCompare={toggleCompareScheme}
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
              <p className="text-sm font-bold text-slate-500">No schemes matched your current filter criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedState('All');
                  setSchemeTypeFilter('All');
                  setSearchTerm('');
                }}
                className="text-xs font-bold text-brand-600 hover:underline"
              >
                Clear all filters and search again
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Floating Comparison Bar */}
      {comparedSchemes.length > 0 && (
        <div className="fixed bottom-20 sm:bottom-8 left-1/2 -translate-x-1/2 z-40 bg-slate-900/95 text-white border border-slate-700/80 backdrop-blur-md px-6 py-3.5 rounded-full shadow-2xl flex items-center gap-4 animate-bounce-in">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-bold">
              <span className="text-amber-400 font-extrabold">{comparedSchemes.length}</span> / 3 Schemes Selected to Compare
            </span>
          </div>

          <button
            onClick={() => setIsCompareModalOpen(true)}
            className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold text-xs px-4 py-1.5 rounded-full transition-all shadow-md flex items-center gap-1"
          >
            Compare Side-by-Side
          </button>

          <button
            onClick={() => setComparedSchemes([])}
            className="text-slate-400 hover:text-white p-1"
            title="Clear all comparison picks"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Modals */}
      <SchemeComparisonModal
        schemes={comparedSchemes}
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        onRemoveScheme={(id) => setComparedSchemes(comparedSchemes.filter(s => s.id !== id))}
        onSelectScheme={(scheme) => {
          setIsCompareModalOpen(false);
          onSelectScheme(scheme);
        }}
      />

      <DocumentReadinessCheck
        schemes={REAL_SCHEMES}
        isOpen={isDocCheckOpen}
        onClose={() => setIsDocCheckOpen(false)}
        onSelectScheme={(scheme) => {
          setIsDocCheckOpen(false);
          onSelectScheme(scheme);
        }}
      />
    </div>
  );
};
