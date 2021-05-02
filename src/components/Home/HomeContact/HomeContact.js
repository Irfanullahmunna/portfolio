import React from 'react';
import { Link } from 'react-router-dom';

const HomeContact = () => {
    return (
        <div className="container text-center m-5">
            <p>What's Next?</p>
            <h1>Get In Touch</h1>
            
            <p className="">I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop a message. I'll try my best to get back to you!</p>
            <button className="col btn btn-danger p-2"> <Link className="nav-link" to="/contact">Say Hello</Link></button>
        </div>
    );
};

export default HomeContact;