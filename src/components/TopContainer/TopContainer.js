import React from 'react'
import { Element } from 'react-scroll'
import TopContent from '../TopContent/TopContent'
import './TopContainer.css';

const TopContainer = () => {
  return (
    <Element id='portfolio' className='topContainer'>
       <TopContent />
    </Element>
  )
}

export default TopContainer