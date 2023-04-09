import React, { useEffect, useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

function TexteDefilant() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [-900, -500]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <div style={{ height: '200vh' }}>
      <motion.div style={{ x, y }}>
        <h1>Ce texte défile en fonction de la direction du scroll !</h1>
      </motion.div>
    </div>
  );
}

export default TexteDefilant;