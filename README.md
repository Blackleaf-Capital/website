# Blackleaf Capital

Canada's leading nationwide student-run nonprofit organization focused on educating Black students on the finance industry through professional development opportunities and practical experience investing in a long-only equities investment fund.

## About Blackleaf Capital

Blackleaf Capital operates a virtual long-only public equity investment portfolio with the purpose of educating students through practical and real-world experience. By developing unique investment ideas, students can iteratively hone their abilities to build and apply investment theses to real equity securities.

**Our Mission**: Blackleaf Capital is run for Black students, by Black students across Canada. Regardless of their school or major, we want to help all Black students succeed and unlock their fullest potential in the finance industry by bridging the gap between potential and opportunity.

## Tech Stack

- **Frontend**: React with TypeScript
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Database**: Supabase
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd blackleaf-capital
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```
Add your Supabase credentials to `.env.local`:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint and automatically fix issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting with Prettier

## Features

- **Responsive Design**: Mobile-first approach with responsive navigation
- **Single Page Application**: Client-side routing with React Router
- **Multi-page Navigation**: Homepage, Events, Team, Sponsors, and Join pages
- **Mobile Navigation**: Collapsible sidebar for mobile devices
- **Desktop Navigation**: Fixed navigation bar for desktop screens

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── NavBar.tsx  # Desktop navigation bar component
│   └── SideBar.tsx # Mobile sidebar navigation component
├── pages/         # Page components
│   ├── Events.tsx  # Events page component
│   ├── Homepage.tsx # Homepage component
│   ├── Join.tsx    # Join Us page component
│   ├── Sponsors.tsx # Sponsors page component
│   └── Team.tsx    # Team page component
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
└── assets/        # Static assets (images, icons, etc.)
    ├── fonts/     # Custom fonts
    └── images/    # Logo and brand images
```

## Navigation

The application includes a responsive navigation system:

- **Desktop**: Fixed navigation bar visible on screens ≥1024px
- **Mobile**: Collapsible sidebar with overlay for screens <1024px

### Available Routes

- `/` - Homepage
- `/events` - Events and workshops
- `/team` - Meet our team
- `/sponsors` - Our sponsors and partners  
- `/join` - Join Blackleaf Capital

## Contributing

We welcome contributions from all Black students across Canada! Please read our contributing guidelines before submitting a pull request.

## Contact

- **Email**: contact@blackleafcapital.org
- **Instagram**: [@blackleaf.capital](https://www.instagram.com/blackleaf.capital)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Empowering Black students in finance through education and opportunity.*
