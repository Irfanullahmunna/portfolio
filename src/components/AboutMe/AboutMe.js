import React from 'react';

import ProfileImage from '../../images/ProfileImage.jpg';
import Navbar from '../Shared/Navbar/Navbar';
import Social from '../Shared/Social/Social';

const AboutMe = () => {
    return (
        <div className="">
            
            <Navbar></Navbar>

            <div className="text-center">
                <img src={ProfileImage} alt="" />
                <h1>I'm Irfan Ullah Munna</h1>
                <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                <Social></Social>
            </div>

            <div className="d-flex">
                <div className="col-md-6">
                    <h1 className="text-center">My Skill</h1>
                    <div>
                        <h3>Expertise:</h3>
                        <div className="">
                            <button>React JS</button>
                            <button>React Router</button>
                            <button>React Bootstrap</button>
                            <button>Material UI</button>
                            <button>HTML5</button>
                            <button>CSS3</button>
                            <button>Bootstrap4</button>
                            <button>JavaScript (ES6)</button>
                            <button>React Spring</button>
                            
                        </div>

                        <h3>Comfortable:</h3>
                        <div className="">
                            <button>Redux</button>
                            <button>Node</button>
                            <button>MongoDB</button>
                        </div>

                        <h3>Familiar:</h3>
                        <div className="">
                            <button>C</button>
                            <button>C++</button>
                            <button>C#</button>
                        </div>

                        <h3>Extra Skills:</h3>
                        <div className="">
                            <button>Adobe Premiere Pro</button>
                            <button>Adobe Photoshop</button>
                        </div>

                        <h3>Operating Systems:</h3>
                        <div className="">
                            <button>Windows(7,8 and 10)</button>
                            <button>Kali Linux</button>
                        </div>

                        <h3>Tools & Softwares:</h3>
                        <div className="">
                            <button>Git</button>
                            <button>VS Code</button>
                            <button>Visual Studio</button>
                            <button>Chrome Dev Tools</button>
                            <button>Heroku</button>
                            <button>Netlify</button>
                            <button>Firebase</button>
                        </div>

                    </div>

                </div>
                <div className="col-md-6">
                    <h1 className="text-center">My Education</h1>

                    <h3>Under Graduation</h3>
                    <h5>B.Sc Eng. in Computer Science & Engineering</h5>
                    <h5>International Islamic University Chittagong</h5>
                    <p>6<sup>th</sup> Semester (3<sup>th</sup> Year)</p>
                    <h5>2018 - CURRENT</h5>

                    <h3>Higher Secondary</h3>
                    <h5>HSC 2017</h5>
                    <h5>CUET College</h5>
                    <p>GPA: 4.33 (Out of 5)</p>

                    <h3>Secondary</h3>
                    <h5>HSC 2015</h5>
                    <h5>Raozan RRAC Govt School</h5>
                    <p>GPA: 5.00 (Out of 5)</p>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;