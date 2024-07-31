import { Text, Box } from '@mantine/core';
import classNames from 'classnames';
import styles from './RunString.module.scss';
import { textForRunString } from '@/components/constants/textForRunString';

export const RunString = () => (
  <Box className={classNames(styles.marquee)}>
    <Box className={classNames(styles.track)}>
      {textForRunString.map((item, index) => (
        <Text key={index} className={styles.content}>
          {item.name}
        </Text>
      ))}
    </Box>
  </Box>
);
