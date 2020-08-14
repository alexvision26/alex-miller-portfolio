import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Hero from './components/hero';

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects').then(res => {
      // console.log(res)
      setProjects(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  console.log(projects)

  return (
    <div className="App">
      <div className='hero'>
      <header>
        <nav className='navbar'>
          <div className='nav-content'>
            <div className='logo'>
              <h2>Made By Alex</h2>
            </div>
            
            <div className='links'>
              <a href="#">Home</a>
              <a href="#projects">Portfolio</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </nav>
      </header>
      <Hero/>
      <h2 id='projects' className='proj-sec'>Projects</h2>
        <div className='container'>

        {projects.map(e => {
          return (
          <div className='port-item'>
            <img src={e.proj_img}/>
            <div className='port-desc'>
              <h3>{e.proj_name}</h3>
              <p>{e.desc}</p>
              <div className='proj-buttons'>
                <button>View App</button>
                <button>View Code</button>
              </div>
            </div>
          </div>
          )
        })}

          </div>
          <div className='contact-sec'>
            <h2>Ready to work?</h2>
            <button className='cta-button'>Let's talk!</button>
          </div>

          <div className='footer-sec'>
            <h3>Alex Miller | Full Stack Software Developer | 2020</h3>
            <a href="#">> Home</a>
            <a href="#">> Portfolio</a>
            <a href="#">> Contact</a>
          </div>

      </div>
      </div>
  );
}

export default App;
