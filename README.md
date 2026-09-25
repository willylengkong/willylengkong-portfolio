# Willy — Data Analyst Portfolio Website

A single-page portfolio website showcasing enterprise retail data analytics, automated ETL pipelines, and interactive BI dashboards.

## 🚀 Tech Stack

* **React 19 + Vite** — High-performance frontend framework and tooling
* **JavaScript (ES Modules)** — Clean, modern component logic
* **Material UI (MUI v9)** — ThemeProvider, responsive surfaces, and dialog overlays
* **Framer Motion** — Smooth page transitions, enter animations, and layout morphing
* **React Icons** — Feather icons set
* **Custom Cyber-Architectural CSS** — Atmospheric ambient lighting, masked skyscraper typography, cursor spotlight tracking, and grid backdrop
* **Git & GitHub** — Version control
* **Vercel** — Production deployment configuration (`vercel.json`)

---

## 📂 Project Structure

```
d:/project/willylengkong/
├── index.html                   # SEO tags, Google Fonts, and favicon
├── vercel.json                  # Vercel SPA routing rules
├── package.json                 # Dependencies & scripts
├── vite.config.js               # Vite bundler configuration
├── stitch-source/               # Downloaded Stitch assets & source screen
│   ├── stitch_screen.png        # Original screenshot from Stitch project
│   └── stitch_screen.html       # Original HTML reference
└── src/
    ├── main.jsx                 # Application entry point
    ├── App.jsx                  # Main component composition
    ├── index.css                # Atmospheric radial glows, grid & keyframes
    ├── theme/
    │   └── theme.js             # MUI dark theme configuration
    ├── data/
    │   └── portfolioData.js     # Structured portfolio information
    └── components/
        ├── SpotlightEffect.jsx  # Interactive mouse follower spotlight
        ├── AudioToggle.jsx      # Bottom-right ambient audio toggle
        ├── Navbar.jsx           # Sticky glassmorphic navbar & mobile menu
        ├── Hero.jsx             # Architectural skyline typography & socials
        ├── Projects.jsx         # Featured projects, stat counters & sub-projects
        ├── CaseStudyModal.jsx   # Architectural case study dialog modal
        ├── About.jsx            # Profile card & categorized skill pills
        ├── Experience.jsx       # Indomaret timeline & strategic analyst roles
        ├── Achievements.jsx     # Honors & merit certificates grid
        ├── Education.jsx        # UPH Information Systems degree card
        ├── Contact.jsx          # Interactive contact form & contact details
        └── Footer.jsx           # Navigation, copyright & back-to-top
```

---

## 🛠️ Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push this repository to GitHub.
2. In [Vercel Dashboard](https://vercel.com), click **Add New Project** and import the GitHub repository.
3. Vercel automatically detects Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.
