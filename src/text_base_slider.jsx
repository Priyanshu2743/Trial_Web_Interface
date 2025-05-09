import React, { useState, useEffect, useRef } from 'react';

const images = [
  {
    src: '/assets/3.jpg', // Replace with your image URLs
    alt: 'Luolavuori Exterior 1',
    title: 'EXTERIORS',
    subtitle: 'Luolavuori',
  },
  {
    src: '/assets/4.jpg', // Replace with your image URLs
    alt: 'Luolavuori Exterior 2',
    title: 'EXTERIORS',
    subtitle: 'Luolavuori',
  },
  {
    src: '/assets/5.jpg',
    alt: 'Cabin on the Moon',
    title: '3D ART',
    subtitle: 'Cabin on the Moon',
  },
  // Add more image objects as needed
];

const MyDesignComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(componentRef.current); // Stop observing once visible
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div ref={componentRef} className={`design-component ${isVisible ? 'fade-in' : ''}`}>
      <div className="left-section">
        <h2 className="intro-text">
          My name is <span className="highlight">Tomek Michalski</span>
        </h2>
        <p className="sub-text">and I love good design</p>
        <button className="about-button">MORE ABOUT ME</button>
      </div>
      <div className="right-section">
        <div className="slider-container">
          <div
            className="slider"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="slide">
                <img src={image.src} alt={image.alt} className="slide-image" />
                <div className="image-details">
                  <h3 className="image-title">{image.title}</h3>
                  <p className="image-subtitle">{image.subtitle}</p>
                  <div className="see-details">SEE DETAILS</div>
                </div>
              </div>
            ))}
          </div>
          <button className="slider-button prev" onClick={goToPrevious}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L9.83 12z" />
            </svg>
          </button>
          <button className="slider-button next" onClick={goToNext}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 14.17 12l-5.58 4.59L10 18l6-6z" />
            </svg>
          </button>
          <div className="dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>
        <div className="other-options">
          <button className="option-button active">3D ART</button>
          <button className="option-button">DESIGN</button>
          <button className="option-button">EXTERIOR</button>
        </div>
      </div>
    </div>
  );
};

export default MyDesignComponent;