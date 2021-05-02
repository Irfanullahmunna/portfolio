import React from 'react';
import ProfileImage from '../../../images/ProfileImage.jpg';

const Blog1 = () => {
    return (
        <div className="container">
            <div className="card h-100">
                <img src={ProfileImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog1;