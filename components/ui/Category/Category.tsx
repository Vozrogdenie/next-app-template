import { Text, Box } from '@mantine/core';
import styles from './Category.module.scss';
import { imagesSlider } from '@/components/constants/imagesSlider';
import { CardCategory } from './components/CardCategory/CardCategory';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

export function Category() {
  return (
    <Box className={styles.category} m="auto" mb={60}>
      <Text mb={20} fz={40}>Shop by product</Text>

      <Carousel slideSize={{ base: '100%', sm: '50%', md: '200' }} align="start">
        {imagesSlider.map((i) => {
          return (
            <Carousel.Slide>
              <Box display="flex" w={200}>
                <CardCategory card={i} />
              </Box>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Box>
  );
}
