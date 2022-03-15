import clsx from 'clsx';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function RevealOnScroll({
  animVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  },
  children,
  className,
  ...props
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      {...props}
      className={clsx('reveal-wrapper', inView && 'in-view', className)}
      variants={animVariants}
      initial="hidden"
      animate={inView && 'visible'}
      transition={{
        delay: 0.6,
      }}
    >
      {children}
    </motion.div>
  );
}