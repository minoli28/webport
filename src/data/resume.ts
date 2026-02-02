import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export interface Social {
  name: string;
  link: string;
  icon: IconType;
}

export interface Job {
  role: string;
  company: string;
  employmentType: string;
  location: string;
  workMode: string;
  startDate: string;
  endDate: string;
  duration: string;
  link: string;
  images: string[];
  description: string[];
  logo: string;
}

export interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string[];
  logo: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export interface Recommendation {
  name: string;
  title: string;
  avatarUrl: string;
  message: string;
}

export interface ResumeData {
  name: string;
  title: string;
  avatarUrl: string;
  bio: string;
  socials: Social[];
  skills: string[];
  education: Education[];
  jobs: Job[];
  projects: Project[];
  recommendations: Recommendation[];
}

export const resumeData: ResumeData = {
  name: "Olivier Minani",
  title: "Industrial Engineering Student",
  avatarUrl: "/olivier.jpg",
  bio: "Highly motivated Industrial Engineering student with a solid Mechanical Engineering foundation and extensive internal experience at GE Vernova. Proven track record in managing $300,000+ technical projects, optimizing complex logistics through data-driven models, and leading cross-functional teams. Extensive knowledge in Arena Simulation, Layout Planning, Inventory Management, Quality Improvement, SolidWorks, and CATIA with a commitment to continuous learning in demanding engineering environments.",
  socials: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/oliviermin",
      icon: FaLinkedin,
    },
    {
      name: "Portfolio",
      link: "https://mrmos.ca",
      icon: FaGithub, // Using Github icon for portfolio generic or change if needed, but keeping existing style
    },
    {
      name: "Email",
      link: "mailto:minaniolivier@gmail.com",
      icon: FaEnvelope,
    },
  ],
  skills: [
    "Python (NumPy, Pandas, Matplotlib)",
    "C++",
    "Six Sigma",
    "Continuous Improvement",
    "Power BI",
    "SAP (Supply Chain Management)",
    "Google Looker",
    "Jira",
    "Arena Simulation",
    "SolidWorks",
    "WMS (Warehouse Management System)",
    "Predictive Analysis (Demand Forecasting)",
    "Reverse Logistics Planning",
    "Fleet & Route Optimization",
    "Electric Vehicle Routing",
    "Samsara",
    "Geotab",
    "Google Maps API",
    "Cost-Benefit Analysis",
    "Root Cause Analysis",
    "Service Quality Improvement",
    "Change Management",
    "Project Management",
    "Team Leadership"
  ],
  education: [
    {
      school: "Concordia University",
      degree: "Bachelor of Industrial Engineering (CGPA: 3.57)",
      startDate: "",
      endDate: "Expected May 2026",
      description: [
        "Mechanical Engineering Foundation: Completed core coursework in Material Science, Mechanics of Materials, and Thermodynamics.",
        "Key Technical Courses: Operations Research, Simulation, Project Management, CAD (SolidWorks), Manufacturing Processes, and Programming (Python, C++)."
      ],
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEVRyb-pMvVgg/company-logo_200_200/B4EZoxqBdpIwAI-/0/1761769691383/concordia_university_logo?e=1771459200&v=beta&t=-8KedBh0SCLFANoHXH7WyHq3aIJIue0-trUxwXqWqOI"
    }
  ],
  jobs: [
    {
      role: 'Project Quality Intern',
      company: 'GE Vernova (Hydro Power)',
      employmentType: 'Internship',
      location: 'Brossard, QC',
      workMode: '',
      startDate: 'Jan 2026',
      endDate: 'Present',
      duration: 'Jan 2026 – Present',
      link: '',
      images: [],
      description: [
        "• Authoring detailed part and assembly Inspection and Test Plans (ITP) derived from complex engineering drawing features.",
        "• Analyzing manufactured components for non-conformities and managing standard deviation requests to ensure engineering compliance."
      ],
      logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQG3fXAI-jYu5A/company-logo_200_200/company-logo_200_200/0/1681910638687/gevernova_logo?e=1771459200&v=beta&t=LIsOUlmIKBHLgIYfIoHtaDoe0DH0b-u3oNizBWfqz24'
    },
    {
      role: 'Operations Supervisor',
      company: 'Nationex',
      employmentType: 'Permanent',
      location: 'Montreal, QC',
      workMode: '',
      startDate: 'May 2025',
      endDate: 'Present',
      duration: 'May 2025 – Present',
      link: '',
      images: [],
      description: [
        "• Directing sorting operations and resolving complex logistical bottlenecks to ensure seamless supply chain replenishment.",
        "• Managing team performance and operational KPIs in a high-velocity environment through coaching and standard operating procedure (SOP) enforcement.",
        "• Optimizing FTL and LTL logistics while proactively coordinating contingency plans for in-transit delays."
      ],
      logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQEt1gUIpdKe4Q/company-logo_200_200/company-logo_200_200/0/1699382853963/nationex_logo?e=1771459200&v=beta&t=yBSd33tUcH3E2LrLQx5Wnksp9KO1uiBP-gYJ3CQDm58'
    },
    {
      role: 'Project Quality Intern',
      company: 'GE Vernova (Hydro Power)',
      employmentType: 'Internship',
      location: 'Brossard, QC',
      workMode: '',
      startDate: 'May 2025',
      endDate: 'Aug 2025',
      duration: 'May 2025 – Aug 2025',
      link: '',
      images: [],
      description: [
        "• Developed comprehensive Inspection and Test Plans (ITP) for critical turbine and generator components.",
        "• Verified physical parts and technical documentation for strict compliance with engineering specifications.",
        "• Collaborated with engineering teams to mitigate quality deviations and enhance documentation accuracy."
      ],
      logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQG3fXAI-jYu5A/company-logo_200_200/company-logo_200_200/0/1681910638687/gevernova_logo?e=1771459200&v=beta&t=LIsOUlmIKBHLgIYfIoHtaDoe0DH0b-u3oNizBWfqz24'
    },
    {
      role: 'Area Manager (Promoted from Team Lead & Specialist)',
      company: 'GoBolt',
      employmentType: 'Permanent Full-time',
      location: 'Montreal, QC',
      workMode: '',
      startDate: 'Apr 2020',
      endDate: 'Apr 2024',
      duration: 'Apr 2020 – Apr 2024',
      link: '',
      images: [],
      description: [
        "• Technical Project Management: Orchestrated the full lifecycle of a $300,000 installation project, managing every phase from inventory receiving and warehouse logistics to site construction, commissioning, and final client sign-off.",
        "• Operational Optimization: Optimized last-mile delivery and EV-truck routing using Google Maps API and Samsara, achieving a 15% reduction in delivery time and leading the branch to become the top-performing market in the network.",
        "• Advanced Data Analytics: Leveraged SAP, Power BI, and Google Looker to perform complex demand forecasting and performance analysis, maintaining a consistent 95% On-Time-In-Full (OTIF) rate.",
        "• System Innovation: Developed low-level traffic prediction models and automated KPI reporting via Jira, reducing manual analysis time by 30% and improving ETA accuracy.",
        "• Leadership & Human Capital: Directed comprehensive team performance management for diverse shifts, conducting one-on-one development sessions and overseeing disciplinary actions to uphold high operational standards.",
        "• Risk & HSE Management: Managed emergency cost reduction strategies and identified operational risks to implement preventative health and safety protocols across multiple logistics hubs.",
        "• Supply Chain Foundations: Spearheaded reverse logistics workflows to reduce return errors by 15% and improved warehouse efficiency through WMS predictive analysis during initial internship and specialist tenures."
      ],
      logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQHrN4DVuns3Mg/company-logo_200_200/company-logo_200_200/0/1651581286082/go_bolt_logo?e=1771459200&v=beta&t=9E_i5eGumpW2fZHLAT7ZnjYZbP_paPjg7nLvHibGBXA'
    }
  ],
  projects: [
    {
      title: "Airport Ground Operations Simulation",
      description: "Simulation of aircraft ground operations including tow truck movements, refueling processes, gate assignment, and runway scheduling using Arena Simulation.",
      tech: ["Arena Simulation", "Operations Research"],
      link: ""
    }
  ],
  recommendations: []
};

