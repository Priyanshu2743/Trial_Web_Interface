import React, { useState, useEffect, useRef } from 'react';

// Placeholder images - replace with your actual image URLs
const backgroundImageUrl = 'https://via.placeholder.com/1920x1080/2c3e50/FFFFFF?Text=Scenic+Mountain+Background'; // Replace
const sliderImage1 = 'https://via.placeholder.com/600x800/3498db/FFFFFF?Text=Buddha+Temple,+Thailand'; // Replace
const sliderImage2 = 'https://via.placeholder.com/600x800/2ecc71/FFFFFF?Text=Broken+Beach,+Bali'; // Replace
const sliderImage3 = 'https://via.placeholder.com/600x800/e74c3c/FFFFFF?Text=Kerala+Backwaters'; // Replace
const sliderImage4 = 'https://via.placeholder.com/600x800/f39c12/FFFFFF?Text=Ancient+City'; // Replace
const sliderImage5 = 'https://via.placeholder.com/600x800/9b59b6/FFFFFF?Text=Mountain+Peak'; // Replace

const slidesData = [
    { id: 1, image: sliderImage1, title: 'Buddha Temple, Thailand', country: 'Thailand' },
    { id: 2, image: sliderImage2, title: 'Broken Beach, Nusa Penida', country: 'Bali' },
    { id: 3, image: sliderImage3, title: 'Lush Kerala Backwaters', country: 'Kerala' },
    { id: 4, image: sliderImage4, title: 'Mysteries of an Ancient City', country: 'Peru' },
    { id: 5, image: sliderImage5, title: 'Snow-Capped Mountain Majesty', country: 'Switzerland' },
];

// Icon for the bookmark (using an SVG for flexibility)
const BookmarkIcon = () => (
    <svg className="bookmark-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>
    </svg>
);

const ArrowRightIcon = () => (
    <svg className="arrow-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
    </svg>
);


const TravelShowcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const componentRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 } // Trigger when 10% is visible
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

    useEffect(() => {
        // Autoplay functionality
        if (!isIntersecting) return; // Don't autoplay if not visible

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [isIntersecting]);


    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
    };
    
    // For calculating the transform of the slider track
    useEffect(() => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.querySelector('.slide-card')?.offsetWidth || 0;
            // This calculation aims to center the active slide while showing parts of others.
            // It might need adjustment based on the exact desired "peek" amount.
            // A simpler approach: -currentIndex * (slideWidth + gap)
            const gap = 20; // Assuming 20px gap between slides
            sliderRef.current.style.transform = `translateX(calc(-${currentIndex * (slideWidth + gap)}px + 30% - ${slideWidth / 2}px))`;
        }
    }, [currentIndex]);


    return (
        <section
            ref={componentRef}
            className={`travel-showcase-container ${isIntersecting ? 'animate-in' : ''}`}
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
            <div className="content-overlay">
                <div className="text-content">
                    <h1 className="main-destination-title">
                        <span>Explore</span>
                        <br />
                        Indonesia
                    </h1>
                    <p className="destination-description">
                        As the largest archipelago in the world, Indonesia is blessed with so many different people, cultures, customs, traditions, artworks, foods, animals, plants, landscapes, and everything that made it the 10th (or even 20th) countries most beautiful into one. Discover its unparalleled beauty.
                    </p>
                    <button className="explore-button">
                        Explore
                        <ArrowRightIcon />
                    </button>
                </div>

                <div className="image-slider-wrapper">
                    <div className="slider-track-container">
                        <div className="slider-track" ref={sliderRef}>
                            {slidesData.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`slide-card ${index === currentIndex ? 'active' : ''} ${Math.abs(index - currentIndex) === 1 ? 'adjacent' : ''} ${index < currentIndex ? 'prev-slide-style' : ''} ${index > currentIndex ? 'next-slide-style' : ''}`}
                                    onClick={() => goToSlide(index)}
                                >
                                    <img src={slide.image} alt={slide.title} className="slide-image" />
                                    <div className="slide-info">
                                        <h3 className="slide-title">{slide.title}</h3>
                                        <p className="slide-country">{slide.country}</p>
                                    </div>
                                    <div className="slide-bookmark">
                                        <BookmarkIcon />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Navigation Arrows (optional, can be styled to appear on hover) */}
                    <button onClick={prevSlide} className="slider-nav prev">‹</button>
                    <button onClick={nextSlide} className="slider-nav next">›</button>

                    <div className="slider-dots">
                        {slidesData.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TravelShowcase;