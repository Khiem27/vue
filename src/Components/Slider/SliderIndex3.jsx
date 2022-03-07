import React, { useState } from 'react';
import PropTypes from 'prop-types';

SliderIndex3.propTypes = {
    
};

function SliderIndex3(props) {
    const [active, setActive] = useState(1)
    const handleActive = (action) => {
        if (action === "next" && active > 2) {
            setActive(1)
        } else if (action === "next") {
            setActive(active + 1)
        }

        if (action === "prev" && active < 2) {
            setActive(3)
        } else if (action === "prev") {
            setActive(active - 1)
        }
    }
    return (
        <section class="slider-area pos-relative pt-100 pb-100">
            <div class="slider-active slider-3">
                <div class="slick-slider slick-initialized" dir="ltr"><button onClick={() => handleActive("prev")} type="button" class="slick-arrow slick-prev"> <i class="fas fa-arrow-left"></i> </button>
                    <div class="slick-list">
                        <div class="slick-track" style={{"width":"10633px","opacity":"1"}}>
                            <div data-index="0" class={active === 1 ? "slick-slide slick-active slick-current" : "slick-slide"} tabindex="-1" aria-hidden="false" style={active === 1 ? {"outline":"none","width":"1519px","position":"relative","left":"0px","opacity":"1","transition":"opacity 500ms linear 0s, visibility 500ms linear 0s"} : {"outline":"none","width":"1519px","position":"relative","left":"0px","opacity":"0","transition":"opacity 500ms linear 0s, visibility 500ms linear 0s"}}>
                                <div>
                                    <div class="single-slider d-flex align-items-center" tabindex="-1" style={{"width":"100%","display":"inline-block"}}>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-xl-5 col-lg-5 col-md-4">
                                                    <div class="slide-img" data-animation="fadeInLeft" data-delay=".2s"><img src="https://vue-plum-chi.vercel.app/img/slider/slide3.jpg" alt="Banner Img"/></div>
                                                </div>
                                                <div class="col-xl-7 col-lg-7 col-md-8">
                                                    <div class="shape-title shape-title-3 bounce-animate">
                                                        <h2>UX</h2></div>
                                                    <div class="shape-icon shape-icon-3 bounce-animate"><img src="https://vue-plum-chi.vercel.app/img/slider/slide-thumb.png" alt="thumb"/></div>
                                                    <div class="slide-content slide-content-3 pt-80 pl-30"><span data-animation="fadeInRight" data-delay=".4s">winter Collection</span>
                                                        <h1 data-animation="fadeInUp" data-delay=".6s"> 2022</h1>
                                                        <div class="slide-btn"><a class="btn theme-btn" data-animation="fadeInLeft" data-delay=".8s" href="/shop">shop now</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-index="1" class={active === 2 ? "slick-slide slick-active slick-current" : "slick-slide"} tabindex="-1" aria-hidden="true" style={active === 2 ? {"outline":"none","width":"1519px","position":"relative","left":"-1519px","opacity":"1","transition":"opacity 500ms linear 0s, visibility 500ms linear 0s"} :{"outline":"none","width":"1519px","position":"relative","left":"-1519px","opacity":"0","transition":"opacity 500ms linear 0s, visibility 500ms linear 0s"}}>
                                <div>
                                    <div class="single-slider d-flex align-items-center" tabindex="-1" style={{"width":"100%","display":"inline-block"}}>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-xl-5 col-lg-5 col-md-4">
                                                    <div class="slide-img" data-animation="fadeInLeft" data-delay=".2s"><img src="https://vue-plum-chi.vercel.app/img/slider/slide3-2.jpg" alt="Banner Img"/></div>
                                                </div>
                                                <div class="col-xl-7 col-lg-7 col-md-8">
                                                    <div class="shape-title shape-title-3 bounce-animate">
                                                        <h2>UX</h2></div>
                                                    <div class="shape-icon shape-icon-3 bounce-animate"><img src="https://vue-plum-chi.vercel.app/img/slider/slide-thumb-2.png" alt="thumb"/></div>
                                                    <div class="slide-content slide-content-3 pt-80 pl-30"><span data-animation="fadeInRight" data-delay=".4s">winter Collection</span>
                                                        <h1 data-animation="fadeInUp" data-delay=".6s"> 2022</h1>
                                                        <div class="slide-btn"><a class="btn theme-btn" data-animation="fadeInLeft" data-delay=".8s" href="/shop">shop now</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-index="2" class={active === 3 ? "slick-slide slick-active slick-current" : "slick-slide"} tabindex="-1" aria-hidden="true" style={active === 3 ? {"outline":"none","width":"1519px","position":"relative","left":"-3038px","opacity":"1","transition":"opacity 500ms linear 0s, visibility 500ms linear 0s"} : {"outline":"none","width":"1519px","position":"relative","left":"-3038px","opacity":"0","transition":"opacity 500ms linear 0s, visibility 500ms linear 0s"}}>
                                <div>
                                    <div class="single-slider d-flex align-items-center" tabindex="-1" style={{"width":"100%","display":"inline-block"}}>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-xl-5 col-lg-5 col-md-4">
                                                    <div class="slide-img" data-animation="fadeInLeft" data-delay=".2s"><img src="https://vue-plum-chi.vercel.app/img/slider/slide3-3.jpg" alt="Banner Img"/></div>
                                                </div>
                                                <div class="col-xl-7 col-lg-7 col-md-8">
                                                    <div class="shape-title shape-title-3 bounce-animate">
                                                        <h2>UX</h2></div>
                                                    <div class="shape-icon shape-icon-3 bounce-animate"><img src="https://vue-plum-chi.vercel.app/img/slider/slide-thumb-3.png" alt="thumb"/></div>
                                                    <div class="slide-content slide-content-3 pt-80 pl-30"><span data-animation="fadeInRight" data-delay=".4s">winter Collection</span>
                                                        <h1 data-animation="fadeInUp" data-delay=".6s"> 2022</h1>
                                                        <div class="slide-btn"><a class="btn theme-btn" data-animation="fadeInLeft" data-delay=".8s" href="/shop">shop now</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><button onClick={() => handleActive("next")} type="button" class="slick-arrow slick-next"> <i class="fas fa-arrow-right"></i></button></div>
            </div>
        </section>
    );
}

export default SliderIndex3;