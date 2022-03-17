import RevealOnScroll from './Reveal';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import clsx from 'clsx';
import Slide from './Slide';
import useTimer from '../useTimer';
// slider has cover until image is loaded

export default function Slider({ slides, className }) {
  const [inTransition, setTransition] = useState(true);

  const [currentIndex, setIndex] = useState(null);
  function goto(newIndex = 0) {
    // transition lock
    if (inTransition && currentIndex !== null) return;

    // same index
    if (currentIndex === newIndex) return;

    // hide
    if (newIndex === null) {
      setIndex(null);
      setTransition(true);
      return;
    }

    // make it safe
    if (typeof newIndex !== 'number') return;
    newIndex = newIndex % slides.length;
    setIndex(newIndex);

    // reset timer
    setTransition(true);
    reset();
  }

  function next() {
    goto(currentIndex + 1);
  }

  // first init
  useEffect(() => {
    if (currentIndex === null) {
      goto(0);
    }
  }, []);

  // transition lockout is auto released after specific time
  // inTransition is only true after goto runs

  useEffect(() => {
    if (!inTransition) return;
    setTimeout(() => {
      setTransition(false);
    }, 1700);
  }, [inTransition]);

  const { time, completed, reset, pause, start } = useTimer(5);
  useEffect(() => {
    if (completed) {
      next();
    }
  }, [completed]);

  return (
    <div className={clsx('slider', className)}>
      {/* images */}
      <motion.div
        className="frame"
        onHoverStart={() => {
          pause();
        }}
        onHoverEnd={() => {
          start();
        }}
      >
        <AnimatePresence>
          {currentIndex !== null && (
            <Slide key={currentIndex} {...slides[currentIndex]} />
          )}
        </AnimatePresence>
      </motion.div>
      {/* controls */}
      <motion.div
        onHoverStart={() => {
          pause();
        }}
        onHoverEnd={() => {
          start();
        }}
        className="controls"
      >
        {slides.map((undefined, index) => (
          <div
            onClick={() => {
              goto(index);
            }}
            key={index}
          >
            {String(index + 1).padStart(2, '0')}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
