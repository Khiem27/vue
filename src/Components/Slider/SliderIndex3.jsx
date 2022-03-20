import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

SliderIndex3.propTypes = {};

function SliderIndex3(props) {
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

  // Sự kiện drag drop
  const [element, setElement] = useState();

  const posX1 = useRef(0);
  const posX2 = useRef(0);

  useEffect(() => {
    const elementActive = document.querySelector(".slider-active");
    setElement(elementActive);
  }, []);

  if (element) {
    element.addEventListener("mousedown", (e) => {
      e = e || window.event;
      e.preventDefault();
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
      posX1.current = e.clientX;
    });
  }

  const dragAction = (e) => {
    e = e || window.event;
  };

  const dragEnd = (e) => {
    posX2.current = e.clientX;
    document.onmouseup = null;
    document.onmousemove = null;
    if (posX1.current > posX2.current) {
      handleActive("next");
    } else if (posX1.current < posX2.current) {
      handleActive("prev");
    }
  };
  return (
    <section className="slider-area pos-relative pt-100 pb-100">
      <div className="slider-active slider-3">
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
            <div
              className="slick-track"
              style={{ width: "700%", opacity: "1" }}
            >
              <div
                data-index="0"
                className={
                  active === 1
                    ? "slick-slide slick-active slick-current"
                    : "slick-slide"
                }
                tabIndex="-1"
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
                    className="single-slider d-flex align-items-center"
                    tabIndex="-1"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-4">
                          <div
                            className="slide-img"
                            data-animation="fadeInLeft"
                            data-delay=".2s"
                          >
                            <img
                              src="https://vue-plum-chi.vercel.app/img/slider/slide3.jpg"
                              alt="Banner Img"
                            />
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-8">
                          <div className="shape-title shape-title-3 bounce-animate">
                            <h2>UX</h2>
                          </div>
                          <div className="shape-icon shape-icon-3 bounce-animate">
                            <img
                              src="https://vue-plum-chi.vercel.app/img/slider/slide-thumb.png"
                              alt="thumb"
                            />
                          </div>
                          <div className="slide-content slide-content-3 pt-80 pl-30">
                            <span data-animation="fadeInRight" data-delay=".4s">
                              winter Collection
                            </span>
                            <h1 data-animation="fadeInUp" data-delay=".6s">
                              {" "}
                              2022
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
              <div
                data-index="1"
                className={
                  active === 2
                    ? "slick-slide slick-active slick-current"
                    : "slick-slide"
                }
                tabIndex="-1"
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
                    className="single-slider d-flex align-items-center"
                    tabIndex="-1"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-4">
                          <div
                            className="slide-img"
                            data-animation="fadeInLeft"
                            data-delay=".2s"
                          >
                            <img
                              src="https://vue-plum-chi.vercel.app/img/slider/slide3-2.jpg"
                              alt="Banner Img"
                            />
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-8">
                          <div className="shape-title shape-title-3 bounce-animate">
                            <h2>UX</h2>
                          </div>
                          <div className="shape-icon shape-icon-3 bounce-animate">
                            <img
                              src="https://vue-plum-chi.vercel.app/img/slider/slide-thumb-2.png"
                              alt="thumb"
                            />
                          </div>
                          <div className="slide-content slide-content-3 pt-80 pl-30">
                            <span data-animation="fadeInRight" data-delay=".4s">
                              winter Collection
                            </span>
                            <h1 data-animation="fadeInUp" data-delay=".6s">
                              {" "}
                              2022
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
              <div
                data-index="2"
                className={
                  active === 3
                    ? "slick-slide slick-active slick-current"
                    : "slick-slide"
                }
                tabIndex="-1"
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
                    className="single-slider d-flex align-items-center"
                    tabIndex="-1"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-4">
                          <div
                            className="slide-img"
                            data-animation="fadeInLeft"
                            data-delay=".2s"
                          >
                            <img
                              src="https://vue-plum-chi.vercel.app/img/slider/slide3-3.jpg"
                              alt="Banner Img"
                            />
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-8">
                          <div className="shape-title shape-title-3 bounce-animate">
                            <h2>UX</h2>
                          </div>
                          <div className="shape-icon shape-icon-3 bounce-animate">
                            <img
                              src="https://vue-plum-chi.vercel.app/img/slider/slide-thumb-3.png"
                              alt="thumb"
                            />
                          </div>
                          <div className="slide-content slide-content-3 pt-80 pl-30">
                            <span data-animation="fadeInRight" data-delay=".4s">
                              winter Collection
                            </span>
                            <h1 data-animation="fadeInUp" data-delay=".6s">
                              {" "}
                              2022
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

export default SliderIndex3;
