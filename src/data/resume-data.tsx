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
    "I am a dedicated and diligent professional with a diverse background in capital markets and consulting. Coupled with my Undergraduate degree in Human, Social and Political Sciences, I have built up a differentiated set of skills and experiences for someone in the earlier stages of their career. \n\n Honesty, consistency, teamwork and mutual respect are fundamental principles I hold, and these guide my approach to the professional world. \n\n In my role as a Cash Equity Sales-Trader at HSBC, my client-centred philosophy, strong work ethic, and skills in communication, strategic thinking, and market analysis underpinned the bespoke, relevant, and timely service I provided to a wide range of institutional interlocutors. Prior to this, my experience as a consultant at Accenture exposed me to a wide range of public policy challenges and how emerging technologies can be marshalled to help address them. \n\n In my leisure time, my interests are equally varied. I am an aspiring Private Pilot's License holder, a cooking enthusiast, and engage with opportunities for relaxation and ongoing learning in the world of podcasts and music. I am also deeply fascinated by the ethical and regulatory challenges arising from the development and deployment of AI applications, and you can often find me engaged in the latest book or podcast on the subject! \n\n I am open to opportunities and am particularly exploring those in AI Ethics and Alignment, Public Policy, Think Tanks, Governmental and Public Affairs, FinTech and Management Consulting.",
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
      start: "2017",
      end: "2020",
      description:
        "Double First Class Honours",
    },
    {
      school: "University College School, London",
      degree: "A Levels",
      start: "2011",
      end: "2016",
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
      issuerlink: "",
      qualification: "ESG Fundamentals Certificate",
      awarded: "May 2022",
    },
    {
      issuer: "The CISI",
      issuerlink: "",
      qualification: "Level 3 Certificate in Investment Operations (Securities, Derivatives and Regulations)",
      awarded: "October 2020",
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
        "One of sixteen school leavers selected for this programme from over one thousand candidates. The second half of the internship was spent working in a Business Development role, reporting directly to a Global Managing Director. Responsibilities included preparing detailed reports on a range of customs and border agencies, as well as contributing to new thought-leadership material around how emerging technologies, such as AI and blockchain, can help to address challenges these bodies face in discharging their responsibilities.",
    },
  ],
  awards: [
    {
      issuer: "Department of Sociology, University of Cambridge",
      award: "The Sociology Part IIA Polity Prize",
      awarded: "June 2019",
      what: "",
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
    "Research",
    "Investing",
    "HTML",
    "TypeScript",
    "Bloomberg Terminal",
    "Microsoft Office Suite",
  ],
} as const;
