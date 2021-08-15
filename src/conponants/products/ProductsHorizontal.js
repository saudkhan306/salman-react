import React from 'react'
import { Link } from 'react-router-dom';

function ProductsHorizontal({product,index}) {
    const classNameOfTheDiv = `prdctBxCnt ${index % 2 === 0 || index === 0 ? 'leftContent' : 'rightContent'}`
    return <div className={classNameOfTheDiv} >
        <div className="prdctBxImg">
            <Link to={`/product-detail/${product.ProductID}`}>
                <img src={product.Images?.[0]} alt="" />
            </Link>
        </div>
        <div className="prdctTxtCnt d_f">
            <Link to="/product-detail"><h1 className="prdctHdng"> {product.ProductName} </h1></Link>
            <div className="listPrc">
                <i className="fas fa-rupee-sign"></i> {product.ListingPrice}
            </div>
            <div className="">
               You save {product.Discount} %
            </div>
            <div className="prdctPrc">
                <i className="fas fa-rupee-sign"></i> {product.SalePrice}
            </div>
            <div className="prdctOrdrBtns">
                <Link to={product.URL} className="ordrBtn alertPpup white_Btn amazoneBtn"> Order On </Link>
                <span className="orWithTeni">
                    Or direct with 
                    <Link to={product.linkTeni} className="teni_font">Teni</Link>
                </span>
            </div>
        </div>
    </div>
}

export default ProductsHorizontal;
