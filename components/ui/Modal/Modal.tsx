import { useState } from 'react';
import { Box, Button, Flex, Input, Modal, Text } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalsLogin, setLogin } from '@/store/slice/modals/modals';
import { setAuth } from '@/store/slice/auth/auth';

const Modals = () => {
  const open = useSelector(selectModalsLogin);
  const dispatch = useDispatch();
  const [isRegister, setIsRegister] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(setAuth(data));
    dispatch(setLogin(false));
  };

  const toggleForm = () => setIsRegister(!isRegister);

  return (
    <Modal
      opened={open}
      onClose={() => dispatch(setLogin(false))}
      title={isRegister ? 'Регистрация' : 'Вход'}
      centered
      overlayProps={{
        backgroundOpacity: 0.1,
      }}
      mb={25}
      fz={14}
      radius={30}
      w={375}
      h={627}
      styles={{
        body: { width: 273, padding: 0 },
        content: { padding: 80, width: 458, overflowX: 'hidden', background: 'white' },
        header: { width: 273, padding: 0 },
      }}
    >
      <Box w={273} p={0}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box style={{ overflowY: 'auto', height: isRegister ? 245 : 125 }}>
            {isRegister && (
              <>
                <Input
                  styles={{ input: { background: '#F5F5F5' } }}
                  h={40}
                  mb={errors.firstName ? 0 : 9}
                  type="text"
                  placeholder="Имя"
                  {...register('firstName', {
                    required: 'Имя обязательно',
                    maxLength: { value: 80, message: 'Максимальная длина 80 символов' },
                  })}
                />
                {errors.firstName && (
                  <Text mb={9} color="red">
                    {String(errors.firstName.message)}
                  </Text>
                )}
                <Input
                  styles={{ input: { background: '#F5F5F5' } }}
                  h={40}
                  mb={errors.lastName ? 0 : 9}
                  type="text"
                  placeholder="Фамилия"
                  {...register('lastName', {
                    required: 'Фамилия обязательна',
                    maxLength: { value: 100, message: 'Максимальная длина 100 символов' },
                  })}
                />
                {errors.lastName && (
                  <Text mb={9} color="red">
                    {String(errors.lastName.message)}
                  </Text>
                )}
              </>
            )}
            <Input
              styles={{ input: { background: '#F5F5F5' } }}
              h={40}
              mb={errors.email ? 0 : 9}
              type="email"
              placeholder="Email"
              {...register('email', {
                required: 'Email обязателен',
                pattern: { value: /^\S+@\S+$/i, message: 'Введите правильный email' },
              })}
            />
            {errors.email && (
              <Text mb={9} color="red">
                {String(errors.email.message)}
              </Text>
            )}
            <Input
              styles={{ input: { background: '#F5F5F5' } }}
              h={40}
              mb={errors.password ? 0 : 9}
              type="password"
              placeholder="Пароль"
              {...register('password', {
                required: 'Пароль обязателен',
                minLength: { value: 6, message: 'Минимальная длина 6 символов' },
              })}
            />
            {errors.password && (
              <Text mb={9} color="red">
                {String(errors.password.message)}
              </Text>
            )}
            {isRegister && (
              <Input
                styles={{ input: { background: '#F5F5F5' } }}
                h={40}
                mb={errors.confirmPassword ? 0 : 9}
                type="password"
                placeholder="Подтвердите пароль"
                {...register('confirmPassword', {
                  required: 'Подтверждение пароля обязательно',
                  validate: (value) => value === watch('password') || 'Пароли не совпадают',
                })}
              />
            )}
            {errors.confirmPassword && (
              <Text mb={9} color="red">
                {String(errors.confirmPassword.message)}
              </Text>
            )}
          </Box>
          <Flex mt={37} align="center" direction="column">
            <Button type="submit" mb={30} color="#4CAF50" w={273} h={40}>
              {isRegister ? 'Регистрация' : 'Вход'}
            </Button>
            <Button type="button" c="black" bg="transparent" onClick={toggleForm}>
              {isRegister ? 'Вход' : 'Регистрация'}
            </Button>
          </Flex>
        </form>
      </Box>
    </Modal>
  );
};

export default Modals;
