import React from 'react'
import ProductCard from 'entities/product/ui/productCard'
import { productAPI } from './api/productService'
import { Wrapper } from './style'
import Skeleton from 'shared/ui/skeleton'

type Props = {}

const ProductList = (props: Props) => {

    const { data: products, error, isLoading } = productAPI.useFetchAllProductsQuery(6)

    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

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