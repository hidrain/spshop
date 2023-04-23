import { ProductType } from 'shared/model/productType'
import React from 'react'
import { Wrapper, ProductImg, ProductInfo } from './style'

type Props = {
    product: ProductType
}

const CartItem = ({ product }: Props) => {
    return (
        <Wrapper>
            <div></div>



            {/* <ProductImg>
                <img src={product.imgUrl} alt='productImage' />
            </ProductImg>
            <ProductInfo>
                <p>{product.name}</p>
                <CartButton />
                <span>$ {product.price}</span>
            </ProductInfo> */}
        </Wrapper>
    )
}
export default CartItem