import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { rankSchemesForProfile } from '../utils/aiEligibilityEngine';
import { REAL_SCHEMES } from '../data/schemesData';
import { SchemeMatchResult, ALL_INDIAN_STATES } from '../types';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  User, 
  Briefcase, 
  Coins, 
  FileCheck,
  Building,
  GraduationCap
} from 'lucide-react';

interface EligibilityQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onResultsCalculated: (results: SchemeMatchResult[]) => void;
}

export const EligibilityQuizModal: React.FC<EligibilityQuizModalProps> = ({ isOpen, onClose, onResultsCalculated }) => {
  if (!isOpen) return null;

  const { profile, updateProfile } = useAuth();
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({ ...profile });

  const handleDocToggle = (docName: string) => {
    setFormData(prev => {
      const docs = prev.availableDocuments.includes(docName)
        ? prev.availableDocuments.filter(d => d !== docName)
        : [...prev.availableDocuments, docName];
      return { ...prev, availableDocuments: docs };
    });
  };

  const handleFinish = () => {
    updateProfile(formData);
    const results = rankSchemesForProfile(REAL_SCHEMES, formData);
    onResultsCalculated(results);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden my-8 flex flex-col">
        {/* Quiz Header */}
        <div className="bg-gradient-to-r from-brand-700 via-slate-900 to-gov-green p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-5 h-5 text-amber-400 animate-spin-slow" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">AI Scheme Matcher</span>
          </div>
          <h2 className="text-xl font-black">Step {step} of 4: Profile & Eligibility Wizard</h2>
          
          {/* Progress Bar */}
          <div className="w-full bg-white/20 h-1.5 rounded-full mt-4 overflow-hidden">
            <div 
              className="bg-amber-400 h-full transition-all duration-500" 
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Quiz Body Steps */}
        <div className="p-6 text-slate-800 dark:text-slate-200 space-y-6">
          {/* Step 1: Demographics */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold flex items-center gap-2 text-brand-600 dark:text-brand-400">
                <User className="w-4 h-4" /> 1. Personal & State Domicile
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Age (Years)</label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={e => setFormData({ ...formData, age: Number(e.target.value) })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm outline-none focus:border-brand-500 font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Gender</label>
                  <select
                    value={formData.gender}
                    onChange={e => setFormData({ ...formData, gender: e.target.value as any })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm outline-none focus:border-brand-500 font-bold"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">State Domicile (All 36 States & UTs)</label>
                  <select
                    value={formData.state}
                    onChange={e => setFormData({ ...formData, state: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm outline-none focus:border-brand-500 font-bold"
                  >
                    {ALL_INDIAN_STATES.filter(s => s !== 'All India').map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Area Type</label>
                  <div className="flex gap-2">
                    {['Urban', 'Rural'].map((area) => (
                      <button
                        key={area}
                        type="button"
                        onClick={() => setFormData({ ...formData, urbanOrRural: area as any })}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors ${
                          formData.urbanOrRural === area 
                            ? 'bg-brand-600 text-white border-brand-600'
                            : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Occupation & Education */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold flex items-center gap-2 text-brand-600 dark:text-brand-400">
                <Briefcase className="w-4 h-4" /> 2. Education & Occupation Role
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Primary Profession</label>
                  <select
                    value={formData.occupation}
                    onChange={e => setFormData({ ...formData, occupation: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm outline-none focus:border-brand-500 font-bold"
                  >
                    <option value="Student">Student (School / College / PhD)</option>
                    <option value="Farmer">Farmer / Agricultural Worker</option>
                    <option value="Business Owner">Business Owner / MSME Entrepreneur</option>
                    <option value="Startup Founder">Tech Startup Founder</option>
                    <option value="Self-Employed">Self-Employed / Traditional Artisan / Vendor</option>
                    <option value="Unemployed">Unemployed / Job Seeker</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    { key: 'isFarmer', label: 'Farmer / Land Owner' },
                    { key: 'isBusinessOwner', label: 'Business / MSME Owner' },
                    { key: 'isStartupFounder', label: 'DPIIT Startup Founder' },
                    { key: 'isStudent', label: 'Enrolled Student' },
                  ].map((item) => (
                    <label key={item.key} className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={(formData as any)[item.key]}
                        onChange={e => setFormData({ ...formData, [item.key]: e.target.checked })}
                        className="rounded text-brand-600 accent-brand-600 w-4 h-4"
                      />
                      <span className="text-xs font-semibold">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Income & Social */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold flex items-center gap-2 text-brand-600 dark:text-brand-400">
                <Coins className="w-4 h-4" /> 3. Income & Category Status
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center text-xs font-semibold mb-1">
                    <span>Annual Family Income (INR)</span>
                    <span className="font-extrabold text-brand-600 dark:text-brand-400">₹{formData.annualFamilyIncome.toLocaleString('en-IN')} / year</span>
                  </div>
                  <input
                    type="range"
                    min={30000}
                    max={2500000}
                    step={10000}
                    value={formData.annualFamilyIncome}
                    onChange={e => setFormData({ ...formData, annualFamilyIncome: Number(e.target.value) })}
                    className="w-full accent-brand-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>₹30k (EWS)</span>
                    <span>₹8 Lakh (Creamy Layer)</span>
                    <span>₹25 Lakh+</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Caste Category</label>
                    <select
                      value={formData.casteCategory}
                      onChange={e => setFormData({ ...formData, casteCategory: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm outline-none focus:border-brand-500 font-bold"
                    >
                      <option value="General">General</option>
                      <option value="OBC">OBC (Other Backward Classes)</option>
                      <option value="SC">SC (Scheduled Caste)</option>
                      <option value="ST">ST (Scheduled Tribe)</option>
                      <option value="EWS">EWS (Economically Weaker Section)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Disability Status</label>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, hasDisability: !formData.hasDisability })}
                      className={`w-full py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                        formData.hasDisability ? 'bg-amber-500/10 border-amber-500 text-amber-600' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {formData.hasDisability ? 'Yes (Divyangjan >= 40%)' : 'No Disability'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Documents Checklist */}
          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold flex items-center gap-2 text-brand-600 dark:text-brand-400">
                <FileCheck className="w-4 h-4" /> 4. Select Available Documents
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1">
                {[
                  'Aadhaar Card',
                  'PAN Card',
                  'Income Certificate',
                  'Domicile Certificate',
                  'Caste Certificate',
                  'Bank Account Passbook',
                  'Land Ownership Record (7/12 or Khatauni)',
                  'GST Registration Certificate',
                  'MSME Udyam Certificate',
                  'DPIIT Startup India Certificate',
                  'Ration Card'
                ].map((docName) => {
                  const checked = formData.availableDocuments.includes(docName);
                  return (
                    <div
                      key={docName}
                      onClick={() => handleDocToggle(docName)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        checked 
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-700 dark:text-emerald-300'
                          : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <span className="text-xs font-semibold">{docName}</span>
                      {checked && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900"
            >
              <ArrowLeft className="w-4 h-4" /> Previous
            </button>
          ) : <div />}

          {step < 4 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl flex items-center gap-1.5 shadow-md"
            >
              <span>Next Step</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="bg-gradient-to-r from-brand-600 to-gov-green hover:from-brand-500 hover:to-emerald-600 text-white font-extrabold text-xs px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg shadow-brand-600/30"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
              Calculate My Eligible Schemes
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
