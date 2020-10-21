import React from 'react';
import SideCart from './shopping_cart_container'

class Cart extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      seen: false,
      cart: {
        addedItems: [],
        total: 0
      }
    };

    this.togglePop = this.togglePop.bind(this)
  }

  togglePop() {
    this.setState({
      seen: !this.state.seen,
    });
  };


  render() {
    return (
      <div>
        <div onClick={this.togglePop} >
          <button className="sidecart-button">&#128722;</button>
        </div>

        {this.state.seen ? <SideCart props={this.state} togglePop={this.togglePop} /> : null}
      </div>
    );
  }


  
};

export default Cart;