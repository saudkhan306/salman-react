import React from 'react'
import { Link } from 'react-router-dom';
import SubHeader from '../common/SubHeader'
import TredingProducts from '../home-page/TredingProducts';
import ProductListing from '../product-listing/ProductListing';
import QuateBlock from './../common/QuateBlock'

const pageHeading = "Men's Wear";

function Listing() {
    return (
        <>
            <SubHeader headingText={pageHeading} />
            <ProductListing />
            <QuateBlock />
            <TredingProducts />
        </>
    )
}

export default Listing;
