import axios from 'axios';

import { getApiUrl } from "./config";

export const getClientes = () => {
    const ApiUrl = getApiUrl('/getAllCliente')
    return axios.get(ApiUrl).then(res => res.data)
}

export const postCliente = async (data) => {
  const apiUrl = getApiUrl('/postCliente');
  const response = await axios.post(apiUrl, data);
  return response.data;
}