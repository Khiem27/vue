import React from 'react';
import {
    Link
} from "react-router-dom";

BlogTitle.propTypes = {
    
};

function BlogTitle(props) {
    return (
        <div className='breadcrumb-area' style={{"backgroundImage": "url(https://vue-plum-chi.vercel.app/img/bg/page-title.png)"}}>
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="breadcrumb-text text-center">
                            <h1 class="">Blog</h1>
                            <ul class="breadcrumb-menu">
                                <li><Link to="/">home</Link></li>
                                <li><span>Blog</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogTitle;