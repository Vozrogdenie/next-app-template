import { Text, Box } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import styles from './Category.module.scss';
import { imagesSlider } from '@/components/constants/imagesSlider';
import { CardCategory } from './components/CardCategory/CardCategory';
import '@mantine/carousel/styles.css';

export function Category() {
  return (
    <Box className={styles.category} m="auto" mb={60}>
      <Text mb={20} fz={40}>
        Shop by product
      </Text>

      <Carousel slideSize="10%" slideGap="md" loop align="start" slidesToScroll={1}>
        {imagesSlider.map((i) => (
          <Carousel.Slide>
            <Box>
              <CardCategory card={i} />
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}
