import React from 'react';
import ReactDom from 'react-dom';


import { closeModal, openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

class Modal extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: false};

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.setState({isToggleOn: !this.state.isToggleOn})
  }
  
  
  
  render(){
    
    return(
      
    <div>



      <div>
        <button onClick={this.handleClick} className="modalBtn">
          {this.state.isToggleOn ? 'ONNN' : 'OFF'}
        </button>  
      </div>

       
      
    </div>
      
    )
  }


}
export default Modal

