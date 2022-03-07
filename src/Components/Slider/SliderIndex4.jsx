import React, { useState } from 'react';
import PropTypes from 'prop-types';

SliderIndex4.propTypes = {
    
};

function SliderIndex4(props) {
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
        <section class="slider-area pos-relative">
            <div class="slider-active">
                <div class="slick-slider slick-initialized" dir="ltr"><button onClick={() => handleActive("prev")} type="button" class="slick-arrow slick-prev"> <i class="fas fa-arrow-left"></i> </button>
                    <div class="slick-list">
                        <div class="slick-track" style={{"opacity":"1","width":"10647px"}}>
                            <div data-index="0" class={active === 1 ? "slick-slide slick-active slick-current" : "slick-slide"} tabindex="-1" aria-hidden="false" style={active === 1 ? {"outline":"none","width":"1521px","position":"relative","left":"0px","opacity":"1","transition":"opacity 500ms linear 0s, visibility 500ms linear 0s"} : {"outline":"none","width":"1521px","position":"relative","left":"0px","opacity":"0","transition":"opacity 500ms linear 0s, visibility 500ms linear 0s"}}>
                                <div>
                                    <div class="single-slider slide-1-style slide-height-2 slide-height-4 d-flex align-items-center" data-background="https://vue-plum-chi.vercel.app/img/slider/slide5.jpg" tabindex="-1" style={{"width":"100%","display":"inline-block","backgroundImage":"url(https://vue-plum-chi.vercel.app/img/slider/slide5.jpg)"}}>
                                        <div class="shape-title shape-title-4 bounce-animate" style={{"zIndex":"unset"}}>
                                            <h2>2022</h2></div>
                                        <div class="shape-icon shape-icon-4 bounce-animate"><img src="https://vue-plum-chi.vercel.app/img/slider/shape-icon-2.png" alt="Shap"/></div>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-xl-12">
                                                    <div class="slide-content slide-content-4 text-center pt-40">
                                                        <h1 data-animation="fadeInUp" data-delay=".3s">New Arrival</h1>
                                                        <div class="slide-btn"><a class="btn theme-btn" data-animation="fadeInLeft" data-delay=".6s" href="/shop">shop now</a><a class="btn white-btn" data-animation="fadeInRight" data-delay=".9s" href="/shop">category</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-index="1" class={active === 2 ? "slick-slide slick-active slick-current" : "slick-slide"} tabindex="-1" aria-hidden="true" style={active === 2 ? {"outline":"none","width":"1521px","position":"relative","left":"-1521px","opacity":"1","transition":"opacity 500ms linear 0s, visibility 500ms linear 0s"} : {"outline":"none","width":"1521px","position":"relative","left":"-1521px","opacity":"0","transition":"opacity 500ms linear 0s, visibility 500ms linear 0s"}}>
                                <div>
                                    <div class="single-slider slide-1-style slide-height-2 slide-height-4 d-flex align-items-center" data-background="/img/slider/slide5-2.jpg" tabindex="-1" style={{"width":"100%","display":"inline-block","backgroundImage":"url(https://vue-plum-chi.vercel.app/img/slider/slide5-2.jpg)"}}>
                                        <div class="shape-title shape-title-4 bounce-animate" style={{"zIndex":"unset"}}>
                                            <h2>2022</h2></div>
                                        <div class="shape-icon shape-icon-4 bounce-animate"><img src="https://vue-plum-chi.vercel.app/img/slider/shape-icon-2.png" alt="Shap"/></div>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-xl-12">
                                                    <div class="slide-content slide-content-4 text-center pt-40">
                                                        <h1 data-animation="fadeInUp" data-delay=".3s">Trendy Collection</h1>
                                                        <div class="slide-btn"><a class="btn theme-btn" data-animation="fadeInLeft" data-delay=".6s" href="/shop">shop now</a><a class="btn white-btn" data-animation="fadeInRight" data-delay=".9s" href="/shop">category</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-index="2" class={active === 3 ? "slick-slide slick-active slick-current" : "slick-slide"} tabindex="-1" aria-hidden="true" style={active === 3 ? {"outline":"none","width":"1521px","position":"relative","left":"-3042px","opacity":"1","transition":"opacity 500ms linear 0s, visibility 500ms linear 0s"} : {"outline":"none","width":"1521px","position":"relative","left":"-3042px","opacity":"0","transition":"opacity 500ms linear 0s, visibility 500ms linear 0s"}}>
                                <div>
                                    <div class="single-slider slide-1-style slide-height-2 slide-height-4 d-flex align-items-center" data-background="https://vue-plum-chi.vercel.app/img/slider/slide5-3.jpg" tabindex="-1" style={{"width":"100%","display":"inline-block","backgroundImage":"url(https://vue-plum-chi.vercel.app/img/slider/slide5-3.jpg)"}}>
                                        <div class="shape-title shape-title-4 bounce-animate" style={{"zIndex":"unset"}}>
                                            <h2>2022</h2></div>
                                        <div class="shape-icon shape-icon-4 bounce-animate"><img src="https://vue-plum-chi.vercel.app/img/slider/shape-icon-2.png" alt="Shap"/></div>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-xl-12">
                                                    <div class="slide-content slide-content-4 text-center pt-40">
                                                        <h1 data-animation="fadeInUp" data-delay=".3s">Men Collection</h1>
                                                        <div class="slide-btn"><a class="btn theme-btn" data-animation="fadeInLeft" data-delay=".6s" href="/shop">shop now</a><a class="btn white-btn" data-animation="fadeInRight" data-delay=".9s" href="/shop">category</a></div>
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

export default SliderIndex4;