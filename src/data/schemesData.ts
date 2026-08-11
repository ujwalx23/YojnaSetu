import { Scheme } from '../types';

export const REAL_SCHEMES: Scheme[] = [
  // 1. Central Agriculture
  {
    id: 'pm-kisan-2026',
    title: 'PM Kisan Samman Nidhi Yojana',
    shortDescription: 'Guaranteed direct cash benefit of ₹6,000 per year transferred directly into the bank accounts of land-holding farmer families across India.',
    fullDescription: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a Central Sector scheme with 100% funding from Government of India. Under the scheme, income support of ₹6,000/- per year in three equal installments of ₹2,000/- each is provided to all land-holding farmer families across the country.',
    department: 'Ministry of Agriculture and Farmers Welfare',
    category: 'Agriculture & Farming',
    schemeType: 'Central Government',
    benefitType: 'Direct Cash Transfer',
    maxBenefitAmount: 6000,
    officialWebsite: 'https://pmkisan.gov.in',
    applicationLink: 'https://pmkisan.gov.in/RegistrationFormNew.aspx',
    pdfGuideUrl: 'https://pmkisan.gov.in/Documents/OperationalGuidelines.pdf',
    stateAvailability: ['All India'],
    eligibility: {
      minAge: 18,
      maxAge: 75,
      maxAnnualFamilyIncome: 500000,
      requiresLandHolding: true,
      allowedOccupations: ['Farmer', 'Agricultural Worker', 'Self-Employed'],
      allowedCategories: ['General', 'OBC', 'SC', 'ST', 'EWS'],
      customConditions: ['Must own cultivable agricultural land registered in official state revenue records']
    },
    benefitsList: [
      '₹6,000 guaranteed annual direct cash transfer in 3 installments of ₹2,000',
      'Direct Benefit Transfer (DBT) straight into Aadhaar-linked bank account',
      'Access to Kisan Credit Card (KCC) with subsidized loans up to ₹3 Lakh at 4% interest'
    ],
    requiredDocuments: ['Aadhaar Card', 'Land Ownership Record (7/12 or Khatauni)', 'Bank Account Passbook', 'Active Mobile Number'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'Access Portal & Start New Registration', 
        detail: 'Visit official Portal (pmkisan.gov.in) -> Go to "Farmers Corner" -> Click "New Farmer Registration". Choose Rural or Urban Farmer registration.' 
      },
      { 
        stepNumber: 2, 
        title: 'Aadhaar & Mobile Authentication', 
        detail: 'Enter your 12-digit Aadhaar Number, active Mobile Number, and select your State. Solve captcha and click "Send OTP". Enter OTP received on your Aadhaar-linked phone.' 
      },
      { 
        stepNumber: 3, 
        title: 'Fill Personal & Land Revenue Details', 
        detail: 'Select District, Sub-District, Block, and Village. Enter Khatauni/Khasra land survey number, land owner name, date of transfer, and total area in hectares as per official land record.' 
      },
      { 
        stepNumber: 4, 
        title: 'Upload Documents & Mandatory e-KYC', 
        detail: 'Upload scanned PDF of Land Ownership Record (below 200KB) and Bank Passbook. Complete Aadhaar e-KYC via face auth or mobile OTP. Click "Save & Submit". Note down the Application Reference ID.' 
      }
    ],
    faqs: [
      { question: 'Are tenant farmers eligible?', answer: 'No, only farmers with cultivable land registered in their own name are eligible.' },
      { question: 'Is an income tax payer eligible?', answer: 'No, any family member who paid income tax in the last assessment year is excluded.' },
      { question: 'How to check PM Kisan installment status?', answer: 'Visit pmkisan.gov.in -> Farmers Corner -> "Know Your Status" -> Enter Registration Number or Mobile Number.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-06-15',
    contactHelpdesk: '155261 / 011-24300606',
    viewsCount: 45200,
    bookmarkCount: 12400,
    rating: 4.8,
    isFeatured: true
  },

  // 2. Central Business Loan
  {
    id: 'pm-mudra-yojana',
    title: 'Pradhan Mantri MUDRA Yojana (PMMY)',
    shortDescription: 'Collateral-free loans up to ₹20 Lakh for non-corporate, non-farm small/micro enterprises for business setup and expansion.',
    fullDescription: 'PMMY provides loans up to 20 Lakhs to micro and small business entities under three categories: Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakh), and Tarun (₹5 Lakh to ₹20 Lakh). The scheme requires zero collateral and offers subsidized interest rates.',
    department: 'Ministry of Finance / SIDBI',
    category: 'Business, MSME & Startups',
    schemeType: 'Central Government',
    benefitType: 'Subsidized Loan',
    maxBenefitAmount: 2000000,
    interestRate: 8.5,
    officialWebsite: 'https://www.mudra.org.in',
    applicationLink: 'https://www.udyamimitra.in',
    pdfGuideUrl: 'https://www.mudra.org.in/Offerings',
    stateAvailability: ['All India'],
    eligibility: {
      minAge: 18,
      maxAge: 65,
      isBusinessOwner: true,
      allowedOccupations: ['Business Owner', 'Entrepreneur', 'Self-Employed', 'Artisan', 'Shopkeeper'],
      customConditions: ['Business must be non-farm income generating activity in manufacturing, trading, or service sector']
    },
    benefitsList: [
      'Collateral-free loan from ₹50,000 up to ₹20,000,000',
      'Zero processing fee for Shishu & Kishore categories',
      'Mudra Card issued for convenient working capital withdrawal'
    ],
    requiredDocuments: ['Aadhaar Card', 'PAN Card', 'Proof of Business Identity (GST / Shop Act / Udyam Registration)', 'Bank Account Statement (6 months)', 'Project Report / Business Plan'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'Choose Loan Category', 
        detail: 'Determine required funding amount: Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakh), or Tarun / Tarun Plus (₹5 Lakh to ₹20 Lakh).' 
      },
      { 
        stepNumber: 2, 
        title: 'Register on JanSamarth / UdyamiMitra Portal', 
        detail: 'Go to Udyamimitra portal (udyamimitra.in) or jansamarth.in. Click "Apply for Business Loan" and register with Aadhaar and Mobile Number.' 
      },
      { 
        stepNumber: 3, 
        title: 'Fill Application & Upload Business Plan', 
        detail: 'Fill applicant profile, business location, financial projections, estimated sales, equipment quotation, and Udyam Registration Number.' 
      },
      { 
        stepNumber: 4, 
        title: 'Select Preferred Bank & Submit', 
        detail: 'Choose up to 3 preferred Commercial Banks / Regional Rural Banks / Small Finance Banks. Submit application. Track loan sanction status online.' 
      }
    ],
    faqs: [
      { question: 'Is security or collateral needed?', answer: 'No collateral security or third-party guarantee is required for Mudra loans.' },
      { question: 'Can female business owners get interest concession?', answer: 'Yes, selected NBFCs and public sector banks offer 0.25% interest rate rebate for women entrepreneurs.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-07-01',
    contactHelpdesk: '1800-180-1111 / 1800-11-0001',
    viewsCount: 68900,
    bookmarkCount: 24100,
    rating: 4.9,
    isFeatured: true
  },

  // 3. Central Artisans & Traditional Crafts
  {
    id: 'pm-vishwakarma-2026',
    title: 'PM Vishwakarma Yojana',
    shortDescription: 'Collateral-free loan up to ₹3 Lakh at 5% interest, toolkits incentive of ₹15,000, and skill training for traditional artisans & craftspeople.',
    fullDescription: 'PM Vishwakarma aims to strengthen and nurture the Guru-Shishya parampara or family-based practice of traditional skills by artisans and craftspeople working with hands and tools. Covers 18 traditional trades including Carpenters, Blacksmiths, Goldsmiths, Potters, Tailors, and Masons.',
    department: 'Ministry of Micro, Small and Medium Enterprises (MSME)',
    category: 'Employment & Skill Training',
    schemeType: 'Central Government',
    benefitType: 'Subsidized Loan',
    maxBenefitAmount: 300000,
    interestRate: 5.0,
    officialWebsite: 'https://pmvishwakarma.gov.in',
    applicationLink: 'https://pmvishwakarma.gov.in/Registration',
    pdfGuideUrl: 'https://pmvishwakarma.gov.in/Home/Guidelines',
    stateAvailability: ['All India'],
    eligibility: {
      minAge: 18,
      allowedOccupations: ['Artisan', 'Self-Employed', 'Craftsperson'],
      customConditions: ['Must be working in one of the 18 traditional family trades using hands and tools']
    },
    benefitsList: [
      'PM Vishwakarma Digital Certificate and ID Card recognition',
      'Basic Skill Training (5-7 days) with stipend of ₹500 per day',
      '₹15,000 Toolkit Incentive voucher credited to digital wallet',
      'Collateral-free credit support: 1st tranche ₹1 Lakh, 2nd tranche ₹2 Lakh at 5% concessional interest rate'
    ],
    requiredDocuments: ['Aadhaar Card', 'Active Mobile Number', 'Bank Account Passbook', 'Ration Card'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'CSC Biometric Verification', 
        detail: 'Visit nearest Common Service Center (CSC) or visit pmvishwakarma.gov.in. Authenticate fingerprint/iris scan with Aadhaar.' 
      },
      { 
        stepNumber: 2, 
        title: 'Trade Selection & Gram Panchayat Verification', 
        detail: 'Select your trade out of 18 traditional crafts (e.g. Carpenter, Potter, Tailor, Barber, Mason). Application is verified by Gram Panchayat Sarpanch or Executive Officer of Urban Local Body (ULB).' 
      },
      { 
        stepNumber: 3, 
        title: 'Basic Skill Training & Stipend', 
        detail: 'Upon verification, complete 5-7 days basic skill training course. Receive ₹500/day daily stipend and ₹15,000 digital toolkit voucher.' 
      },
      { 
        stepNumber: 4, 
        title: 'First Tranche Credit Disbursement', 
        detail: 'Receive 1st credit tranche of ₹1,00,000 at 5% interest rate directly in bank account. Repay in 18 months to unlock 2nd tranche of ₹2,00,000.' 
      }
    ],
    faqs: [
      { question: 'How many family members can register?', answer: 'The scheme benefit is restricted to one member per family.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-06-28',
    contactHelpdesk: '1800-267-7777',
    viewsCount: 54100,
    bookmarkCount: 18900,
    rating: 4.8,
    isFeatured: true
  },

  // 4. Central Education - NSP National Scholarship Portal
  {
    id: 'national-scholarship-portal-nsp',
    title: 'National Scholarship Portal (NSP) Central Sector Schemes',
    shortDescription: 'Scholarships up to ₹50,000/year for Pre-Matric, Post-Matric, and Higher Education students belonging to SC/ST/OBC/EWS/Minorities.',
    fullDescription: 'National Scholarship Portal (NSP) is a one-stop digital portal providing central government scholarship schemes implemented by Ministry of Education, Ministry of Social Justice, Ministry of Tribal Affairs, and Ministry of Minority Affairs. Offers direct tuition fee reimbursement and maintenance allowance.',
    department: 'Ministry of Education & Ministry of Social Justice',
    category: 'Education & Scholarships',
    schemeType: 'Central Government',
    benefitType: 'Scholarship',
    maxBenefitAmount: 50000,
    officialWebsite: 'https://scholarships.gov.in',
    applicationLink: 'https://scholarships.gov.in/FreshNspRegistration',
    pdfGuideUrl: 'https://scholarships.gov.in/public/NSP_Student_Manual.pdf',
    stateAvailability: ['All India'],
    eligibility: {
      minAge: 6,
      maxAge: 30,
      isStudent: true,
      maxAnnualFamilyIncome: 250000,
      allowedEducation: ['Class 1 to 10', 'Class 11 & 12', 'Undergraduate (BA/BSc/BCom/BTech)', 'Postgraduate'],
      allowedCategories: ['General', 'OBC', 'SC', 'ST', 'EWS', 'Minority'],
      customConditions: ['Must have secured at least 50% marks in the previous final examination']
    },
    benefitsList: [
      'Tuition fee reimbursement up to ₹50,000 directly credited to student bank account',
      'Monthly maintenance stipend of ₹1,000 to ₹2,500 for hostellers & day scholars',
      'Single application window for all central scholarship schemes across India'
    ],
    requiredDocuments: ['Aadhaar Card', 'Mark sheet of previous academic year', 'Income Certificate issued by Revenue Authority', 'Caste / Minority Certificate', 'Bonafide Student Certificate from School/College', 'Bank Account Passbook'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'One-Time Registration (OTR)', 
        detail: 'Visit scholarships.gov.in -> Click "New Registration" / "OTR". Complete facial or mobile OTP verification with Aadhaar.' 
      },
      { 
        stepNumber: 2, 
        title: 'Fill Academic Profile', 
        detail: 'Enter UDISE / AISHE code of your school or college, course name, roll number, year of admission, and previous exam score percentage.' 
      },
      { 
        stepNumber: 3, 
        title: 'Select Matching Scheme & Upload Docs', 
        detail: 'Portal automatically displays eligible schemes. Select your scheme, upload income certificate and bonafide certificate (PDF under 200KB).' 
      },
      { 
        stepNumber: 4, 
        title: 'Institute Verification & DBT Credit', 
        detail: 'Submit application. Institute Nodal Officer verifies form online. Scholarship is disbursed straight to Aadhaar-seeded bank account.' 
      }
    ],
    faqs: [
      { question: 'Can I apply for more than one scholarship on NSP?', answer: 'No, a student can avail only one scholarship scheme on NSP during an academic year.' },
      { question: 'Is Aadhaar mandatory for NSP?', answer: 'Yes, Aadhaar authentication is mandatory for OTR and DBT fund transfer.' }
    ],
    deadline: '2026-10-31',
    lastUpdated: '2026-07-15',
    contactHelpdesk: '0120-6619540 / helpdesk@nsp.gov.in',
    viewsCount: 72100,
    bookmarkCount: 31200,
    rating: 4.9,
    isFeatured: true
  },

  // 5. Central MSME Loan & Subsidy - PMEGP
  {
    id: 'pmegp-subsidy-loan',
    title: 'Prime Minister Employment Generation Programme (PMEGP)',
    shortDescription: 'Government subsidy up to 35% on micro-enterprise project loans up to ₹50 Lakh in manufacturing and ₹20 Lakh in service sector.',
    fullDescription: 'PMEGP is a major credit-linked subsidy program administered by KVIC (Khadi and Village Industries Commission). It helps unemployed youth and budding entrepreneurs set up micro-enterprises in manufacturing and service sectors with capital subsidy up to 35%.',
    department: 'Khadi & Village Industries Commission (KVIC) / MSME',
    category: 'Business, MSME & Startups',
    schemeType: 'Central Government',
    benefitType: 'Subsidy',
    maxBenefitAmount: 1750000,
    subsidyPercentage: 35,
    officialWebsite: 'https://www.kviconline.gov.in/pmegpeportal/pmegpweb/index.jsp',
    applicationLink: 'https://www.kviconline.gov.in/pmegpeportal/pmegpweb/index.jsp',
    pdfGuideUrl: 'https://www.kviconline.gov.in/pmegpeportal/pmegpweb/docs/pmegpscheme.pdf',
    stateAvailability: ['All India'],
    eligibility: {
      minAge: 18,
      isBusinessOwner: true,
      allowedOccupations: ['Entrepreneur', 'Self-Employed', 'Business Owner'],
      customConditions: ['Minimum 8th standard pass required for project cost above ₹10 Lakh in manufacturing or ₹5 Lakh in service']
    },
    benefitsList: [
      'Up to 35% margin money subsidy (Rural Special Category) or 25% (Rural General) credited to bank',
      'Bank credit loan up to ₹50 Lakh for Manufacturing unit and ₹20 Lakh for Service unit',
      'EDP (Entrepreneurship Development Programme) training included free of cost'
    ],
    requiredDocuments: ['Aadhaar Card', 'PAN Card', 'Project Report / Detailed Cost Estimate', 'Highest Educational Qualification Certificate', 'Caste / Special Category Certificate', 'Rural Area Certificate (issued by Sarpanch)'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'Apply on PMEGP Online Portal', 
        detail: 'Visit kviconline.gov.in/pmegpeportal -> Click "Application for New Unit". Enter Aadhaar number and personal details.' 
      },
      { 
        stepNumber: 2, 
        title: 'Select Sponsoring Agency & Bank', 
        detail: 'Choose KVIC, KVIB, or DIC as sponsoring agency. Select preferred financing Bank branch near proposed project location.' 
      },
      { 
        stepNumber: 3, 
        title: 'Upload Project Report & Certificates', 
        detail: 'Upload Detailed Project Report (DPR) showing capital cost, working capital, estimated sales, score sheet, and category certificate.' 
      },
      { 
        stepNumber: 4, 
        title: 'District Task Force Review & Loan Sanction', 
        detail: 'Task Force Committee interviews applicant. Upon approval, bank sanctions loan and KVIC deposits margin money subsidy into 3-year locked deposit.' 
      }
    ],
    faqs: [
      { question: 'Is collateral needed for PMEGP loan?', answer: 'No collateral required for loans up to ₹10 Lakh covered under CGTMSE guarantee scheme.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-06-20',
    contactHelpdesk: '1800-3000-0039 / pmegp.kvic@gov.in',
    viewsCount: 49300,
    bookmarkCount: 19800,
    rating: 4.8,
    isFeatured: true
  },

  // 6. Central Housing - PMAY
  {
    id: 'pmay-housing-yojana',
    title: 'Pradhan Mantri Awas Yojana (PMAY Urban / Gramin)',
    shortDescription: 'Financial assistance of up to ₹2.67 Lakh for house construction or purchase for EWS, LIG, and rural homeless families.',
    fullDescription: 'Pradhan Mantri Awas Yojana provides a pucca house with basic amenities to all eligible urban and rural households. Offers interest subsidy under Credit Linked Subsidy Scheme (CLSS) and direct cash grant of ₹1.2 Lakh to ₹2.5 Lakh for construction.',
    department: 'Ministry of Housing and Urban Affairs / Ministry of Rural Development',
    category: 'Housing & Urban Infrastructure',
    schemeType: 'Central Government',
    benefitType: 'Subsidy',
    maxBenefitAmount: 267000,
    officialWebsite: 'https://pmaymis.gov.in',
    applicationLink: 'https://pmaymis.gov.in/Open/Find_Beneficiary_Details.aspx',
    pdfGuideUrl: 'https://pmaymis.gov.in/assets/pdf/PMAY_UG_Guidelines.pdf',
    stateAvailability: ['All India'],
    eligibility: {
      minAge: 18,
      maxAge: 70,
      maxAnnualFamilyIncome: 600000,
      customConditions: ['Family must not own a pucca house anywhere in India in any family member name']
    },
    benefitsList: [
      'Up to ₹2.67 Lakh interest subsidy under Credit Linked Subsidy Scheme (CLSS) for home loans',
      '₹1.20 Lakh to ₹1.30 Lakh direct construction grant for PMAY-Gramin beneficiaries',
      'Mandatory female ownership or joint ownership of house encouraging women empowerment'
    ],
    requiredDocuments: ['Aadhaar Card of all family members', 'Income Certificate / Salary Slip', 'Affidavit of No Pucca House ownership', 'Bank Account Details', 'Land Property document or Possession Letter'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'Check Eligibility & Visit Portal', 
        detail: 'Visit pmaymis.gov.in -> Click "Citizen Assessment" -> Choose "For Slum Dwellers" or "Benefit under 3 components".' 
      },
      { 
        stepNumber: 2, 
        title: 'Enter Aadhaar Details', 
        detail: 'Input your Aadhaar number and Name as per Aadhaar. Click "Check".' 
      },
      { 
        stepNumber: 3, 
        title: 'Fill Assessment Form', 
        detail: 'Enter personal details, family members list, current housing condition, present address, contact number, and annual family income.' 
      },
      { 
        stepNumber: 4, 
        title: 'Save Assessment ID & Track Status', 
        detail: 'Submit form and save Assessment ID. Track verification status on "Track Your Assessment Status" page.' 
      }
    ],
    faqs: [
      { question: 'What is the income cap for EWS category?', answer: 'Annual family income up to ₹3 Lakh for EWS and ₹3 Lakh to ₹6 Lakh for LIG.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-07-05',
    contactHelpdesk: '1800-11-3377 / 1800-11-3388',
    viewsCount: 88100,
    bookmarkCount: 34500,
    rating: 4.9,
    isFeatured: true
  },

  // 7. Central Healthcare - Ayushman Bharat PM-JAY
  {
    id: 'ayushman-bharat-pmjay',
    title: 'Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PM-JAY)',
    shortDescription: 'Free cashless health insurance coverage up to ₹5,00,000 per family per year for secondary and tertiary hospital treatment across India.',
    fullDescription: 'PM-JAY is the world’s largest government-funded health assurance scheme. Provides a health cover of ₹5 Lakh per family per year for secondary and tertiary care hospitalization across public and empanelled private hospitals in India.',
    department: 'National Health Authority (NHA) / Ministry of Health',
    category: 'Healthcare & Insurance',
    schemeType: 'Central Government',
    benefitType: 'Free Service/Insurance',
    maxBenefitAmount: 500000,
    officialWebsite: 'https://nha.gov.in/PM-JAY',
    applicationLink: 'https://beneficiary.nha.gov.in',
    pdfGuideUrl: 'https://nha.gov.in/img/resources/PMJAY_Guidelines.pdf',
    stateAvailability: ['All India'],
    eligibility: {
      maxAnnualFamilyIncome: 250000,
      customConditions: ['Beneficiaries are identified based on SECC 2011 data or Ration Card / Ayushman Vaya Vandana Card for seniors aged 70+']
    },
    benefitsList: [
      'Cashless and paperless access to healthcare services up to ₹5 Lakh per family annually',
      'Covers 1,900+ medical and surgical procedures including oncology, cardiology, orthopedics',
      'No cap on family size, age, or gender; covers pre-existing conditions from Day 1'
    ],
    requiredDocuments: ['Aadhaar Card', 'Ration Card / SECC Household ID', 'Active Mobile Number'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'Check Am I Eligible Portal', 
        detail: 'Visit beneficiary.nha.gov.in or download Ayushman App. Click "Beneficiary Login" and authenticate via Mobile OTP.' 
      },
      { 
        stepNumber: 2, 
        title: 'Search Household Name', 
        detail: 'Select State, Scheme (PMJAY), District, and Search By (Aadhaar Number / Family ID / Ration Card).' 
      },
      { 
        stepNumber: 3, 
        title: 'Complete e-KYC', 
        detail: 'Click "Do e-KYC" next to family member name. Verify Aadhaar via OTP or Face Authentication.' 
      },
      { 
        stepNumber: 4, 
        title: 'Download Ayushman Card', 
        detail: 'Once approved by District Authority (usually within 24 hours), download PVC Ayushman Card instantly.' 
      }
    ],
    faqs: [
      { question: 'Is Ayushman Card available for senior citizens aged 70+ regardless of income?', answer: 'Yes! Under Ayushman Vaya Vandana scheme, all seniors aged 70+ get an independent ₹5 Lakh health top-up cover.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-07-12',
    contactHelpdesk: '14555 / 1800-111-565',
    viewsCount: 105400,
    bookmarkCount: 42100,
    rating: 4.9,
    isFeatured: true
  },

  // 8. Central Girl Child Financial Security - Sukanya Samriddhi
  {
    id: 'sukanya-samriddhi-yojana',
    title: 'Sukanya Samriddhi Yojana (SSY)',
    shortDescription: 'High-yield government savings scheme for girl children under 10 years offering 8.2% interest rate and Section 80C tax exemption.',
    fullDescription: 'Sukanya Samriddhi Yojana is a Small Savings Scheme backed by Government of India for the financial security of girl children. Provides highest interest rate among small savings schemes (8.2% p.a.) with tax deduction under Section 80C up to ₹1.5 Lakh.',
    department: 'Department of Posts / Ministry of Finance',
    category: 'Financial & Social Security',
    schemeType: 'Central Government',
    benefitType: 'Tax Relief',
    maxBenefitAmount: 150000,
    interestRate: 8.2,
    officialWebsite: 'https://www.indiapost.gov.in',
    applicationLink: 'https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Savings-Schemes.aspx',
    stateAvailability: ['All India'],
    eligibility: {
      maxAge: 10,
      targetGender: 'Female',
      isForWomenOnly: true,
      customConditions: ['Account can be opened by parent/guardian for a girl child below 10 years of age (max 2 girl children per family)']
    },
    benefitsList: [
      'High guaranteed government interest rate (8.2% p.a., compounded annually)',
      'Triple Tax Benefit (EEE): Investment tax exempt under 80C, interest earned is tax-free, and maturity amount is 100% tax-free',
      'Partial withdrawal up to 50% allowed for higher education once girl reaches 18 years'
    ],
    requiredDocuments: ['Birth Certificate of Girl Child', 'Aadhaar Card of Parent/Guardian', 'PAN Card of Parent/Guardian', 'Address Proof', '2 Passport Photos of Parent & Child'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'Visit Post Office or Authorized Bank Branch', 
        detail: 'Visit nearest India Post Office branch or authorized public/private commercial bank (SBI, PNB, HDFC, ICICI).' 
      },
      { 
        stepNumber: 2, 
        title: 'Fill SSY Account Opening Form', 
        detail: 'Collect SSY Form-1. Fill details of girl child (name, date of birth) and parent/guardian.' 
      },
      { 
        stepNumber: 3, 
        title: 'Submit Identity Proofs & Initial Deposit', 
        detail: 'Attach copy of Birth Certificate and parent Aadhaar/PAN. Make minimum initial deposit (minimum ₹250, maximum ₹1,50,000 per financial year).' 
      },
      { 
        stepNumber: 4, 
        title: 'Collect SSY Passbook', 
        detail: 'Receive physical SSY Passbook containing Account Number and Customer ID for online netbanking deposit tracking.' 
      }
    ],
    faqs: [
      { question: 'What is the minimum annual deposit to keep account active?', answer: 'Minimum ₹250 deposit per financial year is required to avoid penalty.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-06-18',
    contactHelpdesk: '1800-266-6868',
    viewsCount: 52400,
    bookmarkCount: 21800,
    rating: 4.9
  },

  // 9. Central Women & SC/ST Business Loan - Stand Up India
  {
    id: 'stand-up-india-scheme',
    title: 'Stand Up India Scheme',
    shortDescription: 'Bank loans from ₹10 Lakh to ₹1 Crore for SC/ST and Women entrepreneurs to set up greenfield enterprises.',
    fullDescription: 'Stand Up India facilitates bank loans between ₹10 Lakh and ₹1 Crore to at least one SC or ST borrower and at least one Woman borrower per bank branch for setting up a greenfield enterprise in manufacturing, services, agri-allied, or trading sector.',
    department: 'Department of Financial Services / SIDBI',
    category: 'Business, MSME & Startups',
    schemeType: 'Central Government',
    benefitType: 'Subsidized Loan',
    maxBenefitAmount: 10000000,
    interestRate: 7.75,
    officialWebsite: 'https://www.standupmitra.in',
    applicationLink: 'https://www.standupmitra.in/Login/Register',
    pdfGuideUrl: 'https://www.standupmitra.in/Home/SUISchemeGuidelines',
    stateAvailability: ['All India'],
    eligibility: {
      minAge: 18,
      isBusinessOwner: true,
      allowedCategories: ['SC', 'ST', 'EWS'],
      customConditions: ['Must be an SC/ST or Female entrepreneur setting up a new (greenfield) project. In case of non-individual enterprise, 51% shareholding must be held by SC/ST or Woman']
    },
    benefitsList: [
      'Loan facility from ₹10 Lakh up to ₹1 Crore covering 85% of project cost',
      'Composite loan (Term Loan + Working Capital) repayable over 7 years with 18 months moratorium',
      'Handholding support provided through SIDBI portal for project report creation and regulatory approvals'
    ],
    requiredDocuments: ['Aadhaar Card', 'PAN Card', 'Caste Certificate (for SC/ST applicants)', 'Proof of Business Premises / Lease Agreement', 'Project Report with financial projections', 'Bank Account Statement (last 6 months)'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'Register on Stand Up Mitra Portal', 
        detail: 'Visit standupmitra.in -> Click "Register". Select applicant type (Woman / SC / ST).' 
      },
      { 
        stepNumber: 2, 
        title: 'Complete Handholding / Self-Assessment', 
        detail: 'Fill business proposal details. If handholding is needed, select nearby agency (NABARD, KVIC, DIC) for project guidance.' 
      },
      { 
        stepNumber: 3, 
        title: 'Upload Project Report', 
        detail: 'Upload Detailed Project Report (DPR), machinery quotations, and promoter contribution proof (minimum 15%).' 
      },
      { 
        stepNumber: 4, 
        title: 'Bank Application Submission', 
        detail: 'Select target scheduled bank branch. Portal forwards digital application directly to Lead District Manager and Branch Manager for sanction.' 
      }
    ],
    faqs: [
      { question: 'What is a greenfield project?', answer: 'Greenfield project means the first time venture of the beneficiary in manufacturing, services, trading, or agri-allied sector.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-06-22',
    contactHelpdesk: '1800-180-1122 / support@standupmitra.in',
    viewsCount: 36200,
    bookmarkCount: 14800,
    rating: 4.8
  },

  // 10. Central Startup Funding - SISFS
  {
    id: 'startup-india-seed-fund',
    title: 'Startup India Seed Fund Scheme (SISFS)',
    shortDescription: 'Financial assistance up to ₹20 Lakh grant for proof of concept/prototype and ₹50 Lakh convertible debentures for commercialization.',
    fullDescription: 'Startup India Seed Fund Scheme provides financial support to early-stage startups for proof of concept, prototype development, product trials, market entry, and commercialization. Administered through empanelled incubators across India.',
    department: 'DPIIT / Ministry of Commerce and Industry',
    category: 'Business, MSME & Startups',
    schemeType: 'Central Government',
    benefitType: 'Grant',
    maxBenefitAmount: 5000000,
    officialWebsite: 'https://seedfund.startupindia.gov.in',
    applicationLink: 'https://seedfund.startupindia.gov.in/incubatordetail',
    pdfGuideUrl: 'https://seedfund.startupindia.gov.in/static/media/SISFS_Guidelines.pdf',
    stateAvailability: ['All India'],
    eligibility: {
      isStartupFounder: true,
      customConditions: ['Startup recognized by DPIIT, incorporated not more than 2 years ago, with innovative solution using technology']
    },
    benefitsList: [
      'Grant up to ₹20 Lakh for validation of proof of concept, prototype development, and product trial',
      'Investment up to ₹50 Lakh via debt/convertible debentures for market entry and commercialization',
      'Free incubator workspace, mentorship, and investor networking'
    ],
    requiredDocuments: ['DPIIT Recognition Certificate', 'Certificate of Incorporation / MCA Registration', 'Pitch Deck / Business Presentation', 'Founders Aadhaar & PAN Cards', 'Bank Account Passbook of Private Limited / LLP'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'Get DPIIT Recognition', 
        detail: 'Register startup on startupindia.gov.in and obtain DPIIT Certificate of Recognition.' 
      },
      { 
        stepNumber: 2, 
        title: 'Visit SISFS Portal', 
        detail: 'Go to seedfund.startupindia.gov.in -> Click "Apply for Seed Fund" -> Login with Startup India credentials.' 
      },
      { 
        stepNumber: 3, 
        title: 'Select Incubators & Submit Proposal', 
        detail: 'Select up to 3 preference incubators empanelled under SISFS. Fill pitch proposal details, problem statement, and funding requirement.' 
      },
      { 
        stepNumber: 4, 
        title: 'Incubator Presentation & Disbursement', 
        detail: 'Incubator Seed Evaluation Committee (ISEC) evaluates application. Selected startups receive funds milestone-wise.' 
      }
    ],
    faqs: [
      { question: 'Is equity taken for the ₹20 Lakh grant component?', answer: 'No equity or repayment is required for the ₹20 Lakh grant component.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-07-08',
    contactHelpdesk: '1800-115-565 / dipp-startups@nic.in',
    viewsCount: 42800,
    bookmarkCount: 17900,
    rating: 4.9,
    isFeatured: true
  },

  // 11. Private / CSR - Tata Trusts Scholarship
  {
    id: 'tata-trusts-means-scholarship',
    title: 'Tata Trusts Means Grant & Higher Education Scholarship',
    shortDescription: 'Private CSR grant up to ₹2,00,000/year for meritorious undergraduate and postgraduate students pursuing Bachelor/Master degrees in India.',
    fullDescription: 'Tata Trusts provides financial assistance to deserving students pursuing Higher Education in engineering, medical, science, and professional courses. Selection is based on academic excellence and family annual income under ₹4.5 Lakh.',
    department: 'Tata Trusts Philanthropy Division',
    category: 'Private & CSR Grants',
    schemeType: 'Private/CSR Trust',
    benefitType: 'Scholarship',
    maxBenefitAmount: 200000,
    officialWebsite: 'https://www.tatatrusts.org',
    applicationLink: 'https://www.tatatrusts.org/our-work/individual-grants-programme/education-grants',
    stateAvailability: ['All India'],
    eligibility: {
      minAge: 16,
      maxAge: 30,
      isStudent: true,
      maxAnnualFamilyIncome: 450000,
      allowedEducation: ['Undergraduate (BA/BSc/BCom/BTech)', 'Postgraduate (MA/MSc/MTech)', 'Medical (MBBS)'],
      customConditions: ['Must have scored minimum 60% marks in previous academic qualifying examination']
    },
    benefitsList: [
      'Up to ₹2,00,000 annual non-repayable education grant covering tuition fees & hostel expenses',
      'Mentorship from Tata Group professionals and internship opportunities',
      'Special preference for single mother families and divyangjan students'
    ],
    requiredDocuments: ['Aadhaar Card', 'Mark Sheets of 10th, 12th & Semester Exams', 'Income Certificate / Salary Certificate', 'Current Year College Fee Structure & Receipt', 'Bank Account Details'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'Online Application Portal', 
        detail: 'Register on Tata Trusts portal (tatatrusts.org) during open application window (July-October).' 
      },
      { 
        stepNumber: 2, 
        title: 'Upload Marksheets & Income Proof', 
        detail: 'Submit certified copies of previous exam marksheets and Tehsildar income proof.' 
      },
      { 
        stepNumber: 3, 
        title: 'Interview Evaluation', 
        detail: 'Shortlisted candidates attend online panel interaction.' 
      },
      { 
        stepNumber: 4, 
        title: 'Grant Sanction', 
        detail: 'Scholarship amount disbursed directly to institution bank account.' 
      }
    ],
    faqs: [
      { question: 'Is this scholarship open for private college students?', answer: 'Yes, as long as the institute is NAAC/AICTE accredited in India.' }
    ],
    deadline: '2026-10-15',
    lastUpdated: '2026-07-10',
    contactHelpdesk: '022-66658282 / igp@tatatrusts.org',
    viewsCount: 41200,
    bookmarkCount: 16400,
    rating: 4.9,
    isFeatured: true
  },

  // 12. Private / CSR - Reliance Foundation Scholarship
  {
    id: 'reliance-foundation-scholarship',
    title: 'Reliance Foundation Undergraduate Scholarship',
    shortDescription: 'Merit-cum-means scholarship of up to ₹2,00,000 for undergraduate students pursuing degree courses across all streams in India.',
    fullDescription: 'Reliance Foundation selects 5,000 undergraduate scholars every year for grants up to ₹2 Lakh over the duration of their degree program. Open to first-year students enrolled in any full-time undergraduate degree program in India.',
    department: 'Reliance Foundation Philanthropy Division',
    category: 'Private & CSR Grants',
    schemeType: 'Private/CSR Trust',
    benefitType: 'Scholarship',
    maxBenefitAmount: 200000,
    officialWebsite: 'https://www.scholarships.reliancefoundation.org',
    applicationLink: 'https://www.scholarships.reliancefoundation.org/UG_Scholarship.aspx',
    stateAvailability: ['All India'],
    eligibility: {
      minAge: 17,
      maxAge: 25,
      isStudent: true,
      maxAnnualFamilyIncome: 1500000,
      allowedEducation: ['Undergraduate (BA/BSc/BCom/BTech)'],
      customConditions: ['Must be in 1st year of full-time undergraduate degree with minimum 60% in 12th class']
    },
    benefitsList: [
      'Grant of up to ₹2,00,000 for the duration of the degree course',
      'Access to vibrant alumni network, leadership workshops, and career development programs',
      'No obligation to work for Reliance Group'
    ],
    requiredDocuments: ['Aadhaar Card', 'Class 12th Mark sheet', 'Family Income Proof', 'Bonafide Student Certificate from College'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'Aptitude Test', 
        detail: 'Complete 60-minute online aptitude test testing verbal, analytical, and numerical skills.' 
      },
      { 
        stepNumber: 2, 
        title: 'Submit Documents', 
        detail: 'Upload marksheets and income certificate on scholarships.reliancefoundation.org.' 
      },
      { 
        stepNumber: 3, 
        title: 'Merit List Declaration', 
        detail: '5,000 scholars selected based on aptitude score and financial need.' 
      },
      { 
        stepNumber: 4, 
        title: 'Direct Disbursement', 
        detail: 'Grant credited in annual installments into student bank account.' 
      }
    ],
    faqs: [
      { question: 'Is income cap strict?', answer: 'Preference is given to students with family income less than ₹2.5 Lakh per year.' }
    ],
    deadline: '2026-09-30',
    lastUpdated: '2026-07-02',
    contactHelpdesk: 'RF.Scholarships@reliancefoundation.org',
    viewsCount: 38900,
    bookmarkCount: 14200,
    rating: 4.9,
    isFeatured: true
  },

  // 13. State Government - Maharashtra (Ladki Bahin)
  {
    id: 'ladli-bahna-maharashtra-mp',
    title: 'Mukhyamantri Majhi Ladki Bahin Yojana (Maharashtra)',
    shortDescription: 'Monthly cash allowance of ₹1,500 transferred directly to women aged 21-65 years with annual family income below ₹2.5 Lakh.',
    fullDescription: 'Flagship welfare scheme of Government of Maharashtra aimed at providing economic independence, nutritional security, and financial dignity to women. ₹1,500 is directly credited on 15th of every month to Aadhaar-seeded bank accounts.',
    department: 'Department of Women and Child Development (Maharashtra Govt)',
    category: 'Women & Child Welfare',
    schemeType: 'State Government',
    benefitType: 'Direct Cash Transfer',
    maxBenefitAmount: 18000,
    officialWebsite: 'https://ladlibahin.maharashtra.gov.in',
    applicationLink: 'https://ladlibahin.maharashtra.gov.in/register',
    pdfGuideUrl: 'https://ladlibahin.maharashtra.gov.in/guidelines.pdf',
    stateAvailability: ['Maharashtra'],
    eligibility: {
      minAge: 21,
      maxAge: 65,
      targetGender: 'Female',
      isForWomenOnly: true,
      maxAnnualFamilyIncome: 250000,
      customConditions: ['Must be a permanent resident of Maharashtra with Aadhaar linked bank account']
    },
    benefitsList: [
      '₹1,500 per month (₹18,000 annually) direct cash assistance',
      'Exemption from income certificate if family holds Yellow or Orange Ration Card',
      'Free financial literacy and skill empowerment sessions'
    ],
    requiredDocuments: ['Aadhaar Card of Applicant', 'Domicile Certificate / Ration Card', 'Income Certificate (<2.5L)', 'Bank Account Passbook (Aadhaar Seeded)', 'Hamipatra (Self Declaration)'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'Download Nari Shakti Doot App or Visit Portal', 
        detail: 'Download official app or visit ladlibahin.maharashtra.gov.in or Anganwadi center.' 
      },
      { 
        stepNumber: 2, 
        title: 'E-KYC Verification', 
        detail: 'Authenticate biometric or OTP via Aadhaar card.' 
      },
      { 
        stepNumber: 3, 
        title: 'Upload Ration Card & Hamipatra', 
        detail: 'Attach Ration card and signed self-declaration form (Hamipatra).' 
      },
      { 
        stepNumber: 4, 
        title: 'Approval & Monthly Credit', 
        detail: 'Tehsildar approves application; ₹1,500 credited on 15th of every month.' 
      }
    ],
    faqs: [
      { question: 'Are married or widowed women eligible?', answer: 'Yes, married, unmarried, widowed, divorced, and destitute women are eligible.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-07-10',
    contactHelpdesk: '181 / 022-22027050',
    viewsCount: 112000,
    bookmarkCount: 45000,
    rating: 4.9,
    isFeatured: true
  },

  // 14. State Government - Uttar Pradesh (Kanya Sumangala)
  {
    id: 'mukhya-mantri-kanya-sumangala-up',
    title: 'Mukhya Mantri Kanya Sumangala Yojana (Uttar Pradesh)',
    shortDescription: 'Financial assistance of ₹25,000 provided in 6 stages from birth to graduation for girl children of UP resident families.',
    fullDescription: 'UP State Government scheme designed to prevent female foeticide, promote girl child birth, improve healthcare & education. Total benefit of ₹25,000 is disbursed across key milestones: birth, vaccination, Class 1, Class 6, Class 9, and Degree/Diploma admission.',
    department: 'Women and Child Development Department (Uttar Pradesh)',
    category: 'Women & Child Welfare',
    schemeType: 'State Government',
    benefitType: 'Direct Cash Transfer',
    maxBenefitAmount: 25000,
    officialWebsite: 'https://mksy.up.gov.in',
    applicationLink: 'https://mksy.up.gov.in/women_welfare/citizen/guest_user_registration.php',
    pdfGuideUrl: 'https://mksy.up.gov.in/guidelines.pdf',
    stateAvailability: ['Uttar Pradesh'],
    eligibility: {
      maxAge: 25,
      targetGender: 'Female',
      isForWomenOnly: true,
      maxAnnualFamilyIncome: 300000,
      customConditions: ['Family must be resident of UP with maximum 2 girl children in the family']
    },
    benefitsList: [
      '₹5,000 on birth of girl child',
      '₹2,000 on completing full immunization within 1 year',
      '₹3,000 on admission to Class 1, Class 6, and Class 9',
      '₹7,000 on passing Class 10/12 and enrolling in Degree/Diploma course'
    ],
    requiredDocuments: ['Domicile Certificate of UP', 'Aadhaar Card of Parent & Child', 'Income Certificate (<3L)', 'Birth Certificate of Girl Child', 'Bank Account Passbook'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'Citizen Portal Registration', 
        detail: 'Register on mksy.up.gov.in creating Citizen Login ID.' 
      },
      { 
        stepNumber: 2, 
        title: 'Select Stage Category', 
        detail: 'Choose applicable stage (Stage 1 to Stage 6).' 
      },
      { 
        stepNumber: 3, 
        title: 'Document Upload', 
        detail: 'Upload birth certificate, hospital discharge summary, or school admission receipt.' 
      },
      { 
        stepNumber: 4, 
        title: 'SDM Verification & Disbursement', 
        detail: 'District officer approves and transfers amount to parent account.' 
      }
    ],
    faqs: [
      { question: 'What if mother dies?', answer: 'Father or legal guardian can apply with father income certificate.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-06-20',
    contactHelpdesk: '1800-180-0300',
    viewsCount: 48200,
    bookmarkCount: 19100,
    rating: 4.8
  },

  // 15. State Government - Bihar Student Credit Card
  {
    id: 'bihar-student-credit-card',
    title: 'Bihar Student Credit Card Scheme (BSCCS)',
    shortDescription: 'Education loan up to ₹4 Lakh at 1% interest for girls/disabled and 4% for general students for higher education in India.',
    fullDescription: 'Under Bihar Vikas Mission, Government of Bihar provides education loan up to ₹4 Lakh to students who have passed 12th class for pursuing higher courses (B.Tech, MBBS, BBA, BCA, BSc, BA). Zero collateral required.',
    department: 'Education Department (Government of Bihar)',
    category: 'Education & Scholarships',
    schemeType: 'State Government',
    benefitType: 'Subsidized Loan',
    maxBenefitAmount: 400000,
    interestRate: 1.0,
    officialWebsite: 'https://www.7nishchay-yuvaupmission.bihar.gov.in',
    applicationLink: 'https://www.7nishchay-yuvaupmission.bihar.gov.in/addStudent',
    pdfGuideUrl: 'https://www.7nishchay-yuvaupmission.bihar.gov.in/resources/guidelines.pdf',
    stateAvailability: ['Bihar'],
    eligibility: {
      minAge: 17,
      maxAge: 25,
      isStudent: true,
      allowedEducation: ['Class 12', 'Undergraduate (BA/BSc/BCom/BTech)', 'Diploma'],
      customConditions: ['Must be a permanent resident of Bihar and passed 12th class from recognized Bihar board/CBSE']
    },
    benefitsList: [
      'Up to ₹4,00,000 education loan covering college fees, hostel fees, books & laptop purchase',
      'Ultra-low interest rate: 1% p.a. for female, transgender & divyangjan students; 4% for male students',
      'Repayment moratorium: Repayment starts 1 year after course completion or getting a job'
    ],
    requiredDocuments: ['10th & 12th Marksheet', 'Aadhaar Card of Student & Parent', 'Residential Domicile Certificate of Bihar', 'College Admission Letter & Fee Structure', '2 Passport Photos'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'Register on MNSSBY Portal', 
        detail: 'Register online on 7nishchay-yuvaupmission.bihar.gov.in.' 
      },
      { 
        stepNumber: 2, 
        title: 'DRCC Appointment', 
        detail: 'Book slot for physical document verification at District Registration and Counseling Center (DRCC).' 
      },
      { 
        stepNumber: 3, 
        title: 'DRCC Document Audit', 
        detail: 'Visit DRCC with original documents for instant biometric scanning.' 
      },
      { 
        stepNumber: 4, 
        title: 'Approval & Fund Transfer', 
        detail: 'Bihar State Single Window System disburses loan directly to college bank account.' 
      }
    ],
    faqs: [
      { question: 'Is co-applicant compulsory?', answer: 'Parent/guardian acts as co-applicant, but no property collateral is required.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-06-30',
    contactHelpdesk: '1800-3456-444',
    viewsCount: 61400,
    bookmarkCount: 22800,
    rating: 4.8
  },

  // 16. State Government - Gujarat (Mukhyamantri Amrutam)
  {
    id: 'ma-amrutam-gujarat-2026',
    title: 'Mukhyamantri Amrutam (MA) & MA Vatsalya Yojana (Gujarat)',
    shortDescription: 'Free tertiary healthcare coverage up to ₹5 Lakh per family per year for BPL and lower income families in Gujarat.',
    fullDescription: 'Gujarat State flagship health insurance scheme providing 100% cashless medical and surgical treatment for catastrophic illnesses including heart surgery, kidney transplant, neurosurgery, burns, and cancer treatment.',
    department: 'Health and Family Welfare Department (Government of Gujarat)',
    category: 'Healthcare & Insurance',
    schemeType: 'State Government',
    benefitType: 'Free Service/Insurance',
    maxBenefitAmount: 500000,
    officialWebsite: 'https://magujarat.com',
    applicationLink: 'https://magujarat.com/How_to_Apply.aspx',
    pdfGuideUrl: 'https://magujarat.com/guidelines.pdf',
    stateAvailability: ['Gujarat'],
    eligibility: {
      maxAnnualFamilyIncome: 400000,
      customConditions: ['Family must hold BPL ration card or annual income certificate below ₹4 Lakh issued by Mamlatdar']
    },
    benefitsList: [
      'Cashless coverage up to ₹5,00,000 per family per year for 1,700+ medical procedures',
      '₹300 travel allowance per hospital visit paid to beneficiary',
      'Covers all pre-existing conditions without any waiting period'
    ],
    requiredDocuments: ['Aadhaar Card of all family members', 'Income Certificate from Mamlatdar (<4L)', 'Gujarat Domicile Proof / Ration Card', 'Smart Card Fee ₹50'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'Visit Kiosk', 
        detail: 'Visit Civic Center, Kiosk at District Hospital, or E-Gram center.' 
      },
      { 
        stepNumber: 2, 
        title: 'Biometric Enrollment', 
        detail: 'Capture fingerprint and iris scan of all family members.' 
      },
      { 
        stepNumber: 3, 
        title: 'MA Smart Card Issue', 
        detail: 'Receive laminated MA Vatsalya Card instantly.' 
      }
    ],
    faqs: [
      { question: 'Is income certificate needed for BPL card holders?', answer: 'No, BPL card holders do not require separate income certificate.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-05-15',
    contactHelpdesk: '1800-233-1022',
    viewsCount: 39100,
    bookmarkCount: 15400,
    rating: 4.9
  },

  // 17. State Government - Gujarat MYSY Scholarship
  {
    id: 'mysy-gujarat-scholarship',
    title: 'Mukhyamantri Yuva Swavalamban Yojana (MYSY Gujarat)',
    shortDescription: 'Scholarship up to ₹2,00,000 per year covering 50% tuition fees + book stipend for meritorious Gujarat students.',
    fullDescription: 'MYSY scheme provides financial support to bright Gujarat students pursuing Engineering, Pharmacy, Medical, Nursing, and Diploma courses whose family income is less than ₹6 Lakh per annum.',
    department: 'Education Department (Government of Gujarat)',
    category: 'Education & Scholarships',
    schemeType: 'State Government',
    benefitType: 'Scholarship',
    maxBenefitAmount: 200000,
    officialWebsite: 'https://mysy.gujarat.gov.in',
    applicationLink: 'https://mysy.gujarat.gov.in/Notice/Fresh_Registration_Guidelines.pdf',
    pdfGuideUrl: 'https://mysy.gujarat.gov.in/Notice/Fresh_Registration_Guidelines.pdf',
    stateAvailability: ['Gujarat'],
    eligibility: {
      minAge: 16,
      maxAge: 25,
      isStudent: true,
      maxAnnualFamilyIncome: 600000,
      allowedEducation: ['Class 12', 'Undergraduate (BA/BSc/BCom/BTech)', 'Diploma'],
      customConditions: ['Must have secured 80% or more percentile in 10th/12th board examination']
    },
    benefitsList: [
      '50% tuition fee reimbursement up to ₹2,00,000/year for MBBS and ₹50,000 for Engineering',
      'Hostel & mess allowance of ₹1,200/month for 10 months',
      'One-time book equipment stipend of ₹5,000 for professional degree students'
    ],
    requiredDocuments: ['Aadhaar Card', '10th / 12th Board Marksheet', 'Income Certificate from Mamlatdar (<6L)', 'Admission Letter & Fee Receipt', 'Bank Passbook'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'Fresh Student Registration', 
        detail: 'Register on mysy.gujarat.gov.in. Select Board, Year of passing, and Roll Number.' 
      },
      { 
        stepNumber: 2, 
        title: 'Fill Application Details', 
        detail: 'Enter college AISHE code, course details, bank IFSC, and income certificate number.' 
      },
      { 
        stepNumber: 3, 
        title: 'Help Center Document Verification', 
        detail: 'Visit nearest designated Help Center (Government Engineering/Polytechnic College) for physical document verification.' 
      },
      { 
        stepNumber: 4, 
        title: 'Sanction & DBT Credit', 
        detail: 'State Nodal Officer approves scholarship; funds transferred to bank account.' 
      }
    ],
    faqs: [
      { question: 'Is percentile calculated or percentage?', answer: 'Eligibility is based on 80 percentile or above in 10th or 12th board exams.' }
    ],
    deadline: '2026-10-31',
    lastUpdated: '2026-06-25',
    contactHelpdesk: '079-26566000',
    viewsCount: 41900,
    bookmarkCount: 16700,
    rating: 4.8
  },

  // 18. State Government - Delhi (Jai Bhim Coaching)
  {
    id: 'jai-bhim-coaching-scheme-delhi',
    title: 'Jai Bhim Mukhyamantri Pratibha Vikas Yojana (Delhi)',
    shortDescription: 'Free competitive exam coaching (UPSC, NEET, JEE, GATE, Banking) plus ₹2,500 monthly stipend for SC/ST/OBC/EWS students of Delhi.',
    fullDescription: 'Delhi Government scheme offering free coaching at empanelled premium coaching institutes for competitive exams (UPSC Civil Services, JEE, NEET, CLAT, Banking, SSC). Selected students also receive a monthly stipend of ₹2,500 for books and study material.',
    department: 'Department for Welfare of SC/ST/OBC (Government of Delhi)',
    category: 'Education & Scholarships',
    schemeType: 'State Government',
    benefitType: 'Grant',
    maxBenefitAmount: 100000,
    officialWebsite: 'https://scstwelfare.delhi.gov.in',
    applicationLink: 'https://edistrict.delhigovt.nic.in',
    pdfGuideUrl: 'https://scstwelfare.delhi.gov.in/guidelines.pdf',
    stateAvailability: ['Delhi (NCT)'],
    eligibility: {
      minAge: 15,
      maxAge: 30,
      isStudent: true,
      maxAnnualFamilyIncome: 800000,
      allowedCategories: ['SC', 'ST', 'OBC', 'EWS'],
      customConditions: ['Must have passed 10th and 12th from a school in Delhi and be a resident of Delhi']
    },
    benefitsList: [
      '100% free coaching fee paid directly by Delhi Govt to top empanelled coaching institutes',
      '₹2,500 monthly cash stipend credited to student bank account during coaching duration (up to 1 year)',
      'Covers UPSC Civil Services, IIT-JEE, NEET, GATE, CAT, and Banking Exams'
    ],
    requiredDocuments: ['Aadhaar Card (Delhi address)', 'Caste / EWS Certificate', 'Income Certificate (<8L)', 'Class 10th & 12th Marksheet', 'Coaching Institute Enrollment Form'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'Register on e-District Delhi', 
        detail: 'Register on edistrict.delhigovt.nic.in.' 
      },
      { 
        stepNumber: 2, 
        title: 'Select Coaching Center', 
        detail: 'Choose empanelled institute and course.' 
      },
      { 
        stepNumber: 3, 
        title: 'Verification', 
        detail: 'Sub-Divisional Magistrate (SDM) verifies income and caste certificate.' 
      },
      { 
        stepNumber: 4, 
        title: 'Admission & Stipend Release', 
        detail: 'Start coaching; stipend credited monthly.' 
      }
    ],
    faqs: [
      { question: 'How many times can a student take this benefit?', answer: 'Maximum 2 times (1 main course and 1 revision course).' }
    ],
    deadline: '2026-08-31',
    lastUpdated: '2026-06-25',
    contactHelpdesk: '011-23378418',
    viewsCount: 31000,
    bookmarkCount: 12900,
    rating: 4.8
  },

  // 19. Central Pension - APY
  {
    id: 'atal-pension-yojana',
    title: 'Atal Pension Yojana (APY)',
    shortDescription: 'Guaranteed minimum monthly pension of ₹1,000 to ₹5,000 for unorganized sector workers starting at age 60.',
    fullDescription: 'Atal Pension Yojana is a targeted pension scheme for unorganized sector workers. Allows citizens between 18 to 40 years to contribute monthly and receive a guaranteed monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 upon turning 60.',
    department: 'PFRDA / Ministry of Finance',
    category: 'Senior Citizens & Pensions',
    schemeType: 'Central Government',
    benefitType: 'Direct Cash Transfer',
    maxBenefitAmount: 60000,
    officialWebsite: 'https://www.npscra.nsdl.co.in',
    applicationLink: 'https://enps.nsdl.co.in/eNPS/NationalPensionSystem.html',
    pdfGuideUrl: 'https://www.pfrda.org.in/my_documents/APY_Scheme_Details.pdf',
    stateAvailability: ['All India'],
    eligibility: {
      minAge: 18,
      maxAge: 40,
      customConditions: ['Must have a savings bank account and not be a member of any statutory social security scheme (EPF/EPS)']
    },
    benefitsList: [
      'Guaranteed monthly pension of ₹1,000 to ₹5,000 for life starting at age 60',
      'Spouse receives same monthly pension upon subscriber demise',
      'Accumulated pension wealth returned to nominee after both subscriber and spouse demise'
    ],
    requiredDocuments: ['Aadhaar Card', 'Savings Bank Passbook / Bank Account IFSC', 'Mobile Number'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'Visit Bank Branch or Netbanking Portal', 
        detail: 'Login to your bank Netbanking app or visit bank branch holding savings account.' 
      },
      { 
        stepNumber: 2, 
        title: 'Select APY Subscription', 
        detail: 'Click "Social Security Schemes" -> Choose "Atal Pension Yojana". Select desired pension amount (₹1,000 to ₹5,000/month).' 
      },
      { 
        stepNumber: 3, 
        title: 'Auto-Debit Authorization & Nominee Details', 
        detail: 'Enter spouse & nominee details. Authorize auto-debit of monthly/quarterly contribution.' 
      },
      { 
        stepNumber: 4, 
        title: 'PRAN Generation', 
        detail: 'System generates Permanent Retirement Account Number (PRAN) and sends SMS confirmation.' 
      }
    ],
    faqs: [
      { question: 'What is the minimum monthly contribution for 18-year old for ₹5,000 pension?', answer: 'Just ₹210 per month if joining at 18 years of age.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-07-01',
    contactHelpdesk: '1800-110-069',
    viewsCount: 58900,
    bookmarkCount: 23100,
    rating: 4.9
  },

  // 20. Central Micro Loan - PM SVANidhi
  {
    id: 'pm-svanidhi-street-vendor',
    title: 'PM SVANidhi Scheme (Street Vendor Loan)',
    shortDescription: 'Collateral-free working capital loan up to ₹50,000 with 7% interest subsidy and cashback for urban & rural street vendors.',
    fullDescription: 'PM Street Vendor’s AtmaNirbhar Nidhi (PM SVANidhi) provides micro-credit to street vendors for restarting business activities. Offers 1st tranche loan of ₹10,000, 2nd tranche of ₹20,000, and 3rd tranche of ₹50,000 with 7% interest subsidy on prompt repayment.',
    department: 'Ministry of Housing and Urban Affairs (MoHUA)',
    category: 'Business, MSME & Startups',
    schemeType: 'Central Government',
    benefitType: 'Subsidized Loan',
    maxBenefitAmount: 50000,
    interestRate: 7.0,
    officialWebsite: 'https://pmsvanidhi.mohua.gov.in',
    applicationLink: 'https://pmsvanidhi.mohua.gov.in/Scheme',
    pdfGuideUrl: 'https://pmsvanidhi.mohua.gov.in/pdf/PM_SVANidhi_Guidelines.pdf',
    stateAvailability: ['All India'],
    eligibility: {
      minAge: 18,
      allowedOccupations: ['Self-Employed', 'Business Owner', 'Shopkeeper', 'Artisan'],
      customConditions: ['Vending certificate / ID card issued by Urban Local Body (ULB) or Letter of Recommendation (LoR)']
    },
    benefitsList: [
      '1st loan tranche ₹10,000, 2nd tranche ₹20,000, 3rd tranche ₹50,000 without any collateral',
      '7% interest subsidy credited directly to bank account on timely repayment',
      'Digital cashback up to ₹1,200/year on conducting digital sales transactions (UPI / QR code)'
    ],
    requiredDocuments: ['Aadhaar Card', 'Vending Certificate / Identity Card / Letter of Recommendation (LoR)', 'Bank Account Passbook', 'Active Mobile Number linked with Aadhaar'],
    applicationSteps: [
      { 
        stepNumber: 1, 
        title: 'Check Vending Status / Get LoR', 
        detail: 'Visit pmsvanidhi.mohua.gov.in -> Click "Check Vending Status" or apply for Letter of Recommendation (LoR).' 
      },
      { 
        stepNumber: 2, 
        title: 'Fill Online Application Form', 
        detail: 'Click "Apply for Loan" -> Authenticate via Aadhaar OTP. Fill vendor details and bank account number.' 
      },
      { 
        stepNumber: 3, 
        title: 'Select Bank Branch', 
        detail: 'Choose nearest bank branch or Lending Institution (Bank / NBFC / MFI).' 
      },
      { 
        stepNumber: 4, 
        title: 'Disbursement & UPI QR Setup', 
        detail: 'Bank approves loan. Receive cash in bank account and get free BHIM UPI QR code sticker for cashback rewards.' 
      }
    ],
    faqs: [
      { question: 'Is collateral or guarantor needed?', answer: 'No collateral security or third party guarantee is required.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-06-25',
    contactHelpdesk: '1800-11-1979 / pmsvanidhi-mohua@gov.in',
    viewsCount: 47200,
    bookmarkCount: 18400,
    rating: 4.8
  }
];
