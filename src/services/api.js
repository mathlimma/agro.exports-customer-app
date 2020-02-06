import axios from 'axios';

const api = axios.create({ baseURL: 'https://d62ef254.ngrok.io' });

export default api;
