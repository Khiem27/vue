import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SliderIndex4 from '../../Components/Slider/SliderIndex4';
import HeaderST3 from '../../Components/Header/HeaderST3';
import BannerHome4 from '../../Components/Banner/Home4/BannerHome4';
import BrandNewProducts from '../../Components/BrandNewProducts/BrandNewProducts';
import SpecialFeatues from '../../Components/SpecialFeatures/SpecialFeatues';
import NewFeedsHome4 from '../../Components/NewsFeeds/NewFeedsHome4';
import FooterHome from '../../Components/Footer/FooterHome';
import InstagramArea from '../../Components/InstagramArea/InstagramArea';

Home4.propTypes = {
    
};

function Home4(props) {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <>
            <header class="transparent-header transparent-header-2">
                <HeaderST3 />
            </header>
            <main>
                <SliderIndex4 />
                <BannerHome4 />
                <BrandNewProducts />
                <SpecialFeatues />
                <NewFeedsHome4 />
                <InstagramArea />
            </main>
            <FooterHome />
        </>
    );
}

export default Home4;