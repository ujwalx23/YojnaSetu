export type SchemeCategory = 
  | 'Agriculture & Farming'
  | 'Education & Scholarships'
  | 'Business, MSME & Startups'
  | 'Women & Child Welfare'
  | 'Healthcare & Insurance'
  | 'Housing & Urban Infrastructure'
  | 'Senior Citizens & Pensions'
  | 'Disability & Divyangjan'
  | 'Employment & Skill Training'
  | 'Private & CSR Grants'
  | 'Financial & Social Security';

export type SchemeType = 
  | 'Central Government' 
  | 'State Government' 
  | 'Private/CSR Trust' 
  | 'Public Sector Bank'
  | 'International Grant';

export type BenefitType = 
  | 'Direct Cash Transfer' 
  | 'Subsidy' 
  | 'Subsidized Loan' 
  | 'Grant' 
  | 'Scholarship' 
  | 'Tax Relief' 
  | 'Free Service/Insurance';

export type LanguageCode = 
  | 'en' // English
  | 'hi' // Hindi
  | 'mr' // Marathi
  | 'gu' // Gujarati
  | 'ta' // Tamil
  | 'te' // Telugu
  | 'kn' // Kannada
  | 'ml' // Malayalam
  | 'pa' // Punjabi
  | 'bn' // Bengali
  | 'or' // Odia
  | 'as';// Assamese

export interface Scheme {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  department: string;
  category: SchemeCategory;
  schemeType: SchemeType;
  benefitType: BenefitType;
  maxBenefitAmount: number; // in INR
  subsidyPercentage?: number;
  interestRate?: number;
  officialWebsite: string;
  applicationLink: string;
  pdfGuideUrl?: string;
  stateAvailability: string[]; // ['All India'] or specific state names
  
  // Eligibility criteria parameters
  eligibility: {
    minAge?: number;
    maxAge?: number;
    targetGender?: 'All' | 'Female' | 'Male' | 'Transgender';
    maxAnnualFamilyIncome?: number; // in INR
    allowedOccupations?: string[];
    allowedEducation?: string[];
    allowedCategories?: string[]; // 'General', 'OBC', 'SC', 'ST', 'EWS', 'Minority'
    requiresDisability?: boolean;
    minDisabilityPercentage?: number;
    requiresLandHolding?: boolean;
    isForStartupsOnly?: boolean;
    isForWomenOnly?: boolean;
    isBusinessOwner?: boolean;
    isStartupFounder?: boolean;
    isStudent?: boolean;
    customConditions?: string[];
  };

  benefitsList: string[];
  requiredDocuments: string[];
  applicationSteps: { stepNumber: number; title: string; detail: string }[];
  faqs: { question: string; answer: string }[];
  deadline: string; // ISO date string or 'No Deadline' / 'Open All Year'
  lastUpdated: string;
  contactHelpdesk: string;
  viewsCount: number;
  bookmarkCount: number;
  rating: number;
  isFeatured?: boolean;
}

export interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  age: number;
  gender: 'Male' | 'Female' | 'Transgender' | 'Other';
  state: string;
  district: string;
  urbanOrRural: 'Urban' | 'Rural';
  education: string;
  occupation: string;
  annualFamilyIncome: number;
  casteCategory: string;
  religion?: string;
  isFarmer: boolean;
  isBusinessOwner: boolean;
  isStartupFounder: boolean;
  isStudent: boolean;
  isSingleGirlChild: boolean;
  hasDisability: boolean;
  disabilityPercentage?: number;
  availableDocuments: string[];
}

export interface SchemeMatchResult {
  scheme: Scheme;
  matchScore: number; // 0 to 100
  status: 'Eligible' | 'Likely Eligible' | 'Future Eligible' | 'Not Eligible';
  reasons: string[];
  missingDocuments: string[];
  warnings: string[];
}

export interface ApplicationTrackerItem {
  id: string;
  schemeId: string;
  schemeTitle: string;
  appliedDate: string;
  status: 'Draft' | 'Submitted' | 'Under Verification' | 'Approved' | 'Disbursed' | 'Rejected';
  applicationRefNumber?: string;
  remarks?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  source: string;
  url: string;
  isUrgent?: boolean;
}

export const ALL_INDIAN_STATES = [
  'All India',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi (NCT)',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry'
];
