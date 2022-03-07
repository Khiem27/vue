import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import ProductApi from "../../Api/Product/ProductApi";
import { useSelector, useDispatch } from "react-redux";
import CheckSearchErro from "../Search/CheckSearchErro";
import { newArrFilter } from "../Showing/ShowingResultSlice";
import { addToCart } from "../AddToCart/AddToCartSlice";
import { useSnackbar } from "notistack";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

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

function ProductsList(props) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);
  // Products sau khi search
  const productsSearchValue = useSelector(
    (state) => state.productSearch.searchValue
  );
  // Products sau khi filter categories
  const productsFilterCateValue = useSelector(
    (state) => state.filterCategory.value
  );
  // Products sau khi filter brand
  const productsFilterBrandValue = useSelector(
    (state) => state.filterBrand.value
  );
  // Products sau khi filter size
  const productsFilterSizeValue = useSelector(
    (state) => state.filterSize.value
  );
  // Products sau khi filter tags
  const productsFilterTagsValue = useSelector(
    (state) => state.filterTags.value
  );
  // Products sau khi filter color
  const productsFilterColorValue = useSelector(
    (state) => state.filterColor.value
  );

  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await ProductApi.getAll();
      const getProducts = allProducts.data;

      let newArr = getProducts;
      // Search
      if (productsSearchValue) {
        newArr = newArr.filter((item) =>
          item.title.toLowerCase().includes(productsSearchValue.toLowerCase())
        );
      }
      // Filter Categories
      if (productsFilterCateValue.length) {
        newArr = newArr.filter(
          (item) => item.category === productsFilterCateValue
        );
      }
      // Filter Brand
      if (productsFilterBrandValue.length) {
        newArr = newArr.filter(
          (item) => item.brand === productsFilterBrandValue
        );
      }
      // Filter Size
      if (productsFilterSizeValue.length) {
        newArr = newArr.filter((item) => item.size === productsFilterSizeValue);
      }
      // Filter Tags
      if (productsFilterTagsValue.length) {
        newArr = newArr.filter((item) => item.tags === productsFilterTagsValue);
      }
      // Filter Color
      if (productsFilterColorValue.length) {
        newArr = newArr.filter(
          (item) => item.color === productsFilterColorValue
        );
      }

      setProducts(newArr);
      dispatch(newArrFilter(newArr));
    };
    getAllProducts();
  }, [
    productsSearchValue,
    productsFilterCateValue,
    productsFilterBrandValue,
    productsFilterSizeValue,
    productsFilterTagsValue,
    productsFilterColorValue,
  ]);

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
      <div class="fade tab-pane active show">
        <CheckSearchErro />
        {products
          ? products.map((item, index) => {
              return (
                <div class="d-block" key={index}>
                  <div class="row">
                    <div class="col-xl-5 col-lg-5">
                      <div class="product-wrapper mb-30">
                        <div class="product-img">
                          <Link to={`/shop/${item.id}`}>
                            <img src={item.image} alt="" />
                            <img
                              class="secondary-img"
                              src={item.hoverImage}
                              alt=""
                            />
                          </Link>
                          <div class="sale-tag">
                            {item.new ? <span class="new">new</span> : null}

                            {item.sale ? <span class="sale">sale</span> : null}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-7 col-lg-7">
                      <div class="product-content pro-list-content pr-0 mb-50">
                        <div class="pro-cat mb-10">
                          <Link to={`/shop/${item.id}`}>{item.category}</Link>
                        </div>
                        <h4>
                          <Link to={`/shop/${item.id}`}>{item.title}</Link>
                        </h4>
                        <div class="product-meta mb-10">
                          <div class="pro-price">
                            <span>${item.price} USD</span>
                            <span class="old-price">${item.oldPrice} USD</span>
                          </div>
                        </div>
                        <p>{item.description}</p>
                        <div class="product-action">
                          <a
                            href="javascript:void(0)"
                            title="Shoppingb Cart"
                            onClick={() => handleSendProduct(index)}
                          >
                            <i class="fas fa-shopping-cart"></i>
                          </a>
                          <a onClick={() => handleOpen(index)}>
                            <i class="fas fa-eye"></i>
                          </a>
                          <a href="#" class="  ">
                            <i class="far fa-heart" title="Wishlist"></i>
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
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
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
                                    src={products[modalValue.current].navImage}
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
                            <a href="#">
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
                          <span>${products[modalValue.current].price} USD</span>
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
                                <a href="#">
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
                                <a href="#">L</a>
                              </li>
                              <li
                                class={
                                  products[modalValue.current].size === "m"
                                    ? "active"
                                    : " "
                                }
                              >
                                <a href="#">M</a>
                              </li>
                              <li
                                class={
                                  products[modalValue.current].size === "x"
                                    ? "active"
                                    : " "
                                }
                              >
                                <a href="#">X</a>
                              </li>
                              <li
                                class={
                                  products[modalValue.current].size === "xl"
                                    ? "active"
                                    : " "
                                }
                              >
                                <a href="#">XL</a>
                              </li>
                              <li
                                class={
                                  products[modalValue.current].size === "xxl"
                                    ? "active"
                                    : " "
                                }
                              >
                                <a href="#">XXL</a>
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
                         <AddToCart productInfo = {products[modalValue.current]}  />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </Box>
      </Modal>
    </>
  );
}

export default ProductsList;
