import { ProductType } from 'shared/model/productType'
import React, { ReactElement } from 'react'
import { Wrapper, ProductImg, ProductInfo, ProductCalc, ProductCounter } from './style'

type Props = {
    product: ProductType,
    plus: ReactElement,
    minus: ReactElement,
    close: ReactElement,
}

const CartItem = ({ product, plus, minus, close }: Props) => {

    return (
        <Wrapper>
            <ProductImg>
                <img src={product.imgUrl} alt='productImage' />
            </ProductImg>
            <ProductInfo>
                <div>{product.name}</div>
                <ProductCalc>
                    <ProductCounter>
                        <span>{plus}</span>
                        <span>{product.count}</span>
                        <span>{minus}</span>
                    </ProductCounter>
                    <div>$ {product.price * product.count}</div>
                </ProductCalc>
            </ProductInfo>
            <div>{close}</div>
        </Wrapper>
    )
}
export default CartItem