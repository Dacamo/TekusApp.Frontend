import {removingServiceCountry, fetchingServicesCountries} from '../actions/ServicesCountries';
import { connect } from 'react-redux';
import ServicesCountries from '../components/ServicesCountries';


const mapStateToProps = (state) => ({
  servicesCountriesData: state.serviceCountry.servicesCountriesData,
  serviceData: state.service.serviceData
})
export default connect(mapStateToProps,{fetchingServicesCountries, removingServiceCountry})(ServicesCountries)
