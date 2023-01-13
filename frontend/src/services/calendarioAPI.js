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

export const deleteCalendario = async (id) => {
  const apiUrl = getApiUrl(`/deleteByIdCalendario/${id}`);
  const response = await axios.delete(apiUrl);
  return response.data;
}

export const updateCalendario = async (id, data) => {
  const apiUrl = getApiUrl(`/updateByIdCalendario/${id}`);
  const response = await axios.patch(apiUrl, data);
  return response.data;
}