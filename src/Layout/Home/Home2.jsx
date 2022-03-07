import React, { useEffect } from 'react';
import BannerHome2 from '../../Components/Banner/Home2/BannerHome2';
import BrandNewProducts from '../../Components/BrandNewProducts/BrandNewProducts';
import FooterHome from '../../Components/Footer/FooterHome';
import Header from '../../Components/Header/Header';
import NewsFeedsHome2 from '../../Components/NewsFeeds/NewsFeedsHome2';
import SliderIndex2 from '../../Components/Slider/SliderIndex2';
import SpecialFeatues from '../../Components/SpecialFeatures/SpecialFeatues';
import Subcribe from '../../Components/Subcribe/Subcribe';

Home2.propTypes = {
    
};

function Home2(props) {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <>
        <header className='transparent-header'>
            <Header />
        </header>
        <main>
            <SliderIndex2 />
            <BannerHome2 />
            <BrandNewProducts />
            <SpecialFeatues />
            <NewsFeedsHome2 />
            <Subcribe />
            <FooterHome />
        </main>
        </>
    );
}

export default Home2;