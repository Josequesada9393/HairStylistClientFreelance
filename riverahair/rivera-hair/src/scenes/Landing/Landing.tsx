import React from 'react'
import './Landing.scss'
import { motion } from 'framer-motion'
import Box from '../../Components/Box/Box';
import video from '../../media/video.mp4'

function Landing() {

  const pageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };



  return (
    <div className='landingContainer'>
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={pageVariants}
      className='picture'>
            <img src="https://i.ibb.co/Cnh0V3K/Whats-App-Image-2023-05-31-at-12-25-34-PM.jpg" alt="" />
      </motion.div>

      <motion.div 
      initial="hidden"
     animate="visible"
     variants={pageVariants}
      className='description'>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscinginim veniam, quis nostrud</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h2>
        <button>Browse services</button>
      </motion.div>

      
    </div>
  )
}

export default Landing