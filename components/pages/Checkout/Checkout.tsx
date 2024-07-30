'use client';

import { Box, Flex, Text } from '@mantine/core';
import { textForRunString } from '../../constants/textForRunString';
import { Header } from '../../ui/Header/Header';
import styles from './Checkout.module.scss';
import AddressForm from '@/components/ui/Checkout/AdressForms/AddressForm';

export function Checkout() {
  return (
    <>
      {textForRunString
        .map((i) => (
          <Box w="100%" display="flex" bg="blue">
            <Text fz={10} mr={100} w="100%" display="inline" className={styles.text}>
              {i.name}
            </Text>
          </Box>
        ))
        .slice(0, 1)}
      <Header />
      <Box className={styles.main}>
        <Flex justify="space-evenly">
          <AddressForm />
        </Flex>
      </Box>
    </>
  );
}
