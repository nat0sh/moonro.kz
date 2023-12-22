import React from 'react';
import slide1 from './img/slider/slide1.jpg';
import slide2 from './img/slider/slide2.jpg';
import './home.css'

export default function Slider() {
  return (
    <div id="slider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-indicators">
        <button type="button" data-bs-ride="carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-ride="carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={slide2} className="d-block w-100" alt="Slide 2" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
