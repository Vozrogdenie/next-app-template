import { Text, Box } from '@mantine/core';
import { FC } from 'react';

type HeaderPros = {
  menu: string;
};

export const HeaderMenu: FC<HeaderPros> = ({ menu }) => (
  <Box display="flex">
    <Text mr={36}>{menu}</Text>
  </Box>
);
