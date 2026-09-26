export const personalInfo = {
  name: "Willy",
  title: "Data Analyst | Retail Analytics",
  shortTitle: "Data Analyst • Information Systems",
  location: "Tangerang Selatan / Jakarta • Indonesia",
  fullLocation: "Tangerang Selatan / Jakarta, Indonesia",
  email: "contact@willylengkong.com",
  github: "https://github.com/willylengkong",
  linkedin: "https://linkedin.com/in/willylengkong",
  availability: "Available for Opportunities",
  focus: "Data Analytics & Pipeline Automation",
  bioHeadline: "End-to-end Data Analyst — from extracting data from Looker Studio, Tableau, and internal tools, through data processing, analysis, and automation, to delivering actionable business insights that support data-driven decision-making.",
  aboutBio1: "Hi! I'm a Data Analyst & Information Systems graduate bridging high-speed Python reporting automation with executive retail decision intelligence.",
  aboutBio2: "Previously optimized nationwide merchandising data flows, SKU velocity tracking, and business intelligence models across retail operations."
};

export const skillsCategories = [
  {
    id: "data-automation",
    title: "Data & Automation",
    icon: "cpu",
    skills: [
      "Python",
      "pandas",
      "openpyxl",
      "xlsxwriter",
      "Data Pipelines",
      "Workflow Automation",
      "Data Processing"
    ]
  },
  {
    id: "analytics-retail",
    title: "Analytics & Retail Intelligence",
    icon: "trending-up",
    skills: [
      "SPD / APC / STD Analysis",
      "Sales Analysis",
      "Stock Analysis",
      "Competitive Analysis",
      "Store Performance",
      "Business Analysis",
      "Target Allocation",
      "Retail Metrics"
    ]
  },
  {
    id: "excel-bi",
    title: "Excel, BI & Data Transformation",
    icon: "grid",
    skills: [
      "Advanced Excel",
      "Power Query",
      "PivotTable",
      "Advanced Formulas",
      "Data Transformation",
      "Power BI",
      "Looker Studio",
      "QlikView"
    ]
  },
  {
    id: "database-query",
    title: "Database & Query",
    icon: "database",
    skills: [
      "SQL",
      "SQLite",
      "Data Modeling",
      "Data Cleaning"
    ]
  },
  {
    id: "software-dev",
    title: "Software Development",
    icon: "code",
    skills: [
      "HTML",
      "CSS",
      "PHP",
      "Laravel",
      "C#",
      ".NET MAUI"
    ]
  },
  {
    id: "dev-ai-tools",
    title: "Development & AI Tools",
    icon: "tool",
    skills: [
      "VS Code",
      "Git",
      "Jupyter Notebook",
      "Google Sheets",
      "Outlook API",
      "ChatGPT",
      "Claude",
      "Gemini",
      "Antigravity"
    ]
  }
];

export const automationProjects = [
  {
    id: "automation1",
    title: "Python Report Automation - Perishable",
    subtitle: "PT Indomarco Prismatama • Production",
    badge: "Case Study",
    punchline: "Automated daily multi-store perishable reporting pipeline replacing 3+ hours of manual Excel processing.",
    description: "An end-to-end Python pipeline automating 11 daily perishable sales reports across nationwide store networks. Integrates master sales feeds, computes SPD/APC performance metrics, applies automated validation rules, and dispatches executive summaries via Outlook.",
    metrics: [
      { value: "11", label: "reports automated" },
      { value: "~30s", label: "processing runtime" },
      { value: "165–220m", label: "daily time saved" }
    ],
    builtWith: ["Python", "Pandas", "NumPy", "OpenPyXL", "Outlook COM"],
    caseStudy: {
      subtitle: "Nationwide Perishable Sales Reporting Engine",
      overview: "Automated daily perishable reporting pipeline eliminating 165–220 minutes of daily manual Excel processing. Directly ingests multi-branch sales data, calculates vital store performance KPIs, and formats finalized workbooks.",
      architecture: [
        "Automated master data extraction and daily sales delta ingestion",
        "Vectorized Pandas aggregation across store and product department dimensions",
        "Dynamic target allocation rules and margin validation logic",
        "Automated distribution through Outlook COM dispatch to retail category managers"
      ],
      result: "99.3% efficiency gain with runtime reduced from 3+ hours to ~30 seconds, maintaining 100% data fidelity across nationwide branch stores."
    }
  },
  {
    id: "automation2",
    title: "Enterprise Data Pipeline & Analytics",
    subtitle: "Planned Architecture • In Development",
    badge: "Coming Soon",
    punchline: "Next-generation automated telemetry aggregation and real-time retail intelligence platform.",
    description: "Upcoming data engineering platform designed to stream multi-outlet sales indicators, evaluate store clustering models, and dynamically trigger margin rebalancing alerts.",
    metrics: [
      { value: "—", label: "data sources" },
      { value: "TBD", label: "latency target" },
      { value: "—", label: "accuracy score" }
    ],
    isPlaceholder: true
  }
];

