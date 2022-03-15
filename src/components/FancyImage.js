import React, { useEffect, useRef, useState, useMemo } from 'react';
import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';

export default function FancyImage({ src, className, ...props, revealOnScroll = false }) {
  const controls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.1,
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

  useEffect(()=>{
    if(revealOnScroll &&)
    controls.start('visible');
  },[revealOnScroll, loaded])

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
        {...props}
        variants={{
          hidden: { opacity: 1 },
          visible: { opacity: 1 },
        }}
        transition={{
          duration: 0.9,
        }}
      />
    </motion.div>
  );
}
