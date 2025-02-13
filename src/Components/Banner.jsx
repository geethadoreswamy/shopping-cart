
import React from 'react';
import './Banner.css'; 
import bannerImage from '../Assets/carouselImages/banner3.webp';

const Banner = () => {
  return (
    <div className="banner-container">
      <img 
        src= {bannerImage}
        alt="Banner" 
        className="banner-image" 
      />
      <div className="banner-content">
        <h2 className="banner-title">Welcome to Our Promotional Event!</h2>
        <p className="banner-text">Join us for exclusive deals and offers on the latest fashion trends.</p>
        <a href="#" className="banner-button">Shop Now</a>
      </div>
    </div>
  );
};

export default Banner;
