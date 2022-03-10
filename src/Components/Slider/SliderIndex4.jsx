import React, { useState } from "react";

SliderIndex4.propTypes = {};

function SliderIndex4(props) {
  const [active, setActive] = useState(1);
  const handleActive = (action) => {
    if (action === "next" && active > 2) {
      setActive(1);
    } else if (action === "next") {
      setActive(active + 1);
    }

    if (action === "prev" && active < 2) {
      setActive(3);
    } else if (action === "prev") {
      setActive(active - 1);
    }
  };
  return (
    <section className="slider-area pos-relative">
      <div className="slider-active">
        <div className="slick-slider slick-initialized" dir="ltr">
          <button
            onClick={() => handleActive("prev")}
            type="button"
            className="slick-arrow slick-prev"
          >
            {" "}
            <i className="fas fa-arrow-left"></i>{" "}
          </button>
          <div className="slick-list">
            <div className="slick-track" style={{ opacity: "1", width: "700%" }}>
              <div
                data-index="0"
                className={
                  active === 1
                    ? "slick-slide slick-active slick-current"
                    : "slick-slide"
                }
                tabindex="-1"
                aria-hidden="false"
                style={
                  active === 1
                    ? {
                        outline: "none",
                        width: "calc(100%*1/7)",
                        position: "relative",
                        left: "0px",
                        opacity: "1",
                        transition:
                          "opacity 500ms linear 0s, visibility 500ms linear 0s",
                      }
                    : {
                        outline: "none",
                        width: "calc(100%*1/7)",
                        position: "relative",
                        left: "0px",
                        opacity: "0",
                        transition:
                          "opacity 500ms linear 0s, visibility 500ms linear 0s",
                      }
                }
              >
                <div>
                  <div
                    className="single-slider slide-1-style slide-height-2 slide-height-4 d-flex align-items-center"
                    data-background="https://vue-plum-chi.vercel.app/img/slider/slide5.jpg"
                    tabindex="-1"
                    style={{
                      width: "100%",
                      display: "inline-block",
                      backgroundImage:
                        "url(https://vue-plum-chi.vercel.app/img/slider/slide5.jpg)",
                    }}
                  >
                    <div
                      className="shape-title shape-title-4 bounce-animate"
                      style={{ zIndex: "unset" }}
                    >
                      <h2>2022</h2>
                    </div>
                    <div className="shape-icon shape-icon-4 bounce-animate">
                      <img
                        src="https://vue-plum-chi.vercel.app/img/slider/shape-icon-2.png"
                        alt="Shap"
                      />
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="slide-content slide-content-4 text-center pt-40">
                            <h1 data-animation="fadeInUp" data-delay=".3s">
                              New Arrival
                            </h1>
                            <div className="slide-btn">
                              <a
                                className="btn theme-btn"
                                data-animation="fadeInLeft"
                                data-delay=".6s"
                                href="/shop"
                              >
                                shop now
                              </a>
                              <a
                                className="btn white-btn"
                                data-animation="fadeInRight"
                                data-delay=".9s"
                                href="/shop"
                              >
                                category
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="1"
                className={
                  active === 2
                    ? "slick-slide slick-active slick-current"
                    : "slick-slide"
                }
                tabindex="-1"
                aria-hidden="true"
                style={
                  active === 2
                    ? {
                        outline: "none",
                        width: "calc(100%*1/7)",
                        position: "relative",
                        left: "calc(-100%*1/7)",
                        opacity: "1",
                        transition:
                          "opacity 500ms linear 0s, visibility 500ms linear 0s",
                      }
                    : {
                        outline: "none",
                        width: "calc(100%*1/7)",
                        position: "relative",
                        left: "calc(-100%*1/7)",
                        opacity: "0",
                        transition:
                          "opacity 500ms linear 0s, visibility 500ms linear 0s",
                      }
                }
              >
                <div>
                  <div
                    className="single-slider slide-1-style slide-height-2 slide-height-4 d-flex align-items-center"
                    data-background="/img/slider/slide5-2.jpg"
                    tabindex="-1"
                    style={{
                      width: "100%",
                      display: "inline-block",
                      backgroundImage:
                        "url(https://vue-plum-chi.vercel.app/img/slider/slide5-2.jpg)",
                    }}
                  >
                    <div
                      className="shape-title shape-title-4 bounce-animate"
                      style={{ zIndex: "unset" }}
                    >
                      <h2>2022</h2>
                    </div>
                    <div className="shape-icon shape-icon-4 bounce-animate">
                      <img
                        src="https://vue-plum-chi.vercel.app/img/slider/shape-icon-2.png"
                        alt="Shap"
                      />
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="slide-content slide-content-4 text-center pt-40">
                            <h1 data-animation="fadeInUp" data-delay=".3s">
                              Trendy Collection
                            </h1>
                            <div className="slide-btn">
                              <a
                                className="btn theme-btn"
                                data-animation="fadeInLeft"
                                data-delay=".6s"
                                href="/shop"
                              >
                                shop now
                              </a>
                              <a
                                className="btn white-btn"
                                data-animation="fadeInRight"
                                data-delay=".9s"
                                href="/shop"
                              >
                                category
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="2"
                className={
                  active === 3
                    ? "slick-slide slick-active slick-current"
                    : "slick-slide"
                }
                tabindex="-1"
                aria-hidden="true"
                style={
                  active === 3
                    ? {
                        outline: "none",
                        width: "calc(100%*1/7)",
                        position: "relative",
                        left: "calc(-100%*1/7*2)",
                        opacity: "1",
                        transition:
                          "opacity 500ms linear 0s, visibility 500ms linear 0s",
                      }
                    : {
                        outline: "none",
                        width: "calc(100%*1/7)",
                        position: "relative",
                        left: "calc(-100%*1/7*2)",
                        opacity: "0",
                        transition:
                          "opacity 500ms linear 0s, visibility 500ms linear 0s",
                      }
                }
              >
                <div>
                  <div
                    className="single-slider slide-1-style slide-height-2 slide-height-4 d-flex align-items-center"
                    data-background="https://vue-plum-chi.vercel.app/img/slider/slide5-3.jpg"
                    tabindex="-1"
                    style={{
                      width: "100%",
                      display: "inline-block",
                      backgroundImage:
                        "url(https://vue-plum-chi.vercel.app/img/slider/slide5-3.jpg)",
                    }}
                  >
                    <div
                      className="shape-title shape-title-4 bounce-animate"
                      style={{ zIndex: "unset" }}
                    >
                      <h2>2022</h2>
                    </div>
                    <div className="shape-icon shape-icon-4 bounce-animate">
                      <img
                        src="https://vue-plum-chi.vercel.app/img/slider/shape-icon-2.png"
                        alt="Shap"
                      />
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="slide-content slide-content-4 text-center pt-40">
                            <h1 data-animation="fadeInUp" data-delay=".3s">
                              Men Collection
                            </h1>
                            <div className="slide-btn">
                              <a
                                className="btn theme-btn"
                                data-animation="fadeInLeft"
                                data-delay=".6s"
                                href="/shop"
                              >
                                shop now
                              </a>
                              <a
                                className="btn white-btn"
                                data-animation="fadeInRight"
                                data-delay=".9s"
                                href="/shop"
                              >
                                category
                              </a>
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
          <button
            onClick={() => handleActive("next")}
            type="button"
            className="slick-arrow slick-next"
          >
            {" "}
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SliderIndex4;
