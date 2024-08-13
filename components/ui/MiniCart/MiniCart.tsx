import { useMediaQuery } from '@mantine/hooks';
import { Drawer, Button, Text, Box, Flex } from '@mantine/core';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import PriceButton from '../components/PriceButton/PriceButton';
import styles from './MiniCart.module.scss';
import { selectCart } from '@/store/slice/cart/cartSlice';
import { selectModalsCart, setCart } from '@/store/slice/modals/modals';
import { ICart } from '@/store/types/cart/cart';

const Minicart = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const router = useRouter();
  const cart = useSelector(selectCart);
  const totalPrice = cart.reduce(
    (acc: number, item: { quantity: number; price: number }) => acc + item.quantity * item.price,
    0
  );
  const open = useSelector(selectModalsCart);
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(setCart(false));
    router.push('/checkout');
  };

  return (
    <>
      <Drawer
        size={isMobile ? '90%' : '50%'}
        className={styles.drawer}
        opened={open}
        onClose={() => dispatch(setCart(!open))}
        title="Your cart"
        position={isMobile ? 'bottom' : 'right'}
      >
        {cart.map((i: ICart) => (
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
          <Button bg="green" radius={50} onClick={handleCart} title="Go to checkout">
            Checkout
          </Button>
        </Box>
        <Box mb={44}>
          <Text mb={16}>SECURE PAYMENTS PROVIDED BY</Text>
          <Image src="/payCard.svg" width={260} height={32} alt=""></Image>
        </Box>
      </Drawer>
    </>
  );
};

export default Minicart;
