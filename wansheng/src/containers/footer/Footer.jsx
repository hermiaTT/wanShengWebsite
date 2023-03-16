import React from 'react';
import wsLogo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="ws_footer section__padding">
    <div className="ws_footer-heading">
      <h1 className="gradient__text">温哥华室内设计与装修首选，为你打造温馨的家</h1>
    </div>

    {/* <div className="ws_footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="ws_footer-links">
      <div className="ws_footer-links_logo">
        <img src={wsLogo} alt="gpt3_logo" />
        <p>WanSheng Construction, <br /> All Rights Reserved</p>
      </div>
      <div className="ws_footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="ws_footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="ws_footer-links_div">
        <h4>Get in touch</h4>
        <p>701-2351 beta ave</p>
        <p>778-723-7777</p>
        <p>wanshengjianshe@gmail.com</p>
      </div>
    </div>

    <div className="ws_footer-copyright">
      <p>@2022 万盛建设. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;