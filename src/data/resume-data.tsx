import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Theo Bearman",
  initials: "TB",
  location: "London, United Kingdom",
  about:
    "AI Risk Adviser | Central AI Risk Function (CAIRF) | Department for Science, Innovation and Technology (DSIT)",
  summary:
    "I am a dedicated and diligent professional with a diverse background in capital markets and consulting. Coupled with my Undergraduate degree in Human, Social and Political Sciences, I have built up a differentiated set of skills and experiences for someone in the earlier stages of their career.",
  avatarUrl: "https://theobearman.com/images/cv_main.jpeg",
  personalWebsiteUrl: "https://resume.theobearman.com",
  contact: {
    email: "theo@theobearman.com",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/theobearman/",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/TheoBearman",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "https://x.com/theobearman",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Cambridge",
      degree: "Bachelor's Degree in Human Social and Political Sciences",
      start: "October 2017",
      end: "July 2020",
      description:
        "Double First Class Honours",
    },
    {
      school: "University College School, London",
      degree: "A Levels",
      start: " September 2011",
      end: "July 2016",
      description:
        "Government and Politics (A*), History (A*), Geography (A*)",
    },
  ],
  qualifications: [
    {
      issuer: "LSE Online",
      issuerlink: "https://lse.credential.getsmarter.com/14e37e04-ac93-4dd8-bd1d-25f8bab44eb7",
      qualification: "Ethics of AI",
      awarded: "December 2023",
    },
    {
      issuer: "Fitch Learning",
      issuerlink: "https://1drv.ms/b/s!ArPsDGXjGTZoiJM2zEM9iEz49mIDBQ?e=mGCLCV",
      qualification: "ESG Fundamentals Certificate",
      awarded: "May 2022",
    },
    {
      issuer: "The CISI",
      issuerlink: "https://1drv.ms/b/s!ArPsDGXjGTZoiIRMOabFBHHTukXeVw?e=96zTsR",
      qualification: "Level 3 Certificate in Investment Operations (Securities, Derivatives and Regulations)",
      awarded: "October 2020",
    },
    {
      issuer: "Financial Conduct Authority",
      issuerlink: "https://register.fca.org.uk/s/individual?id=0034G00002nGnr4QAC",
      qualification: "Certified Person (CF30)",
      awarded: "November 2020 - December 2023",
    },
  ],
  work: [
    {
      company: "Department for Science, Innovation and Technology (DSIT)",
      title: "AI Risk Adviser",
      start: "May 2024",
      end: "Present",
      description:
        "Cross-government policy and coordination of AI-exacerbated risks and contingency planning.",
    },
     {
      company: "Luciana Berger",
      title: "Mental Health Policy Researcher, London",
      start: "January 2024",
      end: "April 2024",
      description:
        "Luciana Berger (former Labour Party MP for Liverpool Wavertree and Shadow Minister for Mental Health) has recently been asked by The Labour Party to conduct a review which will deliver recommendations on a cross-government strategy for the long-term prevention of mental ill-health. I supported Luciana as her researcher for this review.",
    },
    {
      company: "HSBC",
      title: "High-Touch UK & Pan-European Equity Sales Trader, London",
      start: "September 2021",
      end: "December 2023",
      description:
        "High Touch Cash Equity Sales Trader primarily working in the UK and Developed European markets. Coverage for a diverse client base including: Hedge Funds; SWFs; Asset Managers and Pension Funds. Working experience of CEEMEA and Asian markets as well as Programme Trading, developed during a four-month assignment to Paris. Other roles included: Assistant Product Owner for strategic IOI platforms; Front Office point-of-contact for algo and quant development and testing; ECM market analysis; Research, specialist sales and corporate access distribution; Business development and management of new client onboarding.",
    },
    {
      company: "HSBC",
      title: "Graduate Analyst, London",
      start: "September 2020",
      end: "September 2021",
      description:
        "One-year graduate programme consisting of the CISI Level 3 Certificate in Investment Operations and three-month rotations on the Corporate FX (spot, swap, forward, options) and Money Markets, Multi-Asset Emerging Markets (FX Spot and Swap, Rates and Credit) and Leveraged Loan sales desks. Exposure to a variety of clients and asset classes, focussing on the development of product knowledge and network building.",
    },
    {
      company: "Accenture",
      title: "‘Horizons’ Analyst, London",
      start: "September 2016",
      end: "April 2017",
      description:
        "One of sixteen school leavers selected from over one thousand candidates for this programme. The second half of the internship was spent working in a Business Development role, reporting directly to a Global Managing Director. Responsibilities included preparing detailed reports on a range of customs and border agencies, as well as contributing to new thought-leadership material around how emerging technologies, such as AI and blockchain, can help to address challenges these bodies face in discharging their responsibilities.",
    },
  ],
  awards: [
    {
      issuer: "Department of Sociology, University of Cambridge",
      award: "The Sociology Part IIA Polity Prize",
      awarded: "June 2019",
      what: "Candidate in the Sociology stream of the Human, Social and Political Science Tripos, Part IIA with the best overall average and an overall First.",
    },
    {
      issuer: "Jesus College, University of Cambridge",
      award: "Benefactor’s (2004) Prize",
      awarded: "June 2019",
      what: "In recognition of outstanding academic performance in any part of the Tripos.",
    },
    {
      issuer: "Jesus College, University of Cambridge",
      award: "Scholar of the College",
      awarded: "June 2019",
      what: "",
    },
    {
      issuer: "Jesus College, University of Cambridge",
      award: "Exhibitioner of the College",
      awarded: "June 2019",
      what: "",
    },
    {
      issuer: "University College School",
      award: "Seifert Politics Prize",
      awarded: "May 2016",
      what: "",
    },
    {
      issuer: "University College School",
      award: "Co-Head of Evans House",
      awarded: "September 2015",
      what: "",
    },
  ],
  skills: [
    "Responsible AI",
    "Equity Investing",
    "Aviation",
    "Cooking",
    "Podcasts",
    "Reading",
    "Research",
    "Bloomberg Terminal",
    "Microsoft Office Suite",
    "HTML",
    "CSS",
    "TypeScript",
    "Azure ML Studio",
  ],
} as const;
