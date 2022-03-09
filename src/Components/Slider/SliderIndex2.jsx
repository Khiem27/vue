import React, { useState } from "react";

SliderIndex2.propTypes = {};

function SliderIndex2(props) {
  const [active, setActive] = useState(1);
  const [width, setWidth] = useState();
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
    <section class="slider-area pos-relative">
      <div class="slider-active">
        <div class="slick-slider slick-initialized" dir="ltr">
          <button
            onClick={() => handleActive("prev")}
            type="button"
            class="slick-arrow slick-prev"
          >
            {" "}
            <i class="fas fa-arrow-left"></i>{" "}
          </button>
          <div class="slick-list">
            <div class="slick-track" style={{ width: "700%", opacity: "1" }}>
              <div
                data-index="0"
                class={
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
                    class="single-slider slider-2 slide-1-style slide-height-2 d-flex align-items-center"
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
                      class="shape-title bounce-animate"
                      style={{ zIndex: "unset" }}
                    >
                      <h2 class="">2022</h2>
                    </div>
                    <div class="shape-icon bounce-animate">
                      <img
                        src="https://vue-plum-chi.vercel.app/img/slider/shape-icon.png"
                        alt="shapImg"
                      />
                    </div>
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-xl-7">
                          <div class="slide-content pt-80">
                            <span data-animation="fadeInRight" data-delay=".2s">
                              Women Collection
                            </span>
                            <h1 data-animation="fadeInUp" data-delay=".5s">
                              New Arrivals
                            </h1>
                            <div
                              class="slider-price mb-25"
                              data-animation="fadeInUp"
                              data-delay=".7s"
                            >
                              <span>$86.24</span>
                              <span class="old-price">$98.00</span>
                            </div>
                            <div class="slide-btn">
                              <a
                                class="btn theme-btn"
                                data-animation="fadeInLeft"
                                data-delay=".9s"
                                href="/shop"
                              >
                                shop now
                              </a>
                              <a
                                class="btn white-btn"
                                data-animation="fadeInRight"
                                data-delay="1.1s"
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
                class={
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
                    class="single-slider slider-2 slide-1-style slide-height-2 d-flex align-items-center"
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
                      class="shape-title bounce-animate"
                      style={{ zIndex: "unset" }}
                    >
                      <h2 class="home-2-shape">2022</h2>
                    </div>
                    <div class="shape-icon bounce-animate">
                      <img
                        src="https://vue-plum-chi.vercel.app/img/slider/shape-icon.png"
                        alt="shapImg"
                      />
                    </div>
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-xl-7">
                          <div class="slide-content pt-80">
                            <span data-animation="fadeInRight" data-delay=".2s">
                              Women Collection
                            </span>
                            <h1 data-animation="fadeInUp" data-delay=".5s">
                              Women Product
                            </h1>
                            <div
                              class="slider-price mb-25"
                              data-animation="fadeInUp"
                              data-delay=".7s"
                            >
                              <span>$86.24</span>
                              <span class="old-price">$98.00</span>
                            </div>
                            <div class="slide-btn">
                              <a
                                class="btn theme-btn"
                                data-animation="fadeInLeft"
                                data-delay=".9s"
                                href="/shop"
                              >
                                shop now
                              </a>
                              <a
                                class="btn white-btn"
                                data-animation="fadeInRight"
                                data-delay="1.1s"
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
                class={
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
                    class="single-slider slider-2 slide-1-style slide-height-2 d-flex align-items-center"
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
                      class="shape-title bounce-animate"
                      style={{ zIndex: "unset" }}
                    >
                      <h2 class="home-2-shape">2022</h2>
                    </div>
                    <div class="shape-icon bounce-animate">
                      <img
                        src="https://vue-plum-chi.vercel.app/img/slider/shape-icon.png"
                        alt="shapImg"
                      />
                    </div>
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-xl-7">
                          <div class="slide-content pt-80">
                            <span data-animation="fadeInRight" data-delay=".2s">
                              Women Collection
                            </span>
                            <h1 data-animation="fadeInUp" data-delay=".5s">
                              Trend Collection
                            </h1>
                            <div
                              class="slider-price mb-25"
                              data-animation="fadeInUp"
                              data-delay=".7s"
                            >
                              <span>$86.24</span>
                              <span class="old-price">$98.00</span>
                            </div>
                            <div class="slide-btn">
                              <a
                                class="btn theme-btn"
                                data-animation="fadeInLeft"
                                data-delay=".9s"
                                href="/shop"
                              >
                                shop now
                              </a>
                              <a
                                class="btn white-btn"
                                data-animation="fadeInRight"
                                data-delay="1.1s"
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
            class="slick-arrow slick-next"
          >
            {" "}
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SliderIndex2;
