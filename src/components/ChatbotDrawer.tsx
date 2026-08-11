import React, { useState } from 'react';
import { REAL_SCHEMES } from '../data/schemesData';
import { Scheme } from '../types';
import { 
  X, 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  ArrowUpRight, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  matchedSchemes?: Scheme[];
  actionLink?: { label: string; url: string };
}

interface ChatbotDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScheme: (scheme: Scheme) => void;
}

export const ChatbotDrawer: React.FC<ChatbotDrawerProps> = ({ isOpen, onClose, onSelectScheme }) => {
  if (!isOpen) return null;

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'ai',
      text: 'Namaste! I am your YojnaSetu AI Scheme Assistant. Ask me anything about Indian central/state schemes, eligibility requirements, Mudra loans, scholarships, or document lists.',
      actionLink: {
        label: 'Chat on Telegram Bot (@YojnaSetu_bot)',
        url: 'https://t.me/YojnaSetu_bot'
      }
    }
  ]);

  const presetChips = [
    '📲 Connect Telegram Bot @YojnaSetu_bot',
    'PM Kisan ₹6000 registration steps',
    'Collateral-free Mudra business loan',
    'PM Vishwakarma ₹15k toolkit voucher',
    'NSP Higher Education scholarship',
    'Maharashtra Ladki Bahin ₹1500 scheme'
  ];

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    // Special trigger for Telegram bot
    if (query.includes('Telegram') || query.includes('YojnaSetu_bot')) {
      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: query,
      };

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: '📱 You can connect with our official Telegram Bot (@YojnaSetu_bot) 24/7 for instant updates, scheme alerts, and step-by-step guidance on your phone!',
        actionLink: {
          label: 'Open @YojnaSetu_bot on Telegram',
          url: 'https://t.me/YojnaSetu_bot'
        }
      };

      setMessages(prev => [...prev, userMsg, aiMsg]);
      setInput('');
      return;
    }

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
    };

    const queryLower = query.toLowerCase();

    // Match schemes based on query keywords
    const matched = REAL_SCHEMES.filter(s => 
      s.title.toLowerCase().includes(queryLower) ||
      s.shortDescription.toLowerCase().includes(queryLower) ||
      s.category.toLowerCase().includes(queryLower) ||
      s.department.toLowerCase().includes(queryLower) ||
      queryLower.split(' ').some(w => w.length > 3 && s.fullDescription.toLowerCase().includes(w))
    );

    let aiText = '';
    let finalMatched: Scheme[] = [];

    if (matched.length > 0) {
      aiText = `Based on official database records, here are the top scheme(s) matching "${query}":`;
      finalMatched = matched.slice(0, 3);
    } else if (queryLower.includes('loan') || queryLower.includes('business')) {
      aiText = `Looking for business loans? Here are top collateral-free schemes including PMMY Mudra Loan and Stand Up India:`;
      finalMatched = REAL_SCHEMES.filter(s => s.category === 'Business, MSME & Startups').slice(0, 3);
    } else if (queryLower.includes('scholarship') || queryLower.includes('student') || queryLower.includes('study')) {
      aiText = `Here are top merit-cum-means scholarship grants for undergraduate and school students:`;
      finalMatched = REAL_SCHEMES.filter(s => s.category === 'Education & Scholarships').slice(0, 3);
    } else if (queryLower.includes('women') || queryLower.includes('girl')) {
      aiText = `Here are welfare and financial support schemes dedicated to women and girl children:`;
      finalMatched = REAL_SCHEMES.filter(s => s.category === 'Women & Child Welfare' || s.eligibility.isForWomenOnly).slice(0, 3);
    } else {
      aiText = `I searched our verified database for "${query}". Here are recommended schemes based on popularity and maximum benefit:`;
      finalMatched = REAL_SCHEMES.slice(0, 3);
    }

    const aiMsg: ChatMessage = {
      id: `ai-${Date.now()}`,
      sender: 'ai',
      text: aiText,
      matchedSchemes: finalMatched
    };

    setMessages(prev => [...prev, userMsg, aiMsg]);
    setInput('');
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col animate-slide-in">
      {/* Drawer Top Header */}
      <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 p-4 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-400/20 border border-amber-400/40 flex items-center justify-center">
            <Bot className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <h3 className="font-bold text-sm">Scheme AI Assistant</h3>
            <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Online | Telegram @YojnaSetu_bot
            </span>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Telegram Bot Link Banner */}
      <div className="bg-sky-500/10 border-b border-sky-500/20 px-4 py-2.5 flex items-center justify-between text-xs text-sky-900 dark:text-sky-300">
        <div className="flex items-center gap-1.5">
          <MessageSquare className="w-4 h-4 text-sky-500 shrink-0" />
          <span className="font-bold">Telegram Bot: @YojnaSetu_bot</span>
        </div>
        <a
          href="https://t.me/YojnaSetu_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-md transition-colors flex items-center gap-1"
        >
          Open Bot <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Preset Chips */}
      <div className="p-3 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-x-auto flex gap-1.5">
        {presetChips.map((chip, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(chip)}
            className="text-[11px] font-semibold bg-white dark:bg-slate-800 hover:bg-brand-500 hover:text-white border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full whitespace-nowrap transition-colors"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Message Stream */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {m.sender === 'ai' && (
              <div className="w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div className={`max-w-[85%] space-y-2 ${
              m.sender === 'user'
                ? 'bg-brand-600 text-white p-3 rounded-2xl rounded-tr-none font-medium'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 p-3 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700'
            }`}>
              <p className="leading-relaxed">{m.text}</p>

              {/* Action Link button inside message if provided */}
              {m.actionLink && (
                <div className="pt-1">
                  <a
                    href={m.actionLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-[11px] px-3 py-1.5 rounded-xl transition-all shadow-sm"
                  >
                    <span>{m.actionLink.label}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

              {m.matchedSchemes && m.matchedSchemes.length > 0 && (
                <div className="pt-2 space-y-2">
                  {m.matchedSchemes.map((s) => (
                    <div 
                      key={s.id}
                      onClick={() => {
                        onSelectScheme(s);
                        onClose();
                      }}
                      className="p-2.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-brand-500 transition-colors cursor-pointer group"
                    >
                      <div className="font-bold text-xs text-brand-600 dark:text-brand-400 group-hover:underline flex items-center justify-between">
                        <span className="line-clamp-1">{s.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">{s.department}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="inline-block text-[9px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded">
                          Max ₹{s.maxBenefitAmount.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[9px] text-slate-400 font-semibold">
                          View Step Guide →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {m.sender === 'user' && (
              <div className="w-7 h-7 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Form */}
      <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about loans, Kisan, scholarships..."
            className="flex-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-brand-500 font-medium"
          />
          <button
            type="submit"
            className="p-2 bg-brand-600 hover:bg-brand-500 text-white rounded-xl transition-colors shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
