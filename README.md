# Willy Lengkong — Portfolio

A modern, high-performance portfolio website showcasing enterprise retail data analytics, automated Python ETL pipelines, specialized data scraping engines, and full-stack web applications.

Built with an atmospheric, cyberpunk-architectural dark theme, rich micro-interactions, decrypted terminal typography, and comprehensive case study modals.

---

## ✨ Key Features

- **Decrypted Tumbler Subtitle**: Cinematic matrix-style decipher animation cycling across core expertise areas.
- **Interactive Cyber Spotlight**: Dynamic cursor tracking glow responding across responsive glassmorphic cards.
- **Enterprise Automation & Reporting Showcase**: Production metrics, runtime benchmarks (~30s vs 220m), and comprehensive architecture breakdowns.
- **Specialized Scraping Engines**: Real-time extraction pipelines with direct Apify profile and actor integrations.
- **Web Development Project Showcase**: Peer-to-peer campus platform case study with structured workflow, system architecture, and tech stack breakdowns.
- **Interactive Experience Timeline**: 4-year Indomaret Group career progression with dual-ring concentric spinning indicators and achievements.
- **Verified Credentials & Honors**: Credly verified IBM Data badges and Dicoding Web Development accreditation.
- **UPH Academic Journey**: Bachelor of Information Systems academic focus and applied data science curriculum.
- **Functional Contact Form**: Direct message delivery powered by Web3Forms with client-side status handling.

---

## 🚀 Tech Stack

- **Frontend Core**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **UI & Layout**: [Material UI (MUI v9)](https://mui.com/) + Custom Cyber-Architectural CSS
- **Motion & Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Feather, Lucide, Tabler)
- **Forms & Integration**: [Web3Forms](https://web3forms.com/)
- **Linting & Code Quality**: [Oxlint](https://oxc.rs/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```
willylengkong/
├── index.html                   # SEO tags, Google Fonts, and favicon
├── vercel.json                  # Vercel SPA rewrite rules
├── package.json                 # Dependencies & build scripts
├── vite.config.js               # Vite bundler configuration
├── .oxlintrc.json               # Fast linter configuration
├── .env.example                 # Environment variables template
├── public/
│   └── images/                  # Badges, certificate scans, logos & assets
└── src/
    ├── main.jsx                 # Application entry point
    ├── App.jsx                  # Main component composition
    ├── index.css                # Global cyber-architectural CSS, grid & keyframes
    ├── theme/
    │   └── theme.js             # MUI dark theme tokens
    ├── data/
    │   └── portfolioData.js     # Centralized portfolio data & case studies
    └── components/
        ├── Navbar.jsx           # Glassmorphic navbar with mobile menu
        ├── BrandLogo.jsx        # Monogram brand mark
        ├── SpotlightEffect.jsx  # Interactive mouse follower spotlight
        ├── Hero.jsx             # Skyline typography & CTA buttons
        ├── TumblerSubtitle.jsx  # Decryption subtitle ticker
        ├── Projects.jsx         # Automation, scraping & web dev cards
        ├── CaseStudyModal.jsx   # Architectural case study dialog modal
        ├── About.jsx            # Profile card & categorized skill pills
        ├── Experience.jsx       # Indomaret career timeline & strategic roles
        ├── Achievements.jsx     # Honors, certifications & verified badges
        ├── Education.jsx        # UPH Information Systems degree card
        ├── Contact.jsx          # Interactive contact form
        └── Footer.jsx           # Navigation links, copyright & back-to-top
```

---

## 🛠️ Getting Started Locally

### 1. Clone & Install Dependencies
```bash
git clone <repository-url>
cd willylengkong
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` and provide your Web3Forms access key:
```bash
cp .env.example .env
```

Edit `.env`:
```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```
*(Get a free access key at [web3forms.com](https://web3forms.com))*

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```

### 5. Run Linter
```bash
npm run lint
```

---

## 📤 Pushing to GitHub

If you haven't linked a remote GitHub repository yet, follow these steps:

### 1. Create a New Repository on GitHub
Go to [github.com/new](https://github.com/new) and create a repository (e.g. `willylengkong-portfolio`). Do **not** initialize with README or license.

### 2. Connect Remote & Push
```bash
# Add the remote repository
git remote add origin https://github.com/<your-username>/<repo-name>.git

# Verify remote
git remote -v

# Stage all files
git add .

# Commit changes
git commit -m "feat: complete portfolio website with automation, scraping, and web dev projects"

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🌐 Deploy to Vercel

### Option 1: GitHub Automatic Deployment (Recommended)
1. Push this project to your GitHub repository.
2. Log in to [Vercel Dashboard](https://vercel.com).
3. Click **Add New** > **Project** and select your GitHub repository.
4. Add Environment Variable:
   - Name: `VITE_WEB3FORMS_ACCESS_KEY`
   - Value: `your_key_here`
5. Click **Deploy**. Vercel will automatically build using `npm run build` and route through `dist/`.

### Option 2: Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 📄 License

Private personal portfolio repository. All rights reserved.
