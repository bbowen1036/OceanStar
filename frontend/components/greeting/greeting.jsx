import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../carousel/carousel'

const Greeting = ({currentUser, logout}) => {

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
    return (
      <div>

        <header className="nav-bar">
          
          <div className="header-wrapper">
            <div className='nav-bar-search'>SearchBar</div>

            <div className="nav-bar-categories">
              <img className="logo"/>
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
                
                <li className="drop-menu">BAKERY</li>

                <li className="drop-menu">DESSERT</li>

                <li className="drop-menu">PANTRY</li>

                <li className="drop-menu">MORE</li>
              </ul>
            </div>

 {/* right header part */}

            <div className="nav-bar-right">
              <ul>
                <li>
                  <Link to='/cart'>&#128722;</Link>
                  <span>2</span>
                </li>

                <li>
                  <img className="login-icon" src={window.loginImg} alt=""/>
                </li>
                <li>{display}</li>
              </ul>
            </div>
          </div>

{/* main carousel part */}
          <main>

            <div className="splash-carousel-title">
              <header className="splash-header">
                <h2 className="content-title">
                    CHEF-DRIVEN
                    <br/>
                    CHEF-CURATED
                    <br/>
                    MARKETPLACE
                </h2>
                <h4 className="content-title"> FRESH LOCAL SUSTAINABLE</h4>
                <h1 className="content-title-end">HOME DELIVERY</h1>
              </header>  

              <div className="splash-button">
                <Link className="splash-bttn" to="/fish">SHOP NOW</Link>
              </div>
            </div>

            
            this the main for the carousel picture
          </main>



{/* footer */}

          <footer className="carousel-footer">
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

          <Carousel/>

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
