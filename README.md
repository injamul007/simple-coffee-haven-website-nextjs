# ☕ Simple Coffee Haven - Next.js E-Commerce Application

A modern, responsive e-commerce web application for the "Coffee Heaven" brand, built with Next.js 16 and React 19. This application delivers a seamless user experience for browsing and managing coffee products with a professional interface and intuitive navigation.

---

## 📋 Project Overview

**Simple Coffee Heaven** is a frontend-focused e-commerce platform that showcases coffee products and services. The application features modern web design principles, responsive layouts, and interactive components built with cutting-edge technologies.

### Key Features

- 🛍️ Product browsing and management
- 🔐 User authentication system
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js optimization
- 🎨 Modern UI with Tailwind CSS
- 📦 Modular component architecture

---

## 📁 Project Structure

### Root Configuration Files

```
├── eslint.config.js          # ESLint configuration for code quality
├── middleware.js              # Next.js middleware for request handling
├── next.config.js            # Next.js configuration and optimization
├── package.json              # Dependencies and project metadata
├── postcss.config.js         # PostCSS configuration for CSS processing
├── tailwind.config.js        # Tailwind CSS theme and configuration
└── README.md                 # Project documentation
```

### 📂 `/app` - Application Pages & Routing

The app directory contains all page components using Next.js 16 App Router.

```
app/
├── globals.css               # Global CSS styles
├── layout.jsx                # Root layout component (shared across all pages)
├── page.jsx                  # Home page (landing page)
├── login/
│   └── page.jsx              # User login page
├── add-item/
│   └── page.jsx              # Add new coffee product page
└── items/
    ├── page.jsx              # Products listing page
    └── [id]/
        └── page.jsx          # Individual product detail page (dynamic routing)
```

**Page Descriptions:**

- **Home (`page.jsx`)**: Landing page with hero section and featured content
- **Login (`login/page.jsx`)**: User authentication and login functionality
- **Items (`items/page.jsx`)**: Browse and view all available coffee products
- **Item Details (`items/[id]/page.jsx`)**: View detailed information about a specific product
- **Add Item (`add-item/page.jsx`)**: Interface to add new coffee products to inventory

### 🧩 `/components` - Reusable Components

All React components are organized for modularity and reusability.

```
components/
├── Navbar.jsx                # Navigation bar component
├── Footer.jsx                # Footer component
└── sections/                 # Homepage section components
    ├── Hero.jsx              # Hero banner section
    ├── Benefits.jsx          # Benefits showcase section
    ├── Features.jsx          # Product features section
    ├── HowItWorks.jsx        # Process explanation section
    ├── ItemsPreview.jsx      # Featured products preview
    ├── CallToAction.jsx      # Call-to-action section
    └── Testimonials.jsx      # Customer testimonials section
```

**Component Breakdown:**

- **Navigation**: `Navbar.jsx` - Main site navigation
- **Layout**: `Footer.jsx` - Website footer
- **Homepage Sections**:
  - `Hero.jsx` - Eye-catching hero section
  - `Benefits.jsx` - Value proposition showcase
  - `Features.jsx` - Product feature highlights
  - `HowItWorks.jsx` - Service workflow explanation
  - `ItemsPreview.jsx` - Featured coffee products carousel
  - `CallToAction.jsx` - Conversion-focused CTA section
  - `Testimonials.jsx` - Customer reviews and feedback

### 📊 `/public` - Static Assets & Data

```
public/
└── data/
    └── items.json            # Coffee products database (JSON format)
```

**Content:**

- `items.json`: Stores all coffee product information including names, descriptions, prices, and images

---

## 🛠️ Technology Stack

### Core Framework

- **Next.js 16.1.3** - React-based framework with App Router
- **React 19.0.0** - UI library for component development
- **React DOM 19.0.0** - DOM rendering engine

### Styling & UI

- **Tailwind CSS 3.4.15** - Utility-first CSS framework
- **PostCSS 8.4.49** - CSS processing and transformation
- **Autoprefixer 10.4.20** - Automatic vendor prefixing

### Authentication & Data

- **NextAuth 4.24.0** - Authentication framework
- **Axios 1.7.0** - HTTP client for API requests
- **js-cookie 3.0.5** - Cookie management

### Development Tools

- **ESLint 9.0.0** - Code quality and linting
- **Concurrently 9.0.0** - Run multiple tasks simultaneously

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm build

# Start production server
npm start

# Run linting
npm run lint
```

The application will be available at `http://localhost:3000`

---

## 📄 Environment Configuration

The project includes environment file configuration:

- `.env` - Environment variables (create based on your needs)
- `.gitignore` - Files excluded from version control
- `next.config.js` - Next.js runtime configuration
- `middleware.js` - Request/response middleware processing

---

## 🎯 Application Flow

1. **User Lands** → Home page with hero section and product preview
2. **Browse Products** → Navigate to items page to see all coffee products
3. **View Details** → Click on product to see detailed information
4. **Authenticate** → Login page for user account access
5. **Manage Inventory** → Add new products through add-item page

---

## 🏗️ Architecture Highlights

- **Component-Based**: Modular React components for maintainability
- **Server-Side Rendering**: Next.js optimizes performance with SSR
- **Dynamic Routing**: Product details with dynamic [id] routes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **JSON Data**: Lightweight product database in items.json
- **Clean Separation**: Clear division between pages, components, and styles

---

## 📈 Future Enhancements

- Backend API integration
- Shopping cart functionality
- Payment processing
- User account management
- Product filtering and search
- Admin dashboard
- Order tracking system

---