import React, { Component } from "react";

export default class PopUp extends Component {
  
  handleClick() {
    // e.preventDefault()
    this.props.toggle();
  };

  render() {
    return (
    <div>
      <div className="modal-container">
        <div className="modal-face">
          <h2><span>Hi There &#128075;</span></h2>
          <button>&#x2C5;</button>
          <p>
            <span>Welcome to Ocean Star Seafood. Please send me a message with any questions you have!</span>
          </p>
          <div>
            {/* <image></image> */}
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


