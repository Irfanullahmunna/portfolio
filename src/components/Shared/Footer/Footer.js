import React from 'react';
import Social from '../Social/Social';

const Footer = () => {
    return (
        <footer className="container">
            <div className="text-center p-5">
                <p>Copyright {(new Date()).getFullYear} All Right Reserved SHANTO</p>
                <p>Chittagong, Bangladesh</p>
            </div>
            <div className="">
                <Social></Social>
            </div>
        </footer>
    );
};

export default Footer;