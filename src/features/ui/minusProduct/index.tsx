import React from 'react'
import { useDispatch } from 'react-redux'
import { minusProduct } from 'shared/api/cartSlice'
import { ProductType } from 'shared/model/productType'
import { Minus } from 'shared/ui/minus/minus'
import { MinusButton } from './style'

type Props = {
    item: ProductType,
}

const MinusProduct = ({ item }: Props) => {

    const dispatch = useDispatch()

    const handleMinusProduct = (item: ProductType) => {
        dispatch(minusProduct(item))
    }

    return (
        <MinusButton
            count={item.count}
            disabled={item.count === 1}
            onClick={() => handleMinusProduct(item)}
            isDisabled={item.count === 1}
        >
            <Minus />
        </MinusButton>
    )
}

export default MinusProduct