import React, { useEffect, useState } from 'react'
import { BurgerCart, HeaderWrapper } from './style'
import Logo from 'shared/ui/logo/logo.svg'
import { Link } from 'react-router-dom'
import { CartWithCounter } from 'features/ui/cartWithCounter'
import ModalCartBlock from 'widgets/modalCartBlock'
import { selectCart } from 'shared/api/cartSlice'
import { useSelector } from 'react-redux'

type Props = {}

const Header = (props: Props) => {

    const [click, setClick] = useState(false)
    const { products } = useSelector(selectCart)

    console.log(click)
    console.log(products.length)

    useEffect(() => {
        if (products.length === 0) {
            setClick(false)
        }
    }, [products.length])



    return (
        <HeaderWrapper>
            <Link to='/'>
                <img src={Logo} alt='logo' />
            </Link>
            <CartWithCounter click={click} setClick={setClick} />
            {products.length > 0 && (
                <BurgerCart click={click} >
                    {click === true && products.length > 0
                        ? <ModalCartBlock setClick={setClick} click={click} />
                        : null
                    }
                </BurgerCart>
            )}
        </HeaderWrapper>
    )
}

export default Header

