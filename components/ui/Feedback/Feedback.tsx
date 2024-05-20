import { Text, Box, Input } from '@mantine/core';
import styles from './Feedback.module.scss';
import Image from 'next/image';

export const Feedback = () => {
  return (
    <Box className={styles.feedback} display="flex" m="auto" maw={1500} mb={60}>
      <Text w={320} mr={160} fz={37}>
        Friends let friends know about fresh products and news
      </Text>
      <Box display="flex" className={styles.content} w="70%">
        <Text className={styles.text} mb={10} maw={790}>
          'Sign up to receive 15% off your order, plus be the first to hear about new product
          releases, sales, and exclusive offers.'
        </Text>
        <Box display="flex" w="100%">
          <Input placeholder="YOUR EMAIL" w="100%" h={60} className={styles.input} />
          <Box className={styles.arrow}>
            <Image src="/arrow.png" alt="arrow" width={17} height={17} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
