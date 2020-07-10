import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import client from './client';
import service from './service';

export default combineReducers({
    client,
    service,
    form: formReducer
});
