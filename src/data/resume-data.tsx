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
    "Career Transition",
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
      start: "2017",
      end: "2020",
      description:
        "Double First Class Honours",
    },
  ],
  qualifications: [
    {
      issuer: "University of Cambridge",
      qualification: "Bachelor's Degree in Human Social and Political Sciences",
      start: "2017",
      end: "2020",
      description:
        "Double First Class Honours",
    },
  ],
  work: [
    {
      company: "Parabol",
      link: "https://parabol.co",
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Clevertech",
      link: "https://clevertech.biz",
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: [],
      title: "Android Developer → Lead Android Developer",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description:
        "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description: "Creating and testing software for LTE base stations",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],
} as const;
