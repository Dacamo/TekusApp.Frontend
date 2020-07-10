import {ACTIONS} from "./types";
import { getServices, getServiceById, postService, putService, deleteService } from "../api/ServiceApi";
import history from '../history'


export const fetchServices = (services) => ({
  type: ACTIONS.FETCH_SERVICES,
  payload: services,
})

export const fetchServiceById = (service) => ({
  type: ACTIONS.FETCH_SERVICE_BY_ID,
  payload: service
})

export const updateService = () => ({
  type: ACTIONS.UPDATE_SERVICE,
})

export const createService = () => ({
  type: ACTIONS.CREATE_SERVICE
})

export const removeService = () => ({
  type: ACTIONS.DELETE_SERVICE
})

export const fetchingServices = () => async (dispatch) => {
  const services = await getServices()
  dispatch(fetchServices(services))
}

export const fetchingServiceById = (id) => async (dispatch) => {
  const service = await getServiceById(id)
  dispatch(fetchServiceById(service))
}

export const updatingService = (service) => async () => {
  await putService(service)
  history.push(`/Servicios`)
}

export const creatingService = (service) => async (dispatch) => {
  await postService(service)
  dispatch(createService)
  history.push(`/Services`)
}

export const removingService = (id) => async (dispatch) => {
  await deleteService(id)
  dispatch(removeService(id))
}






