import { Flex } from '@mantine/core';
import styles from './CheckoutHeader.module.scss';
import ButtonCheckoutHeader from './ButtonCheckoutHeader/ButtonCheckoutHeader';
import { checkoutHeader } from '@/components/constants/checkoutHeader';

const CheckoutHeader = () => (
    <Flex className={styles.header} p={24} justify="center">
      {checkoutHeader.map((i) => <ButtonCheckoutHeader name={i.name} />)}
    </Flex>
  );

export default CheckoutHeader;
