import React from "react";
import { Link } from "react-router-dom";

SliderIndex5.propTypes = {};

function SliderIndex5(props) {
  return (
    <section className="slider-area pos-relative">
      <div className="container">
        <div className="slider-active-5 slider-3 ">
          <div className="slick-slider slick-initialized" dir="ltr">
            <div className="slick-list">
              <div
                className="slick-track slick-track-index-5-ltk"
                style={{ opacity: "1" }}
              >
                <div
                  data-index="0"
                  className="slick-slide slick-active slick-current slick-slide-index-51-ltk"
                  tabIndex="-1"
                  aria-hidden="false"
                  style={{
                    outline: "none",
                    position: "relative",
                    opacity: "1",
                    transition:
                      "opacity 500ms linear 0s, visibility 500ms linear 0s",
                  }}
                >
                  <div>
                    <div
                      className="single-slider slide-height-5 pos-relative d-flex align-items-center"
                      data-background="https://vue-plum-chi.vercel.app/img/slider/slide6-3.jpg"
                      tabIndex="-1"
                      style={{
                        width: "100%",
                        display: "inline-block",
                        backgroundImage:
                          "url(https://vue-plum-chi.vercel.app/img/slider/slide6-3.jpg)",
                      }}
                    >
                      <div className="shape-title shape-title-5 bounce-animate">
                        <h2>UX</h2>
                      </div>
                      <div className="row">
                        <div className="col-xl-7">
                          <div className="slide-content slide-content-5  pl-60">
                            <span data-animation="fadeInRight" data-delay=".4s">
                              winter Collection
                            </span>
                            <h1 data-animation="fadeInUp" data-delay=".6s">
                              Winter Is Coming
                            </h1>
                            <div className="slide-btn">
                              <Link
                                className="btn theme-btn"
                                data-animation="fadeInLeft"
                                data-delay=".8s"
                                to="/shop"
                              >
                                shop now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="1"
                  className="slick-slide slick-slide-index-52-ltk"
                  tabIndex="-1"
                  aria-hidden="true"
                  style={{
                    outline: "none",
                    position: "relative",
                    opacity: "0",
                    transition:
                      "opacity 500ms linear 0s, visibility 500ms linear 0s",
                  }}
                >
                  <div>
                    <div
                      className="single-slider slide-height-5 pos-relative d-flex align-items-center"
                      data-background="https://vue-plum-chi.vercel.app/img/slider/slide6-2.jpg"
                      tabIndex="-1"
                      style={{
                        width: "100%",
                        display: "inline-block",
                        backgroundImage:
                          "url(https://vue-plum-chi.vercel.app/img/slider/slide6-2.jpg)",
                      }}
                    >
                      <div className="shape-title shape-title-5 bounce-animate">
                        <h2>UX</h2>
                      </div>
                      <div className="row">
                        <div className="col-xl-7">
                          <div className="slide-content slide-content-5  pl-60">
                            <span data-animation="fadeInRight" data-delay=".4s">
                              winter Collection
                            </span>
                            <h1 data-animation="fadeInUp" data-delay=".6s">
                              Winter Is Coming
                            </h1>
                            <div className="slide-btn">
                              <Link
                                className="btn theme-btn"
                                data-animation="fadeInLeft"
                                data-delay=".8s"
                                to="/shop"
                              >
                                shop now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="2"
                  className="slick-slide slick-slide-index-53-ltk"
                  tabIndex="-1"
                  aria-hidden="true"
                  style={{
                    outline: "none",
                    position: "relative",
                    opacity: "0",
                    transition:
                      "opacity 500ms linear 0s, visibility 500ms linear 0s",
                  }}
                >
                  <div>
                    <div
                      className="single-slider slide-height-5 pos-relative d-flex align-items-center"
                      data-background="https://vue-plum-chi.vercel.app/img/slider/slide6.jpg"
                      tabIndex="-1"
                      style={{
                        width: "100%",
                        display: "inline-block",
                        backgroundImage:
                          "url(https://vue-plum-chi.vercel.app/img/slider/slide6.jpg)",
                      }}
                    >
                      <div className="shape-title shape-title-5 bounce-animate">
                        <h2>UX</h2>
                      </div>
                      <div className="row">
                        <div className="col-xl-7">
                          <div className="slide-content slide-content-5  pl-60">
                            <span data-animation="fadeInRight" data-delay=".4s">
                              winter Collection
                            </span>
                            <h1 data-animation="fadeInUp" data-delay=".6s">
                              Winter Is Coming
                            </h1>
                            <div className="slide-btn">
                              <Link
                                className="btn theme-btn"
                                data-animation="fadeInLeft"
                                data-delay=".8s"
                                to="/shop"
                              >
                                shop now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SliderIndex5;
