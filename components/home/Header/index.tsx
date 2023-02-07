import { useScroll } from '../../../hooks/useScroll';

interface HeaderProps {
  dynamic?: boolean;
}

export const Header = ({ dynamic }: HeaderProps) => {
  const { isScrolled } = useScroll();

  if (dynamic) {
    return (
      <header className="sticky top-0 z-20 pb-2 flex flex-col items-center bg-nth-gray-900 text-white uppercase">
        {!isScrolled ? <DefaultHeader /> : <SmallHeader />}
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-20 pb-2 flex flex-col items-center bg-nth-gray-900 text-white uppercase">
      <SmallHeader />
    </header>
  );
};

const DefaultHeader = () => {
  return (
    <>
      <h1 className="font-bold mt-12 nth2xs:text-5xl nthxs:text-6xl">NexTech</h1>
      <h2 className="font-light nth2xs:text-md nthxs:text-lg">Tecnologia de Ponta</h2>
    </>
  );
};

const SmallHeader = () => {
  return (
    <>
      <h1 className="font-bold my-2 text-4xl">NexTech</h1>
    </>
  );
};
