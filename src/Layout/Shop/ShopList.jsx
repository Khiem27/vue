import React, { useRef, useState, useEffect } from 'react';
import ShowingResult from '../../Components/Showing/ShowingResult';
import ShopNav from '../../Components/ShopNav/ShopNav';
import { useSelector, useDispatch } from 'react-redux';
import { changeCol3Nav } from '../../Components/ShopNav/ShopNavSlice';
import ProductSearch from '../../Components/Search/ProductSearch';
import ProductsGrid3Column from '../../Components/ProductsGrid/ProductsGrid3Column/ProductsGrid3Column';
import ProductsList from '../../Components/ProductsList/ProductsList';
import ProductFilterCategories from '../../Components/ProductsCategoriesFilter/ProductFilterCategories';
import ShopPageTitle from '../../Components/PageTitle/Shop/ShopPageTitle';
import ShopCol3Banner from '../../Components/Banner/Shop/ShopCol3Banner';
import Footer from '../../Components/Footer/Footer';
import ScrollUp from '../../Components/ScrollUp/ScrollUp';
import WishlistContainer from '../../Components/Wishlist Container/WishlistContainer';
import WishlistContainerCompare from '../../Components/Wishlist Container/WishlistContainerCompare';
import ProductsBrandFilter from '../../Components/ProductsBrandFilter/ProductsBrandFilter';
import ProductsSizeFilter from '../../Components/ProductsSizeFilter/ProductsSizeFilter';
import ProductsTagsFilter from '../../Components/ProductsTagsFilter/ProductsTagsFilter';
import ProductsColorFilter from '../../Components/ProductsColorFilter/ProductsColorFilter';
import ShopBanner from '../../Components/Banner/Shop/ShopBanner';
import ProductsGrid2Column from '../../Components/ProductsGrid/ProductsGrid2Column/ProductsGrid2Column';
import ShopNavList from '../../Components/ShopNav/ShopNavList';
import ProductsListFull from '../../Components/ProductsList/ProductsListFull';
import Header from '../../Components/Header/Header';

function ShopList(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(changeCol3Nav(1))
    }, [])

    const column = useSelector((state) => state.shopNav.col3Nav)

    return (
        <div className='shop-col3'>
            <Header />
            <ShopPageTitle />
            <div className="shop-col3-shop-area">
                <div className="container">
                    <div className="row">
                        <div className="shop-col3-shop-area-content col-xl-8 col-lg-8">
                            <ShopBanner />
                            <div className="shop-col3-products">
                                <div class="row">
                                    <ShowingResult />
                                    <ShopNavList />
                                </div>
                                {
                                    column === 3 ? 
                                        <ProductsGrid2Column />
                                    : column === 1 ?
                                        <ProductsListFull />
                                    : null
                                }
                            </div>
                        </div>
                        <div className="shop-col3-shop-area-nav">
                            <div class="col-xl-4 col-lg-4 col-xl-4-fix">
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
            </div>
            <Footer />
        </div>
    );
}

export default ShopList;