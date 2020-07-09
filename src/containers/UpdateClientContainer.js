import {updatingClient, fetchingClientById} from '../actions/Clients';
import {connect} from 'react-redux';
import UpdateClient from '../components/UpdateClient';
import {withRouter} from 'react-router';

const mapStateToProps = (state) => ({
  initialValues: state.client.clientData
})

export default withRouter(connect(mapStateToProps,{updatingClient,fetchingClientById})(UpdateClient))
