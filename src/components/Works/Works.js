import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Work1 from './Work1/Work1';
import Work2 from './Work2/Work2';
import Work3 from './Work3/Work3';

const Works = () => {
    return (
        <div className="container">

            <div>
                <Navbar></Navbar>
            </div>

                <h1 className="text-center">Some of my Works</h1>

                <div>
                    <Work1></Work1>
                </div>
                <div>
                    <Work2></Work2>
                </div>
                <div>
                    <Work3></Work3>
                </div>

            <div>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Works;