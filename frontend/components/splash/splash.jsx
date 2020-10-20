import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Carousel from '../carousel/carousel';
import ProductItemContainer from '../product/products_index_container'
import StaticSplashSection from './static_splash_section'

const Splash = ({currentUser, logout}) => {

  return (
    <div>
      <img src="https://oceanstar-seed.s3-us-west-1.amazonaws.com/splash-oyster2.jpeg" className="nav-splash-img"/>
      <header className="nav-bar">
        <div className="splash-carousel-title">
          <header className="splash-header">
            <h2 className="content-title">CHEF-DRIVEN</h2>
            <h2 className="content-title">CHEF-CURATED</h2>
            <h2 className="content-title">MARKETPLACE</h2>
            <div className='content-border-bottom'></div>
            <h3 className="content-title-1"> FRESH LOCAL SUSTAINABLE</h3>
            <h1 className="content-title-end">HOME DELIVERY</h1>
          </header>  
          <div className="splash-button">
            <NavLink className="splash-bttn" to="/fish">SHOP NOW</NavLink>
          </div>
        </div>
      </header>     
      <div className='carousel-footer'>
        <div className="carousel-footer-text">free delivery for orders over $100 within our sf Bay Area Delivery Zone</div>
        <div className="carousel-footer-text">and flat-rate shipping nationally</div>
      </div>

      <div className="static-section">
        <StaticSplashSection />
      </div>

      <section className="product-section">
        <div>
          <ProductItemContainer />
        </div>
      </section>
      
    </div>

  )



}

export default Splash