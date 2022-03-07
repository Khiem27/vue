import React from 'react';
import PropTypes from 'prop-types';
import HeaderST2 from '../../Components/Header/HeaderST2';
import SliderIndex5 from '../../Components/Slider/SliderIndex5';
import BannerHome5 from '../../Components/Banner/Home5/BannerHome5';
import BrandNewProducts from '../../Components/BrandNewProducts/BrandNewProducts';
import FeaturesHome5 from '../../Components/Features/Home5/FeaturesHome5';
import NewFeedsHome4 from '../../Components/NewsFeeds/NewFeedsHome4';
import Subcribe from '../../Components/Subcribe/Subcribe';
import Footer from '../../Components/Footer/Footer';

Home5.propTypes = {
    
};

function Home5(props) {
    return (
        <>
            <HeaderST2 />
            <main>
                <SliderIndex5 />
                <BannerHome5 />
                <BrandNewProducts />
                <FeaturesHome5 />
                <NewFeedsHome4 />
                <Subcribe />
                <Footer />
            </main>
        </>
    );
}

export default Home5;