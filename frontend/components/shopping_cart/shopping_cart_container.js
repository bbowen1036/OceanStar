import React from 'react';

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

  

  render() {
    return (
      <div className="sidecart-container">
        <header className="sidecart-header"> 
          
          <button className="sidecart-collapse-bttn" onClick={this.props.togglePop}>X</button>
          
          <span>Cart</span>
          <div className="sidecart-icon">&#128722;</div>
          
        </header>

        <main className="sidecart-main">
          <div>
            Navel Oranges
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