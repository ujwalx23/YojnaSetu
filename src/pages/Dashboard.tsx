import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { REAL_SCHEMES } from '../data/schemesData';
import { Scheme } from '../types';
import { SchemeCard } from '../components/SchemeCard';
import { 
  User, 
  Bookmark, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Edit3, 
  Plus, 
  ShieldCheck, 
  Layers, 
  Sparkles,
  AlertCircle
} from 'lucide-react';

interface DashboardProps {
  onSelectScheme: (scheme: Scheme) => void;
  openQuiz: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onSelectScheme, openQuiz }) => {
  const { profile, updateProfile, bookmarks, applications } = useAuth();
  const [activeSubTab, setActiveSubTab] = useState<'applications' | 'bookmarks' | 'profile' | 'documents'>('applications');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editForm, setEditForm] = useState({ ...profile });

  const bookmarkedSchemes = REAL_SCHEMES.filter(s => bookmarks.includes(s.id));

  const handleSaveProfile = () => {
    updateProfile(editForm);
    setIsEditingProfile(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
      case 'Disbursed':
        return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30';
      case 'Under Verification':
      case 'Submitted':
        return 'bg-amber-500/10 text-amber-600 border-amber-500/30';
      default:
        return 'bg-blue-500/10 text-blue-600 border-blue-500/30';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 p-8 rounded-3xl text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl border border-slate-800">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-brand-500 text-slate-950 font-black text-2xl flex items-center justify-center shadow-lg">
            {profile.fullName.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black">{profile.fullName}</h1>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Profile Verified
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              {profile.occupation} • {profile.state} ({profile.urbanOrRural}) • Age {profile.age}
            </p>
          </div>
        </div>

        <button
          onClick={openQuiz}
          className="bg-gradient-to-r from-brand-500 to-gov-green hover:from-brand-600 hover:to-emerald-600 text-white font-extrabold text-xs px-5 py-3 rounded-2xl shadow-lg flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          Update AI Quiz Profile
        </button>
      </div>

      {/* Sub Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 rounded-2xl shadow-sm overflow-x-auto">
        {[
          { id: 'applications', label: `Track Applications (${applications.length})`, icon: Clock },
          { id: 'bookmarks', label: `Saved Schemes (${bookmarkedSchemes.length})`, icon: Bookmark },
          { id: 'profile', label: 'My Citizen Profile', icon: User },
          { id: 'documents', label: 'Document Vault', icon: FileText },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-4 text-xs font-bold transition-all border-b-2 whitespace-nowrap ${
                activeSubTab === tab.id
                  ? 'border-brand-600 text-brand-600 dark:text-brand-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Sub Tab Contents */}
      <div className="space-y-6">
        {/* Applications Tracker Tab */}
        {activeSubTab === 'applications' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Active Scheme Application Tracker</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {applications.map((app) => (
                <div key={app.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 font-mono">Ref: {app.applicationRefNumber}</span>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-0.5">{app.schemeTitle}</h4>
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="font-semibold text-slate-500 block mb-0.5">Official Status Note:</span>
                    {app.remarks}
                  </p>

                  <div className="text-[11px] text-slate-400 flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span>Applied Date: {app.appliedDate}</span>
                    <span className="text-brand-600 font-semibold cursor-pointer hover:underline">View Tracking Log</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bookmarks Tab */}
        {activeSubTab === 'bookmarks' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Your Bookmarked Schemes</h2>
            {bookmarkedSchemes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookmarkedSchemes.map(scheme => (
                  <SchemeCard
                    key={scheme.id}
                    scheme={scheme}
                    onSelect={onSelectScheme}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 text-xs">
                No bookmarked schemes yet. Browse schemes and click the bookmark icon to save.
              </div>
            )}
          </div>
        )}

        {/* Profile Tab */}
        {activeSubTab === 'profile' && (
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Citizen Demographic Profile</h3>
                <p className="text-xs text-slate-500">Your profile data is used by the AI engine to compute eligibility</p>
              </div>
              <button
                onClick={() => setIsEditingProfile(!isEditingProfile)}
                className="flex items-center gap-1.5 text-xs font-bold text-brand-600 bg-brand-50 dark:bg-brand-950 px-3 py-1.5 rounded-xl border border-brand-200 dark:border-brand-800"
              >
                <Edit3 className="w-3.5 h-3.5" />
                {isEditingProfile ? 'Cancel Edit' : 'Edit Profile'}
              </button>
            </div>

            {isEditingProfile ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={editForm.fullName}
                      onChange={e => setEditForm({ ...editForm, fullName: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Annual Family Income (INR)</label>
                    <input
                      type="number"
                      value={editForm.annualFamilyIncome}
                      onChange={e => setEditForm({ ...editForm, annualFamilyIncome: Number(e.target.value) })}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold outline-none"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSaveProfile}
                  className="bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-md"
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500">Age:</span>
                  <p className="font-bold text-slate-900 dark:text-white mt-0.5">{profile.age} Years</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500">Gender:</span>
                  <p className="font-bold text-slate-900 dark:text-white mt-0.5">{profile.gender}</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500">Annual Income:</span>
                  <p className="font-bold text-brand-600 dark:text-brand-400 mt-0.5">₹{profile.annualFamilyIncome.toLocaleString('en-IN')}</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500">Category:</span>
                  <p className="font-bold text-slate-900 dark:text-white mt-0.5">{profile.casteCategory}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Document Vault Tab */}
        {activeSubTab === 'documents' && (
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="font-bold text-base text-slate-900 dark:text-white">Citizen Document Vault</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {profile.availableDocuments.map((doc, idx) => (
                <div key={idx} className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{doc}</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
