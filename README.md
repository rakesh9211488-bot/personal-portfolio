# Rakesh Siripaka — Personal Portfolio

A responsive, editorial-style personal portfolio. This is a **working source project**, not yet published to GitHub or deployed.

## Features

- Home, About, Projects, Expertise, Contact, and two dedicated case-study pages
- Recruiter / business perspective switcher
- Accessible quick navigation via Ctrl/⌘ + K
- Filterable featured projects and interactive architecture explorers
- Responsive layouts, reduced-motion support, semantic navigation
- Weekly GitHub public-repository metadata synchronization via a reviewable pull request
- No database, analytics, paid API, contact-form service or subscription required

## Local development

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Visit the URL shown by Vite. Production build:

```bash
npm run build
npm run preview
```

## Free deployment (Cloudflare Pages)

1. Create a new **public** GitHub repository (e.g. `personal-portfolio`) and push this folder.
2. In Cloudflare Pages, choose **Connect to Git** and authorize the repository.
3. Select Vite framework, `npm run build` as the build command, and `dist` as the output directory.
4. Add a SPA fallback: Cloudflare Pages ordinarily serves `/index.html` for unknown paths when no root `404.html` is present. Test direct navigation to `/projects/careerorbit` after deployment.
5. Use the free `*.pages.dev` subdomain. A custom domain is optional and may cost money.

Cloudflare and GitHub free-tier quotas and policies may change; check their current terms. The site itself needs no paid API.

## Project publishing policy

- `data/projects.json` is the **curated** source of published case studies.
- `data/github-metadata.json` is routine public repository metadata. It is not published as new case studies automatically.
- `npm run sync` fetches public repository names, descriptions, languages, URLs and update dates from two accounts.
- `.github/workflows/sync-projects.yml` runs weekly and opens a pull request for review. Merge to accept routine updates.
- To feature a new project, add a verified entry to `data/projects.json`, review its claims and commit.
- No private repositories are collected by the script.

## Content and privacy checks before launch

- Verify all experience and education details, project claims, and public contact information.
- Review the chosen portrait rights and all project screenshots for sensitive data before adding them.
- A one-page public CV is bundled at `assets/Rakesh_Siripaka_Public_CV.pdf`; review it before public release.
- Assess German legal notice (`Impressum`) and privacy disclosure requirements before launching publicly.
- This is not evidence of production deployment of CareerOrbit or a working live IoT system.

## Accessibility / SEO

The project includes semantic HTML, skip link, keyboard focus states, reduced-motion handling, mobile navigation and basic Open Graph metadata. Audit contrast, keyboard flows, page titles and sharing previews before public launch.

## Added verified screenshots (October 2026)

- `assets/careerorbit-dashboard.webp` — local dashboard screenshot (browser chrome cropped).
- `assets/careerorbit-workflow.webp` — configured n8n job-matching workflow screenshot (cropped to the nodes).
- `assets/careerorbit-schema.webp` — partial Supabase schema screenshot; do not publish any secrets or real user data.
- `assets/techfarming-workspace.webp` — local TechFarming workspace screenshot (browser chrome cropped, account email redacted).
- Featured project cards now show real images, and project case studies include a screenshot gallery.
- Source screenshots are not bundled. Recheck image privacy before sharing publicly.

## Remaining launch checklist

1. Install Node.js 22.12+ and run `npm install`, `npm run build`, `npm run preview` locally.
2. Test every route, gallery image, navigation, mobile layout and keyboard access.
3. Review public project claims, screenshot redactions and downloadable CV.
4. Create an independent public GitHub repository and push this project (do not commit credentials).
5. Under repository Settings → Actions → General, enable the permission to create pull requests if necessary. Trigger `Sync public GitHub metadata` manually once and review its PR.
6. Deploy using Cloudflare Pages: framework Vite, build command `npm run build`, output `dist`.
7. Test direct case-study URLs, SEO/social sharing, privacy and German legal-notice obligations before public promotion.

The screenshots are not evidence that CareerOrbit is publicly deployed or that physical TechFarming sensors are connected.

## Public CV
A one-page public CV was generated from the provided CV content, with the user-confirmed Accel IT dates **May 2024–May 2025**, **Currently Pursuing** for the master's degree, and no phone number, street address or availability status. Review it before publishing.
