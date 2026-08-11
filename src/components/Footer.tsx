import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Heart, CheckCircle2 } from 'lucide-react';
import { sendTelegramLeadNotification } from '../utils/telegramNotifier';

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAlertSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;

    setLoading(true);
    // Silently notify admin via Telegram Bot in the backend
    await sendTelegramLeadNotification({
      contact: emailInput.trim(),
      source: 'Footer Alert Me Subscription'
    });

    setLoading(false);
    setSubscribed(true);
    setEmailInput('');

    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
              <span className="font-extrabold text-lg text-white">YojnaSetu</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              India's comprehensive AI-powered scheme discovery platform helping citizens, students, startups, farmers, and women access every government benefit they qualify for.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4" />
              100% Verified Official Portals
            </div>
          </div>

          {/* Col 2: High Value Categories */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Top Portals</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#schemes" className="hover:text-brand-400 transition-colors">Agriculture & Farmer Schemes</a></li>
              <li><a href="#startup" className="hover:text-brand-400 transition-colors">PMMY Mudra Loans & Startups</a></li>
              <li><a href="#scholarships" className="hover:text-brand-400 transition-colors">NSP & State Scholarships</a></li>
              <li><a href="#schemes" className="hover:text-brand-400 transition-colors">Ayushman Health & Insurance</a></li>
              <li><a href="#schemes" className="hover:text-brand-400 transition-colors">PMAY Housing Subsidies</a></li>
            </ul>
          </div>

          {/* Col 3: Government Helplines */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Official Helplines</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center justify-between">
                <span>PM-Kisan Helpline:</span>
                <span className="font-semibold text-white">155261</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Mudra Loan Portal:</span>
                <span className="font-semibold text-white">1800-180-1111</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Ayushman Bharat (NHA):</span>
                <span className="font-semibold text-white">14555</span>
              </li>
              <li className="flex items-center justify-between">
                <span>NSP Scholarship Desk:</span>
                <span className="font-semibold text-white">0120-6619540</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Stay Updated</h4>
            <p className="text-xs text-slate-400">
              Get immediate alerts on new government schemes and upcoming scholarship deadlines.
            </p>
            
            {subscribed ? (
              <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 p-2.5 rounded-lg text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! Subscribed to instant alerts.</span>
              </div>
            ) : (
              <form onSubmit={handleAlertSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter email / phone"
                  required
                  className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-brand-500 flex-1 font-medium"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs px-3 py-2 rounded-lg transition-colors shadow-md disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Alert Me'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 YojnaSetu Platform. All scheme data synced from MyScheme.gov.in & official ministries.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with precision for India</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};
