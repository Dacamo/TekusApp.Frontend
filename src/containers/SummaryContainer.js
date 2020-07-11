import {countingClients} from '../actions/Clients';
import {countingServices} from '../actions/Services';
import {countingServicesPerContry} from '../actions/ServicesCountries';
import {connect} from 'react-redux';
import Summary from '../components/Summary';


const mapStateToProps = (state) =>({
  quantityClients: state.client.quantityClients,
  quantityServices: state.service.quantityServices,
  servicesPerCountry: state.serviceCountry.servicesPerCountry
})

export default connect(mapStateToProps, {countingClients, countingServices, countingServicesPerContry})(Summary);
