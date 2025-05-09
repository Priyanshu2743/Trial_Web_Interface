import React, { useEffect, useRef, useState } from 'react';

// Placeholder images - replace with your actual image URLs
const placeholderImage1 = 'https://via.placeholder.com/400x400/8A9A5B/FFFFFF?Text=Machu+Picchu+View+1';
const placeholderImage2 = 'https://via.placeholder.com/300x300/C3B091/FFFFFF?Text=Llama+Encounter';
const placeholderImage3 = 'https://via.placeholder.com/400x400/708238/FFFFFF?Text=Inca+Trail+Hike';
const placeholderImage4 = 'https://via.placeholder.com/300x300/B48E92/FFFFFF?Text=Sacred+Stone';
const placeholderImage5 = 'https://via.placeholder.com/400x400/5F8575/FFFFFF?Text=Ancient+Ruins+Detail';


const reasonsData = [
    {
        id: 1,
        image: placeholderImage1,
        alt: 'Breathtaking panoramic view of Machu Picchu ruins',
        title: 'Unveil Ancient Mysteries',
        description: "Step into a world shrouded in enigma. Machu Picchu's true purpose remains a captivating debate—was it a royal estate, a sacred sanctuary, or an astronomical observatory? Explore its meticulously crafted stones and feel the echoes of a lost civilization.",
        align: 'left',
    },
    {
        id: 2,
        image: placeholderImage2,
        alt: 'Friendly llamas at Machu Picchu',
        title: 'Encounter Unique Wildlife',
        description: 'Meet the charming local residents – the llamas and alpacas! These gentle creatures roam freely, adding a touch of whimsy and a perfect photo opportunity to your historical adventure.',
        align: 'right',
    },
    {
        id: 3,
        image: placeholderImage3,
        alt: 'Hiker on the Inca Trail overlooking mountains',
        title: 'Embark on an Epic Trek',
        description: "For the truly adventurous, the journey is as stunning as the destination. Hike the legendary Inca Trail, traversing cloud forests and ancient paths, to arrive at the Sun Gate for an unforgettable sunrise over the citadel.",
        align: 'left',
    },
    {
        id: 4,
        image: placeholderImage4,
        alt: 'Intricate stone work at Machu Picchu',
        title: 'Marvel at Inca Engineering',
        description: "Witness the genius of Inca architecture. Without mortar, they carved and fitted massive stones with such precision that not even a blade of grass can fit between them. It's a testament to their advanced understanding of engineering and artistry.",
        align: 'right',
    },
    {
        id: 5,
        image: placeholderImage5,
        alt: 'Close-up of ancient ruins at Machu Picchu',
        title: 'Connect with Sacred Energies',
        description: "Feel the powerful spiritual energy that many visitors report. Machu Picchu is considered a sacred site, perfectly aligned with astronomical events and brimming with an almost tangible sense of peace and wonder. A truly transformative experience.",
        align: 'left',
    },
];

const ReasonItem = ({ image, alt, title, description, align, id }) => {
    const itemRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Optional: stop observing after it's visible
                }
            },
            {
                threshold: 0.2, // Trigger when 20% of the item is visible
            }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={itemRef}
            className={`reason-item ${align} ${isVisible ? 'animate' : ''} reason-item-${id}`}
        >
            <div className="diamond-image-container">
                <img src={image} alt={alt} className="diamond-image" />
            </div>
            <div className="reason-text-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

const MachuPicchuReasonsnew = () => {
    const titleRef = useRef(null);
    const [isTitleVisible, setIsTitleVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsTitleVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);


    return (
        <section className="machu-picchu-reasons-container">
            <h1 ref={titleRef} className={`main-title ${isTitleVisible ? 'animate' : ''}`}>
                <span>Five</span> Reasons Why <br /> You Should Visit <span>Machu Picchu</span>
            </h1>
            <div className="timeline">
                {reasonsData.map((reason, index) => (
                    <ReasonItem
                        key={reason.id}
                        id={reason.id}
                        image={reason.image}
                        alt={reason.alt}
                        title={reason.title}
                        description={reason.description}
                        align={reason.align}
                    />
                ))}
            </div>
        </section>
    );
};

export default MachuPicchuReasonsnew;