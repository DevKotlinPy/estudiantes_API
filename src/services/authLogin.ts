import axios from "axios";
import { setAuthToken } from "../state/auth";

const API_URL = 'https://api.zamorano.edu/estdatos/auth';

interface LoginResponse {
  token: string;
};

export const login = async (username: string, password: string): Promise<void> => {
    try {
      const response = await axios.post<LoginResponse>(`${API_URL}/token`, {
        username,
        password,
      });
      
      // Guardar el token en localStorage
      setAuthToken(response.data.token);
    } catch (error) {
      console.error('Error during login', error);
      throw error;
    }
  };