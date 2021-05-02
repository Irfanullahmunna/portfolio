import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


const Social = () => {
    return (
        <div>
            <div className="text-center p-2">
                <a className="p-2" href="https://github.com/Irfanullahmunna"><FontAwesomeIcon icon={faGithub} /></a>
                <a className="p-2" href="https://www.linkedin.com/in/irfan-ullah-munna-742a8014b/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className="p-2" href="https://www.youtube.com/channel/UCcOOC0Up3G32oZJl_Qo-9dg"><FontAwesomeIcon icon={faYoutube} /></a>
                <a className="p-2" href="https://www.instagram.com/shanto659/"><FontAwesomeIcon icon={faInstagram} /></a>
                <a className="p-2" href="https://www.facebook.com/Shanto659/"><FontAwesomeIcon icon={faFacebook} /></a>
                {/* <a className="p-2" href="https://github.com/Irfanullahmunna"><FontAwesomeIcon icon={faGithub} /></a> */}
            </div>
        </div>
    );
};

export default Social;