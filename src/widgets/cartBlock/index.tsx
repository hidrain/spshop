import CartItem from 'entities/cart/ui/cartItem'
import DeleteProduct from 'features/ui/deleteProduct'
import MinusProduct from 'features/ui/minusProduct'
import PlusProduct from 'features/ui/plusProduct'
import { useSelector } from 'react-redux'
import { selectCart } from 'shared/api/cartSlice'
import { CartWrapper, PriceWrapper, Separater } from './style'

type Props = {
    children?: React.ReactElement
}

const CartBlock = ({ children }: Props) => {

    const { products, totalPrice } = useSelector(selectCart)

    return (
        <>
            {children}
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
            <Separater />
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
        </>
    )
}

export default CartBlock