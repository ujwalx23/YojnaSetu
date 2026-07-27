import React from 'react';
import { REAL_NEWS } from '../data/newsData';
import { Newspaper, Bell, Calendar, ExternalLink, AlertCircle } from 'lucide-react';

export const NewsHub: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 p-8 rounded-3xl text-white shadow-xl border border-slate-800 space-y-2">
        <span className="bg-amber-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
          Official Press & Notifications
        </span>
        <h1 className="text-3xl font-black">Budget 2026 & Scheme Updates Hub</h1>
        <p className="text-xs text-slate-300">Stay informed with direct government press releases, policy changes, and urgent application deadlines.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {REAL_NEWS.map((news) => (
          <div 
            key={news.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                  {news.category}
                </span>
                {news.isUrgent && (
                  <span className="flex items-center gap-1 bg-red-500/10 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    <AlertCircle className="w-3 h-3" /> Urgent Update
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">{news.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{news.summary}</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{news.date}</span>
                <span>• {news.source}</span>
              </div>
              <a
                href={news.url}
                target="_blank"
                rel="noreferrer"
                className="text-brand-600 dark:text-brand-400 font-bold hover:underline flex items-center gap-1 text-[11px]"
              >
                Official Link <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
