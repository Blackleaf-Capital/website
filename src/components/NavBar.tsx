import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/team' },
    { name: 'Sponsors &  Partners', path: '/sponsors' },
    { name: 'Events', path: '/events' },
    { name: 'Join Us', path: '/join' },
  ];

  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className=" bg-white hidden lg:flex flex-row items-center justify-between w-full py-5 px-[5%] border-b border-b-black/10 backdrop-blur-sm">
      <Link to="/" aria-label="logo" onClick={scrollToTop} className="flex flex-row items-center cursor-pointer">
        <div className='my-auto font-logo text-primary text-4xl'>BC</div>
        <div className='mx-2 w-[0.8px] h-8 bg-black/70'></div>
        <div className='mt-1 font-primary uppercase text-[14px]'>Blackleaf <br />Capital</div>
      </Link>
      <ul className="flex flex-row items-center gap-5.5">
        {navItems.map((item, index) => (
          <li key={index} className="cursor-pointer font-secondary text-[18px] hover:text-primary">
            <Link
              to={item.path}
              onClick={scrollToTop}
              aria-label={item.name}
              className={`transition-colors duration-200 ${location.pathname === item.path ? 'text-primary' : 'text-brand-black'
                }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/join"
        onClick={scrollToTop}
        aria-label="Get Involved"
        className="rounded-4xl bg-primary text-white px-8 py-3 flex flex-row items-center gap-4 cursor-pointer transition-all ease-in-out hover:translate-x-2 font-secondary"
      >
        Get Involved
        <MdOutlineArrowRightAlt />

      </Link>
    </nav>
  );
};

export default NavBar;