export const personalInfo = {
  name: "Willy",
  title: "Data Analyst | AI Engineer",
  shortTitle: "Data Analyst • Information Systems",
  location: "Tangerang Selatan / Jakarta • Indonesia",
  fullLocation: "Tangerang Selatan / Jakarta, Indonesia",
  email: "contact@willylengkong.com",
  github: "https://github.com/willylengkong",
  linkedin: "https://linkedin.com/in/willylengkong",
  availability: "Available for Opportunities",
  focus: "Data Analytics & Pipeline Automation",
  bioHeadline: "End-to-end data analyst — from retail data extraction & automation, through ETL pipelines into PostgreSQL / Tableau / Looker, delivering high-impact business intelligence and automated reporting to accelerate decision-making.",
  aboutBio1: "Hi! I'm a Data Analyst & Information Systems graduate bridging high-speed Python reporting automation with executive retail decision intelligence.",
  aboutBio2: "Previously optimized nationwide merchandising data flows, SKU velocity tracking, and business intelligence models across retail operations."
};

export const skillsCategories = [
  {
    id: "analytics",
    title: "Analytics & Business Intelligence",
    description: "Tableau, Looker Studio, Automated KPI Dashboards",
    skills: ["Tableau Desktop", "Looker Studio", "Advanced Excel", "SPD / APC / STD Models", "Power BI", "Data Storytelling"]
  },
  {
    id: "engineering",
    title: "Data Engineering & Automated Pipelines",
    description: "ETL scripting, relational databases, vectorized pipelines",
    skills: ["Python (Pandas, NumPy)", "OpenPyXL & XlsxWriter", "PostgreSQL", "Oracle SQL", "Scheduled ETL Crons", "Data Cleansing"]
  },
  {
    id: "systems",
    title: "Enterprise Systems & Web Dev",
    description: "Enterprise software modeling, fullstack frameworks",
    skills: ["C# (.NET MAUI)", "JavaScript / React", "CSS & Responsive UI", "Git & CI/CD", "RESTful APIs", "Process Automation"]
  }
];

export const featuredProjects = [
  {
    id: "project1",
    title: "Sales Reporting Automation Engine",
    category: "Data & Automation Engine",
    badge: "Production",
    badgeColor: "#3b82f6",
    summary: "An automated reporting system built to replace repetitive weekly Excel processing and manual VLOOKUP workflows. The system processes master data, automatically determines the reporting period, calculates performance metrics, generates standardized Excel reports, and distributes them through Microsoft Outlook.",
    builtWith: ["Python", "Pandas", "NumPy", "OpenPyXL", "XlsxWriter", "PyWin32"],
    tools: ["Excel", "Outlook", "VS Code", "Looker Studio", "Google Slides", "ChatGPT", "Gemini", "Claude"],
    metrics: [
      { value: "99.3%", label: "Time Saved", sub: "165m → 30s" },
      { value: "11", label: "Daily Reports", sub: "Fully Automated" },
      { value: "0", label: "Manual Errors", sub: "Schema Validated" }
    ],
    caseStudy: {
      subtitle: "Enterprise Retail Merchandising Pipeline",
      overview: "Consolidates high-volume branch sales spreadsheets into vectorized delta pipelines, dropping manual report collation from 220 minutes to 30 seconds daily.",
      architecture: [
        "In-memory data frame consolidation using vectorized Pandas routines",
        "Automated schema drift validation and robust exception logging system",
        "Multi-workbook Excel formatting via OpenPyXL and XlsxWriter styling engines",
        "Final formatted output delivered via automated scheduled cron jobs and Outlook COM dispatch"
      ],
      result: "99.3% efficiency gain with zero downtime and automated error-handling routines across nationwide merchandising teams."
    }
  },
  {
    id: "project2",
    title: "Retail Trend Performance Dashboard",
    category: "Analytics & Visualization",
    badge: "Live Dashboard",
    badgeColor: "#10b981",
    summary: "Real-time merchandise velocity tracking and store-level anomaly detection engine. Integrates weekly store performance indicators, out-of-stock risk models, and historical promotion margins across 75 hyper-local outlets.",
    builtWith: ["Tableau", "SQL", "Looker", "PostgreSQL", "Data Modeling"],
    tools: ["Tableau Desktop", "PostgreSQL", "Google BigQuery", "Looker Studio", "Excel Data Models"],
    metrics: [
      { value: "Daily Sync", label: "Ingestion Cadence", sub: "Delta Ingestion" },
      { value: "75 Stores", label: "Covered Outlets", sub: "Regional Network" },
      { value: "100%", label: "Audit Coverage", sub: "Automated Rules" }
    ],
    caseStudy: {
      subtitle: "Regional Store Performance Tracking",
      overview: "Unified data feeds across 75 physical locations to evaluate SKU velocity (SPD), Average Purchase per Customer (APC), and Standard Transaction Density (STD).",
      architecture: [
        "Real-time shelf velocity detection across 40 FMCG categories",
        "Historical promotional margin elasticity comparisons with dynamic basket analysis",
        "Store clustering algorithm grouping outlets by transaction volume and demographics",
        "Interactive executive drill-downs for category managers and regional directors"
      ],
      result: "Enabled direct strategic price adjustments and optimal inventory rebalancing across high-velocity perishables."
    }
  }
];

