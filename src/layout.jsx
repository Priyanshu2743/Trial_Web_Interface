import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

const ChurchLayout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="church-layout" ref={ref}>
      <motion.p 
        className="small-title" 
        initial="hidden" 
        animate={controls} 
        variants={titleVariants}
      >
        Ethiccraft Presents
      </motion.p>

      <motion.h1 
        className="main-title" 
        initial="hidden" 
        animate={controls} 
        variants={titleVariants}
      >
        <span className="highlight">SPIRIT OF</span> <br />
        <span className="outline">CELEBRATION</span>
      </motion.h1>

      <motion.p 
        className="established" 
        initial="hidden" 
        animate={controls} 
        variants={titleVariants}
      >
        1971 <br /> ESTABLISHED
      </motion.p>

      <div className="scroll-indicator">
        <p>SCROLL DOWN</p>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          ↓
        </motion.span>
      </div>

      <div className="images">
        <motion.div 
          className="image image-left" 
          whileHover={{ scale: 1.05, rotate: -3 }}
          initial="hidden" 
          animate={controls} 
          variants={imageVariants}
        >
          <img src="/assets/1.jpg" alt="Statue" />
          <p className="label">Personalized</p>
        </motion.div>

        <motion.div 
          className="image image-center" 
          whileHover={{ scale: 1.05 }}
          initial="hidden" 
          animate={controls} 
          variants={imageVariants}
        >
          <img src="/assets/2.jpg" alt="Church Center" />
        </motion.div>

        <motion.div 
          className="image image-right" 
          whileHover={{ scale: 1.05, rotate: 3 }}
          initial="hidden" 
          animate={controls} 
          variants={imageVariants}
        >
          <img src="/assets/1.jpg" alt="Church Dome" />
          <div className="tape"></div>
        </motion.div>
      </div>

      <motion.p 
        className="footer" 
        initial="hidden" 
        animate={controls} 
        variants={titleVariants}
      >
        Viplava - A revolution in consciousness
      </motion.p>
    </div>
  );
};

export default ChurchLayout;