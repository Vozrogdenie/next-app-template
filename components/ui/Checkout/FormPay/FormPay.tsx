import { Button, Box, Flex, Text, Input, Checkbox, Switch } from '@mantine/core';
import styles from './FormPay.module.scss';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectCart } from '@/store/slice/cart/cartSlice';

const FormPay = ({ onSubmit }) => {
  const cart = useSelector(selectCart);
  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const handlePayment = () => {
    onSubmit();
  };
  return (
    <Box className={styles.formPay} w={420} p={24}>
      <Box>
        <Flex justify="space-between" pb={16}>
          <Text c={'#9D9EA2'}>Subtotal</Text>
          <Text>${totalPrice}</Text>
        </Flex>
        <Flex justify="space-between" pb={20}>
          <Text c={'#9D9EA2'}>Discount</Text>
          <Text>$0.0</Text>
        </Flex>
      </Box>
      <Flex mb={20} className={styles.allPrice}>
        <Input placeholder={'Coupon code'} />
        <Button bg={'#F3FBF4'} radius={50} h={48} w={137}>
          <Text c={'#17AF26'}>Apply Coupon</Text>
        </Button>
      </Flex>
      <Box>
        <Checkbox
          defaultChecked
          label="I confirm that my address is 100% correct and WILL NOT hold Top Shelf BC liable if this
            shipment is sent to an incorrect address."
          mb={20}
        />
        <Checkbox
          defaultChecked
          c={'#717378'}
          label="Sign me up to receive email updates and news (optional)"
          mb={20}
        />
        <Flex className={styles.border} justify={'space-between'}>
          <Flex align={'center'}>
            <Image src={'/iconPoint.svg'} width={20} height={20} alt="" />
            <Flex ml={8} c={'#9D9EA'}>
              Your point <Text c={'black'}> 11</Text>
            </Flex>
          </Flex>
          <Switch />
        </Flex>
        <Button
          bg={'green'}
          c={'white'}
          radius={50}
          w={'100%'}
          h={56}
          mb={20}
          onClick={handlePayment}
        >
          Place Order | ${totalPrice}
        </Button>
      </Box>
      <Box>
        <Text mb={16}>SECURE PAYMENTS PROVIDED BY</Text>
        <Image src="/payCard.svg" width={260} height={66} alt=""></Image>
      </Box>
    </Box>
  );
};

export default FormPay;
