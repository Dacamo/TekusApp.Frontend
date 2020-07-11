import {ACTIONS} from '../actions/types';

const defaultState = {
  servicesCountriesData : [],
  servicesPerCountry: []
}

const serviceCountry = (state = defaultState, action) =>{
  switch(action.type) {   
    case ACTIONS.FETCH_SERVICES_COUNTRIES:
      return { ...state, servicesCountriesData: action.payload};
    case ACTIONS.CREATE_SERVICE_COUNTRY:
      return { ...state}
    case ACTIONS.DELETE_SERVICE_COUNTRY:
      return {...state, servicesCountriesData: state.servicesCountriesData.filter(({id}) => id !== action.payload)}
    case ACTIONS.COUNT_SERVICES_PER_COUNTRY:
      return {...state, servicesPerCountry: action.payload}
    default: 
      return state; 
  }
};
export default serviceCountry;