export const subProjects = [
  {
    id: "scraper",
    tag: "RETAIL INTELLIGENCE",
    tech: "Python",
    title: "Retail Price Scraper Engine",
    description: "Automated crawler benchmarking 45,000+ FMCG SKUs against major competitors with rotating proxy management.",
    caseStudy: {
      subtitle: "Competitive Pricing Intelligence",
      overview: "Automated web data extraction platform capable of scraping dynamic catalog pages, standardizing product naming conventions, and flagging aggressive competitor markdowns.",
      architecture: [
        "Asynchronous request batching with exponential backoff and rotating proxy pools",
        "Fuzzy string matching algorithms to pair equivalent SKUs across inconsistent retailer naming",
        "Delta alert trigger notifying category managers when rival pricing drops >5%"
      ],
      result: "Monitors 45,000+ items weekly, providing executive merchandising with decisive pricing intelligence."
    }
  },
  {
    id: "marketplace",
    tag: "ECOMMERCE PLATFORM",
    tech: "Node / PostgreSQL",
    title: "Campus Marketplace 'Miky'",
    description: "Peer-to-peer student delivery platform with micro-hub staging, live tracking, and secure escrow settlement.",
    caseStudy: {
      subtitle: "Hyper-Local Logistical Engine",
      overview: "Fullstack campus trading ecosystem built to handle synchronous peer order routing, batch fulfillment, and instant inventory updates.",
      architecture: [
        "Relational PostgreSQL schema with ACID transaction guarantees for peer-to-peer escrow payments",
        "Geospatial order clustering minimizing runner transit times across university buildings",
        "Event-driven socket connection delivering live order tracking updates"
      ],
      result: "Piloted across campus community facilitating smooth trade cycles and verified student commerce."
    }
  },
  {
    id: "academic-portal",
    tag: "FULLSTACK PORTAL",
    tech: "Next.js / Prisma",
    title: "UPH News Academic Portal",
    description: "Department portal unifying peer-reviewed journals, lab course schedules, and automated announcement distribution.",
    caseStudy: {
      subtitle: "Faculty Content & Knowledge Hub",
      overview: "Centralized academic hub built for faculty members and students to collaborate, index research papers, and manage departmental communications.",
      architecture: [
        "Next.js server-side rendered architecture optimized for high search indexability and sub-second load times",
        "Role-based access control (RBAC) allowing professors and lab assistants to publish verified course material",
        "Automated notification distribution dispatching urgent class scheduling alerts"
      ],
      result: "Unified over 1,200 student course interactions with streamlined lab material access."
    }
  }
];

