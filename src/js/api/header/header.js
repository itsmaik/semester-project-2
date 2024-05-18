import { storage } from '../../utils/storage/storage';
import { API_KEY } from '../../config/config';

export const fetchWithHeaders = async (url, method, body) => {
  const accessToken = storage.getItem('accessToken');

  const headers = {
    'Content-Type': 'application/json',
  };

  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
    headers['X-Noroff-API-Key'] = API_KEY;
  }
  const options = {
    method,
    headers,
    body: JSON.stringify(body),
  };
  const response = await fetch(url, options);

  const responseData = await response.json();
  return responseData;
};
