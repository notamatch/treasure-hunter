import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/games`
});

export const createGame = async (player) => {
  return await api.post('/', { player });
};
