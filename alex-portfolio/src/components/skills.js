import React, {useState} from 'react';
// import {TransitionGroup} from 'react-transition-group';
import './skills.css'

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
        <div className='skills-section'>
            <h2 className='skill-title'>Skills & Services</h2>
            <div className="skills-blocks">
                <div className='block' onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" width="200px" height="200px" alt=""/>
                    <h3>JavaScript</h3>
                </div>

                <div className='block'>
                    <img src="https://i.pinimg.com/originals/1f/b7/bf/1fb7bfa0b01903dfbccdc0ed98ed41a4.png" width="220px" height="200px" alt=""/>
                    <h3>React</h3>
                </div>

                <div className='block'>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/redux-283024.png" width="200px" height="200px" alt=""/>
                    <h3>Redux</h3>
                </div>

                <div className='block'>
                    <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" width="200px" height="200px" alt=""/>
                    <h3>HTML</h3>
                </div>

                <div className='block'>
                    <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png" width="200px" height="200px" alt=""/>
                    <h3>CSS</h3>
                </div>

                <div className='block'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1024px-Python.svg.png" width="200px" height="200px" alt=""/>
                    <h3>Python</h3>
                </div>

                {/* <div className='block'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" width="200px" height="200px" alt=""/>
                </div> */}

                <div className='block'>
                    <img src="https://i.pinimg.com/originals/df/44/73/df447332be90e8a6617d0e30b79d9cf6.png" width="200px" height="200px" alt=""/>
                    <h3>SQL</h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills;