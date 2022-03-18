import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

SliderIndex2.propTypes = {};

function SliderIndex2(props) {
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
                    className="single-slider slider-2 slide-1-style slide-height-2 d-flex align-items-center"
                    data-background="https://vue-plum-chi.vercel.app/img/slider/slide2-1.jpg"
                    tabindex="-1"
                    style={{
                      width: "100%",
                      display: "inline-block",
                      backgroundImage:
                        "url(https://vue-plum-chi.vercel.app/img/slider/slide2-1.jpg)",
                    }}
                  >
                    <div
                      className="shape-title bounce-animate"
                      style={{ zIndex: "unset" }}
                    >
                      <h2 className="">2022</h2>
                    </div>
                    <div className="shape-icon bounce-animate">
                      <img
                        src="https://vue-plum-chi.vercel.app/img/slider/shape-icon.png"
                        alt="shapImg"
                      />
                    </div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xl-7">
                          <div className="slide-content pt-80">
                            <span data-animation="fadeInRight" data-delay=".2s">
                              Women Collection
                            </span>
                            <h1 data-animation="fadeInUp" data-delay=".5s">
                              New Arrivals
                            </h1>
                            <div
                              className="slider-price mb-25"
                              data-animation="fadeInUp"
                              data-delay=".7s"
                            >
                              <span>$86.24</span>
                              <span className="old-price">$98.00</span>
                            </div>
                            <div className="slide-btn">
                              <Link
                                className="btn theme-btn"
                                data-animation="fadeInLeft"
                                data-delay=".9s"
                                to="/shop"
                              >
                                shop now
                              </Link>
                              <Link
                                className="btn white-btn"
                                data-animation="fadeInRight"
                                data-delay="1.1s"
                                to="/shop"
                              >
                                category
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
                    className="single-slider slider-2 slide-1-style slide-height-2 d-flex align-items-center"
                    data-background="https://vue-plum-chi.vercel.app/img/slider/slide2-2.jpg"
                    tabindex="-1"
                    style={{
                      width: "100%",
                      display: "inline-block",
                      backgroundImage:
                        "url(https://vue-plum-chi.vercel.app/img/slider/slide2-2.jpg)",
                    }}
                  >
                    <div
                      className="shape-title bounce-animate"
                      style={{ zIndex: "unset" }}
                    >
                      <h2 className="home-2-shape">2022</h2>
                    </div>
                    <div className="shape-icon bounce-animate">
                      <img
                        src="https://vue-plum-chi.vercel.app/img/slider/shape-icon.png"
                        alt="shapImg"
                      />
                    </div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xl-7">
                          <div className="slide-content pt-80">
                            <span data-animation="fadeInRight" data-delay=".2s">
                              Women Collection
                            </span>
                            <h1 data-animation="fadeInUp" data-delay=".5s">
                              Women Product
                            </h1>
                            <div
                              className="slider-price mb-25"
                              data-animation="fadeInUp"
                              data-delay=".7s"
                            >
                              <span>$86.24</span>
                              <span className="old-price">$98.00</span>
                            </div>
                            <div className="slide-btn">
                              <Link
                                className="btn theme-btn"
                                data-animation="fadeInLeft"
                                data-delay=".9s"
                                to="/shop"
                              >
                                shop now
                              </Link>
                              <Link
                                className="btn white-btn"
                                data-animation="fadeInRight"
                                data-delay="1.1s"
                                to="/shop"
                              >
                                category
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
                    className="single-slider slider-2 slide-1-style slide-height-2 d-flex align-items-center"
                    data-background="https://vue-plum-chi.vercel.app/img/slider/slide2-3.jpg"
                    tabindex="-1"
                    style={{
                      width: "100%",
                      display: "inline-block",
                      backgroundImage:
                        "url(https://vue-plum-chi.vercel.app/img/slider/slide2-3.jpg)",
                    }}
                  >
                    <div
                      className="shape-title bounce-animate"
                      style={{ zIndex: "unset" }}
                    >
                      <h2 className="home-2-shape">2022</h2>
                    </div>
                    <div className="shape-icon bounce-animate">
                      <img
                        src="https://vue-plum-chi.vercel.app/img/slider/shape-icon.png"
                        alt="shapImg"
                      />
                    </div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xl-7">
                          <div className="slide-content pt-80">
                            <span data-animation="fadeInRight" data-delay=".2s">
                              Women Collection
                            </span>
                            <h1 data-animation="fadeInUp" data-delay=".5s">
                              Trend Collection
                            </h1>
                            <div
                              className="slider-price mb-25"
                              data-animation="fadeInUp"
                              data-delay=".7s"
                            >
                              <span>$86.24</span>
                              <span className="old-price">$98.00</span>
                            </div>
                            <div className="slide-btn">
                              <Link
                                className="btn theme-btn"
                                data-animation="fadeInLeft"
                                data-delay=".9s"
                                to="/shop"
                              >
                                shop now
                              </Link>
                              <Link
                                className="btn white-btn"
                                data-animation="fadeInRight"
                                data-delay="1.1s"
                                to="/shop"
                              >
                                category
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

export default SliderIndex2;
