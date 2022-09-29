import Link from 'next/link';
import React, { useState } from 'react';
import { FaBalanceScale, FaBars } from 'react-icons/fa';

import Container from '../UI/Container';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleClick = () => {
    setNavbarOpen(!navbarOpen);
  };

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
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/'}>Clientes</Link>
            </li>
            <li>
              <Link href={'/'}>Sobre</Link>
            </li>
            <li>
              <Link href={'/'}>Casos</Link>
            </li>
            <li>
              <Link href={'/'}>Contato</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
