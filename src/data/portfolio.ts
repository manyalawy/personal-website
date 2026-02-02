// Portfolio Data - Single source of truth for all site content

// ============================================================================
// TypeScript Interfaces
// ============================================================================

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
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
    name: "Alex Rivera",
    title: "Full-Stack Developer",
    tagline: "Building elegant web experiences that blend technical precision with creative design",
    bio: "Passionate full-stack developer with expertise in modern web technologies and a keen eye for user experience.",
  },

  skills: [
    // Frontend
    { name: "React", icon: "react", category: "Frontend" },
    { name: "Next.js", icon: "nextjs", category: "Frontend" },
    { name: "TypeScript", icon: "typescript", category: "Frontend" },
    { name: "JavaScript", icon: "javascript", category: "Frontend" },
    { name: "Tailwind CSS", icon: "tailwindcss", category: "Frontend" },
    { name: "HTML5", icon: "html5", category: "Frontend" },
    { name: "CSS3", icon: "css3", category: "Frontend" },
    { name: "Framer Motion", icon: "framer", category: "Frontend" },

    // Backend
    { name: "Node.js", icon: "nodejs", category: "Backend" },
    { name: "Express", icon: "express", category: "Backend" },
    { name: "Python", icon: "python", category: "Backend" },
    { name: "PostgreSQL", icon: "postgresql", category: "Backend" },
    { name: "MongoDB", icon: "mongodb", category: "Backend" },
    { name: "GraphQL", icon: "graphql", category: "Backend" },

    // Tools
    { name: "Git", icon: "git", category: "Tools" },
    { name: "Docker", icon: "docker", category: "Tools" },
    { name: "VS Code", icon: "vscode", category: "Tools" },
    { name: "Figma", icon: "figma", category: "Tools" },
  ],

  workExperience: [
    {
      title: "Senior Full-Stack Developer",
      company: "TechFlow Solutions",
      startDate: "2022-03",
      endDate: "Present",
      achievements: [
        "Led development of customer-facing analytics dashboard serving 50K+ daily users",
        "Reduced page load times by 60% through code splitting and lazy loading optimization",
        "Mentored team of 4 junior developers on React best practices and TypeScript patterns",
        "Architected and deployed microservices infrastructure using Docker and Kubernetes",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Nexus Digital",
      startDate: "2020-06",
      endDate: "2022-02",
      achievements: [
        "Built real-time collaboration features using WebSockets and Redis",
        "Implemented comprehensive test coverage achieving 85% code coverage",
        "Designed and developed RESTful APIs serving mobile and web clients",
      ],
    },
    {
      title: "Frontend Developer",
      company: "StartupHub Inc",
      startDate: "2019-01",
      endDate: "2020-05",
      achievements: [
        "Developed responsive landing pages with 95+ Lighthouse performance scores",
        "Created reusable component library adopted across 3 product teams",
        "Collaborated with designers to implement pixel-perfect UI implementations",
      ],
    },
    {
      title: "Junior Developer",
      company: "WebCraft Agency",
      startDate: "2017-08",
      endDate: "2018-12",
      achievements: [
        "Contributed to 15+ client projects ranging from e-commerce to corporate sites",
        "Improved site accessibility scores to WCAG AA compliance standards",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University of Technology",
      year: "2017",
    },
    {
      degree: "Advanced Web Development Bootcamp",
      institution: "CodeCraft Academy",
      year: "2016",
    },
  ],

  projects: [
    {
      title: "TaskFlow Pro",
      description: "A collaborative project management platform with real-time updates, drag-and-drop kanban boards, and team analytics. Features include task dependencies, time tracking, and customizable workflows.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "WebSockets"],
      liveUrl: "https://taskflow-demo.example.com",
      repoUrl: "https://github.com/username/taskflow",
      icon: "📋",
    },
    {
      title: "CodeSnippet Hub",
      description: "Developer-focused snippet manager with syntax highlighting, tags, and search. Users can organize code snippets, share with teams, and discover community contributions.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Prism.js"],
      liveUrl: "https://codesnippet-hub.example.com",
      repoUrl: "https://github.com/username/snippet-hub",
      icon: "💻",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with 7-day forecasts, hourly predictions, and location-based alerts. Integrates multiple weather APIs for accurate data and features animated weather icons.",
      techStack: ["Next.js", "TypeScript", "OpenWeather API", "Framer Motion"],
      liveUrl: "https://weather-dash.example.com",
      icon: "🌤️",
    },
    {
      title: "FitTrack Analytics",
      description: "Fitness tracking app with workout logging, progress visualization, and goal setting. Includes exercise database, custom routines, and personal records tracking.",
      techStack: ["React Native", "Node.js", "PostgreSQL", "Chart.js"],
      repoUrl: "https://github.com/username/fittrack",
      icon: "💪",
    },
    {
      title: "Recipe Finder",
      description: "Smart recipe search engine that finds meals based on available ingredients. Features dietary filters, nutrition information, and step-by-step cooking instructions.",
      techStack: ["Vue.js", "Python", "FastAPI", "Elasticsearch"],
      liveUrl: "https://recipe-finder.example.com",
      icon: "🍳",
    },
    {
      title: "Markdown Notes",
      description: "Minimalist note-taking app with markdown support, cloud sync, and full-text search. Features live preview, dark mode, and offline functionality.",
      techStack: ["React", "TypeScript", "IndexedDB", "Marked.js"],
      liveUrl: "https://md-notes.example.com",
      repoUrl: "https://github.com/username/markdown-notes",
      icon: "📝",
    },
    {
      title: "Portfolio Generator",
      description: "Tool for developers to quickly create customized portfolio websites. Choose from templates, add projects and experience, then export as a static site.",
      techStack: ["Next.js", "Tailwind CSS", "MDX", "Sharp"],
      repoUrl: "https://github.com/username/portfolio-gen",
      icon: "🎨",
    },
    {
      title: "Chat App",
      description: "Real-time messaging application with private rooms, user presence, and message history. Built with WebSocket for instant delivery and typing indicators.",
      techStack: ["Socket.io", "Node.js", "React", "Redis", "MongoDB"],
      repoUrl: "https://github.com/username/chat-app",
      icon: "💬",
    },
  ],

  about: {
    paragraphs: [
      "I'm a full-stack developer who loves building web applications that feel both powerful and effortless to use. My journey started with a curiosity for how websites work, which quickly turned into a passion for crafting digital experiences that make people's lives easier.",

      "Over the past 7+ years, I've worked with companies ranging from fast-paced startups to established tech firms, always focusing on clean code, intuitive design, and measurable impact. I believe the best software is invisible—it just works, and users don't have to think about it.",

      "When I'm not coding, you'll find me exploring new coffee shops, contributing to open-source projects, or experimenting with the latest web technologies. I'm always learning, whether it's a new framework, design pattern, or approach to solving problems.",

      "I'm currently open to new opportunities where I can contribute to meaningful projects and collaborate with talented teams. If you're building something interesting, let's talk!",
    ],
  },

  contact: {
    email: "alex.rivera@email.com",
    github: "https://github.com/alexrivera",
    linkedin: "https://linkedin.com/in/alexrivera",
  },
};
