import axios from 'axios';
import Constants, { GetEndpoint } from '../common/constants';

const CLIENTS_API_URL = GetEndpoint(Constants.API_ENDPOINTS.CLIENTS);

export const getClients = async () => {
  const response = await axios.get(CLIENTS_API_URL)
  return response.data
}

export const postClient = async (asset) => {
  const response = await axios.post(CLIENTS_API_URL, asset)
  return response.data
}

export const putClient = async (asset) => {
  const response = await axios.put(`${CLIENTS_API_URL}/${asset.id}`, asset)
  return response
}

export const getClientById = async (id) => {
  const response = await axios.get(`${CLIENTS_API_URL}/${id}`)
  return response.data
}

export const deleteClient = async (id) => {
  await axios.delete(`${CLIENTS_API_URL}/${id}`)
}

