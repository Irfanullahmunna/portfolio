import React from 'react';
import ProfileImage from '../../images/ProfileImage.jpg'
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
const Works = () => {
    return (
        <div className="">

            <Navbar></Navbar>

            <h1 className="text-center">Some of my Works</h1>

            <div className="d-flex">
                <div className="col-md-7">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={ProfileImage} style={{height:'500px'}} className="img-fluid d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={ProfileImage} style={{height:'500px'}} className="img-fluid d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                                <div className="carousel-item">
                                <img src={ProfileImage} style={{height:'500px'}} className="img-fluid d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                                </div>
                        </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                    </div>
                </div>
                <div className="col-md-5">
                    <h1>Creative Agency</h1>
                    <p>
                    It is an agency website, which serves some services like web development, graphics design, mobile application design, photography etc. All the facilities of this website are listed here:
                    </p>
                    <ul>
                        <li>Admin can see all order lists of the users and change the order's status by drop down menu.</li>
                        <li>Admin can add more services</li>
                        <li>Admin can make a person 'Admin' by providing those person's email.</li>
                        <li>User can order a service by providing a demo picture</li>
                        <li>User can see his all orders and order's status.</li>
                        <li>User can submit a review about a service, which are shown in the homepage randomly.</li>
                    </ul>

                    <h2>Technology</h2>
                    
                    <div className="">
                        <button>HTML5</button>
                        <button>CSS3</button>
                        <button>Bootstrap4</button>
                        <button>React Bootstrap</button>
                        <button>JavaScript</button>
                        <button>React.js</button>
                        <button>React Router</button>
                        <button>Material UI</button>
                        <button>Node.js</button>
                        <button>Express.js</button>
                        <button>MongoDB</button>
                    </div>
                    <br/>
                    <br/>
                    <div className="">
                        <button className="btn btn-danger">Live</button>
                        <button className="btn btn-danger">Github</button>
                    </div>
                </div>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Works;