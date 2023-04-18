import React, { ReactElement, useEffect, useRef, useState } from 'react';

import { ArrowOption, Container } from './styles';
import { Icon, Slider } from '@/core/ui/components/atoms';
import { randomId } from '@/core/utils';

export type ItemFilter = {
  id: string;
  label: string;
};

type IFilterCard = {
  items?: ItemFilter[];
  slideStarter: number;
  onChangeSlider: (sliderIndex: number) => void;
  backToInitialState?: () => void;
};

export const FilterCard = ({ items, slideStarter, onChangeSlider }: IFilterCard): ReactElement => {
  const [currentSlide, setCurrentSlide] = useState<number>(slideStarter);
  const sliderRef = useRef(null);
  const totalSlides = items.length;

  useEffect(() => {
    sliderRef.current.slickGoTo(currentSlide);
  }, [currentSlide]);

  useEffect(() => {
    setCurrentSlide(slideStarter);
  }, [slideStarter]);

  const handleNextSlide = (slide: number) => {
    const newIndex = slide >= totalSlides ? 0 : slide;
    setCurrentSlide(newIndex);
    onChangeSlider(newIndex);
  };

  const handlePreviousSlide = (slide: number) => {
    const newIndex = slide <= 0 ? totalSlides : slide;
    setCurrentSlide(newIndex);
    onChangeSlider(newIndex);
  };

  const handleMouseChange = (_, next: number) => {
    if (next !== currentSlide) {
      if (next > 1) {
        onChangeSlider(next);
        setCurrentSlide(next);
      }
    }
  };

  const settings = {
    dots: false,
    arrows: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    currentSlide,
    centerMode: true,
    centerPadding: '0px',
    beforeChange: handleMouseChange,
    swipe: false,
  };

  return (
    <Container>
      <ArrowOption side="left" aria-label="decrease" onClick={() => handlePreviousSlide(currentSlide - 1)}>
        <Icon icon="arrowLeft" color="primary" shade="500" />
      </ArrowOption>
      <div style={{ width: '80%' }}>
        <Slider {...settings} ref={sliderRef}>
          {items?.map(item => (
            <p key={randomId()}>{item.label}</p>
          ))}
        </Slider>
      </div>
      <ArrowOption side="right" aria-label="increase" onClick={() => handleNextSlide(currentSlide + 1)}>
        <Icon icon="arrowRight" color="primary" shade="500" />
      </ArrowOption>
    </Container>
  );
};
