import Image from 'next/image';
import { Carousel } from '@mantine/carousel';
import styles from './Slider.module.scss';
import '@mantine/carousel/styles.css';
import { imagesSlider } from '@/components/constants/imagesSlider';

export const Slider = () => (
    <Carousel height={600} slideSize="100%" loop align="center" mah={800} mb={60} maw={1500} m="auto">
      {imagesSlider.map((i) => (
          <Carousel.Slide>
            <Image src={i.image} alt={i.alt} fill className={styles.image} objectFit="cover" />
          </Carousel.Slide>
        ))}
    </Carousel>
  );
