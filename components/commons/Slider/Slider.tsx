import { ReactNode } from 'react';
import { Swiper, SwiperProps } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SliderSettings extends SwiperProps {
  arrows?: boolean;
}

interface SliderProps {
  children: ReactNode;
  settings?: SliderSettings;
}

export const Slider = ({ children, settings }: SliderProps) => {
  let mergeSettings: SliderSettings = {
    navigation: true,
    pagination: {
      clickable: true,
      bulletClass: 'swiper-bullet',
      bulletActiveClass: 'swiper-bullet-active',
    },
    draggable: true,
    loop: true,
    ...settings,
  };

  if (!settings?.arrows) {
    mergeSettings.navigation = false;
  }

  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...mergeSettings}>
      {children}
    </Swiper>
  );
};

export type { SliderSettings };
