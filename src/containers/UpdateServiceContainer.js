import {updatingService, fetchingServiceById} from '../actions/Services';
import {connect} from 'react-redux';
import UpdateService from '../components/UpdateService';
import {withRouter} from 'react-router';

const mapStateToProps = (state) => ({
  initialValues: state.service.serviceData
})

export default withRouter(connect(mapStateToProps,{updatingService,fetchingServiceById})(UpdateService))
