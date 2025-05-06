import React, { useState, useRef, useEffect } from 'react';

const TriglavSection = () => {
  // Placeholder images - Replace with your actual image paths or URLs
  const galleryImages = [
    '/assets/5.jpg', // Image 1
    '/assets/4.jpg', // Image 2 (Default Center)
    '/assets/3.jpg', // Image 3
    '/assets/2.jpg', // Add more if needed for scrolling
    '/assets/1.jpg', // Image 4
  ];

  const offerImage = 'https://via.placeholder.com/600x400/A0A0A0/000000?text=Triglav+View'; // Offer section image

  // State for the current central image index
  const [currentIndex, setCurrentIndex] = useState(1); // Start with the second image centered
  const galleryRef = useRef(null); // Ref for the gallery container

  // Function to scroll to the selected item
  const scrollToItem = (index) => {
    if (galleryRef.current && galleryRef.current.children[index]) {
      galleryRef.current.children[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'center', // Center the item
        block: 'nearest',
      });
    }
  };

  // Scroll to the initial central item on mount and when index changes
  useEffect(() => {
      // Use a slight delay to ensure layout is stable before scrolling
      const timer = setTimeout(() => {
          scrollToItem(currentIndex);
      }, 100);
      return () => clearTimeout(timer); // Cleanup timer
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(galleryImages.length - 1, prevIndex + 1));
  };


  return (
    <div className="triglav-section">

      {/* Header Section - Main title outside the box */}
      <div className="triglav-header">
        <h1 className="triglav-title">The King<br />of its Kingdom</h1>
        {/* Styled box containing subtitle and intro */}
        <div className="triglav-header-content-box fade-in delay-100">
            {/* Subtitle */}
            <p className="triglav-subtitle">
              Triglav is the highest peak of the Julian Alps and Slovenia, it stands majestically in the centre of the National Park named after it. The views from the top are out of this world and far surrounding.
            </p>
             <div className="header-box-separator"></div> {/* Separator inside the box */}

            {/* Introduction Section - Now inside the box */}
            <div className="triglav-intro-in-box"> {/* New class for intro inside the box */}
                <div className="intro-column"> {/* Removed fade-in here, handled by parent box */}
                  <p>A symbol of Slovenia and a central element of the Triglav National Park, Triglav also stands as the national flag on a stylized mount of it's peak. Triglav not only has an immense natural value, but also an important cultural and historical value as well as the word of pilgrimage to its kingdom. The peak is at least once in a lifetime of every Slovene to climb Triglav at least once in their lifetime.</p>
                  <p>Triglav has an immense shape with a pyramid peak that stands out. It's peak is divided into 3 heads. On the left stands (2590m), in the middle the main stands (2864m) and on the right is (2588m). This makes even Triglav the highest peak of Julian Alps. Triglav also holds lots of interesting stories, legends, traditions and legends for the peak for more than 300 years.</p>
                </div>
                <div className="intro-column"> {/* Removed fade-in here */}
                  <p>The story behind the name originates from long time ago. The former name of the mountain was Mount Triglav, this name originates from long time ago. The former name of the mountain was Mount Triglav, this name originates from long time ago. The former name of the mountain was Mount Triglav, this name originates from long time ago. The former name of the mountain was Mount Triglav, this name originates from long time ago.</p>
                  <p>Triglav was one of the first important peaks climbed at the time. The first important recorded climb was in 1778. The four first climbers were Lovrenc Willomitzer, Luka Korošec, Matija Kos and Štefan Rožič. They came from Bohinj and climbed the peak from the north side. This climb is also the first recorded climb on any peak higher than 2500m in the Julian Alps. Since then, Triglav has been climbed by thousands of people from all around the world.</p>
                </div>
            </div>
        </div>
         {/* Separator below the large box, above the icon */}
        <div className="header-separator fade-in delay-300"></div>

      </div>


       {/* Separator Icon/Element */}
       <div className="section-icon fade-in delay-400">
           <div className="mountain-icon">▲</div>
       </div>

      {/* Image Gallery Section - Functional Slider */}
      <div className="triglav-gallery fade-in delay-500">
        <div className="gallery-container" ref={galleryRef}>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`gallery-item ${index === currentIndex ? 'central-gallery-item' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentIndex(index)} // Optional: click to center
            >
               {/* Overlay or content inside item if needed */}
            </div>
          ))}
        </div>
         {/* Navigation Arrows */}
         {currentIndex > 0 && ( // Hide left arrow at the start
            <div className="gallery-nav left" onClick={handlePrev}>&lt;</div>
         )}
         {currentIndex < galleryImages.length - 1 && ( // Hide right arrow at the end
            <div className="gallery-nav right" onClick={handleNext}>&gt;</div>
         )}
         <div className="gallery-separator"></div> {/* Red line separator */}
      </div>

      {/* Climb Offer Section */}
      <div className="triglav-offer">
         <div className="offer-image-container fade-in delay-600">
             <img src={offerImage} alt="View of Mount Triglav" />
         </div>
        <div className="offer-content fade-in delay-700">
          <h2 className="offer-title">Climb Mt. Triglav in 2 days</h2>
          <p className="offer-description">
            From June until the end of September we offer guided climbs to Triglav every Sunday-Monday and Wednesday-Thursday.
            <br /><br />
            Join us for an unforgettable 2-day guided climb to the summit of Mount Triglav! Our experienced guides will lead you through stunning landscapes, providing safety and insights along the way. This tour is perfect for those looking for a challenging but rewarding mountain experience. We cover all the necessary equipment and logistics, allowing you to focus on the climb and the breathtaking views.
            <br /><br />
            The journey takes you through diverse terrain, from lush valleys to rugged alpine passes and finally to the iconic summit. Enjoy overnight stays in comfortable mountain huts, savoring local cuisine and the camaraderie of fellow climbers. This adventure is designed to provide a comprehensive Triglav experience, suitable for individuals with a good level of fitness and some hiking experience. Book your spot now and conquer Slovenia's highest peak!
          </p>
          <div className="price-book">
            <span className="offer-price">250€</span>
            <button className="book-button">BOOK</button>
          </div>
           <p className="small-print">Prices includes guiding, equipment rental and overnight stay in mountain hut. </p>
        </div>
      </div>
       <div className="offer-separator fade-in delay-800"></div> {/* Red line separator */}

    </div>
  );
};

export default TriglavSection;