import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
      
          <div className='port-item'>
            <img src='https://gdurl.com/9loK/'/>
            <div className='port-desc'>
              <h3>PORTFOLIO TITLE</h3>
              <p>PORTFOLIO DESCRIPTION LOREM IPSUM</p>
            </div>
          </div>

      </div>
      </div>
    </div>
  );
}

export default App;
