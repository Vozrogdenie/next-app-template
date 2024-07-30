import { Text, Box } from '@mantine/core';
import { FC } from 'react';
import classNames from 'classnames';
import styles from './RunString.module.scss';

type IRunString = {
  runString: string;
  mode?: boolean;
};

export const RunString: FC<IRunString> = ({ runString, mode }) => (
  <Box className={classNames(styles.header, { [styles.color]: mode }, styles.itemsWrap)}>
    <Box className={classNames(styles.items, styles.marquee)}>
      <Text fz={10} className={classNames(styles.item)}>
        {runString}
      </Text>
    </Box>
  </Box>
);
