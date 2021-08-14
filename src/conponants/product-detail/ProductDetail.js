import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import image1 from './../../assets/images/product_image_1.jpg';
import image2 from './../../assets/images/product_image_2.jpg';
import image3 from './../../assets/images/product_image_3.jpg';
import image4 from './../../assets/images/product_image_4.jpg';
import image5 from './../../assets/images/product_image_5.jpg';
import image6 from './../../assets/images/product_image_6.jpg';
import image7 from './../../assets/images/product_image_7.jpg';

const productDetailData = {
    productId: 1,
    name: "Product Full Name lorem",
    defualtImage: image1,
    images: [image1, image2, image3, image4, image5, image6, image7],
    colors: ["2f3766", "933556", "ddb92e", "ffffff", "000000"],
    sizes: ["S", "M", "L", "XL", "XXl"],
    discription: "The FC Barcelona 2019/20 Stadium Home Shirt features team details on highly breathable fabric to help keep you cool and dry on the pitch or in the stands cheering for your team. Sporting a chequered design for the first time, the home shirt channels Barcelona pride inspired by the iconic grid layout of the city.",
    benefits: [ "Nike Breathe fabric helps you stay dry and cool.",  "Dri-FIT Technology helps keep you dry and comfortable.", "Barça crest and home colours show your team pride." ],
    sustainableMaterial: "This product is made from at least 50% recycled polyester fabric. The material comes from plastic bottles that Nike has diverted from landfill since 2010—bringing Nike's total to more than 6 billion.",
    text: 'Standard fit for a relaxed, easy feel',
    additionalDetails: {
        "Fabric": "100% polyester",
        "Machine wash": "100% polyester",
        "Imported": "Imported",
        "Colour Shown": "Deep Royal Blue, Black, White, Black",
        "Style": "J5532-456",
        "Country/Region of Origin": "Indian"
    },
    linkAmazon: "https://amazon.ae/",
    linkTeni: "http://teni.salmanraza.in/"
}

function ProductDetail() {
    const [benefits, setBenefits] = useState(productDetailData.benefits);
    const [sizes, setSizes] = useState(productDetailData.sizes);
    const [colors, setColors] = useState(productDetailData.colors);
    const [images, setImages] = useState(productDetailData.images);
    const [additionalDetails, setAdditionalDetails] = useState(productDetailData.additionalDetails);
    console.log(Object.entries(additionalDetails));

    return <section className="prdctDtlSec mobileTopMargin">
        <div className="container">
            <div className="prdctDtlCnt">
                <div className="prdctSwCsCnt">
                    <div className="prdctImgCnt left">
                        <div className="prdctBigImg">
                            <img src={productDetailData.images[0]} alt="Teni Product" />
                        </div>
                        <div className="prdctImgChldCnt">
                            <ul className="prdctImgChld">
                                {images.map((image, index) => <li key={index}><img src={image} alt="" data-elem="pinchzoomer" /></li>)}
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
                        <h1 className="prdctNm">{productDetailData.name}</h1>
                        <h2 className="prdctPrc"> <i className="fas fa-rupee-sign"></i> 300/- </h2>
                        <div className="_sizeCnt d_f">
                            <span className="_hdng">Sizes:</span>
                            <ul className="_sizes d_f">
                                { sizes.map((size, index) => <li key={index}>{size}</li>) }
                            </ul>
                        </div>
                        <div className="_sizeCnt _clrsCnt d_f">
                            <span className="_hdng">Colors:</span>
                            <ul className="_sizes d_f">
                                { colors.map((color, index) => <li key={index} calor-data={color} style={{backgroundColor: `#${color}`}}></li> ) }
                            </ul>
                        </div>
                        <div className="prdctOrdrBtnCnt d_f">
                            <span className="_txt">Order on</span>
                            <a href={productDetailData.linkAmazon} className="ordr_btn amazonA"></a>
                            <a href={productDetailData.linkTeni} className="ordr_btn myntra"></a>
                        </div>
                    </div>
                </div>
                <div className="prdctFullDtlCnt">
                    <div className="prdctDtl_txt">
                        <h6>Your Team, Your Colours:</h6>
                        <p>{productDetailData.discription}</p>
                        <h6>Benefits:</h6>
                        <ul className="points" style={{marginBottom: "15px"}}>
                            { benefits.map((benefit, index) => <li key={index}>{benefit}</li>) }
                        </ul>
                        <h6>Made from Sustainable materials:</h6>
                        <p>{productDetailData.sustainableMaterial}</p>
                        <h6>Product Details:</h6>
                        <p>Standard fit for a relaxed, easy feel</p>
                    </div>
                    <div className="prdctFbrcDtlCnt">
                        <ul className="fbrcDtl">
                            {
                                Object.entries(additionalDetails).map((additionalDetail, index) => {
                                    console.log(additionalDetail);
                                    return <li key={index}>
                                        <span className="_hdng">{additionalDetail[0]}</span>
                                        <span className="_data">{additionalDetail[1]}</span>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default ProductDetail;
