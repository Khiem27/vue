import React from 'react';
import PropTypes from 'prop-types';

WishlistContainer.propTypes = {
    
};

function WishlistContainer(props) {
    return (
        <div class="wishlist-container">
            <div class="bg"></div>
            <a class="icon" href="/wishlist">
                <i class="fas fa-heart  mt-1 mr-1"></i>
                <span class="count">0</span>
            </a>
        </div>
    );
}

export default WishlistContainer;