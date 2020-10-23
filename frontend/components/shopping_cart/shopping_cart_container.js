import React from 'react';
import {getCartItem} from '../../actions/cart_item_actions';
import CartItem from './cart_item'

class SideCart extends React.Component {
  constructor(props){
    super(props)
    this.state = props.state
   this.togglePop = this.togglePop.bind(this)
  }
  
  togglePop() {
    this.setState({
      seen: !this.state.seen
    });
  };

  

  emptyCart(){
    return (
      <div>
          <h1 className="header">Your Cart</h1>
          <div className="buy-page">
              <div className="empty-cart-div">
                  <div className="header">Thanks for checking out Toasty!</div>
              </div>
          </div>
      </div>
  )
  }







  render() {

    const  cartItems  = Object.values(this.props.cartItems);
    
    

    const item = cartItems.map(cartItem => <CartItem key={cartItem.id} quantity={cartItem.quantity}  product={cartItem.product} />)


    return (
      <div className="sidecart-container">
        <header className="sidecart-header"> 
          
          <button className="sidecart-collapse-bttn" onClick={this.props.togglePop}>X</button>
          
          <span>Cart</span>
          <div className="sidecart-icon">&#128722;</div>
          
        </header>

        <main className="sidecart-main">
          <div>
            {item}
          </div>
        </main>

      
        <div className="sidecart-memo">
          <h5>Write a note here</h5>
          <textarea height="57px" className="special-instructions" placeholder="Special Instructions"></textarea>
        </div>

        <div className="sidecart-checkout">
          <div className="sidecart-checkout-price">
            <span>Subtotal</span>
            <span>$Price</span>
          </div>
          <div><button className="sidecart-checkout-button">View Cart</button></div>
          <div 
            className="sidecart-continue-shopping"
            onClick={this.props.togglePop}
            >
              Continue Shopping
          </div>
        </div>

      </div>
    )
  }
}



export default SideCart;