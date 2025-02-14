import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
});

interface AuthResponse {
  mensaje: string;
  token?: string;
}

export const login = async (username: string, password: string): Promise<AuthResponse> => {
  const response = await API.post('/login', { username, password });
  return response.data;
};

export const register = async (username: string, password: string): Promise<AuthResponse> => {
  const response = await API.post('/register', { username, password });
  return response.data;
};
