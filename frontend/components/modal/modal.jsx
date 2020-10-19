import React from "react";
import PopUp from "./modal_popup";

class Modal extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      seen: true
    };

    this.togglePop = this.togglePop.bind(this)
  }

  togglePop() {
    this.setState({
      seen: !this.state.seen
    });
  };

  render() {
    return (
      <div>
        <div onClick={this.togglePop} >
          <button className="modalBtn">&#128075;</button>
        </div>

        {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
      </div>
    );
  }
}

export default Modal;
