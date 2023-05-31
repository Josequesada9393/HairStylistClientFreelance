import React from 'react'
import './Services.scss'
import { motion } from 'framer-motion'
import ServiceCard from '../../Components/serviceCard/ServiceCard';
import { Item } from '../../Types/Types';

function Services() {
    const containerVariants = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.5, // Delay before starting the animation
          },
        },
      };

    const items:Item[] = [
        {
          id: 1,
          title: 'Balayage',
          description: 'Description of item 1',
          image: 'image1.jpg',
        },
        {
          id: 2,
          title: 'Toner',
          description: 'Description of item 2',
          image: 'image2.jpg',
        },
        {
          id: 3,
          title: 'Extension and Ktip',
          description: 'Description of item 3',
          image: 'image3.jpg',
        },
        {
          id: 4,
          title: 'Haircut',
          description: 'Description of item 4',
          image: 'image4.jpg',
        },
        {
          id: 5,
          title: 'Blowdry',
          description: 'Description of item 5',
          image: 'image5.jpg',
        },
      ];

  return (
    <motion.div 
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className='servicesContainer'>
        
    {items.map((item) => {
       return <ServiceCard item={item} key={item.id}></ServiceCard>
    })}

  

    </motion.div>
  )
}

export default Services