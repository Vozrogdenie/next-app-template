import { Title, Text, Anchor, Box, Input } from '@mantine/core';
import styles from './InstagramBlock.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { imagesSlider } from '@/components/constants/imagesSlider';

export const InstagramBlock = () => {
  return (
    // <Box className={styles.instagramBlock} maw={1500} m="auto" mb={60}>
    //   <Image src="/instagram.png" alt="instagram" width={368} height={64} />
    //   <Box display="flex" className={styles.content} w="70%">
    //     <Carousel
    //       slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
    //       slideGap={{ base: 0, sm: 'md' }}
    //       loop
    //       align="start"
    //     >
    //       {imagesSlider.map((i) => {
    //         return (
    //           <Carousel.Slide mr={10} w={280}>
    //             <Image src={i.image} alt={i.alt} height={280} width={280}></Image>
    //             <Box fz={14} mt={10} className={styles.box}>
    //               {i.alt}
    //             </Box>
    //           </Carousel.Slide>
    //         );
    //       })}
    //     </Carousel>
    //   </Box>

    <Box maw={1500} m="auto" mb={60} className={styles.instagramBlock}>
      <Image src="/instagram.png" alt="instagram" width={368} height={64} />
      <Carousel dragFree slideSize="20%" slideGap="md" align="start" initialSlide={5} loop mt={17}>
        {imagesSlider.map((i) => {
          return (
            <Carousel.Slide mr={10} w={280}>
              <Image src={i.image} alt={i.alt} height={280} width={280}></Image>
              <Box fz={14} mt={10} className={styles.box} title={i.alt.length >= 35 ? i.alt : ''}>
                {i.alt.slice(0, 35).concat('...')}
              </Box>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Box>
  );
};