export const scrapingNicheProjects = [
  {
    id: "niche1",
    tags: ["HTTP-only", "TLS Impersonation", "GraphQL Persisted-Query", "Apollo SSR Cache", "MTOP Signed", "+3 more"],
    icon: "cart",
    title: "E-Commerce & Marketplace",
    count: "43",
    description: "The largest niche in the roster - AliExpress, Alibaba, Shopee, Amazon, Walmart, eBay, Etsy, DHgate, and competitor retail feeds.",
    details: {
      overview: "Scalable catalog extraction engine with automated pagination, header rotation, and pricing delta alerts."
    }
  },
  {
    id: "niche2",
    tags: ["Apollo Persisted-Query", "Per-Size Orderbook", "Solid-Comps Extraction", "Price-Spread Diffing", "+1 more"],
    icon: "database",
    title: "Resale, Sneakers & Collectibles",
    count: "17",
    description: "Secondary-market pricing intelligence - StockX, GOAT, Grailed, Poshmark, Vinted, Whatnot, and real-time bid/ask telemetry.",
    details: {
      overview: "Logistics tracking pipeline monitoring shipping lanes, container turnaround times, and regional hub bottlenecks."
    }
  },
  {
    id: "niche3",
    tags: ["Warm-page Bootstrap", "doc_id Snapshot", "Guest Token Bundle", "atproto / XRPC", "+4 more"],
    icon: "users",
    title: "Social Media & Creator Platforms",
    count: "58",
    description: "Crawlers across 18+ platforms - Instagram, TikTok, YouTube, X/Twitter, Facebook, Threads, Reddit, and creator commerce.",
    details: {
      overview: "Aggregates multi-source customer reviews with sentiment classification and competitive pricing intelligence."
    }
  }
];

