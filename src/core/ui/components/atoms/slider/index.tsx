import React, { forwardRef } from 'react';
import Instance, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderAsAny = Instance as any;

type ISlider = Settings & {
  currentSlide?: number;
};

export const Slider = forwardRef<any, ISlider>(({ children, ...props }, ref): any => (
  <SliderAsAny {...props} ref={ref}>
    {children}
  </SliderAsAny>
));
