import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MiniCart from "../MiniCart/MiniCart";
import ScrollUp from "../ScrollUp/ScrollUp";

function HeaderST3(props) {
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

  const [clickCtn, setClickCtn] = useState(false);
  const [submenu1, setSubmenu1] = useState(false);
  const [submenu2, setSubmenu2] = useState(false);
  const [submenu22, setSubmenu22] = useState(false);
  const [submenu3, setSubmenu3] = useState(false);
  const [submenu4, setSubmenu4] = useState(false);

  const handleClickCtn = () => {
    setClickCtn(!clickCtn);
  };

  const handleMenu1 = () => {
    setSubmenu1(!submenu1);
  };

  const handleMenu2 = () => {
    setSubmenu2(!submenu2);
  };

  const handleMenu22 = (id) => {
    setSubmenu22(id);
  };

  const handleMenu3 = () => {
    setSubmenu3(!submenu3);
  };

  const handleMenu4 = () => {
    setSubmenu4(!submenu4);
  };

  const [clickActiveSearch, setClickActiveSearch] = useState(false);

  const handleClickActiveSearch = () => {
    setClickActiveSearch(!clickActiveSearch);
  };

  window.addEventListener("scroll", () => {
    if (clickActiveSearch) {
      setClickActiveSearch(!clickActiveSearch);
    }
  });

  return (
    <header className="header-all-page">
      {pos <= -400 ? <ScrollUp /> : null}
      <div
        className={
          pos > -400 ? "header-area box-90" : "header-area box-90 sticky-header"
        }
        id="header-sticky"
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-3 d-flex align-items-center">
              <div className="logo mt-2">
                {pos > -400 ? (
                  <Link to="#">
                    <img
                      src="https://vue-plum-chi.vercel.app/img/logo/logo-white.png"
                      alt="Logo"
                    />
                  </Link>
                ) : (
                  <Link to="#">
                    <img
                      src="https://vue-plum-chi.vercel.app/img/logo/logo.png"
                      alt="Logo"
                    />
                  </Link>
                )}
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-8 col-8 d-none d-xl-block">
              <div
                className={
                  pos > -400
                    ? "main-menu text-center menu-white"
                    : "main-menu text-center menu-black"
                }
              >
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                      <ul className="submenu">
                        <li>
                          <Link to="#">Home Style 1</Link>
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
                              <Link to="/shop/left-sidebar">Sidebar Left</Link>
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
                      <ul className="submenu">
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
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-5 col-sm-9 pl-0">
              <div className="header-right f-right">
                <ul>
                  <li className="search-btn">
                    <Link
                      onClick={handleClickActiveSearch}
                      className="search-btn nav-search search-trigger"
                      to="#"
                    >
                      <i className="fas fa-search"></i>
                    </Link>
                  </li>
                  <div
                    className={
                      clickActiveSearch ? "search-wrap d-block" : "search-wrap "
                    }
                  >
                    <div className="search-inner">
                      <i
                        onClick={handleClickActiveSearch}
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
            <div className="col-12 d-xl-none">
              <div className="mobile-menu mean-container">
                <div className="mean-bar">
                  {clickCtn ? (
                    <Link
                      to="#"
                      onClick={handleClickCtn}
                      className="meanmenu-reveal d-flex align-items-center justify-content-center fs-18"
                    >
                      X
                    </Link>
                  ) : (
                    <Link
                      to="#"
                      onClick={handleClickCtn}
                      className="meanmenu-reveal "
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  )}
                  <nav
                    className={
                      clickCtn
                        ? "mean-nav mobile-header block"
                        : "mean-nav mobile-header "
                    }
                  >
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                        {submenu1 ? (
                          <Link
                            to="#"
                            onClick={handleMenu1}
                            className="mean-expand"
                          >
                            -
                          </Link>
                        ) : (
                          <Link
                            onClick={handleMenu1}
                            className="mean-expand"
                            to="#"
                          >
                            +
                          </Link>
                        )}
                        <ul className={submenu1 ? "submenu block" : "submenu "}>
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
                        {submenu2 ? (
                          <Link onClick={handleMenu2} className="mean-expand">
                            -
                          </Link>
                        ) : (
                          <Link
                            onClick={handleMenu2}
                            className="mean-expand"
                            to="#"
                          >
                            +
                          </Link>
                        )}
                        <ul className={submenu2 ? "submenu block" : "submenu "}>
                          <li>
                            <Link to="#">Category View</Link>
                            <ul
                              className={
                                submenu22 === 1 ? "submenu block" : "submenu "
                              }
                            >
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
                            <Link
                              className="mean-expand"
                              onClick={() => handleMenu22(1)}
                              to="#"
                            >
                              +
                            </Link>
                          </li>
                          <li>
                            <Link to="#">Category View</Link>
                            <ul
                              className={
                                submenu22 === 2 ? "submenu block" : "submenu "
                              }
                            >
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
                            <Link
                              className="mean-expand"
                              onClick={() => handleMenu22(2)}
                              to="#"
                            >
                              +
                            </Link>
                          </li>
                          <li>
                            <Link to="#">Products Types</Link>
                            <ul
                              className={
                                submenu22 === 3 ? "submenu block" : "submenu "
                              }
                            >
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
                            <Link
                              className="mean-expand"
                              onClick={() => handleMenu22(3)}
                              to="#"
                            >
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
                        <ul className={submenu3 ? "submenu block" : "submenu "}>
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
                        {submenu3 ? (
                          <Link
                            onClick={handleMenu3}
                            className="mean-expand"
                            to="#"
                          >
                            -
                          </Link>
                        ) : (
                          <Link
                            onClick={handleMenu3}
                            className="mean-expand"
                            to="#"
                          >
                            +
                          </Link>
                        )}
                      </li>
                      <li>
                        <Link to="#">Pages</Link>
                        <ul className={submenu4 ? "submenu block" : "submenu "}>
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
                        </ul>
                        {submenu4 ? (
                          <Link
                            onClick={handleMenu4}
                            className="mean-expand"
                            to="#"
                          >
                            -
                          </Link>
                        ) : (
                          <Link
                            onClick={handleMenu4}
                            className="mean-expand"
                            to="#"
                          >
                            +
                          </Link>
                        )}
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
    </header>
  );
}

export default HeaderST3;
