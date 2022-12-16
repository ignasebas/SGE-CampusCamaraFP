import axios from 'axios';

import { getApiUrl } from "./config";

export const getClientes = () => {
    const ApiUrl = getApiUrl('/getAllCliente')
    return axios.get(ApiUrl).then(res => res.data)
}