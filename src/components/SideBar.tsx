import { Link, useLocation } from 'react-router-dom';

interface Props {
  isOpen: boolean;
  onToggle: () => void;
}

const SideBar = ({ isOpen, onToggle }: Props) => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Join', path: '/join' },
  ];

  return (
    <>
      {/* Mobile Header with Hamburger */}
      <div className="bg-white shadow-sm border-b border-brand-gray/20 px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={onToggle}>
          <img src="/logo.png" alt="Blackleaf Capital" className="h-6 w-auto" />
          <span className="ml-2 font-logo text-lg text-brand-black">
            Blackleaf Capital
          </span>
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={onToggle}
          className="p-2 rounded-md text-brand-black hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-brand-gray/20">
          <Link to="/" className="flex items-center" onClick={onToggle}>
            <img
              src="/logo.png"
              alt="Blackleaf Capital"
              className="h-8 w-auto"
            />
            <span className="ml-3 font-logo text-xl text-brand-black">
              Blackleaf Capital
            </span>
          </Link>
        </div>

        <nav className="mt-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onToggle}
              className={`block px-4 py-3 text-base font-medium transition-colors duration-200 ${
                location.pathname === item.path
                  ? 'text-primary bg-primary/5 border-r-4 border-primary'
                  : 'text-brand-black hover:text-primary hover:bg-brand-gray/10'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default SideBar;