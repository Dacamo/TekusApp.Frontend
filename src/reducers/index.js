import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import client from './client';
import service from './service';
import country from './country';
import serviceCountry from './serviceCountry';

export default combineReducers({
    client,
    service,
    country,
    serviceCountry,
    form: formReducer
});
