import React from 'react';
import {
    Link
} from "react-router-dom";

AboutMe.propTypes = {
    
};

function AboutMe(props) {
    return (
        <div class="widget mb-40">
            <div class="widget-title-box mb-30"><span class="animate-border"></span>
                <h3 class="widget-title">About Me</h3></div>
            <div class="about-me text-center"><img style={{"width": "120px"}} src="https://vue-plum-chi.vercel.app/img/blog/details/author.png" alt="Profile"/>
                <h4>MD. Salim Rana</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <div class="widget-social-icon"><Link><i class="fab fa-facebook-f"></i></Link><Link><i class="fab fa-twitter"></i></Link><Link><i class="fab fa-instagram"></i></Link><Link><i class="fab fa-google-plus-g"></i></Link><Link><i class="fab fa-vimeo-v"></i></Link></div>
            </div>
        </div>
    );
}

export default AboutMe;