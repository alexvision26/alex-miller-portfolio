import React from 'react';
import './services.scss';

function Services() {

    return (
        <div className="service-sec">
            {/* <h1>Services</h1> */}
            <div className="service-box">
                
                <div className="s-box">
                    <img src="https://image.flaticon.com/icons/svg/3003/3003040.svg" alt=""/>
                    <h3>Front-End</h3>
                    <hr/>
                    <ul>
                        <li>JavaScript</li>
                        <li>React & Redux</li>
                        <li>LESS & SASS</li>
                        <li>Jest</li>
                        <li>React Testing Library</li>
                        <li>Responsive & Accessible Design</li>
                        <li>Wordpress</li>
                    </ul>
            
                </div>

                <div className="s-box">
                    <img src="https://image.flaticon.com/icons/svg/954/954991.svg" alt=""/>
                    <h3>Back-End</h3>
                    <hr/>
                    <ul>
                        <li>Node</li>
                        <li>Knex</li>
                        <li>Express</li>
                        <li>SQLite</li>
                        <li>MySQL</li>
                        <li>GraphQL</li>
                    </ul>
                </div>

                {/* <div className="s-box">
                    <img src="https://image.flaticon.com/icons/svg/3419/3419975.svg" alt=""/>
                    <h3>Design</h3>
                    <hr/>
                    <ul>
                        <li>Photoshop</li>
                        <li>Figma</li>
                        <li>Responsive & Accessible Design</li>
                    </ul>
                </div> */}
            </div>

        </div>
    )
}

export default Services;