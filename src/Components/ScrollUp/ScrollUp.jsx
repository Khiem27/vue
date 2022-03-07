import React from 'react';
import {
    Link
} from "react-router-dom";

ScrollUp.propTypes = {
    
};

function ScrollUp(props) {
    const scrollToTop = () =>{
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
    };

    return (
        <>
            <Link onClick={scrollToTop} id="scrollUp" style={{"position": "fixed", "zIndex": "2147483647", "display": "block"}}>
                <i className="fas fa-arrow-up"></i>
            </Link>
        </>
    );
}

export default ScrollUp;