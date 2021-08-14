import React, { useState } from 'react'
import Slider from 'react-slick';
import { TestimonialApiData } from '../testimonials/TestimonialApiData';
import TestimonialSlide from '../testimonials/TestimonialSlide';



function Testimonials() {
    const settings = {
        infinite: true,
		autoplay: true,
		slideToShow: 1,
		scrollToSlide: 1,
		autoplaySpeed: 7000,
		arrows:false,
		dots: true,
    }

    const [testimonials, setTestimonials] = useState(TestimonialApiData);
    return (
        <>
            <section className="tstmnialSec">
                <div className="container">
                    <div className="tstmnialCnt">
                        <div className="container">
                            <div className="secHdngCnt txt_center">
                                <h1>What <span className="teniStrip _white">our</span> Customer Say</h1>
                            </div>
                            <div className="tstmnialSbCnt">
                                <Slider className="hmTstmnial" {...settings}>
                                    {
                                        testimonials.map((testimonial, index) => {
                                            return <TestimonialSlide data={testimonial} key={index} />
                                        })
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
        </>
    )
}

export default Testimonials;
