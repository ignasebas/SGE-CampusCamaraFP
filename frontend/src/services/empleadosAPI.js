import axios from 'axios';

import { getApiUrl } from "./config";



export const getEmpleados = () => {
    const ApiUrl = getApiUrl('/getAllEmpleado')
    return axios.get(ApiUrl).then(res => res.data)
}

export const postEmpleados = async (data) => {
  const apiUrl = getApiUrl('/postEmpleado');
  const response = await axios.post(apiUrl, data);
  return response.data;
}

export const deleteEmpleados = async (id) => {
    const apiUrl = getApiUrl(`/updateByIdEmpleado/${id}`);
    const response = await axios.delete(apiUrl);
    return response.data;
  }

export const updateEmpleado = async (id) => {
  const apiUrl = getApiUrl(`/updateByIdEmpleado/${id}`)
  const response = await axios.patch(apiUrl, id);
  return response.data;
}