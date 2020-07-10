import {ACTIONS} from "./types";
import {getServicesCountries, postServiceCountry, deleteServiceCountry } from "../api/ServiceCountryApi";


export const fetchServicesCountries = (servicesCountries) => ({
  type: ACTIONS.FETCH_SERVICES_COUNTRIES,
  payload: servicesCountries,
})
export const createServiceCountry = () => ({
  type: ACTIONS.CREATE_SERVICE_COUNTRY
})

export const removeServiceCountry = () => ({
  type: ACTIONS.DELETE_SERVICE_COUNTRY
})

export const fetchingServicesCountries = (serviceId) => async (dispatch) => {
  const services = await getServicesCountries(serviceId)
  dispatch(fetchServicesCountries(services))
}

export const creatingServiceCountry = (serviceCountry) => async (dispatch) => {
  await postServiceCountry(serviceCountry)
  dispatch(createServiceCountry())
}

export const removingServiceCountry = (id) => async (dispatch) => {
  await deleteServiceCountry(id)
  dispatch(removeServiceCountry(id))
}





