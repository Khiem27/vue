import React from 'react';
import {
    Link
} from "react-router-dom";

NewsFeedsHome2.propTypes = {
    
};

function NewsFeedsHome2(props) {
    return (
        <section class="latest-blog-area pt-95 pb-60 box-90">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="area-title text-center mb-50">
                            <h2>News Feeds</h2>
                            <p>Check it out every updates</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-lg-6 col-md-6">
                        <div class="latest-news mb-40">
                            <div class="news__thumb mb-25"><img src="https://vue-plum-chi.vercel.app/img/blog/latest/lb4.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipisic eiusmod tempor incididunt ut labore et dolore."/></div>
                            <div class="news__caption white-bg">
                                <div class="news-meta mb-15"><span><i class="far fa-calendar-check"></i>  September 15, 2018  </span><span><Link to="#"><i class="far fa-user"></i> MD.</Link></span><span><Link to="#"><i class="far fa-comments"></i> 2 Comments</Link></span></div>
                                <h2><Link to="/blog/4">Lorem ipsum dolor sit amet, consectetur adipisic eiusmod tempor incididunt ut labore et dolore.</Link></h2>
                                <p>ccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem ...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6">
                        <div class="latest-news mb-40">
                            <div class="news__thumb mb-25"><img src="https://vue-plum-chi.vercel.app/img/blog/latest/lb5.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipisic eiusmod tempor incididunt ut labore et dolore."/></div>
                            <div class="news__caption white-bg">
                                <div class="news-meta mb-15"><span><i class="far fa-calendar-check"></i>  September 15, 2018  </span><span><Link to="#"><i class="far fa-user"></i> MD.</Link></span><span><Link to="#"><i class="far fa-comments"></i> 2 Comments</Link></span></div>
                                <h2><Link to="/blog/5">Lorem ipsum dolor sit amet, consectetur adipisic eiusmod tempor incididunt ut labore et dolore.</Link></h2>
                                <p>ccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem ...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6">
                        <div class="latest-news mb-40">
                            <div class="news__thumb mb-25"><img src="https://vue-plum-chi.vercel.app/img/blog/latest/lb6.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipisic eiusmod tempor incididunt ut labore et dolore."/></div>
                            <div class="news__caption white-bg">
                                <div class="news-meta mb-15"><span><i class="far fa-calendar-check"></i>  September 15, 2018  </span><span><Link to="#"><i class="far fa-user"></i> MD.</Link></span><span><Link to="#"><i class="far fa-comments"></i> 2 Comments</Link></span></div>
                                <h2><Link to="/blog/6">Lorem ipsum dolor sit amet, consectetur adipisic eiusmod tempor incididunt ut labore et dolore.</Link></h2>
                                <p>ccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem ...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsFeedsHome2;