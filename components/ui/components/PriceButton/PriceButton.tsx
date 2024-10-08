import { Button, Box } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { FC } from 'react';
import styles from './PriceButton.module.scss';
import { addQuantity, remQuantity, removeFromCart } from '@/store/slice/cart/cartSlice';
import { ICart } from '@/store/types/cart/cart';

interface PriceButtonProps {
  product: ICart;
  count: number;
}

const PriceButton: FC<PriceButtonProps> = ({ product, count }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addQuantity(product.id));
  };

  const handleRemove = () => {
    if (count > 1) {
      dispatch(remQuantity(product.id));
    } else {
      dispatch(removeFromCart(product.id));
    }
  };

  return (
    <Box className={styles.price}>
      <Button w={36} h={36} color="white" onClick={handleRemove}>
        -
      </Button>
      <Box w={36} h={36} bg="#F4F4F4" display="flex">
        {count}
      </Box>
      <Button w={36} h={36} color="white" onClick={handleAdd}>
        +
      </Button>
    </Box>
  );
};

export default PriceButton;
