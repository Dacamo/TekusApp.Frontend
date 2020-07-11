import {ACTIONS} from "./types";
import {getServicesCountries, postServiceCountry, deleteServiceCountry, servicesPerCountry } from "../api/ServiceCountryApi";


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

export const countServicesPerCountry = (servicesPerCountry) => ({
  type: ACTIONS.COUNT_SERVICES_PER_COUNTRY,
  payload: servicesPerCountry
})


export const fetchingServicesCountries = (serviceId) => async (dispatch) => {
  const services = await getServicesCountries(serviceId)
  dispatch(fetchServicesCountries(services))
}

export const creatingServiceCountry = (serviceCountry) => async (dispatch) => {
  try{
    await postServiceCountry(serviceCountry)
  } catch (err){
    alert(err.response.data)
  }
  
  dispatch(createServiceCountry())
}

export const removingServiceCountry = (id) => async (dispatch) => {
  await deleteServiceCountry(id)
  dispatch(removeServiceCountry(id))
}

export const countingServicesPerContry = () => async (dispatch) => {
  const response = await servicesPerCountry()
  dispatch(countServicesPerCountry(response))
}





