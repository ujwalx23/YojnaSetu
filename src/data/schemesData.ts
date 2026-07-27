import { Scheme } from '../types';

export const REAL_SCHEMES: Scheme[] = [
  {
    id: 'pm-kisan-2026',
    title: 'PM Kisan Samman Nidhi Yojana',
    shortDescription: 'Financial benefit of ₹6,000 per year transferred directly into the bank accounts of land-holding farmer families across India.',
    fullDescription: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a Central Sector scheme with 100% funding from Government of India. Under the scheme, income support of ₹6,000/- per year in three equal installments of ₹2,000/- each is provided to all land-holding farmer families across the country.',
    department: 'Ministry of Agriculture and Farmers Welfare',
    category: 'Agriculture',
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
      customConditions: ['Must own cultivable agricultural land registered in land records']
    },
    benefitsList: [
      '₹6,000 guaranteed annual direct cash transfer in 3 installments of ₹2,000',
      'Direct Benefit Transfer (DBT) straight into Aadhaar-linked bank account',
      'Access to Kisan Credit Card (KCC) with subsidized loans up to ₹3 Lakh at 4% interest'
    ],
    requiredDocuments: ['Aadhaar Card', 'Land Ownership Record (7/12 or Khatauni)', 'Bank Account Passbook', 'Active Mobile Number'],
    applicationSteps: [
      { stepNumber: 1, title: 'Visit Portal', detail: 'Go to PM-Kisan portal (pmkisan.gov.in) and click on New Farmer Registration.' },
      { stepNumber: 2, title: 'Enter Aadhaar & State', detail: 'Select Rural or Urban registration, input your Aadhaar number, mobile number and select state.' },
      { stepNumber: 3, title: 'Fill Land Details', detail: 'Enter land survey number, Khasra number, and land area details as per revenue record.' },
      { stepNumber: 4, title: 'Submit & eKYC', detail: 'Complete OTP-based e-KYC using Aadhaar and submit application for state approval.' }
    ],
    faqs: [
      { question: 'Are tenant farmers eligible?', answer: 'No, only farmers with cultivable land in their own name are eligible.' },
      { question: 'Is income tax payer eligible?', answer: 'No, any family member paying income tax in the last assessment year is excluded.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-06-15',
    contactHelpdesk: '155261 / 011-24300606',
    viewsCount: 45200,
    bookmarkCount: 12400,
    rating: 4.8
  },
  {
    id: 'pm-mudra-yojana',
    title: 'Pradhan Mantri MUDRA Yojana (PMMY)',
    shortDescription: 'Collateral-free loans up to ₹20 Lakh for non-corporate, non-farm small/micro enterprises for business setup and expansion.',
    fullDescription: 'PMMY provides loans up to 20 Lakhs to micro and small business entities under three categories: Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakh), and Tarun (₹5 Lakh to ₹20 Lakh). The scheme requires zero collateral and offers subsidized interest rates.',
    department: 'Ministry of Finance / SIDBI',
    category: 'Business & Startups',
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
    requiredDocuments: ['Aadhaar Card', 'PAN Card', 'Proof of Business Identity (GST / Shop Act)', 'Bank Account Statement (6 months)', 'Project Report / Business Plan'],
    applicationSteps: [
      { stepNumber: 1, title: 'Select Category', detail: 'Choose Shishu (up to 50k), Kishore (50k-5L) or Tarun (5L-20L) based on capital need.' },
      { stepNumber: 2, title: 'Apply on Udyami Mitra', detail: 'Register on udyamimitra.in or visit any scheduled commercial bank or NBFC.' },
      { stepNumber: 3, title: 'Upload Business Proposal', detail: 'Attach quotation for machinery, raw material requirement, and projected cash flows.' },
      { stepNumber: 4, title: 'Sanction & Disbursement', detail: 'Bank evaluates proposal and disburses loan with Mudra Debit Card.' }
    ],
    faqs: [
      { question: 'Is security or guarantor needed?', answer: 'No security or collateral guarantee is required for Mudra loans.' },
      { question: 'Can women entrepreneurs get concession?', answer: 'Yes, NBFCs and banks offer up to 0.25% interest rate concession for female applicants.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-07-01',
    contactHelpdesk: '1800-180-1111 / 1800-11-0001',
    viewsCount: 68900,
    bookmarkCount: 24100,
    rating: 4.9
  },
  {
    id: 'sukanya-samriddhi-2026',
    title: 'Sukanya Samriddhi Yojana (SSY)',
    shortDescription: 'High-return (8.2% p.a.) tax-exempt savings scheme for the education and marriage financial security of girl children under age 10.',
    fullDescription: 'Sukanya Samriddhi Account is a government-backed savings scheme targeted at parents of girl children. It qualifies for Section 80C tax deduction and maturity proceeds are 100% tax-free under EEE status with an attractive interest rate updated quarterly.',
    department: 'Ministry of Finance / India Post',
    category: 'Women Empowerment',
    schemeType: 'Central Government',
    benefitType: 'Direct Cash Transfer',
    maxBenefitAmount: 150000,
    interestRate: 8.2,
    officialWebsite: 'https://www.indiapost.gov.in',
    applicationLink: 'https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Savings-Schemes.aspx',
    stateAvailability: ['All India'],
    eligibility: {
      maxAge: 10,
      targetGender: 'Female',
      isForWomenOnly: true,
      customConditions: ['Account must be opened by biological parents or legal guardians for a girl child before she turns 10 years old']
    },
    benefitsList: [
      'Highest government-guaranteed interest rate of 8.2% per annum compounding annually',
      'Income Tax exemption under Section 80C up to ₹1.5 Lakh per year',
      '50% partial withdrawal allowed for higher education after girl turns 18 years',
      'Complete Tax-Free Maturity at age 21'
    ],
    requiredDocuments: ['Birth Certificate of Girl Child', 'Parent / Guardian Aadhaar & PAN Card', 'Address Proof (Passport/Voter ID/Electricity Bill)', 'Passport size photos'],
    applicationSteps: [
      { stepNumber: 1, title: 'Visit Post Office / Bank', detail: 'Visit any India Post branch or authorized public/private commercial bank.' },
      { stepNumber: 2, title: 'Fill SSY Account Form', detail: 'Fill out Account Opening Form and enclose biological parent details.' },
      { stepNumber: 3, title: 'Initial Deposit', detail: 'Deposit minimum starting amount of ₹250 (up to max ₹1,50,000 per financial year).' },
      { stepNumber: 4, title: 'Receive Passbook', detail: 'Collect physical passbook for tracking yearly compounding interest.' }
    ],
    faqs: [
      { question: 'How many accounts can one family open?', answer: 'Maximum 2 accounts for 2 girl children in a family (3 in case of twin girls in first birth).' },
      { question: 'What is the minimum annual contribution?', answer: 'Minimum deposit is ₹250 per financial year to keep the account active.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-05-20',
    contactHelpdesk: '1800-266-6868',
    viewsCount: 39400,
    bookmarkCount: 15800,
    rating: 4.9
  },
  {
    id: 'startup-india-seed-fund',
    title: 'Startup India Seed Fund Scheme (SISFS)',
    shortDescription: 'Financial assistance up to ₹50 Lakh to early-stage startups for proof of concept, prototype development, product trials, and market entry.',
    fullDescription: 'SISFS provides financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization. Seed fund up to ₹20 Lakh is provided as grant and up to ₹50 Lakh as convertible debentures or debt.',
    department: 'Department for Promotion of Industry and Internal Trade (DPIIT)',
    category: 'Business & Startups',
    schemeType: 'Central Government',
    benefitType: 'Grant',
    maxBenefitAmount: 5000000,
    officialWebsite: 'https://seedfund.startupindia.gov.in',
    applicationLink: 'https://seedfund.startupindia.gov.in/user/register',
    pdfGuideUrl: 'https://seedfund.startupindia.gov.in/static/media/SISFS_Guidelines.pdf',
    stateAvailability: ['All India'],
    eligibility: {
      minAge: 18,
      isStartupFounder: true,
      isForStartupsOnly: true,
      allowedOccupations: ['Startup Founder', 'Entrepreneur'],
      customConditions: ['Startup recognized by DPIIT, incorporated not more than 2 years ago, with technology solution']
    },
    benefitsList: [
      'Up to ₹20 Lakh grant for validation of proof of concept, prototype, and product trial',
      'Up to ₹50 Lakh investment via debt/convertible debentures for market entry and scaling',
      'Incubator mentorship, lab facilities, and networking opportunities'
    ],
    requiredDocuments: ['DPIIT Recognition Certificate', 'Certificate of Incorporation / Partnership Deed', 'Pitch Deck & Business Model Canvas', 'Promoter Aadhaar & PAN Cards', 'Bank Account Details'],
    applicationSteps: [
      { stepNumber: 1, title: 'DPIIT Recognition', detail: 'Ensure your startup is DPIIT recognized on startupindia.gov.in.' },
      { stepNumber: 2, title: 'Apply on SISFS Portal', detail: 'Log in to seedfund.startupindia.gov.in and browse eligible approved incubators.' },
      { stepNumber: 3, title: 'Submit Proposal', detail: 'Fill startup details, problem statement, solution, target market, and budget request.' },
      { stepNumber: 4, title: 'Incubator Presentation', detail: 'Present to Incubator Seed Management Committee (ISMC) for milestone-based disbursement.' }
    ],
    faqs: [
      { question: 'Should startup be incorporated in India?', answer: 'Yes, startup must be a Private Limited Company or LLP registered in India.' },
      { question: 'What if startup has received prior funding?', answer: 'Startups that have received more than ₹10 Lakh from central/state government schemes are ineligible.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-06-30',
    contactHelpdesk: '1800-115-565',
    viewsCount: 52100,
    bookmarkCount: 19800,
    rating: 4.8
  },
  {
    id: 'pm-awas-yojana-urban-2026',
    title: 'Pradhan Mantri Awas Yojana (PMAY-U 2.0)',
    shortDescription: 'Credit Linked Subsidy & home assistance up to ₹2.50 Lakh for EWS, LIG, and MIG families purchasing or constructing their first pucca house.',
    fullDescription: 'PMAY-Urban 2.0 aims to address urban housing shortage among EWS/LIG/MIG categories. It provides upfront interest subsidy of 6.5% on housing loans up to ₹6 Lakh for 20 years, saving over ₹2.5 Lakh in interest payouts.',
    department: 'Ministry of Housing and Urban Affairs (MoHUA)',
    category: 'Housing & Urban',
    schemeType: 'Central Government',
    benefitType: 'Subsidy',
    maxBenefitAmount: 250000,
    subsidyPercentage: 6.5,
    officialWebsite: 'https://pmaymis.gov.in',
    applicationLink: 'https://pmaymis.gov.in/open/find_benefit_component.aspx',
    stateAvailability: ['All India'],
    eligibility: {
      minAge: 21,
      maxAge: 70,
      maxAnnualFamilyIncome: 1800000,
      customConditions: ['Beneficiary family must not own a pucca house anywhere in India in any family member name']
    },
    benefitsList: [
      'Upfront interest subsidy up to ₹2.67 Lakh credited directly to home loan principal account',
      'Preference for female head of household in property ownership',
      'Construction grant up to ₹1.5 Lakh for beneficiary-led individual house construction'
    ],
    requiredDocuments: ['Aadhaar Card of all family members', 'Income Certificate / Salary Slip / Form 16', 'Property Documents / Approved Plan', 'No Pucca House Affidavit', 'Bank Account Details'],
    applicationSteps: [
      { stepNumber: 1, title: 'Check Category', detail: 'Identify income group: EWS (<3L), LIG (3L-6L), MIG-I (6L-12L), MIG-II (12L-18L).' },
      { stepNumber: 2, title: 'Apply via Housing Loan Bank', detail: 'Apply for home loan from PMAY-partnered bank or HFC and request PMAY interest subsidy.' },
      { stepNumber: 3, title: 'CLSS Tracker Verification', detail: 'Central Nodal Agency (NHB/HUDCO) verifies family non-ownership via Aadhaar database.' },
      { stepNumber: 4, title: 'Subsidy Credit', detail: 'Approved subsidy is transferred directly to home loan account reducing monthly EMI.' }
    ],
    faqs: [
      { question: 'Is female ownership compulsory?', answer: 'Female ownership or co-ownership is mandatory for EWS and LIG categories.' }
    ],
    deadline: '2026-12-31',
    lastUpdated: '2026-06-10',
    contactHelpdesk: '1800-11-3377 / 1800-11-3388',
    viewsCount: 74200,
    bookmarkCount: 31000,
    rating: 4.7
  },
  {
    id: 'post-matric-scholarship-sc-st-obc',
    title: 'Post-Matric Scholarship for SC / ST / OBC Students',
    shortDescription: 'Complete tuition fee waiver, maintenance allowance up to ₹13,500/year, and study material assistance for post-secondary education.',
    fullDescription: 'Centrally Sponsored Scheme to enable SC/ST/OBC students to complete post-matriculation or post-secondary courses. It covers full non-refundable tuition fees, compulsory institutional fees, and monthly maintenance allowance.',
    department: 'Ministry of Social Justice and Empowerment',
    category: 'Education & Scholarships',
    schemeType: 'Central Government',
    benefitType: 'Scholarship',
    maxBenefitAmount: 120000,
    officialWebsite: 'https://scholarships.gov.in',
    applicationLink: 'https://scholarships.gov.in',
    stateAvailability: ['All India'],
    eligibility: {
      minAge: 15,
      maxAge: 35,
      isStudent: true,
      maxAnnualFamilyIncome: 250000,
      allowedCategories: ['SC', 'ST', 'OBC', 'EWS'],
      allowedEducation: ['Class 11', 'Class 12', 'Diploma', 'Undergraduate (BA/BSc/BCom/BTech)', 'Postgraduate (MA/MSc/MTech)', 'PhD'],
      customConditions: ['Must be enrolled in recognized school, college, or university']
    },
    benefitsList: [
      '100% waiving/reimbursement of official non-refundable tuition fees',
      'Monthly maintenance allowance ranging from ₹550 to ₹1,350 per month based on course group',
      'Additional disability allowance for handicapped students up to ₹4,000 per year'
    ],
    requiredDocuments: ['Aadhaar Card', 'Caste Certificate (issued by competent authority)', 'Income Certificate (issued by Tehsildar)', 'Mark Sheets of Previous Qualifying Exam', 'College Fee Receipt & Bonafide Certificate', 'Bank Passbook linked with Aadhaar'],
    applicationSteps: [
      { stepNumber: 1, title: 'Register on NSP', detail: 'Go to National Scholarship Portal (scholarships.gov.in) and register using Aadhaar.' },
      { stepNumber: 2, title: 'Fill Application Form', detail: 'Enter academic, domicile, caste certificate number, and institution code.' },
      { stepNumber: 3, title: 'Institutional Verification', detail: 'Upload documents for verification by your college Nodal Officer.' },
      { stepNumber: 4, title: 'Direct Benefit Transfer', detail: 'State Nodal Agency approves and transfers scholarship directly to student bank account.' }
    ],
    faqs: [
      { question: 'Can I apply if studying in private college?', answer: 'Yes, as long as the private college is government-recognized and affiliated.' }
    ],
    deadline: '2026-10-31',
    lastUpdated: '2026-07-15',
    contactHelpdesk: '0120-6619540',
    viewsCount: 89000,
    bookmarkCount: 38200,
    rating: 4.9
  },
  {
    id: 'stand-up-india-2026',
    title: 'Stand-Up India Scheme',
    shortDescription: 'Bank loans between ₹10 Lakh and ₹1 Crore to at least one SC/ST borrower and one woman borrower per bank branch for greenfield enterprises.',
    fullDescription: 'Stand-Up India facilitates bank loans between ₹10 Lakh and ₹1 Crore to SC/ST and women entrepreneurs for setting up a greenfield enterprise in manufacturing, services, or trading sector.',
    department: 'Department of Financial Services (DFS)',
    category: 'Business & Startups',
    schemeType: 'Central Government',
    benefitType: 'Subsidized Loan',
    maxBenefitAmount: 10000000,
    interestRate: 7.9,
    officialWebsite: 'https://www.standupmitra.in',
    applicationLink: 'https://www.standupmitra.in/Login/Register',
    stateAvailability: ['All India'],
    eligibility: {
      minAge: 18,
      maxAge: 65,
      isBusinessOwner: true,
      allowedCategories: ['SC', 'ST', 'General', 'OBC'],
      customConditions: ['Must be an SC/ST or Woman entrepreneur setting up a new (greenfield) business']
    },
    benefitsList: [
      'Composite loan (Term loan + Working capital) between ₹10,000,000 and ₹100,000,000',
      'Lowest applicable interest rate of the bank (Base Rate / MCLR + 3% max)',
      'Credit Guarantee Scheme for Stand-Up India (CGSSI) coverage minimizing collateral needs'
    ],
    requiredDocuments: ['Aadhaar & PAN', 'Caste Certificate (if SC/ST)', 'Business Premises Registration/Lease', 'Project Report & Financial Forecasts', '6 Months Bank Statement'],
    applicationSteps: [
      { stepNumber: 1, title: 'Register on StandUp Mitra', detail: 'Register on standupmitra.in portal and complete borrower profile.' },
      { stepNumber: 2, title: 'Select Handholding Agency', detail: 'Optionally choose handholding assistance for project report, skill training, or registration.' },
      { stepNumber: 3, title: 'Submit Loan Application', detail: 'Submit detailed project report to selected bank branch.' },
      { stepNumber: 4, title: 'Sanction & Disbursement', detail: 'Bank processes application under Stand-Up India quota and disburses loan.' }
    ],
    faqs: [
      { question: 'What is a greenfield enterprise?', answer: 'Greenfield means the first time venture of the beneficiary in manufacturing or service sector.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-06-01',
    contactHelpdesk: '1800-180-1122',
    viewsCount: 31200,
    bookmarkCount: 11400,
    rating: 4.7
  },
  {
    id: 'pmegp-subsidy-scheme',
    title: 'Prime Minister Employment Generation Programme (PMEGP)',
    shortDescription: 'Credit-linked subsidy up to 35% on micro-enterprise projects up to ₹50 Lakh for manufacturing and ₹20 Lakh for service sector.',
    fullDescription: 'PMEGP is a major credit-linked subsidy program administered by KVIC. It aims to generate self-employment opportunities through establishment of micro-enterprises in non-farm sector across rural and urban areas.',
    department: 'Khadi and Village Industries Commission (KVIC) / MSME',
    category: 'Business & Startups',
    schemeType: 'Central Government',
    benefitType: 'Subsidy',
    maxBenefitAmount: 1750000,
    subsidyPercentage: 35,
    officialWebsite: 'https://www.kviconline.gov.in/pmegpeportal',
    applicationLink: 'https://www.kviconline.gov.in/pmegpeportal/pmegpfilters/jsp/pmeform.jsp',
    stateAvailability: ['All India'],
    eligibility: {
      minAge: 18,
      allowedEducation: ['Class 8 Pass', 'Class 10', 'Class 12', 'Graduate'],
      allowedOccupations: ['Unemployed', 'Artisan', 'Self-Employed', 'Business Owner'],
      customConditions: ['Project cost maximum ₹50 Lakh for Manufacturing and ₹20 Lakh for Service sector']
    },
    benefitsList: [
      '15% to 35% margin money subsidy provided by Government of India',
      'Rural category beneficiaries receive higher subsidy (25% for General, 35% for SC/ST/OBC/Women)',
      'Bank provides 90% to 95% of total project cost as loan'
    ],
    requiredDocuments: ['Aadhaar Card', 'Highest Educational Certificate (min 8th pass)', 'Project Report / Detailed Estimate', 'Caste / Special Category Certificate', 'EDP Training Certificate'],
    applicationSteps: [
      { stepNumber: 1, title: 'Fill Online Application', detail: 'Apply online on kviconline.gov.in selecting KVIC/KVIB/DIC as agency.' },
      { stepNumber: 2, title: 'Upload Project Report', detail: 'Attach detailed project profile, land documents, and ID proof.' },
      { stepNumber: 3, title: 'Task Force Interview', detail: 'District Level Task Force Committee (DLTFC) scrutinizes application and recommends to bank.' },
      { stepNumber: 4, title: 'EDP Training & Subsidy Release', detail: 'Complete 10-day Entrepreneurship Development Programme (EDP) for subsidy lock-in.' }
    ],
    faqs: [
      { question: 'Is educational qualification compulsory?', answer: 'For projects above ₹10 Lakh in manufacturing and ₹5 Lakh in service, 8th pass is required.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-05-18',
    contactHelpdesk: '1800-3000-0039',
    viewsCount: 62400,
    bookmarkCount: 21900,
    rating: 4.8
  },
  {
    id: 'ladli-bahna-maharashtra-mp',
    title: 'Mukhyamantri Majhi Ladki Bahin Yojana',
    shortDescription: 'Monthly financial cash benefit of ₹1,500 transferred directly to women aged 21-65 years with annual family income below ₹2.5 Lakh.',
    fullDescription: 'State welfare flagship program aimed at providing economic independence and health security to women. A monthly grant of ₹1,500 is directly deposited into Aadhaar-seeded bank accounts of eligible women residents.',
    department: 'Department of Women and Child Development (State Government)',
    category: 'Women Empowerment',
    schemeType: 'State Government',
    benefitType: 'Direct Cash Transfer',
    maxBenefitAmount: 18000,
    officialWebsite: 'https://ladlibahin.maharashtra.gov.in',
    applicationLink: 'https://ladlibahin.maharashtra.gov.in/register',
    stateAvailability: ['Maharashtra', 'Madhya Pradesh'],
    eligibility: {
      minAge: 21,
      maxAge: 65,
      targetGender: 'Female',
      isForWomenOnly: true,
      maxAnnualFamilyIncome: 250000,
      customConditions: ['Must be a permanent resident of Maharashtra/Madhya Pradesh with Aadhaar linked bank account']
    },
    benefitsList: [
      '₹1,500 per month (₹18,000 annually) direct cash assistance',
      'Exemption from income certificate if family holds Yellow or Orange Ration Card',
      'Free financial literacy and skill empowerment sessions'
    ],
    requiredDocuments: ['Aadhaar Card of Applicant', 'Domicile Certificate / Ration Card', 'Income Certificate (<2.5L)', 'Bank Account Passbook (Aadhaar Seeded)', 'Hamipatra (Self Declaration)'],
    applicationSteps: [
      { stepNumber: 1, title: 'Download Nari Shakti App', detail: 'Download official app or visit nearest Anganwadi center / Setu Suvidha Kendra.' },
      { stepNumber: 2, title: 'E-KYC Verification', detail: 'Authenticate biometric or OTP via Aadhaar card.' },
      { stepNumber: 3, title: 'Upload Ration Card', detail: 'Attach Ration card and signed self-declaration form.' },
      { stepNumber: 4, title: 'Approval & Monthly Credit', detail: 'Tehsildar approves application; ₹1,500 credited on 15th of every month.' }
    ],
    faqs: [
      { question: 'Are married or widowed women eligible?', answer: 'Yes, married, unmarried, widowed, divorced, and destitute women are eligible.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-07-10',
    contactHelpdesk: '181 / 022-22027050',
    viewsCount: 112000,
    bookmarkCount: 45000,
    rating: 4.9
  },
  {
    id: 'ayushman-bharat-pmjay-2026',
    title: 'Ayushman Bharat PM-JAY (Senior Citizen 70+ Included)',
    shortDescription: 'Free health insurance cover up to ₹5 Lakh per family per year for secondary and tertiary care hospitalization in top hospitals.',
    fullDescription: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) is the world\'s largest health insurance scheme. It covers up to 3 days of pre-hospitalization, 15 days post-hospitalization, and over 1,950 medical procedures including cancer treatment and surgeries.',
    department: 'National Health Authority (NHA) / Ministry of Health',
    category: 'Healthcare & Insurance',
    schemeType: 'Central Government',
    benefitType: 'Free Service/Insurance',
    maxBenefitAmount: 500000,
    officialWebsite: 'https://dashboard.pmjay.gov.in',
    applicationLink: 'https://beneficiary.nha.gov.in',
    stateAvailability: ['All India'],
    eligibility: {
      minAge: 0,
      maxAge: 100,
      maxAnnualFamilyIncome: 300000,
      customConditions: ['Covered under SECC 2011 data, Ration Card holder, or Senior Citizen aged 70+ (universal coverage regardless of income)']
    },
    benefitsList: [
      '₹5,00,000 annual cashless hospitalization coverage per family across 29,000+ empanelled hospitals',
      'Covers pre-existing diseases from day one with zero waiting period',
      'Special Universal ₹5 Lakh cover for ALL Senior Citizens aged 70+ regardless of family income'
    ],
    requiredDocuments: ['Aadhaar Card', 'Ration Card / PM-JAY Letter', 'Active Mobile Number'],
    applicationSteps: [
      { stepNumber: 1, title: 'Check Eligibility', detail: 'Visit beneficiary.nha.gov.in and search by Mobile Number, Aadhaar, or Ration Card.' },
      { stepNumber: 2, title: 'Biometric Auth', detail: 'Complete eKYC at empanelled hospital or Ayushman Mitra booth.' },
      { stepNumber: 3, title: 'Generate Ayushman Card', detail: 'Download digital Ayushman Card instantly.' },
      { stepNumber: 4, title: 'Cashless Hospitalization', detail: 'Show Ayushman Card at hospital desk for 100% free cashless treatment.' }
    ],
    faqs: [
      { question: 'Is there any restriction on family size?', answer: 'No restriction on family size, age, or gender.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-06-25',
    contactHelpdesk: '14555 / 1800-111-565',
    viewsCount: 98000,
    bookmarkCount: 39000,
    rating: 4.9
  },
  {
    id: 'pm-surya-ghar-muft-bijli',
    title: 'PM-Surya Ghar: Muft Bijli Yojana',
    shortDescription: 'Subsidy up to ₹78,000 for installing rooftop solar power systems, providing up to 300 units of free electricity every month.',
    fullDescription: 'PM-Surya Ghar aims to power 1 Crore households with rooftop solar installations. It offers direct central subsidy of ₹30,000 for 1kW, ₹60,000 for 2kW, and ₹78,000 for 3kW systems, alongside collateral-free solar loans at 7% interest.',
    department: 'Ministry of New and Renewable Energy (MNRE)',
    category: 'Housing & Urban',
    schemeType: 'Central Government',
    benefitType: 'Subsidy',
    maxBenefitAmount: 78000,
    subsidyPercentage: 60,
    officialWebsite: 'https://pmsuryaghar.gov.in',
    applicationLink: 'https://pmsuryaghar.gov.in/consumerRegistration',
    stateAvailability: ['All India'],
    eligibility: {
      minAge: 18,
      customConditions: ['Applicant must own a residential house with suitable roof space and active electricity connection']
    },
    benefitsList: [
      'Up to ₹78,000 direct subsidy credited into bank account within 30 days of net-meter installation',
      '300 units of free monthly electricity saving ₹18,000-₹24,000 annually',
      'Collateral-free low interest loan (7% interest) from scheduled commercial banks'
    ],
    requiredDocuments: ['Electricity Bill (latest 3 months)', 'Aadhaar Card', 'Bank Account Details', 'Proof of Roof Ownership / Electricity Connection'],
    applicationSteps: [
      { stepNumber: 1, title: 'Register on National Portal', detail: 'Register on pmsuryaghar.gov.in entering state, electricity DISCOM name, and consumer number.' },
      { stepNumber: 2, title: 'DISCOM Feasibility Approval', detail: 'Apply for rooftop solar; local DISCOM inspects and approves technical feasibility.' },
      { stepNumber: 3, title: 'Vendor Installation', detail: 'Get system installed through empanelled registered vendor.' },
      { stepNumber: 4, title: 'Net-Meter & Subsidy Claim', detail: 'DISCOM installs net-meter, generates commissioning certificate; subsidy credited to bank.' }
    ],
    faqs: [
      { question: 'Can I sell excess electricity generated back to grid?', answer: 'Yes, extra units generated are fed back to grid via net-metering and credited in your bill.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-07-01',
    contactHelpdesk: '15555',
    viewsCount: 71000,
    bookmarkCount: 29000,
    rating: 4.8
  },
  {
    id: 'pm-svanidhi-street-vendors',
    title: 'PM SVANidhi (Street Vendor Loan Scheme)',
    shortDescription: 'Collateral-free working capital loan starting at ₹10,000, scaling to ₹20,000 and ₹50,000 with 7% interest subsidy and cashback on digital transactions.',
    fullDescription: 'PM Street Vendor\'s AtmaNirbhar Nidhi (PM SVANidhi) provides affordable working capital loan to street vendors to resume their livelihoods. Regular repayment unlocks higher loan brackets and annual cashbacks on digital UPI payments.',
    department: 'Ministry of Housing and Urban Affairs (MoHUA)',
    category: 'Employment & Skill Development',
    schemeType: 'Central Government',
    benefitType: 'Subsidized Loan',
    maxBenefitAmount: 50000,
    interestRate: 7.0,
    officialWebsite: 'https://pmsvanidhi.mohua.gov.in',
    applicationLink: 'https://pmsvanidhi.mohua.gov.in/SchemeApplication',
    stateAvailability: ['All India'],
    eligibility: {
      minAge: 18,
      allowedOccupations: ['Street Vendor', 'Artisan', 'Self-Employed', 'Hawker'],
      customConditions: ['Vending in urban areas on or before March 24, 2020 with Certificate of Vending or ULB recommendation letter']
    },
    benefitsList: [
      'Collateral-free loan: 1st tranche ₹10,000, 2nd tranche ₹20,000, 3rd tranche ₹50,000',
      '7% per annum interest subsidy credited directly to account quarterly',
      'Up to ₹1,200 annual cashback incentive for accepting digital payments via QR codes'
    ],
    requiredDocuments: ['Aadhaar Card', 'Vending Certificate / Urban Local Body (ULB) Identity Card', 'Bank Account Passbook', 'Mobile Number linked with Aadhaar'],
    applicationSteps: [
      { stepNumber: 1, title: 'Check Vending Status', detail: 'Verify vendor survey status on pmsvanidhi.mohua.gov.in.' },
      { stepNumber: 2, title: 'Fill Online Form', detail: 'Apply online or visit Common Service Center (CSC).' },
      { stepNumber: 3, title: 'Select Bank', detail: 'Choose nearest public sector bank for instant processing.' },
      { stepNumber: 4, title: 'Disbursement & QR Kit', detail: 'Loan disbursed to bank account; receive free UPI QR code stand for cashback.' }
    ],
    faqs: [
      { question: 'What if vendor name is not in ULB survey list?', answer: 'Vendor can request Letter of Recommendation (LoR) from Town Vending Committee.' }
    ],
    deadline: '2026-12-31',
    lastUpdated: '2026-06-18',
    contactHelpdesk: '1800-11-1979',
    viewsCount: 41000,
    bookmarkCount: 13200,
    rating: 4.7
  }
];
