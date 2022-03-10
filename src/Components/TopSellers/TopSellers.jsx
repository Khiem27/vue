import React from "react";
import { Link } from "react-router-dom";

TopSellers.propTypes = {};

function TopSellers(props) {
  return (
    <section className="top-seller-area box-90">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-8 col-md-7">
            <div className="area-title mb-50">
              <h2>Top Sellers</h2>
              <p>Browse the huge variety of our products</p>
            </div>
          </div>
          <div className="col-xl-7 col-lg-4 col-md-5">
            <div className="vue-btn text-left text-md-right mb-50">
              <Link className="btn theme-btn" to="/shop">
                Collection
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="top-seller mb-50">
              <img
                src="https://vue-plum-chi.vercel.app/img/banner/top-seller/banner1.jpg"
                alt="Product"
              />
              <div className="seller-box text-center">
                <div className="top-seller-content text-left">
                  <h2>
                    <Link to="/shop">Minimal Home Decor</Link>
                  </h2>
                  <div className="pro-price mb-25">
                    <span>$207.00 USD</span>
                    <span className="old-price">$230.00 USD</span>
                  </div>
                  <div className="top-seller-btn">
                    <Link className="btn theme-btn" to="/shop">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="top-seller text-right mb-50">
              <img
                src="https://vue-plum-chi.vercel.app/img/banner/top-seller/banner2.jpg"
                alt="topseller"
              />
              <div className="sellet-2-content">
                <h2>
                  <Link to="/shop">Xcross Comoer Furniture</Link>
                </h2>
                <div className="pro-price mb-25">
                  <span>$ 207.00 USD</span>
                  <span className="old-price">$230.00 USD</span>
                </div>
                <div className="top-seller-btn">
                  <Link className="btn theme-btn-2 mr-20" to="/shop">
                    view details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopSellers;
