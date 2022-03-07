import React from 'react';
import {
    Link
} from "react-router-dom";

InstagramFeeds.propTypes = {
    
};

function InstagramFeeds(props) {
    return (
        <div class="widget mb-40">
            <div class="widget-title-box mb-30"><span class="animate-border"></span>
                <h3 class="widget-title">Instagram Feeds</h3></div>
            <div class="tag"><Link >Popular</Link><Link >desgin</Link><Link >usability</Link><Link >develop</Link><Link >consult</Link><Link >icon</Link><Link >HTML</Link><Link >ux</Link><Link >business</Link><Link >kit</Link><Link >keyboard</Link>
                <Link
                    >tech</Link>
            </div>
        </div>
    );
}

export default InstagramFeeds;