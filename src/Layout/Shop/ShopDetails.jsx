import React, { useEffect, useRef, useState } from 'react';
import {
    useParams
} from "react-router-dom";
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
            <section class="shop-details-area pt-100 pb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-4">
                            <div class="product-details-img mb-10">
                                <div id="myTabContentpro" class="tab-content">
                                    <div role="tabpanel" aria-hidden="false" class={click === 1 ? "fade tab-pane active show" : "fade tab-pane"}>
                                        <div class="product-large-img"><img src={product.image} alt="tum"/></div>
                                    </div>
                                    <div role="tabpanel" aria-hidden="true" class={click === 2 ? "fade tab-pane active show" : "fade tab-pane"}>
                                        <div class="product-large-img"><img src={product.navImage} alt="tum"/></div>
                                    </div>
                                    <div role="tabpanel" aria-hidden="true" class={click === 3 ? "fade tab-pane active show" : "fade tab-pane"}>
                                        <div class="product-large-img"><img src={product.hoverImage} alt="tum"/></div>
                                    </div>
                                </div>
                            </div>
                            <div class="shop-thumb-tab mb-30">
                                <ul class="nav" role="tablist">
                                    <li class="nav-item">
                                        <a href="javascript:void(0)" onClick={() => handleClick(1)} role="tab" data-rb-event-key="tum-0" aria-selected="true" class={click === 1 ? "nav-link active" : "nav-link"}><img src={product.image} alt="tum"/></a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0)" onClick={() => handleClick(2)} role="tab" data-rb-event-key="tum-1" aria-selected="false" class={click === 2 ? "nav-link active" : "nav-link"}><img src={product.navImage} alt="tum"/></a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0)" onClick={() => handleClick(3)} role="tab" data-rb-event-key="tum-2" aria-selected="false" class={click === 3 ? "nav-link active" : "nav-link"}><img src={product.hoverImage} alt="tum"/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-8">
                            <div class="product-details mb-30 pl-30">
                                <div class="details-cat mb-20"><a href="#">{product.brand}</a></div>
                                <h2 class="pro-details-title mb-15">{product.title}</h2>
                                <div class="details-price mb-20">
                                    <span>${product.price} USD</span>
                                    <span class="old-price">${product.oldPrice} USD</span>
                                    </div>
                                <div class="product-variant">
                                    <div class="product-color variant-item modal-p-15">
                                        <div class="variant-name">
                                            <span>Colors</span>
                                        </div>
                                        <ul class="shop-link shop-color">
                                            <li><a href="#"><span class={product.color}></span></a></li>
                                        </ul>
                                    </div>
                                    <div class="product-size variant-item modal-p-15">
                                        <div class="variant-name"><span>size</span></div>
                                        <ul class="shop-link shop-size">
                                            <li class={product.size === "l" ? "active" : " "}><a href="#">L</a></li>
                                            <li class={product.size === "m" ? "active" : " "}><a href="#">M</a></li>
                                            <li class={product.size === "x" ? "active" : " "}><a href="#">X</a></li>
                                            <li class={product.size === "xl" ? "active" : " "}><a href="#">XL</a></li>
                                            <li class={product.size === "xxl" ? "active" : " "}><a href="#">XXL</a></li>
                                        </ul>
                                    </div>
                                    <div class="product-desc variant-item">
                                        <p>{product.description}</p>
                                    </div>
                                    <div class="product-info-list variant-item">
                                        <ul>
                                            <li class="text-capitalize"><span>Brands:</span> {product.brand}</li>
                                            <li><span>Product Code:</span> f1</li>
                                            <li><span>Reward Points:</span> 100</li>
                                            <li><span>Stock:</span> <span class="in-stock">In Stock</span></li>
                                        </ul>
                                    </div>
                                    <AddToCart productInfo = {product} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-50">
                        <div class="col-xl-8 col-lg-8">
                            <div class="product-review">
                                <ul class="review-tab nav" role="tablist">
                                    <li class="nav-item"><a onClick={() => setClick2(false)} href="javascript:void(0)" role="tab" data-rb-event-key="dec" aria-selected="true" class={click2 ? "nav-link" : "nav-link active"}>Description </a></li>
                                    <li class="nav-item"><a onClick={() => setClick2(true)} href="javascript:void(0)" role="tab" data-rb-event-key="review" aria-selected="false" class={click2 ? "nav-link active" : "nav-link"}>Reviews (2)</a></li>
                                </ul>
                                <div id="myTabContent2" class="tab-content">
                                    <div role="tabpanel" aria-hidden="false" class={click2 ? "fade tab-pane" : "fade tab-pane active show"}>
                                        <div class="desc-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                                beatae vitae dicta sunt explicabo.</p>
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                                                sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                        </div>
                                    </div>
                                    <div role="tabpanel" aria-hidden="true" class={click2 ? "fade tab-pane active show" : "fade tab-pane"}>
                                        <div class="desc-text review-text">
                                            <div class="product-commnets">
                                                <div class="product-commnets-list mb-25 pb-15">
                                                    <div class="pro-comments-img"><img src="https://vue-plum-chi.vercel.app/img/product/comments/01.png" alt="img"/></div>
                                                    <div class="pro-commnets-text">
                                                        <h4>Roger West -<span>June 5, 2018</span></h4>
                                                        <div class="pro-rating"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                                    </div>
                                                </div>
                                                <div class="product-commnets-list mb-25 pb-15">
                                                    <div class="pro-comments-img"><img src="https://vue-plum-chi.vercel.app/img/product/comments/02.png" alt="img"/></div>
                                                    <div class="pro-commnets-text">
                                                        <h4>Roger West -<span>June 5, 2018</span></h4>
                                                        <div class="pro-rating"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="review-box mt-50">
                                                <h4>Add a Review</h4>
                                                <div class="your-rating mb-40"><span>Your Rating:</span>
                                                    <div class="rating-list"><a href="#"><i class="far fa-star"></i></a><a href="#"><i class="far fa-star"></i></a><a href="#"><i class="far fa-star"></i></a><a href="#"><i class="far fa-star"></i></a><a href="#"><i class="far fa-star"></i></a></div>
                                                </div>
                                                <form class="review-form">
                                                    <div class="row">
                                                        <div class="col-xl-12"><label for="message">YOUR REVIEW</label><textarea name="message" id="message" cols="30" rows="10"></textarea></div>
                                                        <div class="col-xl-6"><label for="r-name">Name</label><input type="text" id="r-name"/></div>
                                                        <div class="col-xl-6"><label for="r-email">Email</label><input type="email" id="r-email"/></div>
                                                        <div class="col-xl-12"><button class="btn theme-btn">Add your Review</button></div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4">
                            <div class="pro-details-banner"><img src="https://vue-plum-chi.vercel.app/img/banner/pro-details.jpg" alt="img"/></div>
                        </div>
                    </div>
                </div>
            </section>          
        </div>
    );
}

export default ShopDetails;