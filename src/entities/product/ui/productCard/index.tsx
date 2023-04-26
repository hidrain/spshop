import { ProductType } from 'shared/model/productType'
import React, { ReactElement } from 'react'
import { ProductImg, ProductInfo, Wrapper, PriceWrapper } from './style'

type Props = {
    product: ProductType,
    children: ReactElement,
}

const ProductCard = ({ product, children }: Props) => {
    return (
        <Wrapper>
            <ProductImg>
                <img src={product.imgUrl} alt='productImage' />
            </ProductImg>
            <ProductInfo>
                <p>{product.name}</p>
                <span>{product.modelNumber}</span>
            </ProductInfo>
            <PriceWrapper>
                {children}
                <span>$ {product.price}</span>
            </PriceWrapper>
        </Wrapper>
    )
}
export default ProductCard