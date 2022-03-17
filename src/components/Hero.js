import RevealOnScroll from './Reveal';
import React from 'react';
import RightArrow from '../assets/rightarrow';
import { motion } from 'framer-motion';
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

  const defaultVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.18, 0, 0, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: -15,
    },
  };

  return (
    <div className="hero">
      <RevealOnScroll className="left" animVariants={{}}>
        <motion.div className="subheader" variants={defaultVariants}>
          LOREM IPSUM DOLOR
        </motion.div>
        <motion.div className="header" variants={defaultVariants}>
          Lorem ipsum dolor sit amet, est mollis evertitur ut,{' '}
        </motion.div>
        <motion.div className="body" variants={defaultVariants}>
          Lorem ipsum dolor sit amet, est mollis evertitur ut, clita utinam
          quaeque ad sed, an legere concludaturque eum. Duo omnis solet
          dissentiet te, ea sed quis erat reprehendunt, cetero consetetur
          philosophia mel in.{' '}
        </motion.div>
        <motion.button variants={defaultVariants}>
          Learn More
          {RightArrow}
        </motion.button>
      </RevealOnScroll>
      <Slider slides={sliderData} />
    </div>
  );
}
