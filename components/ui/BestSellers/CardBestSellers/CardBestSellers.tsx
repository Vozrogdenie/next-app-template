import { Text, Box, Button, Flex } from '@mantine/core';
import Image from 'next/image';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CardBestSellers.module.scss';
import { selectProducts } from '@/store/slice/products/product';
import { addToCard, selectCart } from '@/store/slice/cart/cartSlice';
import { IProducts } from '@/store/types/product/produtc';
import PriceButton from '../../components/PriceButton/PriceButton';

export const CardBestSellers: FC = () => {
  const cards = useSelector(selectProducts);
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const isProductInCart = (productId: number) =>
    cart.some((item: { id: number }) => item.id === productId);
  const getProductQuantity = (productId: number) => {
    const product = cart.find((item: { id: number }) => item.id === productId);
    return product ? product.quantity : 0;
  };

  const addProduct = (product: IProducts) => {
    dispatch(addToCard(product));
  };

  return (
    <>
      {cards?.products.slice(0, 8).map((i) => (
        <Box
          key={i.id}
          className={styles.card}
          display="flex"
          w={350}
          h={550}
          bg="rgba(240, 240, 240, 1)"
          p={20}
        >
          <Box mb={20}>
            <Box display="flex" className={styles.text}>
              <Text fz={22} mb={5}>
                {i.title.slice(0, 15)}
              </Text>
              <Text fz={14}>{i.price}$</Text>
            </Box>
            <Box display="flex" className={styles.review}>
              <Text mr={8}>{i.rating.rate}</Text>
              <Image src="/stars.png" width={75} height={13} alt="stars" />
              <Text fz={14} ml={8}>
                {i.rating.count} Reviews
              </Text>
            </Box>
          </Box>
          <Image src={i.image} alt={i.title} width={310} height={372} className={styles.image} />

          {isProductInCart(i.id) ? (
            <Flex justify="center">
              <PriceButton product={i} count={getProductQuantity(i.id)} />
            </Flex>
          ) : (
            <Button bg="#020D00" w="100%" m="auto" mt={20} onClick={() => addProduct(i)}>
              ADD TO CART
            </Button>
          )}
        </Box>
      ))}
    </>
  );
};
