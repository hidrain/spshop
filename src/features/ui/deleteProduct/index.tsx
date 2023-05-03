import React from 'react'
import { useDispatch } from 'react-redux'
import { clearProducts } from 'shared/api/cartSlice'
import { ProductType } from 'shared/model/productType'
import { CloseIcon } from 'shared/ui/closeIcon/closeIcon'
import { DeleteButton } from './style'


type Props = {
    item: ProductType,
}

const DeleteProduct = ({ item }: Props) => {

    const dispatch = useDispatch()

    const handleDeleteProduct = (item: ProductType) => {
        dispatch(clearProducts())
    }


    return (
        <DeleteButton
            count={item.count}
            onClick={() => handleDeleteProduct(item)}
        >
            <CloseIcon />
        </DeleteButton>
    )
}

export default DeleteProduct