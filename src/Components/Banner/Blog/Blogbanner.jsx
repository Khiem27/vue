import React from 'react';
import PropTypes from 'prop-types';

Blogbanner.propTypes = {
    
};

function Blogbanner(props) {
    return (
        <div class="widget mb-40 p-0 b-0">
            <div class="banner-widget">
                <a href="#"><img src="https://vue-plum-chi.vercel.app/img/blog/details/banner.jpg" alt="Banner"/></a>
            </div>
        </div>
    );
}

export default Blogbanner;