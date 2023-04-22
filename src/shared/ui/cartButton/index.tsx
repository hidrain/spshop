import React from 'react'
import { CartIcon } from '../cartIcon/cartIcon'
import { Button } from './style'

type Props = {}

const CartButton = (props: Props) => {
    return (
        <Button>
            <CartIcon />
        </Button>
    )
}

export default CartButton