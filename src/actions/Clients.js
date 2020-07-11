import {ACTIONS} from "./types";
import { getClients, getClientById, postClient, putClient, deleteClient, getCountClients, getByRange } from "../api/ClientApi";
import history from '../history'


export const fetchClients = (clients) => ({
  type: ACTIONS.FETCH_CLIENTS,
  payload: clients,
})

export const fetchClientById = (client) => ({
  type: ACTIONS.FETCH_CLIENT_BY_ID,
  payload: client
})

export const updateClient = () => ({
  type: ACTIONS.UPDATE_CLIENT,
})

export const createClient = () => ({
  type: ACTIONS.CREATE_CLIENT
})

export const removeClient = (id) => ({
  type: ACTIONS.DELETE_CLIENT,
  payload: id
})

export const resetClient = () =>({
  type: ACTIONS.RESET_CLIENT
})

export const countClients =(quantity) =>({
  type: ACTIONS.COUNT_CLIENTS,
  payload: quantity
})

export const fetchClientsByRange = (clients) => ({
  type: ACTIONS.FETCH_CLIENTS_BY_RANGE,
  payload: clients
})

export const setActualPage = (number) => ({
  type: ACTIONS.SET_ACTUAL_PAGE,
  payload: number
})

export const fetchingClients = () => async (dispatch) => {
  const clients = await getClients()
  dispatch(fetchClients(clients))
}

export const fetchingClientById = (id) => async (dispatch) => {
  const client = await getClientById(id)
  dispatch(fetchClientById(client))
}

export const updatingClient = (client) => async () => {
  await putClient(client)
  history.push(`/Clientes`)
}

export const creatingClient = (client) => async (dispatch) => {
  await postClient(client)
  dispatch(createClient)
  history.push(`/Clientes`)
}

export const removingClient = (id) => async (dispatch) => {
  await deleteClient(id)
  dispatch(removeClient(id))
  dispatch(fetchingClientsByRange(1))
}

export const countingClients = () => async (dispatch) => {
  const quantity = await getCountClients()
  dispatch(countClients(quantity))
}

export const fetchingClientsByRange = (page) => async (dispatch) => {
  const clients = await getByRange(page);
  dispatch(fetchClientsByRange(clients))
  dispatch(setActualPage(page))
}






