import React from 'react'
import { CartIcon } from 'shared/ui/cartIcon/cartIcon'
import { Button } from './style'

type Props = {}

const AddToCartButton = (props: Props) => {
    return (
        <Button>
            <CartIcon />
        </Button>
    )
}

export default AddToCartButton