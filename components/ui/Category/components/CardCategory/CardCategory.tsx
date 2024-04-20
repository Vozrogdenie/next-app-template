import { Title, Text, Anchor, Box } from '@mantine/core';
import styles from './CardCategory.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { FC } from 'react';
import { IImages } from '@/components/type/heager/header';

type CardProps = {
  card: IImages;
};

export const CardCategory: FC<CardProps> = ({ card }) => {
  return (
    <Box display="flex" className={styles.card} w={172} mr={20}>
      <Image src={card.image} alt={card.alt} width={172} height={110} />
      <Text fz={20} mt={14}>
        {card.alt.slice(0, 10)}
      </Text>
    </Box>
  );
};
