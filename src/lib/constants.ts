export const siteConfig = {
  name: "Dr. Phuc Le",
  title: "Phuc Le - Researcher, Builder, Storyteller",
  description:
    "PhD physicist turned blockchain researcher. I design cross-chain protocols at Concero and make complex tech make sense.",
  url: "https://phuchoangle.github.io",
  email: "lh.phucc@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/phuchoangle/",
    twitter: "https://x.com/phuchoanglevn",
    github: "https://github.com/phuchoangle",
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
      "Co-designed the protocol architecture for Lanca & Concero with our CTO. Wrote both core whitepapers, built out all technical docs, and ran content strategy that helped drive 100K+ testnet signups and $100M+ in bridge volume.",
    tag: "Current Role",
  },
  {
    date: "Aug 2023 – Present",
    title: "Chainlink Community Advocate",
    company: "Chainlink",
    description:
      "Connecting Web3 teams with Chainlink for oracle integration. Organised 10+ developer meetups across Vietnam and Australia. Featured as one of the most active advocates on the Chainlink website.",
    tag: "Community",
  },
  {
    date: "Dec 2022 – Dec 2024",
    title: "Research Lead",
    company: "AlphaTrue",
    description:
      "Researched DeFi protocols to guide enterprise investment decisions. Ran educational seminars on blockchain mechanics and wrote market reports for the Vietnamese ecosystem.",
    tag: "Blockchain Research",
  },
  {
    date: "May 2019 – Dec 2024",
    title: "Post-doctoral Fellow & Technical Officer",
    company: "RMIT University & University of Melbourne",
    description:
      "Designed experiments, analysed datasets, supervised PhD students, and helped secure government funding. Our research on micro-spiked surfaces for killing superbugs was picked up by ScienceDaily and IFLScience.",
    tag: "Academia",
  },
  {
    date: "May 2019 – Dec 2022",
    title: "PhD in Applied Physics",
    company: "RMIT University, Melbourne",
    description:
      "Biophysics and Nanomaterial Science. Full scholarship from ARC Research Hub. Three years of lab work, data analysis, and learning how to explain hard things clearly.",
    tag: "Education",
  },
  {
    date: "Nov 2017 – Apr 2019",
    title: "Co-founder",
    company: "HIA Corner (F&B Brand)",
    description:
      "Built a food brand from scratch - 2 stores, 50% sales growth in year one. Learned more about hustle, marketing, and resilience here than anywhere else. Left to pursue a PhD.",
    tag: "Entrepreneurship",
  },
  {
    date: "Sep 2011 – Sep 2015",
    title: "BSc in Biotechnology",
    company: "International University – VNU, Vietnam",
    description:
      "Where it all started. Won a Mitacs Globalink Research Internship to spend a summer doing research at Simon Fraser University in Canada.",
    tag: "Education",
  },
];
