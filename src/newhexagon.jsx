import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const tiles = [
  { label: "Web Development", img: "9.jpg", link: "/web" },
  { label: "AI & ML", img: "2.jpg", link: "/ai" },
  { label: "Cyber Security", img: "3.jpg", link: "/cyber" },
  { label: "Cloud Computing", img: "4.jpg", link: "/cloud" },
  { label: "Data Science", img: "5.jpg", link: "/data" },
  { label: "Mobile Development", img: "6.jpg", link: "/mobile" }, // Reused img 5
  { label: "Blockchain", img: "12.jpg", link: "/blockchain" },   // Reused img 4
  { label: "DevOps", img: "15.jpg", link: "/devops" },         // Reused img 3
  { label: "UI/UX Design", img: "3.heic", link: "/uiux" },       // Reused img 2
  { label: "Digital Marketing", img: "14.jpg", link: "/marketing" }, // Reused img 1
  // Add more tiles here... adjust row slicing below if needed
];

// --- Animation Variants ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Slightly faster stagger
      delayChildren: 0.2,
    },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -5 }, // Added rotation
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring", // Spring animation for bounce effect
      stiffness: 100,
      damping: 12,
      duration: 0.6,
      ease: "easeOut"
    },
  },
};

const titleVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" }
    }
};

export default function HexagonGrids() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 }); // Lower threshold

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  // --- Define Rows for the Hexagonal Structure (e.g., 3-4-3) ---
  const row1 = tiles.slice(0, 3);
  const row2 = tiles.slice(3, 7);
  const row3 = tiles.slice(7, 10);

  return (
    <div className="hexagon-grid-wrapper" ref={ref}>
      <motion.h2
        className="section-title"
        initial="hidden"
        animate={controls} // Animate title along with grid
        variants={titleVariants}
      >
        Explore Our Domains
      </motion.h2>

      <motion.div
        className="hexagon-grid-container" // Renamed for clarity
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Row 1 */}
        <div className="hex-row">
          {row1.map((tile, index) => (
            <motion.div
              key={`row1-${index}`}
              className="hex-tile"
              variants={tileVariants}
              // Removed individual transitions, handled by container stagger
            >
              <a href={tile.link} className="hex-link" aria-label={`Learn more about ${tile.label}`}>
                <div
                  className="hex-content"
                  style={{ backgroundImage: `url(/assets/${tile.img})` }}
                >
                  <div className="overlay">
                    <h3>{tile.label}</h3>
                    <span className="learn-more"> {/* Changed to span for better semantics within 'a' */}
                      <FontAwesomeIcon icon={faArrowRight} /> Learn More
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Row 2 (Indented) */}
        <div className="hex-row hex-row-indent">
           {row2.map((tile, index) => (
            <motion.div
              key={`row2-${index}`}
              className="hex-tile"
              variants={tileVariants}
            >
              <a href={tile.link} className="hex-link" aria-label={`Learn more about ${tile.label}`}>
                <div
                  className="hex-content"
                  style={{ backgroundImage: `url(/assets/${tile.img})` }}
                >
                  <div className="overlay">
                    <h3>{tile.label}</h3>
                    <span className="learn-more">
                      <FontAwesomeIcon icon={faArrowRight} /> Learn More
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="hex-row">
           {row3.map((tile, index) => (
            <motion.div
              key={`row3-${index}`}
              className="hex-tile"
              variants={tileVariants}
            >
             <a href={tile.link} className="hex-link" aria-label={`Learn more about ${tile.label}`}>
                <div
                  className="hex-content"
                  style={{ backgroundImage: `url(/assets/${tile.img})` }}
                >
                  <div className="overlay">
                    <h3>{tile.label}</h3>
                    <span className="learn-more">
                      <FontAwesomeIcon icon={faArrowRight} /> Learn More
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}