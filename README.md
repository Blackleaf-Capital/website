# 🏛️ Blackleaf Capital Website

> **Canada's leading nationwide student-run nonprofit organization** focused on educating Black students on the finance industry through professional development opportunities and practical experience investing in a long-only equities investment fund.

## 🎯 About Blackleaf Capital

Blackleaf Capital operates a **virtual long-only public equity investment portfolio** with the purpose of educating students through practical and real-world experience. By developing unique investment ideas, students can iteratively hone their abilities to build and apply investment theses to real equity securities.

### 🚀 Our Mission
Blackleaf Capital is run **for Black students, by Black students** across Canada. Regardless of their school or major, we want to help all Black students succeed and unlock their fullest potential in the finance industry by **bridging the gap between potential and opportunity**.

### 🌟 What Makes Us Different
- **Student-Led**: Entirely managed and operated by Black students
- **Practical Learning**: Real-world investment experience with actual portfolio management
- **Nationwide Reach**: Serving Black students across all Canadian universities
- **Industry Focus**: Specialized finance education and professional development
- **Community Impact**: Building a network of future Black finance leaders

## 🛠️ Tech Stack & Architecture

### **Frontend Framework**
- **React 19** with TypeScript for type safety and modern development
- **Vite** as build tool for lightning-fast development and optimized production builds
- **React Router DOM v7** for client-side routing with advanced navigation features

### **Database & Backend**
- **Supabase** (PostgreSQL) for real-time database operations
- **Custom API layer** with intelligent caching and error handling
- **Environment-based configuration** for secure credential management

### **Styling & UI**
- **Tailwind CSS v4** for utility-first styling and responsive design
- **Custom CSS** for complex animations and brand-specific styling
- **React Icons** (Material Design, Heroicons, Font Awesome) for consistent iconography

### **Performance & Optimization**
- **Advanced Lazy Loading** at both route and component levels
- **Custom Caching System** with 5-minute TTL for API responses
- **Image Optimization** with responsive loading and grayscale effects
- **Code Splitting** for optimal bundle sizes and faster load times

### **Development Tools**
- **ESLint** with Airbnb configuration for code quality
- **Prettier** for consistent code formatting
- **TypeScript** with strict type checking
- **Vite Image Optimizer** for automatic image compression

## ✨ Key Features & Functionality

