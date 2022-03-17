import RevealOnScroll from './Reveal';
// import img1 from '../assets/0.jpg';
import React, { useState, useEffect } from 'react';
import playIcon from '../assets/playicon.svg';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
export default function Hero() {
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

const coverVariants = {
  left: {
    x: '-100%',
  },
  middle: {
    x: '0%',
  },
  right: {
    x: '100%',
  },
};

const slideVariants = {
  left: {
    x: '-100%',
  },
  middle: {
    x: '0%',
  },
  right: {
    x: '100%',
  },
};

function Slider({ slides, className }) {
  const [currentIndex, setIndex] = useState(null);
  const [cover, setCover] = useState('middle');
  const [loaded, setLoaded] = useState(false);

  function goto(index = 0) {
    if (currentIndex === index) return;

    //edge case / first load / no current index
    if (currentIndex === null) {
      return;
    }

    // slide change flow
    // exit
    setCover(middle);
    setLoaded(false);
    // load

    //reveal
  }

  function next() {
    let nextIndex = (currentIndex + 1) % slides.length;
    goto(nextIndex);
  }

  //first load
  // useEffect(() => {
  //   goto(0);
  // }, []);

  console.log(playIcon, slides);
  return (
    <div className={clsx('slider', className)}>
      {/* images */}
      <div className="frame">
        <motion.div
          className="cover"
          initial="middle"
          animate={cover}
          variants={coverVariants}
        />
        <AnimatePresence>
          {currentIndex !== null && (
            <Slide
              key={currentIndex}
              setLoaded={setLoaded}
              {...slides[currentIndex]}
            />
          )}
        </AnimatePresence>
      </div>
      {/* controls */}
    </div>
  );
}
function Slide({ img, alt, isVideo, video, setLoaded, ...props }) {
  // know when image loads
  const imgRef = useRef();
  useEffect(() => {
    if (!imgRef.current) return;
    imgRef.current.onload = () => {
      setLoaded(true);
    };
  }, [src]);

  return (
    <motion.div className="slide" {...props} variants={slideVariants}>
      {isVideo && (
        <div className="overlay">
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            className="play-button"
          >
            <img alt="play" src={playIcon} />
          </motion.div>
        </div>
      )}
      <img ref={imgRef} src={img} alt={alt} />
    </motion.div>
  );
}
