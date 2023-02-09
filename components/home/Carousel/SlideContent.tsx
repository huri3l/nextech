import Image from 'next/image';
import { CarouselSlideProps } from './types';

export const SlideContent = ({ name, img, bgColor }: CarouselSlideProps) => {
  return (
    <div className="w-48 h-80 nthxs:w-52 nthxs:h-104 mx-auto">
      <div
        className="h-64 w-48 nthxs:h-80 nthxs:w-56 absolute rounded-2xl"
        style={{ backgroundColor: bgColor }}
      />
      <div className="relative h-full">
        <Image
          className="object-cover overflow-visible top-1/2 left-1/2 transform -translate-x-10 -translate-y-14 nthxs:-translate-x-8 nthxs:-translate-y-20"
          src={img.url}
          alt={img.alt}
          priority
          fill
          sizes="(max-width: 200px) 100vw, (max-width: 300px ) 50vw"
        />
      </div>
      <h4 className="text-center font-bold drop-shadow-md uppercase text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {name}
      </h4>
    </div>
  );
};
