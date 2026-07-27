import React, { useState } from 'react';
import { REAL_SCHEMES } from '../data/schemesData';
import { Scheme } from '../types';
import { SchemeCard } from '../components/SchemeCard';
import { Briefcase, Calculator, Rocket, ShieldCheck, Sparkles, Building2, Coins, ArrowRight } from 'lucide-react';

interface StartupHubProps {
  onSelectScheme: (scheme: Scheme) => void;
}

export const StartupHub: React.FC<StartupHubProps> = ({ onSelectScheme }) => {
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [tenureYears, setTenureYears] = useState<number>(5);
  const [interestRate, setInterestRate] = useState<number>(8.5);

  // EMI calculation formulas
  const r = interestRate / 12 / 100;
  const n = tenureYears * 12;
  const emi = Math.round((loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  const totalPayment = emi * n;
  const totalInterest = totalPayment - loanAmount;

  const startupSchemes = REAL_SCHEMES.filter(s => 
    s.category === 'Business & Startups' || s.id.includes('mudra') || s.id.includes('startup') || s.id.includes('pmegp')
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-amber-950 p-8 rounded-3xl text-white relative overflow-hidden shadow-2xl border border-slate-800">
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="bg-amber-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
            Entrepreneurship & MSME Support
          </span>
          <h1 className="text-3xl sm:text-5xl font-black">Business & Startup Portal</h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Discover collateral-free MUDRA loans up to ₹20 Lakh, DPIIT Seed Fund grants up to ₹50 Lakh, and PMEGP 35% subsidies for manufacturing & services.
          </p>
        </div>
      </div>

      {/* Mudra Loan EMI Calculator */}
      <section className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">PMMY Mudra & Business Loan EMI Estimator</h2>
            <p className="text-xs text-slate-500">Calculate monthly EMI, interest payable, and total loan cost under Mudra Scheme</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="space-y-4 lg:col-span-2">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>Loan Required Amount (INR)</span>
                <span className="text-brand-600 dark:text-brand-400 font-extrabold">₹{loanAmount.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min={50000}
                max={2000000}
                step={25000}
                value={loanAmount}
                onChange={e => setLoanAmount(Number(e.target.value))}
                className="w-full accent-brand-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>Shishu (₹50k)</span>
                <span>Kishore (₹5L)</span>
                <span>Tarun (₹20L)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Loan Tenure (Years)</label>
                <input
                  type="number"
                  min={1}
                  max={7}
                  value={tenureYears}
                  onChange={e => setTenureYears(Number(e.target.value))}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Interest Rate (% p.a.)</label>
                <input
                  type="number"
                  step={0.1}
                  min={6}
                  max={16}
                  value={interestRate}
                  onChange={e => setInterestRate(Number(e.target.value))}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold outline-none"
                />
              </div>
            </div>
          </div>

          {/* EMI Output Box */}
          <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Estimated Monthly EMI</span>
              <div className="text-3xl font-black text-brand-600 dark:text-brand-400 mt-1">
                ₹{emi.toLocaleString('en-IN')} <span className="text-xs font-semibold text-slate-500">/ mo</span>
              </div>
            </div>

            <div className="space-y-2 border-t border-slate-200 dark:border-slate-800 pt-3 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex justify-between">
                <span>Principal Amount:</span>
                <span className="font-bold">₹{loanAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Interest Payable:</span>
                <span className="font-bold text-amber-600 dark:text-amber-400">₹{totalInterest.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 dark:border-slate-800 pt-2 font-bold text-slate-900 dark:text-white">
                <span>Total Amount Paid:</span>
                <span>₹{totalPayment.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startup & MSME Schemes Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">Government Business & Startup Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startupSchemes.map(scheme => (
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
