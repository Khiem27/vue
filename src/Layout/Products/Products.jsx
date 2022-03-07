import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ShopPageTitle from '../../Components/PageTitle/Shop/ShopPageTitle';
import ProductsGrid3Column from '../../Components/ProductsGrid/ProductsGrid3Column/ProductsGrid3Column';
import ProductsList from '../../Components/ProductsList/ProductsList';
import ShopNav from '../../Components/ShopNav/ShopNav';
import { changeCol3Nav } from '../../Components/ShopNav/ShopNavSlice';
import ShowingResult from '../../Components/Showing/ShowingResult';



Products.propTypes = {
    
};

function Products(props) {
    const column = useSelector((state) => state.shopNav.col3Nav)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(changeCol3Nav(3))
    }, [dispatch])

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