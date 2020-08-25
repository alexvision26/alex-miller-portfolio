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
import Contact from './components/contact';
import { Helmet } from 'react-helmet';

function useOnScreen(options) {
  const ref = React.useRef();
  const [visible, setVisible] = useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);

    }, options)

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }

  }, [ref, options])

  return [ref, visible]

}

function App() {
  const [projects, setProjects] = useState([])
  const [loaded, setLoaded] = useState(false)

  const [ref, visible] = useOnScreen({threshold: '.2'})

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects').then(res => {
      console.log(res)
      setProjects(res.data)
    }).catch(err => {
      console.log(err)
    })

    setTimeout(() => {
      setLoaded(true)
    }, 600);

  }, [])

  const viewPage = (link) => {
    window.open(link, '_blank')
  }

  const navState = visible ? "navbar hidden" : "navbar";
  const pageState = loaded ? "App" : "App hidden";

  return (
    <div className={pageState}>
      <Helmet>
        <title>Made by Alex</title>
      </Helmet>
      <div className='hero'>
        <header className={navState}>
            <div className='nav-content'>
              <div className='logo'>
                <h2>Made By Alex</h2>
              </div>
              
              <div className='links'>
                    <a href='#'>Home</a>
                    <a href='#projects'>Portfolio</a>
                    <a href='#'>Contact</a>
              </div>
            </div>
        </header>

        <div className='contact-modal'>
          
        </div>
        

        <div ref={ref}>
          <Hero/>
        </div>

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
                <button onClick={() => viewPage(e.deploy)}>View App</button>
                <button onClick={() => viewPage(e.repo)}>View Code</button>
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
