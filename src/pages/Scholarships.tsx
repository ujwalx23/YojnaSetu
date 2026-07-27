import React, { useState } from 'react';
import { REAL_SCHEMES } from '../data/schemesData';
import { Scheme } from '../types';
import { SchemeCard } from '../components/SchemeCard';
import { GraduationCap, Award, BookOpen, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

interface ScholarshipsProps {
  onSelectScheme: (scheme: Scheme) => void;
}

export const Scholarships: React.FC<ScholarshipsProps> = ({ onSelectScheme }) => {
  const [educationFilter, setEducationFilter] = useState<string>('All');

  const scholarshipSchemes = REAL_SCHEMES.filter(s => 
    s.category === 'Education & Scholarships' || s.benefitType === 'Scholarship'
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-brand-950 p-8 rounded-3xl text-white shadow-2xl border border-slate-800 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
          <GraduationCap className="w-4 h-4 text-blue-400" />
          <span>National Scholarship Portal (NSP) Verified</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black">Student & Academic Scholarship Finder</h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Find 100% fee waiver scholarships, monthly stipends, and research grants for School, Engineering, Medical, SC/ST/OBC, and Higher Education.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2 items-center bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
        <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> Education Level:
        </span>
        {['All', 'Class 10 & Below', 'Class 11 & 12', 'Undergraduate (Engineering/BA/BSc)', 'Postgraduate & PhD'].map((level) => (
          <button
            key={level}
            onClick={() => setEducationFilter(level)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-xl border transition-colors ${
              educationFilter === level 
                ? 'bg-brand-600 text-white border-brand-600'
                : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Scholarships Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">Active Government Scholarships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarshipSchemes.map(scheme => (
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
