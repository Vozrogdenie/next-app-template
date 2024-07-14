import { Text, Box, Button, Modal } from '@mantine/core';
import dynamic from 'next/dynamic';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '@/store/slice/cart/cartSlice';

type HeaderPros = {
  menu: string;
};

const MiniCart = dynamic(() => import('@/components/ui/MiniCart/MiniCart'), { ssr: false });

export const HeaderMenu: FC<HeaderPros> = ({ menu }) => {
  const [open, setOpen] = useState(false);
  const [openn, setOpenn] = useState(false);
  const cart = useSelector(selectCart);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleTogglee = () => {
    setOpenn(!openn);
  };
  return (
    <>
      <Box display="flex">
        {menu === 'Log in' ? (
          <Button onClick={handleTogglee}>
            <Text mr={36}>{menu}</Text>
          </Button>
        ) : menu === 'Cart' ? (
          <Button onClick={handleToggle}>
            {menu} ({totalQuantity})
          </Button>
        ) : (
          <Text mr={36}>{menu}</Text>
        )}
      </Box>
      {open && <MiniCart openn={open} />}
      {openn && <Modal opened={openn}/>}
    </>
  );
};
