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
                        <p>Hello! I am a software developer who is passionate about creating applications, learning new technologies and education. I have gained experience using HTML, CSS, JavaScript, React, Redux, Node, Express, Knex, Python, MySQL and more through creating various applications for companies and other collaborative projects while studying full-stack web development at Lambda School.
                        </p>
                        <p>I am currently based in Oregon but open to remote work and relocation.</p>
                        <div className="socials">
                            <a href="https://github.com/alexvision26" target="_blank"><img src="https://image.flaticon.com/icons/svg/733/733553.svg"/></a>
                            <a href="https://www.instagram.com/alex.vision/" target="_blank"><img src="https://image.flaticon.com/icons/svg/2111/2111463.svg"/></a>
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