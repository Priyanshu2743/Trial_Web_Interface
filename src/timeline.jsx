import { time } from 'framer-motion';
import React from 'react';
// Make sure to import your CSS file, e.g., import './Timeline.css';
// For this example, assume the CSS is loaded globally or in a parent component.

const timeline = () => {
  const timelineEvents = [
    {
      year: '2023',
      title: 'Adding years to life and life to years',
      description:
        'The Be Rich Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, and communities.',
      image: 'https://placehold.co/600x400/161b22/c9d1d9?text=Health+Institute', // Placeholder image
      alt: 'Be Rich Health Institute',
    },
    {
      year: '2022',
      title: 'AI for the win',
      description:
        'The Be Rich built AI bot helps Emirates Team New Zealand successfully defend their Americas Cup title.',
      image: 'https://placehold.co/600x400/161b22/c9d1d9?text=AI+Bot', // Placeholder image
      alt: 'AI Bot for Americas Cup',
    },
    // Add more timeline events as needed
    {
      year: '2020',
      title: 'Global Expansion',
      description:
        'Expanded operations into new markets across Asia and Europe, solidifying our global presence.',
      image: 'https://placehold.co/600x400/161b22/c9d1d9?text=Global+Expansion',
      alt: 'Global Expansion',
    },
    {
      year: '2018',
      title: 'Innovation Hub Launched',
      description:
        'Opened a new innovation hub dedicated to cutting-edge research and development in sustainable technologies.',
      image: 'https://placehold.co/600x400/161b22/c9d1d9?text=Innovation+Hub',
      alt: 'Innovation Hub',
    },
    {
      year: '1926',
      title: 'Company Foundation',
      description:
        'Since our formation in 1926, Be Rich has operated as a single global partnership united by a strong set of values, and the drive to deliver positive, enduring change.',
      image: 'https://placehold.co/600x400/161b22/c9d1d9?text=Founding+Year',
      alt: 'Company Foundation',
    },
  ];

  return (
    <div className="timeline-container">
      <header className="timeline-header">
        <h1>Our Story line</h1>
        <p>
          Since our formation in 1926, Be Rich has operated as a single global partnership united by a strong set of values, and the drive to deliver positive, enduring change.
        </p>
      </header>

      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-year">{event.year}</div>
              {event.image && (
                <img
                  src={event.image}
                  alt={event.alt}
                  className="timeline-image"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/161b22/c9d1d9?text=Image+Error'; }}
                />
              )}
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default timeline;
