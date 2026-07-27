import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SchemeDetailModal } from './components/SchemeDetailModal';
import { EligibilityQuizModal } from './components/EligibilityQuizModal';
import { ChatbotDrawer } from './components/ChatbotDrawer';
import { MobileBottomNav } from './components/MobileBottomNav';

import { Home } from './pages/Home';
import { SchemesList } from './pages/SchemesList';
import { StartupHub } from './pages/StartupHub';
import { Scholarships } from './pages/Scholarships';
import { NewsHub } from './pages/NewsHub';
import { Dashboard } from './pages/Dashboard';
import { AdminPanel } from './pages/AdminPanel';

import { Scheme, SchemeMatchResult } from './types';

export const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);
  const [quizOpen, setQuizOpen] = useState<boolean>(false);
  const [chatOpen, setChatOpen] = useState<boolean>(false);
  const [quizResults, setQuizResults] = useState<SchemeMatchResult[]>([]);

  const handleResultsCalculated = (results: SchemeMatchResult[]) => {
    setQuizResults(results);
    setActiveTab('schemes');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      <div>
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          openQuiz={() => setQuizOpen(true)}
          openChat={() => setChatOpen(true)}
        />

        <main className="pt-2 sm:pt-4">
          {activeTab === 'home' && (
            <Home
              onSelectScheme={(scheme) => setSelectedScheme(scheme)}
              openQuiz={() => setQuizOpen(true)}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === 'schemes' && (
            <SchemesList
              onSelectScheme={(scheme) => setSelectedScheme(scheme)}
              quizResults={quizResults}
              openQuiz={() => setQuizOpen(true)}
            />
          )}

          {activeTab === 'startup' && (
            <StartupHub
              onSelectScheme={(scheme) => setSelectedScheme(scheme)}
            />
          )}

          {activeTab === 'scholarships' && (
            <Scholarships
              onSelectScheme={(scheme) => setSelectedScheme(scheme)}
            />
          )}

          {activeTab === 'news' && <NewsHub />}

          {activeTab === 'dashboard' && (
            <Dashboard
              onSelectScheme={(scheme) => setSelectedScheme(scheme)}
              openQuiz={() => setQuizOpen(true)}
            />
          )}

          {activeTab === 'admin' && <AdminPanel />}
        </main>
      </div>

      <Footer />

      {/* Smartphone Bottom Navigation Bar */}
      <MobileBottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openQuiz={() => setQuizOpen(true)}
      />

      {/* Modals & Drawers */}
      <SchemeDetailModal
        scheme={selectedScheme}
        onClose={() => setSelectedScheme(null)}
      />

      <EligibilityQuizModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        onResultsCalculated={handleResultsCalculated}
      />

      <ChatbotDrawer
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        onSelectScheme={(scheme) => setSelectedScheme(scheme)}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
