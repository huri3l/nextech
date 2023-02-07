import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const trackScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', trackScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', trackScroll);
    };
  }, []);

  return {
    scrollPosition,
    scrollToTop,
  };
};
