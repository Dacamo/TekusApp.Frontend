import {fetchingServices, removingService, fetchingServiceById} from '../actions/Services';
import {connect} from 'react-redux';
import Services from '../components/Services';

const mapStateToProps = (state) =>({
  servicesData: state.service.servicesData
})

export default connect(mapStateToProps, {fetchingServices, removingService, fetchingServiceById})(Services)