export const experienceData = [
  {
    company: "PT Indomarco Prismatama (Indomaret Group)",
    division: "Retail Merchandising & Automated Analytics",
    period: "Jun 2024 – Present",
    type: "On-site",
    overview: "Responsible for retail merchandising intelligence, nationwide performance reporting optimization, and engineering automated data pipelines for business decision support.",
    roles: [
      {
        title: "MD Strategic Analyst",
        employmentType: "Full-time",
        period: "Jun 2024 — Present",
        isCurrent: true,
        location: "Menara Indomaret, Jakarta, Indonesia",
        skills: ["Python", "Pandas", "Tableau", "OpenPyXL", "ETL", "Looker Studio", "Automated Data Pipelines", "SQL"],
        achievements: [
          "Developed the Python reporting automation pipeline for Sales Perishable reports, reducing daily manual processing time across 11 reports from 165–220 minutes to ~30 seconds (99.3% efficiency gain).",
          "Conducted comprehensive competitive analysis (O!Save vs. Indomaret) spanning 75 stores and 40 product departments using SPD, APC, and STD evaluation models.",
          "Designed and implemented a multi-tier target allocation pipeline integrating historical sales trends and carton packaging rounding rules."
        ]
      },
      {
        title: "Merchandising Support Staff",
        employmentType: "Full-time",
        period: "Oct 2022 — Jun 2024",
        duration: "1 yr 9 mos",
        isCurrent: false,
        location: "Menara Indomaret, Jakarta, Indonesia",
        skills: ["Oracle", "Excel", "Outlook", "Retail Operations", "Inventory Tagging"],
        responsibilities: [
          {
            highlight: "Product Data Management",
            text: "Managed the registration process for an average of 70 new products per month into the system, ensuring complete data accuracy before nationwide distribution across retail stores."
          },
          {
            highlight: "Pricing Administration",
            text: "Handled regular input and updating of product selling prices, maintaining strict alignment with prevailing retail merchandising strategy."
          },
          {
            highlight: "Promotion Execution",
            text: "Managed technical setup and system parameters for promotional campaigns, ensuring effective and timely execution at the store level."
          },
          {
            highlight: "Product Classification & Tagging",
            text: "Responsible for applying product labels (tags) to categorize sales performance, identifying best-sellers (fast-moving), regular-selling items, and items slated for delisting."
          }
        ]
      }
    ]
  }
];

export const honorsAndAchievements = [
  {
    id: "honor1",
    badge: "NATIONAL",
    title: "Medalist for Excellence",
    description: "Awarded for high-performance database schema implementations under strict timed conditions.",
    certTitle: "CERTIFICATE OF MERIT",
    awarded: "AWARDED: 2021",
    icon: "award"
  },
  {
    id: "honor2",
    badge: "REGIONAL",
    title: "1st Place - Informatics",
    description: "Championed regional challenge analyzing autonomous telemetry pipelines and data ingestion.",
    certTitle: "1ST WINNER TROPHY",
    awarded: "AWARDED: 2021",
    icon: "trophy"
  },
  {
    id: "honor3",
    badge: "DEAN'S LIST",
    title: "Outstanding Scholar",
    description: "Honored for consistent academic excellence and database systems laboratory leadership.",
    certTitle: "DEAN'S COMMENDATION",
    awarded: "ACADEMIC 2021-2022",
    icon: "scholar"
  },
  {
    id: "honor4",
    badge: "HACKATHON",
    title: "Top Tier Finalist",
    description: "Ranked in top 5% solving dynamic graph queries and distributed crawler problems.",
    certTitle: "ALGORITHMIC CUP",
    awarded: "COMPLETED",
    icon: "terminal"
  }
];

export const educationData = {
  institution: "Universitas Pelita Harapan (UPH)",
  acronym: "UPH",
  period: "2025 — 2029 (Expected)",
  mode: "On-campus",
  faculty: "Faculty of Artificial Intelligence and Data Science",
  degree: "Bachelor of Information Systems — Data Science and Data Analytics",
  type: "Undergraduate Degree",
  gpa: "3.78 / 4.00",
  location: "Lippo Karawaci, Tangerang, Indonesia",
  focus: "Enterprise Information Systems & Data Innovation, Applied Analytics, Pipeline Engineering",
  overview: "Universitas Pelita Harapan (UPH) | Faculty of Artificial Intelligence and Data Science. Cumulative GPA: 3.78 / 4.00. Focus: Enterprise Information Systems & Data Innovation. Direct alignment between academic data engineering concepts and enterprise retail automation pipelines.",
  highlights: [
    "Academic to enterprise synergy — establishing direct alignment between theoretical data engineering concepts, database architectures, and practical enterprise retail automation pipelines.",
    "High-distinction academic performance — maintained a cumulative GPA of 3.78 / 4.00 within the Faculty of Artificial Intelligence and Data Science, with emphasis on relational modeling and high-throughput data architectures.",
    "Applied innovation research — actively investigating scalable automated data workflows, distributed analytical processing, and business intelligence models tailored for retail supply chains."
  ]
};
