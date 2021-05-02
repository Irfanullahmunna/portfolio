import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Shanto</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex justify-content-end collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            
                            <Link className="nav-link" ria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/works">Works</Link>
                            <Link className="nav-link" to="/blogs">Blogs</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>
                            
                            <button className="btn btn-primary"><a className="nav-link" href="https://drive.google.com/file/d/1XcdhlVSd-7m41MV6VKCGMlqCK3jO9-1G/view?usp=sharing">Resume</a></button>          
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;