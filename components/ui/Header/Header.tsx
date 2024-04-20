import { Title, Text, Anchor, Box } from '@mantine/core';
import styles from './Header.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';
import { headerMenu, headerMenuLeft } from '@/components/constants/headerMenu';
import { RunString } from '../RunString/RunString';
import { textForRunString } from '@/components/constants/textForRunString';

export function Header() {
  return (
    <>
      {textForRunString
        .map((i) => {
          return <RunString runString={i.name} mode={false} />;
        })
        .slice(0, 1)}
      <Box bg="grey" w="100%" display="flex" className={cn(styles.header, 'padding')} maw={1500} m='auto'>
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
    </>
  );
}
