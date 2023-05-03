import React from 'react'
import { Plus } from 'shared/ui/plus/plus'
import { ProductType } from 'shared/model/productType'
import { useDispatch } from 'react-redux'
import { plusProduct } from 'shared/api/cartSlice'
import { PlusButton } from './style'

type Props = {
    item: ProductType,
}

const PlusProduct = ({ item }: Props) => {

    const dispatch = useDispatch()

    const handlePlusProduct = (item: ProductType) => {
        dispatch(plusProduct(item))
    }

    return (
        <PlusButton
            count={item.count}
            onClick={() => handlePlusProduct(item)}
        >
            <Plus />
        </PlusButton>
    )
}

export default PlusProduct