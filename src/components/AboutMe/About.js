import React from 'react'
import { Element } from 'react-scroll'
import './About.css'

const About = () => {
  return (
    <Element className='aboutContainer' id='about'>
            <div>
                <h2>About <span>Me</span></h2>
                <p>Hi Myself, <span>Badhrirajan T</span>.I did my graducation in B.Tech CSE in Kalasalingam University PassedOut in 2022</p>
                <p>Having 10 months experience in DXC Technology, Worked as Associate Software Engineer.</p>
                <div className='aboutContainer_text'>
                <h3>Education :</h3>
                <dl>
                    <dt>Bachelor of Technology <span>(2018-2022)</span></dt>
                    <dd><b>CGPA:8.02</b></dd>
                    <dd>Kalasalingam University</dd>
                </dl>
                <dl>
                    <dt>HSC <span>(2015-2016)</span></dt>
                    <dd><b>1028/1200</b></dd>
                    <dd>Nadar Saraswathi Matric HR Sec School</dd>
                </dl>
                <dl>
                    <dt>SSLC <span>(2013-2014)</span></dt>
                    <dd><b>464/500</b></dd>
                    <dd>SDA Matric HR Sec School</dd>
                </dl>
                <h3>Experience :</h3>
                <dl>
                    <dt>DXC Technology <span>June 2022 - March 2023</span></dt>
                    <dd>Job Role: Associate Software Engineer</dd>
                    <dd>Description: 
                        <ul>
                            <li>Collaborated with the cloud team to optimize cloud services,streamlining operations and reducing costs.</li>
                            <li>Facilitated efficient processing of service requests, ensuring prompt and precise resolutions to maintain exceptional customer satisfaction with a 98% customer satisfaction rating.</li>
                            <li>Executed comprehensive event management, encompassing planning, monitoring, and successful implementation to guarantee service reliability, achieving 99.5% uptime.</li>
                        </ul>
                    </dd>
                </dl>
                </div>
            </div>
    </Element>
  )
}

export default About
