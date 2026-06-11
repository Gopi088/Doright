# DoRight NGO Platform

A modern, fully responsive NGO fundraising and verification platform built with React, TypeScript, React Router, and Framer Motion.

---

## Features

* Responsive Landing Page
* NGO Verification Workflow
* NGO Certification Plans
* Partner Showcase
* Campaign Promotion
* Donor Engagement Features
* Modular Component Architecture
* Centralized Content Management
* Reusable UI Components

---

## Tech Stack

### Frontend

* React
* TypeScript
* React Router DOM
* Framer Motion

### Styling

* CSS
* Custom Design System
* Responsive Layouts

---

## Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── DoRightLogo.tsx
│   └── ui/
│
├── sections/
│   ├── HeroSection.tsx
│   ├── TrustedSection.tsx
│   ├── PlatformFeatures.tsx
│   ├── HowItWorks.tsx
│   ├── NGOPartners.tsx
│   ├── GetCertified.tsx
│   ├── GetFeatured.tsx
│   └── JoinNetwork.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── NGOs.tsx
│   ├── Campaigns.tsx
│   └── Blog.tsx
│
├── styles/
├── data/
├── App.tsx
└── index.tsx
```

---

## Prerequisites

Install:

* Node.js 18+
* npm 9+

Verify:

```bash
node -v
npm -v
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Gopi088/Doright.git
cd Doright
```

Install dependencies:

```bash
npm install --legacy-peer-deps
```

If you encounter the AJV dependency error:

```bash
Cannot find module 'ajv/dist/compile/codegen'
```

run:

```bash
npm install ajv@8 ajv-keywords@5 --legacy-peer-deps
```

---

## Run Development Server

```bash
npm start
```

Application will be available at:

```text
http://localhost:3000
```

If port 3000 is already occupied, React will automatically suggest another port.

---

## Production Build

Create optimized build:

```bash
npm run build
```

Build output:

```text
build/
```

---

## Assets

All images are stored inside:

```text
public/images/
```

Example:

```text
public/images/Logo.svg
public/images/DoRightLogo.svg
public/images/ngo.avif
```

Usage:

```tsx
<img src="/images/Logo.svg" alt="DoRight" />
```

---

## Customization

Most content can be updated from:

```text
src/data/siteContent.ts
```

This allows changing:

* Hero Section
* Features
* CTA Buttons
* Footer Content
* NGO Information

without touching component logic.

---

## Responsive Design

Supported devices:

* Mobile (320px+)
* Tablet (768px+)
* Laptop (1024px+)
* Desktop (1440px+)

---

## Common Fixes

### Fresh Install

```bash
rm -rf node_modules
rm package-lock.json

npm install --legacy-peer-deps

npm install ajv@8 ajv-keywords@5 --legacy-peer-deps
```

### Start Project

```bash
npm start
```

---

## Author

Gopi Gedar

Project: DoRight NGO Platform

Repository:

https://github.com/Gopi088/Doright
