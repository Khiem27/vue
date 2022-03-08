// Modal Start
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSnackbar } from "notistack";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductApi from "../../../Api/Product/ProductApi";
import AddToCart from "../../AddToCart/AddToCart";
import { addToCart } from "../../AddToCart/AddToCartSlice";
import CheckSearchErro from "../../Search/CheckSearchErro";
import { newArrFilter } from "../../Showing/ShowingResultSlice";

// Modal End

function ProductsGrid3Column(props) {
  const { enqueueSnackbar } = useSnackbar();
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
    dispatch,
  ]);

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
      <div class="fade tab-pane active show">
        <div className="row">
          <CheckSearchErro />
          {products
            ? products.map((item, index) => {
                return (
                  <div class="col-xl-4 col-lg-6 col-md-6 d-block" key={index}>
                    <div class="product-wrapper mb-50 p-0">
                      <div class="product-img mb-25">
                        <Link to={`/shop/${item.id}`}>
                          <img src={item.image} alt="" />
                          <img
                            class="secondary-img"
                            src={item.hoverImage}
                            alt=""
                          />
                        </Link>
                        <div class="product-action text-center">
                          <Link onClick={() => handleSendProduct(index)}>
                            <i class="fas fa-shopping-cart"></i>
                          </Link>
                          <Link onClick={() => handleOpen(index)}>
                            <i class="fas fa-eye"></i>
                          </Link>
                          <Link>
                            <i class="fas fa-compress-alt"></i>
                          </Link>
                        </div>
                        <div class="sale-tag">
                          {item.new ? <span class="new">new</span> : null}
                          {item.sale ? <span class="sale">sale</span> : null}
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="pro-cat mb-10">
                          <Link to={`/shop/${item.id}`}>{item.category}</Link>
                        </div>
                        <h4>
                          <Link to={`/shop/${item.id}`}>{item.title}</Link>
                        </h4>
                        <div class="product-meta">
                          <div class="pro-price">
                            <span>${item.price} USD</span>
                            <span class="old-price">${item.oldPrice} USD</span>
                          </div>
                        </div>
                        <div class="product-wishlist">
                          <Link class="  ">
                            <i class="far fa-heart" title="Wishlist"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
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

export default ProductsGrid3Column;
