import {fetchingClients, removingClient, fetchingClientById, resetClient, fetchingClientsByRange, countingClients} from '../actions/Clients';
import {connect} from 'react-redux';
import Clients from '../components/Clients';

const mapStateToProps = (state) =>({
  clientsData: state.client.clientsData,
  quantity: state.client.quantityClients,
  actualPage: state.client.actualPage
})

export default connect(mapStateToProps, {fetchingClients, removingClient, fetchingClientById, resetClient, fetchingClientsByRange, countingClients})(Clients)
