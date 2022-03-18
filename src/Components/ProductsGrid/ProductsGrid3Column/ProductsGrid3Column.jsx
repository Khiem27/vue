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
import AddToCompare from "../../AddToCompare/AddToCompare";
import AddToWishlist from "../../AddToWishlist/AddToWishlist";
import Pagination from "../../Pagination/Pagination";
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

  // Pagination
  const [posts, setPosts] = useState([]);
  // Trang mặc đinh
  const [currentPage, setCurrentPage] = useState(1);
  // Số products/trang
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Active pagination
  const [indexPagination, setIndexPagination] = useState(0);
  const handleActivePagination = (action) => {
    if (action === "increase") {
      setIndexPagination(indexPagination + 1);
    } else if (action === "decrease") {
      setIndexPagination(indexPagination - 1);
    } else {
      setIndexPagination(action);
    }
  };

  // Pagination end

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

      // Pagination
      let arrPagination = newArr;
      arrPagination = arrPagination.slice(indexOfFirstPost, indexOfLastPost);
      setPosts(arrPagination);
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
    indexOfFirstPost,
    indexOfLastPost,
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
      <div className="fade tab-pane active show">
        <div className="row">
          <CheckSearchErro />
          {posts
            ? posts.map((item, index) => {
                return (
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 d-block"
                    key={index}
                  >
                    <div className="product-wrapper mb-50 p-0">
                      <div className="product-img mb-25">
                        <Link to={`/shop/${item.id}`}>
                          <img src={item.image} alt="" />
                          <img
                            className="secondary-img"
                            src={item.hoverImage}
                            alt=""
                          />
                        </Link>
                        <div className="product-action text-center">
                          <Link onClick={() => handleSendProduct(index)}>
                            <i className="fas fa-shopping-cart"></i>
                          </Link>
                          <Link onClick={() => handleOpen(index)}>
                            <i className="fas fa-eye"></i>
                          </Link>
                          <AddToCompare dataProduct={item} />
                        </div>
                        <div className="sale-tag">
                          {item.new ? <span className="new">new</span> : null}
                          {item.sale ? (
                            <span className="sale">sale</span>
                          ) : null}
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="pro-cat mb-10">
                          <Link to={`/shop/${item.id}`}>{item.category}</Link>
                        </div>
                        <h4>
                          <Link to={`/shop/${item.id}`}>{item.title}</Link>
                        </h4>
                        <div className="product-meta">
                          <div className="pro-price">
                            <span>${item.price} USD</span>
                            <span className="old-price">
                              ${item.oldPrice} USD
                            </span>
                          </div>
                        </div>
                        <div className="product-wishlist">
                          <AddToWishlist dataProduct={item} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
        {products ? (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={products.length}
            paginate={paginate}
            handleActivePagination={handleActivePagination}
            indexPagination={indexPagination}
          />
        ) : null}
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
              <div className="fade modal-backdrop show"></div>
              <div
                role="dialog"
                aria-modal="true"
                className="fade modal show"
                tabindex="-1"
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
                                    <span className="in-stock">
                                      Out Of Stock
                                    </span>
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
