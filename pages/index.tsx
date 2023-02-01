import type { NextPage } from 'next';
import Head from 'next/head';
import { ScrolldownIndicator } from '../components/commons/ScrolldownIndicator';
import { Carousel } from '../components/home/Carousel';
import { Header } from '../components/home/Header';

import categories from '../tmp/categories.json';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NexTech</title>
      </Head>
      <Header />
      <main>
        {categories.map((category) => (
          <Carousel key={category.title} carousel={category} />
        ))}
        <ScrolldownIndicator />
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
