import React from 'react';
import { Image } from '@chakra-ui/react';

const Feature = ({ title, text, img = "",hidden=false }) => (
  <div className="ws__features-container__feature">
    {img &&
        <div className="ws__features-container__feature-img">
            <Image src ={img} />
        </div>
    }
    <div className="ws__features-container__feature-title" > <div hidden={hidden}/>  
      <h1>{title}</h1>
    </div>
    <div className="ws__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;