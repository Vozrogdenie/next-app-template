import { Title, Text, Anchor, Box } from '@mantine/core';
import styles from './Header.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';
import { headerMenu, headerMenuLeft } from '@/components/constants/headerMenu';

export function Header() {
  return (
    <Box bg="grey" w="100%" display="flex" className={cn(styles.header, 'padding')}>
      <Box display="flex">
        {headerMenu.map((i) => {
          return <HeaderMenu menu={i.name} />;
        })}
      </Box>
      <Image src="/logo.png" width={89} height={70} alt="logo" />
      <Box display="flex">
        {headerMenuLeft.map((i) => {
          return <HeaderMenu menu={i.name} />;
        })}
      </Box>
    </Box>
  );
}
