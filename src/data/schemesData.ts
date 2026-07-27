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
      { stepNumber: 1, title: 'CSC Registration', detail: 'Visit nearest Common Service Center (CSC) for biometric verification.' },
      { stepNumber: 2, title: 'Gram Panchayat Verification', detail: 'Verification of traditional trade by Gram Panchayat or Urban Local Body.' },
      { stepNumber: 3, title: 'Skill Training', detail: 'Complete basic training and receive ₹15,000 toolkit voucher.' },
      { stepNumber: 4, title: 'Loan Disbursement', detail: 'Receive 1st credit tranche of ₹1 Lakh into bank account.' }
    ],
    faqs: [
      { question: 'How many members per family can apply?', answer: 'The benefit is restricted to one member per family.' }
    ],
    deadline: 'Open All Year',
    lastUpdated: '2026-06-28',
    contactHelpdesk: '1800-267-7777',
    viewsCount: 54100,
    bookmarkCount: 18900,
    rating: 4.8,
    isFeatured: true
  },

  // 4. Private / CSR - Tata Trusts Scholarship
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
      { stepNumber: 1, title: 'Online Application Portal', detail: 'Register on Tata Trusts portal during open application window (July-October).' },
      { stepNumber: 2, title: 'Upload Marksheets & Income Proof', detail: 'Submit certified copies of previous exam marksheets and Tehsildar income proof.' },
      { stepNumber: 3, title: 'Interview Evaluation', detail: 'Shortlisted candidates attend online panel interaction.' },
      { stepNumber: 4, title: 'Grant Sanction', detail: 'Scholarship amount disbursed directly to institution account.' }
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

  // 5. Private / CSR - Reliance Foundation Undergraduate Scholarship
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
      { stepNumber: 1, title: 'Aptitude Test', detail: 'Complete 60-minute online aptitude test testing verbal, analytical, and numerical skills.' },
      { stepNumber: 2, title: 'Submit Documents', detail: 'Upload marksheets and income certificate.' },
      { stepNumber: 3, title: 'Merit List Declaration', detail: '5,000 scholars selected based on aptitude score and financial need.' },
      { stepNumber: 4, title: 'Direct Disbursement', detail: 'Grant credited in annual installments into student bank account.' }
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

  // 6. State Government - Maharashtra (Ladli Bahna)
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
    rating: 4.9,
    isFeatured: true
  },

  // 7. State Government - Uttar Pradesh (Kanya Sumangala)
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
      { stepNumber: 1, title: 'Citizen Portal Registration', detail: 'Register on mksy.up.gov.in creating Login ID.' },
      { stepNumber: 2, title: 'Select Stage Category', detail: 'Choose applicable stage (Stage 1 to Stage 6).' },
      { stepNumber: 3, title: 'Document Upload', detail: 'Upload birth certificate, hospital discharge summary, or school admission receipt.' },
      { stepNumber: 4, title: 'SDM Verification & Disbursement', detail: 'District officer approves and transfers amount to parent account.' }
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

  // 8. State Government - Bihar Student Credit Card
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
      { stepNumber: 1, title: 'Register on MNSSBY Portal', detail: 'Register online on 7nishchay-yuvaupmission.bihar.gov.in.' },
      { stepNumber: 2, title: 'DRCC Appointment', detail: 'Book slot for physical document verification at District Registration and Counseling Center (DRCC).' },
      { stepNumber: 3, title: 'DRCC Document Audit', detail: 'Visit DRCC with original documents for instant biometric scanning.' },
      { stepNumber: 4, title: 'Approval & Fund Transfer', detail: 'Bihar State Single Window System disburses loan directly to college bank account.' }
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

  // 9. State Government - Gujarat (Mukhyamantri Amrutam)
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
      { stepNumber: 1, title: 'Visit Kiosk', detail: 'Visit Civic Center, Kiosk at District Hospital, or E-Gram center.' },
      { stepNumber: 2, title: 'Biometric Enrollment', detail: 'Capture fingerprint and iris scan of all family members.' },
      { stepNumber: 3, title: 'MA Smart Card Issue', detail: 'Receive laminated MA Vatsalya Card instantly.' }
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

  // 10. State Government - Delhi (Jai Bhim Mukhyamantri Pratibha Vikas)
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
      { stepNumber: 1, title: 'Register on e-District Delhi', detail: 'Register on edistrict.delhigovt.nic.in.' },
      { stepNumber: 2, title: 'Select Coaching Center', detail: 'Choose empanelled institute and course.' },
      { stepNumber: 3, title: 'Verification', detail: 'Sub-Divisional Magistrate (SDM) verifies income and caste certificate.' },
      { stepNumber: 4, title: 'Admission & Stipend Release', detail: 'Start coaching; stipend credited monthly.' }
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
  }
];
