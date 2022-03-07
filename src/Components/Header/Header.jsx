import React, { useState, useRef } from "react";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import MiniCart from "../MiniCart/MiniCart";
import ScrollUp from "../ScrollUp/ScrollUp";

function Header(props) {
  const [clickMenu, setClickMenu] = useState(false);
  const [clickCtn, setClickCtn] = useState(false);
  const [submenu1, setSubmenu1] = useState(false);
  const [submenu2, setSubmenu2] = useState(false);
  const [submenu22, setSubmenu22] = useState(false);
  const [submenu3, setSubmenu3] = useState(false);
  const [submenu4, setSubmenu4] = useState(false);

  const handleClick = () => {
    setClickMenu(!clickMenu);
  };

  const handleClickCtn = () => {
    setClickCtn(!clickCtn);
  };

  const handleMenu1 = () => {
    setSubmenu1(!submenu1)
  }

  const handleMenu2 = () => {
    setSubmenu2(!submenu2)
  }

  const handleMenu22 = (id) => {
    setSubmenu22(id)
  }

  const handleMenu3 = () => {
    setSubmenu3(!submenu3)
  }

  const handleMenu4 = () => {
    setSubmenu4(!submenu4)
  }

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
      <div
        class={
          pos > -400 ? "header-area box-90" : "header-area box-90 sticky-header"
        }
        id="header-sticky"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-3 d-flex align-items-center">
              <div class="d-flex" onClick={handleClick}>
                <div class="basic-bar cat-toggle">
                  <span class="bar1"></span>
                  <span class="bar2"></span>
                  <span class="bar3"></span>
                </div>
              </div>
              <div class="logo mt-2">
                <Link to="/">
                  <img
                    src="https://vue-plum-chi.vercel.app/img/logo/logo.png"
                    alt="Logo"
                  />
                </Link>
              </div>
              <div
                class={
                  clickMenu
                    ? "category-menu d-block block"
                    : "category-menu d-block "
                }
              >
                <h4>Category</h4>
                <ul>
                  <li>
                    <Link class="text-capitalize" to="/shop">
                      <i class="fas fa-cart-plus"></i>furniture
                    </Link>
                  </li>
                  <li>
                    <Link class="text-capitalize" to="/shop">
                      <i class="fas fa-cart-plus"></i>ladies
                    </Link>
                  </li>
                  <li>
                    <Link class="text-capitalize" to="/shop">
                      <i class="fas fa-cart-plus"></i>gent
                    </Link>
                  </li>
                  <li>
                    <Link class="text-capitalize" to="/shop">
                      <i class="fas fa-cart-plus"></i>Clothing
                    </Link>
                  </li>
                  <li>
                    <Link class="text-capitalize" to="/shop">
                      <i class="fas fa-cart-plus"></i>jacket
                    </Link>
                  </li>
                  <li>
                    <Link class="text-capitalize" to="/shop">
                      <i class="fas fa-cart-plus"></i>tshart
                    </Link>
                  </li>
                  <li>
                    <Link class="text-capitalize" to="/shop">
                      <i class="fas fa-cart-plus"></i>lamp
                    </Link>
                  </li>
                  <li>
                    <Link class="text-capitalize" to="/shop">
                      <i class="fas fa-cart-plus"></i>chair
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-7 col-lg-6 col-md-8 col-8 d-none d-xl-block">
              <div class="main-menu text-center ">
                <nav id="mobile-menu">
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
                          <Link onClick={() => handleMenu22(1)}>Category View</Link>
                          <ul class="submenu level-1">
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
                          <Link onClick={() => handleMenu22(2)}>Category View</Link>
                          <ul class="submenu  level-1 ">
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
                          <Link onClick={() => handleMenu22(3)}>Products Types</Link>
                          <ul class="submenu  level-1 ">
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
            <div class="col-xl-3 col-lg-6 col-md-6 col-5 col-sm-9 pl-0">
              <div class="header-right f-right">
                <ul>
                  <li class="search-btn">
                    <Link class="search-btn nav-search search-trigger" to="#">
                      <i class="fas fa-search"></i>
                    </Link>
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
            <div class="col-12 d-xl-none">
              <div class="mobile-menu mean-container">
                <div class="mean-bar">
                  {clickCtn ? (
                    <Link
                      onClick={handleClickCtn}
                      class="meanmenu-reveal d-flex align-items-center justify-content-center fs-18"
                    >
                      X
                    </Link>
                  ) : (
                    <Link onClick={handleClickCtn} class="meanmenu-reveal ">
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  )}
                  <nav class={clickCtn ? "mean-nav mobile-header block" : "mean-nav mobile-header "}>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                        {
                          submenu1 ? <Link onClick={handleMenu1} class="mean-expand" >-</Link> : 
                        <Link onClick={handleMenu1} class="mean-expand" to="#">
                          +
                        </Link>
                        }
                        <ul class={submenu1 ? "submenu block" : "submenu "}>
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
                        {
                          submenu2 ? <Link onClick={handleMenu2} class="mean-expand" >-</Link> : 
                          <Link onClick={handleMenu2} class="mean-expand" to="#">
                            +
                          </Link>
                        }
                        <ul class={submenu2 ? "submenu block" : "submenu "}>
                          <li>
                            <Link to="#">Category View</Link>
                            <ul class={submenu22 === 1 ? "submenu block" : "submenu "}>
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
                            <Link class="mean-expand" onClick={() => handleMenu22(1)} to="#">
                              +
                            </Link>
                          </li>
                          <li>
                            <Link to="#">Category View</Link>
                            <ul class={submenu22 === 2 ? "submenu block" : "submenu "}>
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
                            <Link class="mean-expand" onClick={() => handleMenu22(2)} to="#">
                              +
                            </Link>
                          </li>
                          <li>
                            <Link to="#">Products Types</Link>
                            <ul class={submenu22 === 3 ? "submenu block" : "submenu "}>
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
                            <Link class="mean-expand" onClick={() => handleMenu22(3)} to="#">
                              +
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/products">Products </Link>
                      </li>
                      <li>
                        <Link to="/blog" >Blog</Link>
                        <ul class={submenu3 ? "submenu block" : "submenu "}>
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
                        {
                         submenu3 ? <Link onClick={handleMenu3} class="mean-expand" to="#">
                          -
                        </Link>
                          :
                        <Link onClick={handleMenu3} class="mean-expand" to="#">
                          +
                        </Link>
                        }
                      </li>
                      <li>
                        <Link to="#" >Pages</Link>
                        <ul class={submenu4 ? "submenu block" : "submenu "}>
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
                        {
                          submenu4 ? <Link onClick={handleMenu4} class="mean-expand" to="#">
                          -
                        </Link>
                        :
                        <Link onClick={handleMenu4} class="mean-expand" to="#">
                          +
                        </Link>
                        }
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
    </header>
  );
}

export default Header;
