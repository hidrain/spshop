import React from 'react'
import { HeaderWrapper } from './style'
import Logo from 'shared/ui/logo/logo.svg'
import { Link } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
    return (
        <HeaderWrapper>
            <Link to='/'>
                <img src={Logo} alt='logo' />
            </Link>
        </HeaderWrapper>
    )
}

export default Header