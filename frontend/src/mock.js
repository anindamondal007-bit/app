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
    id: "careoff",
    index: "01",
    name: "CareOff",
    category: "Dual-Sided Care Platform",
    year: "2025",
    role: "Lead UI/UX Designer",
    cover:
      "https://images.unsplash.com/photo-1591608517093-3bb6aa9efe35?w=1600&q=80",
    accent: "#0B1B3A",
    summary:
      "End-to-end design of a dual-sided mobile platform connecting families with verified caregivers for baby and elder care.",
    problem:
      "Families struggle to find verified, trustworthy caregivers; caregivers lack a structured way to discover and apply for relevant work.",
    process:
      "Discovery interviews, journey mapping, low-fi flows, OTP-driven trust patterns, then a high-fidelity system with shared tokens across two apps.",
    solution:
      "Two synchronized apps — a Customer app for discovery and booking, and a Companion app for caregivers to apply and manage jobs — built on a single scalable design system.",
    outcomes: [
      "Shipped from concept to launch",
      "Unified design system across 2 apps",
      "Trust-driven OTP and verification flows",
      "Owned brand, app store creatives & logo",
    ],
    tags: ["Mobile", "Marketplace", "Design System", "Branding"],
    link: "https://www.figma.com/proto/Z7tZQApoTpEAPn81FGxkJR/CareOff--Phase-2-?page-id=15221%3A11373&node-id=15221-15063&starting-point-node-id=15221%3A15101&show-proto-sidebar=1",
  },
  {
    id: "connectedx",
    index: "02",
    name: "ConnectedX Fleet",
    category: "Fleet Management Suite",
    year: "2024",
    role: "UI/UX Designer",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    accent: "#0B1B3A",
    summary:
      "A telematics-powered fleet management ecosystem for drivers, fleet managers, insurers and admins — all sharing one source of truth.",
    problem:
      "Fleet operations are fragmented across drivers, dispatch, insurers and admins. Each persona needs different views of the same vehicle data, in real time.",
    process:
      "Stakeholder workshops, role-based information architecture, modular dashboard patterns, then a desktop-first system extended to mobile drivers.",
    solution:
      "A web suite with persona-specific dashboards (driver, manager, insurer, admin) covering ELD compliance, DVIR, AI dashcams, FNOL and CRM integrations.",
    outcomes: [
      "4 role-based dashboards in one system",
      "Real-time tracking + ELD/DVIR compliance",
      "AI dashcam & risk-scoring flows",
      "Centralised admin control plane",
    ],
    tags: ["Web", "SaaS", "Dashboards", "Telematics"],
    link: "https://www.figma.com/proto/GyXvy3chJPUrp9maDJSDME/Fleet-X---Desktop?node-id=2027-30484&starting-point-node-id=2027%3A30484",
  },
  {
    id: "tma",
    index: "03",
    name: "TMA Telematics",
    category: "Driver Behavior Mobile App",
    year: "2024",
    role: "UI/UX Designer",
    cover:
      "https://images.unsplash.com/photo-1629697776809-f37ceac39e77?w=1600&q=80",
    accent: "#0B1B3A",
    summary:
      "A mobile app that turns GPS and sensor data into clear driving insights, gamified safety, and real-time location sharing.",
    problem:
      "Existing safety apps (iSharing, Life360, Zenroad) feel either too utilitarian or too consumer — drivers need actionable, motivating insights.",
    process:
      "Competitive teardown, sensor-data mapping, scoring model exploration, lo-fi to hi-fi iteration with usability tests on real driving sessions.",
    solution:
      "A mobile-first experience with live tracking, geofencing, risky-event detection, and a gamified risk score that nudges safer driving.",
    outcomes: [
      "Smarter risk scoring vs. category leaders",
      "Geofencing + live family sharing",
      "Gamified safety streaks & rewards",
      "End-to-end design from research to handoff",
    ],
    tags: ["Mobile", "IoT", "Gamification"],
    link: "https://www.figma.com/proto/jTSktrheAh2iqsIXd3xdko/TMA---Mobile?node-id=11769-6015&starting-point-node-id=11769%3A6015",
  },
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
