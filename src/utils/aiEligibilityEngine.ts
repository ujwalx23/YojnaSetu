import { Scheme, UserProfile, SchemeMatchResult } from '../types';

export function evaluateSchemeEligibility(scheme: Scheme, profile: UserProfile): SchemeMatchResult {
  let matchScore = 100;
  const reasons: string[] = [];
  const warnings: string[] = [];
  const missingDocuments: string[] = [];
  let isHardFailed = false;

  const e = scheme.eligibility;

  // 1. Age Constraint Check
  if (e.minAge !== undefined && profile.age < e.minAge) {
    if (e.minAge - profile.age <= 3) {
      warnings.push(`You are currently ${profile.age} years old. This scheme requires minimum age of ${e.minAge}. You will become eligible in ${e.minAge - profile.age} year(s).`);
      matchScore -= 25;
    } else {
      reasons.push(`Age limit mismatch: Scheme requires minimum age of ${e.minAge}, but you are ${profile.age}.`);
      matchScore -= 40;
      isHardFailed = true;
    }
  }

  if (e.maxAge !== undefined && profile.age > e.maxAge) {
    reasons.push(`Age limit exceeded: Scheme maximum allowed age is ${e.maxAge}, but you are ${profile.age}.`);
    matchScore -= 50;
    isHardFailed = true;
  }

  // 2. Gender Match
  if (e.targetGender && e.targetGender !== 'All') {
    if (profile.gender !== e.targetGender) {
      reasons.push(`Target gender mismatch: Scheme is exclusively targeted at ${e.targetGender} applicants.`);
      matchScore -= 60;
      isHardFailed = true;
    } else {
      reasons.push(`Target gender matched: Exclusively for ${e.targetGender} applicants.`);
    }
  }

  if (e.isForWomenOnly && profile.gender !== 'Female') {
    reasons.push(`Women empowerment scheme: Only female applicants are eligible.`);
    matchScore -= 60;
    isHardFailed = true;
  }

  // 3. State Availability Check
  if (scheme.stateAvailability && !scheme.stateAvailability.includes('All India')) {
    if (!scheme.stateAvailability.includes(profile.state)) {
      reasons.push(`State domicile mismatch: Scheme is available in ${scheme.stateAvailability.join(', ')}. Your profile state is ${profile.state}.`);
      matchScore -= 50;
      isHardFailed = true;
    } else {
      reasons.push(`State domicile matched: Available in ${profile.state}.`);
    }
  }

  // 4. Annual Income Cap
  if (e.maxAnnualFamilyIncome !== undefined) {
    if (profile.annualFamilyIncome > e.maxAnnualFamilyIncome) {
      const diff = profile.annualFamilyIncome - e.maxAnnualFamilyIncome;
      reasons.push(`Family income cap exceeded: Max allowed income is ₹${e.maxAnnualFamilyIncome.toLocaleString('en-IN')}, but your profile income is ₹${profile.annualFamilyIncome.toLocaleString('en-IN')}.`);
      matchScore -= 45;
      isHardFailed = true;
    } else {
      reasons.push(`Income criteria satisfied: Family income ₹${profile.annualFamilyIncome.toLocaleString('en-IN')} is within cap of ₹${e.maxAnnualFamilyIncome.toLocaleString('en-IN')}.`);
    }
  }

  // 5. Occupation & Student / Farmer / Business Flags
  if (e.requiresLandHolding && !profile.isFarmer) {
    reasons.push(`Requires agricultural land holding record in applicant name.`);
    matchScore -= 40;
    isHardFailed = true;
  }

  if (e.isForStartupsOnly && !profile.isStartupFounder && !profile.isBusinessOwner) {
    reasons.push(`Targeted at registered startups and early-stage entrepreneurs.`);
    matchScore -= 35;
  }

  if (e.allowedOccupations && e.allowedOccupations.length > 0) {
    const occMatch = e.allowedOccupations.some(o => 
      profile.occupation.toLowerCase().includes(o.toLowerCase()) || 
      (o === 'Farmer' && profile.isFarmer) ||
      (o === 'Student' && profile.isStudent) ||
      (o === 'Business Owner' && profile.isBusinessOwner)
    );
    if (!occMatch) {
      warnings.push(`Occupation preferred: Scheme targets ${e.allowedOccupations.join(', ')}.`);
      matchScore -= 15;
    } else {
      reasons.push(`Occupation matched: Fits ${profile.occupation} target group.`);
    }
  }

  // 6. Category Check (SC/ST/OBC/General/EWS)
  if (e.allowedCategories && e.allowedCategories.length > 0) {
    if (!e.allowedCategories.includes(profile.casteCategory)) {
      warnings.push(`Category target: Scheme is reserved for ${e.allowedCategories.join(', ')} categories.`);
      matchScore -= 20;
    } else {
      reasons.push(`Category matched: Reserved for ${profile.casteCategory} category.`);
    }
  }

  // 7. Required Documents Check
  scheme.requiredDocuments.forEach(doc => {
    const hasDoc = profile.availableDocuments.some(userDoc => 
      userDoc.toLowerCase().includes(doc.toLowerCase()) ||
      doc.toLowerCase().includes(userDoc.toLowerCase())
    );
    if (!hasDoc) {
      missingDocuments.push(doc);
      matchScore -= 5;
    }
  });

  if (missingDocuments.length > 0) {
    warnings.push(`You are missing ${missingDocuments.length} required document(s): ${missingDocuments.join(', ')}.`);
  }

  // Final Score Normalization
  matchScore = Math.max(0, Math.min(100, matchScore));

  let status: 'Eligible' | 'Likely Eligible' | 'Future Eligible' | 'Not Eligible' = 'Eligible';
  
  if (isHardFailed || matchScore < 45) {
    status = 'Not Eligible';
  } else if (warnings.some(w => w.includes('Future') || w.includes('become eligible'))) {
    status = 'Future Eligible';
  } else if (matchScore >= 80 && missingDocuments.length === 0) {
    status = 'Eligible';
  } else {
    status = 'Likely Eligible';
  }

  return {
    scheme,
    matchScore,
    status,
    reasons,
    missingDocuments,
    warnings
  };
}

export function rankSchemesForProfile(schemes: Scheme[], profile: UserProfile): SchemeMatchResult[] {
  return schemes
    .map(scheme => evaluateSchemeEligibility(scheme, profile))
    .sort((a, b) => b.matchScore - a.matchScore);
}
