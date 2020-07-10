import axios from 'axios';
import Constants, { GetEndpoint } from '../common/constants';

const SERVICE_COUNTRY_API_URL = GetEndpoint(Constants.API_ENDPOINTS.SERVICES_COUNTRIES);

export const getServicesCountries = async (serviceId) => {
  const response = await axios.get(`${SERVICE_COUNTRY_API_URL}/serviceId/${serviceId}`)
  return response.data
}

export const postServiceCountry = async (serviceCountry) => {
  console.log(serviceCountry);
  const response = await axios.post(SERVICE_COUNTRY_API_URL, serviceCountry)
  return response.data
}

export const deleteServiceCountry = async (id) => {
  await axios.delete(`${SERVICE_COUNTRY_API_URL}/${id}`)
}
