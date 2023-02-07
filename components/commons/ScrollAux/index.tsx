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
};

const ScrolldownIndicator = () => {
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
