import { Title, Text, Anchor, Box } from '@mantine/core';
import styles from './BestSellers.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { CardBestSellers } from './CardBestSellers/CardBestSellers';
import { imagesSlider } from '@/components/constants/imagesSlider';
import { RunString } from '../RunString/RunString';
import { textForRunString } from '@/components/constants/textForRunString';

export const BestSellers = () => {
  return (
    <Box className={styles.sellers} m="auto" mb={60}>
      <Box display="flex" className={styles.title} mb={20}>
        <Text fz={70}>Our best sellers</Text>
        <Text className={styles.text}>shop the internet's fav smells</Text>
        <Box className={styles.arrow}>
          <Image src="/arrow.png" alt="arrow" width={17} height={17} />
        </Box>
      </Box>
      <Box display="flex" className={styles.card} m="auto">
        {imagesSlider
          .map((i) => {
            return <CardBestSellers card={i} />;
          })
          .slice(0, 4)}
      </Box>
      {textForRunString
        .map((i) => {
          return <RunString runString={i.name} mode={true} />;
        })
        .slice(0, 1)}
      <Box display="flex" className={styles.card} m="auto">
        {imagesSlider
          .map((i) => {
            return <CardBestSellers card={i} />;
          })
          .slice(4, 8)}
      </Box>
    </Box>
  );
};
