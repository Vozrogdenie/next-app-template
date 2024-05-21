import { Button, Box, Flex, Image } from '@mantine/core';
import styles from './ButtonCheckoutHeader.module.scss';
import { FC, useState } from 'react';

interface Checkout {
  name: string;
  img?: any;
}

const ButtonCheckoutHeader: FC<Checkout> = ({ name }) => {
  return (
    <Flex>
      <Image src={''}></Image>
      <Button>{name}</Button>
    </Flex>
  );
};

export default ButtonCheckoutHeader;
