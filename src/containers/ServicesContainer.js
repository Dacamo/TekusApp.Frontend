import {fetchingServices, removingService, fetchingServiceById, fetchingServicesByClientID} from '../actions/Services';
import {connect} from 'react-redux';
import Services from '../components/Services';
import {withRouter} from 'react-router'

const mapStateToProps = (state) =>({
  servicesData: state.service.servicesData,
  clientData: state.client.clientData
})

export default withRouter(connect(mapStateToProps, {fetchingServices, removingService, fetchingServiceById, fetchingServicesByClientID})(Services));
