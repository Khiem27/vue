import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFromLocal, removeCompare } from "../AddToCompare/AddToCompareSlice";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CompareTitle from "../PageTitle/Compare/CompareTitle";

Compare.propTypes = {};

function Compare(props) {
  const dispatch = useDispatch();

  const compareLocal = localStorage.getItem("compareProduct");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const compareData = JSON.parse(compareLocal);

    if (compareData) {
      const action = addFromLocal(compareData);
      dispatch(action);
    }
  }, [dispatch, compareLocal]);

  const compareItemSlice = useSelector((state) => state.addToCompare.products);

  const handleRemoveItem = (id) => {
    const action = removeCompare(id);
    dispatch(action);
  };

  return (
    <>
      <Header />
      <CompareTitle />

      {compareItemSlice.length !== 0 ? (
        <section class="cart-area pt-100 pb-100">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <form action="#">
                  <div class="table-content table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th class="product-thumbnail">Images</th>
                          <th class="cart-product-name">Product</th>
                          <th class="product-price">Brand</th>
                          <th class="product-subtotal">Unit Price</th>
                          <th class="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {compareItemSlice.map((item) => {
                          return (
                            <tr>
                              <td class="product-thumbnail">
                                <Link to="#">
                                  <img src={item.image} alt="cart" />
                                </Link>
                              </td>
                              <td class="product-name">
                                <Link to="#">{item.title}</Link>
                              </td>
                              <td>
                                <Link to="#" class="text-capitalize">
                                  {item.brand}
                                </Link>
                              </td>
                              <td class="product-price">
                                <span class="amount">${item.price}</span>
                              </td>
                              <td class="product-remove">
                                <Link
                                  to="#"
                                  onClick={() => handleRemoveItem(item.id)}
                                >
                                  <i class="fa fa-times"></i>
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h2 class="pt-100 pb-50 text-center w-100">No Product Found</h2>
      )}
      <Footer />
    </>
  );
}

export default Compare;
