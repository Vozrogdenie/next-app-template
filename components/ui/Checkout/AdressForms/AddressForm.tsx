import { Box, Flex, Text, TextInput, NativeSelect, Textarea, Button } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './AddressForm.module.scss';
import { useRouter } from 'next/navigation';
import FormPay from '../FormPay/FormPay';

const AddressForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    country: '',
    town: '',
    postcode: '',
    phone: '',
    email: '',
    stockOption: '',
    aboutUs: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const storedData = Object.keys(formData).reduce((acc, key) => {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        acc[key] = storedValue;
      }
      return acc;
    }, {});

    setFormData((prevData) => ({
      ...prevData,
      ...storedData,
    }));
  }, []);

  const handleChange = (name, value) => {
    if (name === 'phone') {
      value = value.replace(/\D/g, '');
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    localStorage.setItem(name, value);
  };

  const onSubmit = () => {
    Object.keys(formData).forEach((key) => localStorage.removeItem(key));

    setFormData({
      firstName: '',
      lastName: '',
      city: '',
      country: '',
      town: '',
      postcode: '',
      phone: '',
      email: '',
      stockOption: '',
      aboutUs: '',
    });
    router.push('/');
  };

  return (
    <Flex>
      <Box className={styles.shopping} w={686}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Text mb={32}>Shipping</Text>
          <Flex>
            <Box className={styles.form} mb={32}>
              <Flex justify="center" align="center" mb={20}>
                <Box>
                  <TextInput
                    {...register('firstName', { required: true })}
                    value={formData.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    label="First Name *"
                    w="50%"
                    mr={20}
                  />
                  {errors.firstName && <Text color="red">First Name is required</Text>}
                </Box>
                <Box>
                  <TextInput
                    {...register('lastName', { required: true })}
                    value={formData.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    label="Last Name *"
                    w="50%"
                  />
                  {errors.lastName && <Text color="red">Last Name is required</Text>}
                </Box>
              </Flex>
              <Box>
                <NativeSelect
                  {...register('city', { required: true })}
                  value={formData.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  label="City *"
                  data={['Moscow', 'S-Petersburg', 'Bali', 'Italy']}
                  mb={20}
                  w="100%"
                />
                {errors.city && <Text color="red">City is required</Text>}
              </Box>
              <Box mb={20}>
                <TextInput
                  {...register('country', { required: true })}
                  value={formData.country}
                  onChange={(e) => handleChange('country', e.target.value)}
                  label="Country / Region *"
                  placeholder="House number and street name"
                  w="100%"
                />
                {errors.country && <Text color="red">Country / Region is required</Text>}
              </Box>
              <Flex align="center" mb={20}>
                <Box>
                  <TextInput
                    {...register('town', { required: true })}
                    value={formData.town}
                    onChange={(e) => handleChange('town', e.target.value)}
                    label="Town / City *"
                    w="50%"
                    mr={20}
                  />
                  {errors.town && <Text color="red">Town / City is required</Text>}
                </Box>
                <Box>
                  <TextInput
                    {...register('postcode', {
                      required: true,
                      pattern: /^[0-9]+$/,
                    })}
                    value={formData.postcode}
                    onChange={(e) => handleChange('postcode', e.target.value)}
                    label="Postcode / ZIP *"
                    w="50%"
                  />
                  {errors.postcode && <Text color="red">Postcode / ZIP must be numeric</Text>}
                </Box>
              </Flex>
              <Flex align="center">
                <Box>
                  <TextInput
                    {...register('phone', {
                      required: true,
                      pattern: /^[7][0-9]{10}$/,
                    })}
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    label="Phone (optional)"
                    w="50%"
                    mr={20}
                  />
                  {errors.phone && (
                    <Text color="red">Phone must be a valid Russian phone number</Text>
                  )}
                </Box>
                <Box>
                  <TextInput
                    {...register('email', {
                      required: true,
                      pattern:
                        /^(?=[a-zA-Z0-9])[a-zA-Z0-9._%+-]*@[a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9.-]*\.[a-zA-Z]{2,}$/,
                    })}
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    label="Email address *"
                    w="50%"
                  />
                  {errors.email && <Text color="red">Email must be a valid email address</Text>}
                </Box>
              </Flex>
              <Box>
                <>
                  <NativeSelect
                    {...register('stockOption', { required: true })}
                    value={formData.stockOption}
                    onChange={(e) => handleChange('stockOption', e.target.value)}
                    label="What would you like us to do if an Item is out of Stock?"
                    data={['Contact me (With delay)', 'G-mail', 'Mail', 'TG']}
                    mb={20}
                    w="100%"
                  />
                  {errors.stockOption && <Text color="red">Stock Option is required</Text>}
                </>
                <Textarea
                  {...register('aboutUs')}
                  value={formData.aboutUs}
                  onChange={(e) => handleChange('aboutUs', e.target.value)}
                  label="Where did you hear About Us?"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  w="100%"
                />{' '}
              </Box>
            </Box>

            <FormPay onSubmit={onSubmit} />
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default AddressForm;
