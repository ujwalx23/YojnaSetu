import React, { useState, useMemo } from 'react';
import { REAL_SCHEMES } from '../data/schemesData';
import { Scheme, SchemeCategory, SchemeMatchResult } from '../types';
import { SchemeCard } from '../components/SchemeCard';
import { useAuth } from '../context/AuthContext';
import { evaluateSchemeEligibility } from '../utils/aiEligibilityEngine';
import { Search, Filter, ArrowUpDown, SlidersHorizontal, Sparkles, X } from 'lucide-react';

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
  const [maxIncomeFilter, setMaxIncomeFilter] = useState<number>(2500000);
  const [sortBy, setSortBy] = useState<'match' | 'amount' | 'rating'>('match');

  const categories = ['All', 'Agriculture', 'Education & Scholarships', 'Business & Startups', 'Women Empowerment', 'Healthcare & Insurance', 'Housing & Urban', 'Senior Citizens', 'Employment & Skill Development'];
  const states = ['All', 'All India', 'Maharashtra', 'Delhi', 'Madhya Pradesh', 'Gujarat', 'Uttar Pradesh'];

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
      const matchesIncome = !scheme.eligibility.maxAnnualFamilyIncome || scheme.eligibility.maxAnnualFamilyIncome <= maxIncomeFilter;

      return matchesSearch && matchesCat && matchesState && matchesType && matchesIncome;
    }).sort((a, b) => {
      if (sortBy === 'match') return b.evalRes.matchScore - a.evalRes.matchScore;
      if (sortBy === 'amount') return b.scheme.maxBenefitAmount - a.scheme.maxBenefitAmount;
      return b.scheme.rating - a.scheme.rating;
    });
  }, [processedSchemes, searchTerm, selectedCategory, selectedState, selectedType, maxIncomeFilter, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 p-8 rounded-3xl text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl border border-slate-800">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">Database Engine</span>
          <h1 className="text-2xl sm:text-4xl font-black mt-1">Smart Scheme Discovery</h1>
          <p className="text-xs text-slate-300 mt-2 max-w-xl">
            Filter through verified Central & State Government schemes using hard eligibility parameters, state filters, and income limits.
          </p>
        </div>

        <button
          onClick={openQuiz}
          className="bg-gradient-to-r from-brand-500 to-gov-green hover:from-brand-600 hover:to-emerald-600 text-white font-extrabold text-xs px-5 py-3 rounded-2xl shadow-lg flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          Re-Run AI Profile Quiz
        </button>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="space-y-6 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 h-fit">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-sm flex items-center gap-2 text-slate-900 dark:text-white">
              <SlidersHorizontal className="w-4 h-4 text-brand-500" /> Filter Schemes
            </h3>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedState('All');
                setSelectedType('All');
                setSearchTerm('');
              }}
              className="text-[11px] text-brand-600 dark:text-brand-400 font-semibold hover:underline"
            >
              Reset All
            </button>
          </div>

          {/* Search Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Keywords</label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Title, ministry..."
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs outline-none focus:border-brand-500 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Category</label>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs outline-none focus:border-brand-500 text-slate-900 dark:text-white font-medium"
            >
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* State Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">State Domicile</label>
            <select
              value={selectedState}
              onChange={e => setSelectedState(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs outline-none focus:border-brand-500 text-slate-900 dark:text-white font-medium"
            >
              {states.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          {/* Benefit Type */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Benefit Format</label>
            <select
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs outline-none focus:border-brand-500 text-slate-900 dark:text-white font-medium"
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
              Showing <span className="text-brand-600 dark:text-brand-400 font-extrabold">{filtered.length}</span> Verified Schemes
            </span>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-500 font-semibold hidden sm:inline">Sort By:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs font-semibold outline-none text-slate-800 dark:text-slate-200"
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
              {filtered.map(({ scheme, evalRes }) => (
                <SchemeCard
                  key={scheme.id}
                  scheme={scheme}
                  matchResult={evalRes}
                  onSelect={onSelectScheme}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
              <p className="text-sm font-bold text-slate-500">No schemes matched your current filter criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedState('All');
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
    </div>
  );
};
