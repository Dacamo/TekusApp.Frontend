const Constants = Object.freeze({
  API_DEV_URL: 'https://localhost:44309/api',
  API_ENDPOINTS: {
    CLIENTS: 'clients',
    SERVICES: 'services',
    COUNTRIES: 'countries',
    SERVICES_COUNTRIES: 'servicesCountries'
  }
})

export const GetEndpoint = (endpoint) => {
  return `${Constants.API_DEV_URL}/${endpoint}`
}

export default Constants

