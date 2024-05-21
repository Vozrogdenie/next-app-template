import {
  Button,
  Box,
  Flex,
  Text,
  Input,
  Checkbox,
  Switch,
  TextInput,
  NativeSelect,
  Textarea,
} from '@mantine/core';
import styles from './AdressForm.module.scss';
import { useState } from 'react';
import { checkoutHeader } from '@/components/constants/checkoutHeader';
import Image from 'next/image';

const AdressForm = () => {
  const [value, setValue] = useState('');

  return (
    <Box className={styles.shopping} w={686}>
      <Text mb={32}>Shipping</Text>
      <Box className={styles.form} mb={32}>
        <Flex justify={'center'} align={'center'} mb={20}>
          <TextInput label="First Name *" w={'50%'} mr={20} />
          <TextInput label="Last Name *" w={'50%'} />
        </Flex>
        <NativeSelect
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          data={['Moscow', 'S-Petersburg', 'Bali', 'Italy']}
          mb={20}
          w={'100%'}
        />
        <TextInput
          label="Country / Region *"
          placeholder="House number and street name"
          w={'100%'}
          mb={20}
        />
        <Flex justify={'center'} align={'center'} mb={20}>
          <TextInput label="Town / City *" w={'50%'} mr={20} />
          <TextInput label="Postcode / ZIP *" w={'50%'} />
        </Flex>
        <Flex justify={'center'} align={'center'}>
          <TextInput label="Phone (optional)" w={'50%'} mr={20} />
          <TextInput label="Email address *" w={'50%'} />
        </Flex>
      </Box>
      <Box>
        <NativeSelect
          label="What would you like us to do if an Item is out os Stock?"
          data={['Contact me (With delay)', 'G-mail', 'Mail', 'TG']}
          mb={20}
          w={'100%'}
        />
        <Textarea
          label="Where did you hear About Us?"
          placeholder="Notes about your order, e.g. special notes for delivery."
          w={'100%'}
        />
      </Box>
    </Box>
  );
};

export default AdressForm;
