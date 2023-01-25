import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Carousel } from '../components/Home/Carousel';
import { Header } from '../components/Home/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NexTech</title>
      </Head>
      <Header />
      <main>
        <Carousel />
        <Image
          src="/assets/scrolldown.svg"
          alt="Ícone indicando para navegar a página para baixo"
          width={5}
          height={5}
        />
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
