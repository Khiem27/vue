import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShopCol3Banner from "../../Components/Banner/Shop/ShopCol3Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ShopPageTitle from "../../Components/PageTitle/Shop/ShopPageTitle";
import ProductsBrandFilter from "../../Components/ProductsBrandFilter/ProductsBrandFilter";
import ProductFilterCategories from "../../Components/ProductsCategoriesFilter/ProductFilterCategories";
import ProductsColorFilter from "../../Components/ProductsColorFilter/ProductsColorFilter";
import ProductsGrid3Column from "../../Components/ProductsGrid/ProductsGrid3Column/ProductsGrid3Column";
import ProductsList from "../../Components/ProductsList/ProductsList";
import ProductsSizeFilter from "../../Components/ProductsSizeFilter/ProductsSizeFilter";
import ProductsTagsFilter from "../../Components/ProductsTagsFilter/ProductsTagsFilter";
import ProductSearch from "../../Components/Search/ProductSearch";
import ShopNav from "../../Components/ShopNav/ShopNav";
import { changeCol3Nav } from "../../Components/ShopNav/ShopNavSlice";
import ShowingResult from "../../Components/Showing/ShowingResult";

function ShopCol3(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(changeCol3Nav(3));
  }, [dispatch]);

  const column = useSelector((state) => state.shopNav.col3Nav);

  return (
    <div className="shop-col3">
      <Header />
      <ShopPageTitle />
      <div className="shop-col3-shop-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <ShopCol3Banner />
              <div className="shop-col3-products">
                <div class="row">
                  <ShowingResult />
                  <ShopNav />
                </div>
                {column === 3 ? (
                  <ProductsGrid3Column />
                ) : column === 1 ? (
                  <ProductsList />
                ) : null}
              </div>
            </div>
            <div class="col-xl-4 col-lg-4">
              <div class="sidebar-box">
                <div class="shop-widget">
                  <h3 class="shop-title">Search by</h3>
                  <ProductSearch />
                </div>
                <div class="shop-widget">
                  <h3 class="shop-title">Catergories</h3>
                  <ProductFilterCategories />
                </div>
                <div class="shop-widget">
                  <h3 class="shop-title">Brand</h3>
                  <ProductsBrandFilter />
                </div>
                <div class="shop-widget">
                  <h3 class="shop-title">Product size</h3>
                  <ProductsSizeFilter />
                </div>

                <div class="shop-widget">
                  <h3 class="shop-title">Tags</h3>
                  <ProductsTagsFilter />
                </div>

                <div class="shop-widget">
                  <h3 class="shop-title">Color</h3>
                  <ProductsColorFilter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShopCol3;
