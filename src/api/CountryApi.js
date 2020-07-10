import axios from 'axios';
import Constants, { GetEndpoint } from '../common/constants';

const COUNTRIES_API_URL = GetEndpoint(Constants.API_ENDPOINTS.COUNTRIES);

export const getCountries = async () => {
  const response = await axios.get(COUNTRIES_API_URL)
  return response.data
}


