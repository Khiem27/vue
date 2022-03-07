import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import HeaderST2 from '../../Components/Header/HeaderST2';
import Footer from '../../Components/Footer/Footer';
import SliderIndex3 from '../../Components/Slider/SliderIndex3';
import BrandNewProducts from '../../Components/BrandNewProducts/BrandNewProducts';
import UpcomingProduct2 from '../../Components/UpcomingProduct/UpcomingProduct2';
import NewsFeedsHome2 from '../../Components/NewsFeeds/NewsFeedsHome2';
import Subcribe from '../../Components/Subcribe/Subcribe';

Home3.propTypes = {
    
};

function Home3(props) {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <>
            <HeaderST2 />
            <main>
                <SliderIndex3 />
                <BrandNewProducts />
                <UpcomingProduct2 />
                <NewsFeedsHome2 />
                <Subcribe />
            </main>
            <Footer />
        </>
    );
}

export default Home3;