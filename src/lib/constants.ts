export const siteConfig = {
  name: "Dr. Phuc Le",
  title: "Phuc Le - Researcher, Builder, DeFi Native",
  description:
    "PhD physicist turned cross-chain infrastructure researcher. DeFi native with deep expertise in AMMs, lending markets, MEV, and protocol design. Leading research at Concero.",
  url: "https://phuchoangle.github.io",
  email: "lh.phucc@gmail.com",
  phone: "(+61) 466 371 273",
  social: {
    linkedin: "https://www.linkedin.com/in/phuchoangle/",
    twitter: "https://x.com/phuchoanglevn",
    github: "https://github.com/phuchoangle",
    scholar:
      "https://scholar.google.com/citations?hl=en&user=6_PuKpwAAAAJ&view_op=list_works&sortby=pubdate",
    website: "https://phuchoangle.github.io",
  },
};

export interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  tag: string;
}

export const defiSkills = [
  "Cross-chain Infrastructure",
  "AMMs",
  "Lending Markets",
  "Yield Strategies",
  "Tokenomics Design",
  "On-chain Analysis",
  "Liquidity Frameworks",
];

export const experiences: Experience[] = [
  {
    date: "Jan 2025 – Present",
    title: "Head of Research & Content",
    company: "Concero Labs",
    description:
      "Co-designed rebalancing algorithm and protocol architecture with CTO, supporting $100M+ bridging volume. Authored core whitepapers (Concero V2 & Lanca Bridging Framework). Led partnership development with DeFi protocols, L2s, and liquidity providers. Managed grant applications for Avalanche, Base, OP, and Pharos. Grew social presence to 80K+ followers and drove 100K+ testnet signups.",
    tag: "Current Role",
  },
  {
    date: "Aug 2023 – Present",
    title: "Chainlink Community Advocate",
    company: "Chainlink",
    description:
      "Technical advocate connecting Web3 projects with Chainlink Labs for oracle and cross-chain service integration. Organised 10+ developer meetups across Vietnam and Australia. Recognised as one of the most active advocates in the global Chainlink community programme.",
    tag: "Community",
  },
  {
    date: "Dec 2022 – Dec 2024",
    title: "Research Lead",
    company: "AlphaTrue",
    description:
      "Led DeFi protocol due diligence and investment analysis - evaluating token economics, liquidity models, AMM mechanics, and protocol sustainability to guide capital allocation. Conducted competitive analysis across lending markets, yield strategies, and DEX primitives.",
    tag: "DeFi Research",
  },
  {
    date: "May 2019 – Dec 2024",
    title: "Post-doctoral Fellow & Technical Officer",
    company: "RMIT University & University of Melbourne",
    description:
      "Designed experiments, analysed complex datasets, supervised PhD students, and helped secure government and industry funding. Research on micro-spiked surfaces for killing superbugs was featured in ScienceDaily and IFLScience.",
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
      "Founded and scaled to 2 stores within 2 years. Led marketing strategies that drove 150% sales growth in the first year before exiting to pursue a PhD.",
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
