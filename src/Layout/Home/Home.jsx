import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../Components/Header/Header';
import HomeBanner from '../../Components/Banner/Home/HomeBanner';
import HomeSubBanner from '../../Components/Banner/Home/HomeSubBanner';
import BrandNewProducts from '../../Components/BrandNewProducts/BrandNewProducts';
import TopSellers from '../../Components/TopSellers/TopSellers';
import BestSaleProducts from '../../Components/BestSaleProducts/BestSaleProducts';
import UpcomingProduct from '../../Components/UpcomingProduct/UpcomingProduct';
import NewsFeeds from '../../Components/NewsFeeds/NewsFeeds';
import Subcribe from '../../Components/Subcribe/Subcribe';
import FooterHome from '../../Components/Footer/FooterHome';

Home.propTypes = {
    
};

function Home(props) {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <>
            <Header />
            <HomeBanner/>
            <HomeSubBanner/>
            <BrandNewProducts />
            <TopSellers />
            <BestSaleProducts />
            <UpcomingProduct />
            <NewsFeeds />
            <Subcribe />
            <FooterHome />
        </>
    );
}

export default Home;