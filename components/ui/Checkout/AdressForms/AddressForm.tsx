import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Flex, Text, NativeSelect, Textarea, TextInput } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from '@mantine/hooks';
import { useDispatch } from 'react-redux';
import FormPay from '../FormPay/FormPay';
import { clearCart } from '@/store/slice/cart/cartSlice';

const AddressForm = () => {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const formatPhoneNumber = (text: string) => {
    text = text.replace(/\D/g, '');

    if (text.length > 0) {
      let phone = '';

      if (['7', '8', '9'].includes(text[0])) {
        if (text[0] === '9') {
          text = `7${text}`;
        }

        const firstSymbols = text[0] === '8' ? '8' : '+7';
        phone = `${firstSymbols} `;

        if (text.length > 1) {
          phone += `(${text.substring(1, Math.min(text.length, 4))}`;
        }
        if (text.length >= 5) {
          phone += `) ${text.substring(4, Math.min(text.length, 7))}`;
        }
        if (text.length >= 8) {
          phone += `-${text.substring(7, Math.min(text.length, 9))}`;
        }
        if (text.length >= 10) {
          phone += `-${text.substring(9, Math.min(text.length, 11))}`;
        }
        return phone;
      }
      return `+${text}`;
    }
    return '';
  };

  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      city: Yup.string(),
      country: Yup.string().required('Country / Region is required'),
      town: Yup.string().required('Town / City is required'),
      postcode: Yup.string()
        .matches(/^[0-9]+$/, 'Postcode / ZIP must be numeric')
        .required('Postcode / ZIP is required'),
      phone: Yup.string()
        .required('Phone is required')
        .test('is-valid-phone', 'Phone must be in the format +7 (000) 000-00-00', (value) =>
          /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(formatPhoneNumber(value))
        ),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      stockOption: Yup.string(),
      aboutUs: Yup.string(),
    }),
    onSubmit: (values) => {
      Object.keys(values).forEach((key) => localStorage.removeItem(key));
      setShowAlert(true);
      localStorage.removeItem('cart');
      dispatch(clearCart());
      router.push('/');
    },
  });

  useEffect(() => {
    const savedValues = {};
    Object.keys(formik.initialValues).forEach((key) => {
      const savedValue = localStorage.getItem(key);
      if (savedValue) {
        savedValues[key] = savedValue;
      }
    });
    formik.setValues((prevValues) => ({ ...prevValues, ...savedValues }));
  }, []);

  useEffect(() => {
    Object.keys(formik.values).forEach((key) => {
      localStorage.setItem(key, formik.values[key]);
    });
  }, [formik.values]);

  const handlePhoneChange = (event) => {
    formik.setFieldValue('phone', formatPhoneNumber(event.target.value));
  };

  return (
    <Flex maw={1200} w="100%" justify="center" >
      <Box w="100%">
        <form onSubmit={formik.handleSubmit}>
          <Text mb={32}>Shipping</Text>
          <Flex direction={isMobile ? 'column' : 'row'} align={isMobile ? 'center' : ''}>
            <Box mb={32} w="100%">
              <Flex justify="center" align="center" mb={20}>
                <Flex direction="column" w="100%">
                  <TextInput
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label="First Name *"
                    w="90%"
                    mr={20}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <Text color="red">{formik.errors.firstName}</Text>
                  )}
                </Flex>
                <Flex direction="column" w="100%">
                  <TextInput
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label="Last Name *"
                    w="90%"
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <Text color="red">{formik.errors.lastName}</Text>
                  )}
                </Flex>
              </Flex>
              <Box>
                <NativeSelect
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label="City *"
                  data={['Moscow', 'S-Petersburg', 'Bali', 'Italy']}
                  mb={20}
                  w="100%"
                />
                {formik.touched.city && formik.errors.city && (
                  <Text color="red">{formik.errors.city}</Text>
                )}
              </Box>
              <Box mb={20}>
                <TextInput
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label="Country / Region *"
                  placeholder="House number and street name"
                  w="100%"
                />
                {formik.touched.country && formik.errors.country && (
                  <Text color="red">{formik.errors.country}</Text>
                )}
              </Box>
              <Flex align="center" mb={20} direction={isMobile ? 'column' : 'row'}>
                <Flex direction="column" w="100%">
                  <TextInput
                    name="town"
                    value={formik.values.town}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label="Town / City *"
                    w="90%"
                    mr={20}
                  />
                  {formik.touched.town && formik.errors.town && (
                    <Text color="red">{formik.errors.town}</Text>
                  )}
                </Flex>
                <Flex direction="column" w="100%" >
                  <TextInput
                    name="postcode"
                    value={formik.values.postcode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label="Postcode / ZIP *"
                    w="90%"
                  />
                  {formik.touched.postcode && formik.errors.postcode && (
                    <Text color="red">{formik.errors.postcode}</Text>
                  )}
                </Flex>
              </Flex>
              <Flex align="center">
                <Flex direction="column" w="100%">
                  <TextInput
                    name="phone"
                    value={formik.values.phone}
                    onChange={handlePhoneChange}
                    onBlur={formik.handleBlur}
                    label="Phone (optional)"
                    w="90%"
                    mr={20}
                    placeholder="+7 (000) 000-00-00"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <Text color="red">{formik.errors.phone}</Text>
                  )}
                </Flex>
                <Flex direction="column" w="100%">
                  <TextInput
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label="Email address *"
                    w="90%"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <Text color="red">{formik.errors.email}</Text>
                  )}
                </Flex>
              </Flex>
              <Box mt={20}>
                <NativeSelect
                  name="stockOption"
                  value={formik.values.stockOption}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label="What would you like us to do if an Item is out of Stock?"
                  data={['Contact me (With delay)', 'G-mail', 'Mail', 'TG']}
                  mb={20}
                  w="100%"
                />
                {formik.touched.stockOption && formik.errors.stockOption && (
                  <Text color="red">{formik.errors.stockOption}</Text>
                )}
                <Textarea
                  name="aboutUs"
                  value={formik.values.aboutUs}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label="Where did you hear About Us?"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  w="100%"
                />
              </Box>
            </Box>

            <FormPay onSubmit={formik.handleSubmit} isValid={formik.isValid} />
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default AddressForm;
