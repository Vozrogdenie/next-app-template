'use client';

import { Box } from '@mantine/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Welcome.module.scss';
import { Header } from '../../ui/Header/Header';
import '../../assets/index.scss';
import { Slider } from '../../ui/Slider/Slider';
import { Category } from '../../ui/Category/Category';
import { BestSellers } from '../../ui/BestSellers/BestSellers';
import { SliderText } from '../../ui/SliderText/SliderText';
import { SlideVideo } from '../../ui/SliderVideo/SliderVideo';
import { Feedback } from '../../ui/Feedback/Feedback';
import { InstagramBlock } from '../../ui/InstagramBlock/InstagramBlock';
import { Footer } from '../../ui/Footer/Footer';
import { setProducts } from '@/store/slice/products/product';
import { RunString } from '@/components/ui/RunString/RunString';

export const Welcome = (products: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(products));
  }, [products]);

  return (
    <>
      <RunString></RunString>
      <Header />
      <Box className={styles.main}>
        <Slider />
        <Category />
        <BestSellers />
        <SliderText />
        <SlideVideo />
        <Feedback />
        <InstagramBlock />
        <Footer />
      </Box>
    </>
  );
};
