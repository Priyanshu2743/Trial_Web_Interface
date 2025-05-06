import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
  Lightbulb,
  Target,
  Coins,
  Settings,
  TrendingUp,
} from 'lucide-react';

const infographicData = [
  {
    id: '01',
    title: 'YOUR TITLE 01',
    description: 'Lorem ipsum dolor sit amet, et it consectetuer adipiscing elit, sed diam nonummy nibh.',
    icon: Lightbulb,
  },
  {
    id: '02',
    title: 'YOUR TITLE 02',
    description: 'Lorem ipsum dolor sit amet, et it consectetuer adipiscing elit, sed diam nonummy nibh.',
    icon: Target,
  },
  {
    id: '03',
    title: 'YOUR TITLE 03',
    description: 'Lorem ipsum dolor sit amet, et it consectetuer adipiscing elit, sed diam nonummy nibh.',
    icon: Coins,
  },
  {
    id: '04',
    title: 'YOUR TITLE 04',
    description: 'Lorem ipsum dolor sit amet, et it consectetuer adipiscing elit, sed diam nonummy nibh.',
    icon: Settings,
  },
  {
    id: '05',
    title: 'YOUR TITLE 05',
    description: 'Lorem ipsum dolor sit amet, et it consectetuer adipiscing elit, sed diam nonummy nibh.',
    icon: TrendingUp,
  },
];

const BusinessInfographics = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const cardVariants = {
    hidden: (i: number) => ({ opacity: 0, x: i % 2 === 0 ? -50 : 50 }),
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        delay: 0.4 + i * 0.2,
      },
    }),
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        delay: 0.8,
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const getIconColor = (index: number) => {
    const colors = ['#00FFFF', '#7FFFD4', '#AFEEEE', '#40E0D0', '#48D1CC'];
    return colors[index % colors.length];
  };

  return (
    <div ref={containerRef} className="infographic-container">
      <motion.div
        className="infographic-content"
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.6,
            },
          },
        }}
      >
        <div className="cards-container">
          {infographicData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                className={`info-card card${index + 1}`}
                variants={cardVariants}
                custom={index}
                whileHover={{ scale: 1.03,  }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <div className="icon-container" style={{ backgroundColor: getIconColor(index) }}>
                  <Icon className="icon" style={{ color: '#000' }} />
                  <span className="id">{item.id}</span>
                </div>
                <div className="text-content">
                  <h3 className="title">{item.title}</h3>
                  <p className="description">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default BusinessInfographics;
