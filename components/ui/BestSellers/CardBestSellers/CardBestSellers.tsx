import { Title, Text, Anchor, Box, Button } from '@mantine/core';
import styles from './CardBestSellers.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { FC } from 'react';
import { IImages } from '@/components/type/heager/header';

type CardProps = {
  card: IImages;
};

export const CardBestSellers: FC<CardProps> = ({ card }) => {
  return (
    <Box className={styles.card} w={360} h={510} bg="rgba(240, 240, 240, 1)">
      <Box   p={20}>
        <Box display="flex" className={styles.text}>
          <Text fz={22} mb={5}>
            {card.alt.slice(0, 15)}
          </Text>
          <Text fz={14}>$90</Text>
        </Box>

        <Box display="flex" className={styles.review}>
          <Image src="/stars.png" width={75} height={13} alt="stars"></Image>
          <Text fz={14} ml={8}>263 Reviews</Text>
        </Box>
      </Box>
      <Image src={card.image} alt={card.alt} width={320} height={372} className={styles.image}/>

      <Button bg="FF6B18" w={260} m="auto">
        ADD TO CARD
      </Button>
    </Box>
  );
};
