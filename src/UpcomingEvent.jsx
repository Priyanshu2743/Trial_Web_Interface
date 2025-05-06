import React from 'react';

const events = [
  {
    date: '27',
    month: 'JAN',
    year: '2025',
    time: '7:00 PM',
    category: 'COMEDY',
    title: 'William Smith Comedy Show',
    subtitle: 'Crack a Smile – 2022 Tour',
    image: '/assets/1.jpg',
  },
  {
    date: '28',
    month: 'JAN',
    year: '2025',
    time: '8:30 PM',
    category: 'CONCERT',
    title: 'Shannon Weigel Acoustic Night',
    subtitle: 'Tour: Love Me As I Love You',
    image: '/assets/2.jpg',
  },
  {
    date: '29',
    month: 'JAN',
    year: '2025',
    time: '8:00 PM',
    category: 'THEATRE',
    title: 'The Lewistage Hamlet by William Shakespeare',
    subtitle: 'The Lewistage Theatre Drama Group',
    image: 'https://via.placeholder.com/120x120',
  },
  {
    date: '30',
    month: 'JAN',
    year: '2025',
    time: '8:00 PM',
    category: 'CONCERT',
    title: 'Edward Burgess – Sax on the Beach',
    subtitle: 'Classical Summer Tour – 2022',
    image: 'https://via.placeholder.com/120x120',
  },
  {
    date: '1',
    month: 'FEB',
    year: '2025',
    time: '8:00 PM',
    category: 'THEATRE',
    title: 'The Lewistage Cinderella – The Little Glass Slipper',
    subtitle: 'The Lewistage Theatre Drama Group',
    image: 'https://via.placeholder.com/120x120',
  },
];

const UpcomingEvents = () => {
  return (
    <section className="events-section">
      <h2 className="section-title">Exciting Upcoming Events</h2>
      <p className="section-subtitle">
        Join us for unforgettable experiences! Stay updated and reserve your spot early.
      </p>
      <div className="events-list">
        {events.map((event, index) => (
          <div className="event-item" key={index}>
            <div className="event-date">
              <span className="day">{event.date}</span>
              <span className="month">{event.month}</span>
              <span className="year">{event.year}</span>
            </div>
            <div className="event-info">
              <span className="category">{event.category}</span>
              <h3 className="title">{event.title}</h3>
              <p className="subtitle">{event.subtitle}</p>
              <p className="time">{event.time}</p>
              <div className="actions">
                <button className="btn primary">Get Tickets</button>
                <a href="#" className="details-link">View Details</a>
              </div>
            </div>
            <div className="event-img">
              <img src={event.image} alt={event.title} className='event-img'/>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all-wrapper">
        <button className="btn view-all">View All Events</button>
      </div>
    </section>
  );
};

export default UpcomingEvents;
