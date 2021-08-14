import React from 'react'

import mSliderImage1 from '../../assets/images/mobileSlider_1.jpg';
import mSliderImage2 from '../../assets/images/mobileSlider_2.jpg';
import mSliderImage3 from '../../assets/images/mobileSlider_3.jpg';
function MobileSlider() {
    return (
        <div className="mblSldrCnt hiddenLg">
            <div className="mblSldr">
                <div className="mblSld">
                    <div className="mblSldrBxCnt">
                        <img src={mSliderImage1} alt="" />
                    </div>
                </div>
                <div className="mblSld">
                    <div className="mblSldrBxCnt">
                        <img src={mSliderImage2} alt="" />
                    </div>
                </div>
                <div className="mblSld">
                    <div className="mblSldrBxCnt">
                        <img src={mSliderImage3} alt="" />
                    </div>
                </div>
                <div className="mblSld">
                    <div className="mblSldrBxCnt">
                        <img src={mSliderImage1} alt="" />
                    </div>
                </div>
                <div className="mblSld">
                    <div className="mblSldrBxCnt">
                        <img src={mSliderImage2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileSlider;
