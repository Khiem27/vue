import React from 'react';

Subcribe.propTypes = {
    
};

function Subcribe(props) {
    return (
        <section className="subscribe-area box-105">
            <div className="subscribe-inner black-bg pt-70 pb-20">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="subscribe d-flex fix">
                                <div className="subscribe-icon"><img src="https://vue-plum-chi.vercel.app/img/icon/subscribe.png" alt=""/></div>
                                <div className="area-title white-color mb-50">
                                    <h2>Newsletter</h2>
                                    <p>Subsribe here for get every single updates</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="subscribe fix">
                                <div className="subscribe-form mb-50">
                                    <form action="#"><input type="text" placeholder="Enter your email address"/><button className="btn theme-btn" type="submit">subscribe now</button></form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Subcribe;