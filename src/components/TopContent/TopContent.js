import React from 'react'
import './TopContent.css';
import { Link } from 'react-scroll'

const TopContent = () => {
  return (
    <div className='topContent'>
      <div className='topContent_image'>
        <img src='./Images/Picture.jpg' alt='Profile' />
      </div>
      <div className='topContent_Container'>
        <h1>Mr.Badhrirajan T</h1>
        <p>A Passinate Full Stack Developer</p>
        <a href='https://drive.google.com/file/d/19SLXFsczeDxkjvED-41EAjXLBdXlb1lz/view?usp=drivesdk' target='_blank' rel='noreferrer'>
            <button className='topContent_Download'>Download CV</button>
        </a>
        <Link to='projects' smooth={true} duration={500}>
            <button className='topContent_Work'>My Work</button>
        </Link>
      </div>
    </div>
  )
}

export default TopContent
