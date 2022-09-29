import Link from 'next/link';
import React from 'react';
import { FaBalanceScale } from 'react-icons/fa';

import Container from '../UI/Container';
import Text from '../UI/Text';

const Footer = () => {
  return (
    <footer className="pt-16 pb-10">
      <Container>
        <div className="flex flex-col md:flex-row gap-10 md:gap-24">
          <ul className="flex flex-col">
            <span className="font-text font-semibold mb-2">Página Inicial</span>
            <li className="flex flex-col gap-1.5">
              <a>Home</a>
              <a>Clientes</a>
              <a>Sobre</a>
              <a>Casos</a>
              <a>Contato</a>
            </li>
          </ul>

          <ul className="flex flex-col">
            <span className="font-text font-semibold mb-2">Casos</span>
            <li className="flex flex-col gap-1.5">
              <a>Consumidor</a>
              <a>Empresarial</a>
              <a>Tributário</a>
            </li>
          </ul>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-400 flex flex-col md:flex-row md: justify-between lg:items-center gap-5">
          <span>
            <Link href="/" className="p-1">
              <span className="flex items-center gap-3 text-lg font-heading font-medium text-primaryGray">
                <FaBalanceScale fontSize={22} />
                Bruce Wayne
              </span>
            </Link>
          </span>

          <Text className="text-sm text-center lg:text-left">
            Copyright Nelson Carvalho. Todos os direitos reservados. 2022
          </Text>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
