import { Layout } from '../components/commons/Layout';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import '../styles/swiper.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
