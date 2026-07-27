import React, { useState } from 'react';
import { REAL_SCHEMES } from '../data/schemesData';
import { Scheme } from '../types';
import { X, Sparkles, Send, Bot, User, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  matchedSchemes?: Scheme[];
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
      text: 'Namaste! I am your AI Scheme Assistant. Ask me anything about Indian government schemes, eligibility requirements, Mudra loans, scholarships, or solar subsidies.',
    }
  ]);

  const presetChips = [
    '21 y/o female student in Maharashtra',
    'Business loan without collateral',
    'PM Kisan eligibility & 6k benefit',
    'Scholarships for SC/ST/OBC students',
    'Solar rooftop subsidy up to 78k'
  ];

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
    };

    const matched = REAL_SCHEMES.filter(s => 
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
      s.category.toLowerCase().includes(query.toLowerCase()) ||
      s.department.toLowerCase().includes(query.toLowerCase()) ||
      query.toLowerCase().split(' ').some(word => word.length > 3 && s.fullDescription.toLowerCase().includes(word))
    );

    let aiText = '';
    if (matched.length > 0) {
      aiText = `Based on official scheme records, I found ${matched.length} scheme(s) matching your query "${query}":`;
    } else {
      aiText = `I analyzed your query "${query}". Here are recommended schemes based on our official database:`;
    }

    const finalMatched = matched.length > 0 ? matched.slice(0, 3) : REAL_SCHEMES.slice(0, 2);

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
              Online | Official Data Verified
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
                ? 'bg-brand-600 text-white p-3 rounded-2xl rounded-tr-none'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 p-3 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700'
            }`}>
              <p className="leading-relaxed">{m.text}</p>

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
                      <span className="inline-block mt-1 text-[9px] font-bold bg-emerald-500/10 text-emerald-600 px-1.5 py-0.5 rounded">
                        Max ₹{s.maxBenefitAmount.toLocaleString('en-IN')}
                      </span>
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
            placeholder="Type your scheme question..."
            className="flex-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-brand-500"
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
