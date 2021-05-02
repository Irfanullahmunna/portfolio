import React from 'react';
// import Blogs from '../../Blogs/Blogs';
// import Contact from '../../Contact/Contact';
// import AboutMe from '../../AboutMe/AboutMe';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
// import Works from '../../Works/Works';
import HeaderMain from '../HeaderMain/HeaderMain';

const Home = () => {
    return (
        <div class="container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            {/* <AboutMe></AboutMe> */}
            {/* <Contact></Contact> */}
            {/* <Works></Works> */}
            {/* <Blogs></Blogs> */}
            <Footer></Footer>
            
        </div>
    );
};

export default Home;