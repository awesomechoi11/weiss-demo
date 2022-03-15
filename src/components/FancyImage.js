import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import motion from 'framer-motion';

export default function FancyImage({ src, className, ...props }) {
  const imgRef = useRef();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!imgRef.current) return;
    imgRef.current.onload = () => {
      console.log('loaded!');
      setLoaded(true);
    };
  }, [src]);

  return (
    <div class={clsx('fancy-image', loaded && 'loaded', className)}>
      <motion.img ref={imgRef} src={src} {...props} />
    </div>
  );
}
