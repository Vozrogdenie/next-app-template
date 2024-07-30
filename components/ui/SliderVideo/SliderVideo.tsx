import { Text, Box } from '@mantine/core';
import Image from 'next/image';
import { Carousel } from '@mantine/carousel';
import styles from './SliderVideo.module.scss';
import '@mantine/carousel/styles.css';
import { imagesSlider } from '@/components/constants/imagesSlider';

export const SlideVideo = () => (
  <Box maw={1500} m="auto" mb={60} className={styles.slides}>
    <Box display="flex" mb={50} className={styles.content}>
      <Text fz={37} className={styles.titleText}>
        Words of affirmation from our favorite humans.
      </Text>
      <Box className={styles.textSecret}>
        <Text fz={14}>shh...</Text>
        <Text fz={14}>secrets out</Text>
      </Box>
      <Box display="flex" className={styles.title}>
        <Text className={styles.text} fz={12}>
          In the good way, see more
        </Text>
        <Box className={styles.arrow}>
          <Image src="/arrow.png" alt="arrow" width={17} height={17} />
        </Box>
      </Box>
    </Box>
    <Carousel
      dragFree
      slideSize="20%"
      slideGap="md"
      height={550}
      initialSlide={5}
      loop
      align="start"
    >
      {imagesSlider.map((i) => (
        <Carousel.Slide h={550} w={260} mr={20}>
          <Image src={i.image} alt={i.alt} height={462} width={260}></Image>
          <Text fz={14} mt={10}>
            {i.alt}
          </Text>
        </Carousel.Slide>
      ))}
    </Carousel>
  </Box>
);
