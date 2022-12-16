import axios from 'axios';

import { getApiUrl } from "./config";

export const getProveedores = () => {
    const ApiUrl = getApiUrl('/getAllProveedor')
    return axios.get(ApiUrl).then(res => res.data)
}

export const postProveedores = async (data) => {
  const apiUrl = getApiUrl('/postProveedor');
  const response = await axios.post(apiUrl, data);
  return response.data;
}