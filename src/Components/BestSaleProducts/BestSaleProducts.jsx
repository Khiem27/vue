import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import ProductApi from "../../Api/Product/ProductApi";
import { useEffect } from "react";
import { addToCart } from "../AddToCart/AddToCartSlice";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";

// Modal Start
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import AddToCart from "../AddToCart/AddToCart";

const style = {
  top: "50%",
  left: "50%",
  overflow: "scroll",
  display: "block",
  height: "100%",
  "max-width": "70%",
  width: "100%",
  margin: "1.75rem auto",
  border: 0,
  outline: "none",
};

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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
// Modal End

function BestSaleNewProducts(props) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [idTab, setIdTab] = useState(1);
  const [products, setProducts] = useState(null);
  const [trans, setTrans] = useState(-1312);

  const [mens, setMens] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [electronics, setElectronics] = useState([]);

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
  }, []);

  const handleActiveTabs = (id, event) => {
    setIdTab(id);
  };

  const handleTrans = (action) => {
    if (trans == -5248) {
      setTrans(0);
    }

    if (trans == 0) {
      setTrans(-5248);
    }

    if (trans !== -5248 && action === "next") {
      setTrans(trans - 328);
    } else if (trans !== 0 && action === "prev") {
      setTrans(trans + 328);
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

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

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
                    <a
                      onClick={() => handleActiveTabs(1)}
                      id="home-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                      href="javascript:void(0)"
                      data-rb-event-key="all"
                      class={
                        idTab === 1
                          ? "nav-link nav-link active"
                          : "nav-link nav-link"
                      }
                    >
                      all
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      onClick={() => handleActiveTabs(2)}
                      id="profile-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                      href="javascript:void(0)"
                      data-rb-event-key="furniture"
                      class={
                        idTab === 2
                          ? "nav-link nav-link active"
                          : "nav-link nav-link"
                      }
                    >
                      Men's Clothing
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      onClick={() => handleActiveTabs(3)}
                      id="contact-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                      href="javascript:void(0)"
                      data-rb-event-key="gent"
                      class={
                        idTab === 3
                          ? "nav-link nav-link active"
                          : "nav-link nav-link"
                      }
                    >
                      Jewelery
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      onClick={() => handleActiveTabs(4)}
                      id="contact-tab1"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                      href="javascript:void(0)"
                      data-rb-event-key="ladies"
                      class={
                        idTab === 4
                          ? "nav-link nav-link active"
                          : "nav-link nav-link"
                      }
                    >
                      Electronics
                    </a>
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
                        <div className="slick-list">
                          <div
                            className="slick-track"
                            style={{
                              width: "11152px",
                              opacity: "1",
                              transform: `translate3d(${trans}px, 0px, 0px)`,
                              transition: "500ms ease 0s",
                            }}
                          >
                            {products
                              ? products.map((item, index) => {
                                  return (
                                    <div
                                      data-index="0"
                                      class="slick-slide slick-active slick-current"
                                      key={index}
                                      tabindex="-1"
                                      aria-hidden="false"
                                      style={{
                                        outline: "none",
                                        width: "328px",
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
                                              <a
                                                href="javascript:void(0)"
                                                title="Shoppingb Cart"
                                                onClick={() =>
                                                  handleSendProduct(item.id - 1)
                                                }
                                              >
                                                <i class="fas fa-shopping-cart"></i>
                                              </a>
                                              <a
                                                href="javascript:void(0)"
                                                onClick={() =>
                                                  handleOpen(index)
                                                }
                                                title="Quick View"
                                              >
                                                <i class="fas fa-eye"></i>
                                              </a>
                                              <a
                                                href="javascript:void(0)"
                                                data-toggle="tooltip"
                                                data-placement="right"
                                                title="Compare"
                                                class=""
                                              >
                                                <i class="fas fa-compress-alt"></i>
                                              </a>
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
                                              <a
                                                href="javascript:void(0)"
                                                class="  "
                                              >
                                                <i
                                                  class="far fa-heart"
                                                  title="Wishlist"
                                                ></i>
                                              </a>
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
                              className="slick-track"
                              style={{
                                width: "11152px",
                                opacity: "1",
                                transform: `translate3d(0 px, 0px, 0px)`,
                              }}
                            >
                              {mens
                                ? mens.map((item, index) => {
                                    return (
                                      <div
                                        data-index="0"
                                        class="slick-slide slick-active slick-current"
                                        tabindex="-1"
                                        aria-hidden="false"
                                        style={{
                                          outline: "none",
                                          width: "328px",
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
                                                <a
                                                  href="javascript:void(0)"
                                                  title="Shoppingb Cart"
                                                  onClick={() =>
                                                    handleSendProduct(item.id - 1)
                                                  }
                                                >
                                                  <i class="fas fa-shopping-cart"></i>
                                                </a>
                                                <a
                                                  href="javascript:void(0)"
                                                  onClick={() =>
                                                    handleOpen(index)
                                                  }
                                                  title="Quick View"
                                                >
                                                  <i class="fas fa-eye"></i>
                                                </a>
                                                <a
                                                  href="javascript:void(0)"
                                                  data-toggle="tooltip"
                                                  data-placement="right"
                                                  title="Compare"
                                                  class=""
                                                >
                                                  <i class="fas fa-compress-alt"></i>
                                                </a>
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
                                                <a
                                                  href="javascript:void(0)"
                                                  class="  "
                                                >
                                                  <i
                                                    class="far fa-heart"
                                                    title="Wishlist"
                                                  ></i>
                                                </a>
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
                              className="slick-track"
                              style={{
                                width: "11152px",
                                opacity: "1",
                                transform: `translate3d(0 px, 0px, 0px)`,
                              }}
                            >
                              {jewelery
                                ? jewelery.map((item, index) => {
                                    return (
                                      <div
                                        data-index="0"
                                        class="slick-slide slick-active slick-current"
                                        tabindex="-1"
                                        aria-hidden="false"
                                        style={{
                                          outline: "none",
                                          width: "328px",
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
                                                <a
                                                  href="javascript:void(0)"
                                                  title="Shoppingb Cart"
                                                  onClick={() =>
                                                    handleSendProduct(item.id - 1)
                                                  }
                                                >
                                                  <i class="fas fa-shopping-cart"></i>
                                                </a>
                                                <a
                                                  href="javascript:void(0)"
                                                  onClick={() =>
                                                    handleOpen(index)
                                                  }
                                                  title="Quick View"
                                                >
                                                  <i class="fas fa-eye"></i>
                                                </a>
                                                <a
                                                  href="javascript:void(0)"
                                                  data-toggle="tooltip"
                                                  data-placement="right"
                                                  title="Compare"
                                                  class=""
                                                >
                                                  <i class="fas fa-compress-alt"></i>
                                                </a>
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
                                                <a
                                                  href="javascript:void(0)"
                                                  class="  "
                                                >
                                                  <i
                                                    class="far fa-heart"
                                                    title="Wishlist"
                                                  ></i>
                                                </a>
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
                              className="slick-track"
                              style={{
                                width: "11152px",
                                opacity: "1",
                                transform: `translate3d(0 px, 0px, 0px)`,
                              }}
                            >
                              {electronics
                                ? electronics.map((item, index) => {
                                    return (
                                      <div
                                        data-index="0"
                                        class="slick-slide slick-active slick-current"
                                        tabindex="-1"
                                        aria-hidden="false"
                                        style={{
                                          outline: "none",
                                          width: "328px",
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
                                                <a
                                                  href="javascript:void(0)"
                                                  title="Shoppingb Cart"
                                                  onClick={() =>
                                                    handleSendProduct(item.id - 1)
                                                  }
                                                >
                                                  <i class="fas fa-shopping-cart"></i>
                                                </a>
                                                <a
                                                  href="javascript:void(0)"
                                                  onClick={() =>
                                                    handleOpen(index)
                                                  }
                                                  title="Quick View"
                                                >
                                                  <i class="fas fa-eye"></i>
                                                </a>
                                                <a
                                                  href="javascript:void(0)"
                                                  data-toggle="tooltip"
                                                  data-placement="right"
                                                  title="Compare"
                                                  class=""
                                                >
                                                  <i class="fas fa-compress-alt"></i>
                                                </a>
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
                                                <a
                                                  href="javascript:void(0)"
                                                  class="  "
                                                >
                                                  <i
                                                    class="far fa-heart"
                                                    title="Wishlist"
                                                  ></i>
                                                </a>
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
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {modalValue.current || modalValue.current === 0 ? (
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-body">
                    <div className="row-modal">
                      <div class="col-xl-6 col-lg-6 col-lg-6-fix">
                        <Box
                          sx={{
                            bgcolor: "background.paper",
                            width: 500,
                            flexGrow: 1,
                          }}
                        >
                          <SwipeableViews
                            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                          >
                            <TabPanel
                              value={value}
                              index={0}
                              dir={theme.direction}
                            >
                              <div class="product-large-img">
                                <img
                                  src={products[modalValue.current].image}
                                  alt=""
                                />
                              </div>
                            </TabPanel>

                            <TabPanel
                              value={value}
                              index={1}
                              dir={theme.direction}
                            >
                              <div class="product-large-img">
                                <img
                                  src={products[modalValue.current].navImage}
                                  alt=""
                                />
                              </div>
                            </TabPanel>
                            <TabPanel
                              value={value}
                              index={2}
                              dir={theme.direction}
                            >
                              <div class="product-large-img">
                                <img
                                  src={products[modalValue.current].hoverImage}
                                  alt=""
                                />
                              </div>
                            </TabPanel>
                          </SwipeableViews>
                          <AppBar position="static">
                            <Tabs
                              value={value}
                              onChange={handleChange}
                              indicatorColor="secondary"
                              textColor="inherit"
                              variant="fullWidth"
                              aria-label="full width tabs example"
                            >
                              <Tab
                                label={
                                  <div>
                                    <img
                                      src={products[modalValue.current].image}
                                      alt=""
                                    />
                                  </div>
                                }
                                {...a11yProps(0)}
                              />
                              <Tab
                                label={
                                  <div>
                                    <img
                                      src={
                                        products[modalValue.current].navImage
                                      }
                                      alt=""
                                    />
                                  </div>
                                }
                                {...a11yProps(1)}
                              />
                              <Tab
                                label={
                                  <div>
                                    <img
                                      src={
                                        products[modalValue.current].hoverImage
                                      }
                                      alt=""
                                    />
                                  </div>
                                }
                                {...a11yProps(2)}
                              />
                            </Tabs>
                          </AppBar>
                        </Box>
                      </div>
                      <div class="col-xl-6 col-lg-6">
                        <div class="product-details ">
                          <div class="details-cat mb-10 d-flex align-items-center justify-content-between">
                            <div>
                              <a href="javascript:void(0)">
                                {products[modalValue.current].category}
                              </a>
                            </div>
                            <i
                              onClick={handleClose}
                              class="fa fa-times modal-icon "
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
                                  <a href="javascript:void(0)">
                                    <span
                                      class={products[
                                        modalValue.current
                                      ].color.toLowerCase()}
                                    ></span>
                                  </a>
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
                                  <a href="javascript:void(0)">L</a>
                                </li>
                                <li
                                  class={
                                    products[modalValue.current].size === "m"
                                      ? "active"
                                      : " "
                                  }
                                >
                                  <a href="javascript:void(0)">M</a>
                                </li>
                                <li
                                  class={
                                    products[modalValue.current].size === "x"
                                      ? "active"
                                      : " "
                                  }
                                >
                                  <a href="javascript:void(0)">X</a>
                                </li>
                                <li
                                  class={
                                    products[modalValue.current].size === "xl"
                                      ? "active"
                                      : " "
                                  }
                                >
                                  <a href="javascript:void(0)">XL</a>
                                </li>
                                <li
                                  class={
                                    products[modalValue.current].size === "xxl"
                                      ? "active"
                                      : " "
                                  }
                                >
                                  <a href="javascript:void(0)">XXL</a>
                                </li>
                              </ul>
                            </div>
                            <div class="product-desc variant-item modal-p-15">
                              <p>{products[modalValue.current].description}</p>
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
                           <AddToCart productInfo = {products[modalValue.current]}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default BestSaleNewProducts;
