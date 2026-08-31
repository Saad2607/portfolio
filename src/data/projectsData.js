export const projectsData = [
  {
    id: "filebridge",
    number: "01",
    title: "FileBridge",
    subtitle: "Cross-Device Cloud & Desktop File Ecosystem",
    category: "Full Stack",
    featured: true,
    badge: "Flagship Architecture",
    description:
      "A comprehensive high-security cloud and desktop file storage ecosystem. Engineered for seamless cross-device synchronization, granular file operations, and safe encrypted transfers with an Electron desktop companion and React web interface.",
    problemSolved:
      "Bridged the gap between fragmented cloud storage and native desktop file management by delivering a unified, JWT-authenticated file hub with real-time quota metrics, trash recovery, and instant link-based sharing.",
    technologies: ["React", "Electron", "Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT", "Tailwind CSS"],
    highlights: [
      "Cross-device file access & synchronized multi-device storage",
      "Native Desktop application integration built with Electron",
      "Robust JWT authentication and secure file encryption",
      "Cloudinary integration for scalable cloud asset storage",
      "Storage usage metrics & dynamic quota tracking visualizer",
      "Folder hierarchy, favorites system & trash auto-recovery"
    ],
    architecture: "Microservices-ready Node/Express backend with MongoDB Atlas for file metadata, Cloudinary CDN for secure binary asset delivery, and a unified React + Electron frontend client.",
    github: "https://github.com/Saad2607/FileBridge",
    live: "https://file-bridge-zeta.vercel.app",
    stats: {
      type: "Desktop + Web",
      stack: "MERN + Electron",
      status: "Production Ready"
    }
  },
  {
    id: "ecommerce",
    number: "02",
    title: "QuickKart E-Commerce Platform",
    subtitle: "Scalable Full-Stack Shopping Platform with Admin Hub",
    category: "Full Stack",
    featured: true,
    badge: "Enterprise MERN",
    description:
      "A full-featured MERN e-commerce application equipped with a dedicated role-based administrative dashboard, dynamic inventory control, live shopping cart, wishlist sync, secure checkout flow, and Cloudinary media pipelines.",
    problemSolved:
      "Provided a complete end-to-end retail workflow combining lightning-fast catalog search, dynamic cart state management, automated inventory deduction, and customer order tracking in a responsive dark/light UI.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Redux/Context", "Tailwind CSS", "JWT"],
    highlights: [
      "Dedicated Admin Dashboard for real-time product CRUD and stock metrics",
      "Persistent Cart & Wishlist state with optimistic UI updates",
      "Cloudinary multi-image upload & asset optimization pipeline",
      "Multi-stage checkout workflow and customer order tracking system",
      "Granular JWT role-based access control (Admins vs. Customers)",
      "Dark Mode UI with PWA-ready responsive performance"
    ],
    architecture: "Decoupled REST API backend structured with MVC architecture, MongoDB aggregation pipelines for fast catalog filtering, and a modular React frontend with token-based session persistence.",
    github: "https://github.com/Saad2607/E-Commerce",
    live: "https://quickkart-sigma.vercel.app/",
    stats: {
      type: "Full-Stack Web App",
      stack: "MERN + Cloudinary",
      status: "Live Deployment"
    }
  },
  {
    id: "pulse-point",
    number: "03",
    title: "Pulse Point — Blood Bank Network",
    subtitle: "Healthcare Emergency Inventory & Donor Management",
    category: "Full Stack",
    featured: true,
    badge: "Mission Critical",
    description:
      "A mission-critical MERN healthcare application streamlining blood donor registration, emergency hospital inventory tracking, shortage alerts, and direct blood request triage between medical centers and donors.",
    problemSolved:
      "Eliminates critical delays during emergency blood transfusions by automating real-time donor availability matching, inventory expiration monitoring, and hospital blood request dispatching.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS", "JWT"],
    highlights: [
      "Real-time blood group inventory tracking (A+, B+, O+, AB+, and rare types)",
      "Automated donor eligibility verification & donation history logs",
      "Emergency blood request dispatch and hospital coordination dashboard",
      "Secure authentication & role-based medical portal permissions",
      "Detailed visual reporting on inventory levels and deficit warnings"
    ],
    architecture: "RESTful API endpoints secured with JWT authentication, MongoDB schemas designed for transactional donor-request linking, and a responsive React dashboard for medical personnel.",
    github: "https://github.com/Saad2607/Blood-bank-management-system",
    live: "#",
    stats: {
      type: "Healthcare System",
      stack: "MERN Stack",
      status: "Active Codebase"
    }
  },
  {
    id: "transit-ops",
    number: "04",
    title: "TransitOps — Smart Transport Platform",
    subtitle: "Fleet Logistics & Transit Operations Management",
    category: "Full Stack",
    featured: false,
    badge: "Logistics Platform",
    description:
      "A smart transit operations and fleet management platform engineered for route optimization, vehicle dispatch, driver shift scheduling, and real-time operational telemetry.",
    problemSolved:
      "Streamlines transport logistics with automated dispatching, driver allocation, and visual operational dashboards to minimize transit delays.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    highlights: [
      "Fleet route scheduling & live vehicle status telemetry",
      "Driver shift allocation & performance logs",
      "Centralized logistics dashboard for fleet supervisors",
      "Automated route delay alerts and vehicle maintenance logs"
    ],
    architecture: "Node/Express backend with MongoDB geospatial indexes for route planning, coupled with a responsive React management dashboard.",
    github: "https://github.com/Saad2607/TransitOps-Smart-Transport-Operations-Platform",
    live: "#",
    stats: {
      type: "Logistics SaaS",
      stack: "MERN Stack",
      status: "Active Repository"
    }
  },
  {
    id: "traveloop",
    number: "05",
    title: "Traveloop — Odoo Hackathon Project",
    subtitle: "Automated Tour & Travel Booking Experience",
    category: "Full Stack",
    featured: false,
    badge: "Hackathon Project",
    description:
      "An innovative travel and tour management platform created for the Odoo Hackathon. Features custom itinerary builders, multi-destination booking pipelines, and interactive destination guides.",
    problemSolved:
      "Rapidly prototyped a fluid travel commerce experience that simplifies multi-destination vacation planning and inquiry booking.",
    technologies: ["JavaScript", "React.js", "Node.js", "REST APIs", "Tailwind CSS"],
    highlights: [
      "Custom itinerary builder with dynamic destination pricing",
      "Streamlined travel package inquiry and customer reservation pipeline",
      "High-speed responsive client designed under hackathon sprint conditions",
      "Interactive media gallery for destination discovery"
    ],
    architecture: "Modular React frontend with rapid-response REST endpoints designed for quick booking state transactions.",
    github: "https://github.com/Saad2607/Traveloop-odoo-hackathon",
    live: "#",
    stats: {
      type: "Hackathon Prototype",
      stack: "React + Node.js",
      status: "Hackathon Deliverable"
    }
  },
  {
    id: "odoo-cafe-pos",
    number: "06",
    title: "Odoo Cafe POS",
    subtitle: "High-Speed Point of Sale System",
    category: "Full Stack",
    featured: false,
    badge: "Commercial POS",
    description:
      "A fast, modern Point of Sale (POS) system built with TypeScript, tailored for cafes and restaurant operations with table management, rapid order entry, and live kitchen order routing.",
    problemSolved:
      "Accelerates cafe checkout counter operations with an intuitive touch-friendly terminal that tracks orders, calculates taxes/bills, and updates item stock in real time.",
    technologies: ["TypeScript", "React.js", "REST APIs", "Tailwind CSS"],
    highlights: [
      "High-speed keyboard & touch-friendly order input interface",
      "Table management, item modifiers, and split-bill calculation",
      "Live kitchen ticket routing and order queue states",
      "Daily revenue reporting and sales analytics"
    ],
    architecture: "Type-safe TypeScript codebase with optimized local caching for instant order processing without UI lag.",
    github: "https://github.com/Saad2607/odoo-cafe-pos",
    live: "#",
    stats: {
      type: "Commercial POS",
      stack: "TypeScript + React",
      status: "Active Codebase"
    }
  },
  {
    id: "cake-shop-app",
    number: "07",
    title: "Cake Shop Mobile Application",
    subtitle: "Flutter & Dart Bakery Mobile Store",
    category: "Mobile",
    featured: false,
    badge: "Mobile App",
    description:
      "A cross-platform mobile shopping application built with Flutter and Dart for custom bakery and cake orders, flavor selections, date delivery scheduling, and dynamic cart checkout.",
    problemSolved:
      "Provides bakery customers with a delightful mobile shopping journey with item customization and smooth cart state management.",
    technologies: ["Flutter", "Dart", "Material 3", "Mobile UI/UX"],
    highlights: [
      "Interactive cake customization & weight/flavor selector",
      "Dynamic shopping cart and delivery date scheduler",
      "Smooth Flutter micro-animations and custom hero transitions",
      "Optimized for Android performance and varying screen sizes"
    ],
    architecture: "Flutter application with stateful component trees, custom theme styling, and modular widget architecture.",
    github: "https://github.com/Saad2607/cake-shop-app",
    live: "#",
    stats: {
      type: "Mobile App",
      stack: "Flutter + Dart",
      status: "Mobile Deliverable"
    }
  },
  {
    id: "dairy-management",
    number: "08",
    title: "DairyFlow Operations System",
    subtitle: "Automated Dairy Operations & Farmer Ledgering",
    category: "Full Stack",
    featured: false,
    badge: "Operations ERP",
    description:
      "A specialized database-driven operational management system designed for dairy centers. Handles daily milk collection, fat-rate dynamic pricing calculation, farmer accounts ledgering, supplier payments, and distribution batches.",
    problemSolved:
      "Replaced error-prone manual paper logs with an automated digital platform calculating real-time milk value based on fat/SNF parameters, generating transparent payment summaries for farmers.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    highlights: [
      "Daily milk intake recording with automated fat/SNF pricing algorithms",
      "Farmer/supplier account ledgers with transaction histories",
      "Batch inventory tracking & daily wholesale distribution logs",
      "Billing reports and financial summary exports"
    ],
    architecture: "MERN architecture with schema validation for precise financial calculations, atomic database transactions, and a clean tabular interface.",
    github: "https://github.com/Saad2607",
    live: "#",
    stats: {
      type: "Business ERP",
      stack: "MERN Stack",
      status: "Configurable"
    }
  },
  
  {
    id: "campus-bot",
    number: "09",
    title: "CampusBot — Student Query Assistant",
    subtitle: "Conversational MERN-Powered Academic Assistant",
    category: "Full Stack",
    featured: false,
    badge: "AI & Student Utility",
    description:
      "A MERN-based conversational assistant tailored for students and academic institutions. Provides instant automated answers for academic schedules, syllabus details, exam notifications, and campus FAQs.",
    problemSolved:
      "Reduced administrative overhead by providing students with an accessible, 24/7 self-service knowledge base through an intuitive messaging interface.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "NLP/AI Logic", "Tailwind CSS"],
    highlights: [
      "Responsive conversational UI with typing simulation and message queues",
      "Structured knowledge-base query parser for instant topic retrieval",
      "Saved student chat histories and search bookmarking",
      "Administrative dashboard to update campus notices and FAQ datasets"
    ],
    architecture: "Node.js backend with full-text search indexing on MongoDB collections, paired with a React client.",
    github: "https://github.com/Saad2607",
    live: "#",
    stats: {
      type: "Conversational App",
      stack: "MERN + NLP",
      status: "Active Utility"
    }
  },
  {
    id: "interior-design",
    number: "10",
    title: "LuxeSpace Interior Showcase",
    subtitle: "Modern Architectural & Design Portal",
    category: "React",
    featured: false,
    badge: "UI/UX Experience",
    description:
      "A visual-centric, responsive web portfolio designed for modern interior design concepts. Emphasizes clean spatial layout, dynamic image galleries, and smooth navigation.",
    problemSolved:
      "Created an immersive digital showroom for architectural spaces with fluid micro-interactions and mobile-first responsive presentation.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive UI/UX"],
    highlights: [
      "Modern editorial layout with high-resolution visual curation",
      "Responsive multi-column grid adapting from mobile to widescreen",
      "Smooth interactive project filtering and lightbox previews"
    ],
    architecture: "Semantic HTML5 architecture with modular CSS Grid/Flexbox layouts and custom JavaScript for fluid client-side interaction.",
    github: "https://github.com/Saad2607/interior-designing",
    live: "https://saad2607.github.io/interior-designing/",
    stats: {
      type: "UI/UX Showcase",
      stack: "JavaScript + CSS3",
      status: "Live Deployment"
    }
  }
];

export const projectCategories = ["All", "Full Stack", "React", "Mobile"];
