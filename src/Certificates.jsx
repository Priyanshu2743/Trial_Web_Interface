import React, { useState, useEffect, useCallback } from 'react';
// Assume 'certificates-styles.css' is imported globally or in a parent component.

const CertificateSection = () => {
  // State for certificates data
  const [certificates, setCertificates] = useState([]);
  // State for fullscreen modal visibility
  const [isFullscreen, setIsFullscreen] = useState(false);
  // State for the currently displayed certificate in fullscreen
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchCertificates = async () => {
      // In a real application, you would make an API call here:
      // const response = await fetch('/api/certificates');
      // const data = await response.json();
      // setCertificates(data);

      // Mock data for demonstration
      const mockData = [
        {
          id: 1,
          thumbnail: 'https://placehold.co/300x180/e0e0e0/333?text=Certificate+1',
          fullImage: 'https://placehold.co/800x600/e0e0e0/333?text=Full+Certificate+1',
          eventName: 'Certificate Gold # 1987',
          count: '28 certificate',
          liked: false,
        },
        {
          id: 2,
          thumbnail: 'https://placehold.co/300x180/d0d0d0/333?text=Certificate+2',
          fullImage: 'https://placehold.co/800x600/d0d0d0/333?text=Full+Certificate+2',
          eventName: 'Certificate Gold # 1987',
          count: '25 certificate',
          liked: true,
        },
        {
          id: 3,
          thumbnail: 'https://placehold.co/300x180/c0c0c0/333?text=Certificate+3',
          fullImage: 'https://placehold.co/800x600/c0c0c0/333?text=Full+Certificate+3',
          eventName: 'Certificate Gold # 1987',
          count: '28 certificate',
          liked: false,
        },
        {
          id: 4,
          thumbnail: 'https://placehold.co/300x180/b0b0b0/333?text=Certificate+4',
          fullImage: 'https://placehold.co/800x600/b0b0b0/333?text=Full+Certificate+4',
          eventName: 'Certificate Gold # 1987',
          count: '28 certificate',
          liked: false,
        },
        {
          id: 5,
          thumbnail: 'https://placehold.co/300x180/a0a0a0/333?text=Certificate+5',
          fullImage: 'https://placehold.co/800x600/a0a0a0/333?text=Full+Certificate+5',
          eventName: 'Certificate Gold # 1987',
          count: '211 certificate',
          liked: false,
        },
        {
          id: 6,
          thumbnail: 'https://placehold.co/300x180/909090/333?text=Certificate+6',
          fullImage: 'https://placehold.co/800x600/909090/333?text=Full+Certificate+6',
          eventName: 'Certificate Gold # 1987',
          count: '25 Certificate',
          liked: true,
        },
        {
          id: 7,
          thumbnail: 'https://placehold.co/300x180/808080/333?text=Certificate+7',
          fullImage: 'https://placehold.co/800x600/808080/333?text=Full+Certificate+7',
          eventName: 'Certificate Gold # 1987',
          count: '28 certificate',
          liked: false,
        },
        {
          id: 8,
          thumbnail: 'https://placehold.co/300x180/707070/333?text=Certificate+8',
          fullImage: 'https://placehold.co/800x600/707070/333?text=Full+Certificate+8',
          eventName: 'Certificate Gold # 1987',
          count: '28 certificate',
          liked: false,
        },
      ];
      setCertificates(mockData);
    };

    fetchCertificates();
  }, []);

  // Function to open the fullscreen modal
  const openFullscreen = (index) => {
    setCurrentCertIndex(index);
    setIsFullscreen(true);
  };

  // Function to close the fullscreen modal
  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  // Function to navigate to the next certificate in slideshow
  const nextCertificate = useCallback(() => {
    setCurrentCertIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  }, [certificates.length]);

  // Function to navigate to the previous certificate in slideshow
  const prevCertificate = useCallback(() => {
    setCurrentCertIndex(
      (prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length
    );
  }, [certificates.length]);

  // Keyboard navigation for slideshow
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isFullscreen) return;

      switch (event.key) {
        case 'ArrowRight':
          nextCertificate();
          break;
        case 'ArrowLeft':
          prevCertificate();
          break;
        case 'Escape':
          closeFullscreen();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen, nextCertificate, prevCertificate]);

  // Toggle like status
  const toggleLike = (id) => {
    setCertificates((prevCertificates) =>
      prevCertificates.map((cert) =>
        cert.id === id ? { ...cert, liked: !cert.liked } : cert
      )
    );
  };

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-left">
          <h1>Welcome, Amanda</h1>
          <p>Tue, 07 June 2072</p>
        </div>
        <div className="header-right">
          <div className="search-bar">
            <span className="search-icon">&#128269;</span> {/* Search icon */}
            <input type="text" placeholder="Search" />
          </div>
          <div className="profile-icon">
            <img src="https://placehold.co/40x40/e0e0e0/555?text=P" alt="Profile" />
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        <section className="section-header">
          <div className="section-header-left">
            <button className="back-button">&#8592; Back</button> {/* Left arrow */}
            <div>
              <h2>Certificate</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
            </div>
          </div>
          <div className="section-header-right">
            <button className="done-button">Done</button>
            <button className="publish-button">Publish</button>
          </div>
        </section>

        <section className="certificate-grid">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="certificate-card"
              onClick={() => openFullscreen(index)}
            >
              <img
                src={cert.thumbnail}
                alt={cert.eventName}
                className="certificate-thumbnail"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x180/e0e0e0/333?text=Error'; }}
              />
              <div className="certificate-info">
                <h3>{cert.eventName}</h3>
                <div className="certificate-meta">
                  <span className="certificate-count">{cert.count}</span>
                  <button
                    className={`like-button ${cert.liked ? 'liked' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent opening fullscreen when liking
                      toggleLike(cert.id);
                    }}
                  >
                    &#9829; {/* Heart icon */}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Fullscreen Modal for Certificate Slideshow */}
      {isFullscreen && (
        <div className="fullscreen-modal-overlay" onClick={closeFullscreen}>
          <div className="fullscreen-modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={certificates[currentCertIndex]?.fullImage}
              alt={certificates[currentCertIndex]?.eventName}
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x600/e0e0e0/333?text=Error'; }}
            />
            <button className="modal-nav-button left" onClick={prevCertificate}>
              &larr;
            </button>
            <button className="modal-nav-button right" onClick={nextCertificate}>
              &rarr;
            </button>
            <button className="modal-close-button" onClick={closeFullscreen}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateSection;
