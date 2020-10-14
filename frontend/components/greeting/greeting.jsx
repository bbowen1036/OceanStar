import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {

    const display = currentUser ? (
      <div>
        <h3>Welcome {currentUser.username}!</h3>
        <button onClick={logout}>Logout</button>
      </div>
    ) : (
      <div>
        <Link className="btn" to="/signup">Sign Up</Link>
        <Link className="btn" to="/login">Log In</Link>
      </div>
    );
    return (
      <div>

        <header className="nav-bar">
          <div className="header-wrapper">
            <div className='nav-bar-search'>SearchBar</div>

            <div className="nav-bar-categories">
              <img className="logo"/>
              <ul className="list-categories">
                <li>SEAFOOD
                  <div className="nav-dropdown-content">
                    <ul className="options-list">

                      <li>FINFISH</li>
                      <li>SHELLFISH</li>
                      <li>CURED/CAVIAR</li>
                      <li>FROZEN</li>
                    </ul>
                  </div>
                </li>
                <li>MEAT
                  <div className="nav-dropdown-content">
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
                <li>PRODUCE
                  <div className="nav-dropdown-content">
                    <ul>

                      <li>FRUIT</li>
                      <li>VEGETABLES</li>
                      <li>MUSHROOMS</li>
                      <li>SEAWEEDS</li>
                    </ul>
                  </div>
                </li>
                <li>DAIRY
                  <div className="nav-dropdown-content">
                    <ul>

                      <li>MILK & CREAM</li>
                      <li>BUTTER & EGGS</li>
                      <li>CHEEESE</li>
                      <li>ICE CREAM</li>
                    </ul>
                  </div>
                </li>
                <li>MEAL KIT
                  <div className="nav-dropdown-content">
                    <ul>

                      <li>CARE PACKAGES</li>
                      <li>COCHON VOLANT</li>
                    </ul>
                  </div>
                </li>
                <li>BAKERY</li>
                <li>DESSERT</li>
                <li>PANTRY</li>
                <li>MORE</li>
              </ul>
            </div>

            <div className="nav-bar-right">
              <ul>
                <li>shopping cart</li>
                <li>{display}</li>
              </ul>
            </div>
          </div>

          <main className="splash-carousel">
            <div >
              <h1 className="logo">OCEAN STAR SEAFOOD</h1>        
            </div>

        
            this the main for the carousel picture
          </main>
          <footer>
            FREE DELIVERY FOR ORDERS OVER $100 WITHIN OUR SF BAY AREA DELIVERY ZONE AND FLAT-RATE SHIPPING NATIONALLY.
          </footer>
        </header>
        
        <section>
          
          <div className='splash-body-textbox'>
            text
          </div>

          <div className='splash-body-picture'>
            picture
          </div>

          <div className='splash-body-textbox'>
            text
          </div>

          <div className='splash-body-picture'>
            picture
          </div>

          <div className='splash-body-picture'>
            picture
          </div>

          <div className='splash-body-textbox'>
            text
          </div>

          <div className='splash-body-picture'>
            picture
          </div>

          <div className='splash-body-textbox'>
            text
          </div>

          

        </section>
        <footer className="splash-footer">

        </footer>
      </div>








    )
 }
export default Greeting;


//   const sessionLinks = () => (
//     <nav className="login-signup">
//       <Link to="/login">Login</Link>
//       &nbsp;or&nbsp;
//       <Link to="/signup">Sign up!</Link>
//     </nav>
//   );

//   const personalGreeting = () => (
//     <div>

//       <h2>Hi, {currentUser.username}!</h2>
//       <button onClick={logout}>Log Out</button>

//     </div>
   
//   );
//   return currentUser ? personalGreeting() : sessionLinks();
// };
