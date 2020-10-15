import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom'

const Carousel = () => {


  return (
    <div className='carousel-container'>
      <div className="carousel-slide">
        <img className="img-oyster" src={window.carousel5} id="lastClone" alt=""/>
        <img className="img-table" src={window.carousel1} alt=""/>
        <img className="img-crudo" src={window.carousel2} alt=""/>
        <img className="img-halibut" src={window.carousel3} alt=""/>
        <img className="img-mussels" src={window.carousel4} alt=""/>
        <img className="img-oyster" src={window.carousel5} alt=""/>
        <img className="img-table" src={window.carousel1} id="firstClone" alt=""/>
      </div>
      
      <button id="prevBtn">Prev</button>
      <button id='nextBtn'>Next</button>

    </div>
  )
   
}


export default Carousel



