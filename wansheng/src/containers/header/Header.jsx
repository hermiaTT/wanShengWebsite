import React from 'react';
import header from '../../assets/header.png';

import './header.css';
//可以改成想要的样式
const Header = () => {
  return (
    <div className='ws__header section__padding' id="home">
      <div className='ws__header-content'>
        <h1 className='gradient__text'> 值得信赖的建筑领导施工团队</h1>
        <p>万盛建筑公司是温哥华领先的室内装修公司，以专业装修人员为背景， 提供优质的装修服务，服务覆盖到装修领域的方方面面，为您解决一切室内外装修与家居维护难题，为您提供省钱省力又省心的一站式服务体验！我们秉承“诚信、创新、实干”的理念，坚持“规范化、专业化、优质化”的发展道路，信守“客户为尊，诚信为本”的经营之道，恪守“接一项案子，树一座丰碑，交一方朋友，留一片信誉”的服务精神，并积极整合现有资源，不断吸纳先进服务理念，力争打造万盛建筑为之骄傲的辉煌！</p>
        <div className='ws__header-content__input'>
          <input type="email" placeholder = "Your Email Address"/>
          <button type='button'>Get Started</button>
        </div>
      </div>
      <div className='ws__header-image'>
        <img src ={header} alt="header"/>
      </div>
    </div>
  )
}

export default Header