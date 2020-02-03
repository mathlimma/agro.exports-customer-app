import axios from 'axios';

const api = axios.create({ baseURL: 'http://10.21.23.123:3000' });

export default api;
