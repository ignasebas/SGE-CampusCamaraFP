import axios from 'axios';

import { getApiUrl } from "./config";

export const getCompras = () => {
    const ApiUrl = getApiUrl('/getAllCompra')
    return axios.get(ApiUrl).then(res => res.data)
}

export const postCompras = async (data) => {
  const apiUrl = getApiUrl('/postCompra');
  const response = await axios.post(apiUrl, data);
  return response.data;
}

//No se pueden eliminar ni modificar las compras.