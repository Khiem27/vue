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
    const cc = document.querySelector(".slick-list-1");
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
    console.log(trans);
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

  return (
    <>
      <section class="product-area box-90 pt-70 pb-40 slick-slider">
        <div className="container-fluid">
          <div class="row">
            <div class="col-xl-5 col-lg-12">
              <div class="area-title mb-50">
                <h2>Best Sale Products</h2>
                <p>Browse the huge variety of our products</p>
              </div>
            </div>
            <div class="col-xl-7 col-lg-12">
              <div class="product-tab mb-40">
                <ul
                  class="nav product-nav  justify-content-xl-end nav"
                  id="myTab1"
                  role="tablist"
                >
                  <li class="nav-item">
                    <Link
                      onClick={() => handleActiveTabs(1)}
                      id="home-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                      data-rb-event-key="all"
                      class={
                        idTab === 1
                          ? "nav-link nav-link active"
                          : "nav-link nav-link"
                      }
                    >
                      all
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      onClick={() => handleActiveTabs(2)}
                      id="profile-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                      data-rb-event-key="furniture"
                      class={
                        idTab === 2
                          ? "nav-link nav-link active"
                          : "nav-link nav-link"
                      }
                    >
                      Men's Clothing
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      onClick={() => handleActiveTabs(3)}
                      id="contact-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                      data-rb-event-key="gent"
                      class={
                        idTab === 3
                          ? "nav-link nav-link active"
                          : "nav-link nav-link"
                      }
                    >
                      Jewelery
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      onClick={() => handleActiveTabs(4)}
                      id="contact-tab1"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                      data-rb-event-key="ladies"
                      class={
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
          <div class="row">
            <div class="col-xl-12">
              <div class="product-tab-content">
                <div id="myTabContent" class="tab-content tab-content">
                  <div
                    role="tabpanel"
                    aria-hidden="false"
                    class={
                      idTab === 1
                        ? "fade tab-pane active show"
                        : "fade tab-pane"
                    }
                  >
                    <div class="product-slider owl-carousel">
                      <div class="slick-slider slick-initialized">
                        <div
                          onClick={() => handleTrans("prev")}
                          class="owl-prev arrow-icon left"
                        >
                          <i class="fas fa-arrow-left"></i>
                        </div>
                        <div className="slick-list slick-list-1">
                          <div
                            className="slick-track slick-track-brand-new-products"
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
                                      class="slick-slide slick-active slick-current slick-slide-brand-new-products"
                                      key={index}
                                      tabindex="-1"
                                      aria-hidden="false"
                                      style={{
                                        outline: "none",
                                      }}
                                    >
                                      <div>
                                        <div class="product-wrapper mb-50 ">
                                          <div class="product-img mb-25">
                                            <Link to={`/shop/${item.id}`}>
                                              <img
                                                src={item.image}
                                                alt="img 1"
                                              />
                                              <img
                                                class="secondary-img"
                                                src={item.hoverImage}
                                                alt="imge 2"
                                              />
                                            </Link>
                                            <div class="product-action text-center">
                                              <Link
                                                title="Shoppingb Cart"
                                                onClick={() =>
                                                  handleSendProduct(item.id - 1)
                                                }
                                              >
                                                <i class="fas fa-shopping-cart"></i>
                                              </Link>
                                              <Link
                                                onClick={() =>
                                                  handleOpen(index)
                                                }
                                                title="Quick View"
                                              >
                                                <i class="fas fa-eye"></i>
                                              </Link>
                                              <Link
                                                data-toggle="tooltip"
                                                data-placement="right"
                                                title="Compare"
                                                class=""
                                              >
                                                <i class="fas fa-compress-alt"></i>
                                              </Link>
                                            </div>
                                            <div class="sale-tag">
                                              {item.new ? (
                                                <span class="new">new</span>
                                              ) : null}

                                              {item.sale ? (
                                                <span class="sale">sale</span>
                                              ) : null}
                                            </div>
                                          </div>
                                          <div class="product-content">
                                            <div class="pro-cat mb-10">
                                              <Link to={`/shop/${item.id}`}>
                                                {item.brand}
                                              </Link>
                                            </div>
                                            <h4>
                                              <Link to={`/shop/${item.id}`}>
                                                {item.title}
                                              </Link>
                                            </h4>
                                            <div class="product-meta">
                                              <div class="pro-price">
                                                <span>${item.price} USD</span>
                                              </div>
                                            </div>
                                            <div class="product-wishlist">
                                              <Link class="  ">
                                                <i
                                                  class="far fa-heart"
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
                          class="owl-prev arrow-icon right"
                        >
                          <i class="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    role="tabpanel"
                    aria-hidden="false"
                    class={
                      idTab === 2
                        ? "fade tab-pane active show"
                        : "fade tab-pane"
                    }
                  >
                    {mens.length ? (
                      <div class="product-slider owl-carousel">
                        <div class="slick-slider slick-initialized">
                          <div className="slick-list">
                            <div
                              className="slick-track slick-track-brand-new-products"
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
                                        class="slick-slide slick-active slick-current slick-slide-brand-new-products"
                                        tabindex="-1"
                                        aria-hidden="false"
                                        style={{
                                          outline: "none",
                                        }}
                                      >
                                        <div>
                                          <div class="product-wrapper mb-50 ">
                                            <div class="product-img mb-25">
                                              <Link to={`/shop/${item.id}`}>
                                                <img
                                                  src={item.image}
                                                  alt="img 1"
                                                />
                                                <img
                                                  class="secondary-img"
                                                  src={item.hoverImage}
                                                  alt="imge 2"
                                                />
                                              </Link>
                                              <div class="product-action text-center">
                                                <Link
                                                  title="Shoppingb Cart"
                                                  onClick={() =>
                                                    handleSendProduct(
                                                      item.id - 1
                                                    )
                                                  }
                                                >
                                                  <i class="fas fa-shopping-cart"></i>
                                                </Link>
                                                <Link
                                                  onClick={() =>
                                                    handleOpen(index)
                                                  }
                                                  title="Quick View"
                                                >
                                                  <i class="fas fa-eye"></i>
                                                </Link>
                                                <Link
                                                  data-toggle="tooltip"
                                                  data-placement="right"
                                                  title="Compare"
                                                  class=""
                                                >
                                                  <i class="fas fa-compress-alt"></i>
                                                </Link>
                                              </div>
                                              <div class="sale-tag">
                                                {item.new ? (
                                                  <span class="new">new</span>
                                                ) : null}

                                                {item.sale ? (
                                                  <span class="sale">sale</span>
                                                ) : null}
                                              </div>
                                            </div>
                                            <div class="product-content">
                                              <div class="pro-cat mb-10">
                                                <Link to={`/shop/${item.id}`}>
                                                  {item.brand}
                                                </Link>
                                              </div>
                                              <h4>
                                                <Link to={`/shop/${item.id}`}>
                                                  {item.title}
                                                </Link>
                                              </h4>
                                              <div class="product-meta">
                                                <div class="pro-price">
                                                  <span>${item.price} USD</span>
                                                </div>
                                              </div>
                                              <div class="product-wishlist">
                                                <Link class="  ">
                                                  <i
                                                    class="far fa-heart"
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
                    class={
                      idTab === 3
                        ? "fade tab-pane active show"
                        : "fade tab-pane"
                    }
                  >
                    {jewelery.length ? (
                      <div class="product-slider owl-carousel">
                        <div class="slick-slider slick-initialized">
                          <div className="slick-list">
                            <div
                              className="slick-track slick-track-brand-new-products"
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
                                        class="slick-slide slick-active slick-current slick-slide-brand-new-products"
                                        tabindex="-1"
                                        aria-hidden="false"
                                        style={{
                                          outline: "none",
                                        }}
                                      >
                                        <div>
                                          <div class="product-wrapper mb-50 ">
                                            <div class="product-img mb-25">
                                              <Link to={`/shop/${item.id}`}>
                                                <img
                                                  src={item.image}
                                                  alt="img 1"
                                                />
                                                <img
                                                  class="secondary-img"
                                                  src={item.hoverImage}
                                                  alt="imge 2"
                                                />
                                              </Link>
                                              <div class="product-action text-center">
                                                <Link
                                                  title="Shoppingb Cart"
                                                  onClick={() =>
                                                    handleSendProduct(
                                                      item.id - 1
                                                    )
                                                  }
                                                >
                                                  <i class="fas fa-shopping-cart"></i>
                                                </Link>
                                                <Link
                                                  onClick={() =>
                                                    handleOpen(index)
                                                  }
                                                  title="Quick View"
                                                >
                                                  <i class="fas fa-eye"></i>
                                                </Link>
                                                <Link
                                                  data-toggle="tooltip"
                                                  data-placement="right"
                                                  title="Compare"
                                                  class=""
                                                >
                                                  <i class="fas fa-compress-alt"></i>
                                                </Link>
                                              </div>
                                              <div class="sale-tag">
                                                {item.new ? (
                                                  <span class="new">new</span>
                                                ) : null}

                                                {item.sale ? (
                                                  <span class="sale">sale</span>
                                                ) : null}
                                              </div>
                                            </div>
                                            <div class="product-content">
                                              <div class="pro-cat mb-10">
                                                <Link to={`/shop/${item.id}`}>
                                                  {item.brand}
                                                </Link>
                                              </div>
                                              <h4>
                                                <Link to={`/shop/${item.id}`}>
                                                  {item.title}
                                                </Link>
                                              </h4>
                                              <div class="product-meta">
                                                <div class="pro-price">
                                                  <span>${item.price} USD</span>
                                                </div>
                                              </div>
                                              <div class="product-wishlist">
                                                <Link class="  ">
                                                  <i
                                                    class="far fa-heart"
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
                    class={
                      idTab === 4
                        ? "fade tab-pane active show"
                        : "fade tab-pane"
                    }
                  >
                    {electronics.length ? (
                      <div class="product-slider owl-carousel">
                        <div class="slick-slider slick-initialized">
                          <div className="slick-list">
                            <div
                              className="slick-track slick-track-brand-new-products"
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
                                        class="slick-slide slick-active slick-current slick-slide-brand-new-products"
                                        tabindex="-1"
                                        aria-hidden="false"
                                        style={{
                                          outline: "none",
                                        }}
                                      >
                                        <div>
                                          <div class="product-wrapper mb-50 ">
                                            <div class="product-img mb-25">
                                              <Link to={`/shop/${item.id}`}>
                                                <img
                                                  src={item.image}
                                                  alt="img 1"
                                                />
                                                <img
                                                  class="secondary-img"
                                                  src={item.hoverImage}
                                                  alt="imge 2"
                                                />
                                              </Link>
                                              <div class="product-action text-center">
                                                <Link
                                                  title="Shoppingb Cart"
                                                  onClick={() =>
                                                    handleSendProduct(
                                                      item.id - 1
                                                    )
                                                  }
                                                >
                                                  <i class="fas fa-shopping-cart"></i>
                                                </Link>
                                                <Link
                                                  onClick={() =>
                                                    handleOpen(index)
                                                  }
                                                  title="Quick View"
                                                >
                                                  <i class="fas fa-eye"></i>
                                                </Link>
                                                <Link
                                                  data-toggle="tooltip"
                                                  data-placement="right"
                                                  title="Compare"
                                                  class=""
                                                >
                                                  <i class="fas fa-compress-alt"></i>
                                                </Link>
                                              </div>
                                              <div class="sale-tag">
                                                {item.new ? (
                                                  <span class="new">new</span>
                                                ) : null}

                                                {item.sale ? (
                                                  <span class="sale">sale</span>
                                                ) : null}
                                              </div>
                                            </div>
                                            <div class="product-content">
                                              <div class="pro-cat mb-10">
                                                <Link to={`/shop/${item.id}`}>
                                                  {item.brand}
                                                </Link>
                                              </div>
                                              <h4>
                                                <Link to={`/shop/${item.id}`}>
                                                  {item.title}
                                                </Link>
                                              </h4>
                                              <div class="product-meta">
                                                <div class="pro-price">
                                                  <span>${item.price} USD</span>
                                                </div>
                                              </div>
                                              <div class="product-wishlist">
                                                <Link class="  ">
                                                  <i
                                                    class="far fa-heart"
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
              <div class="fade modal-backdrop show"></div>
              <div
                role="dialog"
                aria-modal="true"
                class="fade modal show"
                tabindex="-1"
                style={{
                  display: "block",
                  paddingLeft: "16px",
                  maxHeight: "100%",
                  overflowY: "auto",
                }}
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body">
                      <div class="row">
                        <div class="col-xl-6 col-lg-6">
                          <div class="product-details-img mb-10">
                            <div id="myTabContentpro" class="tab-content">
                              <div
                                role="tabpanel"
                                aria-hidden="false"
                                class="fade tab-pane active show"
                              >
                                <div class="product-large-img">
                                  <img
                                    src={products[modalValue.current].image}
                                    alt="tum"
                                  />
                                </div>
                              </div>
                              <div
                                role="tabpanel"
                                aria-hidden="true"
                                class="fade tab-pane"
                              >
                                <div class="product-large-img">
                                  <img
                                    src={products[modalValue.current].navImage}
                                    alt="tum"
                                  />
                                </div>
                              </div>
                              <div
                                role="tabpanel"
                                aria-hidden="true"
                                class="fade tab-pane"
                              >
                                <div class="product-large-img">
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
                          <div class="shop-thumb-tab ">
                            <ul class="nav" role="tablist">
                              <li class="nav-item">
                                <Link
                                  href="#"
                                  role="tab"
                                  data-rb-event-key="tum-0"
                                  aria-selected="true"
                                  class="nav-link active"
                                >
                                  <img
                                    src={products[modalValue.current].image}
                                    alt="Tum"
                                  />{" "}
                                </Link>
                              </li>
                              <li class="nav-item">
                                <Link
                                  href="#"
                                  role="tab"
                                  data-rb-event-key="tum-1"
                                  aria-selected="false"
                                  class="nav-link"
                                >
                                  <img
                                    src={products[modalValue.current].navImage}
                                    alt="Tum"
                                  />{" "}
                                </Link>
                              </li>
                              <li class="nav-item">
                                <Link
                                  href="#"
                                  role="tab"
                                  data-rb-event-key="tum-2"
                                  aria-selected="false"
                                  class="nav-link"
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
                        <div class="col-xl-6 col-lg-6">
                          <div class="product-details ">
                            <div class="details-cat mb-10 d-flex align-items-center justify-content-between">
                              <div>
                                <Link href="#">
                                  {products[modalValue.current].category}
                                </Link>
                              </div>
                              <i
                                class="fa fa-times modal-icon "
                                onClick={handleClose}
                              ></i>
                            </div>
                            <h2 class="pro-details-title mb-15 fs-30">
                              {products[modalValue.current].title}
                            </h2>
                            <div class="details-price mb-10 fs-25">
                              <span>
                                ${products[modalValue.current].price} USD
                              </span>
                              {products[modalValue.current].oldPrice ? (
                                <span class="old-price">
                                  ${products[modalValue.current].oldPrice} USD
                                </span>
                              ) : null}
                            </div>
                            <div class="product-variant ">
                              <div class="product-color variant-item modal-p-15">
                                <div class="variant-name">
                                  <span>Colors</span>
                                </div>
                                <ul class="shop-link shop-color">
                                  <li>
                                    <Link href="#">
                                      <span
                                        class={products[
                                          modalValue.current
                                        ].color.toLowerCase()}
                                      ></span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div class="product-size variant-item modal-p-15">
                                <div class="variant-name">
                                  <span>size</span>
                                </div>
                                <ul class="shop-link shop-size">
                                  <li
                                    class={
                                      products[modalValue.current].size === "l"
                                        ? "active"
                                        : " "
                                    }
                                  >
                                    <Link href="#">L</Link>
                                  </li>
                                  <li
                                    class={
                                      products[modalValue.current].size === "m"
                                        ? "active"
                                        : " "
                                    }
                                  >
                                    <Link href="#">M</Link>
                                  </li>
                                  <li
                                    class={
                                      products[modalValue.current].size === "x"
                                        ? "active"
                                        : " "
                                    }
                                  >
                                    <Link href="#">X</Link>
                                  </li>
                                  <li
                                    class={
                                      products[modalValue.current].size === "xl"
                                        ? "active"
                                        : " "
                                    }
                                  >
                                    <Link href="#">XL</Link>
                                  </li>
                                  <li
                                    class={
                                      products[modalValue.current].size ===
                                      "xxl"
                                        ? "active"
                                        : " "
                                    }
                                  >
                                    <Link href="#">XXL</Link>
                                  </li>
                                </ul>
                              </div>
                              <div class="product-desc variant-item modal-p-15">
                                <p>
                                  {products[modalValue.current].description}
                                </p>
                              </div>
                              <div class="product-info-list variant-item modal-p-15">
                                <ul>
                                  <li class="text-capitalize">
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
                                    <span class="in-stock">Out Of Stock</span>
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
