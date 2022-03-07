import React, { useEffect } from 'react';
import HomeBanner from '../../Components/Banner/Home/HomeBanner';
import HomeSubBanner from '../../Components/Banner/Home/HomeSubBanner';
import BestSaleProducts from '../../Components/BestSaleProducts/BestSaleProducts';
import BrandNewProducts from '../../Components/BrandNewProducts/BrandNewProducts';
import FooterHome from '../../Components/Footer/FooterHome';
import Header from '../../Components/Header/Header';
import NewsFeeds from '../../Components/NewsFeeds/NewsFeeds';
import Subcribe from '../../Components/Subcribe/Subcribe';
import TopSellers from '../../Components/TopSellers/TopSellers';
import UpcomingProduct from '../../Components/UpcomingProduct/UpcomingProduct';

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