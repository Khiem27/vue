// Modal Start
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductApi from "../../Api/Product/ProductApi";
import AddToCart from "../AddToCart/AddToCart";
import { addToCart } from "../AddToCart/AddToCartSlice";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Modal End

function BestSaleProducts(props) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [idTab, setIdTab] = useState(1);
  const [products, setProducts] = useState(null);
  const [trans, setTrans] = useState(-4);

  const [mens, setMens] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [widthE, setWidthE] = useState(1);
  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await ProductApi.getAll();
      const getProducts = allProducts.data;
      setProducts(getProducts);
      setMens(getProducts.filter((item) => item.category === "men's clothing"));
      setJewelery(getProducts.filter((item) => item.category === "jewelery"));
      setElectronics(
        getProducts.filter((item) => item.category === "electronics")
      );
    };
    getAllProducts();
    const cc = document.querySelector(".slick-list-2");
    let width = cc.clientWidth;
    if (width <= 670) {
      setWidthE(width);
    } else if (width <= 782) {
      setWidthE(width / 2);
    } else if (width <= 934) {
      setWidthE(width / 3);
    } else if (width > 934) {
      setWidthE(width / 4);
    }
  }, [trans]);

  const handleActiveTabs = (id, event) => {
    setIdTab(id);
  };

  const handleTrans = (action) => {
    if (trans === -1) {
      setTrans(-15);
    }

    if (trans === -15) {
      setTrans(-1);
    }

    if (trans !== -15 && action === "next") {
      setTrans(trans - 1);
    } else if (trans !== -1 && action === "prev") {
      setTrans(trans + 1);
    }
    // console.log(trans);
  };

  // Modal
  const modalValue = useRef(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (index) => {
    setOpen(true);
    modalValue.current = index;
  };
  const handleClose = () => setOpen(false);

  const handleSendProduct = (id) => {
    const product = {
      id: products[id].id,
      image: products[id].image,
      title: products[id].title,
      price: products[id].price,
      quantity: 1,
    };

    const action = addToCart(product);
    dispatch(action);

    enqueueSnackbar("Đã thêm một sản phẩm vào giỏ hàng", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "left",
      },
    });
  };

  // Sự kiện drag drop
  const [element, setElement] = useState()

  const posX1 = useRef(0)
  const posX2 = useRef(0)
  const posX3 = useRef(0)
  
  useEffect(() => {
    const elementActive = document.querySelector(".slick-track-brand-new-products-2")
    setElement(elementActive)
  }, [])
  
  if (element) {
    element.addEventListener("mousedown", (e) => {
        e = e || window.event;
        e.preventDefault();
        document.onmouseup = dragEnd;
        document.onmousemove = dragAction;
        posX1.current = e.clientX
    })
  }

  const dragAction = (e) => {
    e = e || window.event;
    posX3.current = e.clientX
  }

  const dragEnd = (e) => {
    if (posX1.current > posX2.current) {
      handleTrans("next");
    } else if (posX1.current < posX2.current) {
      handleTrans("prev");
    }
    posX2.current = e.clientX
    document.onmouseup = null;
    document.onmousemove = null;
    console.log(posX1.current);
    console.log(posX2.current);
  }

  return (
    <>
      <section className="product-area box-90 pt-70 pb-40 slick-slider">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-5 col-lg-12">
              <div className="area-title mb-50">
                <h2>Best Sale Products</h2>
                <p>Browse the huge variety of our products</p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12">
              <div className="product-tab mb-40">
                <ul
                  className="nav product-nav  justify-content-xl-end nav"
                  id="myTab1"
                  role="tablist"
                >
                  <li className="nav-item">
                    <Link
                      onClick={() => handleActiveTabs(1)}
                      id="home-tab"
                      data-toggle="tab"
                      role="tab"
                      to="#"
                      aria-controls="home"
                      aria-selected="true"
                      data-rb-event-key="all"
                      className={
                        idTab === 1
                          ? "nav-link nav-link active"
                          : "nav-link nav-link"
                      }
                    >
                      all
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={() => handleActiveTabs(2)}
                      id="profile-tab"
                      data-toggle="tab"
                      to="#"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                      data-rb-event-key="furniture"
                      className={
                        idTab === 2
                          ? "nav-link nav-link active"
                          : "nav-link nav-link"
                      }
                    >
                      Men's Clothing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={() => handleActiveTabs(3)}
                      id="contact-tab"
                      data-toggle="tab"
                      role="tab"
                      to="#"
                      aria-controls="contact"
                      aria-selected="false"
                      data-rb-event-key="gent"
                      className={
                        idTab === 3
                          ? "nav-link nav-link active"
                          : "nav-link nav-link"
                      }
                    >
                      Jewelery
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={() => handleActiveTabs(4)}
                      id="contact-tab1"
                      data-toggle="tab"
                      role="tab"
                      to="#"
                      aria-controls="contact"
                      aria-selected="false"
                      data-rb-event-key="ladies"
                      className={
                        idTab === 4
                          ? "nav-link nav-link active"
                          : "nav-link nav-link"
                      }
                    >
                      Electronics
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="product-tab-content">
                <div id="myTabContent" className="tab-content tab-content">
                  <div
                    role="tabpanel"
                    aria-hidden="false"
                    className={
                      idTab === 1
                        ? "fade tab-pane active show"
                        : "fade tab-pane"
                    }
                  >
                    <div className="product-slider owl-carousel">
                      <div className="slick-slider slick-initialized">
                        <div
                          onClick={() => handleTrans("prev")}
                          className="owl-prev arrow-icon left"
                        >
                          <i className="fas fa-arrow-left"></i>
                        </div>
                        <div className="slick-list slick-list-2">
                          <div
                            className="slick-track slick-track-brand-new-products slick-track-brand-new-products-2"
                            style={{
                              opacity: "1",
                              transform: `translate3d(${
                                trans * widthE
                              }px, 0px, 0px)`,
                              transition: "500ms ease 0s",
                            }}
                          >
                            {products
                              ? products.map((item, index) => {
                                  return (
                                    <div
                                      data-index="0"
                                      className="slick-slide slick-active slick-current slick-slide-brand-new-products"
                                      key={index}
                                      tabIndex="-1"
                                      aria-hidden="false"
                                      style={{
                                        outline: "none",
                                      }}
                                    >
                                      <div>
                                        <div className="product-wrapper mb-50 ">
                                          <div className="product-img mb-25">
                                            <Link to={`/shop/${item.id}`}>
                                              <img
                                                src={item.image}
                                                alt="img 1"
                                              />
                                              <img
                                                className="secondary-img"
                                                src={item.hoverImage}
                                                alt="imge 2"
                                              />
                                            </Link>
                                            <div className="product-action text-center">
                                              <Link
                                                to="#"
                                                title="Shoppingb Cart"
                                                onClick={() =>
                                                  handleSendProduct(item.id - 1)
                                                }
                                              >
                                                <i className="fas fa-shopping-cart"></i>
                                              </Link>
                                              <Link
                                                to="#"
                                                onClick={() =>
                                                  handleOpen(index)
                                                }
                                                title="Quick View"
                                              >
                                                <i className="fas fa-eye"></i>
                                              </Link>
                                              <Link
                                                data-toggle="tooltip"
                                                data-placement="right"
                                                title="Compare"
                                                className=""
                                                to="#"
                                              >
                                                <i className="fas fa-compress-alt"></i>
                                              </Link>
                                            </div>
                                            <div className="sale-tag">
                                              {item.new ? (
                                                <span className="new">new</span>
                                              ) : null}

                                              {item.sale ? (
                                                <span className="sale">sale</span>
                                              ) : null}
                                            </div>
                                          </div>
                                          <div className="product-content">
                                            <div className="pro-cat mb-10">
                                              <Link to={`/shop/${item.id}`}>
                                                {item.brand}
                                              </Link>
                                            </div>
                                            <h4>
                                              <Link to={`/shop/${item.id}`}>
                                                {item.title}
                                              </Link>
                                            </h4>
                                            <div className="product-meta">
                                              <div className="pro-price">
                                                <span>${item.price} USD</span>
                                              </div>
                                            </div>
                                            <div className="product-wishlist">
                                              <Link to="#" className="  ">
                                                <i
                                                  className="far fa-heart"
                                                  title="Wishlist"
                                                ></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })
                              : null}
                          </div>
                        </div>
                        <div
                          onClick={() => handleTrans("next")}
                          className="owl-prev arrow-icon right"
                        >
                          <i className="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    role="tabpanel"
                    aria-hidden="false"
                    className={
                      idTab === 2
                        ? "fade tab-pane active show"
                        : "fade tab-pane"
                    }
                  >
                    {mens.length ? (
                      <div className="product-slider owl-carousel">
                        <div className="slick-slider slick-initialized">
                          <div className="slick-list">
                            <div
                              className="slick-track slick-track-brand-new-products slick-track-brand-new-products-2"
                              style={{
                                opacity: "1",
                                transform: `translate3d(0px, 0px, 0px)`,
                              }}
                            >
                              {mens
                                ? mens.map((item, index) => {
                                    return (
                                      <div
                                        data-index="0"
                                        className="slick-slide slick-active slick-current slick-slide-brand-new-products"
                                        tabIndex="-1"
                                        aria-hidden="false"
                                        style={{
                                          outline: "none",
                                        }}
                                        key={index}
                                      >
                                        <div>
                                          <div className="product-wrapper mb-50 ">
                                            <div className="product-img mb-25">
                                              <Link to={`/shop/${item.id}`}>
                                                <img
                                                  src={item.image}
                                                  alt="img 1"
                                                />
                                                <img
                                                  className="secondary-img"
                                                  src={item.hoverImage}
                                                  alt="imge 2"
                                                />
                                              </Link>
                                              <div className="product-action text-center">
                                                <Link
                                                  to="#"
                                                  title="Shoppingb Cart"
                                                  onClick={() =>
                                                    handleSendProduct(
                                                      item.id - 1
                                                    )
                                                  }
                                                >
                                                  <i className="fas fa-shopping-cart"></i>
                                                </Link>
                                                <Link
                                                  to="#"
                                                  onClick={() =>
                                                    handleOpen(index)
                                                  }
                                                  title="Quick View"
                                                >
                                                  <i className="fas fa-eye"></i>
                                                </Link>
                                                <Link
                                                  to="#"
                                                  data-toggle="tooltip"
                                                  data-placement="right"
                                                  title="Compare"
                                                  className=""
                                                >
                                                  <i className="fas fa-compress-alt"></i>
                                                </Link>
                                              </div>
                                              <div className="sale-tag">
                                                {item.new ? (
                                                  <span className="new">new</span>
                                                ) : null}

                                                {item.sale ? (
                                                  <span className="sale">sale</span>
                                                ) : null}
                                              </div>
                                            </div>
                                            <div className="product-content">
                                              <div className="pro-cat mb-10">
                                                <Link to={`/shop/${item.id}`}>
                                                  {item.brand}
                                                </Link>
                                              </div>
                                              <h4>
                                                <Link to={`/shop/${item.id}`}>
                                                  {item.title}
                                                </Link>
                                              </h4>
                                              <div className="product-meta">
                                                <div className="pro-price">
                                                  <span>${item.price} USD</span>
                                                </div>
                                              </div>
                                              <div className="product-wishlist">
                                                <Link to="#" className="  ">
                                                  <i
                                                    className="far fa-heart"
                                                    title="Wishlist"
                                                  ></i>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })
                                : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div
                    role="tabpanel"
                    aria-hidden="false"
                    className={
                      idTab === 3
                        ? "fade tab-pane active show"
                        : "fade tab-pane"
                    }
                  >
                    {jewelery.length ? (
                      <div className="product-slider owl-carousel">
                        <div className="slick-slider slick-initialized">
                          <div className="slick-list">
                            <div
                              className="slick-track slick-track-brand-new-products slick-track-brand-new-products-2"
                              style={{
                                opacity: "1",
                                transform: `translate3d(0 px, 0px, 0px)`,
                              }}
                            >
                              {jewelery
                                ? jewelery.map((item, index) => {
                                    return (
                                      <div
                                        data-index="0"
                                        className="slick-slide slick-active slick-current slick-slide-brand-new-products"
                                        tabIndex="-1"
                                        aria-hidden="false"
                                        style={{
                                          outline: "none",
                                        }}
                                        key={index}
                                      >
                                        <div>
                                          <div className="product-wrapper mb-50 ">
                                            <div className="product-img mb-25">
                                              <Link to={`/shop/${item.id}`}>
                                                <img
                                                  src={item.image}
                                                  alt="img 1"
                                                />
                                                <img
                                                  className="secondary-img"
                                                  src={item.hoverImage}
                                                  alt="imge 2"
                                                />
                                              </Link>
                                              <div className="product-action text-center">
                                                <Link
                                                  to="#"
                                                  title="Shoppingb Cart"
                                                  onClick={() =>
                                                    handleSendProduct(
                                                      item.id - 1
                                                    )
                                                  }
                                                >
                                                  <i className="fas fa-shopping-cart"></i>
                                                </Link>

                                                <Link
                                                  to="#"
                                                  onClick={() =>
                                                    handleOpen(index)
                                                  }
                                                  title="Quick View"
                                                >
                                                  <i className="fas fa-eye"></i>
                                                </Link>
                                                <Link
                                                  to="#"
                                                  data-toggle="tooltip"
                                                  data-placement="right"
                                                  title="Compare"
                                                  className=""
                                                >
                                                  <i className="fas fa-compress-alt"></i>
                                                </Link>
                                              </div>
                                              <div className="sale-tag">
                                                {item.new ? (
                                                  <span className="new">new</span>
                                                ) : null}

                                                {item.sale ? (
                                                  <span className="sale">sale</span>
                                                ) : null}
                                              </div>
                                            </div>
                                            <div className="product-content">
                                              <div className="pro-cat mb-10">
                                                <Link to={`/shop/${item.id}`}>
                                                  {item.brand}
                                                </Link>
                                              </div>
                                              <h4>
                                                <Link to={`/shop/${item.id}`}>
                                                  {item.title}
                                                </Link>
                                              </h4>
                                              <div className="product-meta">
                                                <div className="pro-price">
                                                  <span>${item.price} USD</span>
                                                </div>
                                              </div>
                                              <div className="product-wishlist">
                                                <Link to="#" className="  ">
                                                  <i
                                                    className="far fa-heart"
                                                    title="Wishlist"
                                                  ></i>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })
                                : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div
                    role="tabpanel"
                    aria-hidden="false"
                    className={
                      idTab === 4
                        ? "fade tab-pane active show"
                        : "fade tab-pane"
                    }
                  >
                    {electronics.length ? (
                      <div className="product-slider owl-carousel">
                        <div className="slick-slider slick-initialized">
                          <div className="slick-list">
                            <div
                              className="slick-track slick-track-brand-new-products slick-track-brand-new-products-2"
                              style={{
                                opacity: "1",
                                transform: `translate3d(0 px, 0px, 0px)`,
                              }}
                            >
                              {electronics
                                ? electronics.map((item, index) => {
                                    return (
                                      <div
                                        data-index="0"
                                        className="slick-slide slick-active slick-current slick-slide-brand-new-products"
                                        tabIndex="-1"
                                        aria-hidden="false"
                                        style={{
                                          outline: "none",
                                        }}
                                        key={index}
                                      >
                                        <div>
                                          <div className="product-wrapper mb-50 ">
                                            <div className="product-img mb-25">
                                              <Link to={`/shop/${item.id}`}>
                                                <img
                                                  src={item.image}
                                                  alt="img 1"
                                                />
                                                <img
                                                  className="secondary-img"
                                                  src={item.hoverImage}
                                                  alt="imge 2"
                                                />
                                              </Link>
                                              <div className="product-action text-center">
                                                <Link
                                                  to="#"
                                                  title="Shoppingb Cart"
                                                  onClick={() =>
                                                    handleSendProduct(
                                                      item.id - 1
                                                    )
                                                  }
                                                >
                                                  <i className="fas fa-shopping-cart"></i>
                                                </Link>
                                                <Link
                                                  to="#"
                                                  onClick={() =>
                                                    handleOpen(index)
                                                  }
                                                  title="Quick View"
                                                >
                                                  <i className="fas fa-eye"></i>
                                                </Link>
                                                <Link
                                                  to="#"
                                                  data-toggle="tooltip"
                                                  data-placement="right"
                                                  title="Compare"
                                                  className=""
                                                >
                                                  <i className="fas fa-compress-alt"></i>
                                                </Link>
                                              </div>
                                              <div className="sale-tag">
                                                {item.new ? (
                                                  <span className="new">new</span>
                                                ) : null}

                                                {item.sale ? (
                                                  <span className="sale">sale</span>
                                                ) : null}
                                              </div>
                                            </div>
                                            <div className="product-content">
                                              <div className="pro-cat mb-10">
                                                <Link to={`/shop/${item.id}`}>
                                                  {item.brand}
                                                </Link>
                                              </div>
                                              <h4>
                                                <Link to={`/shop/${item.id}`}>
                                                  {item.title}
                                                </Link>
                                              </h4>
                                              <div className="product-meta">
                                                <div className="pro-price">
                                                  <span>${item.price} USD</span>
                                                </div>
                                              </div>
                                              <div className="product-wishlist">
                                                <Link to="#" className="  ">
                                                  <i
                                                    className="far fa-heart"
                                                    title="Wishlist"
                                                  ></i>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })
                                : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          {modalValue.current || modalValue.current === 0 ? (
            <>
              <div className="fade modal-backdrop show"></div>
              <div
                role="dialog"
                aria-modal="true"
                className="fade modal show"
                tabIndex="-1"
                style={{
                  display: "block",
                  paddingLeft: "16px",
                  maxHeight: "100%",
                  overflowY: "auto",
                }}
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6">
                          <div className="product-details-img mb-10">
                            <div id="myTabContentpro" className="tab-content">
                              <div
                                role="tabpanel"
                                aria-hidden="false"
                                className="fade tab-pane active show"
                              >
                                <div className="product-large-img">
                                  <img
                                    src={products[modalValue.current].image}
                                    alt="tum"
                                  />
                                </div>
                              </div>
                              <div
                                role="tabpanel"
                                aria-hidden="true"
                                className="fade tab-pane"
                              >
                                <div className="product-large-img">
                                  <img
                                    src={products[modalValue.current].navImage}
                                    alt="tum"
                                  />
                                </div>
                              </div>
                              <div
                                role="tabpanel"
                                aria-hidden="true"
                                className="fade tab-pane"
                              >
                                <div className="product-large-img">
                                  <img
                                    src={
                                      products[modalValue.current].hoverImage
                                    }
                                    alt="tum"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="shop-thumb-tab ">
                            <ul className="nav" role="tablist">
                              <li className="nav-item">
                                <Link
                                  to="#"
                                  role="tab"
                                  data-rb-event-key="tum-0"
                                  aria-selected="true"
                                  className="nav-link active"
                                >
                                  <img
                                    src={products[modalValue.current].image}
                                    alt="Tum"
                                  />{" "}
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="#"
                                  role="tab"
                                  data-rb-event-key="tum-1"
                                  aria-selected="false"
                                  className="nav-link"
                                >
                                  <img
                                    src={products[modalValue.current].navImage}
                                    alt="Tum"
                                  />{" "}
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="#"
                                  role="tab"
                                  data-rb-event-key="tum-2"
                                  aria-selected="false"
                                  className="nav-link"
                                >
                                  <img
                                    src={
                                      products[modalValue.current].hoverImage
                                    }
                                    alt="Tum"
                                  />{" "}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="product-details ">
                            <div className="details-cat mb-10 d-flex align-items-center justify-content-between">
                              <div>
                                <Link to="#">
                                  {products[modalValue.current].category}
                                </Link>
                              </div>
                              <i
                                className="fa fa-times modal-icon "
                                onClick={handleClose}
                              ></i>
                            </div>
                            <h2 className="pro-details-title mb-15 fs-30">
                              {products[modalValue.current].title}
                            </h2>
                            <div className="details-price mb-10 fs-25">
                              <span>
                                ${products[modalValue.current].price} USD
                              </span>
                              {products[modalValue.current].oldPrice ? (
                                <span className="old-price">
                                  ${products[modalValue.current].oldPrice} USD
                                </span>
                              ) : null}
                            </div>
                            <div className="product-variant ">
                              <div className="product-color variant-item modal-p-15">
                                <div className="variant-name">
                                  <span>Colors</span>
                                </div>
                                <ul className="shop-link shop-color">
                                  <li>
                                    <Link to="#">
                                      <span
                                        className={products[
                                          modalValue.current
                                        ].color.toLowerCase()}
                                      ></span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="product-size variant-item modal-p-15">
                                <div className="variant-name">
                                  <span>size</span>
                                </div>
                                <ul className="shop-link shop-size">
                                  <li
                                    className={
                                      products[modalValue.current].size === "l"
                                        ? "active"
                                        : " "
                                    }
                                  >
                                    <Link to="#">L</Link>
                                  </li>
                                  <li
                                    className={
                                      products[modalValue.current].size === "m"
                                        ? "active"
                                        : " "
                                    }
                                  >
                                    <Link to="#">M</Link>
                                  </li>
                                  <li
                                    className={
                                      products[modalValue.current].size === "x"
                                        ? "active"
                                        : " "
                                    }
                                  >
                                    <Link to="#">X</Link>
                                  </li>
                                  <li
                                    className={
                                      products[modalValue.current].size === "xl"
                                        ? "active"
                                        : " "
                                    }
                                  >
                                    <Link to="#">XL</Link>
                                  </li>
                                  <li
                                    className={
                                      products[modalValue.current].size ===
                                      "xxl"
                                        ? "active"
                                        : " "
                                    }
                                  >
                                    <Link to="#">XXL</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="product-desc variant-item modal-p-15">
                                <p>
                                  {products[modalValue.current].description}
                                </p>
                              </div>
                              <div className="product-info-list variant-item modal-p-15">
                                <ul>
                                  <li className="text-capitalize">
                                    <span>Brands:</span>{" "}
                                    {products[modalValue.current].brand}
                                  </li>
                                  <li>
                                    <span>Product Code:</span> f3
                                  </li>
                                  <li>
                                    <span>Reward Points:</span> 100
                                  </li>
                                  <li>
                                    <span>Stock:</span>{" "}
                                    <span className="in-stock">Out Of Stock</span>
                                  </li>
                                </ul>
                              </div>
                              <AddToCart
                                productInfo={products[modalValue.current]}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </Box>
      </Modal>
    </>
  );
}

export default BestSaleProducts;
