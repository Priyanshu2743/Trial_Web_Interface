import React from 'react';

const MachuPicchuReasons = () => {
  // Data matching image_84c64b.jpg more closely
  const reasonsData = [
    {
      id: 'img-1', // Large Left
      type: 'image',
      src: '/assets/5.jpg', // Replace
      alt: 'Scenic view of Machu Picchu',
      size: 'large',
      // Position based on image_84c64b.jpg
      position: { top: '10%', left: '2%' }
    },
    {
      id: 'img-2', // Small Top Middle (Alpaca) - Aligned near center top
      type: 'image',
      src: '/assets/1.jpg',
      alt: 'Alpaca near Machu Picchu',
      size: 'small',
      // Positioned slightly left of true center
      position: { top: '20%', left: '41%' }
    },
    {
      id: 'text-1', // Top Right Text - Aligned with top of img-2
      type: 'text',
      content: 'The Mystery: A lot of literature describes it was built by the Incas centuries ago. In partial truth, Peruvians know most people don’t know that the site was never "discovered", until 1911.', // Example Text
       // Positioned right of center, top aligned with img-2
      position: { top: '24%', left: '58%', width: '22%' } // Using left %
    },
     {
      id: 'text-2', // Middle Left Text - Lower than before
      type: 'text',
      content: 'The Inca Trail: This is one of the most popular ways to visit Machu Picchu, hiking along a long distance in the Andes Mountains, camping on the way, and being awed by other Incan ruins.', // Example Text
      // Positioned lower and left
      position: { top: '50%', left: '26%', width: '23%' }
    },
    {
        id: 'text-3', // Lower Left Text - NEW text block based on image
        type: 'text',
        content: 'The amazing views: Even in pictures, but seeing the picture does not compare to actually seeing it in person.', // Example Text
        // Positioned lower left, under text-2
        position: { top: '65%', left: '28%', width: '20%'}
    },
    {
      id: 'img-3', // Small Bottom Left (Trail) - Lower and smaller?
      type: 'image',
      src: '/assets/2.jpg', // Replace & possibly smaller size
      alt: 'Inca Trail view',
      size: 'x-small', // Added extra small size
       // Positioned very low left
      position: { top: '80%', left: '18%' }
    },
    {
      id: 'img-4', // Small Middle Right (Hat) - Aligned with vertical line
      type: 'image',
      src: '/assets/3.jpg',
      alt: 'Person looking at Machu Picchu',
      size: 'small',
       // Positioned centered horizontally, mid-height
       position: { top: '52%', left: '50%', transform: 'translateX(-50%) rotate(45deg)' } // Center using transform
    },
     {
        id: 'text-4', // Bottom Right Text - Aligned with vertical line
        type: 'text',
        content: 'Stunning sunrises: Getting your way through a forest, exploring ancient ruins, and knowing awaits unique scenic bridges, enjoy it.', // Example Text
        // Positioned near center bottom
        position: { top: '75%', left: '58%', width: '24%'} // Using left %
    },
    {
        id: 'img-5', // Medium Right - Position adjusted
        type: 'image',
        src: '/assets/4.jpg',
        alt: 'Close up of Machu Picchu ruins',
        size: 'medium',
        // Positioned further right and adjusted vertically
        position: { top: '38%', right: '1%' }
      },
  ];

  return (
    <div className="machu-picchu-container">
      {/* Header - Subtitle Removed */}
      <header className="reasons-header">
        <h1 className="title">FIVE REASONS WHY<br/>YOU SHOULD VISIT<br/>MACHUPICCHU</h1>
      </header>

      <div className="content-area">
        {/* Vertical Dashed Line */}
        <div className="vertical-line"></div>

        {reasonsData.map((item, index) => {
          const delay = (index * 0.08) + 0.3; // Slightly adjusted delay base

          // Special handling for centrally positioned image to use transform for centering
          const itemStyle = (item.id === 'img-4' && item.position.transform)
            ? { top: item.position.top, left: item.position.left, transform: item.position.transform, animationDelay: `${delay}s` }
            : { ...item.position, animationDelay: `${delay}s` };

          if (item.type === 'image') {
            return (
              <div
                key={item.id}
                className={`diamond diamond-${item.size}`}
                style={itemStyle}
              >
                <div className="diamond-inner">
                  <img src={item.src} alt={item.alt} />
                </div>
              </div>
            );
          } else if (item.type === 'text') {
            return (
              <div
                key={item.id}
                className="text-block"
                style={itemStyle}
              >
                <p>{item.content}</p>
              </div>
            );
          }
          return null;
        })}
      </div>

      <footer className="reasons-footer">
        <button className="book-tour-button" style={{ animationDelay: '1.2s' }}>
            BOOK TOUR
        </button>
      </footer>
    </div>
  );
};

export default MachuPicchuReasons;