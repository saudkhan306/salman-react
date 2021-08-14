import React from 'react'
import { Link } from 'react-router-dom';

function ProductsVertical({product}) {
    return <div className="vPrdctSlide">
        <div className="vPrdctBx">
            <div className="prdctImg">
                <Link to="/product-detail"> 
                    <img src={product.image} alt="" />
                </Link>
            </div>
            <div className="prdctTxtCnt">
                <Link href="/product-detail">
                    <h1 className="prdctHdng"> {product.name} </h1>
                </Link>
                <div className="prdctPrc">
                    <i className="fas fa-rupee-sign"></i>
                    {product.price}
                </div>
                <div className="prdctOrdrBtns">
                    <Link to={product.linkAmazon} className="ordrBtn alertPpup white_Btn amazoneBtn"> Order On </Link>
                    <span className="orWithTeni">
                        Or direct with 
                        <Link to={product.linkTeni} className="teni_font">Teni</Link>
                    </span>
                </div>
            </div>
        </div>
    </div>
}

export default ProductsVertical;
