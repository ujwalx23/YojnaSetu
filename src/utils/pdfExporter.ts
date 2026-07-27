import jsPDF from 'jspdf';
import { Scheme, UserProfile, SchemeMatchResult } from '../types';

export function generateSchemePDF(scheme: Scheme, matchResult?: SchemeMatchResult, profile?: UserProfile) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  // Header Banner
  doc.setFillColor(6, 3, 141); // Govt Navy
  doc.rect(0, 0, pageWidth, 35, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('YojnaSetu Official Information Guide', 14, 18);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Generated on ${new Date().toLocaleDateString()} | Government & Private Scheme Portal`, 14, 26);

  let y = 45;

  // Scheme Title
  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  const splitTitle = doc.splitTextToSize(scheme.title, pageWidth - 28);
  doc.text(splitTitle, 14, y);
  y += splitTitle.length * 8 + 4;

  // Metadata Box
  doc.setFillColor(241, 245, 249);
  doc.rect(14, y, pageWidth - 28, 24, 'F');
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.text(`Department: ${scheme.department}`, 18, y + 8);
  doc.text(`Category: ${scheme.category} | Type: ${scheme.schemeType}`, 18, y + 15);
  doc.text(`Max Benefit: ₹${scheme.maxBenefitAmount.toLocaleString('en-IN')} | Deadline: ${scheme.deadline}`, 18, y + 21);

  y += 32;

  // Match Summary if available
  if (matchResult) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(37, 99, 235);
    doc.text(`Your AI Match Score: ${matchResult.matchScore}% (${matchResult.status})`, 14, y);
    y += 8;
  }

  // Description
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text('Overview & Objective:', 14, y);
  y += 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(51, 65, 85);
  const splitDesc = doc.splitTextToSize(scheme.fullDescription, pageWidth - 28);
  doc.text(splitDesc, 14, y);
  y += splitDesc.length * 5 + 8;

  // Key Benefits
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text('Key Benefits & Subsidies:', 14, y);
  y += 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  scheme.benefitsList.forEach((b) => {
    const splitB = doc.splitTextToSize(`• ${b}`, pageWidth - 32);
    doc.text(splitB, 18, y);
    y += splitB.length * 5;
  });
  y += 6;

  // Required Documents
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text('Required Documents:', 14, y);
  y += 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  scheme.requiredDocuments.forEach((docName) => {
    doc.text(`[  ]  ${docName}`, 18, y);
    y += 5;
  });
  y += 8;

  // Official Link & Contact
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(37, 99, 235);
  doc.text(`Official Application Portal: ${scheme.applicationLink}`, 14, y);
  y += 6;
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(9);
  doc.text(`Toll-Free Helpline: ${scheme.contactHelpdesk} | Source: ${scheme.officialWebsite}`, 14, y);

  doc.save(`${scheme.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}_guide.pdf`);
}
