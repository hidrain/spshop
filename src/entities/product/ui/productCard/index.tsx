import { ProductType } from 'entities/product/model/productType'
import React from 'react'
import CartButton from 'shared/ui/cartButton'
import { CardWrapper, ProductImg, ProductInfo } from './style'

type Props = {
    product: ProductType
}

const ProductCard = ({ product }: Props) => {
    return (
        <CardWrapper>
            <ProductImg>
                <img src={product.imgUrl} alt='productImage' />
            </ProductImg>
            <ProductInfo>
                <p>{product.name}</p>
                <CartButton />
                <span>$ {product.price}</span>
            </ProductInfo>
        </CardWrapper>
    )
}
export default ProductCard