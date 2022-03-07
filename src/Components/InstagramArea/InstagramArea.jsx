import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';

InstagramArea.propTypes = {
    
};

function InstagramArea(props) {
    return (
        <section class="instagram-area pos-relative">
            <div class="instagram-active ">
                <div class="slick-slider slick-initialized" dir="ltr">
                    <div class="slick-list">
                    <div class="slick-track" style={{"opacity":"1","transform":`translate3d(0px, 0px, 0px)`,"width":"5185px"}}>
                            <div data-index="-5" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style={{"width": "305px"}}>
                                <div>
                                    <div class="instagram-item" tabindex="-1" style={{"width":"100%","display":"inline-block"}}><img src="https://vue-plum-chi.vercel.app/img/instagram/insta2.jpg" alt="Image" style={{"width":"100%"}}/></div>
                                </div>
                            </div>
                            <div data-index="-4" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style={{"width":"305px"}}>
                                <div>
                                    <div class="instagram-item" tabindex="-1" style={{"width":"100%","display":"inline-block"}}><img src="https://vue-plum-chi.vercel.app/img/instagram/insta3.jpg" alt="Image" style={{"width":"100%"}}/></div>
                                </div>
                            </div>
                            <div data-index="-3" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style={{"width":"305px"}}>
                                <div>
                                    <div class="instagram-item" tabindex="-1" style={{"width":"100%","display":"inline-block"}}><img src="https://vue-plum-chi.vercel.app/img/instagram/insta4.jpg" alt="Image" style={{"width":"100%"}}/></div>
                                </div>
                            </div>
                            <div data-index="-2" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style={{"width":"305px"}}>
                                <div>
                                    <div class="instagram-item" tabindex="-1" style={{"width":"100%","display":"inline-block"}}><img src="https://vue-plum-chi.vercel.app/img/instagram/insta5.jpg" alt="Image" style={{"width":"100%"}}/></div>
                                </div>
                            </div>
                            <div data-index="-1" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style={{"width":"305px"}}>
                                <div>
                                    <div class="instagram-item" tabindex="-1" style={{"width":"100%","display":"inline-block"}}><img src="https://vue-plum-chi.vercel.app/img/instagram/insta6.jpg" alt="Image" style={{"width":"100%"}}/></div>
                                </div>
                            </div>
                            <div data-index="0" class="slick-slide" tabindex="-1" aria-hidden="true" style={{"outline":"none","width":"305px"}}>
                                <div>
                                    <div class="instagram-item" tabindex="-1" style={{"width":"100%","display":"inline-block"}}><img src="https://vue-plum-chi.vercel.app/img/instagram/insta1.jpg" alt="Image" style={{"width":"100%"}}/></div>
                                </div>
                            </div>
                            <div data-index="1" class="slick-slide" tabindex="-1" aria-hidden="true" style={{"outline":"none","width":"305px"}}>
                                <div>
                                    <div class="instagram-item" tabindex="-1" style={{"width":"100%","display":"inline-block"}}><img src="https://vue-plum-chi.vercel.app/img/instagram/insta2.jpg" alt="Image" style={{"width":"100%"}}/></div>
                                </div>
                            </div>
                            <div data-index="2" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style={{"outline":"none","width":"305px"}}>
                                <div>
                                    <div class="instagram-item" tabindex="-1" style={{"width":"100%","display":"inline-block"}}><img src="https://vue-plum-chi.vercel.app/img/instagram/insta3.jpg" alt="Image" style={{"width":"100%"}}/></div>
                                </div>
                            </div>
                            <div data-index="3" class="slick-slide slick-active" tabindex="-1" aria-hidden="false" style={{"outline":"none","width":"305px"}}>
                                <div>
                                    <div class="instagram-item" tabindex="-1" style={{"width":"100%","display":"inline-block"}}><img src="https://vue-plum-chi.vercel.app/img/instagram/insta4.jpg" alt="Image" style={{"width":"100%"}}/></div>
                                </div>
                            </div>
                            <div data-index="4" class="slick-slide slick-active" tabindex="-1" aria-hidden="false" style={{"outline":"none","width":"305px"}}>
                                <div>
                                    <div class="instagram-item" tabindex="-1" style={{"width":"100%","display":"inline-block"}}><img src="https://vue-plum-chi.vercel.app/img/instagram/insta5.jpg" alt="Image" style={{"width":"100%"}}/></div>
                                </div>
                            </div>
                            <div data-index="5" class="slick-slide slick-active" tabindex="-1" aria-hidden="false" style={{"outline":"none","width":"305px"}}>
                                <div>
                                    <div class="instagram-item" tabindex="-1" style={{"width":"100%","display":"inline-block"}}><img src="https://vue-plum-chi.vercel.app/img/instagram/insta6.jpg" alt="Image" style={{"width":"100%"}}/></div>
                                </div>
                            </div>
                            <div data-index="6" tabindex="-1" class="slick-slide slick-active slick-cloned" aria-hidden="false" style={{"width":"305px"}}>
                                <div>
                                    <div class="instagram-item" tabindex="-1" style={{"width":"100%","display":"inline-block"}}><img src="https://vue-plum-chi.vercel.app/img/instagram/insta1.jpg" alt="Image" style={{"width":"100%"}}/></div>
                                </div>
                            </div>
                            <div data-index="7" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style={{"width":"305px"}}>
                                <div>
                                    <div class="instagram-item" tabindex="-1" style={{"width":"100%","display":"inline-block"}}><img src="https://vue-plum-chi.vercel.app/img/instagram/insta2.jpg" alt="Image" style={{"width":"100%"}}/></div>
                                </div>
                            </div>
                            <div data-index="8" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style={{"width":"305px"}}>
                                <div>
                                    <div class="instagram-item" tabindex="-1" style={{"width":"100%","display":"inline-block"}}><img src="https://vue-plum-chi.vercel.app/img/instagram/insta3.jpg" alt="Image" style={{"width":"100%"}}/></div>
                                </div>
                            </div>
                            <div data-index="9" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style={{"width":"305px"}}>
                                <div>
                                    <div class="instagram-item" tabindex="-1" style={{"width":"100%","display":"inline-block"}}><img src="https://vue-plum-chi.vercel.app/img/instagram/insta4.jpg" alt="Image" style={{"width":"100%"}}/></div>
                                </div>
                            </div>
                            <div data-index="10" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style={{"width":"305px"}}>
                                <div>
                                    <div class="instagram-item" tabindex="-1" style={{"width":"100%","display":"inline-block"}}><img src="https://vue-plum-chi.vercel.app/img/instagram/insta5.jpg" alt="Image" style={{"width":"100%"}}/></div>
                                </div>
                            </div>
                            <div data-index="11" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style={{"width":"305px"}}>
                                <div>
                                    <div class="instagram-item" tabindex="-1" style={{"width":"100%","display":"inline-block"}}><img src="https://vue-plum-chi.vercel.app/img/instagram/insta6.jpg" alt="Image" style={{"width":"100%"}}/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="instagram-btn"><a href="#" class="btn white-btn"><i class="fab fa-instagram"></i> vue.store</a></div>
        </section>
    );
}

export default InstagramArea;