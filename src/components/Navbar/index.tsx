import Link from 'next/link';
import React, { useState } from 'react';
import { FaBalanceScale, FaBars } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

import Container from '../UI/Container';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleClick = () => {
    setNavbarOpen(!navbarOpen);
  };
  const navbarLinks = [
    {
      to: 'home',
      label: 'Home',
      duration: null,
      offset: -90,
    },
    {
      to: 'clientes',
      label: 'Clientes',
      duration: null,
    },
    {
      to: 'sobre',
      label: 'Sobre',
      duration: null,
    },
    {
      to: 'casos',
      label: 'Casos',
      duration: null,
    },
    {
      to: 'contato',
      label: 'Contato',
      duration: null,
    },
  ];

  return (
    <header className="w-full h-20 sticky top-0 bg-white z-50 shadow-md">
      <Container>
        <nav className="w-full h-full items-center flex justify-between">
          {/* <Link href={'/'}>Bruce Wayne</Link> */}
          <Link href="/" className="p-1">
            <span className="flex items-center gap-3 text-lg font-heading font-medium text-primaryGray">
              <FaBalanceScale fontSize={22} />
              Bruce Wayne
            </span>
          </Link>

          <button
            type="button"
            className="text-xl lg:hidden"
            onClick={handleClick}
          >
            <FaBars />
          </button>

          <ul
            className={`flex flex-col gap-8 fixed top-20 right-0 min-h-screen max-w-[85vw] w-full p-10 border bg-white translate-x-full transition duration-500 shadow-xl lg:translate-x-0

            lg:static lg:min-h-fit lg:flex-row lg:p-0 lg:max-w-fit lg:shadow-none lg:border-none
            ${navbarOpen ? '!translate-x-0' : ''}`}
          >
            {navbarLinks.map((link) => (
              <li
                className="text-base font-semibold lg:font-medium text-primaryGray font-text"
                key={link.label}
              >
                <ScrollLink
                  className="cursor-pointer"
                  onClick={() => setNavbarOpen(false)}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={link.duration ? link.duration : 500}
                  offset={link.offset ? link.offset : 0}
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
            {/* <li className="text-base font-medium text-primaryGray font-text">
              <Link href={'/'}>Home</Link>
            </li>

            <li className="text-base font-medium text-primaryGray font-text">
              <ScrollLink
                className="cursor-pointer"
                to={'clientes'}
                spy={true}
                smooth={true}
                duration={500}
              >
                Clientes
              </ScrollLink>
            </li>
            <li className="text-base font-medium text-primaryGray font-text">
              <ScrollLink
                className="cursor-pointer"
                to={'sobre'}
                spy={true}
                smooth={true}
                duration={500}
              >
                Sobre
              </ScrollLink>
            </li>
            <li className="text-base font-medium text-primaryGray font-text">
              <ScrollLink
                className="cursor-pointer"
                to={'casos'}
                spy={true}
                smooth={true}
                duration={500}
              >
                Casos
              </ScrollLink>
            </li>
            <li className="text-base font-medium text-primaryGray font-text">
              <ScrollLink
                className="cursor-pointer"
                to={'contato'}
                spy={true}
                smooth={true}
                duration={500}
              >
                Contato
              </ScrollLink>
            </li> */}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
