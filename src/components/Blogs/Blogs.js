import React from 'react';
import ProfileImage from '../../images/ProfileImage.jpg'
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Blog1 from './Blog1/Blog1';
import Blog2 from './Blog2/Blog2';
import Blog3 from './Blog3/Blog3';

const Blogs = () => {
    return (
        <div className="container">

            <div>
                <Navbar></Navbar>
            </div>

            <h1 className="text-center m-5">Some of my Blogs</h1>

            <div className="">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div data-aos="zoom-in" className="col">
                        <Blog1></Blog1>
                    </div>
                    <div data-aos="zoom-in" className="col">
                        <Blog2></Blog2>
                    </div>
                    <div data-aos="zoom-in" className="col">
                        <Blog3></Blog3>
                    </div>
                    <div data-aos="zoom-in" className="col">
                        <Blog1></Blog1>
                    </div>
                    <div data-aos="zoom-in" className="col">
                        <Blog2></Blog2>
                    </div>
                    <div data-aos="zoom-in" className="col">
                        <Blog3></Blog3>
                    </div>
                    
                </div>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Blogs;