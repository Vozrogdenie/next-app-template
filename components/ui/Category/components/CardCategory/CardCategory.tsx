import { Text, Box } from '@mantine/core';
import Image from 'next/image';
import { FC } from 'react';
import styles from './CardCategory.module.scss';
import { IImages } from '@/store/types/header/header';

type CardProps = {
  card: IImages;
};

export const CardCategory: FC<CardProps> = ({ card }) => (
  <Box display="flex" className={styles.card} w={160}>
    <Image src={card.image} alt={card.alt} width={160} height={110} />
    <Text fz={20} mt={14}>
      {card.alt.slice(0, 10)}
    </Text>
  </Box>
);
