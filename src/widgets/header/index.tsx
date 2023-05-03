import React from 'react'
import { HeaderWrapper } from './style'
import Logo from 'shared/ui/logo/logo.svg'
import { Link } from 'react-router-dom'
import { CartWithCounter } from 'features/ui/cartWithCounter'

type Props = {}

const Header = (props: Props) => {

    return (
        <HeaderWrapper>
            <Link to='/'>
                <img src={Logo} alt='logo' />
            </Link>
            <CartWithCounter />
        </HeaderWrapper>
    )
}

export default Header