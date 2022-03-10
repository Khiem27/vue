import React from 'react';

WishlistContainerCompare.propTypes = {
    
};

function WishlistContainerCompare(props) {
    return (
        <div className="wishlist-container compare">
            <div className="bg"></div>
            <a className="icon" href="/compare">
                <i className="fas fa-exchange-alt mt-2 mr-2"></i>
                <span className="count">02</span>
            </a>
        </div>
    );
}

export default WishlistContainerCompare;