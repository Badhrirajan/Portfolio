import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Contact.css';

const Contact = () => {
  return (
   <Element className='contact' id='contact'>
    <h1>Contact</h1>
    <div className='contact_container'>
        <p>
            Email: <span>badhrirajan2211@gmail.com</span>
        </p>
        <p>
            Mobile: <span>+91-7373371173</span>
        </p>
        <div className='contact_icons'>
            <a href="https://www.linkedin.com/in/badhri-rajan-9a24aa200" target='_blank' rel='noreferrer'>
                <IconButton>
                    <LinkedInIcon />
                </IconButton>
            </a>
            <a href="https://github.com/Badhrirajan" target='_blank' rel='noreferrer'>
                <IconButton>
                    <GitHubIcon />
                </IconButton>
            </a>
            <a href="https://www.instagram.com/badhrirajan/" target='_blank' rel='noreferrer'>
                <IconButton>
                    <InstagramIcon />
                </IconButton>
            </a>
        </div>
    </div>
   </Element>
  )
}

export default Contact
