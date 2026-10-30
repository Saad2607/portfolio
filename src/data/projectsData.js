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
    live: "https://pulse-point-sigma.vercel.app/",
    stats: {
      type: "Healthcare System",
      stack: "MERN Stack",
      status: "Live Deployment"
    }
  },
  {
    id: "peoplepay360",
    number: "04",
    title: "PeoplePay360 — HR & Payroll Platform",
    subtitle: "Enterprise Workforce, Attendance & Payroll Engine",
    category: "Full Stack",
    featured: false,
    badge: "Enterprise ERP",
    description:
      "A production-grade, modular, full-stack HR and Payroll Management Platform built on the MERN stack. Unifies organizational hierarchy, employee lifecycle, biometric and geofenced attendance, leave accounting, sequential formula-driven salary rules, 3-step payrun execution, pre-disbursement audit checks, and vector PDF payslips.",
    problemSolved:
      "Replaces error-prone manual spreadsheets and fragmented tools with an automated compliance-ready MERN platform that computes net salaries with custom rule sequencing, enforces geofenced check-ins, and generates downloadable PDF payslips.",
    technologies: ["React 18", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "REST APIs"],
    highlights: [
      "Sequential formula-driven salary rule computation engine with tax deductions",
      "Biometric & geofenced employee attendance tracking with leave balance lifecycle",
      "3-step payrun execution workflow with pre-disbursement audit validation checks",
      "Automated vector PDF payslip generation and employee self-service portal",
      "Role-based access control (RBAC) across HR Admins, Payroll Officers, and Employees"
    ],
    architecture: "Modular MVC architecture with Express REST endpoints, MongoDB schemas for contracts, attendance logs, and payruns, and a responsive React 18 client.",
    github: "https://github.com/Saad2607/PeoplePay360-HR-Payroll",
    live: "https://people-pay360-hr-payroll-two.vercel.app",
    stats: {
      type: "Enterprise ERP",
      stack: "MERN + PDFKit",
      status: "Live Deployment"
    }
  },
  {
    id: "transit-ops",
    number: "05",
    title: "TransitOps — Smart Transport Platform",
    subtitle: "Fleet Logistics & Transit Operations Management",
    category: "Full Stack",
    featured: false,
    badge: "Logistics Platform",
    description:
      "A smart transit operations and fleet management platform engineered for route optimization, vehicle dispatch, driver shift scheduling, maintenance logging, fuel tracking, and real-time operational telemetry.",
    problemSolved:
      "Streamlines transport operations with automated vehicle dispatch, driver shift allocation, maintenance scheduling, and real-time fuel and expense tracking in Indian Rupees (INR / ₹).",
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs", "Tailwind CSS", "JWT"],
    highlights: [
      "Backend Auth & Fleet API with JWT authentication and granular RBAC middleware",
      "Vehicle & driver CRUD, maintenance scheduling, and fuel expense logging",
      "Live vehicle status telemetry and trip dispatch & completion workflows",
      "Comprehensive Postman collections and integration test suites"
    ],
    architecture: "Decoupled Node/Express backend with RBAC middleware, relational PostgreSQL schema migrations, and a responsive React management interface.",
    github: "https://github.com/Saad2607/TransitOps-Smart-Transport-Operations-Platform",
    live: "https://github.com/Saad2607/TransitOps-Smart-Transport-Operations-Platform",
    stats: {
      type: "Logistics SaaS",
      stack: "MERN + PostgreSQL",
      status: "Active Repository"
    }
  },
  {
    id: "traveloop",
    number: "06",
    title: "Traveloop — Odoo Hackathon Project",
    subtitle: "Automated Tour & Travel Booking Experience",
    category: "React",
    featured: false,
    badge: "Hackathon Project",
    description:
      "An innovative travel and tour management platform created for the Odoo Hackathon. Features custom itinerary builders, multi-destination booking pipelines, and interactive destination guides.",
    problemSolved:
      "Rapidly prototyped a fluid travel commerce experience that simplifies multi-destination vacation planning and inquiry booking under hackathon sprint conditions.",
    technologies: ["React.js", "JavaScript", "Node.js", "REST APIs", "Tailwind CSS", "Docker"],
    highlights: [
      "Custom itinerary builder with dynamic destination pricing",
      "Streamlined travel package inquiry and customer reservation pipeline",
      "Full Docker containerization with docker-compose environment",
      "Interactive media gallery for destination discovery"
    ],
    architecture: "Modular React frontend with rapid-response REST endpoints designed for quick booking state transactions.",
    github: "https://github.com/Saad2607/Traveloop-odoo-hackathon",
    live: "https://github.com/Saad2607/Traveloop-odoo-hackathon",
    stats: {
      type: "Hackathon Prototype",
      stack: "React + Node.js",
      status: "Hackathon Deliverable"
    }
  },
  {
    id: "odoo-cafe-pos",
    number: "07",
    title: "Odoo Cafe POS",
    subtitle: "High-Speed Point of Sale System",
    category: "React",
    featured: false,
    badge: "Commercial POS",
    description:
      "A fast, modern Point of Sale (POS) system built with TypeScript and React, tailored for cafes and restaurant operations with table management, rapid order entry, and live kitchen order routing.",
    problemSolved:
      "Accelerates cafe checkout counter operations with an intuitive touch-friendly terminal that tracks orders, calculates taxes/bills, and updates item stock in real time.",
    technologies: ["TypeScript", "React.js", "Node.js", "REST APIs", "Tailwind CSS"],
    highlights: [
      "High-speed keyboard & touch-friendly order input interface",
      "Table management, item modifiers, and split-bill calculation",
      "Live kitchen ticket routing and order queue states",
      "Daily revenue reporting and sales analytics"
    ],
    architecture: "Type-safe TypeScript codebase with optimized local caching for instant order processing without UI lag.",
    github: "https://github.com/Saad2607/odoo-cafe-pos",
    live: "https://github.com/Saad2607/odoo-cafe-pos",
    stats: {
      type: "Commercial POS",
      stack: "TypeScript + React",
      status: "Active Codebase"
    }
  },
  {
    id: "cake-shop-app",
    number: "08",
    title: "Sweet Delights — Cake Shop Mobile App",
    subtitle: "Full-Stack Bakery Mobile Store & Admin App",
    category: "Mobile",
    featured: false,
    badge: "Mobile & Backend",
    description:
      "Order handcrafted cakes from your phone — browse the menu, customize cake flavor and size, pay with UPI or cash on delivery, and track orders until delivery. Backed by an Express and MongoDB backend with an integrated mobile admin mode.",
    problemSolved:
      "Provides bakery customers with a delightful mobile shopping journey including item personalization, while giving bakery staff an integrated mobile admin portal to manage inventory and update order status in real time.",
    technologies: ["Flutter", "Dart", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    highlights: [
      "Customer app with cake customization (size, flavor, custom message), cart, and UPI/COD checkout",
      "Admin app mode for live order status updates and cake catalog management",
      "Real-time order delivery tracking, ETA calculation, and post-delivery ratings",
      "REST backend with JWT authentication and public product sharing links"
    ],
    architecture: "Cross-platform Flutter application backed by an Express/MongoDB REST API server with JWT authentication.",
    github: "https://github.com/Saad2607/cake-shop-app",
    live: "https://github.com/Saad2607/cake-shop-app",
    stats: {
      type: "Mobile + Backend",
      stack: "Flutter + Node.js + MongoDB",
      status: "Mobile Deliverable"
    }
  },
  {
    id: "interior-design",
    number: "09",
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
