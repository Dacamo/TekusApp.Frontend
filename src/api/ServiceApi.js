import axios from 'axios';
import Constants, { GetEndpoint } from '../common/constants';

const SERVICE_API_URL = GetEndpoint(Constants.API_ENDPOINTS.SERVICES);

export const getServices = async () => {
  const response = await axios.get(SERVICE_API_URL)
  return response.data
}

export const postService = async (service) => {
  const response = await axios.post(SERVICE_API_URL, service)
  return response.data
}

export const putService = async (service) => {
  const response = await axios.put(`${SERVICE_API_URL}/${service.id}`, service)
  return response
}

export const getServiceById = async (id) => {
  const response = await axios.get(`${SERVICE_API_URL}/${id}`)
  return response.data
}

export const deleteService = async (id) => {
  await axios.delete(`${SERVICE_API_URL}/${id}`)
}

export const getServicesByClientId = async (clientId) =>{
  const response = await axios.get(`${SERVICE_API_URL}/clientId/${clientId}`)
  return response.data
}

export const getCountServices = async () =>{
  const respose = await axios.get(`${SERVICE_API_URL}/Count`)
  return respose.data
}

