import { useScroll } from '../../../hooks/useScroll';

interface HeaderProps {
  dynamic?: boolean;
}

export const Header = ({ dynamic }: HeaderProps) => {
  if (dynamic) return <DynamicHeader />;

  return <SimpleHeader />;
};

const DynamicHeader = () => {
  const { isScrolled } = useScroll();

  return (
    <header className="sticky top-0 z-20 pb-2 flex flex-col items-center bg-nth-gray-900 text-white uppercase transition-all">
      <h1
        className={`transition-all ${
          !isScrolled ? 'font-bold mt-12 nth2xs:text-5xl nthxs:text-6xl' : 'font-bold my-2 text-4xl'
        }`}
      >
        NexTech
      </h1>
      <h2
        className={`font-light nth2xs:text-md nthxs:text-lg ${isScrolled ? 'hidden' : 'visible'}`}
      >
        Tecnologia de Ponta
      </h2>
    </header>
  );
};

const SimpleHeader = () => {
  return (
    <header className="sticky top-0 z-20 pb-2 flex flex-col items-center bg-nth-gray-900 text-white uppercase transition-all">
      <h1 className="font-bold my-2 text-4xl">NexTech</h1>
    </header>
  );
};
