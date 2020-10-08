import axios from 'axios';
import service from './service';
import { getApiUrl } from '../utils/getApiUrl';

export default {
  checkAuth: () => service.get(getApiUrl('auth/check')),
  login: async (role, username, password) => axios.post(`http://localhost:8000/api/${role}/login`, { username, password }),
  loginClient: async (phone) => axios.post(`http://localhost:8000/api/client/login`, {phone}),
  codeClient: async (phone, code) => axios.post(`http://localhost:8000/api/client/code`, { phone, code }),
  logout: async () => {
    const resp = await service.post(getApiUrl('auth/logout'));
    return resp.status === 200;
  },
};
