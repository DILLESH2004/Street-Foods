import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='Footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img  className='logo1' src={assets.Logo} alt="" />
          <p>Choose from a diverse menu featuring a detactable array of dishes crafted with finest ingredients and culinary expertise.Our mission is satisfy yourcravings and elevate Your experience of street food.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook} alt="" />
            <img src={assets.twitter} alt="" />
            <img src={assets.linkedin} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>STREET FOODS</h2>
          <ul>
            <li>Home</li>
            <li>Delivery</li>
            <li>About us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-232-414-576</li>
            <li>Streetfoods@outlook.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 @Streetfoods.com -All Rights Reserved</p>
    </div>
  )
}

export default Footer;
