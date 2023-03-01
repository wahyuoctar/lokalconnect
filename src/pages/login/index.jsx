import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import axiosInstance from 'config/api';
import jsCookie from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { encryptBro, getCookie, handleSessions } from 'utils/helper';

export default function Login() {
  const dispatch = useDispatch();
  const authSelector = useSelector((state) => state.auth);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      credential: '',
      password: '',
    },
    // validationSchema: Yup.object().shape({
    //   credential: Yup.string()
    //     .required('Email or Username is required')
    //     .min(3, 'Email or Username must be at least 3 characters')
    //     .max(20, 'Email or Username must not exceed 20 characters'),
    //   password: Yup.string()
    //     .required('Password is required')
    //     .matches(
    //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
    //       'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    //     ),
    // }),
    onSubmit: async (values) => {
      // ini nanti bedasarkan fetchingan dari API, hrus ada alamat and no tlpon
      try {
        const res = await axiosInstance.post('auth/login', {
          username: values.credential,
          password: values.password,
        });

        const response = res.data.data;
        console.log(response);
        const token = encryptBro(process.env.APPKEY, response.accessToken);
        // console.log(token);

        jsCookie.set(process.env.APPNAME, token);
        router.push('/');
      } catch (err) {
        // eslint-disable-next-line no-console
        throw err;
      }
    },
    // validateOnChange: false,
  });

  // useEffect(() => {
  //   if (jsCookie.get(process.env.APPNAME)) {
  //     router.push('/');
  //   }
  // }, []);

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Box rounded={'lg'} bg="#2D3748" boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <form onSubmit={formik.handleSubmit}>
              <FormControl error={formik.errors.credential}>
                <FormLabel>Email address</FormLabel>
                <Input
                  onChange={(e) =>
                    formik.setFieldValue('credential', e.target.value)
                  }
                  value={formik.values.credential}
                />
              </FormControl>
              <FormControl error={formik.errors.password}>
                <FormLabel>Password</FormLabel>
                <Input
                  onChange={(e) =>
                    formik.setFieldValue('password', e.target.value)
                  }
                  value={formik.values.password}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  type="submit"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={formik.handleSubmit}
                  // disabled={formik.isSubmitting}
                >
                  Sign in
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export async function getServerSideProps(context) {
  const handleSession = await handleSessions(context, true);
  return handleSession;
}
