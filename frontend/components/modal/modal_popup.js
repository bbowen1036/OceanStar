import React, { Component } from "react";

class PopUp extends React.Component {
  constructor(props){
    super(props)
  }
  
  handleClick() {
    // e.preventDefault()
    this.props.toggle();
  };

  render() {
    return (
    <div>
         {/* <img className="headshot" src={window.modalImg} alt=""/> */}

      <div className="modal-container">
        <div className="modal-face">
          <h2><span>Hi There!</span></h2>
           <h4>Welcome to <span className="modal-oceanstar">Ocean Star Seafood.</span></h4>
          {/* <button >&#x2C5;</button> */}
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

export default PopUp;

