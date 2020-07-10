import {removingServiceCountry, fetchingServicesCountries} from '../actions/ServicesCountries';
import { connect } from 'react-redux';
import ServicesCountries from '../components/ServicesCountries';
import {withRouter} from 'react-router'


const mapStateToProps = (state) => ({
  servicesCountriesData: state.serviceCountry.servicesCountriesData,
  serviceData: state.service.serviceData
})
export default withRouter(connect(mapStateToProps,{fetchingServicesCountries, removingServiceCountry})(ServicesCountries));
