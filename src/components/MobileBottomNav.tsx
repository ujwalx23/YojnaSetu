import React from 'react';
import { Home, Layers, Sparkles, Briefcase, User } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openQuiz: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeTab, setActiveTab, openQuiz }) => {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 shadow-2xl px-2 py-2 flex items-center justify-around">
      {/* Home Tab */}
      <button
        onClick={() => setActiveTab('home')}
        className={`flex flex-col items-center gap-1 p-1 rounded-xl transition-all ${
          activeTab === 'home' 
            ? 'text-brand-600 dark:text-brand-400 font-extrabold scale-105' 
            : 'text-slate-500 dark:text-slate-400 font-medium'
        }`}
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px]">Home</span>
      </button>

      {/* Schemes Tab */}
      <button
        onClick={() => setActiveTab('schemes')}
        className={`flex flex-col items-center gap-1 p-1 rounded-xl transition-all ${
          activeTab === 'schemes' 
            ? 'text-brand-600 dark:text-brand-400 font-extrabold scale-105' 
            : 'text-slate-500 dark:text-slate-400 font-medium'
        }`}
      >
        <Layers className="w-5 h-5" />
        <span className="text-[10px]">Schemes</span>
      </button>

      {/* Center AI Quiz Action Button */}
      <button
        onClick={openQuiz}
        className="-mt-5 bg-gradient-to-tr from-brand-600 via-amber-500 to-gov-green text-white p-3 rounded-full shadow-lg shadow-brand-600/40 border-2 border-white dark:border-slate-950 transform active:scale-95 transition-all flex flex-col items-center justify-center"
        title="Check AI Eligibility"
      >
        <Sparkles className="w-5 h-5 text-amber-200 animate-pulse" />
      </button>

      {/* Startup Tab */}
      <button
        onClick={() => setActiveTab('startup')}
        className={`flex flex-col items-center gap-1 p-1 rounded-xl transition-all ${
          activeTab === 'startup' 
            ? 'text-brand-600 dark:text-brand-400 font-extrabold scale-105' 
            : 'text-slate-500 dark:text-slate-400 font-medium'
        }`}
      >
        <Briefcase className="w-5 h-5" />
        <span className="text-[10px]">Business</span>
      </button>

      {/* Dashboard Tab */}
      <button
        onClick={() => setActiveTab('dashboard')}
        className={`flex flex-col items-center gap-1 p-1 rounded-xl transition-all ${
          activeTab === 'dashboard' 
            ? 'text-brand-600 dark:text-brand-400 font-extrabold scale-105' 
            : 'text-slate-500 dark:text-slate-400 font-medium'
        }`}
      >
        <User className="w-5 h-5" />
        <span className="text-[10px]">Dashboard</span>
      </button>
    </div>
  );
};
