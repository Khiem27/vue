import React from 'react';
import { Link } from 'react-router-dom';

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <footer>
        <div className="footer-area pl-100 pr-100 mt-100">
            <div className="footer-area box-90 pt-100 pb-60" data-background="/img/bg/footer.jpg" style={{"backgroundImage":"url(https://vue-plum-chi.vercel.app/img/bg/footer.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-5 col-md-6 ">
                            <div className="footer-widget mb-40">
                                <div className="footer-logo">
                                    <Link to="/">
                                        <div style={{"display":"inline-block","maxWidth":"100%","overflow":"hidden","position":"relative","boxSizing":"border-box","margin":"0px"}}>
                                            <div style={{"boxSizing":"border-box","display":"block","maxWidth":"100%"}}><img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzUiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{"maxWidth":"100%","display":"block","margin":"0px","border":"none","padding":"0px"}}/></div>
                                            <img
                                                alt="Logo"
                                                src="https://vue-plum-chi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Flogo%2Ffooter-logo.8825a854842fdc50b39dddb165fee32b.png&w=96&q=75" decoding="async" data-nimg="true" style={{"position":"absolute","inset":"0px","boxSizing":"border-box","padding":"0px","border":"none","margin":"auto","display":"block","width":"0px","height":"0px","minWidth":"100%","maxWidth":"100%","minHeight":"100%","maxHeight":"100%"}}/></div>
                                    </Link>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.</p>
                                <div className="footer-time d-flex mt-30">
                                    <div className="time-icon">
                                        <div style={{"display":"inline-block","maxWidth":"100%","overflow":"hidden","position":"relative","boxSizing":"border-box","margin":"0px"}}>
                                            <div style={{"boxSizing":"border-box","display":"block","maxWidth":"100%"}}><img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{"maxWidth":"100%","display":"block","margin":"0px","border":"none","padding":"0px"}}/></div>
                                            <img
                                                alt="" 
                                                src="https://vue-plum-chi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Ficon%2Ftime.84f4cf33bdf53dca06042df7e47bce57.png&w=96&q=75" decoding="async" data-nimg="true" style={{"position":"absolute","inset":"0px","boxSizing":"border-box","padding":"0px","border":"none","margin":"auto","display":"block","width":"0px","height":"0px","minWidth":"100%","maxWidth":"100%","minHeight":"100%","maxHeight":"100%"}}/></div>
                                    </div>
                                    <div className="time-text"><span>Got Questions ? Call us 24/7!</span>
                                        <h2>(0600) 874 548</h2></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 d-lg-none d-xl-block">
                            <div className="footer-widget pl-50 mb-40">
                                <h3>Social Media</h3>
                                <ul className="footer-link">
                                    <li><Link to="#">Facebook</Link></li>
                                    <li><Link to="#">Twitter</Link></li>
                                    <li><Link to="#">Behance</Link></li>
                                    <li><Link to="#"> Dribbble</Link></li>
                                    <li><Link to="#">Linkedin</Link></li>
                                    <li><Link to="#">Youtube</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 d-lg-none d-xl-block">
                            <div className="footer-widget pl-30 mb-40">
                                <h3>Location</h3>
                                <ul className="footer-link">
                                    <li><Link to="#">New York</Link></li>
                                    <li><Link to="#">Tokyo</Link></li>
                                    <li><Link to="#">Dhaka</Link></li>
                                    <li><Link to="#"> Chittagong</Link></li>
                                    <li><Link to="#">China</Link></li>
                                    <li><Link to="#">Japan</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3">
                            <div className="footer-widget mb-40">
                                <h3>About</h3>
                                <ul className="footer-link">
                                    <li><Link to="#">Terms &amp; Conditions</Link></li>
                                    <li><Link to="#"> Privacy Policy</Link></li>
                                    <li><Link to="#">Contact Us</Link></li>
                                    <li><Link to="#">FAQ</Link></li>
                                    <li><Link to="#">Wholesale</Link></li>
                                    <li><Link to="#">Direction</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-5 col-md-6">
                            <div className="footer-widget mb-40">
                                <div className="footer-banner">
                                    <Link to="/shop">
                                        <div style={{"display":"inline-block","maxWidth":"100%","overflow":"hidden","position":"relative","boxSizing":"border-box","margin":"0px"}}>
                                            <div style={{"boxSizing":"border-box","display":"block","maxWidth":"100%"}}><img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDA1IiBoZWlnaHQ9IjIzNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" style={{"maxWidth":"100%","display":"block","margin":"0px","border":"none","padding":"0px"}}/></div>
                                            <img
                                                alt="Banner" 
                                                src="https://vue-plum-chi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Fbanner%2Fadd.e9816f83f83926c529cc15dad13a5851.jpg&w=640&q=75" decoding="async" data-nimg="true" style={{"position":"absolute","inset":"0px","boxSizing":"border-box","padding":"0px","border":"none","margin":"auto","display":"block","width":"0px","height":"0px","minWidth":"100%","maxWidth":"100%","minHeight":"100%","maxHeight":"100%"}}/></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area box-105">
            <div className="container-fluid">
                <div className=" pt-30 pb-30">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="copyright text-center  ">
                                <p>Copyright © 2022 <Link to="#">BasicTheme</Link>. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;