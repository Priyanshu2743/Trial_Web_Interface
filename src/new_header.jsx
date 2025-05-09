import React, { useState, useEffect, useRef } from 'react';
import { FaLeaf, FaChevronUp, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';

// Sample images - (Assuming sliderImages array is the same as before)
const sliderImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1508394323486-f37594139f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80', alt: 'Lush green forest canopy', posX: 'center', posY: 'center' },
  { id: 2, url: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Misty mountains and trees', posX: 'center', posY: 'top' },
  { id: 3, url: 'https://images.unsplash.com/photo-1440342359743-94991de38f36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Sunlight through forest leaves', posX: 'center', posY: 'bottom' },
  { id: 4, url: 'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Path leading into a dense forest', posX: 'center', posY: 'center' },
];


const EthiccraftSociety = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlideIndex, setPrevSlideIndex] = useState(null);

  const pageContainerRef = useRef(null);
  const rightPaneRef = useRef(null);
  const slideRefs = useRef(sliderImages.map(() => React.createRef()));

  // Refs for parallax elements
  const logoHeaderRef = useRef(null);
  const leftContentRef = useRef(null); // A wrapper for subtitle, desc, learn more
  const mainTitleOverlayRef = useRef(null);

  // Refs for title lines animation
  const titleLine1Ref = useRef(null);
  const titleLine2Ref = useRef(null);


  const nextSlide = () => {
    setPrevSlideIndex(currentSlide);
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setPrevSlideIndex(currentSlide);
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setPrevSlideIndex(currentSlide);
    setCurrentSlide(index);
  };

  // GSAP Title Reveal Animation
  useEffect(() => {
    if (titleLine1Ref.current && titleLine2Ref.current) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.set([titleLine1Ref.current, titleLine2Ref.current], { autoAlpha: 0, y: 50, skewX: -10 })
        .to(titleLine1Ref.current, { autoAlpha: 1, y: 0, skewX: 0, duration: 0.8 }, "+=0.3")
        .to(titleLine2Ref.current, { autoAlpha: 1, y: 0, skewX: 0, duration: 0.8 }, "-=0.6");
    }
  }, []);


  // GSAP Slider Transitions & CSS Variable Update
  useEffect(() => {
    // Update CSS variable for text effect
    if (rightPaneRef.current) {
      rightPaneRef.current.style.setProperty('--current-slide-image', `url(${sliderImages[currentSlide].url})`);
      rightPaneRef.current.style.setProperty('--slide-image-position-x', sliderImages[currentSlide].posX || 'center');
      rightPaneRef.current.style.setProperty('--slide-image-position-y', sliderImages[currentSlide].posY || 'center');
    }

    // Animate slides with GSAP
    slideRefs.current.forEach((slideRef, index) => {
      if (!slideRef.current) return;

      if (index === currentSlide) { // Incoming slide
        gsap.set(slideRef.current, { zIndex: 1, autoAlpha: 0, scale: 1.05 }); // Prepare for entry
        gsap.to(slideRef.current, {
          autoAlpha: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
        });
      } else if (index === prevSlideIndex && prevSlideIndex !== null) { // Outgoing slide
        gsap.set(slideRef.current, { zIndex: 0 }); // Ensure it's behind
        gsap.to(slideRef.current, {
          autoAlpha: 0,
          scale: 0.95,
          duration: 1.2,
          ease: 'power3.inOut',
        });
      } else { // Other non-active, non-outgoing slides
         gsap.set(slideRef.current, { autoAlpha: 0, zIndex: 0, scale: 1 }); // Ensure they are hidden and reset
      }
    });

  }, [currentSlide, prevSlideIndex, sliderImages]);


  // Auto-slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]); // Re-init interval if currentSlide changes externally (e.g. manual nav)


  // GSAP Mouse Move Parallax Effect
  useEffect(() => {
    const parallaxTargets = [
      { el: logoHeaderRef.current, factorX: 0.02, factorY: 0.03 },
      { el: leftContentRef.current, factorX: 0.015, factorY: 0.02 },
      { el: mainTitleOverlayRef.current, factorX: -0.01, factorY: -0.015 }, // Subtle counter-movement for title
    ];

    const handleMouseMove = (event) => {
      if (!pageContainerRef.current) return;
      const { clientX, clientY } = event;
      const { offsetWidth, offsetHeight } = pageContainerRef.current;

      const xPercent = (clientX / offsetWidth - 0.5); // -0.5 to 0.5
      const yPercent = (clientY / offsetHeight - 0.5); // -0.5 to 0.5

      parallaxTargets.forEach(target => {
        if (target.el) {
          gsap.to(target.el, {
            x: xPercent * target.factorX * 100, // Multiply by 100 for more noticeable pixel movement
            y: yPercent * target.factorY * 100,
            duration: 0.8, // Smooth transition
            ease: 'power1.out',
            overwrite: 'auto'
          });
        }
      });
    };

    const currentContainer = pageContainerRef.current; // Capture ref value
    if (currentContainer) {
      currentContainer.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener('mousemove', handleMouseMove);
        // Optional: Reset parallax elements to 0,0 on unmount if desired
        parallaxTargets.forEach(target => {
          if (target.el) gsap.to(target.el, { x: 0, y: 0, duration: 0.5 });
        });
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div className="page-container" ref={pageContainerRef}>
      <div className="left-pane">
        <header className="logo-header" ref={logoHeaderRef}>
          <div className="logo-leaves">
            <FaLeaf className="leaf leaf1" />
            <FaLeaf className="leaf leaf2" />
            <FaLeaf className="leaf leaf3" />
          </div>
          <div className="logo-text">
            <span className="logo-text-ethiccraft">ETHICCRAFT</span>
            <span className="logo-text-society">SOCIETY</span>
          </div>
          <p className="logo-tagline">YOU CAN LIVE YOUR LIFE</p>
        </header>
        <div className="left-pane-content-wrapper" ref={leftContentRef}> {/* Wrapper for parallax */}
          <h2 className="amazing-trips-subtitle">INSPIRING CHANGE</h2>
          <div className="description-text">
            There is a moment in the life of any aspiring craftsperson
            that it is time to build their first masterpiece. Explore ours.
          </div>
          <a href="#learn-more" className="learn-more-link">
            LEARN MORE <FaArrowRight className="learn-more-arrow" />
          </a>
        </div>
      </div>

      <div className="right-pane" ref={rightPaneRef}>
        <nav className="main-navigation">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#programs">PROGRAMS</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="image-slider-container">
          {sliderImages.map((slide, index) => (
            <div
              key={slide.id}
              ref={slideRefs.current[index]} // Assign ref to each slide
              className="slide" // GSAP will handle active state via autoAlpha
              style={{ // Keep background styles, GSAP handles opacity/transform
                backgroundImage: `url(${slide.url})`,
                backgroundPosition: `${slide.posX || 'center'} ${slide.posY || 'center'}`
              }}
              aria-hidden={index !== currentSlide}
            ></div>
          ))}
        </div>

        <div className="slider-controls-vertical">
          <div className="slider-dots-vertical">
            {sliderImages.map((_, index) => (
              <button
                key={`dot-${index}`}
                className={`dot ${index === currentSlide ? 'active' : ''}`} // Keep dot active style
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="slider-arrows-vertical">
            <button onClick={prevSlide} className="slider-arrow" aria-label="Previous Slide">
              <FaChevronUp />
            </button>
            <button onClick={nextSlide} className="slider-arrow" aria-label="Next Slide">
              <FaChevronDown />
            </button>
          </div>
        </div>
      </div>

      <div className="main-title-overlay" ref={mainTitleOverlayRef}>
        <span className="title-line textured-left" data-text="ETHICCRAFT" ref={titleLine1Ref}>ETHICCRAFT</span>
        <span className="title-line textured-left white-right" data-text="SOCIETY" ref={titleLine2Ref}>SOCIETY</span>
      </div>
    </div>
  );
};

export default EthiccraftSociety;