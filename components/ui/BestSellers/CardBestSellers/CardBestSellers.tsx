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
    <Box className={styles.card} display="flex" w={360} h={550} bg="rgba(240, 240, 240, 1)" p={20}>
      <Box mb={20}>
        <Box display="flex" className={styles.text}>
          <Text fz={22} mb={5}>
            {card.alt.slice(0, 15)}
          </Text>
          <Text fz={14}>$90</Text>
        </Box>

        <Box display="flex" className={styles.review}>
          <Image src="/stars.png" width={75} height={13} alt="stars"></Image>
          <Text fz={14} ml={8}>
            263 Reviews
          </Text>
        </Box>
      </Box>
      <Image src={card.image} alt={card.alt} width={320} height={372} className={styles.image} />

      <Button bg="rgba(255, 107, 24, 1)" w="100%" m="auto" mt={20}>
        ADD TO CARD
      </Button>
    </Box>
  );
};
