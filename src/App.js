import * as React from 'react';
import { Profile } from './components/Home/Profile';
import './App.css';
import ProjectCard from './components/Projects/ProjectCard/ProjectCard';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Profile/>
      <ProjectCard/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
