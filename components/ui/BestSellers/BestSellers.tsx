import { Title, Text, Anchor, Box } from '@mantine/core';
import styles from './BestSellers.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { FC } from 'react';
import { IImages } from '@/components/type/heager/header';
import { CardBestSellers } from './CardBestSellers/CardBestSellers';
import { imagesSlider } from '@/components/constants/imagesSlider';

export const BestSellers = () => {
  return (
    <Box display="flex" className={styles.card} m='auto'>
      {imagesSlider.map((i) => {
        return <CardBestSellers card={i} />;
      }).slice(0,8)}
    </Box>
  );
};
