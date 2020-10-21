import React from 'react';
import { Link } from 'react-router-dom';

import Cart from '../shopping_cart/cart'


class Navbar extends React.Component {

render() {

  const {currentUser, logout, login, register} = this.props

  const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.username}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      {/* <Link className="btn" to="/signup">Sign Up</Link> */}
      <Link className="btn" to="/login">Log In</Link>
    </div>
  );

  return(

    <div className="header-wrapper">
      <div className='nav-bar-search'>SearchBar</div> 
      
      <div className="nav-bar-categories">
        <Link to="/">
          <img className="logo-icon" src={window.logoImg} alt=""/>
        </Link>
        <ul className="list-categories">
          <li className="drop-menu">SEAFOOD

            <div className="options-list">
              <ul>

                <li>FINFISH</li>
                <li>SHELLFISH</li>
                <li>CURED/CAVIAR</li>
                <li>FROZEN</li>
              </ul>
            </div>

          </li>

          <li className="drop-menu">MEAT
            <div className="options-list">
              <ul>
                <li>POULTRY</li>
                <li>BEEF</li>
                <li>LAMB</li>
                <li>PORK</li>
                <li>GAME</li>
                <li>CHARCUTERIE</li>
                <li>STOCKS</li>
              </ul>
            </div>
          </li>

          <li className="drop-menu">PRODUCE
            <div className="options-list">
              <ul>

                <li>FRUIT</li>
                <li>VEGETABLES</li>
                <li>MUSHROOMS</li>
                <li>SEAWEEDS</li>
              </ul>
            </div>
          </li>

          <li className="drop-menu">DAIRY
            <div className="options-list">
              <ul>

                <li>MILK & CREAM</li>
                <li>BUTTER & EGGS</li>
                <li>CHEEESE</li>
                <li>ICE CREAM</li>
              </ul>
            </div>
          </li>

          <li className="drop-menu">MEAL KIT
            <div className="options-list">
              <ul>

                <li>CARE PACKAGES</li>
                <li>COCHON VOLANT</li>
              </ul>
            </div>
          </li>      
        </ul>
      </div>
    
      <div className="nav-bar-right">
        <ul>
          <li>
            <Cart/>
            {/* <Link to='/cart'>&#128722;</Link> */}
            <span>2</span>
          </li>

          <li>
            <img className="login-icon" src={window.loginImg} alt=""/>
          </li>
          <li>{display}</li>
        </ul>
      </div>
      
      
    </div>

    )
}

};


export default Navbar