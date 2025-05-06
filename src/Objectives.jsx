import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const data = [
  { id: 1, icon: "💡", title: "Creative Ideas" },
  { id: 2, icon: "🎯", title: "Target Goals" },
  { id: 3, icon: "💰", title: "Funding" },
  { id: 4, icon: "⚙️", title: "Execution" },
  { id: 5, icon: "📈", title: "Growth" },
];

const BusinessInfographic = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="infographic-container" ref={ref}>
      <div className="infographic-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="infographic-main"
        >
          <div className="icon">🌐</div>
          <h2>Business Infographic</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </motion.div>
      </div>
      <div className="infographic-steps">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            className={`infographic-step step-${index + 1}`}
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="step-icon">{item.icon}</div>
            <div className="step-content">
              <h3>{item.title}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="step-number">0{item.id}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BusinessInfographic;