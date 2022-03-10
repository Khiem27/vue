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
    <header classNameName="header-all-page">
      {pos <= -400 ? <ScrollUp /> : null}
      <div className="header-area header-3 pt-35 pb-35">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-3 col-md-3 col-7 d-none d-lg-block d-flex align-items-center d-xs-disable">
              <div onClick={handleClick} className="basic-bar info-bar">
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
              </div>
              <div className={active ? "extra-info info-open" : "extra-info"}>
                <div className="close-icon">
                  <button onClick={handleClick}>
                    <i className="far fa-window-close"></i>
                  </button>
                </div>
                <div className="logo-side">
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
                <div className="side-info mb-30">
                  <div className="main-menu side-menu">
                    <nav id="mobile-menu-3" style={{ display: "block" }}>
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                          <ul className="submenu">
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
                        <li className="mega-menu">
                          <Link to="/shop">Shop</Link>
                          <ul className="submenu ">
                            <li>
                              <Link to="#">Category View</Link>
                              <ul className="submenu  level-1">
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
                              <ul className="submenu">
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
                              <ul className="submenu">
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
                          <ul className="submenu">
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
                <div className="side-info-bottom">
                  <div className="side-cta">
                    <p>info@example.com</p>
                    <h4>+(090) 8765 86543 85</h4>
                  </div>
                  <div className="social-icon-right mt-20">
                    <Link to="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-google-plus-g"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-4 col-5">
              <div className="logo text-left text-md-center">
                <Link to="/shop">
                  <img
                    src="https://vue-plum-chi.vercel.app/img/logo/logo.png"
                    style={{ width: "76px" }}
                    alt="img"
                  />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-8 col-7 pl-0">
              <div className="header-right header-right-3 f-right">
                <ul>
                  <li className="search-btn">
                    <Link className="search-btn nav-search search-trigger">
                      <i className="fas fa-search"></i>
                    </Link>
                  </li>
                  <div className="search-wrap ">
                    <div className="search-inner">
                      <i
                        className="fas fa-times search-close"
                        id="search-close"
                      ></i>
                      <div className="search-cell">
                        <form method="get">
                          <div className="search-field-holder">
                            <input
                              type="search"
                              className="main-search-input"
                              placeholder="Search Entire Store..."
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <li className="login-btn">
                    <Link to="/login">
                      <i className="far fa-user"></i>
                    </Link>
                  </li>
                  <MiniCart />
                </ul>
              </div>
            </div>
            <div className="col-12 d-lg-none">
              <div className="mobile-menu mean-container">
                <div className="mean-bar">
                  <Link to="#nav" className="meanmenu-reveal ">
                    <span></span>
                    <span></span>
                    <span></span>
                  </Link>
                  <nav className="mean-nav mobile-header ">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                        <Link className="mean-expand">
                          +
                        </Link>
                        <ul className="submenu ">
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
                      <li className="mega-menu">
                        <Link to="/shop">Shop</Link>
                        <Link className="mean-expand">
                          +
                        </Link>
                        <ul className="submenu ">
                          <li>
                            <Link to="#">Category View</Link>
                            <ul className="submenu ">
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
                            <Link className="mean-expand">
                              +
                            </Link>
                          </li>
                          <li>
                            <Link to="#">Category View</Link>
                            <ul className="submenu ">
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
                            <Link className="mean-expand">
                              +
                            </Link>
                          </li>
                          <li>
                            <Link to="#">Products Types</Link>
                            <ul className="submenu ">
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
                            <Link className="mean-expand">
                              +
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/products">Products </Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                        <ul className="submenu ">
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
                        <Link className="mean-expand">
                          +
                        </Link>
                      </li>
                      <li>
                        <Link to="#">Pages</Link>
                        <ul className="submenu ">
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
                        <Link className="mean-expand">
                          +
                        </Link>
                      </li>
                      <li className="mean-last">
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
        className="header-sep"
        data-background="img/bg/header-sep.png"
        style={{ backgroundImage: "url(&quot;img/bg/header-sep.png&quot;)" }}
      ></div>
    </header>
  );
}

export default HeaderST2;
