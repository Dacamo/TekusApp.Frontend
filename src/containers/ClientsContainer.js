import {fetchingClients, removingClient} from '../actions/Clients';
import {connect} from 'react-redux';
import Clients from '../components/Clients';

const mapStateToProps = (state) =>({
  clientsData: state.client.clientsData
})

export default connect(mapStateToProps, {fetchingClients, removingClient})(Clients)
