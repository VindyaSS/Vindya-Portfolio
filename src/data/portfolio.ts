export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface SkillTechnology {
  name: string;
  iconId: string;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  skills: SkillTechnology[];
}

export interface SkillItem {
  name: string;
  iconName?: string;
  category: 'using-now' | 'learning' | 'other';
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: 'flower' | 'car' | 'dumbbell' | 'wallet' | 'book';
  accentColor: {
    bg: string;
    subtleBg: string;
    text: string;
    border: string;
  };
  githubUrl?: string;
  liveUrl?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    role: string;
    tagline: string;
    education: {
      degree: string;
      institution: string;
      status: string;
    };
    bioShort: string;
    shortIntro: string;
    profileImage: string;
    heroImage: string;
    titleAccent: string;
    titleMain: string;
    tagline1: string;
    tagline2: string;
    bioLong: string[];
    location: string;
    email: string;
    phone: string;
    phoneTel?: string;
    whatsappNumber?: string;
    github?: { username: string; url: string };
    linkedin?: { name: string; url: string };
    aboutBio: string;
    infoDetails: { label: string; value: string }[];
  };
  navigation: NavItem[];
  socialLinks: SocialLink[];
  skills: {
    heading: string;
    description: string;
    categories: SkillCategoryGroup[];
    usingNow: SkillItem[];
    learning: SkillItem[];
    other: SkillItem[];
  };
  projects: ProjectItem[];
  resume: {
    heading: string;
    description: string;
    buttonText: string;
    resumeUrl: string;
    fileName: string;
  };
  contact: {
    badge: string;
    heading: string;
    whatsappNumber: string;
    phoneDisplay: string;
    phoneTel: string;
    email: string;
    githubDisplay: string;
    githubUrl: string;
    linkedinDisplay: string;
    linkedinUrl: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Vindya Somathilake",
    firstName: "Vindya",
    lastName: "Somathilake",
    role: "Aspiring Full Stack Developer",
    tagline: "Building scalable, user-centric web applications with clean code and modern design systems.",
    education: {
      degree: "BSc (Hons) Computer Science and Technology",
      institution: "Uva Wellassa University of Sri Lanka",
      status: "Undergraduate",
    },
    bioShort: "BSc (Hons) Computer Science and Technology undergraduate at Uva Wellassa University of Sri Lanka with a passion for modern full-stack development, software craftsmanship, and problem solving.",
    shortIntro: "Dedicated to building functional, scalable, and user-friendly web applications with clean architecture and modern engineering standards.",
    profileImage: "/images/profile.png",
    heroImage: "/images/profile1.png",
    titleAccent: "Full Stack",
    titleMain: "Developer",
    tagline1: "Passionate Programmer",
    tagline2: "Computer Science Undergraduate",
    bioLong: [
      "I am an undergraduate reading for a BSc (Hons) in Computer Science and Technology at Uva Wellassa University of Sri Lanka.",
      "My passion lies in crafting robust, user-centric software solutions that bridge elegant frontend design with resilient backend architectures.",
      "Dedicated to continuous learning, exploring modern web standards, and writing clean, maintainable code."
    ],
    location: "Sri Lanka",
    email: "vindyasomathilake@gmail.com",
    phone: "0701781329",
    phoneTel: "+94701781329",
    whatsappNumber: "94701781329",
    github: {
      username: "VindyaSS",
      url: "https://github.com/VindyaSS",
    },
    linkedin: {
      name: "Vindya Somathilake",
      url: "https://www.linkedin.com/in/vindya-somathilake-9729963a0/",
    },
    aboutBio: "Hi, I'm Vindya, a Computer Science and Technology undergraduate at Uva Wellassa University of Sri Lanka, passionate about coding and technology. I specialize in modern web development, particularly in full-stack engineering with React, TypeScript, and Node.js. I enjoy building innovative, user-centered digital products and exploring new frameworks. Beyond coding, I'm dedicated to continuous learning and love collaborating on meaningful projects.",
    infoDetails: [
      { label: "Name", value: "Vindya Somathilake" },
      { label: "Degree", value: "BSc (Hons) Computer Science and Technology" },
      { label: "University", value: "Uva Wellassa University of Sri Lanka" },
      { label: "Email", value: "vindyasomathilake@gmail.com" },
      { label: "Phone", value: "0701781329" },
    ],
  },

  navigation: [
    { name: "HOME", href: "#hero" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "RESUME", href: "#resume" },
    { name: "CONTACT", href: "#contact" },
  ],

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/VindyaSS",
      icon: "github",
      label: "GitHub Profile",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vindya-somathilake-9729963a0/",
      icon: "linkedin",
      label: "LinkedIn Profile",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/placeholder",
      icon: "facebook",
      label: "Facebook Profile",
    },
    {
      name: "Email",
      url: "mailto:vindyasomathilake@gmail.com",
      icon: "mail",
      label: "Email Me",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/94701781329",
      icon: "whatsapp",
      label: "WhatsApp Chat",
    },
  ],

  skills: {
    heading: "My Skills",
    description: "Technologies and tools I use to build creative, functional, and user-friendly applications.",
    categories: [
      {
        id: "programming-languages",
        title: "Programming Languages",
        skills: [
          { name: "Java", iconId: "java" },
          { name: "Python", iconId: "python" },
        ],
      },
      {
        id: "web-development",
        title: "Web Development",
        skills: [
          { name: "HTML5", iconId: "html5" },
          { name: "CSS3", iconId: "css3" },
          { name: "JavaScript", iconId: "javascript" },
          { name: "Spring Boot", iconId: "springboot" },
          { name: "React.js", iconId: "react" },
          { name: "React Native", iconId: "reactnative" },
          { name: "Next.js", iconId: "nextjs" },
        ],
      },
      {
        id: "tools-ides",
        title: "Development Tools & IDEs",
        skills: [
          { name: "GitHub", iconId: "github" },
          { name: "Visual Studio Code", iconId: "vscode" },
          { name: "IntelliJ IDEA", iconId: "intellij" },
          { name: "Ubuntu", iconId: "ubuntu" },
          { name: "Postman", iconId: "postman" },
          { name: "Swagger UI", iconId: "swagger" },
        ],
      },
      {
        id: "databases",
        title: "Databases",
        skills: [
          { name: "MySQL", iconId: "mysql" },
          { name: "PostgreSQL", iconId: "postgresql" },
        ],
      },
      {
        id: "graphic-design",
        title: "Graphic Design & Multimedia",
        skills: [
          { name: "Canva", iconId: "canva" },
        ],
      },
    ],
    usingNow: [
      { name: "React", category: "using-now" },
      { name: "TypeScript", category: "using-now" },
      { name: "JavaScript", category: "using-now" },
      { name: "HTML5", category: "using-now" },
      { name: "CSS3 / Tailwind", category: "using-now" },
      { name: "Node.js", category: "using-now" },
      { name: "Git & GitHub", category: "using-now" },
      { name: "REST APIs", category: "using-now" },
    ],
    learning: [
      { name: "Next.js", category: "learning" },
      { name: "Docker", category: "learning" },
      { name: "PostgreSQL", category: "learning" },
      { name: "Cloud Services", category: "learning" },
    ],
    other: [
      { name: "UI/UX Design", category: "other" },
      { name: "Figma", category: "other" },
      { name: "Postman", category: "other" },
      { name: "Agile / Scrum", category: "other" },
    ],
  },

  projects: [
    {
      id: "redshanflora",
      title: "RedShanFlora – 3D Artificial Flower Customization E-Platform",
      description:
        "A group full-stack web project developed using React.js, Spring Boot, PostgreSQL, and Postman for API testing. Designed for an artificial flower business, the platform enables customers to customize products in 3D, explore 360° product views, and place online orders. It supports customers, managers, employees, and admins through role-based access, product management, order processing, and centralized business operations.",
      technologies: ["React.js", "Spring Boot", "PostgreSQL", "Postman"],
      icon: "flower",
      accentColor: {
        bg: "#5E8A63",
        subtleBg: "#f2f7f3",
        text: "#5E8A63",
        border: "#8e9c78",
      },
    },
    {
      id: "fuelmate",
      title: "FuelMate – Smart Fuel Tracking and Vehicle Management System",
      description:
        "A cross-platform mobile application developed using React Native (Expo), Firebase, Cloud Firestore, and Firebase Authentication. Designed for vehicle owners, the app enables users to manage vehicles, track fuel expenses, analyze fuel consumption, and schedule maintenance reminders. It also integrates map-based services to locate nearby fuel stations and provides an admin dashboard for managing users and system activities.",
      technologies: [
        "React Native (Expo)",
        "Firebase",
        "Cloud Firestore",
        "Firebase Authentication",
      ],
      icon: "car",
      accentColor: {
        bg: "#2563EB",
        subtleBg: "#eff6ff",
        text: "#2563EB",
        border: "#3b82f6",
      },
    },
    {
      id: "eathlete",
      title: "eAthlete – Online Sports Learning and Training Hub",
      description:
        "A group full-stack web project developed using React.js, CSS, PHP, and MySQL. Designed to support sports learning and training, the platform connects learners, coaches, and sports equipment sellers through a centralized system. Learners can access personalized training plans and track progress, while coaches manage training activities, sellers list equipment, and admins manage users, articles, and platform content.",
      technologies: ["React.js", "CSS", "PHP", "MySQL"],
      icon: "dumbbell",
      accentColor: {
        bg: "#EA580C",
        subtleBg: "#fff7ed",
        text: "#EA580C",
        border: "#f97316",
      },
    },
    {
      id: "income-expense-management",
      title: "Income and Expense Management System",
      description:
        "An individual Java-based command-line application developed using Object-Oriented Programming (OOP) principles. Designed for personal financial management, the system enables users to record income and expenses, view transaction history, and generate financial summaries, including total income, expenses, and available balance. The application demonstrates encapsulation, inheritance, abstraction, and polymorphism through a modular and maintainable design.",
      technologies: ["Java", "OOP", "CLI", "Software Engineering"],
      icon: "wallet",
      accentColor: {
        bg: "#7C3AED",
        subtleBg: "#f5f3ff",
        text: "#7C3AED",
        border: "#8b5cf6",
      },
    },
    {
      id: "true-stories",
      title: "True Stories – Storytelling Website",
      description:
        "A group frontend web project developed using HTML and CSS during the first year, first semester. Designed as a creative storytelling platform, the website provides interfaces for exploring stories, sharing ideas, and expressing creativity through writing. It features a homepage, story collections, individual story pages, author profiles, a story editor, and login/signup interfaces, focusing on responsive layouts and user-friendly website design.",
      technologies: ["HTML", "CSS", "Web Design", "UI/UX"],
      icon: "book",
      accentColor: {
        bg: "#DC2626",
        subtleBg: "#fef2f2",
        text: "#DC2626",
        border: "#ef4444",
      },
    },
  ],

  resume: {
    heading: "Resume",
    description:
      "Discover my academic journey, professional experiences, technical expertise, and achievements. Download my CV to learn more!",
    buttonText: "Download",
    resumeUrl: "/Vindya_Somathilake_Resume.pdf",
    fileName: "Vindya_Somathilake_Resume.pdf",
  },

  contact: {
    badge: "CONTACT ME",
    heading: "I'm here to chat",
    whatsappNumber: "94701781329",
    phoneDisplay: "0701781329",
    phoneTel: "+94701781329",
    email: "vindyasomathilake@gmail.com",
    githubDisplay: "VindyaSS",
    githubUrl: "https://github.com/VindyaSS",
    linkedinDisplay: "Vindya Somathilake",
    linkedinUrl: "https://www.linkedin.com/in/vindya-somathilake-9729963a0/",
  },
};
