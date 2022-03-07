import React from 'react';
import PropTypes from 'prop-types';

WishlistContainerCompare.propTypes = {
    
};

function WishlistContainerCompare(props) {
    return (
        <div class="wishlist-container compare">
            <div class="bg"></div>
            <a class="icon" href="/compare">
                <i class="fas fa-exchange-alt mt-2 mr-2"></i>
                <span class="count">02</span>
            </a>
        </div>
    );
}

export default WishlistContainerCompare;