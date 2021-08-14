import React, { useState } from 'react'
import Pagination from '../common/Pagination'
import ProductsHorizontal from './../products/ProductsHorizontal';
import { productData } from '../products/ProductApiData';
function ProductListing() {

    const [products, setProducts] = useState(productData);

    return <section className="lstngPrdctSec mobileTopMargin">
        <div className="container">
            <div className="lstngPrdctCnt">

                <div className="lstingRaw">
                    {
                        products.map((product, index) => {
                            return <ProductsHorizontal product={product} />
                        })
                    }
                </div>

                <Pagination />
            </div>
        </div>
    </section>
}

export default ProductListing;
