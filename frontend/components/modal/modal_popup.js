import React, { Component } from "react";
import {connect } from 'react-redux';
import {} from '../../actions/session_actions'

class PopUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: this.props.currentUser.username
    };
  }

  
  handleClick() {
    // e.preventDefault()
    this.props.toggle();
  };

  render() {
    const currUser = this.props.currentUser? <h2><span>Hi There { this.props.currentUser.username }!</span></h2> : <h2><span>Hi There!</span></h2>
    return (
    <div>

      <div className="modal-container">
        <div className="modal-face">
          {currUser}
           <h4>Welcome to <span className="modal-oceanstar">Ocean Star Seafood.</span></h4>
           <br></br>
          <div className="headwrap">
          <p>
            <span>Please check out my GitHub and LinkedIn pages to learn more about me. Thank you for visiting!</span>
          </p>
            <img className="headshot" src={window.modalImg} alt=""/>
          </div>
        </div>
        <div className="modal-input">
          <div><textarea className="txt-area" placeholder="Send me a message..."></textarea></div>
        </div>

        <button className="modal-collapse">&#10146;</button>
      </div>
    </div>
    );
  };
};

const mSTP = ({ session, entities: { users } }) => {
  
  const currentUser = users[session.id];
  return {
      currentUser,
  }
};


export default connect(mSTP, null)(PopUp);

