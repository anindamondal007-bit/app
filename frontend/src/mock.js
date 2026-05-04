// Mock data for Aninda Sundar Mondal's portfolio.
// All copy, projects, skills, experience are stored here for easy backend wiring later.

export const profile = {
  name: "Aninda Sundar Mondal",
  firstName: "Aninda",
  lastName: "Mondal",
  title: "UI/UX Designer",
  tagline: "Designing intuitive, scalable, and impactful digital experiences.",
  location: "Kolkata, India",
  yearsExperience: 2.5,
  email: "mondalanindasundar.007@gmail.com",
  phone: "+91 72781 55013",
  linkedin: "https://www.linkedin.com/in/aninda-mondal",
  behance: "https://www.behance.net/anindasundar",
  photo:
    "https://customer-assets.emergentagent.com/job_aninda-portfolio/artifacts/ow0bqvp1_WhatsApp%20Image%202026-04-29%20at%2012.34.55%20PM.jpeg",
  available: true,
};

export const aboutCopy = {
  headline: "Designer who turns ambiguity into clear, usable products.",
  paragraphs: [
    "I'm a UI/UX Designer with 2.5+ years of experience crafting end-to-end digital products across mobile and web. My work sits at the intersection of user research, interaction design and scalable design systems — always anchored in usability and business impact.",
    "I've independently designed and shipped real-world products, including a dual-sided marketplace, a telematics-driven fleet management suite, and a mental health companion. I enjoy the messy middle — turning ambiguous problems into clean, opinionated experiences that teams can actually build.",
  ],
  highlights: [
    { value: "2.5+", label: "Years designing" },
    { value: "6", label: "Products shipped" },
    { value: "2", label: "Design systems built" },
    { value: "4", label: "Industries" },
  ],
};

