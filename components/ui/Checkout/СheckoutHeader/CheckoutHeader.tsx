import { Flex } from '@mantine/core';
import ButtonCheckoutHeader from './ButtonCheckoutHeader/ButtonCheckoutHeader';
import { checkoutHeader } from '@/components/constants/checkoutHeader';

const CheckoutHeader = () => (
  <Flex p={24} justify="center">
    {checkoutHeader.map((i) => (
      <ButtonCheckoutHeader name={i.name} />
    ))}
  </Flex>
);

export default CheckoutHeader;
