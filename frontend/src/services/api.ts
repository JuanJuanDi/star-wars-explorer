import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
  withCredentials: true, // Envia cookies en cada request
});


interface AuthResponse {
  mensaje: string;
  token?: string;
}

export const login = async (username: string, password: string): Promise<{ mensaje: string }> => {
  const response = await API.post('/login', { username, password });
  return response.data;
};

export const logout = async (): Promise<{ mensaje: string }> => {
  const response = await API.post('/logout');
  return response.data;
};

export const register = async (username: string, password: string): Promise<AuthResponse> => {
  const response = await API.post('/register', { username, password });
  return response.data;
};

// Interfaces para tipado correcto
interface Character {
  name: string;
  height: string;
  mass: string;
  gender: string;
  birth_year: string;
  skin_color: string;
}

interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
}

interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  crew: string;
  passengers: string;
}

interface Vehicle {
  name: string;
  model: string;
  manufacturer: string;
  crew: string;
  passengers: string;
}

interface Movie {
  title: string;
  director: string;
  producer: string;
  release_date: string;
}

interface SWAPIResponse<T> {
  results: T[];
  next?: string;
  previous?: string;
}

// Funciones para obtener datos de cada categoría 

export const getCharacters = async (page = 1): Promise<SWAPIResponse<Character> | null> => {
  try {
    const response = await API.get(`/people?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener personajes:', error);
    return null;
  }
};

export const getPlanets = async (page = 1): Promise<SWAPIResponse<Planet> | null> => {
  try {
    const response = await API.get(`/planets?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener planetas:', error);
    return null;
  }
};

export const getStarships = async (page = 1): Promise<SWAPIResponse<Starship> | null> => {
  try {
    const response = await API.get(`/starships?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener naves espaciales:', error);
    return null;
  }
};

export const getVehicles = async (page = 1): Promise<SWAPIResponse<Vehicle> | null> => {
  try {
    const response = await API.get(`/vehicles?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener vehículos:', error);
    return null;
  }
};

export const getMovies = async (): Promise<SWAPIResponse<Movie> | null> => {
  try {
    const response = await API.get(`/films`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener películas:', error);
    return null;
  }
};
