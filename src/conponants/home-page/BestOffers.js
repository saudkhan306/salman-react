import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import { offerProductApiData } from '../products/offerProductApiData';
import BestOfferProduct from '../products/BestOfferProduct';


function BestOffers() {
    const settings = {
        infinite: true,
		autoplay: false,
		slideToShow: 1,
		scrollToSlide: 1,
		autoplaySpeed: 5000,
		arrows:false,
		dots: true,
    };

    const [offerProduct, setOfferProduct] = useState(offerProductApiData);
    return (
        <>
            <div className="bestOfferSec">
                <div className="container">
                    <Slider className="prdctOfrSec offerSlider left" {...settings}>
                        {
                            offerProduct.map((product, index) => {
                                return <BestOfferProduct data={product} />
                            })  
                        }
                    </Slider>
                </div>
            </div>
            <span className="seeAllBtn txtCenter">
                <Link to="/" className="">See All Best Offers</Link>
            </span>   
        </>
    )
}

export default BestOffers
