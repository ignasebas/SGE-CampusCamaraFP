import axios from 'axios';

import { getApiUrl } from "./config";

export const getProductos = () => {
    const ApiUrl = getApiUrl('/getAllProducto')
    return axios.get(ApiUrl).then(res => res.data)
}

export const postProducto = async (data) => {
  const apiUrl = getApiUrl('/postProducto');
  const response = await axios.post(apiUrl, data);
  return response.data;
}