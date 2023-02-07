import '../styles/globals.css';
import '../styles/swiper.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-nth-gray-900 min-h-full font-display">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
