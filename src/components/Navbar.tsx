import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { 
  Sparkles, 
  Sun, 
  Moon, 
  Eye, 
  Menu, 
  X, 
  Briefcase, 
  GraduationCap, 
  Newspaper, 
  LayoutDashboard,
  Building2
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openQuiz: () => void;
  openChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, openQuiz, openChat }) => {
  const { theme, toggleTheme, highContrast, toggleHighContrast } = useTheme();
  const { t } = useLanguage();
  const { profile } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'schemes', label: t.navSchemes },
    { id: 'startup', label: t.navStartup, icon: Briefcase },
    { id: 'scholarships', label: t.navScholarships, icon: GraduationCap },
    { id: 'news', label: t.navNews, icon: Newspaper },
    { id: 'dashboard', label: t.navDashboard, icon: LayoutDashboard },
    { id: 'admin', label: t.navAdmin, icon: Building2 },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/95 dark:bg-[#060e1a]/95 border-b border-slate-200/60 dark:border-[#1B3B6F]/40 transition-colors duration-300 shadow-sm">
      {/* Top Accessibility & Helpline Bar */}
      <div className="bg-[#1B3B6F] text-blue-100 text-xs px-4 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 font-bold text-[#FF8C1A]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            🇮🇳 Government of India &amp; 36 States/UTs Portal
          </span>
          <span className="hidden lg:inline text-blue-200 font-medium">| Toll Free Helpline: 1800-11-0001 / 155261</span>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleHighContrast}
            className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all ${
              highContrast ? 'bg-[#F57C00] text-white font-black' : 'bg-white/10 hover:bg-white/20 text-blue-100'
            }`}
            title="Toggle High Contrast Mode for Visual Accessibility"
          >
            <Eye className="w-3.5 h-3.5" />
            {highContrast ? 'Contrast: ON' : 'High Contrast'}
          </button>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2756B5] to-[#1B3B6F] p-0.5 shadow-md shadow-[#1B3B6F]/40 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#1B3B6F] rounded-[14px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#F57C00] animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-xl tracking-tight text-[#1B3B6F] dark:text-white">
                Yojna<span className="text-[#F57C00]">Setu</span>
              </span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold -mt-0.5 hidden sm:block">
              Official Central, State & CSR Discovery Platform
            </p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#1B3B6F] text-white shadow-md shadow-[#1B3B6F]/30'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#1B3B6F] dark:hover:text-[#FF8C1A] hover:bg-[#1B3B6F]/8 dark:hover:bg-[#1B3B6F]/30'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* AI Eligibility CTA */}
          <button
            onClick={openQuiz}
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#F57C00] to-[#FF8C1A] hover:from-[#e06e00] hover:to-[#F57C00] text-white px-4 py-2 rounded-xl text-xs font-extrabold shadow-md shadow-[#F57C00]/30 hover:shadow-lg transition-all transform active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
            <span>Check AI Eligibility</span>
          </button>

          {/* AI Assistant Launcher */}
          <button
            onClick={openChat}
            className="p-2.5 rounded-xl bg-[#F57C00]/10 hover:bg-[#F57C00]/20 text-[#F57C00] dark:text-[#FF8C1A] transition-colors relative"
            title="Ask AI Scheme Assistant"
          >
            <Sparkles className="w-4 h-4" />
          </button>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Toggle Light / Dark Mode"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* User Profile Avatar */}
          <button
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-2 pl-2 pr-1.5 py-1 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-[#1B3B6F] text-white font-bold text-xs flex items-center justify-center">
              {profile.fullName.charAt(0)}
            </div>
            <span className="text-xs font-bold hidden md:inline text-slate-800 dark:text-slate-200">
              {profile.fullName.split(' ')[0]}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold ${
                activeTab === item.id 
                  ? 'bg-[#1B3B6F] text-white' 
                  : 'text-slate-700 dark:text-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-2">
            <button
              onClick={() => {
                openQuiz();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#F57C00] to-[#FF8C1A] text-white py-3 rounded-xl font-extrabold text-sm shadow-md shadow-[#F57C00]/30"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              Check AI Eligibility Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
