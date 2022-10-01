import { motion } from 'framer-motion';
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
    <motion.header
      className="w-full h-20 sticky top-0 z-50 shadow-md"
      transition={{ duration: 2, delay: 3 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, backgroundColor: '#013d37', color: '#f6f6f6' }}
    >
      <Container>
        <nav className="w-full h-full items-center flex justify-between">
          {/* <Link href={'/'}>Bruce Wayne</Link> */}
          <Link href="/" className="p-1">
            <span className="flex items-center gap-3 text-lg font-heading font-medium ">
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
            className={`flex flex-col gap-8 fixed top-20 right-0 min-h-screen max-w-[85vw] w-full p-10 border bg-transparent translate-x-full transition duration-500 lg:transition-none shadow-xl lg:translate-x-0

            lg:static lg:min-h-fit lg:flex-row lg:p-0 lg:max-w-fit lg:shadow-none lg:border-none
            ${navbarOpen ? '!translate-x-0' : ''}`}
          >
            {navbarLinks.map((link) => (
              <li
                className="text-base font-semibold lg:font-medium font-text"
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
          </ul>
        </nav>
      </Container>
    </motion.header>
  );
};

export default Navbar;
