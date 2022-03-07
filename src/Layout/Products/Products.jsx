import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ShopPageTitle from '../../Components/PageTitle/Shop/ShopPageTitle';
import ShowingResult from '../../Components/Showing/ShowingResult';
import ShopNav from '../../Components/ShopNav/ShopNav';
import ProductsGrid3Column from '../../Components/ProductsGrid/ProductsGrid3Column/ProductsGrid3Column';
import ProductsList from '../../Components/ProductsList/ProductsList';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../Components/Footer/Footer';
import { changeCol3Nav } from '../../Components/ShopNav/ShopNavSlice';
import Header from '../../Components/Header/Header';



Products.propTypes = {
    
};

function Products(props) {
    const column = useSelector((state) => state.shopNav.col3Nav)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(changeCol3Nav(3))
    }, [])

    return (
        <>
            <Header />
            <ShopPageTitle />
            <section class="shop-area pt-100 pb-100">
                <div class="container">
                    <div className="row">
                        <div class="col-xl-12">
                            <div className="row">
                                <ShowingResult />
                                <ShopNav />
                            </div>
                            {
                                column === 3 ? 
                                    <ProductsGrid3Column />
                                : column === 1 ?
                                    <ProductsList />
                                : null
                            }
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    );
}

export default Products;