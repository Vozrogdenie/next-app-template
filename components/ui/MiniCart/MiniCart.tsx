import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Drawer, Button, Text, Box,  Flex } from '@mantine/core';
import styles from './MiniCart.module.scss';
import Image from 'next/image';
import PriceButton from '../components/PriceButton/PriceButton';
import { useRouter } from 'next/navigation'

const Minicart = ({ openn }) => {
  const [opened, close] = useDisclosure(openn);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const router = useRouter()

  return (
    <Drawer
      size={isMobile ? '90%' : "50%"}
      className={styles.drawer}
      opened={opened}
      onClose={close.close}
      title="Your cart"
      position={isMobile ? 'bottom' : 'right'}
    >
      <Box className={styles.box} mb={20}>
        <Box display={'flex'}>
          <Image width={56} height={56} src={''} alt="" />
          <Box className={styles.text} ml={16}>
            <Text fz={16} c={'#05422C'} mb={2}>
              gggggggggggggggggg
            </Text>
            <Box display={'flex'} color="#9D9EA2" mb={16}>
              <Text mr={12}>2x</Text> <Text>price</Text>
            </Box>
            <PriceButton />
          </Box>
        </Box>
        <Box className={styles.price}>
          <Button className={styles.icon} title="Delete product">
            <Image width={28} height={28} src="/close.svg" alt=""></Image>
          </Button>
          <Text>245$</Text>
        </Box>
      </Box>

      <Box className={styles.box} mb={20}>
        <Box display={'flex'}>
          <Image width={56} height={56} src={''} alt="" />
          <Box className={styles.text} ml={16}>
            <Text fz={16} c={'#05422C'} mb={2}>
              gggggggggggggggggg
            </Text>
            <Box display={'flex'} color="#9D9EA2" mb={16}>
              <Text mr={12}>2x</Text> <Text>price</Text>
            </Box>
            <PriceButton />
          </Box>
        </Box>
        <Box className={styles.price}>
          <Button className={styles.icon} title="Delete product">
            <Image width={28} height={28} src="/close.svg" alt=""></Image>
          </Button>
          <Text>245$</Text>
        </Box>
      </Box>

      <Flex mb={20} justify="space-between" className={styles.box}>
        <Text c="black">Total:</Text>
        <Text c="red">$245</Text>
      </Flex>
      <Box className={styles.box} mb={20}>
        <Button bg="green" radius={50} onClick={() => router.push('/checkout')} title='Go to checkout'>
          Checkout
        </Button>
      </Box>
      <Box>
        <Text mb={16}>SECURE PAYMENTS PROVIDED BY</Text>
        <Image src="/payCard.svg" width={260} height={32} alt=""></Image>
      </Box>
    </Drawer>
  );
};

export default Minicart;
