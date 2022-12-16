import axios from 'axios';

import { getApiUrl } from "./config";



export const getEmpleados = () => {
    const ApiUrl = getApiUrl('/getAllCliente')
    return axios.get(ApiUrl).then(res => res.data)
}

export const postCliente = async (data) => {
  const apiUrl = getApiUrl('/postCliente');
  const response = await axios.post(apiUrl, data);
  return response.data;
}

export const deleteCliente = async (id) => {
    const apiUrl = getApiUrl(`/deleteByIdCliente/${id}`);
    const response = await axios.delete(apiUrl);
    return response.data;
  }
  