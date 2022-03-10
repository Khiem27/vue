import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
HomeBanner.propTypes = {};

function HomeBanner(props) {
  const [active, setActive] = useState(true);
  const handleBtn = () => {
    setActive(!active);
  };
  
  // Sự kiện drag drop
  const [element, setElement] = useState()

  const posX1 = useRef(0)
  const posX2 = useRef(0)
  
  useEffect(() => {
    const elementActive = document.querySelector(".slider-active")
    setElement(elementActive)
  }, [])
  
  if (element) {
    element.addEventListener("mousedown", (e) => {
        e = e || window.event;
        e.preventDefault();
        document.onmouseup = dragEnd;
        document.onmousemove = dragAction;
        posX1.current = e.clientX
        console.log(posX1.current);
    })
  }

  const dragAction = (e) => {
    e = e || window.event;
  }

  const dragEnd = (e) => {
    setActive(!active);

    posX2.current = e.clientX
    console.log(posX2.current);
    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  return (
    <section className="slider-area pos-relative">
      <div className="slider-active">
        <div className="slick-slider slick-initialized" dir="ltr">
          <button
            onClick={handleBtn}
            type="button"
            className="slick-arrow slick-prev"
          >
            {" "}
            <i className="fas fa-arrow-left"></i>{" "}
          </button>
          <div className="slick-list">
            <div
              className="slick-track"
              style={{ opacity: "1", width: "calc(100% * 5)" }}
            >
              <div
                data-index="0"
                className={
                  active
                    ? "slick-slide"
                    : "slick-slide slick-active slick-current"
                }
                tabIndex="-1"
                aria-hidden="true"
                style={
                  active
                    ? {
                        outline: "none",
                        width: "calc(100%/5)",
                        position: "relative",
                        left: "0px",
                        opacity: "0",
                        transition:
                          "opacity 500ms linear 0s, visibility 500ms linear 0s",
                      }
                    : {
                        outline: "none",
                        width: "calc(100%/5)",
                        position: "relative",
                        left: "0px",
                        opacity: "1",
                        transition:
                          "opacity 500ms linear 0s, visibility 500ms linear 0s",
                      }
                }
              >
                <div>
                  <div
                    className=" single-slider slide-1-style slider-1-1 slide-height d-flex align-items-center"
                    data-background="https://vue-plum-chi.vercel.app/img/slider/slide1.jpg"
                    tabIndex="-1"
                    style={{
                      width: "100%",
                      display: "inline-block",
                      backgroundImage:
                        "url(https://vue-plum-chi.vercel.app/img/slider/slide1.jpg)",
                    }}
                  >
                    {/* Hiệu ứng */}
                    <div
                      className="shape-title wow bounce-animate animated"
                      style={{ zIndex: "unset", visibility: "visible" }}
                    >
                      <h2>UX</h2>
                    </div>
                    {/* Hiệu ứng */}
                    <div className="shape-icon bounce-animate">
                      <img
                        src="https://vue-plum-chi.vercel.app/img/slider/shape-icon.png"
                        alt=""
                      />
                    </div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xl-7">
                          <div className="slide-content">
                            <span
                              className="wow fadeInRight"
                              data-delay=".2s"
                              style={{ visibility: "visible" }}
                            >
                              Furniture Collection
                            </span>
                            <h1 data-animation="fadeInUp" data-delay=".5s">
                              Synnes Dining Chair Upholstered
                            </h1>
                            <div className="slide-btn">
                              <Link
                                className="btn theme-btn wow fadeInLeft"
                                data-delay=".7s"
                                to="/shop"
                                style={{ visibility: "visible" }}
                              >
                                shop now
                              </Link>
                              <Link
                                className="btn white-btn wow fadeInLeft"
                                data-delay=".7s"
                                to="/shop"
                                style={{ visibility: "visible" }}
                              >
                                category
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-5">
                          <div
                            className="slide-shape1 wow bounceInRight"
                            data-delay=".9s"
                            style={{ visibility: "visible" }}
                          >
                            <img
                              src="https://vue-plum-chi.vercel.app/img/slider/shape3.png"
                              alt=""
                            />
                          </div>
                          <div
                            className="slide-shape2 wow bounceInRight"
                            data-delay="1.2s"
                            style={{ visibility: "visible" }}
                          >
                            <img
                              src="https://vue-plum-chi.vercel.app/img/slider/shape4.png"
                              alt=""
                            />
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
                  active
                    ? "slick-slide slick-active slick-current"
                    : "slick-slide"
                }
                tabIndex="-1"
                aria-hidden="false"
                style={
                  active
                    ? {
                        outline: "none",
                        width: "calc(100%/5)",
                        position: "relative",
                        left: "-20%",
                        opacity: "1",
                        transition:
                          "opacity 500ms linear 0s, visibility 500ms linear 0s",
                      }
                    : {
                        outline: "none",
                        width: "calc(100%/5)",
                        position: "relative",
                        left: "-20%",
                        opacity: "0",
                        transition:
                          "opacity 500ms linear 0s, visibility 500ms linear 0s",
                      }
                }
              >
                <div>
                  <div
                    className=" single-slider slide-1-style slider-1-1 slide-height d-flex align-items-center"
                    data-background="https://vue-plum-chi.vercel.app/img/slider/slide1.jpg"
                    tabIndex="-1"
                    style={{
                      width: "100%",
                      display: "inline-block",
                      backgroundImage:
                        "url(https://vue-plum-chi.vercel.app/img/slider/slide1-1.jpg)",
                    }}
                  >
                    <div
                      className="shape-title wow bounce-animate animated"
                      style={{ zIndex: "unset", visibility: "visible" }}
                    >
                      <h2>UX</h2>
                    </div>
                    <div className="shape-icon bounce-animate">
                      <img
                        src="https://vue-plum-chi.vercel.app/img/slider/shape-icon.png"
                        alt=""
                      />
                    </div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xl-7">
                          <div className="slide-content">
                            <span
                              className="wow fadeInRight"
                              data-delay=".2s"
                              style={{ visibility: "visible" }}
                            >
                              Furniture Collection
                            </span>
                            <h1 data-animation="fadeInUp" data-delay=".5s">
                              Synnes Dining Chair Upholstered
                            </h1>
                            <div className="slide-btn">
                              <Link
                                className="btn theme-btn wow fadeInLeft"
                                data-delay=".7s"
                                to="/shop"
                                style={{ visibility: "visible" }}
                              >
                                shop now
                              </Link>
                              <Link
                                className="btn white-btn wow fadeInLeft"
                                data-delay=".7s"
                                to="/shop"
                                style={{ visibility: "visible" }}
                              >
                                category
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-5">
                          <div
                            className="slide-shape1 wow bounceInRight"
                            data-delay=".9s"
                            style={{ visibility: "visible" }}
                          >
                            <img
                              src="https://vue-plum-chi.vercel.app/img/slider/shape1.png"
                              alt=""
                            />
                          </div>
                          <div
                            className="slide-shape2 wow bounceInRight"
                            data-delay="1.2s"
                            style={{ visibility: "visible" }}
                          >
                            <img
                              src="https://vue-plum-chi.vercel.app/img/slider/shape2.png"
                              alt=""
                            />
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
            type="button"
            onClick={handleBtn}
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

export default HomeBanner;
