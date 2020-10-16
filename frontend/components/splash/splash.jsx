import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../carousel/carousel';

const Splash = ({currentUser, logout}) => {

  return (

    <header className="nav-bar">
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
    </header>
  )



}

export default Splash