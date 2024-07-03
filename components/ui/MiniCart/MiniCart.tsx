import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Drawer, Button, Text, Box, Flex } from '@mantine/core';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import PriceButton from '../components/PriceButton/PriceButton';
import styles from './MiniCart.module.scss';
import { selectCart } from '@/store/slice/cart/cartSlice';

const Minicart = ({ openn }) => {
  const [opened, close] = useDisclosure(openn);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const router = useRouter();
  const cart = useSelector(selectCart);
  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <>
      <Drawer
        size={isMobile ? '90%' : '50%'}
        className={styles.drawer}
        opened={opened}
        onClose={close.close}
        title="Your cart"
        position={isMobile ? 'bottom' : 'right'}
      >
        {cart.map((i) => (
          <Box className={styles.box} mb={20}>
            <Box display="flex">
              <Image width={56} height={56} src={i.image} alt={i.title} />
              <Box className={styles.text} ml={16}>
                <Text fz={16} c="#05422C" mb={2}>
                  {i.title}
                </Text>
                <Box display="flex" color="#9D9EA2" mb={16}>
                  <Text mr={12}>{i.quantity}x</Text> <Text>price</Text>
                </Box>
                <PriceButton count={i.quantity} product={i} />
              </Box>
            </Box>
            <Box className={styles.price}>
              <Button className={styles.icon} title="Delete product">
                <Image width={28} height={28} src="/close.svg" alt=""></Image>
              </Button>
              <Text>{i.quantity * i.price}$</Text>
            </Box>
          </Box>
        ))}
        <Flex mb={20} justify="space-between" className={styles.box}>
          <Text c="black">Total:</Text>
          <Text c="red">${totalPrice}</Text>
        </Flex>
        <Box className={styles.box} mb={20}>
          <Button
            bg="green"
            radius={50}
            onClick={() => router.push('/checkout')}
            title="Go to checkout"
          >
            Checkout
          </Button>
        </Box>
        <Box>
          <Text mb={16}>SECURE PAYMENTS PROVIDED BY</Text>
          <Image src="/payCard.svg" width={260} height={32} alt=""></Image>
        </Box>
      </Drawer>
    </>
  );
};

export default Minicart;
