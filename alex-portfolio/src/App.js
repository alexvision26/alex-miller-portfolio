import React, {useState, useEffect} from 'react';
import './App.scss';
import axios from 'axios';

import Hero from './components/hero';
import Skills from './components/skills';

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

  const [contactInfo, setContactInfo] = useState({
    email: "",
    subject: "",
    message: ""
  })

  const [ref, visible] = useOnScreen({rootMargin: '50px'})

  useEffect(() => {
    axios.get(`https://limitless-sea-30057.herokuapp.com/api/projects`).then(res => {
      setProjects(res.data)
    }).catch(err => {
      console.log(err)
    })

    setTimeout(() => {
      setLoaded(true)
    }, 600);

  }, [])

  const handleContact = (e) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    handleModal();

    setContactInfo({
      email: "",
      subject: "",
      message: ""
    })

    setTimeout("alert('Message sent successfully!');", 1);

    const { email, subject, message } = contactInfo
    
    const form = await axios.post('http://localhost:5000/api/contact', {
      email,
      subject,
      message
    })

    
  }

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
  // const returnArrow = visible ? "none" : "block";

  var showModal = isModal ? "flex" : "none";


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

        {projects.map(e => {
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

      {/* <div className='contact-modal' style={{display: showModal}}>
        <h1>Contact Alex Miller</h1>
          <div className="modal-content">
            <div className='close' onClick={handleModal}>+</div>
            <div className="form-content">
              <img src="https://avatars3.githubusercontent.com/u/57777545?s=400&v=4" width="200px" height="200px" alt=""/>

              <form className='ct-form' action="" method="">
                <label>To Alex Miller:</label><br/>
                <label>Your Email Address</label>
                <input className="contact-box" name="email" type="email" value={contactInfo.email} onChange={handleContact} required/>
                <label>Subject</label>
                <input className="contact-box" type='text' name="subject" value={contactInfo.subject} onChange={handleContact} required/>
                <label>Message</label>
                <textarea name="message" cols="50" rows="5" value={contactInfo.message} onChange={handleContact} required/>
                <div className='form-buttons'>
                  <a className="modal-send" type="submit" onClick={handleSubmit}>Submit</a>
                  <a href="" onClick={(e) => {
                    e.preventDefault();
                    handleModal()
                    }} className="modal-cancel">Cancel</a>
                </div>
              </form>
            </div>
          </div>
        </div> */}

        <a href="#" className={visible ? "return hidden" : "return"}>
          <img src="https://image.flaticon.com/icons/svg/992/992703.svg"/>
        </a>

      </div>
  );
}

export default App;
