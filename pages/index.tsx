import type { NextPage } from 'next';
import Head from 'next/head';
import { ScrollAux } from '../components/commons/ScrollAux';
import { Carousel } from '../components/home/Carousel';
import { Footer } from '../components/home/Footer';
import { Header } from '../components/home/Header';

import categories from '../tmp/categories.json';
import footerContent from '../tmp/footer.json';

const Home: NextPage = () => {
  return (
    <div className="space-y-10">
      <Head>
        <title>NexTech</title>
      </Head>
      <Header />
      <main>
        {categories.map((category) => (
          <Carousel key={category.title} carousel={category} />
        ))}
        <ScrollAux />
      </main>
      <Footer content={footerContent} />
    </div>
  );
};

export default Home;
