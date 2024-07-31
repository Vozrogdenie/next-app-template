import { Text, Box } from '@mantine/core';
import styles from './RunString.module.scss';
import { textForRunString } from '@/components/constants/textForRunString';

export const RunString = () => (
  <Box className={styles.marquee}>
    <Box className={styles.track}>
      {textForRunString.map((item, index) => (
        <Text key={index} className={styles.content}>
          {item.name}
        </Text>
      ))}
    </Box>
  </Box>
);
