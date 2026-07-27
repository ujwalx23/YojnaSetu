import React, { useState } from 'react';
import { REAL_SCHEMES } from '../data/schemesData';
import { Scheme, SchemeCategory } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Building2, Plus, Trash2, Edit, CheckCircle2, TrendingUp, Users, ShieldAlert, FilePlus } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const [schemes, setSchemes] = useState<Scheme[]>(REAL_SCHEMES);
  const [showAddModal, setShowAddModal] = useState(false);

  const analyticsData = [
    { name: 'Agriculture', count: 48 },
    { name: 'Business & Startups', count: 62 },
    { name: 'Education', count: 85 },
    { name: 'Women Empowerment', count: 39 },
    { name: 'Healthcare', count: 41 },
    { name: 'Housing', count: 29 },
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#ef4444', '#8b5cf6'];

  const [newSchemeTitle, setNewSchemeTitle] = useState('');
  const [newSchemeDept, setNewSchemeDept] = useState('');
  const [newSchemeCategory, setNewSchemeCategory] = useState<SchemeCategory>('Agriculture');
  const [newSchemeAmount, setNewSchemeAmount] = useState(10000);
  const [newSchemeDesc, setNewSchemeDesc] = useState('');

  const handleAddScheme = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Scheme = {
      id: `custom-scheme-${Date.now()}`,
      title: newSchemeTitle,
      shortDescription: newSchemeDesc,
      fullDescription: newSchemeDesc,
      department: newSchemeDept,
      category: newSchemeCategory,
      schemeType: 'Central Government',
      benefitType: 'Direct Cash Transfer',
      maxBenefitAmount: newSchemeAmount,
      officialWebsite: 'https://myscheme.gov.in',
      applicationLink: 'https://myscheme.gov.in',
      stateAvailability: ['All India'],
      eligibility: {},
      benefitsList: [newSchemeDesc],
      requiredDocuments: ['Aadhaar Card', 'Bank Account Passbook'],
      applicationSteps: [{ stepNumber: 1, title: 'Online Registration', detail: 'Submit details on portal.' }],
      faqs: [{ question: 'Who is eligible?', answer: 'Citizens meeting criteria.' }],
      deadline: 'Open All Year',
      lastUpdated: new Date().toISOString().split('T')[0],
      contactHelpdesk: '1800-11-0001',
      viewsCount: 1,
      bookmarkCount: 0,
      rating: 5.0
    };

    setSchemes([created, ...schemes]);
    setShowAddModal(false);
    setNewSchemeTitle('');
    setNewSchemeDept('');
    setNewSchemeDesc('');
  };

  const handleDeleteScheme = (id: string) => {
    setSchemes(schemes.filter(s => s.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 p-8 rounded-3xl text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl border border-slate-800">
        <div>
          <span className="bg-amber-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
            Admin Control Center
          </span>
          <h1 className="text-3xl font-black mt-1">Platform Analytics & Management</h1>
          <p className="text-xs text-slate-300">Manage government schemes, track search metrics, and moderate content.</p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs px-5 py-3 rounded-2xl shadow-lg flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add New Scheme
        </button>
      </div>

      {/* Analytics Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-brand-500" /> Active Schemes Count by Category
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analyticsData}>
                <XAxis dataKey="name" stroke="#888888" fontSize={10} tickLine={false} />
                <YAxis stroke="#888888" fontSize={10} tickLine={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-500" /> Demographic Share Distribution
          </h3>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={analyticsData} dataKey="count" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {analyticsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Schemes Management Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden space-y-4 p-6">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white">Active Database Schemes ({schemes.length})</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 uppercase tracking-wider font-bold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3">Title</th>
                <th className="p-3">Department</th>
                <th className="p-3">Category</th>
                <th className="p-3">Max Benefit</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {schemes.map((s) => (
                <tr key={s.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                  <td className="p-3 font-bold text-slate-900 dark:text-white">{s.title}</td>
                  <td className="p-3">{s.department}</td>
                  <td className="p-3">
                    <span className="bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 font-bold px-2 py-0.5 rounded">
                      {s.category}
                    </span>
                  </td>
                  <td className="p-3 font-extrabold text-emerald-600">₹{s.maxBenefitAmount.toLocaleString('en-IN')}</td>
                  <td className="p-3 flex items-center gap-2">
                    <button onClick={() => handleDeleteScheme(s.id)} className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Scheme Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl max-w-lg w-full space-y-4 border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Add New Scheme to Platform</h3>
            
            <form onSubmit={handleAddScheme} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold mb-1">Scheme Title</label>
                <input
                  type="text"
                  required
                  value={newSchemeTitle}
                  onChange={e => setNewSchemeTitle(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">Department / Ministry</label>
                <input
                  type="text"
                  required
                  value={newSchemeDept}
                  onChange={e => setNewSchemeDept(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold mb-1">Category</label>
                  <select
                    value={newSchemeCategory}
                    onChange={e => setNewSchemeCategory(e.target.value as any)}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs outline-none"
                  >
                    <option value="Agriculture">Agriculture</option>
                    <option value="Business & Startups">Business & Startups</option>
                    <option value="Education & Scholarships">Education & Scholarships</option>
                    <option value="Women Empowerment">Women Empowerment</option>
                    <option value="Healthcare & Insurance">Healthcare & Insurance</option>
                    <option value="Housing & Urban">Housing & Urban</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1">Max Benefit Amount (₹)</label>
                  <input
                    type="number"
                    value={newSchemeAmount}
                    onChange={e => setNewSchemeAmount(Number(e.target.value))}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">Description</label>
                <textarea
                  rows={3}
                  value={newSchemeDesc}
                  onChange={e => setNewSchemeDesc(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs px-5 py-2 rounded-xl shadow-md"
                >
                  Create Scheme
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
