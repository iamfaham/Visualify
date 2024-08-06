'use client'

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const gradientAnimation = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 5,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

const LandingHero: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(gradientAnimation.animate);
  }, [controls]);

  return (
    <motion.section
      id='hero'
      className="text-white text-center py-20 h-96 flex items-center rounded-b-2xl"
      initial={{ backgroundPosition: '0% 50%' }}
      animate={controls}
      style={{
        background: 'linear-gradient(270deg, #00d1d1, #0083ed, #0057a4)',
        backgroundSize: '200% 200%',
      }}
    >
      <div className="container mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Unleash Your Creativity with <span className='underline  '>Visualify</span></h2>
        <p className="mb-8 text-md md:text-lg">Transform your ideas into stunning visuals using our AI-powered tools.</p>
      </div>
    </motion.section>
  );
};

export default LandingHero;
