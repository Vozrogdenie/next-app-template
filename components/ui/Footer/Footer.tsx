import { Title, Text, Anchor, Box, Input, Grid } from '@mantine/core';
import styles from './Footer.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { imagesSlider } from '@/components/constants/imagesSlider';
import { textForFooter } from '@/components/constants/footer';

export const Footer = () => {
  return (
    <Box className={styles.instagramBlock} m="auto" maw={1500} mb={60} display="flex">
      <Box className={styles.head}>
        {textForFooter.map((i) => {
          return (
            <Box w="20%">
              <Grid mb={40}>
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                  <Text fz={20}>{i.head}</Text>
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                  <Text fz={17}>{i.name.map((i) => i)} </Text>{' '}
                </Grid.Col>
              </Grid>
            </Box>
          );
        })}
      </Box>
      <Box display="flex" className={styles.image}>
        <Image src="/logo.png" width={150} height={120} alt="logo" />
      </Box>
    </Box>
  );
};
