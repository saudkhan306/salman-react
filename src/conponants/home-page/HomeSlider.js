import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Importing slider images
import sliderImage1 from '../../assets/images/slider_1.png';

const sliderContent = [
    {
        bgColor: "#c5d6e1",
        image: sliderImage1,
        textLight: "Custom",
        textBold: "T-shirt",
        subText: "And Other Apparels",
        linkAmazon: "https://amazon.ae/",
        linkTeni: "http://teni.salmanraza.in/"
    },
    {
        bgColor: "#ff9a9e",
        image: sliderImage1,
        textLight: "Custom",
        textBold: "T-shirt",
        subText: "And Other Apparels",
        linkAmazon: "https://amazon.ae/",
        linkTeni: "http://teni.salmanraza.in/"
    }
]

function HomeSlider() {
    const settings = {
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        dots: false,
        arrows: false,
    };

    const [sldierContent, setSldierContent] = useState(sliderContent);

    return (
        <>            
            <section className="sliderSec">
                <Slider className="hmSldrCnt" {...settings}>
                    {
                        sldierContent.map((slide, index) => {
                            return <div className="hmSld">
                                <div className="sldBgImg" style={{backgroundColor: slide.bgColor}}></div>
                                <div className="sldCntntCnt">
                                    <div className="sldCntnt">
                                        <h1>
                                            <span className="lightFont">{slide.textLight}</span>
                                            {slide.textBold}
                                        </h1>                    
                                        <p className="sbTxt">{slide.subText}</p>
                                        <div className="ordrBtns">
                                            <a href={slide.linkAmazon} className="ordrBtn black_Btn alertPpup amazoneBtn"> Order On </a>
                                            <span className="_or">or</span>
                                            <a href={slide.linkTeni} className="ordrBtn black_Btn teniBtn"> Direct with </a>
                                        </div>
                                    </div>
                                    <div className="sldPrdctImg">
                                        <img src={slide.image} alt="Custom Tshirts" />
                                    </div>
                                </div>
                            </div>                        
                        })
                    }
                </Slider>
            </section>
        </>
    )
}

export default HomeSlider
