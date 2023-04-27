import { ProductType } from 'shared/model/productType'
import React, { ReactElement } from 'react'
import { Wrapper, ProductImg, ProductInfo, ProductCalc, ProductCounter } from './style'
import { useDispatch } from 'react-redux'
import { clearProducts, minusProduct, plusProduct, removeProduct } from 'shared/api/cartSlice'

type Props = {
    product: ProductType,
    plus: ReactElement,
    minus: ReactElement,
    close: ReactElement,
}

const CartItem = ({ product, plus, minus, close }: Props) => {

    const dispatch = useDispatch()

    const handleDeleteProduct = (product: ProductType) => {
        dispatch(removeProduct(product))
    }
    const handleMinusProduct = (item: ProductType) => {
        dispatch(minusProduct(item))
    }
    const handlePlusProduct = (item: ProductType) => {
        dispatch(plusProduct(item))
    }

    return (
        <Wrapper>
            <ProductImg>
                <img src={product.imgUrl} alt='productImage' />
            </ProductImg>
            <ProductInfo>
                <div>{product.name}</div>
                <ProductCalc>
                    <ProductCounter>
                        <span onClick={() => handlePlusProduct(product)}>{plus}</span>
                        <span>{product.count}</span>
                        <span onClick={() => handleMinusProduct(product)}>{minus}</span>
                    </ProductCounter>
                    <div>$ {product.price * product.count}</div>
                </ProductCalc>
            </ProductInfo>
            <div onClick={() => handleDeleteProduct(product)}>{close}</div>
        </Wrapper>
    )
}
export default CartItem