import { fetchingCountries } from '../actions/Countries';
import  {creatingServiceCountry} from '../actions/ServicesCountries';
import CreateServiceCountry from '../components/CreateServiceCountry';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  countriesData: state.country.countriesData,
  serviceData: state.service.serviceData
})
export default connect(mapStateToProps, {fetchingCountries, creatingServiceCountry})(CreateServiceCountry)
