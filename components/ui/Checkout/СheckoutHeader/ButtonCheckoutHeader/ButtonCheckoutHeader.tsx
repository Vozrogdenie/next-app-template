import { Button, Flex, Image } from '@mantine/core';
import { FC } from 'react';

interface Checkout {
  name: string;
  img?: any;
}

const ButtonCheckoutHeader: FC<Checkout> = ({ name }) => (
  <Flex>
    <Image src=""></Image>
    <Button>{name}</Button>
  </Flex>
);

export default ButtonCheckoutHeader;
