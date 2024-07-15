import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Flex, Text, NativeSelect, Textarea, TextInput } from '@mantine/core';
import { useRouter } from 'next/navigation';
import FormPay from '../FormPay/FormPay';

const AddressForm = () => {
  const router = useRouter();

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
      city: Yup.string().required('City is required'),
      country: Yup.string().required('Country / Region is required'),
      town: Yup.string().required('Town / City is required'),
      postcode: Yup.string()
        .matches(/^[0-9]+$/, 'Postcode / ZIP must be numeric')
        .required('Postcode / ZIP is required'),
      phone: Yup.string()
        .required('Phone is required')
        .matches(
          /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
          'Phone must be in the format +7 (000) 000-00-00'
        ),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      stockOption: Yup.string().required('Stock Option is required'),
      aboutUs: Yup.string(),
    }),
    onSubmit: (values) => {
      Object.keys(values).forEach((key) => localStorage.removeItem(key));
      router.push('/');
    },
  });

  return (
    <Flex maw={1200} w={'100%'} justify={'center'}>
      <Box w={'100%'}>
        <form onSubmit={formik.handleSubmit}>
          <Text mb={32}>Shipping</Text>
          <Flex>
            <Box mb={32} w={'100%'}>
              <Flex justify="center" align="center" mb={20}>
                <Box>
                  <TextInput
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label="First Name *"
                    w="50%"
                    mr={20}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <Text color="red">{formik.errors.firstName}</Text>
                  )}
                </Box>
                <Box>
                  <TextInput
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label="Last Name *"
                    w="50%"
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <Text color="red">{formik.errors.lastName}</Text>
                  )}
                </Box>
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
              <Flex align="center" mb={20}>
                <Box>
                  <TextInput
                    name="town"
                    value={formik.values.town}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label="Town / City *"
                    w="50%"
                    mr={20}
                  />
                  {formik.touched.town && formik.errors.town && (
                    <Text color="red">{formik.errors.town}</Text>
                  )}
                </Box>
                <Box>
                  <TextInput
                    name="postcode"
                    value={formik.values.postcode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label="Postcode / ZIP *"
                    w="50%"
                  />
                  {formik.touched.postcode && formik.errors.postcode && (
                    <Text color="red">{formik.errors.postcode}</Text>
                  )}
                </Box>
              </Flex>
              <Flex align="center">
                <Box>
                  <TextInput
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label="Phone (optional)"
                    w="50%"
                    mr={20}
                    placeholder="+7 (000) 000-00-00"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <Text color="red">{formik.errors.phone}</Text>
                  )}
                </Box>
                <Box>
                  <TextInput
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label="Email address *"
                    w="50%"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <Text color="red">{formik.errors.email}</Text>
                  )}
                </Box>
              </Flex>
              <Box>
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
