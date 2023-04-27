import React from 'react'
import { useDispatch } from 'react-redux'
import { clearProducts, removeProduct } from 'shared/api/cartSlice'
import { ProductType } from 'shared/model/productType'
import { CloseIcon } from 'shared/ui/closeIcon/closeIcon'
import SvgButton from 'shared/ui/svgButton'

type Props = {
    item: ProductType,
}

const DeleteProduct = ({ item }: Props) => {

    const dispatch = useDispatch()

    const handleDeleteProduct = (item: ProductType, e: any) => {
        dispatch(clearProducts())
        console.log('DELETE')
    }


    return (
        <SvgButton count={item.count}>
            <CloseIcon />
        </SvgButton>
    )
}

export default DeleteProduct