import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/games`
});

export const createGame = async (player) => {
  return await api.post('/', { player });
};

export const getCurrentGame = async () => {
  return await api.get('/');
};

export const playTurn = async (positions) => {
  return await api.put('/', { positions });
};
