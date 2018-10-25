import axios from 'axios';
import { domain } from '../config.json';

export default async (endpoint, data = {}) => {
  if (!endpoint) return null;
  const response = await axios({
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    url: `${domain}/${endpoint}`,
    data
  });
  return response ? response.data : null;
};
