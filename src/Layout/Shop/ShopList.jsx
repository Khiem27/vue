import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShopBanner from '../../Components/Banner/Shop/ShopBanner';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ShopPageTitle from '../../Components/PageTitle/Shop/ShopPageTitle';
import ProductsBrandFilter from '../../Components/ProductsBrandFilter/ProductsBrandFilter';
import ProductFilterCategories from '../../Components/ProductsCategoriesFilter/ProductFilterCategories';
import ProductsColorFilter from '../../Components/ProductsColorFilter/ProductsColorFilter';
import ProductsGrid2Column from '../../Components/ProductsGrid/ProductsGrid2Column/ProductsGrid2Column';
import ProductsListFull from '../../Components/ProductsList/ProductsListFull';
import ProductsSizeFilter from '../../Components/ProductsSizeFilter/ProductsSizeFilter';
import ProductsTagsFilter from '../../Components/ProductsTagsFilter/ProductsTagsFilter';
import ProductSearch from '../../Components/Search/ProductSearch';
import ShopNavList from '../../Components/ShopNav/ShopNavList';
import { changeCol3Nav } from '../../Components/ShopNav/ShopNavSlice';
import ShowingResult from '../../Components/Showing/ShowingResult';

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