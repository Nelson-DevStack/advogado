import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';

import CasesSection from '../components/CasesSection';
import ClientSection from '../components/ClientSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import SecondHero from '../components/SecondHero';
import SplashScreen from '../components/SplashScreen';

const Home: NextPage = () => {
  const timeout = 3;
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.body.style.overflow = 'visible';
    }, (timeout - 1) * 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Paulo Almeida | Advogado Especializado</title>
        <meta
          name="description"
          content="Advogado Especializado em Direito Consumidor, Direito Empresarial e Direito Tributário"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="013d37"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#013d37" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#f6f6f6" />
      </Head>

      <SplashScreen time={timeout} />
      <Navbar />

      <main>
        <Hero id="home" />
        <ClientSection id="clientes" />
        <SecondHero id="sobre" />
        <CasesSection id="casos" />
        <ContactSection id="contato" />
        <Footer />
      </main>
    </>
  );
};

export default Home;
