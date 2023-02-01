import Image from 'next/image';

export const ScrolldownIndicator = () => {
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
