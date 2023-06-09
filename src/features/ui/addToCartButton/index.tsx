import { useDispatch } from 'react-redux'
import { addProduct } from 'shared/api/cartSlice'
import { ProductType } from 'shared/model/productType'
import { CartIcon } from 'shared/ui/cartIcon/cartIcon'
import { Button } from './style'

type Props = {
    item: ProductType,
}

const AddToCartButton = ({ item }: Props) => {

    const dispatch = useDispatch()
    const handleAddProduct = (item: ProductType, e: any) => {
        dispatch(addProduct(item))
    }

    return (
        <Button onClick={(e) => handleAddProduct(item, e)} >
            <CartIcon />
        </Button>
    )
}

export default AddToCartButton