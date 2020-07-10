import {ACTIONS} from "./types";
import {getCountries } from "../api/CountryApi";


export const fetchCountries = (countries) => ({
  type: ACTIONS.FETCH_COUNTRIES,
  payload: countries,
})

export const fetchingCountries = () => async (dispatch) => {
  const countries = await getCountries()
  dispatch(fetchCountries(countries))
}
