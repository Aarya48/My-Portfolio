import React ,{useEffect,useState}from 'react'
import { Link } from 'react-router-dom'
import {styles} from "../styles"
import { navlinks } from './constants'
import {logo,menu,close,github} from "../assets"

const socialLinks = [
  {
    id: 'email',
    href: 'mailto:tiwariaarya84@gmail.com',
    label: 'Email',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/aarya48',
    label: 'LinkedIn',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM7.5 8h3.78v2.2h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.65 4.78 6.1V24h-4V14.2c0-2.3-.05-5.25-3.2-5.25-3.2 0-3.7 2.5-3.7 5.1V24h-4V8z" />
      </svg>
    ),
  },
  {
    id: 'github',
    href: 'https://github.com/Aarya48',
    label: 'GitHub',
    icon: <img src={github} alt="GitHub" className="w-5 h-5" />,
  },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Aarya &nbsp;
            <span className='sm:block hidden'>Tiwari</span>
          </p>
        </Link>

        <div className='hidden sm:flex items-center gap-6'>
          <ul className='list-none flex flex-row gap-10'>
            {navlinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className='flex items-center gap-6'>
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target='_blank'
                rel='noreferrer noopener'
                aria-label={link.label}
                className='text-secondary hover:text-white transition-colors duration-300'
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <div className='flex flex-col gap-6'>
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navlinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
              <div className='flex justify-start items-center gap-6'>
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target='_blank'
                    rel='noreferrer noopener'
                    aria-label={link.label}
                    className='text-secondary hover:text-white transition-colors duration-300'
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;