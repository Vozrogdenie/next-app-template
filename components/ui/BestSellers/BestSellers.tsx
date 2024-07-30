import { Text, Box } from '@mantine/core';
import Image from 'next/image';
import styles from './BestSellers.module.scss';
import { CardBestSellers } from './CardBestSellers/CardBestSellers';

export const BestSellers = () => (
  <Box className={styles.sellers} m="auto" mb={60}>
    <Box display="flex" className={styles.title} mb={20}>
      <Text fz={70} className={styles.titleText}>Our best sellers</Text>
      <Text className={styles.text}>shop the internets fav smells</Text>
      <Box className={styles.arrow}>
        <Image src="/arrow.png" alt="arrow" width={17} height={17} />
      </Box>
    </Box>
    <Box display="flex" className={styles.card} m="0 -20px">
      <CardBestSellers />
    </Box>
  </Box>
);
