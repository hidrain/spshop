import CartItem from 'entities/cart/ui/cartItem'
import DeleteProduct from 'features/ui/deleteProduct'
import MinusProduct from 'features/ui/minusProduct'
import PlusProduct from 'features/ui/plusProduct'
import { useSelector } from 'react-redux'
import { selectCart } from 'shared/api/cartSlice'
import { Wrapper, CartWrapper, PriceWrapper } from './style'

const CartBlock = () => {

    const { products, totalPrice } = useSelector(selectCart)

    return (
        <Wrapper>
            <CartWrapper>
                <p>My basket</p>
                {products.map(product =>
                    <CartItem
                        product={product}
                        key={product.id}
                        plus={<PlusProduct item={product} />}
                        minus={<MinusProduct item={product} />}
                        close={<DeleteProduct item={product} />}
                    />
                )}
            </CartWrapper>
            <PriceWrapper>
                <div>
                    <p>Subtotal</p>
                    <span>$ {totalPrice}</span>
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
                    <span>$ {totalPrice + 250}</span>
                </div>
            </PriceWrapper>
        </Wrapper>
    )
}

export default CartBlock