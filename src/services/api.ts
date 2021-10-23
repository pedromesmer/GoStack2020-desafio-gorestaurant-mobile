import axios from 'axios';

const api = axios.create({
  baseURL: 'https://0b94-189-124-210-182.ngrok.io',
});

export default api;