export const webDevProjects = [
  {
    id: "web1",
    tags: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "RESTful API", "+2 more"],
    icon: "globe",
    title: "Executive Retail Analytics Portal",
    description: "Modern responsive web architecture, interactive KPI dashboards, and scalable RESTful API integrations for merchandise teams.",
    details: {
      overview: "Executive dashboard platform delivering real-time SKU velocity charts and merchandise margin tracking."
    }
  },
  {
    id: "web2",
    tags: ["Vite", "Zustand State", "Dynamic BI", "Responsive UI", "+3 more"],
    icon: "code",
    title: "Store Inventory Management Interface",
    description: "High-performance client interface with real-time stock status, automated reordering workflows, and secure authentication.",
    details: {
      overview: "Inventory monitoring interface with instant search, batch update workflows, and discrepancy alerting."
    }
  },
  {
    id: "web3",
    tags: ["Node.js", "PostgreSQL", "Docker", "Prisma ORM", "Redis Cache", "+1 more"],
    icon: "layers",
    title: "Automated Reporting Web Dashboard",
    description: "End-to-end fullstack platform providing automated report generation, scheduled exports, and background pipeline monitoring.",
    details: {
      overview: "Web portal managing automated report triggers, audit logs, and export delivery across organizational roles."
    }
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
    id: "apify",
    company: "Freelance - Web Scraping",
    brand: "Apify Marketplace",
    timelineTitle: "APIFY",
    duration: "2 mos · Remote",
    type: "Remote",
    website: "https://apify.com/",
    logo: "/images/apify-logo.png",
    isActive: true,
    overview: "Independent freelance work delivering production scraping engines and end-to-end data pipelines to clients worldwide - both via the Apify Marketplace under @wyle and direct engagements.",
    roles: [
      {
        title: "Apify Actor Developer",
        employmentType: "Self-employed",
        period: "Aug 2026 - Present · 7 mos",
        isCurrent: true,
        location: "Remote (Worldwide)",
        skills: "Python, curl_cffi, primp, scrapling, Apify SDK, MCP",
        achievements: [
          "Architected and deployed 19+ production scraping engines on Apify Marketplace under @wyle.",
          "Custom client engagements - bespoke HTTP-only engines for marketplaces (Tokopedia, Shopee, AliExpress), news publishers, and social platforms.",
          "End-to-end delivery: anti-bot reverse engineering → Apify deployment → monetization."
        ]
      }
    ]
  },
  {
    id: "indomaret",
    company: "PT Indomarco Prismatama",
    brand: "Indomaret Group",
    timelineTitle: "INDOMARET",
    duration: "3 years 11 months",
    type: "On-site",
    website: "https://www.indomaret.co.id/",
    logo: "/images/indomaret-official-cropped.png",
    isActive: true,
    overview: "Indomaret Group is a leading Indonesian retail company operating a nationwide network of 23,000+ Indomaret stores.",
    roles: [
      {
        title: "MD Strategic Analyst",
        employmentType: "Full-time",
        period: "Jun 2024 – Present",
        isCurrent: true,
        location: "Menara Indomaret, Jakarta, Indonesia",
        skills: "Python, pandas, Microsoft Excel, Tableau, Looker Studio, IMBI, QlikView, and 3+ other skills",
        achievements: [
          "Analyze sales, stock, store performance, and retail metrics to provide insights for merchandising evaluation and business decision-making.",
          "Develop and maintain Python-based reporting automation for recurring merchandising reports, reducing daily manual processing across 11 reports from 165–220 minutes to ~30 seconds (99.3% efficiency gain).",
          "Conduct competitive analysis (OI Save vs. Indomaret) across 75 stores and 40 product departments, using SPD, APC, and STD evaluation metrics.",
          "Develop store-level target allocation models using historical sales trends and carton-packaging rules to support nationwide merchandising initiatives.",
          "Transform data from internal tools, Looker Studio, Tableau, and other sources into structured analysis and actionable business insights.",
          "Collaborate with stakeholders to translate business requirements into analytical solutions, reporting improvements, and automated workflows."
        ]
      },
      {
        title: "Merchandising Support Staff",
        employmentType: "Full-time",
        period: "Aug 2021 – May 2024",
        isCurrent: false,
        location: "Menara Indomaret, Jakarta, Indonesia",
        skills: "Oracle, Excel, Outlook, SSO",
        achievements: [
          "Product Data Management: Managed the registration process for an average of 70 new products per month into the system, ensuring complete data accuracy before nationwide distribution across retail stores.",
          "Pricing Administration: Handled regular input and updating of product selling prices, maintaining strict alignment with prevailing retail merchandising strategy.",
          "Promotion Execution: Managed technical setup and system parameters for promotional campaigns, ensuring effective and timely execution at the store level.",
          "Product Classification & Tagging: Responsible for applying product labels (tags) to categorize sales performance, identifying best-sellers (fast-moving), regular-selling items, and items slated for delisting."
        ]
      }
    ]
  }
];

export const honorsAndAchievements = [
  {
    id: "cert1",
    badge: "GOOGLE",
    title: "Google Data Analytics Professional",
    description: "Hands-on competency in data preparation, SQL queries, data cleaning, Tableau visualization, and statistical modeling.",
    certTitle: "OFFICIAL PROFESSIONAL CERTIFICATE",
    awarded: "ISSUED: 2023",
    icon: "badge"
  },
  {
    id: "cert2",
    badge: "TABLEAU",
    title: "Tableau Desktop Specialist",
    description: "Core validation in foundational business intelligence dashboards, visual analytics, calculated fields, and interactive chart systems.",
    certTitle: "VERIFIED CREDENTIAL",
    awarded: "ISSUED: 2022",
    icon: "file"
  },
  {
    id: "cert3",
    badge: "DATABASE",
    title: "Advanced SQL & Database Systems",
    description: "Accreditation in PostgreSQL query optimization, complex CTEs, indexing, analytical window functions, and relational data architecture.",
    certTitle: "POSTGRESQL SPECIALIST",
    awarded: "ISSUED: 2022",
    icon: "shield"
  },
  {
    id: "cert4",
    badge: "PYTHON",
    title: "Python for Data Science & Automation",
    description: "Specialized training in automated data extraction, Pandas/NumPy pipelines, web scraping workflows, and automated reporting.",
    certTitle: "DATA PIPELINE SPECIALIST",
    awarded: "ISSUED: 2021",
    icon: "award"
  }
];

export const certifications = honorsAndAchievements;

export const educationData = {
  institution: "Universitas Pelita Harapan (UPH)",
  acronym: "UPH",
  timelineTitle: "UPH",
  website: "https://www.uph.edu/",
  logo: "/images/uph-logo.png",
  isActive: true,
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
