import React from 'react'

function TestimonialSlide({data}) {
    return <div className="tstmnialSld">
        <div className="hmTstmnialBx d_f">
            <div className="cstmrPic">
                <img src={data.image} alt="" />
            </div>
            <div className="tstmnalCntntCnt">
                <p className="tstmnalCntnt">{data.comment}</p>
                <h3 className="cstmrNam">
                    {data.userName} &nbsp;
                    <span className="posnt">({data.userType})</span>
                </h3>
            </div>
        </div>
    </div>
}

export default TestimonialSlide;
