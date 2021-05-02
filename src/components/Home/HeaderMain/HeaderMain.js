import React from 'react';
import { Link } from 'react-router-dom';

import ProfileImage from '../../../images/ProfileImage.jpg'
import Social from '../../Shared/Social/Social';

const HeaderMain = () => {
    return (
        <section className="container" style={{paddingTop:'100px'}}>
            {/* <h1>Header Main</h1> */}
            {/* <div className="d-flex align-items-center"> */}
            <div className="row align-items-center">

                <div className="col-md-6 text-center">
                    {/* <h1>Hi</h1> */}
                    <img className="rounded-circle" src={ProfileImage} alt=""/>
                </div>

                <div className="col-md-6 text-center">
                    <p className="mt-5">Hello , I'm</p>
                    <h1>Irfan Ullah Munna</h1>
                    <div className="row">
                        <li className="col">Web Devloper</li>
                        <li className="col">Programmer</li>
                    </div>
                    <br/>
                    <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>

                    <div>
                        <Social></Social>
                    </div>

                    <div className=" row m-5">
                        <button className="col btn btn-white p-2"> <Link className="nav-link" to="/about">About</Link></button>
                        <button className="col btn btn-white p-2"> <Link className="nav-link" to="/contact">Get in Touch</Link></button>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default HeaderMain;