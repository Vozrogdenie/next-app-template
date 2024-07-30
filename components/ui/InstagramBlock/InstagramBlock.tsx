import { Box } from '@mantine/core';
import Image from 'next/image';
import { Carousel } from '@mantine/carousel';
import styles from './InstagramBlock.module.scss';
import '@mantine/carousel/styles.css';
import { imagesSlider } from '@/components/constants/imagesSlider';

export const InstagramBlock = () => (
  <Box maw={1500} m="auto" mb={60} className={styles.instagramBlock}>
    <Image src="/instagram.png" alt="instagram" width={368} height={64} className={styles.img} />
    <Carousel dragFree slideSize="20%" slideGap="md" align="start" initialSlide={5} loop mt={17}>
      {imagesSlider.map((i) => (
        <Carousel.Slide mr={10} w={280}>
          <Image src={i.image} alt={i.alt} height={280} width={280}></Image>
          <Box fz={14} mt={10} className={styles.box} title={i.alt.length >= 35 ? i.alt : ''}>
            {i.alt.slice(0, 35).concat('...')}
          </Box>
        </Carousel.Slide>
      ))}
    </Carousel>
  </Box>
);
