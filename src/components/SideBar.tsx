import { Link, useLocation } from 'react-router-dom';

interface SideBarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const SideBar = ({ isOpen, onToggle }: SideBarProps) => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/team' },
    { name: 'Sponsors &  Partners', path: '/sponsors' },
    { name: 'Events', path: '/events' },
    { name: 'Join Us', path: '/join' },
  ];

  // Function to scroll to top smoothly and close sidebar
  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    onToggle(); // Close the sidebar
  };

  return (
    <>
      {/* Mobile Header */}
      <nav className="sticky top-0 left-0 z-100 bg-white lg:hidden flex flex-row items-center justify-between w-full py-5 px-[5%] border-b border-b-black/20">
        <Link to="/" onClick={handleNavClick} className="flex flex-row items-center">
          <div className="my-auto font-logo text-primary text-2xl">BC</div>
          <div className="mx-2 w-[0.8px] h-8 bg-black/70"></div>
          <div className="my-auto font-primary uppercase text-[12px]">
            Blackleaf <br />
            Capital
          </div>
        </Link>
        <button
          className={`hamburger hamburger--spin ${isOpen ? 'is-active' : ''}`}
          type="button"
          onClick={onToggle}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </nav>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#f5f5f5] shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 pt-[14vh]">
          <nav>
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer flex flex-row items-center gap-4 hover:bg-primary py-3 px-3 rounded-md transition-colors duration-200 group"
                >
                  <Link
                    to={item.path}
                    onClick={handleNavClick}
                    className={`w-full transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-primary group-hover:text-white font-medium'
                        : 'text-gray-700 group-hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mx-6 w-fit rounded-4xl bg-primary text-white px-8 py-3 flex flex-row items-center gap-4 cursor-pointer transition-all ease-in-out hover:translate-x-2">
          <Link to="/join" onClick={handleNavClick} className="text-white">
            Get Involved
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;