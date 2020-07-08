import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import client from './client';

export default combineReducers({
    client,
    form: formReducer
});
