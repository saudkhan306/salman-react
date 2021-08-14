import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import productImage1 from '../../assets/images/product_1.png';
import productImage2 from '../../assets/images/product_1.png';
import productImage3 from '../../assets/images/product_1.png';
import NextArrow from '../helpers/NextArrow';
import PrevArrow from '../helpers/PrevArrow';
import { productData } from '../products/ProductApiData';
import ProductsVertical from '../products/ProductsVertical';

function PopularProducts() {    
    const settings = {
        infinite: true,
		autoplay: false,
		slideToShow: 3,
		scrollToSlide: 1,
		autoplaySpeed: 4000,
		variableWidth: true,
		dots: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
		responsive: [
		    {
				breakpoint: 767,
				settings: {
					slideToShow: 2,
					arrows: false,
				}
		    }
		]
    };

    const [productV, setProductV] = useState(productData);
    return (
        <>
            <section className="smlSecCnt mt_30">
                <div className="container">
                    <div className="secHdngCnt txt_center">
                        <h1>
                            Pupular <span className="teniStrip _F7">Products</span>
                            <div className="_forMblView">
                                <a href="/" className="seeAll">See All</a>
                                <span className="collapsBtn"><i className="fas fa-chevron-down"></i></span>
                            </div>
                        </h1>
                    </div>
                    <div className="vPrdctBxCnt">
                        <Slider className="vPrdctSlider" {...settings}>
                            {
                                productV.map((product, index) => {
                                    return <ProductsVertical product={product} />
                                })
                            }
                        </Slider>
                    </div>
                </div>      
            </section>   
        </>
    )
}

export default PopularProducts;