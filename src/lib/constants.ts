export const siteConfig = {
  name: "Dr. Phuc Le",
  title: "Dr. Phuc Le | Head of Research",
  description:
    "Portfolio of Dr. Phuc Le - Head of Research & Content at Concero, PhD in Applied Physics.",
  url: "https://phuchoangle.github.io",
  email: "lh.phucc@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/phuchoangle/",
    twitter: "https://x.com/phuchoanglevn",
    scholar:
      "https://scholar.google.com/citations?user=6_PuKpwAAAAJ&hl=en",
  },
};

export interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  tag: string;
}

export const experiences: Experience[] = [
  {
    date: "Jan 2025 – Present",
    title: "Head of Research & Content",
    company: "Concero Labs",
    description:
      "Leading protocol architecture and technical strategy. Authored core whitepapers (Concero V2 & Lanca Bridging Framework) and managing go-to-market content strategy.",
    tag: "Current Role",
  },
  {
    date: "Aug 2023 – Present",
    title: "Chainlink Community Advocate",
    company: "Chainlink",
    description:
      "Technical liaison connecting Web3 projects with Chainlink Labs. Organizing developer meetups and educational initiatives in Vietnam and Australia.",
    tag: "Community",
  },
  {
    date: "Dec 2022 – Dec 2024",
    title: "Research Lead",
    company: "AlphaTrue",
    description:
      "Led technical discovery of DeFi applications for enterprise investment. Delivered educational seminars on blockchain mechanics.",
    tag: "Blockchain Research",
  },
  {
    date: "May 2019 – Dec 2024",
    title: "Post-doctoral Fellow & Technical Officer",
    company: "RMIT University & Univ. of Melbourne",
    description:
      'Supervised PhD students, managed high-level research projects, and published media-impactful research (e.g., "Micro-spikes for Superbugs").',
    tag: "Academia",
  },
  {
    date: "May 2019 – Dec 2022",
    title: "PhD in Applied Physics",
    company: "RMIT University, Melbourne",
    description:
      "Focus on Biophysics and Nano-material science. Granted Full Scholarship by ARC Research Hub for Australian Steel Manufacturing.",
    tag: "Education",
  },
  {
    date: "Nov 2017 – Apr 2019",
    title: "Co-founder",
    company: "HIA Corner (F&B Brand)",
    description:
      "Founded and scaled business to 2 stores. Achieved 50% sales growth in the first year before exiting to pursue PhD.",
    tag: "Entrepreneurship",
  },
  {
    date: "Sep 2011 – Sep 2015",
    title: "BSc in Biotechnology",
    company: "International University - VNU, Vietnam",
    description:
      "Mitacs Globalink Research Internship Award at Simon Fraser University, Canada.",
    tag: "Education",
  },
];
