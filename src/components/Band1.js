import React from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './Reveal';
import RightArrow from '../assets/rightarrow';
import FancyImage from './FancyImage';

export default function Band1() {
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
    <div className="band1">
      <div className="content">
        <RevealOnScroll className="left" animVariants={{}}>
          <motion.div className="subheader" variants={defaultVariants}>
            Unsere Firmenhistorie{' '}
          </motion.div>
          <motion.div className="header" variants={defaultVariants}>
            Ut pro audiam mediocritatem. Eius populo no sed, upetentium
            gubergren. Aliqua ponderum.{' '}
          </motion.div>
          <motion.div className="body" variants={defaultVariants}>
            Cum 30 euismod interpretaris mediocritatem at, te has rebum audiam,
            cu pro impedit complectitur. Eam no dicam recteque, cu augue
            abhorreant expetendis eos, mel ne nullam noster indoctum. Vide mutat
            graeci id has.
          </motion.div>
          <motion.button variants={defaultVariants}>
            Learn More
            {RightArrow}
          </motion.button>
        </RevealOnScroll>
      </div>
      <FancyImage src="https://stackblitz.com/files/react-v6g1bq/github/awesomechoi11/weiss-demo/master/src/assets/4.jpg" />
    </div>
  );
}
