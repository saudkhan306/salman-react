import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { allProducts } from '../../data/products';


function ProductDetail() {
    const {id} = useParams();
    console.log(id)
    const product = allProducts.find(product=>  product.ProductID === id);
    console.table(product)
    return <section className="prdctDtlSec mobileTopMargin">
        <div className="container">
            <div className="prdctDtlCnt">
                <div className="prdctSwCsCnt">
                    <div className="prdctImgCnt left">
                        <div className="prdctBigImg">
                            <img src={product?.Images?.[0]} alt="Teni Product" />
                        </div>
                        <div className="prdctImgChldCnt">
                            <ul className="prdctImgChld">
                                {product?.Images.map((image, index) => <li key={index}><img src={image} alt="" data-elem="pinchzoomer" /></li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="prdctDtl d_f right">
                        <div className="shareCnt d_f">
                            <div className="_shareIcn"><i className="fas fa-share-alt"></i></div>
                            <ul className="_shareSocialMedia d_f">
                                <li className="insta"><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                                <li className="fb"><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                            </ul>
                        </div>
                        <h1 className="prdctNm">{product?.ProductName}</h1>
                        <h2 className="prdctPrc"> <i className="fas fa-rupee-sign"></i> 300/- </h2>
                        <div className="prdctOrdrBtnCnt d_f">
                            <span className="_txt">Order on</span>
                            <a href={product?.URL} className="ordr_btn amazonA"></a>
                        </div>
                    </div>
                </div>
                <div className="prdctFullDtlCnt">
                    <div className="prdctDtl_txt">
                        <h6>Your Team, Your Colours:</h6>
                        <p>{product?.Description}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default ProductDetail;
