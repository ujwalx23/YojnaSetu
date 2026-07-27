export type SchemeCategory = 
  | 'Agriculture'
  | 'Education & Scholarships'
  | 'Business & Startups'
  | 'Women Empowerment'
  | 'Healthcare & Insurance'
  | 'Housing & Urban'
  | 'Senior Citizens'
  | 'Disability Support'
  | 'Employment & Skill Development'
  | 'Financial & Social Security';

export type SchemeType = 'Central Government' | 'State Government' | 'Private/CSR' | 'Public Sector Bank';
export type BenefitType = 'Direct Cash Transfer' | 'Subsidy' | 'Subsidized Loan' | 'Grant' | 'Scholarship' | 'Tax Relief' | 'Free Service/Insurance';

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
  stateAvailability: string[]; // ['All India'] or ['Maharashtra', 'Delhi']
  
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
