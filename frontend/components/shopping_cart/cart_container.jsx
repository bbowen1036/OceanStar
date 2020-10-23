import React from 'react';
import {connect} from 'react-redux';

import SideCart from './shopping_cart_container'
import {getAllCartItems, getCartItem} from '../../actions/cart_item_actions'



class Cart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      seen: false,
      cartItems: this.props.cartItems
    };
    this.togglePop = this.togglePop.bind(this)
  }

  componentDidMount() {
    this.props.getAllCartItems()
  }


  togglePop() {
    this.setState({
      seen: !this.state.seen,
    });
  };

  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <div onClick={this.togglePop} >
          <button className="sidecart-button">&#128722;</button>
        </div>

        {this.state.seen ? <SideCart props={this.state} cartItems={cartItems} togglePop={this.togglePop} /> : null}
      </div>
    );
  }
};

// export default Cart;


const mSTP = state => {
  return {
    cartItems: state.entities.cartItems
  }
};

const mDTP = dispatch => {
  return {
    getAllCartItems: () => dispatch(getAllCartItems()),
    getCartItem: (cartItemId) => dispatch(getCartItem(cartItemId))
  }
};

export default connect (mSTP, mDTP)(Cart);
