import {ACTIONS} from "./types";
import { getClients, getClientById, postClient, putClient, deleteClient } from "../api/ClientApi";

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

export const removeClient = () => ({
  type: ACTIONS.DELETE_CLIENT
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
}

export const creatingClient = (client) => async (dispatch) => {
  await postClient(client)
}

export const removingClient = (id) => async (dispatch) => {
  await deleteClient(id)
  dispatch(removeClient(id))
}






