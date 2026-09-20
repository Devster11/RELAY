<div align="center">
  <br />
    <img src="client/public/logo.png" alt="Relay Logo" width="200" />
  <br />

  # RELAY 
  **Modern, Blazing Fast Ticketing & Helpdesk System**

  <p align="center">
    A premium, frosted-glass themed helpdesk platform built for modern teams.
  </p>

  <p align="center">
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#quick-start">Quick Start</a> •
    <a href="#environment-variables">Environment Variables</a>
  </p>
</div>

---

## ⚡ Features

- **Premium UI/UX:** iOS-style frosted glassmorphism (`backdrop-filter`) navigation, dark mode by default, and buttery smooth animations using Framer Motion.
- **Analytics Dashboard:** Real-time visual metrics for ticket trends, ticket distributions, and queue health using Recharts.
- **Ticket Management:** Create, assign, update, and resolve tickets instantly. 
- **Organization & Team Management:** Secure invite-based team collaboration with robust RBAC (Role-Based Access Control).
- **Fully Responsive:** Adaptive layouts featuring a desktop sidebar and a sleek mobile bottom navigation bar.

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

### Backend
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/kresh11i/RELAY.git
cd RELAY
```

### 2. Install Dependencies

**Backend:**
```bash
cd server
npm install
```

**Frontend:**
```bash
cd client
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in both the `server` and `client` directories. *(See [Environment Variables](#environment-variables) below)*

### 4. Run the Development Servers

**Run Backend:**
```bash
cd server
npm run dev
```

**Run Frontend:**
```bash
cd client
npm run dev
```
The application will be available at `http://localhost:5173`.

---

## 🔐 Environment Variables

### `server/.env`
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
FRONTEND_URL=http://localhost:5173
```

### `client/.env`
```env
VITE_BACKEND_URL=http://localhost:5000
```

---

## 📂 Project Structure

```text
RELAY/
├── client/                 # Frontend React Application
│   ├── src/
│   │   ├── components/     # Reusable UI components & charts
│   │   ├── contexts/       # React Context (Auth, Toast)
│   │   ├── layouts/        # Dashboard layout wrapping
│   │   ├── pages/          # Full page views
│   │   └── services/       # API integration
│   └── index.html
├── server/                 # Backend Node.js API
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Auth and validation guards
│   │   ├── models/         # Mongoose schemas
│   │   ├── routes/         # Express routes
│   │   └── services/       # Business logic
│   └── app.js              # Express app setup
└── README.md
```

<div align="center">
  <sub>Built with ❤️ by kreshhhh and pradeepppp</sub>
</div>
