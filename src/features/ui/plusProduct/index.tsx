import React from 'react'
import { Plus } from 'shared/ui/plus/plus'
import SvgButton from 'shared/ui/svgButton'
import { ProductType } from 'shared/model/productType'
import { useDispatch } from 'react-redux'
import { plusProduct } from 'shared/api/cartSlice'


type Props = {
    item: ProductType,
}

const PlusProduct = ({ item }: Props) => {

    const dispatch = useDispatch()

    const handlePlusProduct = (item: ProductType) => {
        dispatch(plusProduct(item))
    }

    return (
        <SvgButton count={item.count}>
            <Plus />
        </SvgButton>
    )
}

export default PlusProduct