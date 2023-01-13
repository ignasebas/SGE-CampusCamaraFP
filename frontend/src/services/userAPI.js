import axios from 'axios';

import { getApiUrl } from "./config";

export const getClientes = () => {
    const ApiUrl = getApiUrl('/getAllCliente')
    return axios.get(ApiUrl).then(res => res.data)
}

export const postUsuario = async (data) => {
  const apiUrl = getApiUrl('/postUser');
  const response = await axios.post(apiUrl, data);
  console.log(response)
  return response.data;
}

export const deleteCliente = async (id) => {
  const apiUrl = getApiUrl(`/deleteByIdCliente/${id}`);
  const response = await axios.delete(apiUrl);
  return response.data;
}
  
export const updateCliente = async (id, data) => {
  const apiUrl = getApiUrl(`/updateByIdCliente/${id}`);
  const response = await axios.patch(apiUrl, data);
  return response.data;
}
