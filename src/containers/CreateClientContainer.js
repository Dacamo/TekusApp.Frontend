import {creatingClient} from '../actions/Clients';
import {connect} from 'react-redux';
import CreateClient from '../components/CreateClient';
import {withRouter} from 'react-router';

export default withRouter(connect(null, {creatingClient})(CreateClient));
