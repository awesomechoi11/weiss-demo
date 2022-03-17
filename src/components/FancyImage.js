import React, { useEffect, useRef, useState, useMemo } from 'react';
import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FancyImage({
  src,
  className,
  revealOnScroll = false,
  ...props
}) {
  const controls = useAnimation();
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  // know when image loads
  const imgRef = useRef();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!imgRef.current) return;
    imgRef.current.onload = () => {
      setLoaded(true);
    };
  }, [src]);

  useEffect(() => {
    if (visible) return;
    if (revealOnScroll) {
      if (!inView) return;
      if (loaded) {
        controls.start('visible');
      } else {
        controls.start({
          opacity: 1,
        });
      }
    } else {
      if (loaded) {
        controls.start('visible');
      }
    }
  }, [revealOnScroll, inView, loaded]);
  useEffect(() => {});

  return (
    <motion.div
      ref={ref}
      className={clsx('fancy-image', loaded && 'loaded', className)}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          scale: 0.9,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
        },
      }}
      transition={{
        duration: 1.5,
        ease: [0.18, 0, 0, 1],
      }}
    >
      <motion.div
        className="background"
        variants={{
          hidden: { width: '100%' },
          visible: { width: '0%' },
        }}
        transition={{
          duration: 0.9,
        }}
      />
      <motion.img
        ref={imgRef}
        src={src}
        variants={{
          hidden: { opacity: 1, scale: 1.2 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{
          duration: 0.9,
        }}
        {...props}
      />
    </motion.div>
  );
}
