import React from 'react';
import './hero.css'

function Hero() {

    return(
        <>
        <div className='hero-banner'>
            <div className='overlay'>
                <div className='hero-content'>
                    <h1 className='title'>Hi, I'm <span className='name'>Alex Miller.</span></h1>
                    <h2 className='subtitle'>Nice to meet you.</h2>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero;
