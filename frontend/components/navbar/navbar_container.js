import { connect } from 'react-redux';
import { logoutUser, loginUser, createNewUser } from '../../actions/session_actions';
import Navbar from './navbar'



const mSTP = ({session, entities: {users}}) => {
  return {
    currentUser: users[session.id]
  }
};

const mDTP = dispatch => ({
  
    logout: () => dispatch(logoutUser()),
    // login: (user) => dispatch(loginUser(user)),
    // register: (user) => dispatch(createNewUser(user))
  
});

export default connect(mSTP, mDTP)(Navbar)