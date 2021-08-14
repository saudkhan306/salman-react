import React from 'react'
import { Link } from 'react-router-dom';

function SubHeader({headingText}) {
    return <section className="secBnr">
        <span className="backBnt">
            <Link to="/"><i className="fas fa-arrow-left"></i></Link>
        </span>
        <div className="container">
            <div className="secBnrHdng txtCenter">
                <h1 className="mainHdng">{headingText}</h1>
                <p className="brdCrmLnks">
                    <Link to="/">Home</Link>
                    <Link to="/product-listing">Product Listing</Link>
                </p>
            </div>
        </div>
    </section>
}

export default SubHeader;
