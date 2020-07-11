import {ACTIONS} from '../actions/types';

const defaultState = {
  clientsData : [],
  clientData: undefined,
  quantityClients: undefined,
  actualPage: undefined
}

const client = (state = defaultState, action) =>{
  switch(action.type) {   
    case ACTIONS.FETCH_CLIENTS:
      return { ...state, clientsData: action.payload};
    case ACTIONS.CREATE_CLIENT:
      return {...state}
    case ACTIONS.DELETE_CLIENT:
      return {...state}
    case ACTIONS.UPDATE_CLIENT:
      return {...state}
    case ACTIONS.FETCH_CLIENT_BY_ID:
      return {...state, clientData: action.payload}
    case ACTIONS.RESET_CLIENT:
      return {...state, clientData: undefined}
    case ACTIONS.COUNT_CLIENTS:
      return {...state, quantityClients: action.payload}
    case ACTIONS.FETCH_CLIENTS_BY_RANGE:
      return {...state, clientsData: action.payload}
    default: 
      return state; 
  }
};
export default client;
