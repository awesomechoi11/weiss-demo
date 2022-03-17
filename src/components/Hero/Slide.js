import React, { useState, useEffect, useRef } from 'react';
import playIcon from '../../assets/playicon.svg';
import { motion } from 'framer-motion';

const slideVariants = {
  afterExit: {
    x: '-10%',
    zIndex: 1,
  },
  entered: {
    x: '0%',
    zIndex: 2,
  },
  beforeEnter: {
    x: '100%',
    zIndex: 3,
    transition: {
      delay: 0.2,
      duration: 1.5,
      ease: [0.18, 0, 0, 1],
    },
  },
};
const slideImageVariants = {
  loaded: {
    x: '0%',
    scale: 1,
  },
  loading: {
    x: '10%',
    scale: 1.12,
  },
};
const coverVariants = {
  loaded: {
    x: '-100%',
  },
  loading: {
    x: '0%',
  },
};

export default function Slide({
  img,
  alt,
  isVideo,
  video,
  setLoaded,
  ...props
}) {
  // know when image loads
  const imgRef = useRef();
  const [imgState, setImgState] = useState('loading');

  useEffect(() => {
    if (!imgRef.current) return;
    imgRef.current.onload = () => {
      setImgState('loaded');
    };
  }, [img]);

  return (
    <motion.div
      className="slide"
      {...props}
      variants={slideVariants}
      initial="beforeEnter"
      exit="afterExit"
      animate="entered"
      transition={{
        duration: 1.5,
        ease: [0.18, 0, 0, 1],
      }}
    >
      <motion.div
        className="cover"
        initial="loading"
        animate={imgState}
        variants={coverVariants}
        transition={{
          duration: 1.5,
          ease: [0.18, 0, 0, 1],
        }}
      />
      {isVideo && (
        <div className="overlay">
          <motion.div
            whileHover={{
              scale: 1.04,
            }}
            className="play-button"
          >
            <img alt="play" src={playIcon} />
          </motion.div>
        </div>
      )}
      <motion.img
        ref={imgRef}
        src={img}
        alt={alt}
        variants={slideImageVariants}
        initial="loading"
        animate={imgState}
        transition={{
          duration: 1.5,
          ease: [0.18, 0, 0, 1],
        }}
      />
    </motion.div>
  );
}
