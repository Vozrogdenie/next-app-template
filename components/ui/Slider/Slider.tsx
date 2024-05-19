import { Title, Text, Anchor, Box } from '@mantine/core';
import styles from './Slider.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { imagesSlider } from '@/components/constants/imagesSlider';

export const Slider = () => {
  return (
    <Carousel height={600} slideSize="100%" loop align="center" mah={800} mb={60} maw={1500} m='auto'>
      {imagesSlider.map((i) => {
        return (
          <Carousel.Slide>
            <Image src={i.image} alt={i.alt} fill className={styles.image} objectFit='cover'/>
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
};
