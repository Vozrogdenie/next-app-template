'use client';

import { Box, Text } from '@mantine/core';
import { textForRunString } from '../../constants/textForRunString';
import { Footer } from '../../ui/Footer/Footer';
import { Header } from '../../ui/Header/Header';
import styles from './Checkout.module.scss';

export function Checkout() {
  return (
    <>
      <Box className={styles.main}>
        {textForRunString
          .map((i) => {
            return (
              <Box w="100%" display="flex" bg="blue">
                <Text fz={10} mr={100} w="100%" display="inline" className={styles.text}>
                  {i.name}
                </Text>
              </Box>
            );
          })
          .slice(0, 1)}
        <Header />
        <Box className={styles.main}>
          <Footer />
        </Box>
      </Box>
    </>
  );
}
