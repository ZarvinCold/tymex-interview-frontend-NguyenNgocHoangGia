# TymeX Marketplace

A full-stack web application for NFT marketplace, featuring a React + Vite frontend and a FastAPI backend. This project is designed for rapid development, modern UI/UX. 

#### https://tymex-marketplace-fe-nnhg.onrender.com/

---

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Environment Variables](#environment-variables)
- [Usage](#usage)

---

## Features
- **Frontend:** React 18, Vite, TypeScript, modern component structure, HMR, ESLint, Prettier
- **Backend:** FastAPI, Python 3, RESTful API, mock data
- **Proxy/API Routing:** Vite dev server proxies `/api` to backend
- **Deployment:** Render
- **Testing:** Cypress, Jest

---

## Project Structure
```
├── mock_server/           # FastAPI backend
│   ├── api/               # API endpoints (categories, filters, products)
│   ├── data/              # Mock database and models
│   ├── main.py            # FastAPI app entrypoint
│   ├── requirements.txt   # Python dependencies
│   ├── fly.toml           # Render/Deploy config
│   └── render.yaml        # Render deploy config
├── src/                   # React frontend source
│   ├── assets/            # Images, SVGs, static assets
│   ├── components/        # Reusable UI components
│   ├── context/           # React context providers
│   ├── pages/             # Page-level components
│   ├── services/          # API clients, business logic
│   ├── store/             # State management
│   ├── tests/             # Frontend tests
│   ├── types/             # TypeScript types
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── public/                # Static public assets
├── index.html             # HTML template
├── vite.config.ts         # Vite config (with aliases, proxy)
├── netlify.toml           # Netlify deployment config
├── package.json           # Frontend dependencies/scripts
├── tsconfig.json          # TypeScript config
├── .env                   # Environment variables
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

---

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm (v8+ recommended)
- Python 3.8+

### 1. Clone the Repository
```bash
git clone https://github.com/ZarvinCold/tymex-interview-frontend-NguyenNgocHoangGia.git
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd mock_server
pip3 install -r requirements.txt
```

---

## Development Workflow

### Start Backend (FastAPI)
```bash
cd mock_server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```
- API will be available at `http://localhost:8000`

### Start Frontend (Vite + React)
```bash
cd ..
npm run dev
```
- App will be available at `http://localhost:5173` (default)
- API requests to `/api` are proxied to backend (see `vite.config.ts`)

---

## Usage
https://tymex-marketplace-fe-nnhg.onrender.com/

---

### Code Style
- Use Prettier and ESLint (see `.prettierrc`, `eslint.config.js`)
- TypeScript for all frontend code

