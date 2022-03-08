import React, { useState } from 'react';

HomeBanner.propTypes = {
    
};

function HomeBanner(props) {
    const [active, setActive] = useState(true)
    const handleBtn = () => {
        setActive(!active)
        console.log(active);
    }
    return (
    <section class="slider-area pos-relative">
        <div class="slider-active">
            <div class="slick-slider slick-initialized" dir="ltr"><button onClick={handleBtn} type="button" class="slick-arrow slick-prev"> <i class="fas fa-arrow-left"></i> </button>
                <div class="slick-list">
                    <div class="slick-track" style={{"opacity":"1","width":"calc(100% * 5)"}}>
                        <div data-index="0" class={active ? "slick-slide" : "slick-slide slick-active slick-current"} tabindex="-1" aria-hidden="true" style={active ? {"outline":"none","width":"calc(100%/5)","position":"relative","left":"0px","opacity":"0","transition":"opacity 500ms linear 0s, visibility 500ms linear 0s"} : {"outline":"none","width":"calc(100%/5)","position":"relative","left":"0px","opacity":"1","transition":"opacity 500ms linear 0s, visibility 500ms linear 0s"}}>
                            <div>
                                <div class=" single-slider slide-1-style slider-1-1 slide-height d-flex align-items-center" data-background="https://vue-plum-chi.vercel.app/img/slider/slide1.jpg" tabindex="-1" style={{"width":"100%","display":"inline-block","backgroundImage":"url(https://vue-plum-chi.vercel.app/img/slider/slide1.jpg)"}}>
                                    {/* Hiệu ứng */}
                                    <div class="shape-title wow bounce-animate animated" style={{"zIndex":"unset","visibility":"visible"}}>
                                        <h2>UX</h2></div>
                                    {/* Hiệu ứng */}
                                    <div class="shape-icon bounce-animate"><img src="https://vue-plum-chi.vercel.app/img/slider/shape-icon.png" alt=""/></div>
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-xl-7">
                                                <div class="slide-content"><span class="wow fadeInRight" data-delay=".2s" style={{visibility: "visible"}}>Furniture Collection</span>
                                                    <h1 data-animation="fadeInUp" data-delay=".5s">Synnes Dining Chair Upholstered</h1>
                                                    <div class="slide-btn"><a class="btn theme-btn wow fadeInLeft" data-delay=".7s" href="/shop" style={{visibility: "visible"}}>shop now</a><a class="btn white-btn wow fadeInLeft" data-delay=".7s" href="/shop" style={{visibility: "visible"}}>category</a></div>
                                                </div>
                                            </div>
                                            <div class="col-xl-5">
                                                <div class="slide-shape1 wow bounceInRight" data-delay=".9s" style={{visibility: "visible"}}><img src="https://vue-plum-chi.vercel.app/img/slider/shape3.png" alt=""/></div>
                                                <div class="slide-shape2 wow bounceInRight" data-delay="1.2s" style={{visibility: "visible"}}><img src="https://vue-plum-chi.vercel.app/img/slider/shape4.png" alt=""/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-index="1" class={active ? "slick-slide slick-active slick-current" : "slick-slide" } tabindex="-1" aria-hidden="false" style={active ? {"outline":"none","width":"calc(100%/5)","position":"relative","left":"-20%","opacity":"1","transition":"opacity 500ms linear 0s, visibility 500ms linear 0s"} : {"outline":"none","width":"calc(100%/5)","position":"relative","left":"-1519px","opacity":"0","transition":"opacity 500ms linear 0s, visibility 500ms linear 0s"}}>
                            <div>
                                <div class=" single-slider slide-1-style slider-1-1 slide-height d-flex align-items-center" data-background="https://vue-plum-chi.vercel.app/img/slider/slide1.jpg" tabindex="-1" style={{"width":"100%","display":"inline-block","backgroundImage":"url(https://vue-plum-chi.vercel.app/img/slider/slide1-1.jpg)"}}>
                                    <div class="shape-title wow bounce-animate animated" style={{"zIndex": "unset", "visibility": "visible"}}>
                                        <h2>UX</h2></div>
                                    <div class="shape-icon bounce-animate"><img src="https://vue-plum-chi.vercel.app/img/slider/shape-icon.png" alt=""/></div>
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-xl-7">
                                                <div class="slide-content"><span class="wow fadeInRight" data-delay=".2s" style={{visibility: "visible"}}>Furniture Collection</span>
                                                    <h1 data-animation="fadeInUp" data-delay=".5s">Synnes Dining Chair Upholstered</h1>
                                                    <div class="slide-btn"><a class="btn theme-btn wow fadeInLeft" data-delay=".7s" href="/shop" style={{visibility: "visible"}}>shop now</a><a class="btn white-btn wow fadeInLeft" data-delay=".7s" href="/shop" style={{visibility: "visible"}}>category</a></div>
                                                </div>
                                            </div>
                                            <div class="col-xl-5">
                                                <div class="slide-shape1 wow bounceInRight" data-delay=".9s" style={{visibility: "visible"}}><img src="https://vue-plum-chi.vercel.app/img/slider/shape1.png" alt=""/></div>
                                                <div class="slide-shape2 wow bounceInRight" data-delay="1.2s" style={{visibility: "visible"}}><img src="https://vue-plum-chi.vercel.app/img/slider/shape2.png" alt=""/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><button type="button" onClick={handleBtn} class="slick-arrow slick-next"> <i class="fas fa-arrow-right"></i></button></div>
        </div>
    </section>
);
}

export default HomeBanner;