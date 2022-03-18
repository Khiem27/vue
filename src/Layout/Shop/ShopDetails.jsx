import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import ProductApi from '../../Api/Product/ProductApi';
import AddToCart from '../../Components/AddToCart/AddToCart';
import Header from '../../Components/Header/Header';
import ShopDetailsTitle from '../../Components/PageTitle/Shop/ShopDetailsTitle';

function ShopDetails(props) {
    let { shopid } = useParams();
    const [product, setProduct] = useState([])
    const valueRef = useRef(1)
    const [click, setClick] = useState(1)
    const [click2, setClick2] = useState(false)

    useEffect(() => {
        const getOneProducts = async () => {
            const oneProduct = await ProductApi.getOne(shopid - 1)
            const getProduct = oneProduct.data
            setProduct(getProduct)
        }
        window.scrollTo(0,0);
        getOneProducts()
    }, [shopid])

    const handleClick = (index) => {
        valueRef.current = index
        console.log(valueRef.current);
        setClick(valueRef.current)
    }

    return (
        <div className='shop-details'>
            <Header />
            <ShopDetailsTitle />
            <section className="shop-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-4">
                            <div className="product-details-img mb-10">
                                <div id="myTabContentpro" className="tab-content">
                                    <div role="tabpanel" aria-hidden="false" className={click === 1 ? "fade tab-pane active show" : "fade tab-pane"}>
                                        <div className="product-large-img"><img src={product.image} alt="tum"/></div>
                                    </div>
                                    <div role="tabpanel" aria-hidden="true" className={click === 2 ? "fade tab-pane active show" : "fade tab-pane"}>
                                        <div className="product-large-img"><img src={product.navImage} alt="tum"/></div>
                                    </div>
                                    <div role="tabpanel" aria-hidden="true" className={click === 3 ? "fade tab-pane active show" : "fade tab-pane"}>
                                        <div className="product-large-img"><img src={product.hoverImage} alt="tum"/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-thumb-tab mb-30">
                                <ul className="nav" role="tablist">
                                    <li className="nav-item">
                                        <Link  onClick={() => handleClick(1)} role="tab" data-rb-event-key="tum-0" aria-selected="true" className={click === 1 ? "nav-link active" : "nav-link"}><img src={product.image} alt="tum"/></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link  onClick={() => handleClick(2)} role="tab" data-rb-event-key="tum-1" aria-selected="false" className={click === 2 ? "nav-link active" : "nav-link"}><img src={product.navImage} alt="tum"/></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link  onClick={() => handleClick(3)} role="tab" data-rb-event-key="tum-2" aria-selected="false" className={click === 3 ? "nav-link active" : "nav-link"}><img src={product.hoverImage} alt="tum"/></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-8">
                            <div className="product-details mb-30 pl-30">
                                <div className="details-cat mb-20"><Link to="#">{product.brand}</Link></div>
                                <h2 className="pro-details-title mb-15">{product.title}</h2>
                                <div className="details-price mb-20">
                                    <span>${product.price} USD</span>
                                    <span className="old-price">${product.oldPrice} USD</span>
                                    </div>
                                <div className="product-variant">
                                    <div className="product-color variant-item modal-p-15">
                                        <div className="variant-name">
                                            <span>Colors</span>
                                        </div>
                                        <ul className="shop-link shop-color">
                                            <li><Link to="#"><span className={product.color}></span></Link></li>
                                        </ul>
                                    </div>
                                    <div className="product-size variant-item modal-p-15">
                                        <div className="variant-name"><span>size</span></div>
                                        <ul className="shop-link shop-size">
                                            <li className={product.size === "l" ? "active" : " "}><Link to="#">L</Link></li>
                                            <li className={product.size === "m" ? "active" : " "}><Link to="#">M</Link></li>
                                            <li className={product.size === "x" ? "active" : " "}><Link to="#">X</Link></li>
                                            <li className={product.size === "xl" ? "active" : " "}><Link to="#">XL</Link></li>
                                            <li className={product.size === "xxl" ? "active" : " "}><Link to="#">XXL</Link></li>
                                        </ul>
                                    </div>
                                    <div className="product-desc variant-item">
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="product-info-list variant-item">
                                        <ul>
                                            <li className="text-capitalize"><span>Brands:</span> {product.brand}</li>
                                            <li><span>Product Code:</span> f1</li>
                                            <li><span>Reward Points:</span> 100</li>
                                            <li><span>Stock:</span> <span className="in-stock">In Stock</span></li>
                                        </ul>
                                    </div>
                                    <AddToCart productInfo = {product} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-50">
                        <div className="col-xl-8 col-lg-8">
                            <div className="product-review">
                                <ul className="review-tab nav" role="tablist">
                                    <li className="nav-item"><Link onClick={() => setClick2(false)}  role="tab" data-rb-event-key="dec" aria-selected="true" className={click2 ? "nav-link" : "nav-link active"}>Description </Link></li>
                                    <li className="nav-item"><Link onClick={() => setClick2(true)}  role="tab" data-rb-event-key="review" aria-selected="false" className={click2 ? "nav-link active" : "nav-link"}>Reviews (2)</Link></li>
                                </ul>
                                <div id="myTabContent2" className="tab-content">
                                    <div role="tabpanel" aria-hidden="false" className={click2 ? "fade tab-pane" : "fade tab-pane active show"}>
                                        <div className="desc-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                                beatae vitae dicta sunt explicabo.</p>
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                                                sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                        </div>
                                    </div>
                                    <div role="tabpanel" aria-hidden="true" className={click2 ? "fade tab-pane active show" : "fade tab-pane"}>
                                        <div className="desc-text review-text">
                                            <div className="product-commnets">
                                                <div className="product-commnets-list mb-25 pb-15">
                                                    <div className="pro-comments-img"><img src="https://vue-plum-chi.vercel.app/img/product/comments/01.png" alt="img"/></div>
                                                    <div className="pro-commnets-text">
                                                        <h4>Roger West -<span>June 5, 2018</span></h4>
                                                        <div className="pro-rating"><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                                    </div>
                                                </div>
                                                <div className="product-commnets-list mb-25 pb-15">
                                                    <div className="pro-comments-img"><img src="https://vue-plum-chi.vercel.app/img/product/comments/02.png" alt="img"/></div>
                                                    <div className="pro-commnets-text">
                                                        <h4>Roger West -<span>June 5, 2018</span></h4>
                                                        <div className="pro-rating"><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review-box mt-50">
                                                <h4>Add a Review</h4>
                                                <div className="your-rating mb-40"><span>Your Rating:</span>
                                                    <div className="rating-list"><Link to="#"><i className="far fa-star"></i></Link><Link to="#"><i className="far fa-star"></i></Link><Link to="#"><i className="far fa-star"></i></Link><Link to="#"><i className="far fa-star"></i></Link><Link to="#"><i className="far fa-star"></i></Link></div>
                                                </div>
                                                <form className="review-form">
                                                    <div className="row">
                                                        <div className="col-xl-12"><label htmlFor="message">YOUR REVIEW</label><textarea name="message" id="message" cols="30" rows="10"></textarea></div>
                                                        <div className="col-xl-6"><label htmlFor="r-name">Name</label><input type="text" id="r-name"/></div>
                                                        <div className="col-xl-6"><label htmlFor="r-email">Email</label><input type="email" id="r-email"/></div>
                                                        <div className="col-xl-12"><button className="btn theme-btn">Add your Review</button></div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="pro-details-banner"><img src="https://vue-plum-chi.vercel.app/img/banner/pro-details.jpg" alt="img"/></div>
                        </div>
                    </div>
                </div>
            </section>          
        </div>
    );
}

export default ShopDetails;