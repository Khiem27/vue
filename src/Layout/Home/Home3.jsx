import React, { useEffect } from 'react';
import BrandNewProducts from '../../Components/BrandNewProducts/BrandNewProducts';
import Footer from '../../Components/Footer/Footer';
import HeaderST2 from '../../Components/Header/HeaderST2';
import NewsFeedsHome2 from '../../Components/NewsFeeds/NewsFeedsHome2';
import SliderIndex3 from '../../Components/Slider/SliderIndex3';
import Subcribe from '../../Components/Subcribe/Subcribe';
import UpcomingProduct2 from '../../Components/UpcomingProduct/UpcomingProduct2';

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