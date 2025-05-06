import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const TrekkerHighlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => setShowVideo(true);
  const closeVideo = () => setShowVideo(false);

  return (
    <section
      className="trekker-section"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s ease-out",
      }}
    >
      <motion.div
        className="highlight-titles"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="main-title">🌍 Trekker’s Highlights</h2>
        <p className="sub-title">Real Stories from Around the World</p>
      </motion.div>

      <div className="trekker-container">
        {/* Text Side */}
        <motion.div
          className="trekker-info"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <div className="user-profile">
            <img src="/assets/2.jpg" alt="User" />
            <div>
              <h4>Maria Angelica</h4>
              <p>Manila, Philippines</p>
            </div>
          </div>
          <div className="rating">★★★★★</div>
          <h3>Unforgettable Journey Through Turkey</h3>
          <p>
            Thanks to Globe Trekker, my trip to Turkey was truly magical. Their expert
            guides and insider tips led me to hidden gems and must-see spots I would have
            missed otherwise...
          </p>
        </motion.div>

        {/* Image / Video Side */}
        <motion.div
          className="trekker-images"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <div className="main-img img-hover">
            <img src="/assets/5.jpg" alt="Turkey Hot Air Balloon" />
          </div>
          <div className="thumb-img" onClick={openVideo}>
            <img src="/assets/4.jpg" alt="Bosphorus" />
            <div className="play-icon-wrapper">
            <div className="play-icon">▶</div>
          </div>
          <p className="play-label">Watch Sunset Cruise Video</p>
        </div>

        </motion.div>
      </div>

      <motion.button
        className="highlight-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        See more highlights
      </motion.button>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="video-box"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <button className="close-btn" onClick={closeVideo}>✖</button>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Scxs7L0vhZ4"
                title="Trek Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TrekkerHighlights;
