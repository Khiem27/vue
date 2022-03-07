import React from 'react';

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
                <div class="widget-social-icon"><a href="#"><i class="fab fa-facebook-f"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-instagram"></i></a><a href="#"><i class="fab fa-google-plus-g"></i></a><a href="#"><i class="fab fa-vimeo-v"></i></a></div>
            </div>
        </div>
    );
}

export default AboutMe;