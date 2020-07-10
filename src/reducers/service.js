import {ACTIONS} from '../actions/types';

const defaultState = {
  servicesData : [],
  serviceData: undefined
}

const service = (state = defaultState, action) =>{
  switch(action.type) {   
    case ACTIONS.FETCH_SERVICES:
      return { ...state, servicesData: action.payload};
    case ACTIONS.CREATE_SERVICE:
      return {...state}
    case ACTIONS.DELETE_SERVICE:
      return {...state, servicesData: state.servicesData.filter(({id}) => id !== action.payload)}
    case ACTIONS.UPDATE_SERVICE:
      return {...state}
    case ACTIONS.FETCH_SERVICE_BY_ID:
      return {...state, serviceData: action.payload}
    case ACTIONS.FETCH_SERVICES_BY_CLIENT_ID:
      return {...state, servicesData: action.payload}
    default: 
      return state; 
  }
};
export default service;
