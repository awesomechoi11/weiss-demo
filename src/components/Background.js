import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import RevealOnScroll from './Reveal';
import { useInView } from 'react-intersection-observer';

export default function Background() {
  return (
    <div className="background">
      <div className="banner"></div>
      <MotionGrid
        className="circles1"
        transition={{
          staggerChildren: 0.1,
        }}
      />
      <MotionGrid
        className="circles2"
        transition={{
          staggerChildren: 0.06,
        }}
        x={4}
        y={6}
      />
      <MotionGrid
        className="circles3"
        transition={{
          staggerChildren: 0.06,
        }}
        x={3}
        y={6}
      />
    </div>
  );
}

const circleVariants = {
  hidden: {
    opacity: 0,
    scale: 0.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const RingSvg = (
  <motion.svg
    width="164rem"
    height="164rem"
    variants={circleVariants}
    viewBox="0 0 164 164"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M82 0C36.7 0 0 36.7 0 82C0 127.3 36.7 164 82 164C127.3 164 164 127.3 164 82C164.1 36.7 127.3 0 82 0ZM82 132.2C54.3 132.2 31.8 109.7 31.8 82C31.8 54.3 54.3 31.8 82 31.8C109.7 31.8 132.2 54.3 132.2 82C132.2 109.8 109.8 132.2 82 132.2Z"
      fill="#6FA9C4"
      fillOpacity="0.1"
    />
  </motion.svg>
);

const CircleSvg = ({ x, y, ...props }) => (
  <motion.svg
    variants={{
      hidden: {
        opacity: 0,
        scale: 0.1,
        x,
        y,
      },
      visible: {
        opacity: 1,
        scale: 1,
        x,
        y,
      },
    }}
    width="21rem"
    height="21rem"
    viewBox="0 0 21 21"
    fill="none"
    className="circle"
    {...props}
  >
    <path d="M0 10.1609C0 4.55052 4.53328 0 10.1225 0C15.7116 0 20.2449 4.55052 20.2449 10.1609C20.2449 15.7714 15.7151 20.3219 10.1225 20.3219C4.52976 20.3219 0 15.7749 0 10.1609Z" />
  </motion.svg>
);

function MotionGrid({ x = 2, y = 6, gap = 7.57, threshold = 1, ...props }) {
  const { ref, inView } = useInView({
    threshold,
  });

  return (
    <motion.div
      ref={ref}
      {...props}
      initial="hidden"
      animate={inView && 'visible'}
    >
      {[...Array(y)].map((undefined, yIndex) =>
        [...Array(x)].map((undefined, xIndex) => (
          <CircleSvg
            key={yIndex + '-' + xIndex}
            x={xIndex * (21 + gap) + 'rem'}
            y={yIndex * (21 + gap) + 'rem'}
          />
        ))
      )}
    </motion.div>
  );
}
