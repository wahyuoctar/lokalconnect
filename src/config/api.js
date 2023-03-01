import axios from 'axios';
import Cookies from 'js-cookie';
import { decryptBro } from 'utils/helper';
import { verify } from 'jsonwebtoken';

export const API_URL = 'http://localhost:2000/v1/';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get(process.env.APPNAME);
  if (token) {
    const decrypted = decryptBro(process.env.APPKEY, token);
    verify(decrypted, process.env.APPKEY);
    // console.log(cek);
    config.headers.Authorization = 'Bearer ' + decrypted;
  }
  return config;
});

export default axiosInstance;
