import React from 'react';

WishlistContainer.propTypes = {
    
};

function WishlistContainer(props) {
    return (
        <div className="wishlist-container">
            <div className="bg"></div>
            <a className="icon" href="/wishlist">
                <i className="fas fa-heart  mt-1 mr-1"></i>
                <span className="count">0</span>
            </a>
        </div>
    );
}

export default WishlistContainer;