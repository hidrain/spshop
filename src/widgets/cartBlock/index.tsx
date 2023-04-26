import CartItem from 'entities/cart/ui/cartItem'
import DeleteProduct from 'features/ui/deleteProduct'
import MinusProduct from 'features/ui/minusProduct/indext'
import PlusProduct from 'features/ui/plusProduct'
import React from 'react'
import { productAPI } from 'shared/api/productService'
import { Wrapper, CartWrapper, PriceWrapper } from './style'

const CartBlock = () => {

    const { data: products } = productAPI.useFetchAllProductsQuery(2)

    return (
        <Wrapper>
            <CartWrapper>
                <p>My basket</p>
                {products && products.map(product =>
                    <CartItem
                        product={product}
                        key={product.id}
                        plus={<PlusProduct />}
                        minus={<MinusProduct />}
                        close={<DeleteProduct />}
                    />
                )}
            </CartWrapper>
            <PriceWrapper>
                <div>
                    <p>Subtotal</p>
                    <span>$ 1850</span>
                </div>
                <div>
                    <p>Tax</p>
                    <span>$ 100</span>
                </div>
                <div>
                    <p>Ship</p>
                    <span>$ 150</span>
                </div>
                <div>
                    <p>Total</p>
                    <span>$ 2100</span>
                </div>
            </PriceWrapper>
        </Wrapper>
    )
}

export default CartBlock