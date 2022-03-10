import React from 'react';
import {
    Link
} from "react-router-dom";

NewsFeeds.propTypes = {
    
};

function NewsFeeds(props) {
    return (
        <section className="latest-blog-area pt-95 pb-60 box-90">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="area-title text-center mb-50">
                            <h2>News Feeds</h2>
                            <p>Check it out every updates</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="latest-news mb-40">
                            <div className="news__thumb mb-25"><img src="https://vue-plum-chi.vercel.app/img/blog/latest/lb1.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipisic eiusmod tempor incididunt ut labore et dolore."/></div>
                            <div className="news__caption white-bg">
                                <div className="news-meta mb-15"><span><i className="far fa-calendar-check"></i>  September 15, 2018  </span><span><Link to="#"><i className="far fa-user"></i> MD.</Link></span><span><Link to="#"><i className="far fa-comments"></i> 2 Comments</Link></span></div>
                                <h2><Link to="/blog/1">Lorem ipsum dolor sit amet, consectetur adipisic eiusmod tempor incididunt ut labore et dolore.</Link></h2>
                                <p>ccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem ...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="latest-news mb-40">
                            <div className="news__thumb mb-25"><img src="https://vue-plum-chi.vercel.app/img/blog/latest/lb2.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipisic eiusmod tempor incididunt ut labore et dolore."/></div>
                            <div className="news__caption white-bg">
                                <div className="news-meta mb-15"><span><i className="far fa-calendar-check"></i>  September 15, 2018  </span><span><Link to="#"><i className="far fa-user"></i> MD.</Link></span><span><Link to="#"><i className="far fa-comments"></i> 2 Comments</Link></span></div>
                                <h2><Link to="/blog/2">Lorem ipsum dolor sit amet, consectetur adipisic eiusmod tempor incididunt ut labore et dolore.</Link></h2>
                                <p>ccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem ...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="latest-news mb-40">
                            <div className="news__thumb mb-25"><img src="https://vue-plum-chi.vercel.app/img/blog/latest/lb3.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipisic eiusmod tempor incididunt ut labore et dolore."/></div>
                            <div className="news__caption white-bg">
                                <div className="news-meta mb-15"><span><i className="far fa-calendar-check"></i>  September 15, 2018  </span><span><Link to="#"><i className="far fa-user"></i> MD.</Link></span><span><Link to="#"><i className="far fa-comments"></i> 2 Comments</Link></span></div>
                                <h2><Link to="/blog/3">Lorem ipsum dolor sit amet, consectetur adipisic eiusmod tempor incididunt ut labore et dolore.</Link></h2>
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

export default NewsFeeds;