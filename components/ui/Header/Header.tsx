import { useState, useEffect } from 'react';
import { Box, Button, Flex, Text } from '@mantine/core';
import Image from 'next/image';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import styles from './Header.module.scss';
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';
import { headerMenu, headerMenuLeft } from '@/components/constants/headerMenu';
import { selectCart } from '@/store/slice/cart/cartSlice';
import {
  selectModalsCart,
  selectModalsLogin,
  setCart,
  setLogin,
} from '@/store/slice/modals/modals';

const MiniCart = dynamic(() => import('@/components/ui/MiniCart/MiniCart'), { ssr: false });
const Modals = dynamic(() => import('@/components/ui/Modal/Modal'), { ssr: false });

export function Header() {
  const cart = useSelector(selectCart);
  const totalQuantity = cart.reduce(
    (sum: number, item: { quantity: number }) => sum + item.quantity,
    0
  );
  const dispatch = useDispatch();
  const [auth, setAuth] = useState<string | null>(null);
  const cartOpen = useSelector(selectModalsCart);
  const loginOpen = useSelector(selectModalsLogin);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setAuth(localStorage.getItem('auth'));
  }, []);

  useEffect(() => {
    setAuth(localStorage.getItem('auth'));
  }, [loginOpen]);

  const toggleOpen = (type: string) => {
    if (type === 'cart') {
      dispatch(setCart(!cartOpen));
    } else if (type === 'login') {
      dispatch(setLogin(!loginOpen));
    }
  };

  const removeAuth = () => {
    localStorage.removeItem('auth');
    setAuth(null);
  };

  return (
    <>
      <Box
        bg="rgba(240, 240, 240, 1)"
        w="100%"
        className={cn(styles.header, 'padding', scroll > 1 ? styles.headerTrans : styles.header)}
      >
        <Box display="flex">
          {headerMenu.map((i) => (
            <HeaderMenu key={i.name} menu={i.name} />
          ))}
        </Box>
        <Image src="/logotip.svg" width={89} height={70} alt="logo" />
        <Flex align="center">
          {headerMenuLeft.map((i) => (
            <HeaderMenu key={i.name} menu={i.name} />
          ))}
          {!auth ? (
            <Button variant="transparent" color="black" onClick={() => toggleOpen('login')}>
              <Text mr={36}>Login</Text>
            </Button>
          ) : (
            <Button variant="transparent" color="black" onClick={removeAuth}>
              <Text mr={36}>Log out of profile</Text>
            </Button>
          )}
          <Button variant="transparent" color="black" onClick={() => toggleOpen('cart')}>
            Cart ({totalQuantity})
          </Button>
        </Flex>
      </Box>
      <Box
        bg="rgba(240, 240, 240, 1)"
        w="100%"
        className={cn(styles.mobile, 'padding', scroll > 1 ? styles.headerTrans : styles.header)}
        maw={1500}
        m="auto"
      >
        {!auth ? (
          <Button variant="transparent" color="black" onClick={() => toggleOpen('login')}>
            <Text mr={36}>Login</Text>
          </Button>
        ) : (
          <Button variant="transparent" color="black" onClick={removeAuth}>
            <Text mr={36}>Log out of profile</Text>
          </Button>
        )}
        <Image src="/logotip.svg" width={89} height={70} alt="logo" />
        <Flex align="center">
          <Button variant="transparent" color="black" onClick={() => toggleOpen('cart')}>
            Cart ({totalQuantity})
          </Button>
        </Flex>
      </Box>
      {cartOpen && <MiniCart />}
      {loginOpen && <Modals />}
    </>
  );
}
