import React, { useState } from 'react'
import Pagination from '../common/Pagination'
import ProductsHorizontal from './../products/ProductsHorizontal';
import {allProducts} from '../../data/products';
function ProductListing() {
    console.log(allProducts)
    const productData = allProducts.slice(0,10)
    console.log(productData)
    const [products, setProducts] = useState(productData);

    return <section className="lstngPrdctSec mobileTopMargin">
        <div className="container">
            <div className="lstngPrdctCnt">

                <div className="lstingRaw">
                    {
                        products.map((product, index) => {
                            return <ProductsHorizontal key={index} product={product} index={index}/>
                        })
                    }
                </div>

                <Pagination />
            </div>
        </div>
    </section>
}

export default ProductListing;
