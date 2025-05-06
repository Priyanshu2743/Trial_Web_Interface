import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './newbi.css'; 

const data = [
  { id: 1, icon: "💡", title: "Creative Ideas" }, // Using original icons
  { id: 2, icon: "🎯", title: "Target Goals" },
  { id: 3, icon: "💰", title: "Funding" },
  { id: 4, icon: "⚙️", title: "Execution" },
  { id: 5, icon: "📈", title: "Growth" },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Stagger lines and steps
    },
  },
};

const centerVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const stepVariants = (index) => ({ // Pass index for dynamic calculation
  hidden: { opacity: 0, x: 50 }, // Start from right, fade in
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 + index * 0.15, // Stagger steps slightly after center
      duration: 0.5,
      ease: "easeOut",
    },
  },
});

const lineVariants = (index) => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            delay: index * 0.15, // Stagger line drawing
            duration: 0.8,
            ease: "easeInOut",
        },
    },
});


const BusinessInfographics1 = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 }); // Adjust threshold as needed

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // --- Define positions (adjust these percentages/pixels based on final styling) ---
  const centerCoords = { x: "25%", y: "50%" }; // Center of the main circle relative to container width/height
  const stepPositions = data.map((_, index) => ({
    // Calculate Y position for each step node, alternating slightly
    x: 60, // Percentage from left for step nodes
    y: 15 + index * 18 + (index % 2 === 1 ? 3 : -3), // Base + spacing + alternation
  }));


  return (
    <div className="infographic-container" ref={ref}>
      {/* Blurred Background Element */}
      <div className="infographic-background"></div>

      {/* SVG Layer for Connecting Lines - Positioned behind content */}
      <motion.svg
        className="infographic-svg-lines"
        viewBox="0 0 100 100" // Use viewBox for responsive scaling
        preserveAspectRatio="none" // Allow stretching if needed, or adjust
        initial="hidden"
        animate={controls}
        variants={containerVariants} // Use container variants for stagger control if needed on SVG itself
      >
        {stepPositions.map((pos, index) => (
           <motion.path
                key={`line-${index}`}
                d={`M ${centerCoords.x.replace('%','')} ${centerCoords.y.replace('%','')} Q ${centerCoords.x.replace('%','')*1.1} ${pos.y*0.9} ${pos.x} ${pos.y}`} // Quadratic Bezier Curve (adjust control points as needed)
                // Alternative: Straight Line `M ${centerCoords.x} ${centerCoords.y} L ${pos.x} ${pos.y}`
                stroke="white"
                strokeWidth="0.8" // Thinner line relative to viewBox
                fill="none"
                variants={lineVariants(index)} // Animate each line individually
                initial="hidden" // Ensure individual animation starts hidden
                animate={controls} // Trigger animation via controls
            />
        ))}
      </motion.svg>

      {/* Main Content Area */}
      <div className="infographic-layout">
          {/* Central Circle */}
          <motion.div
            className="infographic-main"
            initial="hidden"
            animate={controls}
            variants={centerVariants}
            style={{ left: centerCoords.x, top: centerCoords.y }} // Position based on coords
          >
            <div className="icon">🌐</div>
            <h2>BUSINESS INFOGRAPHIC</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh.</p>
          </motion.div>

          {/* Steps Container */}
          <div className="infographic-steps">
            {data.map((item, index) => {
              const pos = stepPositions[index];
              return (
                <motion.div
                  key={item.id}
                  className="infographic-step-wrapper"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }} // Position wrapper absolutely
                  variants={stepVariants(index)} // Pass index to variants
                  initial="hidden"
                  animate={controls}
                >
                   {/* Step Node (White Circle with Icon) */}
                  <div className="step-node">
                      <div className="step-icon">{item.icon}</div>
                  </div>
                   {/* Step Content Box (Dark Arrow Shape) */}
                  <div className="infographic-step">
                     <div className="step-number-badge">{`0${item.id}`}</div>
                     <div className="step-content">
                       <h3>{item.title}</h3>
                       <p>Lorem ipsum dolor sit amet, et it consectetur adipiscing elit, sed diam nonummy nibh.</p>
                     </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
      </div>
    </div>
  );
};

export default BusinessInfographics1;