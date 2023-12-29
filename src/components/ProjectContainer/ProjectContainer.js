import React from 'react'
import './ProjectContainer.css'
import { Element } from 'react-scroll'
import Project from '../Project/Project'

const ProjectContainer = () => {
    const projects = [
        {
            img:'./Images/3.png',
            title: "Todo Application",
            description: "Todo Application used to a list of tasks you need to complete or things that you want to do.",
            link: "https://main--loquacious-cranachan-bb6b21.netlify.app/"
        },
        {
            img:"./Images/1.png",
            title: "E-Commerce FrontEnd",
            description: "E-Commerce webiste used to buy products through online by justing clicking the button!!.",
            link: "https://fanciful-cajeta-3039ce.netlify.app/"
        },
        {
            img:"./Images/2.png",
            title: "CRUD APPLICATION",
            description: "Using Axios build CRUD Application",
            link: "https://courageous-macaron-ea4ff3.netlify.app/"
        },
        {
            img:"./Images/4.png",
            title: "Password Reset Application",
            description: "a secure password reset functionality, enabling users to receive reset links via email and update their passwords securely.",
            link: "https://warm-dragon-c11fcf.netlify.app/"
        },
        {
            img:"./Images/5.png",
            title: "URL Shortner",
            description: "URL Shortner used to short the url of bigger url link",
            link: "https://deft-youtiao-3b8d27.netlify.app/"
        },
    ]
  return (
    <Element className='projectContainer' id='projects'>
        <h1>Projects</h1>
        <div className='projectContainer_projects'>
            {
                projects.map((project,index) => {
                    return (
                        <Project key={index} img={project.img} title={project.title} description={project.description} link={project.link} />
                    )
                })
            }
        </div>
    </Element>
    )
}

export default ProjectContainer
