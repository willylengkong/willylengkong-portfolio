export const personalInfo = {
  name: "Willy",
  title: "Data Analyst | Retail Analytics",
  shortTitle: "Data Analyst • UPH Computer Science",
  location: "Jakarta Barat / Jakarta • Indonesia",
  fullLocation: "Jakarta Barat / Jakarta, Indonesia",
  email: "willylengkongg@gmail.com",
  github: "https://github.com/willylengkong",
  linkedin: "https://www.linkedin.com/in/willy-lengkong/",
  instagram: "https://www.instagram.com/wyyleee__/",
  discord: "https://discord.com/users/willy10001",
  discordUsername: "willy10001",
  whatsapp: "https://wa.me/6282281157451",
  whatsappDisplay: "+62 822-8115-7451",
  telegram: "https://t.me/wyylee",
  tiktok: "https://www.tiktok.com/@wiyleee",
  availability: "Available for Opportunities",
  focus: "Data Analytics & Pipeline Automation",
  bioHeadline: "Data turns information into insights, and insights into better business decisions.",
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
    title: "Python Report Automation — Perishable",
    subtitle: "PT Indomarco Prismatama",
    tags: [
      "Python",
      "pandas",
      "openpyxl",
      "Microsoft Excel",
      "Outlook",
      "Claude AI"
    ],
    description: "Automated daily multi-department sales reporting across Perishable using Python, replacing repetitive Excel processing and manual email distribution.",
    metrics: [
      { value: "11", label: "Reports automated" },
      { value: "~30s", label: "Reported runtime" },
      { value: "99.3%", label: "Reported time saved" }
    ],
    builtWith: [
      "Python",
      "pandas",
      "openpyxl",
      "Microsoft Excel",
      "Outlook",
      "VS Code",
      "Virtual Environment (venv)"
    ],
    caseStudy: {
      subtitle: "PT Indomarco Prismatama | Merchandising Division | Strategic Analyst",
      overview: "An automated reporting system built with Python to streamline daily sales performance reporting for perishable products. The solution replaces repetitive manual Excel processing with an automated pipeline that generates structured reports and distributes them directly to the respective PICs via email.",
      architecture: [
        "Modular pipeline using pandas & openpyxl replicating Excel VLOOKUP & SUMIFS logic",
        "Automated data validation and standardized formatting with freeze panes",
        "Automated distribution through Outlook to designated merchandising PICs",
        "Single terminal command execution processing 11 recurring reports in ~30 seconds"
      ],
      result: "99.3% time saved (~30s runtime vs. 165–220 min manual Excel processing, up to 150× faster)."
    },
    detailedCaseStudy: {
      title: "Python Report Automation — Perishable",
      companyMeta: "PT Indomarco Prismatama | Merchandising Division | Strategic Analyst",
      overview: "An automated reporting system built with Python to streamline daily sales performance reporting for perishable products. The solution replaces repetitive manual Excel processing with an automated pipeline that generates structured reports and distributes them directly to the respective PICs via email.",
      challengeIntro: "Daily sales reporting involved repetitive manual tasks, making the process time-consuming and prone to human error.",
      challenges: [
        {
          title: "Manual Processing",
          description: "Reliance on Excel VLOOKUP and other formulas required approximately 15–20 minutes per report."
        },
        {
          title: "Complex Data Structures",
          description: "Different brands and departments had varying master data and reporting formats, requiring multiple reporting sheets."
        },
        {
          title: "Manual Email Distribution",
          description: "Sending 29 emails daily to merchandising personnel increased processing time and the risk of incorrect recipients."
        },
        {
          title: "Performance Limitations",
          description: "Large datasets took approximately 20 minutes to process per report and could cause laptops to freeze for up to 15 minutes."
        }
      ],
      objectivesIntro: "Develop a centralized Python-based reporting automation system to:",
      objectives: [
        "Eliminate repetitive manual Excel processing.",
        "Standardize reporting structures across brands and departments.",
        "Automate report generation and email distribution.",
        "Improve processing efficiency, accuracy, and scalability."
      ],
      solution: {
        paragraphs: [
          "Developed a modular Python automation pipeline using pandas and openpyxl to handle data extraction, processing, formatting, report generation, and email distribution.",
          "The system replicates existing Excel calculation logic, including VLOOKUP and SUMIFS, while applying automated data validation and standardized formatting. Reports can be generated and distributed through a single terminal command."
        ]
      },
      workflow: [
        {
          step: "01",
          name: "Input",
          description: "Load master data, sales reports, and supporting datasets from different reporting categories."
        },
        {
          step: "02",
          name: "Reader",
          description: "Read and organize source files while preparing the data for processing."
        },
        {
          step: "03",
          name: "Processor",
          description: "Apply reporting logic, including data matching, aggregation, performance calculations, and period detection."
        },
        {
          step: "04",
          name: "Formatter",
          description: "Generate structured Excel reports with standardized layouts, formatting, conditional formatting, and freeze panes."
        },
        {
          step: "05",
          name: "Output",
          description: "Produce reporting files based on the required brand, department, and product category."
        },
        {
          step: "06",
          name: "Emailer",
          description: "Automatically distribute the generated reports through Outlook to the respective PICs."
        }
      ],
      keyFeatures: [
        {
          title: "Multi-Category Reporting",
          description: "Automated reporting by brand, department, Frozen Food-1, and J-Nusantara."
        },
        {
          title: "Structured Excel Output",
          description: "Generates reports containing Rekap, Cabang, Toko, and PLU sheets, with additional details for specific categories."
        },
        {
          title: "Automated Performance Metrics",
          description: "Processes sales performance indicators such as SPD and growth, including category-specific calculations."
        },
        {
          title: "Period Detection",
          description: "Automatically identifies Normal and Closing reporting periods based on the current date."
        },
        {
          title: "Automated Email Distribution",
          description: "Sends completed reports through Outlook to the designated recipients."
        },
        {
          title: "Modular Architecture",
          description: "Separates reading, processing, formatting, and email distribution to simplify maintenance and updates."
        }
      ],
      results: {
        intro: "The automation system successfully processes 11 recurring reports, significantly reducing manual reporting activities.",
        metrics: [
          { value: "11 Reports", label: "Automated reporting outputs processed in a single workflow" },
          { value: "~30 Seconds", label: "Report processing time, as stated in the project presentation" },
          { value: "165–220 Min", label: "Estimated total manual processing time for 11 reports" },
          { value: "Up to 150×", label: "Reported processing speed improvement" },
          { value: "99.3%", label: "Reported reduction in manual reporting time" }
        ],
        summary: "The system also reduces repetitive manual tasks, minimizes the risk of human error in report preparation and email distribution, and provides a more consistent reporting workflow."
      },
      technologyStack: [
        "Python",
        "pandas",
        "openpyxl",
        "Microsoft Excel",
        "Outlook",
        "Claude AI",
        "VS Code",
        "Virtual Environment (venv)"
      ],
      projectScope: {
        domain: "Retail Analytics & Reporting Automation",
        category: "Automation & Reporting",
        environment: "PT Indomarco Prismatama — Merchandising Division"
      }
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
    id: "ecommerce-marketplace",
    slug: "ecommerce-marketplace",
    tags: [
      "HTTP-only",
      "Apify CU Optimized",
      "Multi-domain Targeting",
      "Datacenter / Residential Proxy",
      "No-login Extraction",
      "+1 more"
    ],
    allTags: [
      "HTTP-only",
      "Apify CU Optimized",
      "Multi-domain Targeting",
      "Datacenter / Residential Proxy",
      "No-login Extraction",
      "JSON / CSV / Excel Export"
    ],
    icon: "cart",
    title: "E-Commerce & Resale Marketplace",
    count: "5",
    description: "Product, price, and seller data from online stores and secondhand marketplaces - Shopify, Shopee, Mercari, Vinted, and Subito.it - through HTTP-only engines with multi-country support.",
    details: {
      description: "Product, price, and seller data from online stores and secondhand marketplaces: Shopify stores, Shopee, Mercari, Vinted, and Subito.it. HTTP-only engines with multi-country support and optional proxy routing for high-volume runs.",
      whatGetsScraped: [
        "Full product catalogs (variants, pricing, SKU, stock status, options, images)",
        "Resale listings (price, brand, item condition, photos)",
        "Shop reviews, star ratings, and store performance metrics",
        "Seller profiles and seller ratings",
        "Multi-domain listings (Vinted FR, UK, DE, IT, ES, US, PL, NL)"
      ],
      methodsAndTechniques: [
        "HTTP-only (Apify CU optimized)",
        "No login required (Shopee)",
        "Apify Datacenter / Residential proxy support",
        "Multi-regional domain targeting",
        "Structured, normalized dataset output (JSON / CSV / Excel)"
      ],
      useCases: [
        "Competitive price monitoring",
        "Resale price tracking and arbitrage discovery",
        "Catalog enrichment and dropshipping research",
        "Seller reputation and review mining",
        "Second-hand market sizing"
      ],
      engines: [
        {
          name: "Shopify Product & Catalog Scraper (Fast HTTP API)",
          slug: "shopify-product-scraper",
          description: "High-speed extraction for product variants, pricing, SKU, and live stock."
        },
        {
          name: "Shopee Shop Ratings Scraper",
          slug: "shopee-shop-reviews-scraper",
          description: "Store ratings, buyer reviews, feedback sentiment, and performance metrics."
        },
        {
          name: "Mercari Marketplace & Resale Scraper",
          slug: "mercari-scraper",
          description: "Resale listings, price history, item conditions, and seller profiles."
        },
        {
          name: "Vinted Scraper & Resale Price Extractor",
          slug: "vinted-scraper",
          description: "Multi-country second-hand fashion listings, prices, and seller catalog."
        },
        {
          name: "Subito.it Scraper",
          slug: "subito-scraper",
          description: "Italian classifieds scraper for second-hand items, prices, and seller data."
        }
      ]
    }
  },
  {
    id: "jobs-freelance-talent",
    slug: "jobs-freelance-talent",
    tags: [
      "HTTP-only",
      "SSR Preloaded-State Extraction",
      "Zero Browser Overhead",
      "Residential Proxy Support",
      "No-login Extraction"
    ],
    allTags: [
      "HTTP-only",
      "SSR Preloaded-State Extraction",
      "Zero Browser Overhead",
      "Residential Proxy Support",
      "No-login Extraction"
    ],
    icon: "briefcase",
    title: "Jobs, Freelance & Talent",
    count: "3",
    description: "Job market and freelance demand data from WeWorkRemotely, StepStone (DE, AT, BE), and Upwork - structured vacancies with salary, skills, and client intelligence.",
    details: {
      description: "Job market and freelance demand data from WeWorkRemotely, StepStone (DE, AT, BE), and Upwork. Fast HTTP extraction that returns structured vacancies with salary, skills, and client intelligence.",
      whatGetsScraped: [
        "Job titles, full descriptions, companies, categories, locations",
        "Salaries, budgets, and hourly rates",
        "Required skills and project duration",
        "Remote status and direct application links",
        "Client intelligence (country, feedback, total spent, hires count) and proposal counts (Upwork)"
      ],
      methodsAndTechniques: [
        "HTTP-only, zero browser overhead",
        "SSR preloaded-state extraction (StepStone)",
        "25 vacancies per single HTTP request (StepStone)",
        "Pure HTTP with no proxy and no login (WeWorkRemotely)",
        "Residential proxy support for geo-restricted targets"
      ],
      useCases: [
        "Salary benchmarking and skill-demand analysis",
        "Recruitment lead sourcing",
        "Freelance opportunity monitoring",
        "Remote job board aggregation",
        "Labor market trend research"
      ],
      engines: [
        {
          name: "WeWorkRemotely Jobs Scraper",
          slug: "weworkremotely-scraper",
          description: "Zero-browser remote vacancies with salary and skill tags."
        },
        {
          name: "StepStone Jobs & Talent Intelligence Scraper",
          slug: "stepstone-jobs-scraper",
          description: "SSR preloaded-state job data across DE, AT, and BE."
        },
        {
          name: "Upwork Freelance Jobs & Projects Scraper",
          slug: "upwork-jobs-scraper",
          description: "Freelance gigs, client budgets, spend intelligence, and proposals."
        }
      ]
    }
  },
  {
    id: "prediction-markets-defi-odds",
    slug: "prediction-markets-defi-odds",
    tags: [
      "HTTP-only",
      "Real-time Extraction",
      "Reverse-engineered Endpoints",
      "TVL & Yield Data",
      "Implied Probability",
      "+1 more"
    ],
    allTags: [
      "HTTP-only",
      "Real-time Extraction",
      "Reverse-engineered Endpoints",
      "TVL & Yield Data",
      "Implied Probability",
      "JSON / CSV / Excel Export"
    ],
    icon: "trending-up",
    title: "Prediction Markets, DeFi & Odds",
    count: "3",
    description: "Real-time market and odds data from Polymarket, DeFiLlama, and PrizePicks - built for quant modeling, arbitrage, and DFS analytics.",
    details: {
      description: "Real-time market and odds data from Polymarket, DeFiLlama, and PrizePicks. Built for quant modeling, arbitrage, and DFS analytics.",
      whatGetsScraped: [
        "Live Yes/No odds, implied probabilities, trading volume, liquidity, and event outcomes (Polymarket)",
        "TVL and yield data across DeFi protocols (DeFiLlama)",
        "Player props, lines, projections, and odds types (standard, demon, goblin) across NBA, NFL, MLB, NHL, WNBA, soccer, esports, PGA, tennis, and MMA (PrizePicks)"
      ],
      methodsAndTechniques: [
        "HTTP-only, real-time extraction",
        "Reverse-engineered endpoints (PrizePicks)",
        "Structured output ready for quant pipelines",
        "Export via API, webhooks, JSON / CSV / Excel"
      ],
      useCases: [
        "Prediction-market arbitrage and mispricing detection",
        "Odds modeling and DFS analytics",
        "DeFi yield and TVL monitoring",
        "Cross-platform line comparison",
        "Quant research datasets"
      ],
      engines: [
        {
          name: "Polymarket Prediction Markets - Scraper",
          slug: "polymarket-scraper",
          description: "Live Yes/No event contracts, implied odds, volume, and liquidity."
        },
        {
          name: "DeFiLlama TVL & Yields Scraper",
          slug: "defillama-scraper",
          description: "Real-time TVL, APY yields, and protocol financial telemetry."
        },
        {
          name: "PrizePicks Player Props",
          slug: "prizepicks-player-props",
          description: "Player props, lines, and fantasy projections across 10+ sports."
        }
      ]
    }
  }
];

