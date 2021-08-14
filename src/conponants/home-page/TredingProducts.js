import Reactm, {useState} from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import PopularProducts from './PopularProducts'


import NextArrow from '../helpers/NextArrow';
import PrevArrow from '../helpers/PrevArrow';
import { productData } from '../products/ProductApiData';
import ProductsHorizontal from '../products/ProductsHorizontal';

function TredingProducts() {
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
    
    const [products, setProducts] = useState(productData);
    return (
        <>
            <section className="trndngSec collapsSec">
                <div className="container">
                    <div className="secHdngCnt txt_center">
                        <h1>
                            Trending <span className="teniStrip _F7">Products</span>
                            <div className="_forMblView">
                                <Link to="/" className="seeAll">See All</Link>
                                <span className="collapsBtn"><i className="fas fa-chevron-down"></i></span>
                            </div>
                        </h1>
                    </div>
                </div>
                <div className="trndngPrdctCnt collapsCont">
                    <Slider className="trndngPrdctSldr" {...settings}>
                        {
                            products.map((product, index) => {
                                return <div className="trndngPrdctSld" key={index}>
                                    <ProductsHorizontal product={product} />
                                </div>
                            })
                        }
                    </Slider>
                    <span className="scrollingStrip"></span>
                </div>
                <span className="seeAllBtn txtCenter">
                    <Link to="/" className="">See All Products</Link>
                </span>                
            </section>   
        </>
    )
}

export default TredingProducts;
