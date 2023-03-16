import React from 'react';
import './feature.css';

const Feature = ({ title, text, img = "" }) => (
  <div className="ws__features-container__feature">
    {img &&
        <div className="ws__features-container__feature-img">
            <img src ={img} />
        </div>
    }
    <div className="ws__features-container__feature-title">
      <div/>  
      <h1>{title}</h1>
    </div>
    <div className="ws__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;