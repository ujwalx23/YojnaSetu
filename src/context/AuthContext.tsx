import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, ApplicationTrackerItem } from '../types';

interface AuthContextType {
  isLoggedIn: boolean;
  userRole: 'Citizen' | 'Admin' | 'Government Officer';
  profile: UserProfile;
  updateProfile: (newProfile: Partial<UserProfile>) => void;
  bookmarks: string[]; // scheme IDs
  toggleBookmark: (schemeId: string) => void;
  isBookmarked: (schemeId: string) => boolean;
  applications: ApplicationTrackerItem[];
  submitApplication: (schemeId: string, schemeTitle: string) => void;
  updateApplicationStatus: (id: string, status: ApplicationTrackerItem['status']) => void;
  login: (email: string, role?: 'Citizen' | 'Admin') => void;
  logout: () => void;
}

const DEFAULT_PROFILE: UserProfile = {
  fullName: 'Ujwal Singh',
  email: 'ujwal@example.com',
  phone: '+91 98765 43210',
  age: 22,
  gender: 'Male',
  state: 'Maharashtra',
  district: 'Mumbai Suburban',
  urbanOrRural: 'Urban',
  education: 'Undergraduate (BA/BSc/BCom/BTech)',
  occupation: 'Student',
  annualFamilyIncome: 240000,
  casteCategory: 'General',
  isFarmer: false,
  isBusinessOwner: true,
  isStartupFounder: true,
  isStudent: true,
  isSingleGirlChild: false,
  hasDisability: false,
  availableDocuments: [
    'Aadhaar Card',
    'PAN Card',
    'Bank Account Passbook',
    'Income Certificate',
    'Domicile Certificate'
  ]
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [userRole, setUserRole] = useState<'Citizen' | 'Admin' | 'Government Officer'>('Citizen');
  const [profile, setProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('ss_user_profile');
    return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
  });

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem('ss_bookmarks');
    return saved ? JSON.parse(saved) : ['pm-mudra-yojana', 'startup-india-seed-fund', 'post-matric-scholarship-sc-st-obc'];
  });

  const [applications, setApplications] = useState<ApplicationTrackerItem[]>(() => {
    const saved = localStorage.getItem('ss_applications');
    return saved ? JSON.parse(saved) : [
      {
        id: 'app-101',
        schemeId: 'startup-india-seed-fund',
        schemeTitle: 'Startup India Seed Fund Scheme (SISFS)',
        appliedDate: '2026-07-10',
        status: 'Under Verification',
        applicationRefNumber: 'SISFS-2026-88491',
        remarks: 'Documents submitted. Incubation committee review scheduled.'
      },
      {
        id: 'app-102',
        schemeId: 'pm-mudra-yojana',
        schemeTitle: 'Pradhan Mantri MUDRA Yojana (PMMY)',
        appliedDate: '2026-06-28',
        status: 'Approved',
        applicationRefNumber: 'PMMY-MUM-9921',
        remarks: 'Kishore loan of ₹3,50,000 sanctioned by SBI.'
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('ss_user_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('ss_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('ss_applications', JSON.stringify(applications));
  }, [applications]);

  const updateProfile = (newProfile: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...newProfile }));
  };

  const toggleBookmark = (schemeId: string) => {
    setBookmarks(prev => 
      prev.includes(schemeId) ? prev.filter(id => id !== schemeId) : [...prev, schemeId]
    );
  };

  const isBookmarked = (schemeId: string) => bookmarks.includes(schemeId);

  const submitApplication = (schemeId: string, schemeTitle: string) => {
    const newItem: ApplicationTrackerItem = {
      id: `app-${Date.now().toString().slice(-4)}`,
      schemeId,
      schemeTitle,
      appliedDate: new Date().toISOString().split('T')[0],
      status: 'Submitted',
      applicationRefNumber: `APP-2026-${Math.floor(10000 + Math.random() * 90000)}`,
      remarks: 'Application submitted via YojnaSetu official portal redirect.'
    };
    setApplications(prev => [newItem, ...prev]);
  };

  const updateApplicationStatus = (id: string, status: ApplicationTrackerItem['status']) => {
    setApplications(prev => prev.map(app => app.id === id ? { ...app, status } : app));
  };

  const login = (email: string, role: 'Citizen' | 'Admin' = 'Citizen') => {
    setIsLoggedIn(true);
    setUserRole(role);
    setProfile(prev => ({ ...prev, email }));
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      userRole,
      profile,
      updateProfile,
      bookmarks,
      toggleBookmark,
      isBookmarked,
      applications,
      submitApplication,
      updateApplicationStatus,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
