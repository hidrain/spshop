import React from 'react'
import { useDispatch } from 'react-redux'
import { minusProduct } from 'shared/api/cartSlice'
import { ProductType } from 'shared/model/productType'
import { Minus } from 'shared/ui/minus/minus'
import SvgButton from 'shared/ui/svgButton'

type Props = {
    item: ProductType,
}

const MinusProduct = ({ item }: Props) => {

    const dispatch = useDispatch()

    const handleMinusProduct = (item: ProductType) => {
        dispatch(minusProduct(item))
    }

    return (
        <SvgButton count={item.count}>
            <Minus />
        </SvgButton>
    )
}

export default MinusProduct