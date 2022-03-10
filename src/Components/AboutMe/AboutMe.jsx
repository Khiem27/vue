import React from 'react';
import {
    Link
} from "react-router-dom";

AboutMe.propTypes = {
    
};

function AboutMe(props) {
    return (
        <div className="widget mb-40">
            <div className="widget-title-box mb-30"><span className="animate-border"></span>
                <h3 className="widget-title">About Me</h3></div>
            <div className="about-me text-center"><img style={{"width": "120px"}} src="https://vue-plum-chi.vercel.app/img/blog/details/author.png" alt="Profile"/>
                <h4>MD. Salim Rana</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <div className="widget-social-icon"><Link><i className="fab fa-facebook-f"></i></Link><Link><i className="fab fa-twitter"></i></Link><Link><i className="fab fa-instagram"></i></Link><Link><i className="fab fa-google-plus-g"></i></Link><Link><i className="fab fa-vimeo-v"></i></Link></div>
            </div>
        </div>
    );
}

export default AboutMe;