import React from 'react';
import Blog1 from '../../Blogs/Blog1/Blog1';
import Blog2 from '../../Blogs/Blog2/Blog2';
import Blog3 from '../../Blogs/Blog3/Blog3';
// import Blogs from '../../Blogs/Blogs';
// import Contact from '../../Contact/Contact';
// import AboutMe from '../../AboutMe/AboutMe';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Work1 from '../../Works/Work1/Work1';
import Work2 from '../../Works/Work2/Work2';
import Work3 from '../../Works/Work3/Work3';
// import Works from '../../Works/Works';
import HeaderMain from '../HeaderMain/HeaderMain';
import HomeContact from '../HomeContact/HomeContact';

const Home = () => {
    return (
        <div class="container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            {/* <AboutMe></AboutMe> */}
            {/* <Contact></Contact> */}
            {/* <Works></Works> */}
            {/* <Blogs></Blogs> */}

            {/* Work Container  */}
            <div className="">
                <h1 className="text-center mb-5">Some of my Works</h1>
                <div data-aos="fade-left" className="mb-5">
                    <Work1></Work1>
                </div>
                <div data-aos="fade-right" className="mb-5">
                    <Work2></Work2>
                </div>
                <div data-aos="fade-left" className="mb-5">
                    <Work3></Work3>
                </div>
            </div>

            {/* Blog Container */}
            <div className="">
                <h1 className="text-center mb-5">Some of my Blogs</h1>
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

            <div>
                <HomeContact></HomeContact>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Home;