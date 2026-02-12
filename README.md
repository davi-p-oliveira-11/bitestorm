# BiteStorm

**BiteStorm** is a full-stack food ordering platform built to simulate a real-world multi-restaurant system.  
The project focuses on scalable backend architecture, authentication flows, and clean separation of concerns using TypeScript across the stack.

Designed as a production-oriented MVP, it demonstrates end-to-end functionality from user authentication to restaurant administration and order processing.

🔗 **Live Application:** https://your-live-link.com  
📦 **Repository:** https://github.com/your-username/bitestorm  

---

## 🚀 Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge" />
  <img src="https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge" />
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens" />
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge" />
</p>

---

## ✨ Core Features

### 🔐 Authentication & Authorization
- JWT-based authentication
- Secure password hashing
- Protected backend routes via middleware
- Role-based access control (Admin / User)

### 🍽 Restaurant & Menu Management
- Admin restaurant creation and management
- Menu item CRUD operations
- Image upload integration (Cloudinary)
- Structured MongoDB schema modeling with Mongoose

### 🛒 Cart & Orders
- Persistent cart system
- Order placement and validation
- User-specific order history
- Server-side business logic enforcement

### ⚙️ Architecture & Engineering
- TypeScript across frontend and backend
- Modular backend structure (controllers / routes / services)
- RESTful API design principles
- Environment-based configuration
- Clean client-server separation

---

```
## 🧠 Project Structure

bitestorm
├── .git
├── README.md
├── client
│   ├── .env
│   ├── .gitignore
│   ├── README.md
│   ├── components.json
│   ├── eslint.config.js
│   ├── index.html
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   └── vite.svg
│   ├── src
│   │   ├── AppRoutes.tsx
│   │   ├── api
│   │   │   └── MyUserApi.tsx
│   │   ├── assets
│   │   │   ├── appDownload.png
│   │   │   ├── heroimg.png
│   │   │   ├── landing.png
│   │   │   └── react.svg
│   │   ├── auth
│   │   │   ├── Auth0ProviderWithNavigate.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   ├── components
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── LoadingButton.tsx
│   │   │   ├── MainNav.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   ├── MobileNavLinks.tsx
│   │   │   ├── UsenameMenu.tsx
│   │   │   └── ui
│   │   │       ├── button.tsx
│   │   │       ├── dropdown-menu.tsx
│   │   │       ├── form.tsx
│   │   │       ├── input.tsx
│   │   │       ├── label.tsx
│   │   │       ├── separator.tsx
│   │   │       ├── sheet.tsx
│   │   │       └── sonner.tsx
│   │   ├── forms
│   │   │   └── user-profile-form
│   │   │       └── UserProfileForm.tsx
│   │   ├── index.css
│   │   ├── layouts
│   │   │   └── layout.tsx
│   │   ├── lib
│   │   │   └── utils.ts
│   │   ├── main.tsx
│   │   ├── pages
│   │   │   ├── AuthCallBackPage.tsx
│   │   │   ├── Homepage.tsx
│   │   │   └── UserProfilePage.tsx
│   │   └── types.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
└── server
    ├── .env
    ├── .gitignore
    ├── dist
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── controllers
    │   │   └── MyUserController.ts
    │   ├── index.ts
    │   ├── middleware
    │   │   ├── auth.ts
    │   │   └── validation.ts
    │   ├── models
    │   │   └── user.ts
    │   └── routes
    │       └── MyUserRoute.ts
    └── tsconfig.json
```


Frontend and backend communicate exclusively through a structured REST API.

---

## 🔐 Authentication Flow

1. User registers or logs in  
2. Backend validates credentials  
3. JWT token is issued  
4. Token is sent with protected requests  
5. Middleware verifies token and role before granting access  

Authorization logic is enforced server-side to prevent privilege escalation.

---

## 🗄️ Database Design

- MongoDB database
- Schema modeling using Mongoose
- Defined relationships between:
  - Users
  - Restaurants
  - Menu Items
  - Orders
- Indexed fields for optimized queries
- Clear separation between data models and business logic

---

## 🌍 Deployment

The application is publicly deployed and accessible online.

- Frontend: (e.g. Vercel)
- Backend: (e.g. Render / AWS / Railway)
- Database: MongoDB Atlas

Environment variables are configured for secure production usage.

---

## 🧪 Current Status

BiteStorm represents a **working production-style MVP**:

- Authentication flow complete
- Restaurant & menu management functional
- Ordering system operational
- Public deployment live
- Actively evolving with new features and architectural improvements

---

## 🛣️ Roadmap

Planned improvements include:

- Payment gateway integration
- Order status lifecycle (processing, delivered, etc.)
- Input validation layer (Zod or Joi)
- Automated tests (unit & integration)
- Docker containerization
- CI/CD pipeline
- Performance optimizations & caching

---

## 📦 Running Locally

```bash
git clone https://github.com/davi-p-oliveira-11/bitestorm
cd bitestorm

# Install backend
cd server
npm install

# Install frontend
cd ../client
npm install

# Run backend
cd ../server
npm run dev

# Run frontend
cd ../client
npm run dev