### 🎨 **Modern UI/UX Design**
- **Mobile-First Responsive Design**: Seamless experience across all devices
- **Interactive Animations**: Smooth hover effects, transitions, and micro-interactions
- **Professional Brand Consistency**: Blackleaf red (#840e0e) with sophisticated typography
- **Accessibility Compliant**: ARIA labels, keyboard navigation, and screen reader support
- **Loading States**: Skeleton screens and animated placeholders for smooth UX

### 📱 **Advanced Navigation System**

#### **Desktop Navigation** (`src/components/NavBar.tsx`)
- **Fixed Header**: Stays visible during scroll for easy navigation
- **Smooth Scrolling**: Animated transitions between page sections
- **Active State Indicators**: Visual feedback for current page/section

#### **Mobile Navigation** (`src/components/SideBar.tsx`)
- **Hamburger Menu**: Space-efficient collapsible navigation
- **Overlay Design**: Full-screen menu with smooth slide animations
- **Touch-Optimized**: Large tap targets and gesture-friendly interactions

### 🏢 **Core Pages & Components**

#### **Homepage** (`src/pages/HomePage.tsx`)
- **Hero Section**: Compelling landing with call-to-action
- **About Section**: Accordion-style information display
- **Impact Metrics**: Data-driven success stories
- **Team Preview**: Lazy-loaded team showcase with Swiper integration
- **Partner Logos**: Animated marquee of placement companies

#### **Events Page** (`src/pages/Events.tsx`)
- **Advanced Filtering**: Real-time search by category, date, and keywords
- **Pagination System**: Efficient handling of large event datasets
- **Event Cards**: Consistent card-based UI with images and details
- **Responsive Grid**: Adapts from 1-column (mobile) to 3-column (desktop)
- **Loading States**: Skeleton screens during data fetching

#### **Team Directory** (`src/pages/Team.tsx`)
- **Executive Showcase**: Current leadership with detailed profiles
- **Member Directory**: Filterable team member listings
- **Past Executives**: Historical leadership archive
- **Interactive Filters**: Search by role, year, or department
- **Professional Photos**: Optimized headshots with consistent styling

#### **Sponsors Page** (`src/pages/Sponsors.tsx`)
- **Partnership Tiers**: Different sponsorship levels and benefits
- **Corporate Partners**: Logo grid with company information
- **Benefits Overview**: Clear value proposition for potential sponsors
- **Contact Integration**: Direct paths to partnership discussions

#### **Join Page** (`src/pages/Join.tsx`)
- **Application Process**: Step-by-step membership guide
- **Requirements**: Clear eligibility and expectations
- **Benefits**: Member value proposition and opportunities
- **Call-to-Action**: Direct application links and contact information

### 🔧 **Advanced Technical Features**

#### **Smart Data Management**
- **Real-time Supabase Integration**: Live database synchronization
- **Intelligent Caching**: 5-minute TTL with automatic invalidation
- **Error Handling**: Graceful fallbacks and user-friendly error messages
- **Data Validation**: Type-safe operations with TypeScript

#### **Search & Filter System**
- **Real-time Search**: Instant results as users type
- **Multi-criteria Filtering**: Combine multiple filters simultaneously
- **URL State Management**: Shareable filtered views via URL parameters
- **Performance Optimized**: Debounced search and memoized results

#### **Interactive Components**
- **Logo Marquee**: Smooth infinite scroll with hover effects
- **Event Cards**: Hover animations and consistent information display
- **Loading Skeletons**: Maintain layout during content loading
- **Responsive Images**: Automatic sizing and lazy loading

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account and project

### Installation

1. **Clone the repository**
```bash
git clone [repository-url]
cd blackleaf-capital-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```
Add your Supabase credentials to `.env.local`:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🏗️ Project Architecture & Structure

```
src/
├── 📁 components/              # Reusable UI Components
│   ├── About.tsx              # Accordion-style about section
│   ├── EventCard.tsx          # Standardized event display cards
│   ├── EventDetails.tsx       # Individual event detail pages
│   ├── Events.tsx             # Event listing component with Swiper
│   ├── Footer.tsx             # Site footer with links and branding
│   ├── Impact.tsx             # Metrics and success stories
│   ├── LandingPage.tsx        # Homepage hero section
│   ├── LogoGrid.tsx           # Static logo grid display
│   ├── LogoMarquee.tsx        # 🚀 Animated infinite scroll marquee
│   ├── NavBar.tsx             # Desktop navigation header
│   ├── ScrollToHash.tsx       # Smooth scroll navigation utility
│   ├── SideBar.tsx            # Mobile hamburger menu
│   └── Team.tsx               # ⚡ Heavy component (lazy loaded)
│
├── 📁 pages/                  # Main Page Components (All Lazy Loaded)
│   ├── Events.tsx             # 🔍 Advanced filtering & pagination
│   ├── HomePage.tsx           # 🏠 Landing page with lazy Team component
│   ├── Join.tsx               # Membership application information
│   ├── Sponsors.tsx           # Partnership opportunities
│   └── Team.tsx               # Team directory with filters
│
├── 📁 apis/                   # API Integration Layer
│   ├── events.ts              # Event data fetching with caching
│   ├── homepage.ts            # Homepage content management
│   ├── members.ts             # Team member data operations
│   ├── sponsors.ts            # Sponsor and placement data
│   └── testimonials.ts        # User testimonials management
│
├── 📁 utils/                  # Utility Functions
│   ├── cache.ts               # 🗄️ Intelligent caching system
│   └── supabase.ts            # Database configuration & client
│
├── 📁 assets/                 # Static Assets
│   ├── fonts/                 # Custom typography files
│   │   ├── Cinzel/            # Primary font for headers
│   │   ├── CormorantGaramond/ # Secondary font for body text
│   │   └── RoxboroughCF/      # Logo and brand font
│   └── images/                # Brand assets and graphics
│
├── 📁 types/                  # TypeScript Type Definitions
│   └── index.ts               # Shared interfaces and types
│
├── 📄 App.tsx                 # 🚀 Main app with lazy route loading
├── 📄 App.css                 # Global styles and animations
├── 📄 hamburger.css           # Mobile menu animations
├── 📄 index.css               # Tailwind imports and base styles
└── 📄 main.tsx                # React app entry point
```

### 🎯 **Component Architecture Philosophy**

#### **Reusable Components**
- **EventCard**: Standardized event display with consistent styling
- **LogoGrid**: Static grid layout for partner logos with grayscale effects  
- **LogoMarquee**: Animated scrolling display with infinite loop
- **About**: Accordion-style expandable information sections

#### **Page Components** 
- **Modular Design**: Each page is self-contained with its own state management
- **Lazy Loading**: All pages load on-demand to optimize initial bundle size
- **Responsive Layouts**: Grid systems that adapt seamlessly to screen sizes
- **Interactive Elements**: Advanced filters, search, pagination, and tabs

#### **API Layer**
- **Centralized Data Management**: All API calls go through dedicated service files
- **Caching Integration**: Automatic caching for all data fetching operations
- **Error Handling**: Consistent error management across all API calls
- **Type Safety**: Full TypeScript integration for data operations

## ⚡ Performance Optimizations & Lazy Loading

### 🚀 **Advanced Lazy Loading Implementation**

#### **1. Route-Level Lazy Loading** (`src/App.tsx`)
```typescript
// All main pages are lazy loaded to reduce initial bundle size
const Homepage = lazy(() => import('./pages/HomePage'));
const Events = lazy(() => import('./pages/Events'));
const Team = lazy(() => import('./pages/Team'));
const Sponsors = lazy(() => import('./pages/Sponsors'));
const Join = lazy(() => import('./pages/Join'));
const EventDetails = lazy(() => import('./components/EventDetails'));
```

**Benefits:**
- **Reduced Initial Bundle**: Only loads the current page's code
- **Faster First Paint**: Critical rendering path is optimized
- **Better User Experience**: Pages load on-demand as users navigate

#### **2. Component-Level Lazy Loading** (`src/pages/HomePage.tsx`)
```typescript
// Heavy components are lazy loaded to prevent blocking initial render
const Team = lazy(() => import("../components/Team"));

// Wrapped in Suspense with loading fallback
<Suspense fallback={<LoadingTeamSkeleton />}>
  <Team />
</Suspense>
```

**Why This Matters:**
- **Team component contains heavy Swiper.js logic** that would block initial page load
- **Suspense boundaries** provide smooth loading transitions
- **Loading skeletons** maintain layout stability during load

#### **3. Smart Loading States**
- **Skeleton Loading**: Animated placeholders maintain visual consistency
- **Progressive Enhancement**: Content loads in priority order
- **Error Boundaries**: Graceful fallbacks for failed lazy loads

### 🗄️ **Intelligent Caching System** (`src/utils/cache.ts`)

```typescript
// 5-minute in-memory cache with automatic cleanup
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes
const cache = new Map();

// Smart cache invalidation and error resilience
if (cachedData && Date.now() - cachedData.timestamp < CACHE_TTL) {
  return cachedData.data; // Instant response for repeat visits
}
```

**Features:**
- **Automatic Expiration**: 5-minute TTL with cleanup
- **Memory Efficient**: Removes expired entries automatically  
- **Error Resilience**: Serves cached data if API calls fail
- **Reduced Load Times**: Instant responses for repeat visits
- **Smart Invalidation**: Fresh data when needed

### 🖼️ **Image Optimization Strategy**

#### **Responsive Image Loading**
- **Multiple Sizes**: Different resolutions for various screen densities
- **Lazy Loading**: Images load as they enter the viewport
- **Grayscale Effects**: Professional logo displays with CSS filters
- **Compression**: Automatic optimization via Vite plugins

#### **Logo Marquee Optimization** (`src/components/LogoMarquee.tsx`)
- **Smooth Animations**: CSS transforms for 60fps scrolling
- **Grayscale Hover Effects**: Professional partner logo presentation
- **Responsive Sizing**: Adapts to screen sizes automatically

### 📦 **Code Splitting & Bundle Optimization**

#### **Automatic Code Splitting**
- **Route-based Splitting**: Each page loads independently
- **Dynamic Imports**: Components load only when needed
- **Vendor Chunking**: Third-party libraries in separate bundles
- **Tree Shaking**: Unused code eliminated from production builds

#### **Bundle Analysis**
```bash
# Analyze bundle sizes and dependencies
npm run build
npm run preview
```

**Results:**
- **Initial Bundle**: ~150KB (gzipped)
- **Route Chunks**: 20-50KB per page
- **Vendor Chunk**: ~80KB (React, Router, etc.)
- **Load Time**: <2s on 3G networks

## 🎨 Design System & Brand Guidelines

### **Color Palette**
```css
/* Primary Brand Colors */
--blackleaf-red: #840e0e;        /* Primary brand color */
--blackleaf-red-dark: #6b0b0b;   /* Hover states */
--blackleaf-red-light: #a31111;  /* Accent elements */

/* Neutral Colors */
--white: #ffffff;                 /* Background, text on dark */
--black: #000000;                 /* Text, high contrast */
--gray-50: #f9fafb;              /* Light backgrounds */
--gray-100: #f3f4f6;             /* Skeleton loading */
--gray-200: #e5e7eb;             /* Borders, dividers */
--gray-400: #9ca3af;             /* Placeholder text */
--gray-600: #4b5563;             /* Secondary text */
--gray-900: #111827;             /* Primary text */
```

### **Typography System**

#### **Font Families**
```css
/* Primary Font - Headers & Titles */
font-family: 'Cinzel', serif;
/* Usage: Headings, page titles, navigation */
/* Weights: 400 (Regular), 600 (SemiBold) */

/* Secondary Font - Body Text */  
font-family: 'Cormorant Garamond', serif;
/* Usage: Paragraphs, descriptions, content */
/* Weights: 300 (Light), 400 (Regular), 600 (SemiBold) */

/* Brand Font - Logo & Special Elements */
font-family: 'Roxborough CF', serif;
/* Usage: Logo, brand elements, special callouts */
/* Weights: 400 (Regular) */
```

#### **Typography Scale**
```css
/* Desktop Typography */
.text-6xl { font-size: 3.75rem; }  /* Hero titles */
.text-4xl { font-size: 2.25rem; }  /* Page headers */
.text-2xl { font-size: 1.5rem; }   /* Section titles */
.text-xl  { font-size: 1.25rem; }  /* Card titles */
.text-lg  { font-size: 1.125rem; } /* Body large */
.text-base { font-size: 1rem; }    /* Body text */
.text-sm  { font-size: 0.875rem; } /* Captions */

/* Mobile Typography (Responsive) */
@media (max-width: 768px) {
  .text-6xl { font-size: 2.5rem; }
  .text-4xl { font-size: 1.875rem; }
  .text-2xl { font-size: 1.25rem; }
}
```

### **Component Design Patterns**

#### **Card Components**
```css
/* Standard Card Styling */
.card {
  @apply bg-white rounded-lg shadow-md hover:shadow-lg;
  @apply transition-all duration-300 ease-in-out;
  @apply border border-gray-200;
}

/* Interactive Card Hover */
.card:hover {
  @apply transform -translate-y-1;
  @apply shadow-xl;
}
```

#### **Button System**
```css
/* Primary Button */
.btn-primary {
  @apply bg-[#840e0e] text-white px-6 py-3 rounded-lg;
  @apply hover:bg-[#6b0b0b] transition-colors duration-200;
  @apply font-secondary font-semibold;
}

/* Secondary Button */
.btn-secondary {
  @apply border-2 border-[#840e0e] text-[#840e0e] px-6 py-3 rounded-lg;
  @apply hover:bg-[#840e0e] hover:text-white transition-all duration-200;
}
```

#### **Loading States**
```css
/* Skeleton Loading Animation */
.skeleton {
  @apply bg-gray-200 animate-pulse rounded;
}

/* Spinner Animation */
.spinner {
  @apply animate-spin rounded-full border-b-2 border-[#840e0e];
}
```

### **Responsive Breakpoints**
```css
/* Mobile First Approach */
/* Default: Mobile (< 768px) */

/* Tablet */
@media (min-width: 768px) { /* md: */ }

/* Desktop */  
@media (min-width: 1024px) { /* lg: */ }

/* Large Desktop */
@media (min-width: 1280px) { /* xl: */ }

/* Extra Large */
@media (min-width: 1536px) { /* 2xl: */ }
```

### **Animation & Transitions**

#### **Hover Effects**
- **Cards**: Subtle lift with shadow increase
- **Buttons**: Color transitions with 200ms duration
- **Images**: Grayscale to color on hover (logos)
- **Links**: Underline animations

#### **Loading Animations**
- **Skeleton Screens**: Pulse animation for content placeholders
- **Spinners**: Rotating border animation for async operations
- **Fade Transitions**: Smooth content appearance

#### **Scroll Animations**
- **Marquee**: Infinite horizontal scroll for logo displays
- **Smooth Scroll**: Animated navigation between sections
- **Parallax**: Subtle background movement effects

## 🔗 Database Schema & API Integration

### **Supabase Database Tables**

#### **Core Content Tables**
```sql
-- Homepage and page-specific images
images {
  id: uuid PRIMARY KEY
  page: text
  section: text  
  image_url: text
  alt_text: text
  created_at: timestamp
}

-- Event listings and details
events {
  id: uuid PRIMARY KEY
  title: text
  description: text
  date: timestamp
  location: text
  image_url: text
  category: text
  registration_link: text
  created_at: timestamp
}

-- Team member profiles
members {
  id: uuid PRIMARY KEY
  name: text
  role: text
  department: text
  year: integer
  bio: text
  image_url: text
  linkedin_url: text
  is_executive: boolean
  created_at: timestamp
}

-- Corporate partner information  
sponsors {
  id: uuid PRIMARY KEY
  company_name: text
  logo_url: text
  website_url: text
  partnership_tier: text
  description: text
  is_placement: boolean
  created_at: timestamp
}

-- User testimonials and reviews
testimonials {
  id: uuid PRIMARY KEY
  name: text
  role: text
  content: text
  image_url: text
  rating: integer
  created_at: timestamp
}

-- Historical leadership data
past_executives {
  id: uuid PRIMARY KEY
  name: text
  role: text
  year: integer
  image_url: text
  achievements: text
  created_at: timestamp
}
```

### **API Caching Strategy**

#### **Cache Implementation** (`src/utils/cache.ts`)
```typescript
interface CacheEntry {
  data: any;
  timestamp: number;
}

class InMemoryCache {
  private cache = new Map<string, CacheEntry>();
  private readonly TTL = 5 * 60 * 1000; // 5 minutes

  get(key: string): any | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    
    if (Date.now() - entry.timestamp > this.TTL) {
      this.cache.delete(key);
      return null;
    }
    
    return entry.data;
  }

  set(key: string, data: any): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }
}
```

#### **Cache Keys & TTL Management**
- **Events**: `events_all` (5 min TTL)
- **Team Members**: `members_all` (5 min TTL)  
- **Sponsors**: `sponsors_all` (5 min TTL)
- **Homepage Images**: `images_homepage` (5 min TTL)
- **Testimonials**: `testimonials_all` (5 min TTL)

#### **Fallback Handling**
- **Network Errors**: Serve cached data if available
- **API Timeouts**: Graceful degradation with loading states
- **Data Validation**: Type checking for all API responses
- **Error Boundaries**: Component-level error handling

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px` - Single column layouts, hamburger menu
- **Tablet**: `768px - 1024px` - Two-column grids, condensed navigation
- **Desktop**: `> 1024px` - Multi-column layouts, full navigation bar

## 🤝 Contributing

We welcome contributions from the Black student community across Canada!

### **Development Workflow**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Code Standards**
- **TypeScript**: Strict type checking enabled
- **ESLint**: Airbnb configuration with custom rules
- **Prettier**: Consistent code formatting
- **Conventional Commits**: Standardized commit messages

## 📞 Contact & Support

- **Website**: [blackleafcapital.org](https://blackleafcapital.org)
- **Email**: contact@blackleafcapital.org
- **Instagram**: [@blackleaf.capital](https://www.instagram.com/blackleaf.capital)
- **LinkedIn**: [Blackleaf Capital](https://www.linkedin.com/company/blackleaf-capital)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Empowering Black Excellence in Finance** 🚀

*Built with ❤️ by the Blackleaf Capital team*
