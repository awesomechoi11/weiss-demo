import RevealOnScroll from './Reveal';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import clsx from 'clsx';
import Slide from './Slide';
import useTimer from '../useTimer';
// slider has cover until image is loaded

export default function Slider({ slides, className }) {
  const [currentIndex, setIndex] = useState(null);
  function goto(newIndex = 0) {
    // same index
    if (currentIndex === newIndex) return;

    // hide
    if (newIndex === null) {
      setIndex(null);
      return;
    }

    // make it safe
    if (typeof newIndex !== 'number') return;
    newIndex = newIndex % slides.length;

    setIndex(newIndex);
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
  const [inTransition, setTransition] = useState(true);
  useEffect(() => {
    if (!inTransition) return;
    setTimeout(() => {
      setTransition(false);
    }, 1700);
  }, [inTransition]);

  const { time, completed, reset } = useTimer();
  useEffect(() => {
    if (completed) {
      console.log('hellow');
      //  reset()
    }
  }, [completed]);

  return (
    <div className={clsx('slider', className)}>
      {/* images */}
      <div className="frame">
        <AnimatePresence>
          {currentIndex !== null && (
            <Slide key={currentIndex} {...slides[currentIndex]} />
          )}
        </AnimatePresence>
      </div>
      {/* controls */}
      <div
        onClick={() => {
          if (inTransition) return;
          setTransition(true);
          next();
        }}
      >
        next{' '}
      </div>
    </div>
  );
}
