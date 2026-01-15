# Blackleaf Capital Website

Canada's leading nationwide student-run nonprofit organization focused on educating Black students on the finance industry through professional development opportunities and practical experience investing in a long-only equities investment fund.

## About Blackleaf Capital

Blackleaf Capital operates a virtual long-only public equity investment portfolio with the purpose of educating students through practical and real-world experience. By developing unique investment ideas, students can iteratively hone their abilities to build and apply investment theses to real equity securities.

**Our Mission**: Blackleaf Capital is run for Black students, by Black students across Canada. Regardless of their school or major, we want to help all Black students succeed and unlock their fullest potential in the finance industry by bridging the gap between potential and opportunity.

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router DOM v6
- **Build Tool**: Vite
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Material Design, Heroicons, Font Awesome)
- **Performance**: Custom caching system for API calls
- **UI Components**: Custom reusable components

## ✨ Key Features

### 🎨 **Modern UI/UX**
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Interactive Components**: Hover effects, smooth transitions, and animations
- **Professional Styling**: Consistent design system with Blackleaf branding
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

### 📱 **Navigation System**
- **Desktop Navigation**: Fixed header with smooth scrolling
- **Mobile Navigation**: Collapsible hamburger menu with overlay
- **Smart Routing**: Client-side routing with 404 handling

### 🏢 **Core Pages**
- **Homepage**: Hero section, about us, impact metrics, and call-to-action
- **Events**: Filterable event listings with search and pagination
- **Team**: Executive showcase, member directory with filters, and past executives
- **Sponsors**: Partnership opportunities, benefits, and corporate partners
- **Join**: Application process and membership information

### 🔧 **Advanced Features**
- **Smart Caching**: 5-minute in-memory cache for all API calls
- **Image Optimization**: Lazy loading and responsive images
- **Search & Filters**: Real-time filtering for events and team members
- **Logo Marquee**: Animated partner showcases with grayscale effects
- **Event Cards**: Consistent card-based UI across all content

### 📊 **Data Management**
- **Supabase Integration**: Real-time database with automatic syncing
- **API Caching**: Reduces load times and improves user experience
- **Error Handling**: Graceful fallbacks and user-friendly error messages

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

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── About.tsx       # About section with accordion
│   ├── EventCard.tsx   # Event display cards
│   ├── Footer.tsx      # Site footer
│   ├── LandingPage.tsx # Homepage hero section
│   ├── LogoGrid.tsx    # Static logo grid display
│   ├── LogoMarquee.tsx # Animated logo marquee
│   ├── NavBar.tsx      # Desktop navigation
│   └── SideBar.tsx     # Mobile navigation
├── pages/              # Main page components
│   ├── Events.tsx      # Events listing with filters
│   ├── HomePage.tsx    # Main landing page
│   ├── Join.tsx        # Membership application
│   ├── Sponsors.tsx    # Partnership information
│   └── Team.tsx        # Team directory
├── apis/               # API integration layer
│   ├── events.ts       # Events data fetching
│   ├── homepage.ts     # Homepage content
│   ├── members.ts      # Team member data
│   ├── sponsors.ts     # Sponsor information
│   └── testimonials.ts # User testimonials
├── utils/              # Utility functions
│   ├── cache.ts        # Caching system
│   └── supabase.ts     # Database configuration
├── assets/             # Static assets
│   ├── fonts/          # Custom typography
│   └── images/         # Brand assets
└── styles/             # Global styles
    └── index.css       # Tailwind CSS imports
```

## 🎯 Component Architecture

### **Reusable Components**
- **EventCard**: Standardized event display with image, title, description, and date
- **LogoGrid**: Static grid layout for partner logos with grayscale effects
- **LogoMarquee**: Animated scrolling display for sponsors
- **About**: Accordion-style information sections

### **Page Components**
- **Modular Design**: Each page is self-contained with its own state management
- **Responsive Layouts**: Grid systems that adapt to screen sizes
- **Interactive Elements**: Filters, search, pagination, and tabs

## 🚀 Performance Optimizations

### **Caching System**
- **In-Memory Cache**: 5-minute TTL for all API responses
- **Smart Invalidation**: Automatic cleanup of expired entries
- **Error Resilience**: Serves cached data if API calls fail
- **Reduced Load Times**: Instant responses for repeat visits

### **Image Optimization**
- **Lazy Loading**: Images load as they enter viewport
- **Responsive Images**: Multiple sizes for different screen densities
- **Grayscale Effects**: CSS filters for professional logo displays

### **Code Splitting**
- **Route-based Splitting**: Each page loads independently
- **Component Lazy Loading**: Dynamic imports for large components
- **Bundle Optimization**: Vite's automatic code splitting

## 🎨 Design System

### **Colors**
- **Primary**: `#840e0e` (Blackleaf Red)
- **Secondary**: Grayscale palette for professional appearance
- **Accent**: White and black for high contrast

### **Typography**
- **Primary Font**: Cinzel (Headers and titles)
- **Secondary Font**: Cormorant Garamond (Body text)
- **Logo Font**: Roxborough CF (Brand elements)

### **Components**
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Primary red with hover effects
- **Icons**: Outline style for modern appearance

## 🔗 API Integration

### **Supabase Tables**
- `images` - Homepage and page-specific images
- `events` - Event listings and details
- `members` - Team member profiles and information
- `sponsors` - Corporate partner information
- `testimonials` - User testimonials and reviews
- `past_executives` - Historical leadership data

### **Caching Strategy**
- **Cache Keys**: Unique identifiers for each data type
- **TTL Management**: 5-minute default with configurable overrides
- **Fallback Handling**: Graceful degradation on API failures

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
