import React from 'react'
import { CloseIcon } from 'shared/ui/closeIcon/closeIcon'
import SvgButton from 'shared/ui/svgButton'

type Props = {}

const DeleteProduct = (props: Props) => {
    return (
        <SvgButton>
            <CloseIcon />
        </SvgButton>
    )
}

export default DeleteProduct