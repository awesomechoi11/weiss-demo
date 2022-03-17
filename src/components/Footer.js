import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import RevealOnScroll from './Reveal';
import RightArrow from '../assets/rightarrow';
import FancyImage from './FancyImage';
import WhiteWeiss from '../assets/weisslogowhite';
export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="left">{WhiteWeiss} </div>
        <div className="right">
          <div className="section">
            <div className="title fc-white fw-bold"> EMAIL</div>
            <div className="content fc-light">team@weiss.com</div>
          </div>
          <div className="section">
            <div className="title fc-white fw-bold"> ADRESSE</div>
            <div className="content fc-light">
              200 W Cesar Chavez St, Ste 350, Austin, TX 78701
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="bottom">
        <div className="left">
          <a href="#">Terms of Service</a>{' '}
          <svg
            width="2"
            height="10"
            viewBox="0 0 2 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 10V0" stroke="white" stroke-opacity="0.3" />
          </svg>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="right fc-white">
          © WEISS Limited | 2022 All Rights Reserved.{' '}
        </div>
      </div>
    </div>
  );
}
