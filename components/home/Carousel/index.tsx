import { Slide, Slider, SliderSettings } from '../../commons/Slider';
import { SlideContent } from './SlideContent';
import { CarouselSlideProps } from './types';

interface CarouselProps {
  carousel: {
    title: string;
    slides: CarouselSlideProps[];
  };
}

export const Carousel = ({ carousel }: CarouselProps) => {
  const { title, slides } = carousel;

  const sliderSettings: SliderSettings = {
    slidesPerView: 'auto',
    breakpoints: {
      300: {
        slidesPerView: 1.3,
        spaceBetween: 0,
      },
      400: {
        slidesPerView: 1.4,
      },
    },
    spaceBetween: 0,
    slideNextClass: 'swiper-slide-next-smaller',
  };

  return (
    <div className="text-white overflow-x-hidden nthxs:mt-10">
      <h3 className="text-center text-2xl uppercase">{title}</h3>
      <hr className="mx-auto w-36 mt-2 h-0.5 bg-white" />
      <div className="max-w-2xl mx-auto mt-2 nthxs:mt-8">
        <Slider settings={sliderSettings}>
          {slides.map((slide) => (
            <Slide key={slide.name} className="transition-all pt-8 md:pt-24 cursor-pointer">
              <SlideContent name={slide.name} bgColor={slide.bgColor} img={slide.img} />
            </Slide>
          ))}
        </Slider>
      </div>
    </div>
  );
};
