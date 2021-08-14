import React from 'react'
import { Link } from 'react-router-dom';
import SubHeader from '../common/SubHeader'
import TredingProducts from '../home-page/TredingProducts';
import ProductDetail from '../product-detail/ProductDetail';

const pageHeading = "Men's Reglan T-shirt";

function Details() {
    return (
        <>
            <SubHeader headingText={pageHeading} />
            <ProductDetail />
            <TredingProducts />
        </>
    )
}

export default Details;
