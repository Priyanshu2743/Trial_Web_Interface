import React, { useState, useEffect } from 'react';

// Main App component
const Text = () => {
  // State to manage the active slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data for the slider content
  const slides = [
    {
      id: '01',
      title: 'What level of hiker are you?',
      subtitle: 'GET STARTED',
      description:
        'Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you: novice, moderate, advanced moderate, expert, or expert backpacker?',
      image: 'https://placehold.co/600x400/1a202c/ffffff?text=Mountain+View+1', // Placeholder image
      alt: 'Mountain View 1',
    },
    {
      id: '02',
      title: 'Picking the right Hiking Gear!',
      subtitle: 'HIKING ESSENTIALS',
      description:
        'The nice thing about beginning hiking is that you don\'t really need any special gear you can probably get away with things you already have. Let\'s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe if they get sweaty or wet.',
      image: 'https://placehold.co/600x400/1a202c/ffffff?text=Mountain+View+2', // Placeholder image
      alt: 'Mountain View 2',
    },
    {
      id: '03',
      title: 'Understand Your Map & Timing',
      subtitle: 'WHERE YOU GO IS THE KEY',
      description:
        'To start, print out the hiking guide and map. If it\'s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, read the guide and know that say, in a mile, I make a right turn at the Junction.',
      image: 'https://placehold.co/600x400/1a202c/ffffff?text=Mountain+View+3', // Placeholder image
      alt: 'Mountain View 3',
    },
  ];

  // Function to handle moving to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to handle moving to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  // Autoplay functionality (optional, can be removed)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentSlide]);

  return (
    <div className="app-container">
      <div className="slider-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide-container ${
              index === currentSlide ? 'active-slide' : 'hidden-slide'
            }`}
          >
            {/* Content Section */}
            <div className="content-section">
              <span className="slide-id">{slide.id}</span>
              <p className="slide-subtitle">{slide.subtitle}</p>
              <h2 className="slide-title">
                {slide.title}
              </h2>
              <p className="slide-description">
                {slide.description}
              </p>
              <a
                href="#"
                className="read-more-link group"
              >
                read more
                <span className="arrow-icon">
                  &rarr;
                </span>
              </a>
            </div>

            {/* Image Section */}
            <div className="image-section">
              <img
                src={slide.image}
                alt={slide.alt}
                className="slide-image"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1a202c/ffffff?text=Image+Not+Found'; }}
              />
            </div>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="navigation-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`dot-button ${index === currentSlide ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="nav-arrow left"
          aria-label="Previous slide"
        >
          &larr;
        </button>
        <button
          onClick={nextSlide}
          className="nav-arrow right"
          aria-label="Next slide"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Text;
