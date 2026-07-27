import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200">
      <Globe className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as any)}
        className="bg-transparent outline-none cursor-pointer text-slate-800 dark:text-slate-100 font-semibold"
      >
        <option value="en" className="dark:bg-slate-900">English (EN)</option>
        <option value="hi" className="dark:bg-slate-900">हिंदी (HI)</option>
        <option value="mr" className="dark:bg-slate-900">मराठी (MR)</option>
        <option value="gu" className="dark:bg-slate-900">ગુજરાતી (GU)</option>
      </select>
    </div>
  );
};
