import {ACTIONS} from '../actions/types';

const defaultState = {
  countriesData : []
}

const country = (state = defaultState, action) =>{
  switch(action.type) {   
    case ACTIONS.FETCH_COUNTRIES:
      return { ...state, countriesData: action.payload};
    default: 
      return state; 
  }
};
export default country;
