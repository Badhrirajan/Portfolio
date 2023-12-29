import React from 'react'
import { Element } from 'react-scroll'
import { LinearProgress } from '@mui/material'
import './SkillContainer.css';

const SkillContainer = () => {
  return (
    <Element className='skillContainer' id='skills'>
       <div className='skillContainer_image'>
          <img src='https://user-images.githubusercontent.com/74038190/219923823-bf1ce878-c6b8-4faa-be07-93e6b1006521.gif' alt='git' />
        </div>
        <div className='skillContainer_text'>
            <h2>SKILLSET</h2>
            <div className='skillContainer_skillset'>
                <h5>HTML</h5>
                <div className='skillContainer_slider skillContainer_slider1'>
                    <LinearProgress variant='determinate' value={90} />
                </div> 
            </div>
            <div className='skillContainer_skillset'>
                <h5>CSS</h5>
                <div className='skillContainer_slider skillContainer_slider2'>
                    <LinearProgress variant='determinate' value={80} />
                </div> 
            </div>
            <div className='skillContainer_skillset'>
                <h5>JavaScript</h5>
                <div className='skillContainer_slider skillContainer_slider3'>
                    <LinearProgress variant='determinate' value={60} />
                </div> 
            </div>
            <div className='skillContainer_skillset'>
                <h5>React</h5>
                <div className='skillContainer_slider skillContainer_slider4'>
                    <LinearProgress variant='determinate' value={50} />
                </div> 
            </div>
            <div className='skillContainer_skillset'>
                <h5>SQL</h5>
                <div className='skillContainer_slider skillContainer_slider5'>
                    <LinearProgress variant='determinate' value={70} />
                </div> 
            </div>
            <div className='skillContainer_skillset'>
                <h5>MongoDB</h5>
                <div className='skillContainer_slider skillContainer_slider6'>
                    <LinearProgress variant='determinate' value={70} />
                </div> 
            </div>
            <div className='skillContainer_skillset'>
                <h5>Nodejs</h5>
                <div className='skillContainer_slider skillContainer_slider7'>
                    <LinearProgress variant='determinate' value={50} />
                </div> 
            </div>
            <div className='skillContainer_skillset'>
                <h5>Python</h5>
                <div className='skillContainer_slider skillContainer_slider8'>
                    <LinearProgress variant='determinate' value={70} />
                </div> 
            </div>
        </div> 
    </Element>
  )
}

export default SkillContainer
