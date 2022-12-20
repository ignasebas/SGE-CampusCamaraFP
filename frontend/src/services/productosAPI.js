import axios from 'axios';

import { getApiUrl } from "./config";

export const getProductos = () => {
    const apiUrl = getApiUrl('/getAllProducto')
    return axios.get(apiUrl).then(res => res.data)
}

export const postProducto = async (data) => {
  const apiUrl = getApiUrl('/postProducto');
  const response = await axios.post(apiUrl, data);
  return response.data;
}

export const updateProducto = async (id) => {
  const apiUrl = getApiUrl(`/updateByIdProducto/${id}`)
  const response = await axios.patch(apiUrl, id);
  return response.data;
}

export const deleteProducto = async (id) => {
  const apiUrl = getApiUrl(`/deleteByIdProducto/${id}`);
  const response = await axios.delete(apiUrl, id);
  return response.data;
}