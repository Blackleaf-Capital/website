import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Join', path: '/join' },
  ];

  return (
    <nav className="sticky top-0 left-0 z-50 bg-white hidden lg:flex flex-row items-center justify-between w-full py-5 px-[5%] border-b border-b-black/10">
      <div className="flex flex-row items-center cursor-pointer">
        <div className='my-auto font-logo text-primary text-4xl'>BC</div>
        <div className='mx-2 w-[0.8px] h-8 bg-black/70'></div>
        <div className='mt-1 font-primary uppercase text-[14px]'>Blackleaf <br />Capital</div>

      </div>
      <ul className="flex flex-row items-center gap-5.5">
        {navItems.map((item, index) => (
          <li key={index} className="cursor-pointer font-secondary text-[18px] hover:text-primary">
            <Link
              to={item.path}
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
        className="rounded-4xl bg-primary text-white px-8 py-3 flex flex-row items-center gap-4 cursor-pointer transition-all ease-in-out hover:translate-x-2 font-secondary"
      >
        Get Involved
      </Link>
    </nav>
  );
};

export default NavBar;