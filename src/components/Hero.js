import RevealOnScroll from './Reveal';
import React, { useState, useEffect, useRef } from 'react';
import playIcon from '../assets/playicon.svg';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import clsx from 'clsx';
import Slider from './Hero/Slider';

export default function Hero() {
  const sliderData = [
    {
      img: 'https://stackblitz.com/files/react-v6g1bq/github/awesomechoi11/weiss-demo/master/src/assets/0.jpg',
      alt: 'slide 1',
      isVideo: true,
      video: 'vid link here',
    },
    {
      img: 'https://stackblitz.com/files/react-v6g1bq/github/awesomechoi11/weiss-demo/master/src/assets/1.jpg',
      alt: 'slide 2',
      isVideo: false,
    },
    {
      img: 'https://stackblitz.com/files/react-v6g1bq/github/awesomechoi11/weiss-demo/master/src/assets/2.jpg',
      alt: 'slide 3',
      isVideo: true,
      video: 'vid link here',
    },
  ];

  return (
    <div className="hero">
      <RevealOnScroll>
        <div>LOREM IPSUM DOLOR</div>
        <div>LOREM IPSUM DOLOR</div>
        <div>LOREM IPSUM DOLOR</div>
      </RevealOnScroll>
      <Slider slides={sliderData} />
    </div>
  );
}