export const featuredProjects = [
  {
    id: "careoff-customer",
    slug: "careoff-customer",
    index: "01",
    name: "CareOff Customer App",
    category: "Mobile App",
    year: "2025",
    status: "Live",
    role: "Lead UI/UX Designer",
    cover:
      "https://images.unsplash.com/photo-1591608517093-3bb6aa9efe35?w=1600&q=80",
    teaser:
      "A mobile app for families to discover and book trusted babysitters and elder-care professionals.",
    summary:
      "End-to-end design of the consumer side of CareOff \u2014 a marketplace that helps families discover, vet and book verified caregivers in minutes.",
    tags: ["UX Design", "Mobile App", "Marketplace", "Design System"],
    figma:
      "https://www.figma.com/proto/Z7tZQApoTpEAPn81FGxkJR/CareOff--Phase-2-?page-id=15221%3A11373&node-id=15221-15063&starting-point-node-id=15221%3A15101&show-proto-sidebar=1",
    links: [
      { label: "Live Website", href: "https://careoff.com/" },
      { label: "App Store", href: "https://apps.apple.com/in/app/careoff/id6759446251" }
    ],
    overview: {
      problem:
        "Families struggle to find verified, trustworthy caregivers fast — existing options are fragmented across classifieds, agencies and word-of-mouth, with little visibility into background, ratings or availability.",
      users: [
        "Working parents needing reliable babysitters",
        "Adult children arranging care for elderly parents",
        "Households needing structured, recurring care"
      ],
      goals: [
        "Make discovery feel safe, fast and human",
        "Reduce booking friction to under 90 seconds",
        "Build trust through verification, not marketing copy"
      ]
    },
    process: {
      research:
        "6 user interviews with parents and adult-child caregivers, plus competitive teardowns of UrbanCompany, Care.com and local agencies.",
      flows: [
        "Onboarding → location → service type → caregiver list",
        "Caregiver profile → availability → booking confirmation",
        "Trust loop: OTP verify → background badge → ratings"
      ],
      wireframes:
        "Lo-fi flows in FigJam, validated with 4 parents before moving to hi-fi. Iterated booking sheet 3 times to remove cognitive load.",
      designSystem:
        "Built a 60+ token system (color, type, spacing, elevation, motion) shared with the Companion app to keep both sides visually consistent."
    },
    solution: {
      features: [
        "OTP-based phone verification & ID badge on profiles",
        "Real-time booking + scheduled care service flows",
        "Care-type tabs (Baby · Elder) with persona-aware filters",
        "In-app chat scaffolding and rating loop",
        "Brand identity, logo and App Store creatives"
      ]
    },
    impact: [
      "Shipped to App Store and onboarded first cohort of caregivers",
      "Cut booking flow from 7 screens to 4",
      "Reused design tokens cut Companion-app design time by ~40%"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1591608517093-3bb6aa9efe35?w=1400&q=80",
      "https://images.unsplash.com/photo-1707836916010-3c4ad261936c?w=1400&q=80",
      "https://images.pexels.com/photos/4724371/pexels-photo-4724371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ]
  },
  {
    id: "careoff-pro",
    slug: "careoff-professional",
    index: "02",
    name: "CareOff Professional App",
    category: "Mobile App",
    year: "2025",
    status: "Live",
    role: "Lead UI/UX Designer",
    cover:
      "https://images.unsplash.com/photo-1629697776809-f37ceac39e77?w=1600&q=80",
    teaser:
      "A companion app for caregivers to discover jobs, manage bookings and deliver services confidently.",
    summary:
      "The supply-side of CareOff. A focused, high-trust workspace where vetted caregivers can find work, accept jobs, and run their day — mirroring the customer app on a shared design system.",
    tags: ["UX Design", "Mobile App", "Marketplace", "Design System"],
    figma:
      "https://www.figma.com/proto/Z7tZQApoTpEAPn81FGxkJR/CareOff--Phase-2-?page-id=15221%3A11373&node-id=15221-15063",
    links: [
      { label: "App Store", href: "https://apps.apple.com/in/app/careoff-companion/id6759437992" }
    ],
    overview: {
      problem:
        "Independent caregivers rarely have a structured way to discover relevant jobs nearby — they rely on agencies that take heavy commissions or unstable WhatsApp groups.",
      users: [
        "Babysitters and nannies",
        "Elder-care attendants and home-care nurses",
        "Part-time caregivers building a freelance practice"
      ],
      goals: [
        "Surface relevant jobs based on skills, distance and availability",
        "Make application + acceptance one-tap fast",
        "Give caregivers visibility into earnings and reputation"
      ]
    },
    process: {
      research:
        "Field interviews with 5 caregivers; mapped their daily routine to understand decision points and ‘trust gates’ with new families.",
      flows: [
        "Sign-up → KYC → skill tagging → availability calendar",
        "Job feed → detail → apply → confirmation",
        "Schedule → active booking → check-in → review"
      ],
      wireframes:
        "Designed mobile-first, thumb-zone friendly layouts. Big tap targets and minimal text — most users are on the move.",
      designSystem:
        "Shared tokens with the Customer app, but tuned for utility — denser cards, calmer accents, persistent earnings strip."
    },
    solution: {
      features: [
        "Smart job discovery with distance + skill match",
        "One-tap apply and accept flows",
        "Availability calendar synced with schedule",
        "Earnings tracker and rating loop",
        "Trust badges (verified ID, training, references)"
      ]
    },
    impact: [
      "Shipped to App Store as the supply side of the marketplace",
      "Reduced screens to first relevant job from 6 to 3",
      "Unified visual language with the Customer app"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1629697776809-f37ceac39e77?w=1400&q=80",
      "https://images.unsplash.com/photo-1620856902651-ce18d6d31d42?w=1400&q=80",
      "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ]
  },
  {
    id: "careoff-web",
    slug: "careoff-web",
    index: "03",
    name: "CareOff Web Platform",
    category: "Web Platform",
    year: "2025",
    status: "Ongoing",
    role: "UI/UX Designer",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    teaser:
      "A desktop platform for job discovery and multi-role dashboards across the care ecosystem.",
    summary:
      "Extending CareOff beyond mobile — a desktop-first web platform connecting caregivers, support staff and technical professionals with structured opportunities.",
    tags: ["UX Design", "Web Platform", "Dashboards", "Design System"],
    figma: "#",
    links: [],
    overview: {
      problem:
        "Mobile is great for individuals, but recruiters, agencies and multi-role users need a richer desktop experience to manage hiring, schedules and compliance at scale.",
      users: [
        "Caregivers applying for long-term roles",
        "Support staff and coordinators",
        "Technical professionals in the care ecosystem"
      ],
      goals: [
        "Build a scalable IA that supports multiple roles",
        "Make job discovery and applications first-class on desktop",
        "Establish a desktop design system aligned with mobile"
      ]
    },
    process: {
      research:
        "Mapped role-based jobs-to-be-done, audited mobile flows for desktop gaps, benchmarked LinkedIn, Indeed and care-specific platforms.",
      flows: [
        "Role-aware sign-up and dashboard routing",
        "Job search with filters, saved searches and alerts",
        "Application tracker with statuses and reminders"
      ],
      wireframes:
        "12-column desktop grid, persistent left navigation, responsive condensation rules for tablet.",
      designSystem:
        "Cross-platform tokens — the same brand on mobile, scaled for dense desktop layouts."
    },
    solution: {
      features: [
        "Role-based dashboards with personalised feed",
        "Advanced filters and saved searches",
        "Application workflows tuned per role",
        "Scalable IA built to absorb future modules"
      ]
    },
    impact: [
      "Established desktop-first design system",
      "Standardised UX patterns across mobile + web",
      "In active development with engineering"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
      "https://images.unsplash.com/photo-1631093441315-a06b9bcbe63f?w=1400&q=80",
      "https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ]
  },
  {
    id: "tma-mobile",
    slug: "telematics-mobile-app",
    index: "04",
    name: "Telematics Mobile App",
    category: "Mobile App",
    year: "2024",
    status: "Shipped",
    role: "UI/UX Designer",
    cover:
      "https://images.unsplash.com/photo-1629697776809-f37ceac39e77?w=1600&q=80",
    teaser:
      "A telematics mobile app that turns GPS and sensor data into clear driving insights and gamified safety.",
    summary:
      "A mobile app that tracks driving behaviour, detects risky events and assesses risk using GPS and sensor data — with real-time tracking, geofencing, live location sharing, and a smarter, more motivating safety experience than incumbents like iSharing, Life360 and Zenroad.",
    tags: ["UX Design", "Mobile App", "IoT", "Gamification"],
    figma: "https://www.figma.com/proto/OYCbhtlP7rN3zTuGqTg7M4/ANINDA-Projects?page-id=0%3A1&node-id=1-6554",
    links: [],
    overview: {
      problem:
        "Existing safety apps feel either too utilitarian (telematics dashboards) or too consumer (family trackers). Drivers don't get insights they can act on, and families don't get peace of mind they can trust.",
      users: [
        "Everyday drivers who want to drive safer",
        "Families sharing live location for peace of mind",
        "Fleet drivers using telematics in personal time"
      ],
      goals: [
        "Make raw sensor data feel like clear, actionable insight",
        "Use gamification to nudge safer driving without nagging",
        "Match incumbents on tracking, beat them on usability"
      ]
    },
    process: {
      research:
        "Competitive teardown of iSharing, Life360 and Zenroad. Mapped sensor & GPS data points to user-facing insights. Validated scoring model with 4 drivers across short trips.",
      flows: [
        "Onboarding → permissions → first trip detection",
        "Trip detail → risky events timeline → score breakdown",
        "Family circle → live location → geofence alerts"
      ],
      wireframes:
        "Mobile-first, glanceable cards. Tested 3 score visualisation variants before settling on a daily ring + weekly streak pattern.",
      designSystem:
        "Calm, trust-forward palette with a single accent for risk highlights. Typography tuned for at-a-glance reading in cars."
    },
    solution: {
      features: [
        "Real-time tracking with live location sharing",
        "Geofencing with arrival/departure alerts",
        "Risky-event detection (harsh braking, sharp turns, speeding)",
        "Gamified daily safety score and weekly streaks",
        "Trip history with event timeline and replay"
      ]
    },
    impact: [
      "Smarter risk-scoring model vs. category leaders",
      "Family + driver value in one app, not two",
      "End-to-end design from research to engineering handoff"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1629697776809-f37ceac39e77?w=1400&q=80",
      "https://images.unsplash.com/photo-1707836916010-3c4ad261936c?w=1400&q=80",
      "https://images.pexels.com/photos/4724371/pexels-photo-4724371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ]
  },
  {
    id: "fleet-management",
    slug: "fleet-management",
    index: "05",
    name: "Fleet Management Solution",
    category: "Web Platform",
    year: "2024",
    status: "Shipped",
    role: "UI/UX Designer",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    teaser:
      "A telematics-powered fleet management ecosystem — one platform, four roles, one source of truth.",
    summary:
      "A complete telematics-driven fleet management ecosystem covering Drivers, Fleet Managers, Insurers and an Admin control plane. Each role gets a tailored experience built on a shared design system, all powered by the same real-time vehicle data.",
    tags: ["UX Design", "Web Platform", "SaaS", "Dashboards", "Telematics"],
    figma: "https://www.figma.com/proto/OYCbhtlP7rN3zTuGqTg7M4/ANINDA-Projects?page-id=4%3A6067&node-id=4-14245",
    links: [],
    overview: {
      problem:
        "Fleet operations are fragmented across four very different audiences — drivers in the cab, managers in dispatch, insurers reviewing claims, admins running the platform. Each persona needs a different lens on the same vehicle data, in real time.",
      users: [
        "Drivers using mobile + in-cab tools",
        "Fleet managers monitoring assets and risk",
        "Insurers processing FNOL and claims",
        "Platform admins managing access and data"
      ],
      goals: [
        "Build one design system that scales across 4 personas",
        "Surface persona-specific insights from a shared data layer",
        "Make compliance (ELD, DVIR) feel calm, not punitive"
      ]
    },
    process: {
      research:
        "Stakeholder workshops with each persona, journey mapping across the lifecycle of a single trip, and a deep audit of incumbent telematics tools.",
      flows: [
        "Driver: trip lifecycle → DVIR → ELD logs → diagnostics",
        "Manager: live map → asset detail → risk scoring → reports",
        "Insurer: FNOL → claim review → driver analytics → CRM",
        "Admin: org/user management → role permissions → audits"
      ],
      wireframes:
        "Modular, role-aware dashboard system. Same widgets, different priorities per persona. Iterated dense data tables for scannability.",
      designSystem:
        "Desktop-first system with a unified component library, reusable widgets and consistent data-vis language across all four modules."
    },
    solution: {
      features: [
        "Persona-specific dashboards on shared telematics data",
        "Real-time asset tracking, ELD compliance and DVIR",
        "AI dashcam workflows and supply-chain insights",
        "Insurer FNOL alerts with driver behaviour analytics",
        "Centralised admin panel with full role management"
      ]
    },
    impact: [
      "Four role-based products on one design system",
      "Real-time data, persona-specific clarity",
      "Cleaner compliance experience for drivers"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
      "https://images.unsplash.com/photo-1631093441315-a06b9bcbe63f?w=1400&q=80",
      "https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    modules: [
      {
        name: "Drivers",
        description:
          "Route optimization, real-time notifications, ELD mandate compliance, DVIR and vehicle diagnostics.",
        figma:
          "https://www.figma.com/proto/OYCbhtlP7rN3zTuGqTg7M4/ANINDA-Projects?page-id=34%3A23588&node-id=34-31412"
      },
      {
        name: "Fleet Managers",
        description:
          "AI dashcams, asset tracking, supply chain insights, integration with TMS, HR and dispatch systems.",
        figma:
          "https://www.figma.com/proto/OYCbhtlP7rN3zTuGqTg7M4/ANINDA-Projects?page-id=4%3A6067&node-id=4-14245"
      },
      {
        name: "Insurers",
        description:
          "Real-time FNOL notifications, driver behaviour analytics, enhanced claim processing and CRM integration.",
        figma:
          "https://www.figma.com/proto/OYCbhtlP7rN3zTuGqTg7M4/ANINDA-Projects?page-id=9%3A55797&node-id=9-58852"
      },
      {
        name: "Admin Panel",
        description:
          "Centralised interface for admins to access and manage data across all user types — Drivers, Fleet Managers and Insurers — with full visibility and control.",
        figma:
          "https://www.figma.com/proto/OYCbhtlP7rN3zTuGqTg7M4/ANINDA-Projects?page-id=9%3A17398&node-id=9-55592"
      }
    ]
  }
];

export const personalProjects = [
  {
    id: "cherish",
    name: "Cherish Being You",
    type: "Mental Health App",
    description:
      "A mental health companion blending journaling, an AI chatbot and gamified rituals to make daily wellbeing feel approachable.",
    image:
      "https://images.unsplash.com/photo-1642557581366-539b6fed5998?w=1200&q=80",
    link: "https://www.behance.net/gallery/195228421/Revolutionizing-Mental-Health-Cherish-Being-You",
    tags: ["Concept", "Mobile", "Wellbeing"],
  },
  {
    id: "subconscious",
    name: "Power of Subconscious Mind",
    type: "Self-development App",
    description:
      "An iOS + Android app guiding users through subconscious reprogramming, with personalised progress tracking and 30% improved usability over benchmarks.",
    image:
      "https://images.unsplash.com/photo-1707836916010-3c4ad261936c?w=1200&q=80",
    link: "#",
    tags: ["iOS", "Android", "Self-help"],
  },
];

export const skills = {
  ux: [
    "User Research",
    "Information Architecture",
    "Persona Creation",
    "User Flows",
    "Wireframing",
    "Prototyping",
    "Interaction Design",
    "Design Systems",
    "Usability Testing",
    "Typography",
    "Color Theory",
  ],
  tools: [
    { name: "Figma", level: 95 },
    { name: "FigJam", level: 90 },
    { name: "Adobe Photoshop", level: 80 },
    { name: "Adobe Illustrator", level: 80 },
    { name: "Adobe Premiere Pro", level: 65 },
    { name: "Jira", level: 75 },
  ],
  ai: [
    "ChatGPT",
    "Claude",
    "Copilot",
    "Figma Make",
    "Galileo AI",
    "Uizard",
    "Visily",
    "Stitch",
    "Runway ML",
  ],
};

export const experience = [
  {
    company: "Talentdial Software Technologies",
    role: "UI/UX Designer",
    period: "2025 — Present",
    location: "Remote, India",
    bullets: [
      "Leading desktop design for the CareOff Web Platform — a multi-role job marketplace for the care ecosystem.",
      "Shipped CareOff dual-sided mobile platform end-to-end (Customer + Companion apps).",
      "Built a scalable design system used across both apps and contributed to brand identity & app store creatives.",
    ],
  },
  {
    company: "ConnectedX",
    role: "UI/UX Designer",
    period: "2024 — 2025",
    location: "Hyderabad, India",
    bullets: [
      "Designed a telematics-based fleet management web suite for drivers, fleet managers, insurers and admins.",
      "Redesigned Toyota's Logistics Input Output System (LIOS) billing module for clarity and workflow speed.",
      "Designed a mobile telematics app with gamified risk scoring, geofencing and live location sharing.",
    ],
  },
  {
    company: "Larsen & Toubro Defence",
    role: "System Engineer (R&D)",
    period: "2023 — 2024",
    location: "Mumbai, India",
    bullets: [
      "Worked in PTDC (Electronics), testing 50+ components for performance and reliability.",
      "Built a foundation in systems thinking that now informs how I approach complex product UX.",
    ],
  },
];

export const education = [
  {
    degree: "M.E., Electrical Engineering",
    school: "Jadavpur University",
    period: "2021 — 2023",
    note: "Specialisation: Measurements & Instrumentation",
  },
  {
    degree: "B.E., Power Engineering",
    school: "Jadavpur University",
    period: "2016 — 2020",
    note: "",
  },
];

export const certifications = [
  "UpGrad — UI/UX Design Bootcamp (2024)",
  "Interaction Design Foundation — User Experience (Ongoing)",
  "Interaction Design Foundation — Design Thinking (Ongoing)",
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
