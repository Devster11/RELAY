# RELAY

<div align="center">
  <img src="https://raw.githubusercontent.com/Devster11/RELAY/main/client/public/logo.png" alt="RELAY Logo" width="220" />
  <h3>Modern Ticketing & Helpdesk Platform</h3>
  <p>
    <strong>RELAY</strong> is a sleek, workflow-focused support and operations platform designed to help teams manage tickets, collaborate faster, and resolve issues with clarity.
  </p>
</div>

<p align="center">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img alt="Express" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img alt="Supabase" src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</p>

## Overview

RELAY is a modern helpdesk and ticketing system built for customer support, internal operations, and team coordination. It gives businesses a structured way to manage incoming issues, assign ownership, track status, and maintain a knowledge-first support workflow.

The platform combines an elegant React frontend with a secure Express backend and Supabase-powered data layer, enabling a clean experience for both agents and end users.

## Why RELAY

- Built for fast team collaboration
- Clean, glassmorphism-inspired dashboard experience
- Real-time ticket lifecycle tracking
- Support for org-based access and invites
- Scalable architecture that can grow with your support workflow

## Key Features

- Ticket creation, assignment, prioritization, and updates
- Dashboard analytics for ticket trends and operational health
- Team onboarding with org setup and invite workflow
- Knowledge base support for reusable guidance and answer library
- Authentication and authorization flow for role-based access
- Responsive interface for desktop and mobile-friendly usage
- Dark-mode-first interface with smooth UI motions and polished UX

## Architecture

```text
┌─────────────────────────────┐
│        React + Vite         │
│    Frontend Application     │
│   (Dashboard, Tickets, Auth) │
└──────────────┬──────────────┘
               │ HTTPS / REST API
               ▼
┌─────────────────────────────┐
│   Express.js + Node.js      │
│   REST API Layer            │
│   Auth, Tickets, Orgs       │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       Supabase / SQL        │
│ Data Storage + Auth Layer   │
└─────────────────────────────┘
```

## Tech Stack

### Frontend
- React 19
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide React

### Backend
- Node.js
- Express.js
- JWT-based auth
- Supabase JS SDK
- CORS + dotenv + Morgan

### Data & Services
- Supabase
- PostgreSQL-backed data models
- Role-based access controls
- Invite-based team workflow

## Repository Structure

```text
RELAY/
├── client/                     # React frontend app
│   ├── public/                # Static assets and branding
│   ├── src/
│   │   ├── components/        # Reusable UI and dashboard blocks
│   │   ├── contexts/          # Auth and toast state
│   │   ├── layouts/           # App layouts
│   │   ├── pages/             # Route-based screens
│   │   ├── routes/            # Routing configuration
│   │   ├── services/          # API integrations
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
├── server/                    # Express backend API
│   ├── src/
│   │   ├── controllers/       # Request handlers
│   │   ├── middleware/        # Auth and org validation
│   │   ├── routes/            # API endpoints
│   │   ├── services/          # Business logic
│   │   ├── config/            # DB and Supabase config
│   │   ├── db/                # Database migrations
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── ...
├── docs/                      # Project reports and documentation
├── README.md
├── V1_RELEASE_NOTES.md
└── .gitignore
```

## Prerequisites

Before running RELAY locally, ensure you have:

- Node.js 18+
- npm or yarn
- A Supabase project (for database + auth integration)
- Basic understanding of environment variables

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/Devster11/RELAY.git
cd RELAY
```

### 2. Install dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd ../server
npm install
```

### 3. Configure environment variables

Create a `.env` file in the `server` directory:

```env
PORT=5000
FRONTEND_URL=http://localhost:5173
JWT_SECRET=your_super_secret_key
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

Create a `.env` file in the `client` directory if needed:

```env
VITE_BACKEND_URL=http://localhost:5000
```

### 4. Run the app

#### Start backend

```bash
cd server
npm run dev
```

#### Start frontend

```bash
cd client
npm run dev
```

The app should be available at:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## Core Modules

### Authentication
RELAY includes login, registration, protected routes, and permission-based access control.

### Ticket Management
Agents can create support tickets, assign ownership, update statuses, and manage related messages.

### Organization Management
Provision team structure, invite-based onboarding, and role-based organizational access.

### Knowledge Base
Support workflows can leverage reusable knowledge content for quicker resolution and better consistency.

## Scripts

### Client

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

### Server

```bash
npm run dev
npm run start
```

## Deployment

This repo is structured for a modern deployment setup:

- Frontend: deployable to Vercel
- Backend: deployable to Render, Railway, or any Node-compatible platform
- Database: Supabase-powered persistence layer

## Contributing

Contributions are welcome. If you would like to improve RELAY, feel free to:

1. Fork the repo
2. Create a feature branch
3. Commit your changes
4. Open a pull request

## License

This project is currently unlicensed unless otherwise specified by the repository owner.

---

<div align="center">
  <sub>Built with love by kresh and pradeep</sub>
</div>
