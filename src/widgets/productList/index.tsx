import React from 'react'
import ProductPreview from 'entities/product/ui/productPreview'
import { productAPI } from 'shared/api/productService'
import { Wrapper } from './style'
import { skeletons } from './lib/skeletons'
import CartButton from 'features/ui/cartButton'

type Props = {}

const ProductList = (props: Props) => {

    const { data: products, error, isLoading } = productAPI.useFetchAllProductsQuery(6)

    return (
        <Wrapper>
            {isLoading && skeletons}
            {products && products.map(product =>
                <ProductPreview product={product} key={product.id} children={<CartButton />} />
            )}
        </Wrapper>
    )
}

export default ProductList