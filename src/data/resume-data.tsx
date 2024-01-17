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
    "Ex-City Banker | Looking to Career Transition into AI Ethics, Public Policy, Consulting or FinTech",
  summary:
    "I am a dedicated and diligent professional with a diverse background in capital markets and consulting. Coupled with my Undergraduate degree in Human, Social and Political Sciences, I have built up a differentiated set of skills and experiences for someone in the earlier stages of their career.",
  avatarUrl: "https://media.licdn.com/dms/image/D4E03AQFnlu1lszt-bg/profile-displayphoto-shrink_800_800/0/1703346459882?e=1710979200&v=beta&t=jEIpcuLfaSfiT3fvj_ZGsJ6rPgD5znFYHgUmpujOydY",
  personalWebsiteUrl: "https://resume.theobearman.com",
  contact: {
    email: "twmb97@hotmail.com",
    tel: "+44 7825 990 484",
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
      start: "2011",
      end: "2016",
      description:
        "Double First Class Honours",
    },
    {
      school: "University College School, London",
      degree: "A Levels",
      start: "2017",
      end: "2020",
      description:
        "Government and Politics (A*), History (A*), Geography (A*)",
    },
  ],
  qualifications: [
    {
      issuer: "LSE Online",
      issuerLink: "https://lse.credential.getsmarter.com/14e37e04-ac93-4dd8-bd1d-25f8bab44eb7",
      qualification: "Ethics of AI",
      start: "2017",
      end: "2020",
    },
  ],
  work: [
    {
      company: "HSBC",
      title: "High Touch UK & Pan-European Equity Sales Trade, London",
      start: "September 2021",
      end: "December 2023",
      description:
        "High Touch Cash Equity Sales Trader primarily working in the UK and Developed European markets. Coverage for a diverse client base including: Hedge Funds; SWFs; Asset Managers and Pension Funds. Working experience of CEEMEA and Asian markets as well as Programme Trading, developed during a four-month assignment to Paris. Other roles include: Assistant Product Owner for strategic IOI platforms; Front Office point-of-contact for algo and quant development and testing; ECM market analysis; Research, specialist sales and corporate access distribution; Business development and oversight of new client onboarding.",
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
        "One of sixteen school leavers selected for this programme from over one thousand candidates. The second half of the internship was spent working in a Business Development role, reporting directly to a Global Managing Director. Responsibilities included preparing detailed reports on a range of customs and border agencies, as well as contributing to new thought-leadership material around how emerging technologies, such as AI and blockchain, can help to address challenges these bodies face in discharging their responsibilities.,
    },
  ],
  skills: [
    "Research"
    "Public Speaking"
    "Investing"
    "HTML",
    "TypeScript",
    "Bloomberg Terminal",
    "Microsoft Office Suite",
  ],
} as const;
