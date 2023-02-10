import Image from 'next/image';
import { useScroll } from '../../../hooks/useScroll';

interface ScrollToTopButtonProps {
  scrollToTop: () => void;
}

export const ScrollAux = () => {
  const { scrollPosition, scrollToTop } = useScroll();

  if (scrollPosition === 0) return <ScrolldownIndicator />;

  if (scrollPosition > 400) return <ScrollToTopButton scrollToTop={scrollToTop} />;

  return null;
};

const ScrollToTopButton = ({ scrollToTop }: ScrollToTopButtonProps) => {
  return (
    <button onClick={scrollToTop} className="fixed bottom-18 right-0 mb-4 mr-6 p-2 z-20 w-10 h-10">
      <Image
        src="/assets/chevron-circle-up.svg"
        alt="Clique para navegar ao topo da página"
        fill
        className="bg-nth-gray-900 rounded-full"
      />
    </button>
  );
};

const ScrolldownIndicator = () => {
  return (
    <div className="absolute bottom-16 right-0 pb-4 pr-4 w-20 h-20">
      <Image
        src="/assets/scrolldown.svg"
        alt="Ícone indicando para navegar a página para baixo"
        fill
        className="animate-bounce"
      />
    </div>
  );
};
