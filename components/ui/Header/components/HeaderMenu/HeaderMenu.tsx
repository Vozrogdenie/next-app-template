import { Text, Box, Button } from '@mantine/core';
import dynamic from 'next/dynamic';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '@/store/slice/cart/cartSlice';

type HederPros = {
  menu: string;
};
const MiniCart = dynamic(() => import('@/components/ui/MiniCart/MiniCart'), { ssr: false });

export const HeaderMenu: FC<HederPros> = ({ menu }) => {
  const [open, setOpen] = useState(false);
  const cart = useSelector(selectCart);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0) ;
  return (
    <>
      <Box display="flex">
        {menu === 'Cart' ? (
          <Button
            onClick={() => {
              setOpen(!open);
            }}
          >
            {menu} ({totalQuantity})
          </Button>
        ) : (
          <Text mr={36}>{menu}</Text>
        )}
      </Box>
      {open && <MiniCart openn={open} />}
    </>
  );
};
