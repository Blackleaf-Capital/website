# Blackleaf Capital

Canada's leading nationwide student-run nonprofit organization focused on educating Black students on the finance industry through professional development opportunities and practical experience investing in a long-only equities investment fund.

## About Blackleaf Capital

Blackleaf Capital operates a virtual long-only public equity investment portfolio with the purpose of educating students through practical and real-world experience. By developing unique investment ideas, students can iteratively hone their abilities to build and apply investment theses to real equity securities.

**Our Mission**: Blackleaf Capital is run for Black students, by Black students across Canada. Regardless of their school or major, we want to help all Black students succeed and unlock their fullest potential in the finance industry by bridging the gap between potential and opportunity.

## Tech Stack

- **Frontend**: React with TypeScript
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

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
└── assets/        # Static assets (images, icons, etc.)
```

## Contributing

We welcome contributions from all Black students across Canada! Please read our contributing guidelines before submitting a pull request.

## Contact

- **Email**: contact@blackleafcapital.org
- **Instagram**: [@blackleaf.capital](https://www.instagram.com/blackleaf.capital)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Empowering Black students in finance through education and opportunity.*
