import axios from 'axios';
import { getAuthToken } from '../state/auth';

///https://api.zamorano.edu/estdatos/auth/token?username=DesarrolloZamo&password=E4PZ.4p1s

const instance = axios.create({
    baseURL: 'https://api.zamorano.edu/estdatos/auth', // Base URL del microservicio
  });

  // Interceptor para agregar el token a las solicitudes
  instance.interceptors.request.use(
    (config) => {
      const token = getAuthToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
   export default instance;