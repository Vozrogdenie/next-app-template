import { Title, Text, Anchor, Box } from '@mantine/core';
import styles from './RunString.module.scss';
import { textForRunString } from '@/components/constants/textForRunString';

export function RunString() {
  return (
    <Box bg="blue" w="100%" display="flex" className={styles.header}>
      {textForRunString.map((i) => {
        return (
          <Text fz={10} mr={100} w="100%" display="inline" className={styles.text}>
            {i.name}
          </Text>
        );
      })}
    </Box>
  );
}
