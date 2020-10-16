import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import Splash from './splash';

const mSTP = ({session, entities: {users}}) => {
  return {
    currentUser: users[session.id]
  }
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  }
};

export default connect(mSTP, mDTP)(Splash);
