import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/">Shanto</Link> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <div className="d-flex justify-content-end ">
                        
                    </div> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li class="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/works">Works</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/blogs">Blogs</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li>
                                <button className="btn btn-primary"><a className="nav-link" href="https://drive.google.com/file/d/1XcdhlVSd-7m41MV6VKCGMlqCK3jO9-1G/view?usp=sharing">Resume</a></button>
                            </li>
                                      
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;