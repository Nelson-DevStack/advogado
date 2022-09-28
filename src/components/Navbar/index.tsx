import Link from 'next/link';
import React from 'react';

import Container from '../UI/Container';

const Navbar = () => {
  return (
    <header className="w-full h-20 sticky top-0 bg-white z-50 shadow-md">
      <Container>
        <nav className="w-full h-full items-center flex justify-between">
          <Link href={'/'}>Bruce Wayne</Link>

          <ul className="flex gap-8">
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
