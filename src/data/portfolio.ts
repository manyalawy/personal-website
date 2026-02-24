// Portfolio Data - Single source of truth for all site content

// ============================================================================
// TypeScript Interfaces
// ============================================================================

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  siteUrl: string;
  ogImage: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: "Frontend" | "Backend" | "Tools" | "Other";
}

export interface WorkExperience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  icon?: string;
  logo?: string; // URL to project logo image
}

export interface About {
  paragraphs: string[];
}

export interface Contact {
  email: string;
  github: string;
  linkedin: string;
}

export interface Portfolio {
  personalInfo: PersonalInfo;
  skills: Skill[];
  workExperience: WorkExperience[];
  education: Education[];
  projects: Project[];
  about: About;
  contact: Contact;
}

// ============================================================================
// Portfolio Data
// ============================================================================

export const portfolio: Portfolio = {
  personalInfo: {
    name: "Youssef El Manyalawy",
    title: "Software Engineer | Full Stack Engineer",
    tagline: "Building scalable systems and elegant solutions with modern web technologies",
    bio: "Full-stack engineer with expertise in microservices architecture, frontend modernization, and AI-powered automation.",
    siteUrl: "https://yourdomain.com", // TODO: Replace with your actual domain
    ogImage: "/og-image.png",
  },

  skills: [
    // Frontend
    { name: "React", icon: "react", category: "Frontend" },
    { name: "Next.js", icon: "nextjs", category: "Frontend" },
    { name: "TypeScript", icon: "typescript", category: "Frontend" },
    { name: "HTML5", icon: "html5", category: "Frontend" },
    { name: "CSS3", icon: "css3", category: "Frontend" },
    { name: "Tailwind CSS", icon: "tailwindcss", category: "Frontend" },

    // Backend
    { name: "Node.js", icon: "nodejs", category: "Backend" },
    { name: "Python", icon: "python", category: "Backend" },
    { name: "PHP", icon: "php", category: "Backend" },
    { name: "Java", icon: "java", category: "Backend" },
    { name: "Spring Boot", icon: "spring", category: "Backend" },
    { name: "Django", icon: "django", category: "Backend" },
    { name: "FastAPI", icon: "fastapi", category: "Backend" },
    { name: "Laravel", icon: "laravel", category: "Backend" },
    { name: "PostgreSQL", icon: "postgresql", category: "Backend" },
    { name: "MongoDB", icon: "mongodb", category: "Backend" },
    { name: "MySQL", icon: "mysql", category: "Backend" },
    { name: "Redis", icon: "redis", category: "Backend" },

    // Tools
    { name: "Docker", icon: "docker", category: "Tools" },
    { name: "Kubernetes", icon: "kubernetes", category: "Tools" },
    { name: "AWS", icon: "aws", category: "Tools" },
    { name: "Git", icon: "git", category: "Tools" },
    { name: "Kafka", icon: "kafka", category: "Tools" },
    { name: "Claude Code", icon: "claude", category: "Tools" },
  ],

  workExperience: [
    {
      title: "Senior Software Engineer",
      company: "MiDash",
      startDate: "2025-11",
      endDate: "Present",
      achievements: [
        "Architected and developed MCP (Model Context Protocol) tools for trading, enabling AI-powered automation and streamlined trading workflows",
        "Leveraged Claude Code to accelerate development velocity, implementing efficient coding practices that significantly improved team productivity",
        "Designed and containerized microservices architecture using Docker, ensuring consistent development environments and seamless deployment across services",
        "Built broker integrations with Capital.com and Coinbase APIs, enabling real-time trading capabilities and multi-platform portfolio management",
      ],
    },
    {
      title: "Software Engineer II",
      company: "Procore Technologies",
      startDate: "2021-11",
      endDate: "2025-11",
      achievements: [
        "Spearheaded frontend modernization initiative, migrating legacy Backbone.js codebase to React, resulting in improved code maintainability and enhanced user experience",
        "Engineered and optimized features for a construction management platform serving 900K+ users, driving performance improvements and delivering critical bug fixes",
        "Designed and implemented an intelligent data deduplication algorithm that identifies and merges similar records, significantly improving data quality",
        "Led third-party integrations with OneNotary and Honeycomb, expanding platform capabilities and improving observability across the system",
        "Strengthened application security posture by implementing security best practices, conducting vulnerability assessments, and remediating critical security issues",
        "Mentored interns and onboarded new team members, establishing documentation and best practices that accelerated ramp-up time",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Levelset",
      startDate: "2021-06",
      endDate: "2021-08",
      achievements: [
        "Implemented JWT-based authentication system, improving API security and enabling stateless session management",
        "Executed MySQL version upgrade with zero downtime, ensuring data integrity across 500K+ records",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "The German University in Cairo",
      year: "2022",
    },
  ],

  projects: [
    {
      title: "fitflip",
      description: "Bilingual marketplace platform (Arabic/English with RTL support) featuring real-time chat, listing management, and Supabase Row-Level Security. Built with Next.js 16 server actions and next-intl for seamless localization.",
      techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui", "i18n"],
      liveUrl: "https://fitflip.vercel.app",
      repoUrl: "https://github.com/manyalawy/fitflip",
      icon: "🛍️",
    },
    {
      title: "nawy",
      description: "Apartment listing platform built on a true microservices architecture — 3 NestJS services (gateway, auth, apartments) with Docker network isolation, Meilisearch full-text search, Redis rate limiting, and two independent PostgreSQL databases.",
      techStack: ["NestJS", "Next.js", "PostgreSQL", "Meilisearch", "Redis", "Docker", "Prisma"],
      repoUrl: "https://github.com/manyalawy/nawy",
      icon: "🏠",
    },
    {
      title: "ballers-app",
      description: "Mobile sports social app where users create and join matches with real-time chat, geolocation-based discovery, phone OTP auth, and automated CI/CD database migrations via GitHub Actions.",
      techStack: ["React Native", "Expo", "TypeScript", "Supabase", "Zustand", "React Query"],
      repoUrl: "https://github.com/manyalawy/ballers-app",
      icon: "⚽",
    },
    {
      title: "football-codename",
      description: "Real-time multiplayer browser game — a soccer-themed take on Codenames with 400+ football terms. Firebase Firestore powers live game state sync across spymasters and operatives.",
      techStack: ["React", "Firebase", "Vite", "JavaScript"],
      repoUrl: "https://github.com/manyalawy/football-codename",
      icon: "🎮",
    },
  ],

  about: {
    paragraphs: [
      "I'm a full-stack engineer specializing in building scalable systems and modernizing legacy applications. Currently, I'm working on AI-powered trading automation at MiDash, where I architect microservices and integrate complex broker APIs to enable intelligent trading workflows.",

      "My experience at Procore Technologies involved leading a major frontend modernization initiative, migrating a legacy Backbone.js codebase to React for a platform serving 900K+ users. I've built everything from data deduplication algorithms to security-hardened integrations, always focusing on performance, maintainability, and user impact.",

      "I'm passionate about leveraging modern tools like Claude Code to accelerate development velocity and using containerization to ensure consistent, reliable deployments. Whether it's implementing JWT authentication, optimizing database migrations with zero downtime, or mentoring team members, I thrive on solving challenging technical problems.",

      "With a Computer Science degree from The German University in Cairo and experience across the full stack—from React and Next.js to Spring Boot, Django, and FastAPI—I bring both breadth and depth to every project I tackle.",
    ],
  },

  contact: {
    email: "manyalawy@gmail.com",
    github: "https://github.com/manyalawy",
    linkedin: "https://linkedin.com/in/youssef-elmanyalawy",
  },
};
