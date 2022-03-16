import React from 'react';
import { Link } from "react-router-dom";

WishlistContainerCompare.propTypes = {
    
};

function WishlistContainerCompare(props) {
    return (
        <div className="wishlist-container compare">
            <div className="bg"></div>
            <Link className="icon" to="/compare">
                <i className="fas fa-exchange-alt mt-2 mr-2"></i>
                <span className="count">02</span>
            </Link>
        </div>
    );
}

export default WishlistContainerCompare;