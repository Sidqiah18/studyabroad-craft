import destUk from "@/assets/dest-uk.jpg";
import destUsa from "@/assets/dest-usa.jpg";
import destAustralia from "@/assets/dest-australia.jpg";
import destCanada from "@/assets/dest-canada.jpg";
import destEurope from "@/assets/dest-europe.jpg";
import destMalaysia from "@/assets/dest-malaysia.jpg";
import destTurkey from "@/assets/dest-turkey.jpg";
import destUae from "@/assets/dest-uae.jpg";

export type Destination = {
  slug: string;
  name: string;
  flag: string;
  note: string;
  img: string;
  tagline: string;
  intro: string;
  highlights: string[];
  universities: string[];
  intakes: string;
  tuition: string;
  living: string;
  work: string;
  requirements: string[];
};

export const destinations: Destination[] = [
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    note: "Your global education journey starts here—UK",
    img: destUk,
    tagline: "World-ranked universities and one-year master's degrees",
    intro:
      "The UK remains the first choice for Pakistani students thanks to globally respected degrees, shorter program lengths. ",
    highlights: [
      "One-year master's programmes reduce total cost",
      "Major Global hub for higher education",
      "Scholarships such as Chevening and university merit awards",
      "Large Pakistani student community and direct flights",
    ],
    universities: [
      "University of Manchester",
      "University of Glasgow",
      "Coventry University",
      "University of Hertfordshire",
      "Queen Mary University of London",
    ],
    intakes: "January, May and September",
    tuition: "£16,000 – £40,000 per year",
    living: "£14,052 – £18,360 per year",
    work: "20 hours per week ",
    requirements: [
      "Academic transcripts and degree certificates",
      "IELTS 6.0–6.5 (or approved alternative)",
      "Statement of purpose and academic references",
      "Financial maintenance funds held for 28 days",
      "Valid passport and TB test certificate",
    ],
  },
  {
    slug: "united-states",
    name: "United States",
    flag: "🇺🇸",
    note: "Your global education journey starts here—USA",
    img: destUsa,
    tagline: "Flexible degrees, research funding and OPT work rights",
    intro:
      "The USA offers the widest choice of programmes in the world, with generous assistantships, research funding and unparalleled range of academic excellence",
    highlights: [
      "Over 4,000 accredited universities and colleges",
      "Major Global hub for higher education",
      "Merit scholarships and graduate assistantships",
      "Change majors and build a flexible course plan",
    ],
    universities: [
      "Arizona State University",
      "University of Texas at Dallas",
      "Purdue University",
      "Northeastern University",
      "University of Illinois Chicago",
    ],
    intakes: "Fall (August) and Spring (January)",
    tuition: "$17,000 – $100,000 per year",
    living: "$10,000 – $20,000 per year",
    work: "20 hours per week on campus during term",
    requirements: [
      "Transcripts with strong GPA",
      "TOEFL 105–112, IELTS 7.5–8, and Duolingo 135–145",
      "SOP, resume and letters of recommendation",
      "I-20 issuance and SEVIS fee payment",
      "Bank statements covering one year of study",
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    note: "Your global education journey starts here—Australia",
    img: destAustralia,
    tagline: "Strong post-study work rights and a high quality of life",
    intro:
      "Australia combines G-8 universities with generous post-study work visas and unlimited work rights during vacation, making it a favorite for career-focused students.",
    highlights: [
      "2–4 year Temporary Graduate (485) visa",
      "Group of Eight universities ranked globally",
      "Regional study bonus points for permanent residency",
      "Safe cities with a large international community",
    ],
    universities: [
      "Monash University",
      "University of Sydney",
      "Deakin University",
      "RMIT University",
      "University of Adelaide",
    ],
    intakes: "February, July and November",
    tuition: "AUD 45,000 – 70,000 per year",
    living: "AUD 24,00 per year (visa requirement)",
    work: "48 hours per fortnight during term",
    requirements: [
      "Academic documents and IELTS 6.0–6.5",
      "Genuine Student (GS) statement",
      "Overseas Student Health Cover (OSHC)",
      "Proof of funds for tuition and living costs",
      "Confirmation of Enrolment (CoE)",
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    note: "Your global education journey starts here—Canada",
    img: destCanada,
    tagline: "Affordable tuition with a clear pathway to residency",
    intro:
      "Canada offers high-quality education at competitive fees, plus a Post-Graduation Work Permit of up to three years and well-defined immigration pathways.",
    highlights: [
      "Post-Graduation Work Permit up to 3 years",
      "Lower tuition than the USA and UK",
      "Express Entry pathways for graduates",
      "Co-op and paid internship programmes",
    ],
    universities: [
      "University of Windsor",
      "Toronto Metropolitan University",
      "Conestoga College",
      "University of Manitoba",
      "Thompson Rivers University",
    ],
    intakes: "January, May and September",
    tuition: "CAD 15,000 – 30,000 per year",
    living: "CAD 12,000 – 15,000 per year",
    work: "24 hours per week off campus during term",
    requirements: [
      "IELTS 6.0–6.5 with no band below 6.0",
      "Letter of acceptance from a DLI",
      "Provincial Attestation Letter where required",
      "GIC and first-year tuition payment",
      "Medical examination and biometrics",
    ],
  },
  {
    slug: "europe",
    name: "Europe",
    flag: "🇪🇺",
    note: "Your global education journey starts here—Europe",
    img: destEurope,
    tagline: "Low-cost, English-taught degrees across the Schengen area",
    intro:
      "Germany, Italy, France, Sweden and the Netherlands offer English-taught programmes at very low or zero tuition, with Schengen mobility and strong graduate job markets.",
    highlights: [
      "Tuition-free public universities in Germany",
      "Schengen travel access across 27 countries",
      "9–18 month job-seeker visas after graduation",
      "Strong engineering, business and design faculties",
    ],
    universities: [
      "Technical University of Munich",
      "University of Milan",
      "Lund University",
      "University of Amsterdam",
      "Sapienza University of Rome",
    ],
    intakes: "Winter (September) and Summer (February)",
    tuition: "€0 – €12,000 per year depending on country",
    living: "€8,000 – €12,000 per year",
    work: "Typically 20 hours per week during term",
    requirements: [
      "Attested transcripts and degree equivalence",
      "IELTS 6.0–6.5 or country-specific tests",
      "Blocked account or scholarship proof",
      "Motivation letter and CV",
      "Health insurance and accommodation proof",
    ],
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    note: "Your global education journey starts here—Malaysia",
    img: destMalaysia,
    tagline: "International branch campuses at a fraction of the cost",
    intro:
      "Malaysia hosts branch campuses of leading UK and Australian universities, letting you earn a Western degree in Asia with low tuition and living costs.",
    highlights: [
      "UK and Australian branch campus degrees",
      "Very affordable tuition and living expenses",
      "Muslim-friendly, English-speaking environment",
      "Simple and fast student visa process",
    ],
    universities: [
      "Monash University Malaysia",
      "Taylor's University",
      "Asia Pacific University",
      "UCSI University",
      "University of Nottingham Malaysia",
    ],
    intakes: "January, May and September",
    tuition: "MYR 20,000 – 45,000 per year",
    living: "MYR 12,000 – 18,000 per year",
    work: "20 hours per week during semester breaks",
    requirements: [
      "Academic transcripts and certificates",
      "IELTS 5.5–6.0 (foundation options available)",
      "EMGS visa application and medical screening",
      "Passport valid for 18 months",
      "Proof of financial support",
    ],
  },
  {
    slug: "turkey",
    name: "Turkey",
    flag: "🇹🇷",
    note: "Your global education journey starts here—Turkey",
    img: destTurkey,
    tagline: "Affordable European-standard education bridging two continents",
    intro:
      "Turkish universities follow the Bologna system, offer English-taught programmes and remain one of the most affordable destinations for Pakistani students.",
    highlights: [
      "Bologna-recognised degrees across Europe",
      "Türkiye Bursları government scholarships",
      "Low tuition and very low living costs",
      "Strong medicine, engineering and business faculties",
    ],
    universities: [
      "Koç University",
      "Bilkent University",
      "Istanbul Aydın University",
      "Middle East Technical University",
      "Sabancı University",
    ],
    intakes: "September and February",
    tuition: "USD 3,000 – 12,000 per year",
    living: "USD 4,000 – 6,000 per year",
    work: "Part-time permitted after the first year",
    requirements: [
      "Attested academic documents",
      "IELTS or university English test",
      "YÖS/SAT for some undergraduate programmes",
      "Passport and student visa from the Turkish consulate",
      "Proof of accommodation and funds",
    ],
  },
  {
    slug: "uae",
    name: "UAE",
    flag: "🇦🇪",
    note: "Your global education journey starts here—UAE",
    img: destUae,
    tagline: "Global campuses close to home with strong job prospects",
    intro:
      "Dubai and Abu Dhabi host international branch campuses with tax-free graduate salaries, short flights home and a fast-growing job market.",
    highlights: [
      "Western degrees awarded in Dubai and Abu Dhabi",
      "Tax-free earnings and internship opportunities",
      "Short travel time and familiar culture",
      "Green visa and golden visa pathways for graduates",
    ],
    universities: [
      "University of Birmingham Dubai",
      "Heriot-Watt University Dubai",
      "Middlesex University Dubai",
      "Khalifa University",
      "American University of Sharjah",
    ],
    intakes: "September and January",
    tuition: "AED 40,000 – 75,000 per year",
    living: "AED 30,000 – 45,000 per year",
    work: "Part-time allowed with university and visa approval",
    requirements: [
      "Attested transcripts and certificates",
      "IELTS 6.0–6.5",
      "Passport copy and Emirates ID processing",
      "Medical fitness test",
      "Proof of tuition and living funds",
    ],
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
