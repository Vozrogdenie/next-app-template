import { Title, Text, Anchor, Box } from '@mantine/core';
import styles from './RunString.module.scss';
import { textForRunString } from '@/components/constants/textForRunString';
import { FC } from 'react';
import classNames from 'classnames';

type IRunString = {
  runString: any;
  mode?: boolean;
};

export const RunString: FC<IRunString> = ({ runString, mode}) => {
  return (
    <Box
      w="100%"
      display="flex"
      className={classNames(styles.header, { [styles.color]: mode })}
      h={40}
    >
      <Text fz={10} mr={100} w="100%" display="inline" className={styles.text}>
        {runString}
      </Text>
    </Box>
  );
};
