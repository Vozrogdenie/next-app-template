import { Text, Box } from '@mantine/core';
import { FC } from 'react';

type HederPros = {
  menu: string;
};

export const HeaderMenu: FC<HederPros> = ({ menu }) => {
  return (
    <Box display="flex">
      <Text mr={36}>{menu}</Text>
    </Box>
  );
};
