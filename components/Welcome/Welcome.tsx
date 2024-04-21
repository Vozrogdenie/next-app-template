'use client';
import { Title, Text, Anchor, Box } from '@mantine/core';
import classes from './Welcome.module.css';
import { RunString } from '../ui/RunString/RunString';
import { Header } from '../ui/Header/Header';
import '../assets/index.scss';
import { Slider } from '../ui/Slider/Slider';
import { Category } from '../ui/Category/Category';
import { BestSellers } from '../ui/BestSellers/BestSellers';
import { SliderText } from '../ui/SliderText/SliderText';
import { SlideVideo } from '../ui/SliderVideo/SliderVideo';
import { Feedback } from '../ui/Feedback/Feedback';
import { InstagramBlock } from '../ui/InstagramBlock/InstagramBlock';
import { Footer } from '../ui/Footer/Footer';

export function Welcome() {
  return (
    <>
      <Header />
      <Slider />
      <Category />
      <BestSellers />
      <SliderText />
      <SlideVideo />
      <Feedback />
      <InstagramBlock />
      <Footer />
    </>
  );
}
