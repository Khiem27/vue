import React from 'react';
import CheckoutArea from '../../../Components/CheckoutArea/CheckoutArea';
import CheckoutCouple from '../../../Components/CoupleArea/Checkout/CheckoutCouple';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import CheckoutTitle from '../../../Components/PageTitle/Checkout/CheckoutTitle';

Checkout.propTypes = {
    
};

function Checkout(props) {
    return (
        <>  
            <Header />
            <CheckoutTitle />
            <CheckoutCouple />
            <CheckoutArea />
            <Footer />
        </>
    );
}

export default Checkout;