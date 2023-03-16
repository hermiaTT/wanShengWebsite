import React from 'react';
import './brand.css';

import {hammer,computer,settings} from './import.js'
const Brand = () => {
  return (
    <div className='ws__brand section__padding'>
      <div>
        <img src = {hammer} alt = "hammer"/>
      </div>
      <div>
        <img src = {computer} alt = "computer"/>
       </div>
       <div> 
        <img src = {settings} alt = "settings"/>
      </div>
    </div>
  )
}

export default Brand