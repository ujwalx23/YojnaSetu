import React, { useState } from 'react';
import { REAL_SCHEMES } from '../data/schemesData';
import { Scheme, SchemeCategory } from '../types';
import { SchemeCard } from '../components/SchemeCard';
import { useLanguage } from '../context/LanguageContext';
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Home as HomeIcon, 
  Sprout, 
  Building2, 
  Zap,
  Award
} from 'lucide-react';

interface HomeProps {
  onSelectScheme: (scheme: Scheme) => void;
  openQuiz: () => void;
  setActiveTab: (tab: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onSelectScheme, openQuiz, setActiveTab }) => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const categoriesList: { name: SchemeCategory; icon: any; count: number; color: string }[] = [
    { name: 'Agriculture & Farming', icon: Sprout, count: 48, color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' },
    { name: 'Business, MSME & Startups', icon: Briefcase, count: 62, color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' },
    { name: 'Education & Scholarships', icon: GraduationCap, count: 85, color: 'text-blue-500 bg-blue-500/10 border-blue-500/20' },
    { name: 'Women & Child Welfare', icon: Heart, count: 39, color: 'text-pink-500 bg-pink-500/10 border-pink-500/20' },
    { name: 'Healthcare & Insurance', icon: Heart, count: 41, color: 'text-red-500 bg-red-500/10 border-red-500/20' },
    { name: 'Housing & Urban Infrastructure', icon: HomeIcon, count: 29, color: 'text-purple-500 bg-purple-500/10 border-purple-500/20' },
    { name: 'Senior Citizens & Pensions', icon: Users, count: 22, color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20' },
    { name: 'Private & CSR Grants', icon: Award, count: 34, color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20' },
  ];

  const filteredSchemes = searchQuery.trim()
    ? REAL_SCHEMES.filter(s => 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : REAL_SCHEMES.slice(0, 6);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-slate-900 via-brand-950 to-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 lg:px-12 shadow-2xl border border-slate-800">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-gov-green/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-amber-300 shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
            <span>AI-Powered Central, State & CSR Scheme Discovery</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Discover Every Scheme <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-400 via-brand-300 to-emerald-400 bg-clip-text text-transparent">
              You & Your Family Qualify For
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Answer a few quick questions. Our AI engine instantly evaluates over 500+ Central, State Government, and Private CSR schemes tailored to your exact profile across all 36 Indian States & UTs.
          </p>

          {/* Search Bar Input */}
          <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-2xl p-2 shadow-2xl flex items-center gap-2 border border-slate-200 dark:border-slate-800">
            <Search className="w-5 h-5 text-slate-400 ml-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by scheme name, state, department, or benefit..."
              className="flex-1 bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400 text-sm font-medium"
            />
            <button
              onClick={() => setActiveTab('schemes')}
              className="bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition-colors shadow-md hidden sm:block"
            >
              Search Database
            </button>
          </div>

          {/* Quick CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={openQuiz}
              className="bg-gradient-to-r from-brand-500 to-gov-green hover:from-brand-600 hover:to-emerald-600 text-white font-extrabold text-sm px-7 py-3.5 rounded-2xl shadow-xl shadow-brand-600/30 flex items-center gap-2 transition-transform transform active:scale-95"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              Check AI Eligibility Now
            </button>
            <button
              onClick={() => setActiveTab('schemes')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm px-6 py-3.5 rounded-2xl transition-colors"
            >
              Browse All Schemes
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs font-semibold text-slate-400 border-t border-white/10">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Official Data</span>
            <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-amber-400" /> Instant AI Score</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-400" /> All 36 States & UTs</span>
          </div>
        </div>
      </section>

      {/* Live Statistics Counter Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-center p-4 border-r last:border-r-0 border-slate-200 dark:border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-brand-600 dark:text-brand-400">500+</div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Verified Government Schemes</div>
          </div>
          <div className="text-center p-4 border-r last:border-r-0 border-slate-200 dark:border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">₹50,000 Cr+</div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Disbursed Benefit Value</div>
          </div>
          <div className="text-center p-4 border-r last:border-r-0 border-slate-200 dark:border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-amber-500">10M+</div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Citizens Assisted</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl sm:text-3xl font-black text-purple-600 dark:text-purple-400">36 States/UTs</div>
            <div className="text-xs text-slate-500 font-semibold mt-1">State & CSR Coverage</div>
          </div>
        </div>
      </section>

      {/* Scheme Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">Explore by Target Category</h2>
            <p className="text-xs text-slate-500 mt-1">Find schemes tailored to your specific role and demographic</p>
          </div>
          <button 
            onClick={() => setActiveTab('schemes')}
            className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
          >
            View All Categories <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {categoriesList.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                onClick={() => setActiveTab('schemes')}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 hover:border-brand-500 hover:shadow-lg transition-all cursor-pointer group flex items-start justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-3 ${cat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">{cat.count} Schemes Active</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Schemes Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">Featured High-Impact Schemes</h2>
            <p className="text-xs text-slate-500 mt-1">Popular Central, State & CSR programs with maximum financial assistance</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.map((scheme) => (
            <SchemeCard
              key={scheme.id}
              scheme={scheme}
              onSelect={onSelectScheme}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
