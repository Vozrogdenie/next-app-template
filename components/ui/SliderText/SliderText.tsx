import { Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import styles from './SliderText.module.scss';
import '@mantine/carousel/styles.css';
import { textForSliderText } from '@/components/constants/textForSlider';
import { useMediaQuery } from '@mantine/hooks';

export const SliderText = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <Carousel
      height={isMobile ? 'auto' : 400}
      align="center"
      slideSize="100%"
      loop
      pt={isMobile ? 60 : 0}
      mb={60}
      maw={1500}
      m="auto"
      display="flex"
      className={styles.text}
    >
      {textForSliderText.map((i) => (
        <Carousel.Slide>
          <Text className={styles.title}>{i.name}</Text>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
