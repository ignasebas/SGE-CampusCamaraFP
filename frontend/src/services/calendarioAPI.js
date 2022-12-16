import axios from 'axios';

import { getApiUrl } from "./config";

export const getCalendario = () => {
    const ApiUrl = getApiUrl('/getAllCalendario')
    return axios.get(ApiUrl).then(res => res.data)
}

export const postCalendario = async (data) => {
  const apiUrl = getApiUrl('/postCalendario');
  const response = await axios.post(apiUrl, data);
  return response.data;
}

export const deleteCliente = async (id) => {
    const apiUrl = getApiUrl(`/deleteByIdCliente/${id}`);
    const response = await axios.delete(apiUrl);
    return response.data;
  }
  