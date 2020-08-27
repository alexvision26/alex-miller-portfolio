import React, {useState} from 'react';
// import {TransitionGroup} from 'react-transition-group';
import './skills.scss'

function Skills() {

    const [desc, setDesc] = useState(false)

    const handleHover = () => {
        setDesc(true)
    }

    const handleLeave = () => {
        setDesc(false)
    }

    return (
        <>
    <div className="about-dev">
        <div id="about" className='about-sec'>
            <h2 className="about-title">Full-Stack Software Developer</h2>
            <div className="about-content">
                <div className="about-only">
                    <div className="profile-pic">
                        <img src="https://avatars3.githubusercontent.com/u/57777545?s=400&v=4" alt=""/>
                    </div>
                    <div className='about-copy'>
                        <h4>About Me</h4>
                        <p>I am a software developer currently living in Salem, Oregon. My passion for technology and helping
                            others granted me the opportunity to become a Team Leader with Lambda School, which is a mentor and
                            manager for software development students of the program. I previously operated my own photography business
                            working in product marketing, real estate and fine art landscape photography.</p>
                        <div className="socials">
                            <img src="https://image.flaticon.com/icons/svg/733/733553.svg"/>
                            <img src="https://image.flaticon.com/icons/svg/2111/2111463.svg"/>
                        </div>
                    </div>
                </div>

                <div className='skills-section'>
                    <div className="skills-blocks">

                        <div className='block' onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt=""/>
                            <h3>JavaScript</h3>
                        </div>

                        <div className='block'>
                            <img src="https://i.pinimg.com/originals/1f/b7/bf/1fb7bfa0b01903dfbccdc0ed98ed41a4.png" alt=""/>
                            <h3>React</h3>
                        </div>

                        <div className='block'>
                            <img src="https://cdn.iconscout.com/icon/free/png-512/redux-283024.png" alt=""/>
                            <h3>Redux</h3>
                        </div>

                        <div className='block'>
                            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"  alt=""/>
                            <h3>HTML</h3>
                        </div>

                        <div className='block'>
                            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"  alt=""/>
                            <h3>CSS</h3>
                        </div>

                        <div className='block'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1024px-Python.svg.png"  alt=""/>
                            <h3>Python</h3>
                        </div>

                    </div>
                </div>


                </div>
        </div>


        {/* <div className='skills-section'>
            <div className="skills-blocks">
                <div className='block' onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt=""/>
                    <h3>JavaScript</h3>
                </div>

                <div className='block'>
                    <img src="https://i.pinimg.com/originals/1f/b7/bf/1fb7bfa0b01903dfbccdc0ed98ed41a4.png" alt=""/>
                    <h3>React</h3>
                </div>

                <div className='block'>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/redux-283024.png" alt=""/>
                    <h3>Redux</h3>
                </div>

                <div className='block'>
                    <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"  alt=""/>
                    <h3>HTML</h3>
                </div>

                <div className='block'>
                    <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"  alt=""/>
                    <h3>CSS</h3>
                </div>

                <div className='block'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1024px-Python.svg.png"  alt=""/>
                    <h3>Python</h3>
                </div>

            </div>
        </div> */}
    </div>
        </>
    )
}

export default Skills;