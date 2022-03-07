import React from 'react';
import PropTypes from 'prop-types';
import CheckoutTitle from '../../../Components/PageTitle/Checkout/CheckoutTitle';
import Header from '../../../Components/Header/Header';
import CheckoutCouple from '../../../Components/CoupleArea/Checkout/CheckoutCouple';
import CheckoutArea from '../../../Components/CheckoutArea/CheckoutArea';
import Footer from '../../../Components/Footer/Footer';

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