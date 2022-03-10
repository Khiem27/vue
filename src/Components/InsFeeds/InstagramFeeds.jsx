import React from 'react';
import {
    Link
} from "react-router-dom";

InstagramFeeds.propTypes = {
    
};

function InstagramFeeds(props) {
    return (
        <div className="widget mb-40">
            <div className="widget-title-box mb-30"><span className="animate-border"></span>
                <h3 className="widget-title">Instagram Feeds</h3></div>
            <div className="tag"><Link >Popular</Link><Link >desgin</Link><Link >usability</Link><Link >develop</Link><Link >consult</Link><Link >icon</Link><Link >HTML</Link><Link >ux</Link><Link >business</Link><Link >kit</Link><Link >keyboard</Link>
                <Link
                    >tech</Link>
            </div>
        </div>
    );
}

export default InstagramFeeds;