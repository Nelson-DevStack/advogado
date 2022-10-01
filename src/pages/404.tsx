import Image from 'next/future/image';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';

import notfoundImg from '../assets/judge.png';
import Navbar from '../components/Navbar';
import Container from '../components/UI/Container';
import Subheading from '../components/UI/Subheading';
import Text from '../components/UI/Text';

// Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Bruce Wayne | Página não encontrada</title>
      </Head>

      <Navbar />
      <main className="w-full bg-secondaryColor w-full min-h-[calc(100vh_-_5rem)] flex items-center">
        <Container className="py-10">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <Subheading>404 | Essa página não foi encontrada</Subheading>
              <Text>Essa página que você acessou não foi encontrada</Text>

              <Link href="/">
                <button className="text-lg font-text text-primaryGray p-2 rounded-md border border-mainColor rounded-2xl mt-5 flex items-center gap-2 transition duration-400 hover:bg-mainColor hover:text-white">
                  <FaHome />
                  Página Inicial
                </button>
              </Link>
            </div>
            <div className="md:order-2 flex items-center justify-center">
              <Image
                src={notfoundImg}
                alt="Ilustração de Página Não Encontrada"
                className="max-w-sm mx-auto"
              />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default NotFoundPage;
