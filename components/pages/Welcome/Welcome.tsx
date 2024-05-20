'use client';
import { Text, Box } from '@mantine/core';
import styles from './Welcome.module.css';
import { Header } from '../../ui/Header/Header';
import '../assets/index.scss';
import { Slider } from '../../ui/Slider/Slider';
import { Category } from '../../ui/Category/Category';
import { BestSellers } from '../../ui/BestSellers/BestSellers';
import { SliderText } from '../../ui/SliderText/SliderText';
import { SlideVideo } from '../../ui/SliderVideo/SliderVideo';
import { Feedback } from '../../ui/Feedback/Feedback';
import { InstagramBlock } from '../../ui/InstagramBlock/InstagramBlock';
import { Footer } from '../../ui/Footer/Footer';
import { textForRunString } from '../../constants/textForRunString';

export function Welcome() {
  return (
    <>
      <Box className={styles.main}>
        {textForRunString
          .map((i) => {
            return (
              <Box w="100%" display="flex" bg="blue">
                <Text fz={10} mr={100} w="100%" display="inline" className={styles.text}>
                  {i.name}
                </Text>
              </Box>
            );
          })
          .slice(0, 1)}
        <Header />
        <Slider />
        <Category />
        <BestSellers />
        <SliderText />
      </Box>
      <SlideVideo />
      <Box className={styles.main}>
        <Feedback />
      </Box>
      <InstagramBlock />
      <Box className={styles.main}>
        <Footer />
      </Box>
    </>
  );
}
