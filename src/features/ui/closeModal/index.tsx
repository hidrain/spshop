import React from 'react'
import { CloseIcon } from 'shared/ui/closeIcon/closeIcon'
import { CloseModalButton } from './style'

type Props = {
    click: boolean,
    setClick: (click: boolean) => void
}

const CloseModal = ({ setClick, click }: Props) => {

    return (
        <CloseModalButton
            onClick={() => setClick(!click)}
        >
            <CloseIcon />
        </CloseModalButton>
    )
}

export default CloseModal

