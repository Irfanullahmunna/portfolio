import React from 'react';
import emailjs from 'emailjs-com';
// npm install emailjs-com --save


import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Contact = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_rf02xdc', 'template_mrks1op', e.target, 'user_mng842SMzfUbENqVz4AwN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
    return (
        
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <form onSubmit={sendEmail} className="container" action="">
                <h1 className="text-center">Get In Touch</h1>
                <div>
                    <label htmlFor="exampleFormControlText1" className="form-label">Name</label>
                    <input type="text" className="form-control" idExampleFormControlText1="" placeholder="Your Name" name="name" />
                </div>
                <div>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" idExampleFormControlInput1="" placeholder="Your Email" name="email" />
                </div>
                <div>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                    <textarea className="form-control" name="" id="exampleFormControlTextarea1" cols="100" rows="10" placeholder="Your Message" name="message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>

            <div>
                <Footer></Footer>
            </div>
            
        </div>
 
    );
};

export default Contact;