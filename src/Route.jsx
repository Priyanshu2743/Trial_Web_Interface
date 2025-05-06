import React, { useState, useEffect } from 'react';

const ExcursionRoute = () => {
  // Define the content for each day
  const tourDaysContent = [
    {
      day: 'DAY 1',
      title: 'Udgaar Arrival',
      description: 'Welcome to Udgaar! Upon arrival at the airport, you will be transferred to your hotel. Enjoy a free day to acclimatize to the altitude and explore the charming city of Cusco at your leisure.',
    },
    {
      day: 'DAY 2',
      title: 'VAILLABAMBA IN PACAIMAYU',
      description: 'You will start early in walking is physically demanding for those who are not used to high altitudes. Make your way through the dense Andean forest until you reach a campsite where you can rest for a while. As you continue climbing in the afternoon, the habitat will begin to change. After one more...',
    },
    {
      day: 'DAY 3',
      title: 'PACAYMAYU TO WIÑAY WAYNA',
      description: 'Today\'s trek takes you over the highest pass of the Inca Trail, Runkurakay (3900m). Descend to the impressive ruins of Sayacmarca and explore the cloud forest before reaching the campsite at Wiñay Wayna, near fascinating ruins.',
    },
    {
      day: 'DAY 4',
      title: 'WIÑAY WAYNA TO MACHU PICCHU',
      description: 'An early start to reach the Sun Gate (Inti Punku) for your first breathtaking view of Machu Picchu as the sun rises. Descend into the citadel and enjoy a guided tour before having free time to explore. In the afternoon, take the bus to Aguas Calientes and the train back to Cusco.',
    },
  ];

  const [activeDayIndex, setActiveDayIndex] = useState(1); 
  const [isFading, setIsFading] = useState(false); 

  const handleDayClick = (index) => {
    if (index !== activeDayIndex) {
      setIsFading(true); 
      setTimeout(() => {
        setActiveDayIndex(index); 
      }, 300); 
    }
  };

  useEffect(() => {
    if (isFading) {
      const fadeTimeout = setTimeout(() => {
        setIsFading(false); 
      }, 300); 

      return () => clearTimeout(fadeTimeout);
    }
  }, [isFading]);

  const currentDayContent = tourDaysContent[activeDayIndex];

  return (
    <div className="excursion-container">
      {/* Header */}
      <header className="excursion-header">
        <h1>
          <span className="animated-text">EXCURSION</span>{' '}
          <span className="animated-text">ROUTE</span>
        </h1>
        <p className="animated-text-sub">MACHU PICCHU CLASSIC TOUR 4 DAYS</p>
      </header>

      {/* Day Details Section */}
      <section className={`day-details-section ${isFading ? 'fading' : ''}`}>
        {/* Apply fading class to the section */}
        <div className="day-info">
          <h2 className="animated-text-day">{currentDayContent.day}</h2>
          <h3 className="animated-text-day-title">{currentDayContent.title}</h3>
          <p className="animated-text-description">
            {currentDayContent.description}
          </p>
          <a href="#" className="details-link">LOOK FOR DETAILS</a>
        </div>
        <div className="day-images">
          <div className="image-card">
             <img src="/assets/2.jpg" alt="Andean Landscape 1" className="excursion-image"/>
             <div className="image-overlay"></div>
             <div className="overlay-text">Day {activeDayIndex + 1} View</div> {/* Dynamic text */}
          </div>
           <div className="image-card">
             <img src="/assets/5.jpg" alt="Andean Landscape 2" className="excursion-image"/>
              <div className="image-overlay"></div>
             <div className="overlay-text">Andean Peaks</div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="timeline-line"></div>
        <div className="timeline-points">
          {tourDaysContent.map((day, index) => (
            <div
              key={index}
              className={`timeline-item ${index === activeDayIndex ? 'active' : ''}`}
              onClick={() => handleDayClick(index)}
            >
              <div className="timeline-dot"></div>
              <p>{day.day}</p>
              <h4>{day.title}</h4>
            </div>
          ))}
        </div>
         <div className="timeline-current-day">
            {activeDayIndex + 1} / <span>{tourDaysContent.length}</span> {/* Dynamic current day */}
         </div>
      </section>

      {/* Tour Price Section */}
      <section className="tour-price-section">
        <h3>TOUR PRICE INCLUDES <span className="arrow">▲</span></h3>
        <div className="price-includes-list">
          <ul>
            <li>Air-conditioned vehicle</li>
            <li>Vehicle pick up from airport</li>
            <li>Hotel 3 stars</li>
            <li>Transport hotel to airport</li>
          </ul>
           <ul>
            <li>Train tickets to Machu Picchu</li>
            <li>Entrance for all Parks</li>
            <li>Tour guide for all tours</li>
            <li>Walking shoes</li>
          </ul>
           <ul>
            <li>All activities on tours</li>
            <li>Lunch &amp; Dinner</li>
            <li>Breakfast &amp; Water</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ExcursionRoute;