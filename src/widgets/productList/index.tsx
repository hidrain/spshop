import React from 'react'
import ProductCard from 'entities/product/ui/productCard'
import { productAPI } from './api/productService'
import { Wrapper } from './style'
import { skeletons } from './lib/skeletons'

type Props = {}

const ProductList = (props: Props) => {

    const { data: products, error, isLoading } = productAPI.useFetchAllProductsQuery(6)

    return (
        <Wrapper>
            {isLoading && skeletons}
            {products && products.map(product =>
                <ProductCard product={product} key={product.id} />
            )}
        </Wrapper>
    )
}

export default ProductList