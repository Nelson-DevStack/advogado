import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <h1>Home Page</h1> */}
        <Hero />
      </main>
    </>
  );
};

export default Home;
