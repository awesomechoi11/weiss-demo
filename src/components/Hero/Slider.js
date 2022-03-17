import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import clsx from 'clsx';
import Slide from './Slide';
import useTimer from '../useTimer';
// slider has cover until image is loaded

export default function Slider({ slides, className }) {
  // transition lockout is auto released after exit animation
  // inTransition is only true after goto runs
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
    if (inTransition) {
      // edge case / need to release transition lock
      let timeoutId = setTimeout(() => {
        setTransition(false);
      }, 1700);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, []);

  const { time, completed, reset, pause, start } = useTimer(5);
  const timerControls = useAnimation();
  useEffect(() => {
    if (completed) {
      next();
    }
  }, [completed]);
  useEffect(() => {
    if (completed) {
      timerControls.set({
        width: 0,
      });
    } else {
      timerControls.start({
        width: 100 * ((5 - time) / 5) + '%',
      });
    }
  }, [time]);
  return (
    <div className={clsx('slider', className)}>
      {/* timer indicator */}
      <motion.div
        className="timer-indicator bgc-primary"
        initial={{
          width: '0%',
          height: '4rem',
        }}
        animate={timerControls}
        transition={{
          // ease: [0.18, 0, 0, 1],
          ease: 'linear',
          duration: completed ? 0 : 1,
        }}
      />

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
        <AnimatePresence
          onExitComplete={() => {
            setTransition(false);
          }}
        >
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
            className={clsx(
              'control-button',
              index === currentIndex && 'active',
              inTransition && 'locked'
            )}
          >
            {String(index + 1).padStart(2, '0')}
            <div className="indicator" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
