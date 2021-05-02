import React from 'react';
import ProfileImage from '../../images/ProfileImage.jpg'
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Blogs = () => {
    return (
        <div className="">

            <Navbar></Navbar>

            <h1 className="text-center">Some of my Blogs</h1>

            <div className="">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                        <img src={ProfileImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src={ProfileImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a short card.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src={ProfileImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src={ProfileImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src={ProfileImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src={ProfileImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Blogs;