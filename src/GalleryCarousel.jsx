import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
  {
    src: "/assets/1.jpg",
    title: "Lovers in the Rain",
    artist: "Alex Monroe"
  },
  {
    src: "/assets/2.jpg",
    title: "Country Walk",
    artist: "Sophie Lin"
  },
  {
    src: "/assets/3.jpg",
    title: "Keeper of the Night",
    artist: "Robbie Arnott"
  },
  {
    src: "/assets/4.jpg",
    title: "Street Colors",
    artist: "Lana Wu"
  },
  {
    src: "/assets/5.jpg",
    title: "Mystic Falls",
    artist: "Jonas Hill"
  }
];

const GalleryCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-section">
      <div className="gallery-header">
        <h1>
          Drive into <span className="highlight">creativity</span> with our <span className="script">gallery collection</span>
        </h1>
        <p>
          Explore our curated gallery collections, featuring captivating works from renowned artists, and immerse yourself in upcoming exhibitions and events that celebrate creativity and expression.
        </p>
        <button className="explore-btn">Explore Collection</button>
      </div>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={handlePrev}>⟵</button>

        <div className="carousel">
          {images.map((img, index) => {
            const offset = index - activeIndex;
            const scale = offset === 0 ? 1.1 : 0.9;
            const zIndex = offset === 0 ? 2 : 1;
            return (
              <motion.div
                className={`carousel-item ${offset === 0 ? "active" : ""}`}
                key={index}
                style={{ transform: `translateX(${offset * 120}%) scale(${scale})`, zIndex }}
                whileHover={{ scale: 1.15 }}
              >
                <img src={img.src} alt={img.title} />
              </motion.div>
            );
          })}
        </div>

        <button className="arrow right" onClick={handleNext}>⟶</button>

        <div className="image-info">
          <h2>{images[activeIndex].title}</h2>
          <p>{images[activeIndex].artist}</p>
        </div>
      </div>

      <div className="gallery-footer">
        <h2><span className="about-highlight">About</span> the <span className="script">gallery</span></h2>
        <p>
          Welcome to Artfy, where creativity thrives. We showcase diverse collections, from timeless classics to contemporary art, connecting artists and audiences through inspiring exhibitions.
        </p>
      </div>
    </div>
  );
};

export default GalleryCarousel;
