import React from 'react';
import WorkImage1 from '../../../images/work1-1.png';
import WorkImage2 from '../../../images/work1-2.png';
import WorkImage3 from '../../../images/work1-3.png';


const Work3 = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={WorkImage1} style={{height:'500px'}} className="img-fluid d-block w-100" alt="..." />
                                <div className="carousel-caption">
                                <h5 style={{color:'black'}}>Portfolio Website</h5>
                                    <button style={{color:'black'}} className="btn btn-danger"><a href="https://irfanullahmunna.github.io/Assignment-1/">Live</a></button>
                                    <button style={{color:'black'}} className="btn btn-danger"><a href="https://github.com/Irfanullahmunna/Assignment-1">Github</a></button>
                                    {/* <p style={{color:'black'}}>Some representative placeholder content for the first slide.</p> */}
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={WorkImage2} style={{height:'500px'}} className="img-fluid d-block w-100" alt="..." />
                                <div className="carousel-caption">
                                    <h5 style={{color:'black'}}>Portfolio Website</h5>
                                    <button style={{color:'black'}} className="btn btn-danger"><a href="https://irfanullahmunna.github.io/Assignment-1/">Live</a></button>
                                    <button style={{color:'black'}} className="btn btn-danger"><a href="https://github.com/Irfanullahmunna/Assignment-1">Github</a></button>
                                    {/* <p style={{color:'black'}}>Some representative placeholder content for the first slide.</p> */}
                                </div>
                            </div>
                                <div className="carousel-item">
                                <img src={WorkImage3} style={{height:'500px'}} className="img-fluid d-block w-100" alt="..." />
                                <div className="carousel-caption">
                                <h5 style={{color:'black'}}>Portfolio Website</h5>
                                    <button style={{color:'black'}} className="btn btn-danger"><a href="https://irfanullahmunna.github.io/Assignment-1/">Live</a></button>
                                    <button style={{color:'black'}} className="btn btn-danger"><a href="https://github.com/Irfanullahmunna/Assignment-1">Github</a></button>
                                    {/* <p style={{color:'black'}}>Some representative placeholder content for the first slide.</p> */}
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
                <div className="col-md-6">
                    <h1>Portfolio Website</h1>
                    <p>
                    It is a portfolio website, which contain some information like about yourself, latest working project, education, contact etc. All the facilities of this website are listed here:
                    </p>
                    <ul>
                        <li>Anyone can see all information lists of the devloper and change the page to navigation menu.</li>
                        <li>Devloper can add more services</li>
                        <li>User can see recently working projects providing a demo picture</li>
                        <li>User can see his education information.</li>
                        <li>User can submit a review about a service, which are shown in the homepage randomly.</li>
                    </ul>

                    <h2>Technology</h2>
                    
                    <div className="">
                        <button className="btn btn-white p-2">HTML5</button>
                        <button className="btn btn-white p-2">CSS3</button>
                        <button className="btn btn-white p-2">Bootstrap4</button>
                    </div>
                    <br/>
                    <br/>
                    <div className="text-center">
                        <button style={{color:'black'}} className="btn btn-danger"><a href="https://irfanullahmunna.github.io/Assignment-1/">Live</a></button>
                        <button style={{color:'black'}} className="btn btn-danger"><a href="https://github.com/Irfanullahmunna/Assignment-1">Github</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work3;