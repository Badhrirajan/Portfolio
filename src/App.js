import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import TopContainer from './components/TopContainer/TopContainer'
import SkillContainer from './components/SkillContainer/SkillContainer'
import ProjectContainer from './components/ProjectContainer/ProjectContainer'
import Contact from './components/Contact/Contact';
import About from './components/AboutMe/About';

const App = () => {
  return (
    <div>
      <Header />
      <TopContainer />
      <About />
      <SkillContainer />
      <ProjectContainer />
      <Contact />
    </div>
  )
}

export default App
