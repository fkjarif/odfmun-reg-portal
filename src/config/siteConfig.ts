export const siteConfig = {
  conference: {
    fullName: "Omni Model United Nations Conference 2026",
    shortName: "OMNIMUNC'26",
    organiser: "Omni Diplomatic Forum",
    organiserShort: "ODF",
    slogan: "Diplomacy for All.",
    datesLabel: "26 — 27 — 28 December 2026",
    datesShort: "26–28 December 2026",
    openingDateISO: "2026-12-26T09:00:00+06:00",
    venue: "Uttara University",
    venueCountry: "Uttara University · Bangladesh",
    eligibility: "No specific eligibility restrictions.",
  },
  logos: {
    odf: "https://i.postimg.cc/T25L1PYj/odf-logo-removebg-preview.png",
    uttaraUniversity: "https://www.uttara.ac.bd/wp-content/uploads/2023/07/black-uu-logo.png",
  },
  contact: {
    emails: ["omnidiplomaticforum@gmail.com", "mail@odfbd.org"],
  },
  socials: {
    facebook: "https://facebook.com/OMNIDF",
    instagram: "https://instagram.com/odf.official_",
    linktree: "https://linktr.ee/odf.official",
  },
  maps: {
    directionsUrl: "https://maps.app.goo.gl/hnk2M6uvARhsG1p26",
    embedUrl: "https://maps.google.com/maps?q=Uttara%20University%20Bangladesh&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
  paymentConfirmation: {
    heading: "Already Paid?",
    text: "Complete your payment confirmation using the official form.",
    cta: "CONFIRM YOUR PAYMENT",
    url: "https://forms.gle/5HDazDKswUx57W656",
  },
};

export type RegistrationStatus = "open" | "coming-soon";

export interface RegistrationPathway {
  id: string;
  index: string;
  category: string;
  scriptWord: string;
  title: string;
  description: string;
  fee: string | null;
  feeNote?: string;
  status: RegistrationStatus;
  statusLabel: string;
  cta: string;
  url: string | null;
  audience: "delegate" | "ambassador" | "board";
  audienceLabel: string;
}

export const registrationPathways: RegistrationPathway[] = [
  {
    id: "regular-bird",
    index: "I",
    category: "Delegate Registration",
    scriptWord: "Regular",
    title: "Regular Bird",
    description: "The principal pathway for delegates taking their seat at the conference table this December.",
    fee: "BDT 2,550",
    status: "open",
    statusLabel: "Registration Open",
    cta: "REGISTER AS A DELEGATE",
    url: "https://forms.gle/pJK55BUdSky2gbry7",
    audience: "delegate",
    audienceLabel: "For Delegates",
  },
  {
    id: "late-bird",
    index: "II",
    category: "Delegate Registration",
    scriptWord: "Late",
    title: "Late Bird",
    description: "The final delegate registration window. Its opening date and form will be announced by the Omni Diplomatic Forum.",
    fee: "BDT 3,060",
    feeNote: "Opening date to be announced",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    cta: "REGISTRATION OPENING SOON",
    url: null, // ← ODF: add the Late Bird Google Form URL here and set status to "open" to activate.
    audience: "delegate",
    audienceLabel: "For Delegates",
  },
  {
    id: "campus-ambassador",
    index: "III",
    category: "Ambassador Programme",
    scriptWord: "Campus",
    title: "Campus Ambassador",
    description: "Represent OMNIMUNC'26 within your institution and bring your campus to the diplomatic table.",
    fee: "BDT 2,050",
    status: "open",
    statusLabel: "Registration Open",
    cta: "BECOME A CAMPUS AMBASSADOR",
    url: "https://forms.gle/MkpL2gaHLFALEv788",
    audience: "ambassador",
    audienceLabel: "For Ambassadors",
  },
  {
    id: "executive-board",
    index: "IV",
    category: "Board Application",
    scriptWord: "Executive",
    title: "Executive Board",
    description: "Apply to join the Executive Board and help shape the proceedings of OMNIMUNC'26.",
    fee: null,
    feeNote: "See official form for details",
    status: "open",
    statusLabel: "Applications Open",
    cta: "APPLY FOR EXECUTIVE BOARD",
    url: "https://forms.gle/y6MPkErFyeAr9Lp78",
    audience: "board",
    audienceLabel: "For Board Applicants",
  },
  {
    id: "secretariat-board",
    index: "V",
    category: "Board Application",
    scriptWord: "Secretariat",
    title: "Secretariat Board",
    description: "Apply to join the Secretariat Board — the organising heart of the conference.",
    fee: null,
    feeNote: "See official form for details",
    status: "open",
    statusLabel: "Applications Open",
    cta: "APPLY FOR SECRETARIAT BOARD",
    url: "https://forms.gle/Wpbd9U1MY5pZfEHYA",
    audience: "board",
    audienceLabel: "For Board Applicants",
  },
];

export const campusAmbassadorIncentives = [
  {
    title: "Registration Fee Refund",
    text: "A Campus Ambassador who successfully brings at least 10 paid delegates through their referral receives a refund of their registration fee.",
  },
  {
    title: "Top Ambassador Award",
    text: "The Campus Ambassador with the highest number of referred paid delegates receives BDT 7,000.",
  },
];

export const faqs = [
  {
    q: "What is OMNIMUNC'26?",
    a: "OMNIMUNC'26 is the Omni Model United Nations Conference 2026, organised by the Omni Diplomatic Forum (ODF) under the slogan “Diplomacy for All.” It is an opportunity to engage with global affairs, exchange perspectives, challenge ideas and experience the art of diplomacy.",
  },
  {
    q: "When will the conference take place?",
    a: "The conference takes place over three days — 26, 27 and 28 December 2026.",
  },
  {
    q: "Where will the conference take place?",
    a: "OMNIMUNC'26 will be hosted at Uttara University, Bangladesh. Use the Get Directions button in the Venue section to open the location in Google Maps.",
  },
  {
    q: "Who can register?",
    a: "There are no specific eligibility restrictions. Registration is open through the official pathways listed on this portal.",
  },
  {
    q: "How much does Regular Bird registration cost?",
    a: "Regular Bird delegate registration costs BDT 2,550, and registration is currently open via the official Google Form.",
  },
  {
    q: "How much does Campus Ambassador registration cost?",
    a: "Campus Ambassador registration costs BDT 2,050, and registration is currently open via the official Google Form.",
  },
  {
    q: "What are the Campus Ambassador incentives?",
    a: "A Campus Ambassador who successfully brings at least 10 paid delegates through their referral receives a refund of their registration fee. Additionally, the Campus Ambassador with the highest number of referred paid delegates receives BDT 7,000 as the Top Ambassador Award.",
  },
  {
    q: "How do I confirm my payment?",
    a: "After paying, complete the official Payment Confirmation form linked on this portal under “Already Paid?” so the organisers can verify and confirm your registration.",
  },
  {
    q: "When will Late Bird registration open?",
    a: "Late Bird registration (BDT 3,060) is coming soon. Its opening date and registration link have not yet been announced — they will be published by the Omni Diplomatic Forum. Please check back here for the official announcement.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Registration", href: "#registration" },
  { label: "Venue", href: "#venue" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
