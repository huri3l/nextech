import Image from 'next/image';
import { useEffect, useState } from 'react';

export const ScrollAux = () => {
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

  if (scrollPosition > 400) {
    return (
      <button onClick={scrollToTop} className="fixed bottom-0 right-0 mb-4 mr-4 p-2 z-20">
        <Image
          src="/assets/chevron-circle-up.svg"
          alt="Clique para navegar ao topo da página"
          width={40}
          height={5}
          className="bg-nth-gray-900 rounded-full"
        />
      </button>
    );
  }

  if (scrollPosition > 0) return null;

  return (
    <div className="absolute bottom-0 right-0 pb-4 pr-4">
      <Image
        src="/assets/scrolldown.svg"
        alt="Ícone indicando para navegar a página para baixo"
        width={40}
        height={5}
        className="animate-bounce"
      />
    </div>
  );
};
