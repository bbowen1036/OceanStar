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
          <h2><span>Hi There &#128075;</span></h2>
          <button >&#x2C5;</button>
          <div className="headwrap">
          <p>
            <span>Welcome to Ocean Star Seafood. Please send me a message with any questions you have!</span>
          </p>
            <img className="headshot" src={window.modalImg} alt=""/>
          </div>
        </div>
        <div className="modal-input">
          <div><textarea className="txt-area"></textarea></div>
        </div>

        <button className="modal-collapse">&#10146;</button>
      </div>
    </div>
    );
  };
};

export default PopUp;