export const webDevProjects = [
  {
    id: "nitip-platform",
    title: "Nitip — Campus Errand Platform",
    subtitle: "Web Development | Laravel | Project UAS",
    tags: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    icon: "layers",
    description: "A centralized campus errand platform connecting students for food delivery and printing services through structured order management, transparent payments, and real-time coordination.",
    caseStudy: {
      subtitle: "Web Development | Laravel | Project UAS",
      overview: "Nitip is a web-based peer-to-peer campus errand platform designed to simplify everyday student needs through a structured system for ordering food, beverages, and printing services.",
      architecture: [
        "Structured dual-posting system supporting both Offer and Request posts",
        "Transparent flat-fee calculations with direct peer-to-peer payments",
        "WhatsApp deep-link integration paired with a MySQL relational audit trail"
      ],
      result: "Centralized and traceable campus errand workflow eliminating unorganized chat requests."
    },
    detailedCaseStudy: {
      title: "Nitip — Campus Errand Platform",
      companyMeta: "Web Development | Laravel | Project UAS",
      overview: "Nitip is a web-based peer-to-peer campus errand platform designed to simplify everyday student needs through a structured system for ordering food, beverages, and printing services.\n\nThe platform connects students who need assistance (Requesters) with fellow students who are available to fulfill those requests (Fulfillers), creating a more organized, transparent, and flexible campus service ecosystem.",
      challengeIntro: "Traditional student errand services often rely on informal WhatsApp groups, creating several challenges:",
      challenges: [
        {
          title: "Buried Requests",
          description: "Orders are easily overlooked due to the high volume of messages in group chats."
        },
        {
          title: "Limited Visibility",
          description: "Students have difficulty identifying who is available or nearby to fulfill their requests."
        },
        {
          title: "Unstructured Coordination",
          description: "Repeatedly asking for help without clear compensation can create social discomfort."
        },
        {
          title: "Financial Transparency",
          description: "Manual calculations, unclear receipts, and untracked refunds can lead to payment disputes."
        }
      ],
      objectivesIntro: "Develop a centralized web-based platform to:",
      objectives: [
        "Organize student requests and offers in a single system.",
        "Connect students through a structured two-way matching mechanism.",
        "Automate service fee calculations and maintain transparent transaction records.",
        "Provide flexible earning opportunities for students.",
        "Improve coordination and accountability throughout the transaction process."
      ],
      solution: {
        paragraphs: [
          "Designed Nitip, a Laravel-based web platform that centralizes campus errand requests and offers through a dual-posting system.",
          "The platform supports two primary services: food and beverage delivery, as well as printing and photocopying. It integrates structured order management, transparent flat-fee calculations, direct peer-to-peer payments, document uploads, and transaction tracking.",
          "The system combines WhatsApp deep-link communication for real-time coordination with a MySQL-based audit trail for formal transaction records."
        ]
      },
      workflow: [
        {
          step: "01",
          name: "Post & Match",
          description: "Students create an Offer or Request post. Available students can browse, select, or claim orders based on their location, route, and availability."
        },
        {
          step: "02",
          name: "Pay & Verify",
          description: "The Requester transfers the estimated payment and service fee directly to the Fulfiller, then uploads proof of payment. The Fulfiller verifies the payment before proceeding."
        },
        {
          step: "03",
          name: "In Progress",
          description: "The Fulfiller purchases the requested food or completes the printing service based on the order specifications."
        },
        {
          step: "04",
          name: "Delivering",
          description: "The completed order is delivered to the agreed handover location, with communication facilitated through WhatsApp when necessary."
        },
        {
          step: "05",
          name: "Completed",
          description: "The Fulfiller hands over the order and physical receipt. Any remaining change is settled, and the Requester confirms receipt through the platform."
        }
      ],
      keyFeatures: [
        {
          title: "Dual-Posting System",
          description: "Supports both Offer and Request posts, allowing students to initiate transactions based on their availability or needs."
        },
        {
          title: "Multi-Service Support",
          description: "Facilitates food and beverage delivery, as well as printing and photocopying services."
        },
        {
          title: "Transparent Flat-Fee System",
          description: "Provides predefined service fees based on service categories, with clear separation between service charges and actual purchase costs."
        },
        {
          title: "Campus Identity Verification",
          description: "Uses official university email addresses and Student Identification Numbers (NIM) to support a campus-based user ecosystem."
        },
        {
          title: "Direct Peer-to-Peer Payment",
          description: "Enables payments through personal bank accounts, e-wallets, or QRIS without an internal wallet or payment holding system."
        },
        {
          title: "Transaction Tracking",
          description: "Records order details, payment proofs, receipts, and transaction statuses for accountability."
        },
        {
          title: "WhatsApp Integration",
          description: "Provides direct communication through WhatsApp deep links with pre-filled order information."
        },
        {
          title: "Document Upload",
          description: "Allows students to upload digital files for printing services and payment evidence for transaction verification."
        }
      ],
      systemArchitecture: {
        intro: "The platform is structured around a Laravel-based application and a MySQL relational database.",
        components: [
          {
            title: "User Management",
            description: "Stores student profiles, verified identities, contact details, and payment information."
          },
          {
            title: "Offer & Request Management",
            description: "Manages service categories, descriptions, locations, quotas, expiration times, and posting statuses."
          },
          {
            title: "Order Management",
            description: "Maintains order details, requester and fulfiller relationships, estimated prices, delivery fees, and transaction statuses."
          },
          {
            title: "Evidence Management",
            description: "Stores references to uploaded payment proofs, printing documents, receipts, and refund evidence."
          },
          {
            title: "Transaction Lifecycle",
            description: "Tracks each order from payment initiation through fulfillment, delivery, completion, or cancellation."
          }
        ]
      },
      results: {
        title: "Results & Expected Impact",
        intro: "Nitip is designed to address inefficiencies in informal campus-based errand services by introducing a centralized and traceable transaction workflow.",
        points: [
          {
            title: "Structured Coordination",
            description: "Organizes requests and offers in a centralized platform rather than relying on fast-moving group chats."
          },
          {
            title: "Financial Transparency",
            description: "Establishes clear service fees, payment verification, and receipt documentation."
          },
          {
            title: "Flexible Student Opportunities",
            description: "Creates opportunities for students to earn additional income by fulfilling orders along their existing routes."
          },
          {
            title: "Improved Convenience",
            description: "Helps students save time when attending classes, conducting laboratory activities, or moving between campus buildings."
          },
          {
            title: "Transaction Accountability",
            description: "Maintains a digital record of orders, payments, receipts, and transaction status."
          }
        ],
        summary: "These are the intended benefits of the system design; no measured user adoption or quantified operational impact is specified in the project documents."
      },
      technologyStack: [
        "Laravel",
        "PHP",
        "MySQL",
        "WhatsApp Deep-Link",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      projectScope: {
        domain: "Campus Information Systems",
        category: "Web Development & Information Systems",
        platform: "Web Application",
        architecture: "Laravel & MySQL",
        projectType: "Project UAS"
      }
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
    duration: "4 years",
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
        isCurrent: false,
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
        period: "Oct 2022 – May 2024",
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
    id: "cert-dicoding",
    badge: "DICODING",
    title: "Belajar Dasar Pemrograman Web",
    description: "Foundational web development certification covering semantic HTML5, modern responsive CSS layout architecture, and DOM manipulation standards.",
    certTitle: "SERTIFIKAT KELULUSAN",
    certId: "N9ZONW8KYXG5",
    awarded: "ISSUED: 26 JULI 2026",
    link: "https://www.dicoding.com/certificates/N9ZONW8KYXG5",
    image: "/images/dicoding-web-dasar.png",
    imageFit: "cover",
    imagePosition: "center 15%",
    icon: "code"
  },
  {
    id: "data-ibm",
    badge: "IBM",
    title: "Getting Started with Data",
    description: "Foundational certification covering core data concepts, big data ecosystems, data analytics methodologies, and visualization tools.",
    certTitle: "IBM SKILLSBUILD BADGE",
    certId: "CREDLY VERIFIED",
    awarded: "ISSUED: 2024",
    link: "https://www.credly.com/badges/b36278f6-eb7b-4855-b84c-029f8e39900d",
    image: "/images/ibm-data-cert.png",
    imageFit: "cover",
    imagePosition: "center 0%",
    certIdPosition: "right",
    icon: "chart"
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
  mode: "Hybrid",
  faculty: "Faculty of Artificial Intelligence and Data Science",
  degree: "Bachelor of Information Systems",
  type: "Undergraduate Degree",
  gpa: "3.78 / 4.00",
  location: "Lippo Karawaci, Tangerang, Indonesia",
  focus: "Enterprise Information Systems & Data Innovation, Applied Analytics, Pipeline Engineering",
  overview: "**Universitas Pelita Harapan (UPH)** is a private university in Indonesia with a multidisciplinary academic environment spanning technology, business, and various fields of study.",
  highlights: [
    "Focused on the intersection of information systems, data, technology, and business processes, with academic exposure to database management, systems analysis and design, programming, data analytics, enterprise systems, and digital transformation.",
    "Developed practical understanding of how technology and data can be structured into scalable business solutions, with particular interest in data-driven decision making, process automation, business intelligence, and enterprise information systems."
  ]
};
