import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const tiles = [
  { label: "Web Development", img: "1.jpg", link: "/web" },
  { label: "AI & ML", img: "2.jpg", link: "/ai" },
  { label: "Cyber Security", img: "3.jpg", link: "/cyber" },
  { label: "Cloud Computing", img: "4.jpg", link: "/cloud" },
  { label: "Data Science", img: "5.jpg", link: "/data" },
  { label: "Mobile Development", img: "5.jpg", link: "/mobile" },
  { label: "Blockchain", img: "4.jpg", link: "/blockchain" },
  { label: "DevOps", img: "3.jpg", link: "/devops" },
  { label: "UI/UX Design", img: "2.jpg", link: "/uiux" },
  { label: "Digital Marketing", img: "1.jpg", link: "/marketing" },
  // Add more tiles here...
];

export default function HexagonGrid() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <div className="hexagon-grid-wrapper" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Explore Our Domains
      </motion.h2>

      <motion.div
        className="hexagon-grid"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              when: "beforeChildren"
            }
          },
        }}
      >
        {tiles.map((tile, index) => (
          <motion.div
            key={index}
            className="hex-tile"
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div
              className="hex-content"
              style={{ backgroundImage: `url(/assets/${tile.img})` }}
            >
              <div className="overlay">
                <h3>{tile.label}</h3>
                <a className="learn-more" href={tile.link}>
                  <FontAwesomeIcon icon={faArrowRight} /> Learn More
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
