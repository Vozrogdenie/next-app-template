import { Text, Box } from '@mantine/core';
import Image from 'next/image';
import styles from './Footer.module.scss';
import '@mantine/carousel/styles.css';
import { textForFooter } from '@/components/constants/footer';

export const Footer = () => (
  <Box className={styles.instagramBlock} m="auto" maw={1500} mb={30} display="flex">
    <Box className={styles.head}>
      {textForFooter.map((i) => (
        <Box w={160} className={styles.text}>
          <Text fz={20} className={styles.headText}>
            {i.head}
          </Text>
          <Text
            fz={17}
            dangerouslySetInnerHTML={{
              __html: i.name.map((e) => e).join(''),
            }}
          >
          </Text>
        </Box>
      ))}
    </Box>
    <Box display="flex" className={styles.image}>
      <Image src="/logotip.svg" width={150} height={120} alt="logo" />
    </Box>
  </Box>
);
