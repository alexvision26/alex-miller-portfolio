import React from 'react';
import './hero.scss'

import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero(props) {

    return(
        <>
        <div className='hero-banner'>
            <div className='overlay'>
                <div className='hero-content'>
                    <h1 className='title'>Hi, I'm <span className='name'>Alex Miller.</span></h1>
                    <h2 className='subtitle'>Nice to meet you.</h2>

                    <div className='intro-buttons'>
                    <a href="#projects" className="intro-button">Portfolio</a>
                    <a className="intro-button" onClick={props.handleModal}>Contact</a>
                </div>
                </div>
                <AnchorLink href='#about'>
                <svg id="more-arrows">
                    <polygon class="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
                    <polygon class="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
                    <polygon class="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
                </svg>
                </AnchorLink>

            </div>
        </div>
        </>
    )
}

export default Hero;
