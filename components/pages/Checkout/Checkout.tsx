'use client';

import { Box, Flex, Text } from '@mantine/core';
import { textForRunString } from '../../constants/textForRunString';
import { Header } from '../../ui/Header/Header';
import styles from './Checkout.module.scss';
import CheckoutHeader from '@/components/ui/Checkout/СheckoutHeader/CheckoutHeader';
import AddressForm from '@/components/ui/Checkout/AdressForms/AddressForm';

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
        <CheckoutHeader />
        <Flex justify={'space-evenly'}>
          <AddressForm />
        </Flex>
      </Box>
    </>
  );
}
