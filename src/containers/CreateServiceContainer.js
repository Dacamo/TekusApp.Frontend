import {creatingService} from '../actions/Services';
import {connect} from 'react-redux';
import CreateService from '../components/CreateService';
import {withRouter} from 'react-router';

const mapStateToProps = (state) =>({
  clientData: state.client.clientData
})

export default withRouter(connect(mapStateToProps, {creatingService})(CreateService));
