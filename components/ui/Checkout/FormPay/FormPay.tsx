import React, { useState } from 'react';
import { Button, Box, Flex, Text, Input, Checkbox, Switch } from '@mantine/core';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import styles from './FormPay.module.scss';
import { selectCart } from '@/store/slice/cart/cartSlice';

const FormPay = ({ onSubmit, isValid }: { onSubmit: () => void; isValid: boolean }) => {
  const cart = useSelector(selectCart);
  const [usePoints, setUsePoints] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const totalPrice = cart.reduce(
    (acc: number, item: { quantity: number; price: number }) => acc + item.quantity * item.price,
    0
  );

  const handlePayment = () => {
    if (isValid) {
      onSubmit();
    }
  };

  const handleSwitchChange = () => {
    setUsePoints((prev) => !prev);
  };

  const handleApplyCoupon = () => {
    if (coupon === 'secret') {
      const discountAmount = totalPrice * 0.1;
      setDiscount(discountAmount);
    } else {
      setDiscount(0);
    }
  };

  const finalPrice = (usePoints ? totalPrice - 11 : totalPrice) - discount;

  return (
    <Box className={styles.formPay}>
      <Box>
        <Flex justify="space-between" pb={16}>
          <Text c="#9D9EA2">Subtotal</Text>
          <Text>${Math.round(totalPrice)}</Text>
        </Flex>
        <Flex justify="space-between" pb={20}>
          <Text c="#9D9EA2">Discount</Text>
          <Text>${Math.round(discount)}</Text>
        </Flex>
      </Box>
      <Flex mb={20} className={styles.allPrice}>
        <Input
          placeholder="Coupon code"
          value={coupon}
          onChange={(e) => setCoupon(e.currentTarget.value)}
        />
        <Button bg="#F3FBF4" radius={50} h={48} w={137} onClick={handleApplyCoupon}>
          <Text c="#17AF26">Apply Coupon</Text>
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
          c="#717378"
          label="Sign me up to receive email updates and news (optional)"
          mb={20}
        />
        <Flex className={styles.border} justify="space-between">
          <Flex align="center">
            <Image src="/iconPoint.svg" width={20} height={20} alt="" />
            <Flex ml={8} c="#9D9EA">
              Your points:
              <Text c="black" ml={5}>
                11
              </Text>
            </Flex>
          </Flex>
          <Switch checked={usePoints} onChange={handleSwitchChange} />
        </Flex>
        <Button
          bg={isValid ? 'green' : '#C8C9CB'}
          c="white"
          radius={50}
          w="100%"
          h={56}
          mb={20}
          onClick={handlePayment}
          disabled={!isValid}
        >
          Place Order | ${Math.round(finalPrice)}
        </Button>
      </Box>
      <Box>
        <Text mb={16}>SECURE PAYMENTS PROVIDED BY</Text>
        <Image src="/payCard.svg" width={260} height={66} alt="" />
      </Box>
    </Box>
  );
};

export default FormPay;
