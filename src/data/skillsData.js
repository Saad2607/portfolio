export const skillCategories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "database", name: "Database & Cloud" },
  { id: "mobile", name: "Mobile Development" },
  { id: "tools", name: "DevOps & Tools" }
];

export const skillsData = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    level: "Advanced",
    icon: "FaReact",
    description: "Component architecture, hooks, Context API, state management, and performance optimization.",
    featured: true
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    level: "Advanced",
    icon: "SiJavascript",
    description: "Asynchronous programming, closures, event loop, modern syntax, and DOM manipulation.",
    featured: true
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Advanced",
    icon: "SiTailwindcss",
    description: "Utility-first responsive layouts, custom design systems, dark mode, and micro-animations.",
    featured: true
  },
  {
    name: "HTML5 & CSS3",
    category: "frontend",
    level: "Advanced",
    icon: "SiHtml5",
    description: "Semantic web structure, accessibility standards (a11y), flexbox, grid, and CSS animations.",
    featured: false
  },
  {
    name: "Redux Toolkit",
    category: "frontend",
    level: "Intermediate",
    icon: "SiRedux",
    description: "Centralized global state, slices, async thunks, and predictable state mutations.",
    featured: false
  },
  {
    name: "Material UI",
    category: "frontend",
    level: "Intermediate",
    icon: "SiMui",
    description: "Rapid UI prototyping with enterprise React component systems and theme customization.",
    featured: false
  },
  {
    name: "React Query",
    category: "frontend",
    level: "Intermediate",
    icon: "SiReactquery",
    description: "Server-state synchronization, caching, optimistic updates, and background refetching.",
    featured: false
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    level: "Advanced",
    icon: "FaNodeJs",
    description: "Event-driven runtime, asynchronous I/O, server-side architecture, and microservice backends.",
    featured: true
  },
  {
    name: "Express.js",
    category: "backend",
    level: "Advanced",
    icon: "SiExpress",
    description: "RESTful API design, custom middleware, route structuring, and error handling pipelines.",
    featured: true
  },
  {
    name: "REST APIs",
    category: "backend",
    level: "Advanced",
    icon: "TbApi",
    description: "Scalable API contract design, CRUD operations, pagination, filtering, and rate limiting.",
    featured: true
  },
  {
    name: "JWT & Authentication",
    category: "backend",
    level: "Advanced",
    icon: "SiJsonwebtokens",
    description: "Stateless JSON Web Tokens, bcrypt password hashing, refresh tokens, and RBAC authorization.",
    featured: true
  },

  // Database & Cloud
  {
    name: "MongoDB",
    category: "database",
    level: "Advanced",
    icon: "SiMongodb",
    description: "NoSQL schema modeling, indexes, aggregation pipelines, and document-level transactions.",
    featured: true
  },
  {
    name: "MongoDB Atlas",
    category: "database",
    level: "Advanced",
    icon: "SiMongodb",
    description: "Cloud database clusters, automated backups, monitoring, and IP access whitelisting.",
    featured: false
  },
  {
    name: "Firebase",
    category: "database",
    level: "Intermediate",
    icon: "SiFirebase",
    description: "Cloud Firestore real-time synchronization, Firebase Auth, and storage buckets.",
    featured: true
  },
  {
    name: "Cloudinary",
    category: "database",
    level: "Intermediate",
    icon: "SiCloudinary",
    description: "Cloud image/media asset transformations, multi-file uploads, and secure CDN distribution.",
    featured: false
  },

  // Mobile
  {
    name: "Flutter",
    category: "mobile",
    level: "Intermediate",
    icon: "SiFlutter",
    description: "Cross-platform mobile apps for Android & iOS, custom widget trees, and responsive state.",
    featured: true
  },
  {
    name: "Dart",
    category: "mobile",
    level: "Intermediate",
    icon: "SiDart",
    description: "Object-oriented programming, async streams, strong typing, and Flutter framework logic.",
    featured: false
  },
  {
    name: "Android Development",
    category: "mobile",
    level: "Intermediate",
    icon: "FaAndroid",
    description: "Native Android SDK principles, app lifecycle, manifest configuration, and testing.",
    featured: true
  },

  // Tools & Platforms
  {
    name: "Git & GitHub",
    category: "tools",
    level: "Advanced",
    icon: "FaGithub",
    description: "Branching strategies, pull requests, semantic versioning, and collaborative development.",
    featured: true
  },
  {
    name: "Postman",
    category: "tools",
    level: "Advanced",
    icon: "SiPostman",
    description: "API testing, automated request collections, environment variables, and mock servers.",
    featured: true
  },
  {
    name: "Vercel & Render",
    category: "tools",
    level: "Intermediate",
    icon: "SiVercel",
    description: "Continuous deployment (CI/CD) workflows for frontend SPAs and Node.js web services.",
    featured: false
  },
  {
    name: "Vite",
    category: "tools",
    level: "Advanced",
    icon: "SiVite",
    description: "Lightning-fast build tooling, HMR, roll-up packaging, and asset optimization.",
    featured: false
  }
];
