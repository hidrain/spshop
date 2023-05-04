import CloseModal from 'features/ui/closeModal'
import React from 'react'
import CartBlock from 'widgets/cartBlock'
import { Wrapper } from './style'

type Props = {
    click: boolean,
    setClick: (click: boolean) => void
}

const ModalCartBlock = ({ setClick, click }: Props) => {

    return (
        <Wrapper>
            <CartBlock >
                <CloseModal click={click} setClick={setClick} />
            </CartBlock >
        </Wrapper>

    )
}

export default ModalCartBlock