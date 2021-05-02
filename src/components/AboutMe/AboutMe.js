import React from 'react';

import ProfileImage from '../../images/ProfileImage.jpg';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Social from '../Shared/Social/Social';
import MyEducation from './MyEducation/MyEducation';
import MySkill from './MySkill/MySkill';

const AboutMe = () => {
    return (
        <div className="container">
            
            <div>
                <Navbar></Navbar>
            </div>

            <div className="text-center">
                <img className="rounded-circle w-40 p-5" src={ProfileImage} alt="" />
                <h1>I'm Irfan Ullah Munna</h1>
                <p className="mx-5">A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                <button className="btn btn-danger"><a className="nav-link" href="https://drive.google.com/file/d/1XcdhlVSd-7m41MV6VKCGMlqCK3jO9-1G/view?usp=sharing">Resume</a></button>
                <Social></Social>
            </div>

            <div className="row">
                <div className="col-md-6 mt-5">
                    <MySkill></MySkill>
                </div>
                <div className="col-md-6 mt-5">
                    <MyEducation></MyEducation>
                </div>
            </div>

            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default AboutMe;