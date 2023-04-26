import { ProductType } from 'shared/model/productType'
import React, { ReactElement } from 'react'
import { Wrapper, ProductImg, ProductInfo } from './style'
import { Link } from 'react-router-dom'

type Props = {
    product: ProductType,
    children: ReactElement,
}

const ProductPreview = ({ product, children }: Props) => {
    return (
        <Wrapper>
            <Link key={product.id} to={`/items/${product.id}`}>
                <ProductImg>
                    <img src={product.imgUrl} alt='productImage' />
                </ProductImg>
            </Link>
            <ProductInfo>
                <p>{product.name}</p>
                {children}
                <span>$ {product.price}</span>
            </ProductInfo>
        </Wrapper>
    )
}
export default ProductPreview