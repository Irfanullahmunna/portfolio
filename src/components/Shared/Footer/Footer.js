import React from 'react';
import Social from '../Social/Social';

const Footer = () => {
    return (
        <footer>
            <div className="text-center">
                <p>Copyright {(new Date()).getFullYear} All Right Reserved</p>
                <p>Chittagong, Bangladesh</p>
            </div>
            <div className="text-center">
                <Social></Social>
            </div>
        </footer>
    );
};

export default Footer;