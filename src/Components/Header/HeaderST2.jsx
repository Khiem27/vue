import React, { useEffect, useState } from "react";
import {
  Link
} from "react-router-dom";
import MiniCart from "../MiniCart/MiniCart";
import ScrollUp from "../ScrollUp/ScrollUp";

HeaderST2.propTypes = {};

function HeaderST2(props) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const [pos, setPos] = useState(0);
  const [header, setHeader] = useState(0);
  useEffect(() => {
    const header = document.querySelector(".header-all-page");
    setHeader(header);
  }, []);
  document.addEventListener("scroll", () => {
    if (header) {
      const position = header.getBoundingClientRect().top;
      setPos(position);
    }
  });

  return (
    <header className="header-all-page">
      {pos <= -400 ? <ScrollUp /> : null}
      <div class="header-area header-3 pt-35 pb-35">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-4 col-lg-3 col-md-3 col-7 d-none d-lg-block d-flex align-items-center d-xs-disable">
              <div onClick={handleClick} class="basic-bar info-bar">
                <span class="bar1"></span>
                <span class="bar2"></span>
                <span class="bar3"></span>
              </div>
              <div class={active ? "extra-info info-open" : "extra-info"}>
                <div class="close-icon">
                  <button onClick={handleClick}>
                    <i class="far fa-window-close"></i>
                  </button>
                </div>
                <div class="logo-side">
                  <div
                    style={{
                      display: "inline-block",
                      maxWidth: "100%",
                      overflow: "hidden",
                      position: "relative",
                      boxSizing: "border-box",
                      margin: "0px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        style={{
                          maxWidth: "100%",
                          display: "block",
                          margin: "0px",
                          border: "none",
                          padding: "0px",
                        }}
                      />
                    </div>
                    <img
                      alt=""
                      src="https://vue-plum-chi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Flogo%2Flogo-white.1c374e0b66279e8975e74290a6b05a46.png&w=96&q=75"
                      decoding="async"
                      data-nimg="true"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        boxSizing: "border-box",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0px",
                        height: "0px",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </div>
                </div>
                <div class="side-info mb-30">
                  <div class="main-menu side-menu">
                    <nav id="mobile-menu-3" style={{ display: "block" }}>
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                          <ul class="submenu">
                            <li>
                              <Link to="/">Home Style 1</Link>
                            </li>
                            <li>
                              <Link to="/index-2">Home Style 2</Link>
                            </li>
                            <li>
                              <Link to="/index-3">Home Style 3</Link>
                            </li>
                            <li>
                              <Link to="/index-4">Home Style 4</Link>
                            </li>
                            <li>
                              <Link to="/index-5">Home Style 5</Link>
                            </li>
                          </ul>
                        </li>
                        <li class="mega-menu">
                          <Link to="/shop">Shop</Link>
                          <ul class="submenu ">
                            <li>
                              <Link to="#">Category View</Link>
                              <ul class="submenu  level-1">
                                <li>
                                  <Link to="/shop">Shop 2 Column</Link>
                                </li>
                                <li>
                                  <Link to="/products">Shop Filter Style</Link>
                                </li>
                                <li>
                                  <Link to="/products">Shop Full</Link>
                                </li>
                                <li>
                                  <Link to="/shop/col-3">Shop 3 Column</Link>
                                </li>
                                <li>
                                  <Link to="/shop/list">List View</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="#">Category View</Link>
                              <ul class="submenu">
                                <li>
                                  <Link to="/shop/left-sidebar">
                                    Sidebar Left
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/shop/sidebar-right">
                                    Sidebar Right
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/cart">Shopping Cart</Link>
                                </li>
                                <li>
                                  <Link to="/checkout">Checkout</Link>
                                </li>
                                <li>
                                  <Link to="/wishlist">My Wishlist</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="#">Products Types</Link>
                              <ul class="submenu">
                                <li>
                                  <Link to="/shop/1">Simple Product</Link>
                                </li>
                                <li>
                                  <Link to="/shop/19">Variable Product</Link>
                                </li>
                                <li>
                                  <Link to="/shop/upcoming/16">
                                    Product Upcoming
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/compare">Compare</Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/products">Products </Link>
                        </li>
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="#">Pages</Link>
                          <ul class="submenu">
                            <li>
                              <Link to="/contact">Contact Us</Link>
                            </li>
                            <li>
                              <Link to="/login">login</Link>
                            </li>
                            <li>
                              <Link to="/register">Register</Link>
                            </li>
                            <li>
                              <Link to="/cart">Shoping Cart</Link>
                            </li>
                            <li>
                              <Link to="/checkout">Checkout</Link>
                            </li>
                            <li>
                              <Link to="/wishlist">Wishlist</Link>
                            </li>
                            <li>
                              <Link to="/compare">Compare</Link>
                            </li>
                            <li>
                              <Link to="/order-success">Order Success</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div class="side-info-bottom">
                  <div class="side-cta">
                    <p>info@example.com</p>
                    <h4>+(090) 8765 86543 85</h4>
                  </div>
                  <div class="social-icon-right mt-20">
                    <Link to="#">
                      <i class="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#">
                      <i class="fab fa-twitter"></i>
                    </Link>
                    <Link to="#">
                      <i class="fab fa-google-plus-g"></i>
                    </Link>
                    <Link to="#">
                      <i class="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-5 col-md-4 col-5">
              <div class="logo text-left text-md-center">
                <Link to="/shop">
                  <img
                    src="https://vue-plum-chi.vercel.app/img/logo/logo.png"
                    style={{ width: "76px" }}
                    alt="img"
                  />
                </Link>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-8 col-7 pl-0">
              <div class="header-right header-right-3 f-right">
                <ul>
                  <li class="search-btn">
                    <a class="search-btn nav-search search-trigger" href="#">
                      <i class="fas fa-search"></i>
                    </a>
                  </li>
                  <div class="search-wrap ">
                    <div class="search-inner">
                      <i
                        class="fas fa-times search-close"
                        id="search-close"
                      ></i>
                      <div class="search-cell">
                        <form method="get">
                          <div class="search-field-holder">
                            <input
                              type="search"
                              class="main-search-input"
                              placeholder="Search Entire Store..."
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <li class="login-btn">
                    <Link to="/login">
                      <i class="far fa-user"></i>
                    </Link>
                  </li>
                  <MiniCart />
                </ul>
              </div>
            </div>
            <div class="col-12 d-lg-none">
              <div class="mobile-menu mean-container">
                <div class="mean-bar">
                  <Link to="#nav" class="meanmenu-reveal ">
                    <span></span>
                    <span></span>
                    <span></span>
                  </Link>
                  <nav class="mean-nav mobile-header ">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                        <a class="mean-expand" href="#">
                          +
                        </a>
                        <ul class="submenu ">
                          <li>
                            <Link to="/">Home Style 1</Link>
                          </li>
                          <li>
                            <Link to="/index-2">Home Style 2</Link>
                          </li>
                          <li>
                            <Link to="/index-3">Home Style 3</Link>
                          </li>
                          <li>
                            <Link to="/index-4">Home Style 4</Link>
                          </li>
                          <li>
                            <Link to="/index-5">Home Style 5</Link>
                          </li>
                        </ul>
                      </li>
                      <li class="mega-menu">
                        <Link to="/shop">Shop</Link>
                        <a class="mean-expand" href="#">
                          +
                        </a>
                        <ul class="submenu ">
                          <li>
                            <Link to="#">Category View</Link>
                            <ul class="submenu ">
                              <li>
                                <Link to="/shop">Shop 2 Column</Link>
                              </li>
                              <li>
                                <Link to="/products">Shop Filter Style</Link>
                              </li>
                              <li>
                                <Link to="/products">Shop Full</Link>
                              </li>
                              <li>
                                <Link to="/shop/col-3">Shop 3 Column</Link>
                              </li>
                              <li>
                                <Link to="/shop/list">List View</Link>
                              </li>
                            </ul>
                            <a class="mean-expand" href="#">
                              +
                            </a>
                          </li>
                          <li>
                            <Link to="#">Category View</Link>
                            <ul class="submenu ">
                              <li>
                                <Link to="/shop/left-sidebar">
                                  Sidebar Left
                                </Link>
                              </li>
                              <li>
                                <Link to="/shop/sidebar-right">
                                  Sidebar Right
                                </Link>
                              </li>
                              <li>
                                <Link to="/cart">Shopping Cart</Link>
                              </li>
                              <li>
                                <Link to="/checkout">Checkout</Link>
                              </li>
                              <li>
                                <Link to="/wishlist">My Wishlist</Link>
                              </li>
                            </ul>
                            <a class="mean-expand" href="#">
                              +
                            </a>
                          </li>
                          <li>
                            <Link to="#">Products Types</Link>
                            <ul class="submenu ">
                              <li>
                                <Link to="/shop/1">Simple Product</Link>
                              </li>
                              <li>
                                <Link to="/shop/19">Variable Product</Link>
                              </li>
                              <li>
                                <Link to="/shop/upcoming/16">
                                  Product Upcoming
                                </Link>
                              </li>
                              <li>
                                <Link to="/shop/up-thumb/16">
                                  Thumb Top Product
                                </Link>
                              </li>
                              <li>
                                <Link to="/compare">Compare</Link>
                              </li>
                            </ul>
                            <a class="mean-expand" href="#">
                              +
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/products">Products </Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                        <ul class="submenu ">
                          <li>
                            <Link to="/blog/col-2">Blog 2 Column</Link>
                          </li>
                          <li>
                            <Link to="/blog/col-mas-2">Blog 2 Col Masonry</Link>
                          </li>
                          <li>
                            <Link to="/blog/col-3">Blog 3 Column</Link>
                          </li>
                          <li>
                            <Link to="/blog/col-mas-3">Blog 3 Col Masonry</Link>
                          </li>
                          <li>
                            <Link to="/blog/1">Blog Details</Link>
                          </li>
                          <li>
                            <Link to="/blog/10">Blog Details Video</Link>
                          </li>
                        </ul>
                        <a class="mean-expand" href="#">
                          +
                        </a>
                      </li>
                      <li>
                        <Link to="#">Pages</Link>
                        <ul class="submenu ">
                          <li>
                            <Link to="/about">About Us</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact Us</Link>
                          </li>
                          <li>
                            <Link to="/login">login</Link>
                          </li>
                          <li>
                            <Link to="/register">Register</Link>
                          </li>
                          <li>
                            <Link to="/cart">Shoping Cart</Link>
                          </li>
                          <li>
                            <Link to="/checkout">Checkout</Link>
                          </li>
                          <li>
                            <Link to="/wishlist">Wishlist</Link>
                          </li>
                          <li>
                            <Link to="/compare">Compare</Link>
                          </li>
                          <li>
                            <Link to="/order-success">Order Success</Link>
                          </li>
                        </ul>
                        <a class="mean-expand" href="#">
                          +
                        </a>
                      </li>
                      <li class="mean-last">
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="header-sep"
        data-background="img/bg/header-sep.png"
        style={{ backgroundImage: "url(&quot;img/bg/header-sep.png&quot;)" }}
      ></div>
    </header>
  );
}

export default HeaderST2;
