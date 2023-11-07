import React from "react";
import { Slider } from "src/components";
import useSlider from "src/hooks/useSlider";

// import { Container } from './styles';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function SliderContainer() {
  const { banners } = useSlider();
  return <Slider slickProps={settings} banners={banners} />;
}

export default SliderContainer;
