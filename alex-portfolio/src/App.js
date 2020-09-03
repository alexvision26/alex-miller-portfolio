import React, {useState, useEffect} from 'react';
import './App.scss';
import axios from 'axios';

import Hero from './components/hero';
import Skills from './components/skills';

import FadeLoader from "react-spinners/FadeLoader";

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
  const [isModal, setIsModal] = useState(false)

  const [projLoad, setProjLoad] = useState(false)

  const [ref, visible] = useOnScreen({rootMargin: '50px'})

  useEffect(() => {
    setProjLoad(true)
    axios.get(`https://limitless-sea-30057.herokuapp.com/api/projects`).then(res => {
      setProjLoad(false)
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

  const handleModal = () => {
    setIsModal(!isModal)
  }

  function jump(e) {
    var url = document.location.href;               //Save down the URL without hash.
    document.location.href = "#"+e;                 //Go to the target element.
    document.history.replaceState(null,null,url);
  }

  const navState = visible ? "navbar hidden" : "navbar";
  const pageState = loaded ? "App" : "App hidden";

  return (
    <div className={pageState}>
      <div className='hero'>
        <header className={navState}>
            <div className='nav-content'>
              <div className='logo'>
                <h2>Alex Miller</h2>
              </div>
              <label className="hamburger" htmlFor="toggle">&#9776;</label>
                <input type="checkbox" id="toggle"></input>
              <div className='links'>
                    <a href='#'>Home</a>
                    <a href='#projects'>Portfolio</a>
                    <a href='#about'>About</a>
                    <a href="mailto:alexmillerprojects@gmail.com">Contact</a>
              </div>
            </div>
        </header>
        

        <div ref={ref}>
          <Hero jump={jump}/>
        </div>

        <div id="about">
          <Skills/>
        </div>

      <h2 id='projects' className='proj-sec'>Recent Projects</h2>
        <div className='container'>

        {projLoad ? 
        <div className="loader">
        <FadeLoader
          size={1050}
          color={"#4dbd3f"}
        />
        </div> : 

        projects.map(e => {
          return (
          <div className='port-item'>
            <img src={e.proj_img}/>
            <div className='port-desc'>
              <h3>{e.proj_name}</h3>
              <p>{e.desc}</p>
              <br/>
              <p><span className="tech-stack">Tech Stack:</span> {e.stack}</p>
              <div className='proj-buttons'>
                <button onClick={() => viewPage(e.deploy)}>App</button>
                {e.repo ? <button onClick={() => viewPage(e.repo)}>Code</button> : <></>}
              </div>
            </div>
          </div>
          )
        })}


          </div>
          <div className='contact-sec'>
            <h2>Ready to work?</h2>
            <a className='cta-button' href="mailto:alexmillerprojects@gmail.com">Let's talk!</a>
          </div>

          <div className='footer-sec'>
            <h3>Alex Miller | Full Stack Software Developer | 2020</h3>
            <a href="#">> Home</a>
            <a href="#projects">> Portfolio</a>
            <a href="#about">> About</a>
            <a href="mailto:alexmillerprojects@gmail.com">> Contact</a>
            {/* <a onClick={handleModal}>> Contact</a> */}
          </div>
      </div>

        <a href="#" className={visible ? "return hidden" : "return"}>
          <img src="https://image.flaticon.com/icons/svg/992/992703.svg"/>
        </a>

      </div>
  );
}

export default App;
