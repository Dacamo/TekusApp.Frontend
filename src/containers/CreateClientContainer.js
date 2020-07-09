import {creatingClient} from '../actions/Clients';
import {connect} from 'react-redux';
import CreateClient from '../components/CreateClient';

export default connect(null, {creatingClient})(CreateClient)
