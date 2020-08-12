import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

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
          <div className='logo'>
            <h2>Made By Alex</h2>
          </div>
          
          <div className='links'>
            <a href="#">Home</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
          </div>
        </nav>
      </header>
        <div className='container'>

        {projects.map(e => {
          return (
          <div className='port-item'>
            <img src={e.proj_img}/>
            <div className='port-desc'>
              <h3>{e.proj_name}</h3>
              <p>{e.desc}</p>
            </div>
          </div>
          )
        })}

          </div>

      </div>
      </div>
  );
}

export default App;
