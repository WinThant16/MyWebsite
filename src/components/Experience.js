import React from 'react';
import { Parallax } from 'react-parallax';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './Experience.css';
import backgroundImage from './blueandpinkbackground.avif'; // Add your background image
import movieRecommenderImage from './movierecommenderpicture.webp'; // Add your project images
import databaseImage from './databaseprojectpicture.webp';
import financeWebsiteImage from './finance-svgrepo-com.svg';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Parallax bgImage={backgroundImage} strength={500}>
      <section id="experience" className="experience" ref={ref}>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 2 }}
        >
          Experience & Projects
        </motion.h2>
        <motion.div className="projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <div className="project">
            <motion.img
              src={movieRecommenderImage}
              alt="Movie Recommender System"
              className="project-image"
              whileHover={{ scale: 1.1 }}
            />
            <div className="project-details">
              <h3>Movie Recommender System</h3>
              <p>Developed a movie recommender system using C++ that suggests movies based on user preferences and ratings.</p>
            </div>
          </div>
          <div className="project">
            <motion.img
              src={databaseImage}
              alt="Database Management Project"
              className="project-image"
              whileHover={{ scale: 1.1 }}
            />
            <div className="project-details">
              <h3>Database Management Project</h3>
              <p>Worked on a database management project using PySpark, Hadoop, and MySQL to handle large datasets efficiently.</p>
            </div>
          </div>
          <div className="project">
            <motion.img
              src={financeWebsiteImage}
              alt="Finance Website Project"
              className="project-image"
              whileHover={{ scale: 1.1 }}
            />
            <div className="project-details">
              <h3>Finance Website Project</h3>
              <p>Created a finance website as the final project for CS50, allowing users to trade stocks in real-time.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </Parallax>
  );
};

export default Experience;
