import { Button, Box } from '@mantine/core';
import styles from './PriceButton.module.scss';
import { useState } from 'react';

const PriceButton = () => {
  const [number, setNumber] = useState(1);
  return (
    <Box className={styles.price}>
      <Button
        w={36}
        h={36}
        color="white"
        onClick={() => setNumber((prev) => prev - 1)}
        disabled={number == 0}
      >
        -
      </Button>
      <Box w={36} h={36} bg="#F4F4F4">
        {number}
      </Box>
      <Button w={36} h={36} color="white" onClick={() => setNumber((prev) => prev + 1)}>
        +
      </Button>
    </Box>
  );
};

export default PriceButton;
