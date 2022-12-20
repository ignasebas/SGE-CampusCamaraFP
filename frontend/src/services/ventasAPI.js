import axios from 'axios';

import { getApiUrl } from "./config";

export const getVentas = () => {
    const ApiUrl = getApiUrl('/getAllVenta')
    return axios.get(ApiUrl).then(res => res.data)
}

export const postVentas = async (data) => {
  const apiUrl = getApiUrl('/postVenta');
  const response = await axios.post(apiUrl, data);
  return response.data;
}

//No se pueden eliminar ni modificar las ventas.