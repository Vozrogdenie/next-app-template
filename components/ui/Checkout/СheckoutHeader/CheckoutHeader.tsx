import { Button, Box, Flex } from '@mantine/core';
import styles from './CheckoutHeader.module.scss';
import { useState } from 'react';
import ButtonCheckoutHeader from './ButtonCheckoutHeader/ButtonCheckoutHeader';
import { checkoutHeader } from '@/components/constants/checkoutHeader';

const CheckoutHeader = () => {
  return (
    <Flex className={styles.header} p={24} justify='center'>
      {checkoutHeader.map((i) => {
        return <ButtonCheckoutHeader name={i.name} />;
      })}
    </Flex>
  );
};

export default CheckoutHeader;
