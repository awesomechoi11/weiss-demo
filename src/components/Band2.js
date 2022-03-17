import React from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './Reveal';
import RightArrow from '../assets/rightarrow';
import FancyImage from './FancyImage';

export default function Band2() {
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
    <div className="band2">
      <RevealOnScroll className="header" animVariants={{}}>
        <motion.div className="top" variants={defaultVariants}>
          Wissenswertes{' '}
        </motion.div>
        <div className="bottom">
          <motion.div className="body" variants={defaultVariants}>
            Integer massa urna, senectus maecenas in dapibus urna amet
            hendrerit. In ipsum, morbi amet aenean. Iaculis donec sem nullam
            nunc condimentum nisl non gravida in.
          </motion.div>
          <motion.button className="secondary" variants={defaultVariants}>
            Learn More
            {RightArrow}
          </motion.button>
        </div>
      </RevealOnScroll>
      <div className="content">
        <RevealOnScroll className="left" animVariants={{}}></RevealOnScroll>
        <RevealOnScroll className="right" animVariants={{}}></RevealOnScroll>
      </div>
    </div>
  );
}
