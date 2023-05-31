import React from 'react'
import './ServiceCard.scss'
import { motion } from 'framer-motion'

function ServiceCard({item}) {


  return (
    <div
    className='serviceCard'>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <img src="https://img.freepik.com/premium-photo/hair-colors-dyed-palette-set-background-closeup-ai-generation_201606-6789.jpg" alt="" />
    </div>
  )
}

export default ServiceCard