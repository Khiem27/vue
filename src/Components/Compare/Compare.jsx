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
        <section className="cart-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="#">
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Images</th>
                          <th className="cart-product-name">Product</th>
                          <th className="product-price">Brand</th>
                          <th className="product-subtotal">Unit Price</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {compareItemSlice.map((item) => {
                          return (
                            <tr>
                              <td className="product-thumbnail">
                                <Link to="#">
                                  <img src={item.image} alt="cart" />
                                </Link>
                              </td>
                              <td className="product-name">
                                <Link to="#">{item.title}</Link>
                              </td>
                              <td>
                                <Link to="#" className="text-capitalize">
                                  {item.brand}
                                </Link>
                              </td>
                              <td className="product-price">
                                <span className="amount">${item.price}</span>
                              </td>
                              <td className="product-remove">
                                <Link
                                  to="#"
                                  onClick={() => handleRemoveItem(item.id)}
                                >
                                  <i className="fa fa-times"></i>
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
        <h2 className="pt-100 pb-50 text-center w-100">No Product Found</h2>
      )}
      <Footer />
    </>
  );
}

export default Compare;
