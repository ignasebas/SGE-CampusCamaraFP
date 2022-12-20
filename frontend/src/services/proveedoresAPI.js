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

export const updateProveedor = async (id) => {
  const apiUrl = getApiUrl(`/updateByIdProveedor/${id}`)
  const response = await axios.patch(apiUrl, id);
  return response.data;
}

export const deleteProveedor = async (id) => {
  const apiUrl = getApiUrl(`/deleteByIdProveedor/${id}`);
  const response = await axios.delete(apiUrl, id);
  return response.data;
}