import React from 'react';
import './contact.css';
import contactImg from '../../assets/zee.png';
import phone from '../../assets/call.png';
import email from '../../assets/email.png';
import address from '../../assets/address.png';
import wechat from '../../assets/wechat.png';
const Contanct = () => {
  return (
    <div className="ws_contact section__padding" id="contact">
    <div className="ws_contact-image">
      <img src={contactImg} alt="possibility" />
    </div>
    <div className="ws_contact-content">
      <h1 className='gradient__text'>联系我们</h1>
        <div className='ws_contact-content_item'>
          <img src ={address}/>
          <h4>地址</h4>
          <p>unit 701-2351 beta ave, <br/> Burnaby,BC, V5C 0M2</p>
        </div>
        <div className='ws_contact-content_item'>
          <img src ={phone}/>
          <h4>电话</h4>
          <p>(778)-723-7777</p>
        </div>
        <div className='ws_contact-content_item'>
          <img src ={email}/>
          <h4>邮箱</h4>
          <p>wansheng@gmail.com</p>
        </div>
        <div className='ws_contact-content_item'>
          <img src ={wechat}/>
          <h4>微信</h4>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Contanct