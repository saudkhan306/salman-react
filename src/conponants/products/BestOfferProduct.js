import React from 'react'
import { Link } from 'react-router-dom';

function BestOfferProduct({data}) {
    return <div className="offerSlide">
        <div className="ofrMobileViewCnt">
            <Link to="/"> <img src={data.mImage} alt="Teni Offer" /> </Link>
        </div>
        <div className="prdctOfrCnt" style={{backgroundImage: data.bgColor}}>
            <div className="ofr_off">{data.discount}</div> 
            <div className="ofrPrdctBx">
                <div className="ofrImgCnt left">
                    <img src={data.image} alt="" />
                </div>
                <div className="ofrTxtCnt right d_f">
                    <h1> {data.name} </h1>
                    <p>{data.discription}</p>
                    <div className="prdctOrdrBtns">
                        <Link to={data.linkAmazon} className="ordrBtn white_Btn amazoneBtn"> Order On </Link>
                        <span className="orWithTeni">
                            Or direct with 
                            <Link to={data.linkTeni} className="teni_font">Teni</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default BestOfferProduct;
