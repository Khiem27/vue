import React from 'react';
import {
    Link
} from "react-router-dom";

Blogbanner.propTypes = {
    
};

function Blogbanner(props) {
    return (
        <div className="widget mb-40 p-0 b-0">
            <div className="banner-widget">
                <Link><img src="https://vue-plum-chi.vercel.app/img/blog/details/banner.jpg" alt="Banner"/></Link>
            </div>
        </div>
    );
}

export default Blogbanner;