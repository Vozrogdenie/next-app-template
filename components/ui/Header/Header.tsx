import { Box, Button, NavLink, Text } from '@mantine/core';
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
  const auth = localStorage.getItem('auth');
  const cartOpen = useSelector(selectModalsCart);
  const loginOpen = useSelector(selectModalsLogin);

  const toggleOpen = (type: 'cart' | 'login') => {
    if (type === 'cart') {
      dispatch(setCart(!cartOpen));
    } else if (type === 'login') {
      dispatch(setLogin(!loginOpen));
    }
  };

  const removeAuth = () => {
    localStorage.removeItem('auth');
  };

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
          {!auth ? (
            <Button onClick={() => toggleOpen('login')}>
              <Text mr={36}>Login</Text>
            </Button>
          ) : (
            <Button onClick={() => removeAuth()}>
              <Text mr={36}>Выйти из профиля</Text>
            </Button>
          )}
          <Button onClick={() => toggleOpen('cart')}>Cart ({totalQuantity})</Button>
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
        <HeaderMenu menu="Cart" />
      </Box>
      {cartOpen && <MiniCart />}
      {loginOpen && <Modals />}
    </>
  );
}
