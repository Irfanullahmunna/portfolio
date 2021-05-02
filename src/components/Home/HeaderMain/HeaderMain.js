import React from 'react';

import ProfileImage from '../../../images/ProfileImage.jpg'
import Social from '../../Shared/Social/Social';

const HeaderMain = () => {
    return (
        <section className="container">
            {/* <h1>Header Main</h1> */}
            <div className="d-flex align-items-center">
                <div className="col-md-6">
                    <p>Hello , I'm</p>
                    <h1>Irfan Ullah Munna</h1>
                    <div className="d-flex">
                        <li className="col-md-4">Web Devloper</li>
                        <li className="col-md-4">Programmer</li>
                    </div>
                    <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>

                    <div>
                        <Social></Social>
                    </div>

                    <div>
                        <button className="btn btn-danger"><a href="#">About Me</a></button>
                        <button className="btn btn-danger"><a href="#">Get in touch</a></button>
                    </div>
                </div>
                <div className="col-md-6">
                    <h1>Hi</h1>
                    <img src={ProfileImage} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;