import { Box, NavLink } from '@mantine/core';
import styles from './Header.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';
import { headerMenu, headerMenuLeft } from '@/components/constants/headerMenu';

export function Header() {
  return (
    <>
      <Box
        bg="rgba(240, 240, 240, 1)"
        w="100%"
        className={cn(styles.header, 'padding')}
        maw={1500}
        m="auto"
      >
        <Box display="flex">
          {headerMenu.map((i) => (
            <HeaderMenu menu={i.name} />
          ))}
        </Box>
        <Image src="/logo.png" width={89} height={70} alt="logo" />
        <Box display="flex">
          {headerMenuLeft.map((i) => (
            <HeaderMenu menu={i.name} />
          ))}
        </Box>
      </Box>
      <Box
        bg="rgba(240, 240, 240, 1)"
        w="100%"
        className={cn(styles.mobile, 'padding')}
        maw={1500}
        m="auto"
      >
        <Box maw={100}>
          <NavLink
            href="#required-for-focus"
            label="Menu"
            w={100}
            childrenOffset={28}
            className={styles.menu}
            h={30}
          >
            <NavLink label="Shop" href="#required-for-focus" />
            <NavLink label="Bundles" href="#required-for-focus" />
            <NavLink label="Quiz" href="#required-for-focus" />
          </NavLink>
        </Box>
        <Image src="/logo.png" width={89} height={70} alt="logo" />
        <HeaderMenu menu={'Cart'} />
      </Box>
    </>
  );
}
