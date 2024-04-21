import { Title, Text, Anchor, Box } from '@mantine/core';
import styles from './SliderText.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { imagesSlider } from '@/components/constants/imagesSlider';
import { textForSliderText } from '@/components/constants/textForSlider';

export const SliderText = () => {
  return (
    <Carousel
      height={400}
      align="center"
      slideSize="100%"
      loop
      mb={60}
      maw={1500}
      m="auto"
      display="flex"
      className={styles.text}
    >
      {textForSliderText.map((i) => {
        return (
          <Carousel.Slide>
            <Text fz={40} >{i.name}</Text>
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
};
