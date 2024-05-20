import { Text, Box, Button } from '@mantine/core';
import dynamic from 'next/dynamic';
import { FC, useState } from 'react';

type HederPros = {
  menu: string;
};
const MiniCart = dynamic(() => import('@/components/ui/MiniCart/MiniCart'), { ssr: false });

export const HeaderMenu: FC<HederPros> = ({ menu }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box display="flex">
        {menu == 'Cart' ? (
          <Button
            onClick={() => {
              setOpen(!open);
            }}
          >
            {menu}
          </Button>
        ) : (
          <Text mr={36}>{menu}</Text>
        )}
      </Box>
      {open && <MiniCart openn={open} />}
    </>
  );
};
