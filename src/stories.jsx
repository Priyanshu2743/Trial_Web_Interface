import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const articles = [
  {
    category: 'Food and Drink',
    title: 'Los Angeles food & drink guide: 10 things to try in Los Angeles, California',
    date: 'Aug 19, 2024',
    time: '4 min read',
    description: 'It seems that in California, almost any problem can be solved with a combination of avocados, yoga, and dogs...',
    image: '/assets/4.jpg',
  },
  {
    category: 'Shopping',
    title: '15 South London Markets You’ll Love: Best Markets in South London',
    date: 'Aug 15, 2024',
    time: '6 min read',
    image: '/assets/5.jpg',
  },
  {
    category: 'Hotels',
    title: '10 incredible hotels around the world you can book with points in 2024',
    date: 'Aug 10, 2024',
    time: '5 min read',
    image: '/assets/1.jpg',
  },
  {
    category: 'Travel Budget',
    title: 'Visiting Chicago on a Budget: Affordable Eats and Attraction Deals',
    date: 'Aug 02, 2024',
    time: '8 min read',
    image: '/assets/3.jpg',
  },
];

const LatestStories = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="latest-stories"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="header">
        <motion.h2 variants={itemVariants}>Latest Stories</motion.h2>
        <motion.button className="read-more-btn" variants={itemVariants}>
          Read more articles
        </motion.button>
      </div>

      <motion.div className="main-content" variants={containerVariants}>
        <motion.div className="featured-article" variants={itemVariants}>
          <motion.img src={articles[0].image} alt="Featured" whileHover={{ scale: 1.03 }} transition={{ duration: 0.4 }} />
          <div className="featured-text">
            <span className="category">{articles[0].category}</span>
            <h3>{articles[0].title}</h3>
            <p className="meta">{articles[0].date} • {articles[0].time}</p>
            <p className="description">{articles[0].description}</p>
          </div>
        </motion.div>

        <motion.div className="side-articles" variants={containerVariants}>
          {articles.slice(1).map((item, idx) => (
            <motion.div className="side-article" key={idx} variants={itemVariants} whileHover={{ x: 5 }}>
              <img src={item.image} alt={item.title} />
              <div className="text">
                <span className="category">{item.category}</span>
                <h4>{item.title}</h4>
                <p className="meta">{item.date} • {item.time}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default LatestStories;
