import React, { useState, useEffect } from 'react';

export default function useTimer(length = 3, defaultRunning = true) {
  const [time, setTime] = useState(length);
  const [running, setRunning] = useState(defaultRunning);

  function tick() {
    return setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  }

  function reset() {
    setTime(length);
  }
  function pause() {
    setRunning(false);
  }
  function start() {
    setRunning(true);
  }

  useEffect(() => {
    // timer logic
    // runs timeout to update time after 1 second
    // time update triggers effect / loops forever until 0
    if (!running) return;
    if (time < 0) return;
    let timerId = tick();
    return () => {
      clearTimeout(timerId);
    };
  }, [running, length, time]);

  return {
    time,
    completed: time < 0,
    reset,
    pause,
    start,
  };
}
