import React, {useState} from 'react';
import PropTypes from 'prop-types';

ScrollUp.propTypes = {
    
};

function ScrollUp(props) {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
    };

    const scrollToTop = () =>{
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            <a style={{"display": "visible" ? 'inline' : 'none'}} onClick={scrollToTop} id="scrollUp" style={{"position": "fixed", "zIndex": "2147483647", "display": "block"}}>
                <i className="fas fa-arrow-up"></i>
            </a>
        </>
    );
}

export default ScrollUp;